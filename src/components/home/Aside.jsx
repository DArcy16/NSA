/** @format */

import React from "react";

import bgImg from "../../assets/img/blue_bg.png";
import { Book, Dot } from "../../assets/icons/Icons";

const Aside = () => {
	const Card = ({ heading, icon, list, button }) => {
		return (
			<article className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
				<p className="h-12 bg_blue flex items-center justify-center text-lg text-white">
					{heading}
				</p>
				<ul className="px-12 space-y-2">
					<li className="flex items-center gap-3">
						{icon} Promotion & transfer for teaching staff.
					</li>
					<li className="flex items-center gap-3">
						{icon} Promotion & transfer for teaching staff.
					</li>
					<li className="flex items-center gap-3">
						{icon} Promotion & transfer for teaching staff.
					</li>
					<li className="flex items-center gap-3">
						{icon} Promotion & transfer for teaching staff.
					</li>
					<li className="flex items-center gap-3">
						{icon} Promotion & transfer for teaching staff.
					</li>
					{button}
				</ul>
			</article>
		);
	};
	return (
		<div className="space-y-6">
			<Card heading="Announcement" icon={<Dot className="text-lg" />} />
			<Card
				heading="Latest News"
				icon={<Book className="text-lg text-primary" />}
				button={
					<button className="block w-full text-center py-[.3rem] mx-auto bg-secondary text-white text-sm font-semibold">
						View More
					</button>
				}
			/>
		</div>
	);
};

export default Aside;
