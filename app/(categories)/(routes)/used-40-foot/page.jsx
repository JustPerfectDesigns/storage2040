import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import React from "react";

import CategoryHero from "@/components/CategoryHero";

import g1 from "../../../../public/images/g1.png";
import g2 from "../../../../public/images/g2.png";
import g3 from "../../../../public/images/g3.png";
import g4 from "../../../../public/images/g4.png";
import g5 from "../../../../public/images/g5.png";
import g6 from "../../../../public/images/g6.png";
import g7 from "../../../../public/images/g7.png";
import g8 from "../../../../public/images/g8.png";
import ContainerDetails from "@/components/ContainerDetails";

import bg from "../../../../public/images/bg5.png";

const Used40Foot = () => {
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
				image={bg}
				title="Neatly Used 40 Foot Standard Shipping Containers"
			/>
			<ContainerDetails
				title="40ft Container"
				description="Store2024's has a fleet of over 1.6M TEU (general purpose)
						containers. 20ft containers are suitable for shipping, storage,
						modular construction, retail spaces, housing, offices, restaurants
						and cafes, workshops, art installations, and event spaces worldwide.
						
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
						molestias esse veniam? Nostrum facilis iure facere adipisci
						blanditiis doloremque vel libero, aut perspiciatis error esse quia
						magni a molestias repellat cumque perferendis quibusdam iste
						officiis aliquam deleniti animi harum accusantium? Dolores numquam
						nostrum recusandae tempore explicabo maxime aut quo vero! Eos,
						error. Commodi similique iusto aliquam suscipit totam quos nihil
						incidunt quisquam cupiditate, ex ipsam illo quibusdam id debitis
						facere?"
			/>
			<Gallery
				title="What Has been and can be done with 40 foot containers"
				titleStyle={titleStyle}
				data={galleryData}
			/>
			<Testimonials />
		</div>
	);
};

export default Used40Foot;
