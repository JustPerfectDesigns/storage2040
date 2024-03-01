// app/api/sendEmalil/routeModule.js
const { NextResponse } = require("next/server");

import nodemailer from "nodemailer";

export async function POST(req, res) {
	try {
		// Extract subject and items from the request body
		const { subject, items, totalPrice, email, address } = await req.json();

		// console.log("Items:", items);
		// console.log("TotalPrice:", totalPrice);

		// Create a Nodemailer transporter
		const transporter = nodemailer.createTransport({
			// Replace these settings with your SMTP server details
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "gabriel.jpdesigns@gmail.com",
				pass: process.env.NEXT_PUBLIC_PASSWORD,
			},
		});

		// Generate email message body based on cart items
		const message = `
		  <h3>New Order From ${email}</h3>
        <p>Total Items:</p>
        <ol>
            ${items
							.map((item) => `<li>${item.name} - ${item.price}</li>`)
							.join("")}
         </ol>

         <p>Total Price:</p>
         <h2>
         $${totalPrice}
         </h2>

         <p>Shipping Address:</p>
         <h3>${address}</h3>
		`;

		// Define email options
		const mailOptions = {
			from: "gabriel.jpdesigns@gmail.com",
			to: "sales@storage2040.com",
			subject: subject || "New Order Received",
			html: message,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		// console.log("Email notification sent to admin");
		return NextResponse.json(
			{ message: "Email Sent Successfully" },
			{ status: 200 }
		);
	} catch (error) {
		// console.error("Error sending email notification:", error);
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
