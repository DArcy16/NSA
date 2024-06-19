/** @format */

import React from "react";
import { useFetchFacultyProgram } from "../../hooks/useHome";
import Loading from "../../pages/Loading";
import { getArray } from "../../utils/slugify";

const BBA = ({ catId, subCatId, programId }) => {
	const { data, isLoading } = useFetchFacultyProgram(
		catId,
		subCatId,
		programId
	);


	if (isLoading) return <Loading />;

	if (data?.programs?.length === 0) return <div className="w-full font-semibold h-96 flex items-center justify-center">No Data</div>

	return (
		<div className="mt-12 space-y-10">
			<div className="space-y-2">
				<h2 className="text-xl font-semibold capitalize text-center">
					{data?.programs[0]?.name}
				</h2>
				<p
					className="max-w-[800px] mx-auto leading-relaxed text-center"
					dangerouslySetInnerHTML={{ __html: data?.programs[0]?.body }}
				></p>
			</div>
			{getArray(9).map((id) => (
				<div key={id}>
					{data?.programs[0][`sub_title${id}`] && (
						<h2 className="text-2xl mb-4 bg-primary text-white font-bold py-3 text-center">
							{data?.programs[0][`sub_title${id}`]}{" "}
							{console.log(data?.programs[0][`sub_title${id}`])}
						</h2>
					)}
					<div className="flex gap-8">
						<div className="w-1/2 space-y-5">
							{data?.programs[0][`subsub_title${2 * id - 1}`] && (
								<h2 className="text-2xl font-bold text-center">
									{data?.programs[0][`subsub_title${2 * id - 1}`]}
								</h2>
							)}

							{data?.programs[0][`subsub_photo${2 * id - 1}`] && (
								<img
									className="w-full object-cover"
									src={data?.programs[0][`subsub_photo${2 * id - 1}`]}
									alt={data?.programs[0][`subsub_title${2 * id - 1}`]}
								/>
							)}
						</div>
						<div className="w-1/2 space-y-5">
							{data?.programs[0][`subsub_title${2 * id}`] && (
								<h2 className="text-2xl font-bold text-center">
									{data?.programs[0][`subsub_title${2 * id}`]}
								</h2>
							)}
							{data?.programs[0][`subsub_photo${2 * id}`] && (
								<img
									className="w-full object-cover"
									src={data?.programs[0][`subsub_photo${2 * id}`]}
									alt={data?.programs[0][`subsub_title${2 * id}`]}
								/>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BBA;
