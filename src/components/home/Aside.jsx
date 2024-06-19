/** @format */

import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	useFetchLatestNews,
	useFetchNewsAndActivities,
} from "../../hooks/useHome";
import { Book } from "../../assets/icons/Icons";
import { slugify } from "../../utils/slugify";

const Aside = ({ data }) => {
	const { data: news, isLoading } = useFetchLatestNews();
	const navigate = useNavigate();

	const filterData = useMemo(() => {
		if (data && !isLoading) {
			return news?.newactivities;
		}
	}, [data, isLoading]);

	const Card = ({ heading, desc, button }) => {
		return (
			<article className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
				<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
					{heading}
				</h2>
				{desc && (
					<div
						className="aside_card_desc"
						dangerouslySetInnerHTML={{ __html: desc }}
					></div>
				)}

				{button}
			</article>
		);
	};

	return (
		<div className="space-y-6">
			<Card heading="Announcement" desc={data?.home?.announcement_body} />

			<div className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
				<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
					Latest News
				</h2>
				<div className="px-4 font-semibold">
					<ul className="space-y-3">
						{!isLoading &&
							filterData?.slice(0, 3)?.map((item) => (
								<li
									key={item?.id}
									className="flex gap-2 items-start justify-left"
								>
									<Book size={17} className="shrink-0 text-secondary mt-1" />
									<Link
										to={`/news-&-activities/${slugify(item?.title)}?id=${
											item?.id
										}`}
									>
										<p className="line-clamp-4 text-sm font-semibold">
											{item?.title}
										</p>
									</Link>
								</li>
							))}
					</ul>
					<button
						onClick={() => navigate("/news-&-activities")}
						className="block w-full mt-3 text-center py-[.3rem] mx-auto bg-secondary text-white text-sm font-semibold"
					>
						View More
					</button>
				</div>
			</div>

			{/* {data.home.latest_new && (
				<Card
					heading="Latest News"
					desc={data.home.latest_new}
					button={
						<button className="block w-full mt-3 text-center py-[.3rem] mx-auto bg-secondary text-white text-sm font-semibold">
							View More
						</button>
					}
				/>
			)} */}
		</div>
	);
};

export default Aside;
