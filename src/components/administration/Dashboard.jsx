/** @format */

import React, { useState } from "react";
import FacultyMembers from "./FacultyMembers";
import Activities from "./Activities";
import NotFound from "../../pages/NotFound";

const Tab = ({
	activeTab,
	handleChange,
}) => {

	return (
		<ul className="flex font-semibold text-secondary">
			<li className="relative group ">
				<button
					onClick={() => handleChange("ad-members")}
					className={`${
						activeTab === "ad-members" && "bg-third text-white"
					} px-6 py-2 block w-full `}
				>
					Our People
				</button>
			</li>

			<li>
				<button
					onClick={() => handleChange("activities")}
					className={`${
						activeTab === "activities" && "bg-third text-white"
					} px-6 py-2 block w-full `}
				>
					Activities
				</button>
			</li>
			<li>
				<button
					onClick={() => handleChange("services")}
					className={`${
						activeTab === "services" && "bg-third text-white"
					} px-6 py-2 block w-full `}
				>
					Services
				</button>
			</li>
		</ul>
	);
};

const Dashboard = ({ major, catId, subCatId }) => {
	const [activeTab, setActiveTab] = useState("ad-members");
	const [programId, setProgramId] = useState("");

	const handleTabChange = (name, id) => {
		setActiveTab(name);
		id ? setProgramId(id) : setProgramId("");
	};

	return (
		<div className="mt-6">
			<Tab
				activeTab={activeTab}
				handleChange={handleTabChange}
				major={major}
				catId={catId}
				subCatId={subCatId}
				programId={programId}
			/>
			<div className="h-[1.5px] bg-third"></div>

			{activeTab === "ad-members" && (
				<FacultyMembers major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "activities" && (
				<Activities major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "services" && <NotFound />}
		</div>
	);
};

export default Dashboard;
