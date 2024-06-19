/** @format */

import React, { useMemo } from "react";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Back, Book } from "../assets/icons/Icons";
import Loading from "./Loading";
import { slugify } from "../utils/slugify";
import {
	useFetchNewsAndActivities,
	useFetchNewsDetails,
	useFetchSingleNew,
} from "../hooks/useHome";

const NewDetails = () => {
	// const { data, isLoading } = useFetchNewsAndActivities();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const id = searchParams.get("id");
	const type = searchParams.get("type");

	const { data: singleNew, isLoading: singleLoading } =
		type === "activities" ? useFetchSingleNew(id) : useFetchNewsDetails(id);

	// const filterData = useMemo(() => {
	// 	if (singleNew && !singleLoading) {
	// 		return singleNew?.newactivities;
	// 	}
	// }, [singleNew]);
	const singleData = useMemo(() => {
		if (singleNew && !singleLoading) {
			return type === "activities"
				? singleNew?.newactivities[0]
				: singleNew?.news[0];
		}
	}, [singleNew, id]);

	if (singleLoading) return <Loading />;

	

	return (
		<div className=" top_section_padding">
			<button onClick={() => navigate(-1)}>
				<Back size={24} />
			</button>
			<div className="flex gap-8 mt-6">
				<div className="flex-1 space-y-3">
					{singleData && (
						<article className="flex pb-6 border-b pt-6 first:pt-0 last:border-none items-center gap-8">
							<img
								className=" size-56 rounded-sm object-cover"
								src={singleData?.photo}
								alt="activity name"
							/>
							<div className="flex-1">
								<span className="text-xs font-medium">{singleData?.date}</span>
								<div className="space-y-4 mt-1">
									<h2 className="text-2xl font-semibold">
										{singleData?.title}
									</h2>
									<p
										dangerouslySetInnerHTML={{ __html: singleData?.body }}
										className="text-base"
									/>
								</div>
							</div>
						</article>
					)}
				</div>

				{/* <div className="w-[300px] space-y-3">
					Recent Posts
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
				</div> */}
			</div>
		</div>
	);
};

export default NewDetails;
