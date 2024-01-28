"use client";

import Image from "next/image";
import { urlFor } from "../app/lib/sanity";
import { useState } from "react";

export default function ImageGallery({ images }) {
	const [bigImage, setBigImage] = useState(images[0]);
	const [activeImage, setActiveImage] = useState(0);

	const handleSmallImageClick = (image, idx) => {
		setBigImage(image);
		setActiveImage(idx);
	};

	return (
		<div className="flex gap-8 flex-col-reverse">
			<div className="md:flex gap-3 flex-wrap hidden">
				{images.map((image, idx) => (
					<div
						key={idx}
						className={`overflow-hidden rounded-lg bg-gray-100 lg:h-[full] ${
							activeImage === idx ? "border-[3px] border-orange-600" : ""
						}`}
					>
						<Image
							src={urlFor(image).url()}
							width={80}
							height={80}
							alt="photo"
							className="h-full w-full object-cover object-center cursor-pointer"
							onClick={() => handleSmallImageClick(image, idx)}
						/>
					</div>
				))}
			</div>
			<div className="flex gap-[.6rem] flex-wrap md:hidden">
				{images.map((image, idx) => (
					<div
						key={idx}
						className={`overflow-hidden rounded-lg bg-gray-100 lg:h-[full] ${
							activeImage === idx ? "border-[3px] border-orange-600" : ""
						}`}
					>
						<Image
							src={urlFor(image).url()}
							width={45}
							height={45}
							alt="photo"
							className="h-full w-full object-cover object-center cursor-pointer"
							onClick={() => handleSmallImageClick(image, idx)}
						/>
					</div>
				))}
			</div>

			<div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-5 lg:h-[500px] lg:w-full">
				<Image
					src={urlFor(bigImage).url()}
					alt="Photo"
					width={600}
					height={500}
					className="h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	);
}
