/** @format */

import React, { useState } from "react";
import { GraduateCap } from "../../assets/icons/Icons";
import FacultyMembers from "./FacultyMembers";
import ResearchWork from "./ResearchWork";
import MBA from "./MBA";
import BBA from "./BBA";
import DMA from "./DMA";
import PBA from "./PBA";
import Research from "./Research";
import DegreeOffered from "./DegreeOffered";
import Activities from "./Activities";
import International from "./International";

const Tab = ({ activeTab, handleChange, major }) => {
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
							(activeTab === "bba" ||
								activeTab === "mba" ||
								activeTab === "dma" ||
								activeTab === "pba") &&
							"bg-third text-white"
						} `}
					>
						Program
					</p>
					<ul
						className={`absolute z-10 group-hover:block hidden top-full left-0 space-y-1 pt-1`}
					>
						<li>
							<button
								onClick={() => handleChange("bba")}
								className={`${
									activeTab === "bba" ? "bg-primary" : "bg-third / 80"
								} px-6 py-2 text-xs flex items-center gap-3 w-60  text-white`}
							>
								<GraduateCap size={20} /> Bachelor Of {major}
							</button>
						</li>
						<li>
							<button
								onClick={() => handleChange("mba")}
								className={`${
									activeTab === "mba" ? "bg-primary" : "bg-third / 80"
								} px-6 py-2 text-xs flex items-center gap-3 w-60  text-white`}
							>
								<GraduateCap size={20} /> Master of {major}
							</button>
						</li>
						<li>
							<button
								onClick={() => handleChange("pba")}
								className={`${
									activeTab === "pba" ? "bg-primary" : "bg-third / 80"
								} px-6 py-2 text-xs flex items-center gap-3 w-60  text-white`}
							>
								<GraduateCap size={20} /> Professor Of Philosophy
							</button>
						</li>
						<li>
							<button
								onClick={() => handleChange("dma")}
								className={`${
									activeTab === "dma" ? "bg-primary" : "bg-third / 80"
								} px-6 py-2 text-xs flex items-center gap-3 w-60  text-white`}
							>
								<GraduateCap size={20} /> Diploma in Management and
								Administration
							</button>
						</li>
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

const Dashboard = ({ major }) => {
	const [activeTab, setActiveTab] = useState("faculty-members");

	const handleTabChange = (name) => {
		setActiveTab(name);
	};

	return (
		<div className="mt-6">
			<Tab activeTab={activeTab} handleChange={handleTabChange} major={major} />
			<div className="h-[1.5px] bg-third"></div>

			{activeTab === "faculty-members" && <FacultyMembers major={major} />}
			{activeTab === "research-work" && <ResearchWork major={major} />}
			{activeTab === "mba" && <MBA major={major} />}
			{activeTab === "bba" && <BBA major={major} />}
			{activeTab === "pba" && <PBA major={major} />}
			{activeTab === "dma" && <DMA major={major} />}
			{activeTab === "research" && <Research major={major} />}
			{activeTab === "degree-offered" && <DegreeOffered major={major} />}
			{activeTab === "activities" && <Activities major={major} />}
			{activeTab === "international" && <International major={major} />}
		</div>
	);
};

export default Dashboard;
