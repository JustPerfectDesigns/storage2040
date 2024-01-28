"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../app/lib/sanity";

export default function AddToBag({
	currency,
	description,
	image,
	name,
	price,
	price_id,
}) {
	const { addItem, handleCartClick } = useShoppingCart();

	const product = {
		name: name,
		description: description,
		price: price,
		currency: currency,
		image: urlFor(image).url(),
		price_id: price_id,
		// id: "dhdjsa",
	};
	return (
		<Button
			onClick={() => {
				addItem(product), handleCartClick();
			}}
			className="py-[10px] px-5 rounded-full text-sm flex justify-center items-center border w-full"
		>
			Add To Cart
		</Button>
	);
}
