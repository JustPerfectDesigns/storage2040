import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Homevideo = () => {
	return (
		<div className="mt-8 mb-20 h-[200px] lg:h-[700px] overflow-hidden relative flex flex-col items-center justify-center">
			<div>
				<h2 className="capitalize lg:text-[4.5rem] lg:container font-semibold text-white ml-5 mr-5 text-center lg:leading-[6rem]">
					Buying from us is one of the best decisions you can make today. Enjoy
					premium quality with us!
				</h2>
				<div className="flex justify-center items-center gap-2 mt-6">
					<Button
						variant="ghost"
						size="lg"
						className="text-white border rounded-full"
					>
						<Link href="/contact-us">Contact Us</Link>
					</Button>
					<Button
						variant="ghost"
						size="lg"
						className="text-black bg-white rounded-full"
					>
						<Link href="#containers">Shop Now</Link>
					</Button>
				</div>
			</div>
			<video
				src={require("../public/containers.mp4")}
				autoPlay
				muted
				// height="200px"
				loop
				className="absolute top-0 left-0 right-0 bottom-0 -z-10"
			/>
		</div>
	);
};

export default Homevideo;
