"use client";
import React from "react";
import Masonry from "react-masonry-css";

import Image from "next/image";

const Gallery = ({ title, titleStyle, bgColor, data }) => {
	const breakpoints = {
		default: 3,
		1100: 2,
		500: 1,
	};
	return (
		<div className={bgColor}>
			<div className="py-12 md:py-14 lg:pt-16 lg:pb-32 md:container">
				<div className="ml-5 mr-5">
					<h2
						className={`font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize ${titleStyle}`}
					>
						{title}
					</h2>
					{/* <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8 md:col-span-1"> */}
					<Masonry
						breakpointCols={breakpoints}
						className="my-masonry-grid mt-8"
						columnClassName="my-masonry-grid_column"
					>
						{data.map((item) => {
							return (
								<div className="pics" key={item.id}>
									<Image
										src={item.imgSrc}
										alt={item.imgSrc}
										width={100}
										height={100}
										className="w-full h-auto flex"
										unoptimized
										priority
									/>
								</div>
							);
						})}
					</Masonry>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
