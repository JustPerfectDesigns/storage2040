import React from "react";
import Image from "next/image";
import Link from "next/link";

import c1 from "../public/images/container1.webp";

const ContainerCategory = () => {
	let data = [
		{
			id: 1,
			imgSrc: c1,
			title: "20’ New Shipping Containers",
			link: "/new-20-foot",
		},
		{
			id: 2,
			imgSrc: c1,
			title: "20’ Used Shipping Containers",
			link: "/used-20-foot",
		},
		{
			id: 3,
			imgSrc: c1,
			title: "40’ New Shipping Containers",
			link: "/new-40-foot",
		},
		{
			id: 4,
			imgSrc: c1,
			title: "40’ Used Shipping Containers",
			link: "/used-40-foot",
		},
		{
			id: 5,
			imgSrc: c1,
			title: "45’ New Shipping Containers",
			link: "/new-45-foot",
		},
		{
			id: 6,
			imgSrc: c1,
			title: "45’ Used Shipping Containers",
			link: "/used-45-foot",
		},
	];

	return (
		<div className="bg-slate-50">
			<div className="mt-12 py-12 md:py-16 lg:py-32 md:container">
				<div className="ml-5 mr-5">
					<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize">
						New & Used Shipping Container Sales
					</h2>

					<div className="mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
						{data.map((item) => {
							return (
								<div key={item.id}>
									<div className="w-full max-w-[519px] h-52 lg:h-60 overflow-hidden">
										<Image
											width={100}
											height={100}
											src={item.imgSrc}
											alt="container"
											className="w-full -mt-16"
											unoptimized
										/>
									</div>
									<div className="text-base border-t border-slate-100 py-5 px-4 bg-white flex justify-between items-center">
										<h4 className="flex-1 text-[#14213F] font-bold">
											{item.title}
										</h4>
										<Link
											href={item.link}
											className="bg-orange-600 py-[10px] px-3 rounded-full text-sm font-semibold text-white flex justify-center items-center"
										>
											Shop Now
										</Link>
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
