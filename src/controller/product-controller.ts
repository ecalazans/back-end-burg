import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      res.status(404).json({ message: "Não há produtos cadastrados" });
    }

    res.status(200).json(products);
    return;
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const deleteProduct = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { user } = req;
    const { id } = req.params;

    if (!user.admin) {
      res.status(401).json({ message: "Usuário não autorizado" });
      return;
    }

    if (!id) {
      res.status(400).json({ message: "ID não encontrado" });
      return;
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });

    if (!deletedProduct) {
      res.status(404).json({ messege: "Erro ao deletar o produto" });
      return;
    }

    res.status(200).json(id);
    return;
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ messege: "Produto não encontrado" });
      return;
    }

    res.status(500).json({ messege: "Erro no servidor" });
    return;
  }
};
