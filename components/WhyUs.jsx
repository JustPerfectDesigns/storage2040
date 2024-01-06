import React from "react";
import { Tag, Truck, ShieldCheck, Headphones } from "lucide-react";

const WhyUs = () => {
	return (
		<div className="ml-5 mr-5 mt-12 md:ml-6 md:mr-6 lg:max-w-[1280px] lg:mr-auto lg:ml-auto md:container">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				<div className="flex items-center gap-2">
					<div>
						<Tag size={37} className="text-orange-600 md:hidden" />
						<Tag size={42} className="text-orange-600 hidden md:flex" />
					</div>
					<div>
						<h3 className="font-semibold text-[#14213F] md:text-lg">Lowest</h3>
						<p className="text-[#14213F] text-sm md:text-base">
							Possible Prices
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Truck size={37} className="text-orange-600 md:hidden" />
					<Truck size={42} className="text-orange-600 hidden md:flex" />
					<div>
						<h3 className="font-semibold text-[#14213F] md:text-lg">
							Delivery
						</h3>
						<p className="text-[#14213F] text-sm md:text-base">
							Exact Same Week
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<ShieldCheck size={37} className="text-orange-600 md:hidden" />
					<ShieldCheck size={42} className="text-orange-600 hidden md:flex" />
					<div>
						<h3 className="font-semibold text-[#14213F] md:text-lg">Highest</h3>
						<p className="text-[#14213F] text-sm md:text-base">
							Premium Quality
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Headphones size={37} className="text-orange-600 md:hidden" />
					<Headphones size={42} className="text-orange-600 hidden md:flex" />
					<div>
						<h3 className="font-semibold text-[#14213F] md:text-lg">Instant</h3>
						<p className="text-[#14213F] text-sm md:text-base">
							Customer Support
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
