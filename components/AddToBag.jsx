"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../app/lib/sanity";
import { ShoppingBag } from "lucide-react";

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
	};
	return (
		<Button
			size="lg"
			onClick={() => {
				addItem(product), handleCartClick();
			}}
			className="py-[10px] rounded-full text-sm flex justify-center items-center border w-full gap-1 flex-1"
		>
			<ShoppingBag size={18} /> Add To Cart
		</Button>
	);
}
