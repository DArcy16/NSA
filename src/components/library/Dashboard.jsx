/** @format */

import React, { useState } from "react";
import Library from "./Library";
import LibraryPeople from "./LibraryPeople";

const Tab = ({ activeTab, handleChange }) => {
	return (
		<ul className="flex font-semibold text-secondary">
			<li className="relative group ">
				<button
					onClick={() => handleChange("library")}
					className={`${
						activeTab === "library" && "bg-third text-white"
					} px-6 py-2 block w-full `}
				>
					Library
				</button>
			</li>
			<li className="relative group ">
				<button
					onClick={() => handleChange("library-member")}
					className={`${
						activeTab === "library-member" && "bg-third text-white"
					} px-6 py-2 block w-full `}
				>
					Library Member
				</button>
			</li>
		</ul>
	);
};

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState("library");

	const handleTabChange = (name) => {
		setActiveTab(name);
	};

	return (
		<div className="mt-6">
			<Tab
				activeTab={activeTab}
				handleChange={handleTabChange}
			/>
			<div className="h-[1.5px] bg-third"></div>

			{activeTab === "library" && (
				<Library/>
			)}
			{activeTab === "library-member" && (
				<LibraryPeople/>
			)}
		</div>
	);
};

export default Dashboard;
