"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";

import Logo from "../public/images/Storage2040.png";
import Link from "next/link";
import { Button } from "./ui/button";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const header = () => {
	const pathname = usePathname;

	return (
		<div className="lg:container lg:flex lg:justify-between lg:items-center">
			<Link href="/">
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
			<div>
				<ul className="flex items-center gap-1 ">
					<li>
						<Link href="/">
							<Button
								variant="ghost"
								className={`link font-semibold hover:text-orange-600 ${
									pathname === "/" ? "text-orange-600" : ""
								}`}
							>
								Home
							</Button>
						</Link>
					</li>
					<li>
						<Link href="/about-us">
							<Button
								variant="ghost"
								className={`link font-semibold hover:text-orange-600 ${
									pathname === "/about-us" ? "text-orange-600" : ""
								}`}
							>
								About Us
							</Button>
						</Link>
					</li>
					<li>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="font-semibold">
										<p className="group-data-[state=open]:text-orange-600">
											Our Containers
										</p>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-full gap-3 p-4 ">
											<li>
												<Link href="/new-20-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/new-20-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															New 20ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
											<li>
												<Link href="/used-20-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/used-20-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															Used 20ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
											<li>
												<Link href="/new-40-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/new-40-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															New 40ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
											<li>
												<Link href="/used-40-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/used-40-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															Used 40ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
											<li>
												<Link href="/new-45-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/new-45-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															New 45ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
											<li>
												<Link href="/used-45-foot">
													<Button
														variant="ghost"
														className={`link font-medium ${
															pathname === "/used-45-foot"
																? "text-orange-600 font-semibold"
																: ""
														}`}
													>
														<NavigationMenuLink className="">
															Used 45ft Container
														</NavigationMenuLink>
													</Button>
												</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</li>
					<li>
						<Link href="/contact-us">
							<Button
								variant="ghost"
								className={`link font-semibold hover:text-orange-600 ${
									pathname === "/contact-us" ? "text-orange-600" : ""
								}`}
							>
								Contact Us
							</Button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default header;
