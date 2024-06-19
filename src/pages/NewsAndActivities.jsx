/** @format */

import React, { useMemo, useState } from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";
import { Book } from "../assets/icons/Icons";
import {
	useFetchLatestNews,
	useFetchNews,
	useFetchNewsAndActivities,
} from "../hooks/useHome";
import Loading from "./Loading";
import { slugify } from "../utils/slugify";

const NewsAndActivities = () => {
	const [filter, setFilter] = useState("Academic");
	const [searchParams] = useSearchParams();
	const type = searchParams.get("type");

	const { data, isLoading } =
		type === "activities"
			? useFetchNewsAndActivities(filter)
			: useFetchNews(filter);
	const { data: latestNews, isLoading: LatestNewsLoading } =
		useFetchLatestNews();

	const filterData = useMemo(() => {
		if (data && !isLoading) {
			return type === "activities" ? data?.newactivities : data?.news;
		}
	}, [data]);

	const ActivityCard = ({ data }) => {
		return (
			<article className="flex pb-6 border-b pt-6 first:pt-0 last:border-none items-center gap-8">
				<img
					className=" size-56 rounded-sm object-cover"
					src={data?.photo}
					alt="activity name"
				/>
				<div className="flex-1">
					<span className="text-xs font-medium">{data?.date}</span>
					<div className="space-y-4 mt-1">
						<h2 className="text-2xl font-semibold">{data?.title}</h2>
						<p
							dangerouslySetInnerHTML={{ __html: data?.body }}
							className="line-clamp-3 text-base"
						/>
						<Link
							to={`/news-&-activities/${slugify(data?.title)}?id=${
								data?.id
							}&type=${type}`}
							className="btn_orange inline-block rounded-md px-6 py-2"
						>
							See More
						</Link>
					</div>
				</div>
			</article>
		);
	};

	return (
		<div className="flex gap-8 top_section_padding">
			{isLoading && <Loading />}
			{!isLoading && (
				<div className="flex-1 space-y-3">
					{filterData?.length === 0 ? (
						<p className="mt-24 text-center font-semibold">There is no data.</p>
					) : (
						filterData?.map((item) => (
							<ActivityCard key={item?.id} data={item} />
						))
					)}
				</div>
			)}

			<div className="w-[300px] shrink-0 space-y-3">
				{/* Filter */}
				<div className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
					<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
						Categories
					</h2>
					<div className="font-semibold">
						<ul className=" px-12 space-y-1 list-none ">
							<li>
								<button
									className={`${filter === "New" && "text-third"}`}
									onClick={() => setFilter("New")}
								>
									Latest News
								</button>
							</li>
							<li>
								<button
									className={`${filter === "Academic" && "text-third"}`}
									onClick={() => setFilter("Academic")}
								>
									Academic
								</button>
							</li>
							<li>
								<button
									className={`${
										filter === "University Notice" && "text-third"
									}`}
									onClick={() => setFilter("University Notice")}
								>
									University Notice
								</button>
							</li>
						</ul>
					</div>
				</div>
				{/* Recent Posts */}

				<div className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
					<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
						Recent Posts
					</h2>
					<div className="px-4 font-semibold">
						<ul className="space-y-2">
							{!LatestNewsLoading &&
								latestNews?.newactivities?.map((item) => (
									<li key={item?.id} className="flex gap-2 items-start">
										<Book size={17} className="shrink-0 mt-1 text-secondary" />
										<Link
											to={`${slugify(item?.title).slice(0, 20)}?id=${
												item?.id
											}&type=activities`}
										>
											<p className=" text-sm line-clamp-4 font-semibold">
												{item?.title}
											</p>
										</Link>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsAndActivities;
