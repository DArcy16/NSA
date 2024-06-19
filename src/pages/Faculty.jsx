/** @format */

import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Carousel } from "antd";

import { reSlugify } from "../utils/slugify";

import { ArrowDown } from "../assets/icons/Icons";
import { useFetchFaculty } from "../hooks/useHome";

import Loading from "./Loading";
import Dashboard from "../components/faculty/Dashboard";

const Collapse = ({ title, renderItem }) => {
	const [showCollapse, setShowCollapse] = useState(false);

	return (
		<article className="vision-collapse">
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
	const [searchParams] = useSearchParams();
	const catId = searchParams.get("category_id");
	const subCatId = searchParams.get("sub_category_id");

	const { data: faculty, isLoading } = useFetchFaculty(catId, subCatId);

	if (isLoading) return <Loading />;

	const filterData = faculty.facultyAboutDepartments[0];

	return (
		<div className="top_section_padding">
			<div className="flex gap-8">
				<div className="flex-1 space-y-3">
					<img
						className="w-[120px] h-[120px] object-contain block mx-auto"
						src={filterData?.title_photo}
					/>
					<h2 className="capitalize text-2xl font-semibold text-center">
						{reSlugify(major)}
					</h2>
					<div className="w-24 h-[.2rem] bg-black mx-auto"></div>
					<div
						dangerouslySetInnerHTML={{ __html: filterData?.body }}
						className=" text-justify leading-relaxed text-base"
					/>
				</div>
				<div className="w-[300px] space-y-3">
					<Carousel autoplay infinite>
						{filterData?.slider1_photo && (
							<img
								className="h-[195px] rounded-md w-full object-cover object-center"
								key={filterData?.slider1_photo}
								src={filterData?.slider1_photo}
							/>
						)}
						{filterData?.slider2_photo && (
							<img
								className="h-[195px] rounded-md w-full object-cover object-center"
								key={filterData?.slider2_photo}
								src={filterData?.slider2_photo}
							/>
						)}
						{filterData?.slider3_photo && (
							<img
								className="h-[195px] rounded-md w-full object-cover object-center"
								key={filterData?.slider3_photo}
								src={filterData?.slider3_photo}
							/>
						)}
					</Carousel>

					{filterData?.vision_title && (
						<Collapse
							title={filterData?.vision_title}
							renderItem={() => {
								return (
									<div
										dangerouslySetInnerHTML={{
											__html: filterData?.vision_description,
										}}
										className="font-semibold"
									/>
								);
							}}
						/>
					)}

					{filterData?.mission_title && (
						<Collapse
							title={filterData?.mission_title}
							renderItem={() => {
								return (
									<div
										dangerouslySetInnerHTML={{
											__html: filterData?.mission_description,
										}}
										className="font-semibold"
									/>
								);
							}}
						/>
					)}

					{filterData?.contactinfo_title && (
						<Collapse
							title={filterData?.contactinfo_title}
							renderItem={() => {
								return (
									<div
										dangerouslySetInnerHTML={{
											__html: filterData?.contactinfo_description,
										}}
										className="font-semibold"
									/>
								);
							}}
						/>
					)}
				</div>
			</div>

			<Dashboard major={major} catId={catId} subCatId={subCatId} />
		</div>
	);
};

export default Faculty;
