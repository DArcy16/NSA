/** @format */

import React, { useState } from "react";

import { useFetchFacultyPeople } from "../../hooks/useHome";
import Loading from "../../pages/Loading";
import StaffDetailModal from "../modal/StaffDetailModal";

const FacultyMembers = ({ catId, subCatId }) => {
	const { data: members, isLoading } = useFetchFacultyPeople(catId, subCatId);

	if (isLoading) return <Loading />;

	const role_1 = members?.facultyMembers?.filter((item) => item.role === 1);
	const role_2 = members?.facultyMembers?.filter((item) => item.role === 2);
	const role_3 = members?.facultyMembers?.filter((item) => item.role === 3);
	const role_4 = members?.facultyMembers?.filter((item) => item.role === 4);
	const role_5 = members?.facultyMembers?.filter((item) => item.role === 5);

	const StaffCard = ({ info, head = false }) => {
		const [showStaffInfoModal, setShowStaffInfoModal] = useState(false);
		return (
			<article className="w-fit space-y-1 text-center">
				<img
					className={`${
						head ? " aspect-video h-[230px]" : "w-[200px] h-[230px]"
					} object-cover rounded-md`}
					src={info?.title_photo}
					alt={info?.name}
				/>
				<p className="text-sm">{info?.name}</p>
				<h2 className={`${head ? "text-xl" : "text-base"} font-semibold`}>
					{info?.position}
				</h2>
				<button
					onClick={() => setShowStaffInfoModal(true)}
					className="font-semibold px-6 py-2 block w-fit mx-auto mt-2 rounded-md drop-shadow-md bg-third text-white active:bg-third hover:bg-third/90"
				>
					View Profile
				</button>
				<StaffDetailModal
					info={info}
					isOpen={showStaffInfoModal}
					setIsOpen={setShowStaffInfoModal}
					head={head}
				/>
			</article>
		);
	};

	return (
		<div className="mt-12 space-y-8">
			<div className="w-fit mx-auto">
				{role_1?.map((item) => (
					<StaffCard info={item} head />
				))}
			</div>
			<div className="flex w-fit flex-wrap justify-center mx-auto gap-12">
				{role_2?.length > 0 && role_2.map((item) => <StaffCard info={item} />)}
			</div>
			<div className="flex w-fit flex-wrap justify-center mx-auto gap-12">
				{role_3?.length > 0 && role_3.map((item) => <StaffCard info={item} />)}
			</div>
			<div className="flex w-fit flex-wrap justify-center mx-auto gap-12">
				{role_4?.length > 0 && role_4.map((item) => <StaffCard info={item} />)}
			</div>
			<div className="flex w-fit flex-wrap justify-center mx-auto gap-12">
				{role_5?.length > 0 && role_5.map((item) => <StaffCard info={item} />)}
			</div>
		</div>
	);
};

export default FacultyMembers;
