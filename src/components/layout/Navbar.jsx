/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Dropright } from "../../assets/icons/Icons";

const links = [
	{
		name: "Home",
		url: "/",
		root: "",
	},
	{
		name: "About NSA",
		url: "/about-nsa",
		root: "about-nsa",
	},
	{
		name: "Faculty",
		root: "faculty",
		child: [
			{
				name: "Faculty of Arts",
				child: [
					{
						name: "Department of Myanmar",
						url: "/faculty/myanmar",
					},
					{
						name: "Department of English",
						url: "/faculty/english",
					},
					{
						name: "Department of Geography",
						url: "/faculty/geography",
					},
					{
						name: "Department of History",
						url: "/faculty/history",
					},
					{
						name: "Department of Philosophy",
						url: "/faculty/philosophy",
					},
					{
						name: "Department of International Relationship",
						url: "/faculty/international-relationship",
					},
				],
			},
			{
				name: "Faculty of Sciences",
				child: [
					{
						name: "Department of Chemistry",
						url: "/faculty/chemistry",
					},
					{
						name: "Department of Physics",
						url: "/faculty/physics",
					},
					{
						name: "Department of Mathematics",
						url: "/faculty/mathematics",
					},
					{
						name: "Department of Zoology",
						url: "/faculty/zoology",
					},
					{
						name: "Department of Botany",
						url: "/faculty/botany",
					},
				],
			},
			{
				name: "Faculty of Economics",
				child: [
					{
						name: "Department of Economics",
						url: "/faculty/economics",
					},
					{
						name: "Department of Commerce",
						url: "/faculty/commerce",
					},
					{
						name: "Department of Management Studies",
						url: "/faculty/management-studies",
					},
					{
						name: "Department of Statistics",
						url: "/faculty/statistics",
					},
				],
			},
			{
				name: "Faculty of Law",
				child: [
					{
						name: "Department of Law",
						url: "/faculty/law",
					},
				],
			},
			{
				name: "Faculty of Medicines",
				child: [
					{
						name: "Department of Biochemistry",
						url: "/faculty/biochemistry",
					},
					{
						name: "Department of Physiology",
						url: "/faculty/physiology",
					},
				],
			},
			{
				name: "Faculty of Sport",
				url: "/faculty/sport",
			},
			{
				name: "Faculty of Social Work",
				url: "/faculty/social-work",
			},
		],
	},
	{
		name: "Administration Departments",
		root: "administration-departments",
		child: [
			{
				name: "Department Of Academic",
				child: [
					{
						name: "Student Affairs",
						url: "/administration-departments/student-affairs",
					},
					{
						name: "Examination & Convocation",
						url: "/administration-departments/examination-&-convocation",
					},
					{
						name: "Library",
						url: "/administration-departments/library",
					},
					{
						name: "ICT",
						url: "/administration-departments/ict",
					},
					{
						name: "Sport",
						url: "/administration-departments/sport",
					},
				],
			},
			{
				name: "Department of Admin & Finance",
				root: "admin-&-finance",
				child: [
					{
						name: "Admin (Staff Affairs)",
						url: "/admin-&-finance/admin",
					},
					{
						name: "Finance",
						url: "/admin-&-finance/finance",
					},
					{
						name: "Engineering",
						url: "/admin-&-finance/engineering",
					},
				],
			},
		],
	},
	{
		name: "Library",
		root: "library",
		child: [
			{
				name: "E-Library",
				url: "/library/e_library",
			},
			{
				name: "MERAL",
				url: "/library/meral",
			},
			{
				name: "OPAC",
				url: "/library/opac",
			},
		],
	},
	{
		name: "Program",
		root: "program",
		child: [
			{
				name: "Admission Information",
				url: "/program/admission-information",
			},
		],
	},
	{
		name: "Research",
		root: "research",
		child: [
			{
				name: "Reaearch & Development",
				url: "/research/research-&-development",
			},
		],
	},
	{
		name: "International",
		root: "international",
		child: [
			{
				name: "International Collaboration",
				url: "/international/international-collaboration",
			},
			{
				name: "Admission Information",
				url: "/international/scholarship-program",
			},
		],
	},
	{
		name: "News & Activities",
		root: "news-&-activities",
		child: [
			{
				name: "News",
				url: "/news-&-activities/News",
			},
			{
				name: "Events & Activities",
				url: "/news-&-activities/events-&-activities",
			},
			{
				name: "Gallery",
				url: "/news-&-activities/gallery",
			},
		],
	},
	{
		name: "Contact Us",
		root: "contact-us",
		url: "/contact-us",
	},
];

const Navbar = () => {
	const location = useLocation();


	const isActive = (name) => {
		return location.pathname.split("/").slice(1, 2)[0] === name;
	};

	const isTextWhite = () => {
		return (
			location.pathname.split("/").slice(1, 2)[0] === "about-nsa" ||
			location.pathname.split("/").slice(1, 2)[0] === ""
		);
	};

	const SubSubNav = ({ link }) => {
		return (
			<li
				className={`group inline-block  cursor-pointer  rounded-b-lg drop-shadow-md`}
			>
				<div
					className={`flex py-2 px-6 ${
						isActive(link.root) && " bg-third rounded-b-lg text-white"
					} items-center gap-2`}
				>
					{link.name} <Dropdown size={17} />
				</div>
				<ul className="absolute pt-3 min-w-52 top-full group-hover:block hidden text-sm  rounded-md text-black">
					{link.child.map((item) => {
						return item.child ? (
							<li className="relative group/sub bg-gray-200 first:rounded-t-md last:rounded-b-md">
								<div className="py-3 px-4 flex items-center rounded-md justify-between  hover:bg-third hover:text-white">
									{item.name} <Dropright size={17} />
								</div>
								<ul className="absolute hidden group-hover/sub:block top-0 pl-2 left-full min-w-52 text-black">
									{item.child.map((sub_link) => (
										<li className="first:rounded-t-md overflow-hidden last:rounded-b-md">
											<Link
												to={sub_link.url}
												className="py-3 px-4 block bg-gray-200 hover:bg-third hover:text-white"
											>
												{sub_link.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						) : (
							<li
								className="bg-gray-200 first:rounded-t-md last:rounded-b-md"
								key={item.name}
							>
								<Link
									to={item.url}
									className="py-3  px-4 block rounded-md hover:bg-third hover:text-white"
								>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</li>
		);
	};

	const SimpleLink = ({ link }) => {
		return (
			<li>
				<Link
					to={link.url}
					className={`px-6 inline-block ${
						isActive(link.root) && " bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					{link.name}
				</Link>{" "}
			</li>
		);
	};

	return (
		<nav className="text-sm font-semibold">
			<ul
				className={`flex justify-center ${
					isTextWhite() ? "text-white" : "text-secondary"
				}`}
			>
				{links.map((link) => {
					return link?.child ? (
						<SubSubNav key={link.name} link={link} />
					) : (
						<SimpleLink key={link.name} link={link} />
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
