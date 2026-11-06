import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getCartItems = async (req: Request, res: Response) => {
  try {
    const { user } = req;

    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    res.status(200).json(cartItems);
    return;
  } catch (error) {
    res.status(500).json({ messaege: "Erro no servidor" });
    return;
  }
};

export const createCartItem = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { productId } = req.body;

    if (!productId) {
      res.status(400).json({ message: "productId é obrigatório" });
      return;
    }

    const existItem = await prisma.cartItem.findFirst({
      where: {
        productId: productId,
        userId: user.id,
      },
    });

    let cartItem;

    if (existItem) {
      cartItem = await prisma.cartItem.update({
        where: { id: existItem.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      cartItem = await prisma.cartItem.create({
        data: {
          product: { connect: { id: productId } },
          user: { connect: { id: user.id } },
        },
      });
    }

    const statusCode = cartItem.quantity === 1 ? 201 : 200;

    res.status(statusCode).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar item no carrinho" });
  }
};
