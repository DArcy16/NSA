/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import slider1 from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.png";
import slider3 from "../../assets/img/slider3.png";


import {
	Facebook,
	Instagram,
	Location,
	Mail,
	Phone,
	X,
	Youtube,
} from "../../assets/icons/Icons";
import { Carousel } from "antd";

const Footer = () => {
	const location = useLocation();
	const isContactPage =
		location.pathname.split("/").slice(-1)[0] === "contact-us";

	return (
		<div className="section_paddingTop">
			<div className="h-2 bg-third"></div>
			<div className="flex justify-between items-start section_padding1 bg-secondary">
				{isContactPage ? (
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236161.6580364389!2d113.96288743838963!3d22.352650624408483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fefda2ea2807%3A0x486db43574f494da!2z6aaZ5riv!5e0!3m2!1szh-TW!2shk!4v1711004339324!5m2!1szh-TW!2shk"
							width="100%"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				) : (
					<div className="flex items-center space-y-3 justify-center flex-col">
						<img src={logo} alt={logo} />
						<h2 className="uppercase text-white text-xl font-semibold">
							Naypyitaw state academy
						</h2>
						<div className="text-primary  flex gap-4 text-xl">
							<Facebook className="bg-gray-300 rounded-full p-1 size-8" />
							<Instagram className="bg-gray-300 rounded-full p-1 size-8" />
							<Youtube className="bg-gray-300 rounded-full p-1 size-8" />
							<X className="bg-gray-300 rounded-full p-1 size-8" />
						</div>
					</div>
				)}

				<div className="flex items-center justify-center">
					<div className="w-fit text-white space-y-3">
						<h2 className="text-xl font-semibold">Contact Us</h2>
						<div className="flex gap-3">
							<Location className=" size-5" />
							Naypyitaw, Myanmar
						</div>
						<div className="flex gap-3">
							<Phone className="size-4" />
							(+959) 1234 56789
						</div>
						<div className="flex gap-3 ">
							<Mail className="size-5" />
							info@nsa.edu.mm
						</div>
					</div>
				</div>

				<div className="w-fit  text-white space-y-3">
					<h3 className="text-xl font-semibold">Quick Links</h3>
					<ul className=" list-disc list-inside space-y-3">
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About NSA</Link>
						</li>
						<li>
							<Link>Library</Link>
						</li>
						<li>
							<Link>Program</Link>
						</li>
						<li>
							<Link>Research</Link>
						</li>
					</ul>
				</div>

				<div className=" w-[22rem] h-auto rounded-md overflow-hidden">
					<h3 className="font-semibold py-2 text-white text-base text-center bg_blue">
						Gallery
					</h3>
					<Carousel dotPosition="left" dots={false} autoplay autoplaySpeed={3000} infinite>
						<div>
							<img className="w-full h-[180px] object-cover" src={slider1} alt="" />
						</div>
						<div>
							<img className="w-full h-[180px] object-cover" src={slider2} alt="" />
						</div>
						<div>
							<img className="w-full h-[180px] object-cover" src={slider3} alt="" />
						</div>
					</Carousel>
				</div>
			</div>
			<div className="py-2 bg-primary text-white text-center">
				<p>
					Copyright 2024. All right reserved by{" "}
					<Link className="underline underline-offset-2">CBS</Link>
				</p>
			</div>
		</div>
	);
};

export default Footer;
