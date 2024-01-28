import Link from "next/link";
import React from "react";

const ProductCategoryTest = () => {
	return (
		<div className="flex gap-6">
			<Link href="/20ft-Unit">20ft Containers</Link>
			<Link href="/40ft-Unit">40ft Containers</Link>
		</div>
	);
};

export default ProductCategoryTest;
