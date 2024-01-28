import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { client } from "@/app/lib/sanity";
import AddToBag from "./AddToBag";
import CheckoutNow from "./CheckoutNow";

async function getData() {
	const query = `*[_type == "product"][0...6] | order(_createdAt desc) {
		_id,
		price,
		name,
		description,
		"slug": slug.current,
		"categoryName": category->name,
		"imageUrl": images[0].asset->url
	}`;

	const data = await client.fetch(query);

	return data;
}

const ContainerCategory = async () => {
	const data = await getData();
	// let data = [
	// 	{
	// 		id: 1,
	// 		imgSrc: sale5,
	// 		title: "25ft Used Double Door Container",
	// 		link: "/new-20-foot",
	// 	},
	// 	{
	// 		id: 2,
	// 		imgSrc: sale2,
	// 		title: "20ft New Front & Side Door Container",
	// 		link: "/used-20-foot",
	// 	},
	// 	{
	// 		id: 3,
	// 		imgSrc: sale3,
	// 		title: "40ft New Standard Shipping Container",
	// 		link: "/new-40-foot",
	// 	},
	// 	{
	// 		id: 4,
	// 		imgSrc: sale4,
	// 		title: "40ft Used Standard Shipping Container",
	// 		link: "/used-40-foot",
	// 	},
	// 	{
	// 		id: 5,
	// 		imgSrc: sale1,
	// 		title: "25ft Brand New Double Door Container",
	// 		link: "/new-45-foot",
	// 	},
	// 	{
	// 		id: 6,
	// 		imgSrc: sale6,
	// 		title: "45’ Front Door Shipping Container",
	// 		link: "/used-45-foot",
	// 	},
	// ];

	return (
		<div className="" id="containers">
			<div className="mt-12 py-12 md:py-16 lg:py-32 md:container">
				<div className="ml-5 mr-5">
					<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto">
						Shop Our Latest Used & New Containers
					</h2>

					<div className="mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
						{data.map((item) => {
							return (
								<div key={item._id}>
									<div className="w-full max-w-[500px] h-52 lg:h-[280px] overflow-hidden border-[1.5px] bg-[#F2F2F2] border-[#F2F2F2] rounded-2xl relative">
										<Link href={`/product/${item.slug}`}>
											<Image
												width={100}
												height={100}
												src={item.imageUrl}
												alt="container"
												className="w-full h-full object-cover object-center"
												// loading="lazy"
												priority
												unoptimized
											/>
										</Link>
										<Link
											href={`/${item.categoryName}`}
											className="text-[.75rem] font-semibold text-white px-3 rounded-full py-[.4rem] bg-orange-600/70 flex justify-center items-center absolute top-2 right-2 hover:bg-orange-600 transition-all cursor-pointer"
										>
											{item.categoryName}
										</Link>
									</div>
									<div className="flex flex-col gap-4">
										<div className="pt-5 bg-white flex justify-between items-center">
											<Link href={`/product/${item.slug}`}>
												<h4 className="flex-1 text-[#14213F] font-bold text-lg lg:text-xl">
													{item.name}
												</h4>
											</Link>
										</div>

										<div className="flex justify-between items-center">
											<span className="flex items-center gap-2 text-sm">
												<Star size={18} />{" "}
												<span className="font-medium text-[#8e8d8d]">
													5.0 (1.2k Reviews)
												</span>
											</span>
											<h3 className="text-[22px] lg:text-2xl font-semibold">
												${item.price}
											</h3>
										</div>

										<div className="flex justify-between items-center gap-2">
											{/* <Button
												// href={item.link}
												variant="ghost"
												size="lg"
												className="py-[10px] px-5 rounded-full text-sm flex justify-center items-center border w-full"
											>
												Add to Cart
											</Button>
											<Button
												// href={item.link}
												size="lg"
												className="bg-orange-600 py-[10px] px-5 rounded-full text-sm text-white flex justify-center items-center w-full"
											>
												Buy Now
											</Button> */}
											<AddToBag
												currency="USD"
												description={item.description} // Use item.description
												image={item.imageUrl} // Use item.imageUrl
												name={item.name}
												price={item.price}
												key={item._id}
												price_id={item.price_id}
											/>
											{/* <Button>Add to Cart</Button> */}
											<CheckoutNow
												currency="USD"
												description={item.description} // Use item.description
												image={item.imageUrl} // Use item.imageUrl
												name={item.name}
												price={item.price}
												key={item._id}
												price_id={item.price_id}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContainerCategory;
