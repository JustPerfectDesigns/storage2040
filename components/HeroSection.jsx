import React from "react";

const HeroSection = () => {
	return (
		<section className="ml-5 mr-5 md:container md:ml-6 md:mr-6 lg:flex lg:flex-col lg:justify-center lg:items-center">
			<h1 className="text-4xl md:text-5xl lg:text-7xl text-center text-[#14213F] font-bold lg:max-w-4xl">
				Your <span className="text-orange-600">Premier</span> Source for
				High-Quality <span className="text-orange-600">Shipping</span>{" "}
				Containers
			</h1>
			<p className="text-[#393939] font-semibold text-center mt-3 md:text-lg md:mt-5 lg:max-w-4xl">
				Unlock the Power of Reliable Container Solutions for Your Shipping and
				Construcion Needs
			</p>
		</section>
	);
};

export default HeroSection;
