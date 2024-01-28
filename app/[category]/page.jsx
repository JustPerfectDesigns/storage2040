import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import React from "react";

import CategoryHero from "@/components/CategoryHero";

import g1 from "../../public/images/g1.png";
import g2 from "../../public/images/g2.png";
import g3 from "../../public/images/g3.png";
import g4 from "../../public/images/g4.png";
import g5 from "../../public/images/g5.png";
import g6 from "../../public/images/g6.png";
import g7 from "../../public/images/g7.png";
import g8 from "../../public/images/g8.png";
import ContainerDetails from "@/components/ContainerDetails";

import bg from "../../public/images/g4.png";
import BuyContainer from "@/components/BuyContainer";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToBag from "@/components/AddToBag";
import CheckoutNow from "@/components/CheckoutNow";

async function getData(category) {
	const query = `*[_type == "product" && category->name == "${category}"] {
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
		description,
      "slug": slug.current,
      "category": category->{name, catText, catDesc, bigImage},
    }`;

	const data = await client.fetch(query);

	return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
	const data = await getData(params.category);

	const titleStyle = "text-center md:ml-auto md:mr-auto";

	const galleryData = [
		{
			id: 1,
			imgSrc: g1,
		},
		{
			id: 2,
			imgSrc: g2,
		},
		{
			id: 3,
			imgSrc: g7,
		},
		{
			id: 4,
			imgSrc: g3,
		},
		{
			id: 7,
			imgSrc: g8,
		},
		{
			id: 5,
			imgSrc: g4,
		},
		{
			id: 6,
			imgSrc: g5,
		},
		{
			id: 8,
			imgSrc: g6,
		},
	];

	return (
		<div>
			<CategoryHero
				image={urlFor(data[0]?.category.bigImage).url()}
				title={data[0]?.category.catText}
			/>
			<ContainerDetails
				title={data[0]?.category.name}
				description={data[0]?.category.catDesc}
			/>
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
										<div className="w-full max-w-[500px] h-52 lg:h-[280px] overflow-hidden border-[1.5px] bg-[#F2F2F2] border-[#F2F2F2] rounded-2xl">
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
			<Gallery
				title={`What Has been and can be done with ${data[0]?.category.name}`}
				titleStyle={titleStyle}
				data={galleryData}
			/>
			<Testimonials />
		</div>
	);
}
