import { Router } from "express";
import { getOrders, getOrderById, updateOrder, createOrder, deleteOrder } from "../Controllers/ordersController.js";

const orderRoutes = Router();

orderRoutes.get('/', getOrders);
orderRoutes.get('/:id', getOrderById);
orderRoutes.post('/', createOrder);
orderRoutes.put('/:id', updateOrder);
orderRoutes.delete('/:id', deleteOrder);

export default orderRoutes;