"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../app/lib/sanity";
// import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
	currency,
	description,
	image,
	name,
	price,
	price_id,
}) {
	const { checkoutSingleItem } = useShoppingCart();

	function buyNow(priceId) {
		checkoutSingleItem(priceId);
	}

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
			variant="outline"
			onClick={() => {
				buyNow(product.price_id);
			}}
			className="bg-orange-600 py-[10px] px-5 rounded-full text-sm text-white flex justify-center items-center w-full"
		>
			Checkout Now
		</Button>
	);
}
