import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Storage2040.png";

const Footer = () => {
	return (
		<footer className="bg-slate-50 rounded-lg shadow dark:bg-gray-900 m-4">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<Link
						href="/"
						className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
					>
						<Image
							height={100}
							width={100}
							alt="Container Merchant Logo"
							src={Logo}
							className="w-[180px]"
							unoptimized
							priority
						/>
					</Link>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
						<li>
							<Link
								href="/about-us"
								className="hover:underline me-4 md:me-6 hover:text-orange-600 transition-all"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/contact-us"
								className="hover:underline me-4 md:me-6 hover:text-orange-600 transition-all"
							>
								Contact Us
							</Link>
						</li>
						<li>
							<Link
								href="/20ft-Unit"
								className="hover:underline me-4 md:me-6 hover:text-orange-600 transition-all"
							>
								20ft Container
							</Link>
						</li>
						<li>
							<Link
								href="/40ft-Unit"
								className="hover:underline hover:text-orange-600 transition-all"
							>
								40ft Container
							</Link>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<Link
						href="/"
						className="hover:underline text-orange-600 font-semibold"
					>
						Storage2040™
					</Link>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
