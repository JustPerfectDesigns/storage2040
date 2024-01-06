"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";

import Logo from "../public/images/Storage2040.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetClose,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MobileHeader = () => {
	const pathname = usePathname();

	return (
		<div className="ml-5 mr-5 md:container flex justify-between items-center">
			<Link href="/">
				<Image
					height={100}
					width={100}
					alt="Container Merchant Logo"
					src={Logo}
					className="w-[120px]"
					unoptimized
				/>
			</Link>

			<Sheet>
				<SheetTrigger>
					<Menu size={28} />
				</SheetTrigger>
				<SheetContent>
					<SheetClose>
						<X size={28} className="absolute right-5 top-8" />
					</SheetClose>
					<ul className="flex flex-col gap-8 mt-28">
						<li>
							<Link href="/">
								<SheetClose>
									<Button
										variant="ghost"
										className={`link font-semibold text-lg ${
											pathname === "/" ? "text-orange-600" : ""
										}`}
									>
										Home
									</Button>
								</SheetClose>
							</Link>
						</li>
						<li>
							<Link href="/about-us">
								<SheetClose>
									<Button
										variant="ghost"
										className={`link font-semibold text-lg ${
											pathname === "/about-us" ? "text-orange-600" : ""
										}`}
									>
										About Us
									</Button>
								</SheetClose>
							</Link>
						</li>
						<li>
							{/* <Link href="/containers">
								<SheetClose>
									<Button
										variant="ghost"
										className={`link font-semibold text-lg ${
											pathname === "/containers" ? "text-orange-600" : ""
										}`}
									>
										Our Containers
									</Button>
								</SheetClose>
							</Link> */}
							<NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger className="font-semibold text-lg">
											<p className="group-data-[state=open]:text-orange-600">
												Our Containers
											</p>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-full gap-3 p-4 lg:w-[600px] ">
												<li>
													<Link href="/new-20-foot">
														<SheetClose>
															<Button
																variant="ghost"
																className={`link font-medium text-base ${
																	pathname === "/new-20-foot"
																		? "text-orange-600 font-semibold"
																		: ""
																}`}
															>
																<NavigationMenuLink className="">
																	New 20ft Container
																</NavigationMenuLink>
															</Button>
														</SheetClose>
													</Link>
												</li>
												<li>
													<Link href="/used-20-foot">
														<SheetClose>
															<Button
																variant="ghost"
																className={`link font-medium text-base ${
																	pathname === "/used-20-foot"
																		? "text-orange-600 font-semibold"
																		: ""
																}`}
															>
																<NavigationMenuLink className="">
																	Used 20ft Container
																</NavigationMenuLink>
															</Button>
														</SheetClose>
													</Link>
												</li>
												<li>
													<Link href="/new-40-foot">
														<SheetClose>
															<Button
																variant="ghost"
																className={`link font-medium text-base ${
																	pathname === "/new-40-foot"
																		? "text-orange-600 font-semibold"
																		: ""
																}`}
															>
																<NavigationMenuLink className="">
																	New 40ft Container
																</NavigationMenuLink>
															</Button>
														</SheetClose>
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
								<SheetClose>
									<Button
										variant="ghost"
										className={`link font-semibold text-lg ${
											pathname === "/contact-us" ? "text-orange-600" : ""
										}`}
									>
										Contact Us
									</Button>
								</SheetClose>
							</Link>
						</li>
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileHeader;
