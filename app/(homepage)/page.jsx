import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import HeroImage from "../../components/HeroImage";
import WhyUs from "../../components/WhyUs";
import ContainerCategory from "../../components/ContainerCategory";
import Gallery from "../../components/Gallery";
import Testimonials from "../../components/Testimonials";

import g1 from "../../public/images/g1.png";
import g2 from "../../public/images/g2.png";
import g3 from "../../public/images/g3.png";
import g4 from "../../public/images/g4.png";
import g5 from "../../public/images/g5.png";
import g6 from "../../public/images/g6.png";
import g7 from "../../public/images/g7.png";
import g8 from "../../public/images/g8.png";

const HomePage = () => {
	const style = " mt-20 lg:mt-32";

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
		<div className="w-full mt-11 lg:mt-16">
			<HeroSection />
			<HeroImage />
			<WhyUs />
			<ContainerCategory />
			<Gallery
				title="What’s been done with our containers"
				bgColor="bg-slate-50"
				data={galleryData}
			/>
			<Testimonials style={style} />
		</div>
	);
};

export default HomePage;
