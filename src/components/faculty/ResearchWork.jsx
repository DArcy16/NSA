/** @format */

import React from "react";
import { useFetchFacultyResearchWork } from "../../hooks/useHome";
import Loading from "../../pages/Loading";

const ResearchWork = ({major, catId, subCatId}) => {
	const { data, isLoading} = useFetchFacultyResearchWork(catId, subCatId)


	if(isLoading) return <Loading />



	return (
		<div className="space-y-6 mt-8">
			<h2 className="text-xl font-bold text-center">
				{data?.researchWorks[0]?.name}
			</h2>
			<img className="aspect-auto object-cover mx-auto" src={data?.researchWorks[0]?.photo} alt={data?.researchWorks[0]?.name} />
		</div>
	);
};

export default ResearchWork;
