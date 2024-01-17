import React from "react";
import AboutImg from "../../../public/images/about-us.png";
import bg from "../../../public/images/about-us-bg.png";

const AboutUsPage = () => {
	return (
		<div className="">
			<div
				style={{
					// use the src property of the image object
					backgroundImage: `url(${AboutImg.src})`,
					// other styles
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "40vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div className="ml-5 mr-5 md:container mt-40 lg:mt-40 ">
					<h2 className="text-white text-4xl md:text-5xl lg:text-7xl md:w-4/5 font-bold leading-10 -mt-32 text-center mx-auto">
						About Us
					</h2>
				</div>
			</div>

			<div className="ml-5 mr-5 md:container mt-12 lg:mt-32">
				<p className="text-center lg:w-3/4 lg:mx-auto">
					Established in 2000, Storage2040 has rapidly gained a solid reputation
					for delivering cost-effective and dependable shipping container
					solutions tailored for construction and various industries. Our
					commitment to excellence has fueled significant and sustained growth,
					cultivating a team of dedicated professionals with the skills and
					qualifications to meet diverse portable storage and construction
					needs. <br />
					<br />
					Serving clients nationwide and facilitating global container sales and
					conversions, Storage2040 boasts an extensive product range and the
					expertise to cater to a variety of requirements. With our specialized
					fleet of delivery vehicles operated by trained in-house drivers, we
					ensure the delivery of top-notch products coupled with exceptional
					customer service—from order placement to installation. Whether
					you&apos;re an individual seeking a single construction container or a
					multinational corporation in need of multiple units for various
					applications, we are unwavering in upholding the highest professional
					standards. Storage2040 holds national and international
					accreditations, supported by robust systems and policies that benefit
					our team, customers, and suppliers. As our project portfolio expands,
					we readily submit Pre-Qualification Questionnaires (PQQ) as needed.
					<br />
					<br />
					For an in-depth understanding of our vision, policies, and commitment
					to stakeholders, please explore the detailed information below.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Quality Management – Business Management System (BMS)
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Discover our Vision & Mission Statement
					<br />
					Storage2040 takes great pride in our Business Management System (BMS),
					encompassing quality, environmental, and health and safety processes
					designed to meet ISO 9001:2015 (Quality), ISO 14001:2015
					(Environment), and ISO 45001:2018 (Health and Safety) standards, or
					any other standard aligned with Annex SL Structure.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Health & Safety{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					At Storage2040, we are unwavering in ensuring the health, safety, and
					welfare of all employees. We establish necessary procedures and
					systems to achieve this goal, providing a secure working environment,
					safe access, and well-maintained equipment and systems. Our commitment
					extends to health and safety in the handling, storage, and transport
					of materials. Storage2040 also acknowledges its responsibility to
					safeguard the health and safety of customers, visitors, and
					contractors affected by our work.
				</p>

				<div
					style={{
						// use the src property of the image object
						backgroundImage: `url(${bg.src})`,
						// other styles
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					className="mt-12 lg:mt-28"
				>
					<div className="h-[26rem] md:h-[34rem] lg:h-[40rem] w-full"></div>
				</div>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Corporate Social Responsibility{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Recognizing the integration of business values with societal and
					environmental expectations, Storage2040 aligns its operations with the
					interests of customers, employees, regulators, suppliers, the local
					community, and the environment. Our commitment to sustainable
					development is evident in our transparent communication of strategies,
					targets, performance, and governance to stakeholders. We take all
					feedback seriously as part of our ongoing commitment to responsible
					business practices.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Equality and Diversity Policy
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Storage2040 operates as an equal opportunity employer, committed to
					treating all employees and job applicants fairly. We avoid unlawful
					discrimination in all aspects of employment, from recruitment and
					promotion to training, pay, and benefits. Our commitment extends to
					creating a work environment where employment decisions are based on
					experience, abilities, and qualifications, without regard to various
					factors such as age, disability, gender, race, religion, or sexual
					orientation. Breaches of our equal opportunities policy are subject to
					action under the Company’s disciplinary procedure.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Sustainable Procurement Policy{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Storage2040 actively challenges the need for consumption of goods and
					services, promoting recycling and reusing materials whenever possible.
					We consider the environmental impact in procurement decisions,
					incorporating total cost ownership, including environmental factors.
					Our commitment involves assessing environmental and corporate risks,
					working collaboratively with our supplier base, and promoting
					sustainable practices. Storage2040 ensures that its procurement policy
					complies with legal and regulatory requirements related to health and
					safety, equality, and diversity at all times.
				</p>
			</div>
		</div>
	);
};

export default AboutUsPage;
