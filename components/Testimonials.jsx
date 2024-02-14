"use client";
import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = ({ style }) => {
	const data = [
		{
			quote:
				"We were looking to build a storage facility from 20 x 20 ft containers and were having a hard time finding a supplier that had a good selection of containers with a reasonable discount for a bulk order. Luckily, we got in touch with Viva Containers, which offered us a much better price and managed to deliver all containers within 3 days. So happy.",
			name: "Jerry Lewis",
			date: "May 16",
		},
		{
			quote:
				"We were looking to build a storage facility from 20 x 20 ft containers and were having a hard time finding a supplier that had a good selection of containers with a reasonable discount for a bulk order. Luckily, we got in touch with Viva Containers, which offered us a much better price and managed to deliver all containers within 3 days. So happy.",
			name: "Vicky Jones",
			date: "June 3",
		},
		{
			quote:
				"We were looking to build a storage facility from 20 x 20 ft containers and were having a hard time finding a supplier that had a good selection of containers with a reasonable discount for a bulk order. Luckily, we got in touch with Viva Containers, which offered us a much better price and managed to deliver all containers within 3 days. So happy.",
			name: "Jerry Lewis",
			date: "April 22",
		},
	];
	return (
		<div
			className={`ml-5 mr-5 md:container lg:w-[70%] md:ml-auto md:mr-auto ${style}`}
		>
			{/* <div> */}
			<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl text-center md:max-w-96 md:ml-auto md:mr-auto lg:max-w-[500px] text-[#14213F] capitalize">
				Testimonials From our trusted customers
			</h2>

			<div className="mt-8">
				<Carousel>
					<CarouselContent>
						{data.map((item, index) => {
							return (
								<CarouselItem key={index}>
									<div className="bg-slate-50 py-10 px-5 md:py-12 md:px-14 lg:py-20 lg:px-16 rounded-xl md:rounded-full flex flex-col justify-center items-center gap-5">
										<div className="flex gap-[6px] text-orange-600">
											<Star size={20} />
											<Star size={20} />
											<Star size={20} />
											<Star size={20} />
											<Star size={20} />
										</div>
										<p className="text-[#474545] font-semibold text-center italic text-lg md:text-base lg:text-lg lg:mt-5 lg:leading-9">
											&quot;{item.quote}&quot;
										</p>
										<div className="border-t border-slate-200 w-full mt-2 lg:mt-5 lg:w-2/4">
											<div className="flex justify-center items-center gap-2 mt-5 lg:mt-8">
												<span className="text-[#14213F] font-semibold text-sm">
													{item.name}
												</span>
												<span className="text-[#828282] font-normal text-sm">
													{item.date}
												</span>
											</div>
										</div>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious className="bg-orange-600 h-11 w-11 text-white rounded-xl absolute left-[38%] bottom-[-5rem] md:left-[44%] lg:left-[45%]" />
					<CarouselNext className="bg-orange-600 h-11 w-11 text-white rounded-xl absolute left-[52%] bottom-[-5rem] md:left-[51%] lg:left-[50%]" />
				</Carousel>

				{/* <div className="flex justify-center items-center gap-[10px] mt-8">
					<div className="p-[8px] bg-orange-600 text-white rounded-xl">
						<ChevronLeft size={30} />
					</div>
					<div className="p-[8px] bg-orange-600 text-white rounded-xl">
						<ChevronRight size={30} />
					</div>
				</div> */}
			</div>
			{/* </div> */}
		</div>
	);
};

export default Testimonials;
