/** @format */

import React from "react";

const Aside = ({ data }) => {
	const Card = ({ heading, desc, button }) => {
		return (
			<article className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
				<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
					{heading}
				</h2>
				<div
					className="aside_card_desc"
					dangerouslySetInnerHTML={{ __html: desc }}
				></div>

				{button}
			</article>
		);
	};
	return (
		<div className="space-y-6">
			{data.home.announcement && (
				<Card heading="Announcement" desc="data.home.announcement" />
			)}
			{data.home.latest_new && (
				<Card
					heading="Latest News"
					desc={data.home.latest_new}
					button={
						<button className="block w-full mt-3 text-center py-[.3rem] mx-auto bg-secondary text-white text-sm font-semibold">
							View More
						</button>
					}
				/>
			)}
		</div>
	);
};

export default Aside;
