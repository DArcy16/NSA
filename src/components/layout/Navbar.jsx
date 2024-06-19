/** @format */

import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Dropright } from "../../assets/icons/Icons";
import {
	useFetchAdCategories,
	useFetchFacultyCategories,
} from "../../hooks/useHome";
import { slugify } from "../../utils/slugify";

const Navbar = () => {
	const location = useLocation();
	const { data: facultyCategories, isLoading: facultyLoading } =
		useFetchFacultyCategories();
	const { data: adCategories, isLoading: adLoading } = useFetchAdCategories();

	const facultyLink = useMemo(() => {
		if (!facultyLoading) {
			const links = facultyCategories.categories.map((category) => {
				const subCategories = facultyCategories.subcategories.filter(
					(subCategory) => subCategory?.faculty_category_id === category.id
				);

				return subCategories.length > 0
					? {
							name: category.name,
							child: subCategories.map((item) => ({
								name: item.name,
								url: `/faculty/${slugify(item.name)}?category_id=${
									category.id
								}&sub_category_id=${item.id}`,
							})),
					  }
					: {
							name: category.name,
							url: `/faculty/${slugify(category.name)}?category_id=${
								category.id
							}`,
					  };
			});

			return links;
		}
		return [
			{
				name: "",
				root: "",
				url: "/",
			},
		];
	}, [facultyCategories]);

	const adLink = useMemo(() => {
		if (!adLoading) {
			const links = adCategories.categories.map((category) => {
				const subCategories = adCategories.subcategories.filter(
					(subCategory) => subCategory?.ad_category_id === category.id
				);

				return subCategories.length > 0
					? {
							name: category.name,
							child: subCategories.map((item) => ({
								name: item.name,
								url: `/administration-departments/${slugify(
									item.name
								)}?category_id=${category.id}&sub_category_id=${item.id}`,
							})),
					  }
					: {
							name: category.name,
							url: `/administration-departments/${slugify(
								category.name
							)}?category_id=${category.id}`,
					  };
			});

			return links;
		}
		return [
			{
				name: "",
				root: "",
				url: "/",
			},
		];
	}, [adCategories]);

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
			child: facultyLink,
		},
		{
			name: "Administration Departments",
			root: "administration-departments",
			child: adLink,
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
					url: "/news-&-activities?type=news",
				},
				{
					name: "Events & Activities",
					url: "/news-&-activities?type=activities",
				},
				{
					name: "Gallery",
					url: "/news-&-activities/gallery",
				},
				{
					name: "Internship",
					url: "/news-&-activities/internship",
				},
			],
		},
		{
			name: "Contact Us",
			root: "contact-us",
			url: "/contact-us",
		},
	];

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
					{link?.name} <Dropdown size={17} />
				</div>
				<ul className="absolute pt-3 min-w-52 top-full group-hover:block hidden text-sm  rounded-md text-black">
					{link?.child?.map((item) => {
						return item?.child ? (
							<li key={item?.name} className="relative group/sub bg-gray-200 first:rounded-t-md last:rounded-b-md">
								<div className="py-3 px-4 flex items-center rounded-md justify-between  hover:bg-third hover:text-white">
									{item?.name} <Dropright size={17} />
								</div>
								<ul className="absolute hidden group-hover/sub:block top-0 pl-2 left-full min-w-52 text-black">
									{item?.child?.map((sub_link) => (
										<li className="first:rounded-t-md overflow-hidden last:rounded-b-md">
											<Link
												to={sub_link?.url}
												className="py-3 px-4 block bg-gray-200 hover:bg-third hover:text-white"
											>
												{sub_link?.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						) : (
							<li
								className="bg-gray-200 first:rounded-t-md last:rounded-b-md"
								key={item?.name}
							>
								<Link
									to={item?.url}
									className="py-3  px-4 block rounded-md hover:bg-third hover:text-white"
								>
									{item?.name}
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
					to={link?.url}
					className={`px-6 inline-block ${
						isActive(link.root) && " bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					{link?.name}
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
