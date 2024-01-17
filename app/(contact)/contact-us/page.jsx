import { Button } from "@/components/ui/button";
import React from "react";

const ContactUsPage = () => {
	return (
		<div className="lg:flex lg:items-center lg:gap-20 ml-5 mr-5 md:container mt-6 lg:mt-12">
			<div className="bg-slate-50 lg:w-[80%] py-20 px-12 mb-8 lg:mb-0">
				<h2 className="font-bold text-3xl md:text-4xl lg:text-8xl md:max-w-96 lg:max-w-[500px] text-orange-600 capitalize text-left">
					Contact Us
				</h2>
				<p className="text-left mt-6 text-lg">
					It is very important for us to keep in touch with you, so we are
					always ready to answer any question that interests you. Shoot!
				</p>
			</div>
			<div className="w-full">
				<form action="" className="grid gap-6">
					<div className="">
						<input
							type="text"
							placeholder="Your Name"
							className="border-b outline-none placeholder:text-slate-800 text-slate-900 font-semibold placeholder:font-medium w-full py-3 lg:py-8"
						/>
					</div>
					<div className="">
						<input
							type="email"
							placeholder="Your Email Address"
							className="border-b outline-none placeholder:text-slate-800 text-slate-900 font-semibold placeholder:font-medium w-full py-3 lg:py-8"
						/>
					</div>
					<div className="">
						<textarea
							placeholder="Share Your Thoughts"
							className="border-b outline-none placeholder:text-slate-800 text-slate-900 font-semibold placeholder:font-medium w-full py-3 lg:py-8"
						/>
					</div>
					<Button
						size="lg"
						className="bg-orange-600 py-[1.6rem] lg:py-7 font-semibold lg:text-lg"
					>
						Submit Feedback
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactUsPage;
