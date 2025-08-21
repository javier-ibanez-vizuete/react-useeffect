import "./CartSummary.css";

import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const INITIAL_CART = [
	{ id: "a1", name: "Mouse", price: 15, qty: 2 },
	{ id: "b2", name: "Keyboard", price: 35, qty: 1 },
	{ id: "c3", name: "Monitor", price: 199, qty: 1 },
	{ id: "d4", name: "USB Cable", price: 5, qty: 3 },
	{ id: "e5", name: "Laptop Stand", price: 45, qty: 1 },
	{ id: "f6", name: "Headphones", price: 60, qty: 2 },
	{ id: "g7", name: "Webcam", price: 80, qty: 1 },
	{ id: "h8", name: "External SSD", price: 120, qty: 1 },
	{ id: "i9", name: "Desk Lamp", price: 25, qty: 1 },
	{ id: "j10", name: "Office Chair", price: 150, qty: 1 },
];

export const CartSummary = () => {
	const [cart, setCart] = useState(INITIAL_CART);
	const [summary, setSummary] = useState({ subtotal: 0, tax: 0, total: 0 });

	const decreaseQuantityButton = (id) => {
		const productSelected = cart.find((product) => product.id === id);
		if (!productSelected) return;

		const restProduct = cart.filter((product) => product.id !== id);
		if (productSelected.qty === 1) return setCart([...restProduct]);

		const newProduct = { ...productSelected, qty: productSelected.qty - 1 };
		return setCart([...restProduct, newProduct]);
	};

	const increaseQuantityButton = (id) => {
		const productSelected = cart.find((product) => product.id === id);
		if (!productSelected) return;

		const restProduct = cart.filter((product) => product.id !== id);

		const newProduct = { ...productSelected, qty: productSelected.qty + 1 };
		return setCart([...restProduct, newProduct]);
	};

	useEffect(() => {
		setSummary(() => {
			const subtotal = cart.reduce((acc, product) => {
				const totalSubprice = product.price * product.qty;
				return totalSubprice + acc;
			}, 0);
			const tax = cart.reduce((acc, product) => {
				const taxPrice = product.price * product.qty * 0.21;
				return taxPrice + acc;
			}, 0);
			const total = cart.reduce((acc, product) => {
				const totalPrice = product.price * product.qty * 1.21;
				return totalPrice + acc;
			}, 0);
			return { subtotal, tax, total };
		});
	}, [cart]);

	if (!cart.length) return <h3>No hay Productos en el Carrito</h3>;
	return (
		<div className="cart-summary-container">
			<div className="cart-products-container">
				{cart
					.sort((productA, productB) => productA.price - productB.price)
					.map((product) => (
						<div key={product.id} className="product-card">
							<h4 className="product-name">{product.name}</h4>
							<h3 className="product-price">{product.price}€</h3>
							<div className="btns-quantity-container">
								{product.qty > 0 && (
									<Button
										className={"btn-qty"}
										handleButton={() => decreaseQuantityButton(product.id)}
									>
										-
									</Button>
								)}
								<p>{product.qty}</p>
								<Button className={"btn-qty"} handleButton={() => increaseQuantityButton(product.id)}>
									+
								</Button>
							</div>
						</div>
					))}
			</div>
			<div className="summary-container">
				<h4>Subtotal: {summary.subtotal.toFixed(2)}€</h4>
				<h4>Taxes: {summary.tax.toFixed(2)}€</h4>
				<h4>Total Price: {summary.total.toFixed(2)}€</h4>
			</div>
		</div>
	);
};
