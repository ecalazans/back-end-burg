import { Router } from "express";
import { auth, login, logout, register } from "./controller/user-controller.js";
import { autMiddleware } from "./middlewares/auth.js";
import { getProducts } from "./controller/product-controller.js";

export const router = Router();

// Rotas de usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", autMiddleware, auth);
router.post("/logout", autMiddleware, logout);

// Rotas de produto
router.get("/get-products", getProducts);
