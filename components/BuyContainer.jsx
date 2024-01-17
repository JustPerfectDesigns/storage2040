import React from "react";
import Image from "next/image";
import Link from "next/link";

import sale1 from "../public/images/sale1.png";
import sale2 from "../public/images/sale2.png";
import sale3 from "../public/images/sale3.jpeg";
import sale4 from "../public/images/sale4.jpg";
import sale5 from "../public/images/sale5.jpg";
import sale6 from "../public/images/sale6.jpg";

import { Button } from "./ui/button";
import { Star } from "lucide-react";

const BuyContainer = () => {
	let data = [
		{
			id: 1,
			imgSrc: sale1,
			title: "25ft Used Double Door Container",
			link: "/new-20-foot",
		},
		{
			id: 2,
			imgSrc: sale2,
			title: "20ft New Front & Side Door Container",
			link: "/used-20-foot",
		},
		{
			id: 3,
			imgSrc: sale3,
			title: "40ft New Standard Shipping Container",
			link: "/new-40-foot",
		},
		{
			id: 4,
			imgSrc: sale4,
			title: "40ft Used Standard Shipping Container",
			link: "/used-40-foot",
		},
		{
			id: 5,
			imgSrc: sale5,
			title: "25ft Brand New Double Door Container",
			link: "/new-45-foot",
		},
		{
			id: 6,
			imgSrc: sale6,
			title: "45’ Front Door Shipping Container",
			link: "/used-45-foot",
		},
	];

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
								<div key={item.id}>
									<div className="w-full max-w-[500px] h-52 lg:h-[280px] overflow-hidden border-[1.5px] bg-[#F2F2F2] border-[#F2F2F2] rounded-2xl">
										<Image
											width={100}
											height={100}
											src={item.imgSrc}
											alt="container"
											className="w-full"
											// loading="lazy"
											priority
											unoptimized
										/>
									</div>
									<div className="flex flex-col gap-4">
										<div className="pt-5 bg-white flex justify-between items-center">
											<h4 className="flex-1 text-[#14213F] font-bold text-lg lg:text-xl">
												{item.title}
											</h4>
										</div>

										<div className="flex justify-between items-center">
											<span className="flex items-center gap-2 text-sm">
												<Star size={18} />{" "}
												<span className="font-medium text-[#8e8d8d]">
													5.0 (1.2k Reviews)
												</span>
											</span>
											<h3 className="text-[22px] lg:text-2xl font-semibold">
												$12,000.00
											</h3>
										</div>

										<div className="flex justify-between items-center gap-2">
											<Button
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
											</Button>
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

export default BuyContainer;
