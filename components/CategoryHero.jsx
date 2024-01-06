import React from "react";

const CategoryHero = ({ image, title }) => {
	return (
		<div
			style={{
				// use the src property of the image object
				backgroundImage: `url(${image.src})`,
				// other styles
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100%",
				height: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="ml-5 mr-5 md:container">
				<h1 className="text-white text-4xl md:text-5xl lg:text-7xl md:w-4/5 font-bold leading-10 -mt-32">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default CategoryHero;
