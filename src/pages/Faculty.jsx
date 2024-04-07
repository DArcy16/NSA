/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "antd";

import { reSlugify } from "../utils/slugify";

import dryinminhtwe from "../assets/img/DrYinMinHtwe.jpg";
import drnanthidawin from "../assets/img/DrNanThidaWIn.jpg";
import drmoethuzarhling from "../assets/img/DawMoeThuzarHlaing.jpg";

import sportlogo from "../assets/img/sportlogo.png";
import managementlogo from "../assets/img/Manag_Logo.png";
import commercelogo from "../assets/img/commerce_logo.png";
import { ArrowDown } from "../assets/icons/Icons";
import Dashboard from "../components/faculty/Dashboard";

const data = [
	{
		name: "management-studies",
		logo: managementlogo,
		photos_slide: [dryinminhtwe],
		vision:
			"To be an internationally recognized program in business education and research for helping to create a better Myanmar business society.",
		mission: [
			"To devolop socially responsible and competent business leaders who possess  integrated skills, knowledge and experience with global vision and local commitment.",
		],
		description:
			"Department of Management Studies (DMS) of Naypyitaw State Academy (NSA) was established in 2022 with the aim to produce competent and committed managers with professional advancement. Under the Faculty of Economics of NSA, DMS has emerged as a management education hub for developing capable executives in globalized dynamic and competitive environment. The diversity of the curricula offered focuses to impart management know-how and managerial skills of the future managers. DMS currently provides undergraduate program of Bachelor of Business Administration (BBA). With the academic edifice and stakeholder considerations, DMS persistently strives to nurture core ethical values among students for profession success. ",
	},
	{
		name: "commerce",
		description:
			"The Department of Commerce is one of the departments under the Faculty of Economics at Naypyitaw State Academy. It was established on 9th November 2022 at Naypyitaw State Academy and is currently offering an undergraduate degree programme in Commerce. The aim of the department is to develop the students to become internationally competitive professionals capable in both theories and practices so that they can contribute to regional and national economic development. In order to improve employment opportunities of commerce graduates, the curriculum and syllabus are developed and periodically updated in accordance with the requirements of the labour market. The department promotes practical experience of the students through internships, seminars, and workshops as well as industrial visits at the field level. The academic performance of the students is continuously assessed during this study through tests, group discussions, case studies, assignments, and other academic exercises, along with end-of-semester examinations.To nurture the students who are able to respond the trend in changing business environment, the department always attempts to upgrade its teaching and learning methodologies. The curriculum and syllabus of the department cover all the study areas related to business and management to develop the students to become successful academicians, professionals, entrepreneurs, and business owners.",
		logo: commercelogo,
		photos_slide: [drnanthidawin],
		vision:
			"To be recognized as a globally exposed department committed to quality-driven education",
		mission: [
			"To impact superior sustainable value through holistic education",
			"To create energetic graduates with creative and innovative skills to comopete ethically and globally",
			"To promote academic research related to contemporary business issues",
			"To provide new programs with an effort to extend global tie-ups aiming to meet thte requirements of stakeholders",
		],
	},
	{
		name: "sport",
		description:
			"Lorem ipsum dolor sit amet consectetur. At enim diam lectus mattis. Ut ac tortor dolor in malesuada vitae et facilisi. Dignissim diam viverra nunc gravida vitae et. Laoreet augue mollis sit quis lobortis libero semper nunc dignissim. Cras eget urna porttitor libero enim mauris nisi. Ac sagittis vitae sed turpis. Nunc vitae arcu sed proin mus ante sapien a sagittis. Adipiscing volutpat sed sapien pellentesque varius. Quis neque massa gravida diam pretium lacus dictum vel. Ornare viverra sed imperdiet aliquam in in non odio. Interdum mauris posuere egestas faucibus at. Ullamcorper dignissim ultricies dui hac commodo urna id in purus. Non tortor euismod tellus euismod. Quis et magna ornare nisl euismod egestas pellentesque. ",
		logo: sportlogo,
		photos_slide: [drmoethuzarhling],
		vision: "To ultivate physically and mentally strong  and healthy students.",
		mission: [
			"To develop leadership and team spirite of students taking part in sports events and competittions",
			"To provide sports techniques to students",
			"To provide students with modern sports court, stadium, swimming pool",
			"To build healthy to friendship among studengs",
		],
	},
];

const sampleData = {
	name: "sport",
	description:
		"Lorem ipsum dolor sit amet consectetur. At enim diam lectus mattis. Ut ac tortor dolor in malesuada vitae et facilisi. Dignissim diam viverra nunc gravida vitae et. Laoreet augue mollis sit quis lobortis libero semper nunc dignissim. Cras eget urna porttitor libero enim mauris nisi. Ac sagittis vitae sed turpis. Nunc vitae arcu sed proin mus ante sapien a sagittis. Adipiscing volutpat sed sapien pellentesque varius. Quis neque massa gravida diam pretium lacus dictum vel. Ornare viverra sed imperdiet aliquam in in non odio. Interdum mauris posuere egestas faucibus at. Ullamcorper dignissim ultricies dui hac commodo urna id in purus. Non tortor euismod tellus euismod. Quis et magna ornare nisl euismod egestas pellentesque. ",
	logo: sportlogo,
	photos_slide: [drmoethuzarhling, drnanthidawin, dryinminhtwe],
	vision: "To ultivate physically and mentally strong  and healthy students.",
	mission: [
		"To develop leadership and team spirite of students taking part in sports events and competittions",
		"To provide sports techniques to students",
		"To provide students with modern sports court, stadium, swimming pool",
		"To build healthy to friendship among studengs",
	],
};

const Collapse = ({ title, renderItem }) => {
	const [showCollapse, setShowCollapse] = useState(false);
	return (
		<article className="">
			<button
				onClick={() => setShowCollapse(!showCollapse)}
				className="px-5 py-3 w-full flex justify-between drop-shadow-lg items-center bg-third text-[16px] rounded-md text-white font-medium"
			>
				{title} <ArrowDown size={24} />
			</button>
			<div
				className={`px-5 py-5 transform bg-white ${
					showCollapse
						? "block opacity-100 translate-y-0"
						: "hidden opacity-0 -translate-y-full"
				} drop-shadow-lg rounded-b-md transition-all `}
			>
				{renderItem()}
			</div>
		</article>
	);
};

const Faculty = () => {
	const { major } = useParams();

	const filterData =
		data.filter((item) => item.name === major).length > 0
			? data.filter((item) => item.name === major)[0]
			: sampleData;

	return (
		<div className="top_section_padding">
			<div className="flex gap-8">
				<div className="flex-1 space-y-3">
					<img
						className="w-120px h-120px object-cover block mx-auto"
						src={filterData.logo}
					/>
					<h2 className="capitalize text-2xl font-semibold text-center">
						Department of {reSlugify(major)}
					</h2>
					<div className="w-24 h-[.2rem] bg-black mx-auto"></div>
					<p className=" text-justify leading-relaxed text-base">
						{filterData.description}
					</p>
				</div>
				<div className="w-[300px] space-y-3">
					<Carousel autoplay infinite>
						{filterData?.photos_slide.map((item) => (
							<img
								className="h-[195px] rounded-md w-full object-cover object-center"
								key={item}
								src={item}
							/>
						))}
					</Carousel>

					<Collapse
						title={"Vision"}
						renderItem={() => {
							return <p className="font-semibold">{filterData.vision}</p>;
						}}
					/>

					<Collapse
						title={"Mission"}
						renderItem={() => {
							return (
								<ul
									className={`${
										filterData.mission.length > 0
											? " list-decimal list-inside"
											: "list-none"
									}`}
								>
									{filterData.mission.map((item) => (
										<li className="py-1 font-semibold" key={item}>
											{item}
										</li>
									))}
								</ul>
							);
						}}
					/>
				</div>
			</div>

			<Dashboard major={major}/>
		</div>
	);
};

export default Faculty;
