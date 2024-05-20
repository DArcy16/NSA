/** @format */

import React from "react";
import { useFetchFacultyDegreeOffered } from "../../hooks/useHome";
import Loading from "../../pages/Loading";

const DegreeOffered = ({ catId, subCatId }) => {
	const { data, isLoading } = useFetchFacultyDegreeOffered(catId, subCatId);

	if (isLoading) <Loading />;

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold">{data?.degreeOffereds[0]?.name}</h2>
			<div className="w-16 h-[.1rem] mt-1 bg-black"></div>
			<p
				dangerouslySetInnerHTML={{ __html: data?.degreeOffereds[0]?.body }}
				className="mt-4 text-base leading-loose font-semibold"
			/>
		</div>
	);
};

export default DegreeOffered;
