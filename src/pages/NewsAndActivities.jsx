/** @format */

import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import { Book } from "../assets/icons/Icons";
import { useFetchNewsAndActivities } from "../hooks/useHome";
import Loading from "./Loading";
import { slugify } from "../utils/slugify";

const NewsAndActivities = () => {
	const { data, isLoading } = useFetchNewsAndActivities();

	if (isLoading) <Loading />;

	const filterData = useMemo(() => {
		if (data && !isLoading) {
			return data?.newactivities;
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
							to={`/news-&-activities/${slugify(data?.title)}?id=${data?.id}`}
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
			<div className="flex-1 space-y-3">
				{filterData?.length === 0
					? <p className="mt-24 text-center font-semibold">There is no data.</p>
					: filterData?.map((item) => (
							<ActivityCard key={item?.id} data={item} />
					  ))}
			</div>

			<div className="w-[300px] space-y-3">
				{/* Recent Posts */}
				<div className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
					<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
						Recent Posts
					</h2>
					<div className="aside_card_desc font-semibold">
						<ul>
							{filterData?.slice(0, 3)?.map((item) => (
								<li key={item?.id} className="flex gap-2 items-center">
									<Book size={17} className="shrink-0 text-secondary" />
									<Link to={`${slugify(item?.title)}?id=${item?.id}`}>
										<p className="line-clamp-1 text-sm font-semibold">
											{item?.title}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Filter */}
				<div className="bg-gray-100 space-y-3 pb-5 rounded-sm overflow-hidden shadow-md">
					<h2 className="h-12 bg_blue flex items-center justify-center text-lg text-white">
						Categories
					</h2>
					<div className="aside_card_desc font-semibold">
						<ul>
							<li>
								<button>Latest News</button>
							</li>
							<li>
								<button>Academic</button>
							</li>
							<li>
								<button>University Notice</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsAndActivities;
