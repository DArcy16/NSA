/** @format */

import React, { useState } from "react";
import { GraduateCap } from "../../assets/icons/Icons";
import FacultyMembers from "./FacultyMembers";
import ResearchWork from "./ResearchWork";
import BBA from "./BBA";
import Research from "./Research";
import DegreeOffered from "./DegreeOffered";
import Activities from "./Activities";
import International from "./International";
import { useFetchFacultyProgramCategories } from "../../hooks/useHome";

const Tab = ({
	activeTab,
	handleChange,
	major,
	catId,
	subCatId,
	programId,
}) => {
	const { data } = useFetchFacultyProgramCategories(catId, subCatId);

	return (
		<ul className="flex font-semibold text-secondary">
			<li className="relative group ">
				<p
					className={`px-6 py-2 cursor-pointer ${
						(activeTab === "faculty-members" ||
							activeTab === "research-work") &&
						"bg-third text-white"
					} `}
				>
					Our People
				</p>
				<ul
					className={`absolute z-10 group-hover:block hidden w-36 top-full left-0 space-y-1 pt-1`}
				>
					<li>
						<button
							onClick={() => handleChange("faculty-members")}
							className={`${
								activeTab === "faculty-members" ? "bg-primary" : "bg-third / 80"
							} px-6 py-2 text-xs block w-full  text-white`}
						>
							Faculty Members
						</button>
					</li>
					<li>
						<button
							onClick={() => handleChange("research-work")}
							className={`${
								activeTab === "research-work" ? "bg-primary" : "bg-third / 80"
							} px-6 py-2 text-xs block w-full  text-white`}
						>
							Research Work
						</button>
					</li>
				</ul>
			</li>
			<li>
				<li className="relative group ">
					<p
						className={`px-6 py-2 cursor-pointer ${
							activeTab === "program" && "bg-third text-white"
						} `}
					>
						Program
					</p>
					<ul
						className={`absolute z-10 group-hover:block hidden top-full left-0 space-y-1 pt-1`}
					>
						{data?.program_categories?.map((item) => (
							<li>
								<button
									onClick={() => handleChange("program", item?.id)}
									className={`${
										programId === item?.id ? "bg-primary" : "bg-third / 80"
									} px-6 py-2 text-xs flex items-center gap-3 w-60  text-white`}
								>
									<GraduateCap size={20} /> {item?.name}
								</button>
							</li>
						))}
					</ul>
				</li>
			</li>
			<li>
				<button
					onClick={() => handleChange("research")}
					className={`${
						activeTab === "research" && "bg-third text-white"
					} px-6 py-2 block w-full  `}
				>
					Research
				</button>
			</li>
			<li>
				<button
					onClick={() => handleChange("degree-offered")}
					className={`${
						activeTab === "degree-offered" && "bg-third text-white"
					} px-6 py-2 block w-full  `}
				>
					Degree Offered
				</button>
			</li>
			<li>
				<button
					onClick={() => handleChange("international")}
					className={`${
						activeTab === "international" && "bg-third text-white"
					} px-6 py-2 block w-full`}
				>
					International
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
		</ul>
	);
};

const Dashboard = ({ major, catId, subCatId }) => {
	const [activeTab, setActiveTab] = useState("faculty-members");
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

			{activeTab === "faculty-members" && (
				<FacultyMembers major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "research-work" && (
				<ResearchWork major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "program" && (
				<BBA
					major={major}
					catId={catId}
					subCatId={subCatId}
					programId={programId}
				/>
			)}
			{activeTab === "research" && (
				<Research major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "degree-offered" && (
				<DegreeOffered major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "activities" && (
				<Activities major={major} catId={catId} subCatId={subCatId} />
			)}
			{activeTab === "international" && (
				<International major={major} catId={catId} subCatId={subCatId} />
			)}
		</div>
	);
};

export default Dashboard;
