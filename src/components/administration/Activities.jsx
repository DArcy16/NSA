/** @format */

import React from "react";

import { useFetchAdActivity } from "../../hooks/useHome";
import Loading from "../../pages/Loading";
import { formatDate } from "../../utils/slugify";

const Activities = ({ catId, subCatId }) => {
	const { data, isLoading } = useFetchAdActivity(catId, subCatId);

	if (isLoading) <Loading />;

	const ActivityCard = ({ item }) => {
		const createdAt = new Date(item?.createdAt);
		return (
			<article className="w-[300px]">
				<img
					className="w-[300px] h-[180px]"
					src={item?.photo}
					alt={item?.name}
				/>
				<h2 className="text-base mt-1 w-full font-bold">{item?.name}</h2>
				{/* <span className="font-medium">{formatDate(createdAt)}</span> */}
			</article>
		);
	};
	return (
		<div className="mt-8 space-y-8">
			<h2 className="text-2xl font-bold text-center">Activities</h2>
			<div className="w-[960px] mx-auto flex flex-wrap gap-[20px]">
				{data?.activities?.length > 0 &&
					data?.activities?.map((item) => (
						<ActivityCard key={item?.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default Activities;
