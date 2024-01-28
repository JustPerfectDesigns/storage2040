import React from "react";
import { client, urlFor } from "../app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToBag from "@/components/AddToBag";
import CheckoutNow from "@/components/CheckoutNow";

async function getData(category) {
	const query = `*[_type == "product" && category->name == "${category}"][0...3] {
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      description,
      "slug": slug.current,
      "category": category->{name},
    }`;

	const data = await client.fetch(query);

	return data;
}

export const dynamic = "force-dynamic";

export default async function SimilarItems({ category }) {
	// Check if category is defined
	if (!category) {
		return <div>No category specified</div>;
	}

	const data = await getData(category);

	return (
		<div>
			<div className="" id="containers">
				<div className="mt-12 py-12 md:py-16 lg:py-32 md:container">
					<div className="ml-5 mr-5">
						<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto">
							Shop Similar Products
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
													className="w-full"
													// loading="lazy"
													priority
													unoptimized
												/>
											</Link>
											<Link
												href={`/${item.category.name}`}
												className="text-[.75rem] font-semibold text-white px-3 rounded-full py-[.4rem] bg-orange-600/70 flex justify-center items-center absolute top-2 right-2 hover:bg-orange-600 transition-all cursor-pointer"
											>
												{item.category.name}
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
		</div>
	);
}
