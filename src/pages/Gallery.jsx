/** @format */

import React, { useMemo } from "react";
import { useFetchGallery } from "../hooks/useHome";

const Gallery = () => {
	const { data, isLoading } = useFetchGallery();

	const renderData = useMemo(() => {
		if (!isLoading && data) {
			return [...(data.facultyActivity || []), ...(data.adActivity || [])];
		}
	}, [data?.facultyActivity, data?.adActivity, data, isLoading]);



	const ActivityCard = ({ item }) => {
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
		<div className="top_section_padding space-y-8">
			<h2 className="text-2xl font-bold text-center">Gallery</h2>
			<div className="mx-auto w-fit grid grid-cols-4 gap-[20px]">
				{renderData?.length > 0 &&
					renderData?.map((item) => (
						<ActivityCard key={item?.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default Gallery;
