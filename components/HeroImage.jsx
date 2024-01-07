import React from "react";
import Image from "next/image";

const HeroImage = () => {
	return (
		<div className="mt-12 lg:container">
			<Image
				height={100}
				width={100}
				src="/Hero-Container-Mobile.png"
				alt="Hero Container"
				className="w-[100%] md:hidden"
				unoptimized
				priority
			/>
			<Image
				height={100}
				width={100}
				src="/images/Hero-Container.png"
				alt="Hero Container"
				className="w-full hidden md:block"
				unoptimized
				priority
			/>
		</div>
	);
};

export default HeroImage;
