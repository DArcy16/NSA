/** @format */

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ApprovementSection = ({ data }) => {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<ScrollTrigger
			onEnter={() => setCounterOn(true)}
			onExit={() => setCounterOn(false)}
		>
			<div className="h-[160px] flex bg_orange gap-16 text-white rounded-lg font-medium shadow-md items-center justify-center">
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">
						{data.home.faculties || "Faculties"}
					</h3>
					<h3 className="text-2xl drop-shadow-lg font-semibold ">
						{counterOn && (
							<CountUp
								end={parseInt(data.home.faculties_number) || 58}
								duration={5}
								start={0}
								delay={0}
							/>
						)}
					</h3>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">
						{data.home.departments || "Departments"}
					</h3>
					<h3 className="text-2xl drop-shadow-lg font-semibold">
						{counterOn && (
							<CountUp
								end={parseInt(data.home.departments_number) || 58}
								duration={5}
								start={0}
								delay={0}
							/>
						)}
					</h3>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">
						{data.home.instructors || "Instructors"}
					</h3>
					<h3 className="text-2xl drop-shadow-lg font-semibold">
						{counterOn && (
							<CountUp
								end={parseInt(data.home.instructors_number) || 58}
								duration={5}
								start={0}
								delay={0}
							/>
						)}
					</h3>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">{data.home.students || "Students"}</h3>
					<h3 className="text-2xl drop-shadow-lg font-semibold">
						{counterOn && (
							<CountUp
								end={parseInt(data.home.students_number) || 58}
								duration={5}
								start={0}
								delay={0}
							/>
						)}
					</h3>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">
						{data.home.degree_offer || "Degree Offer"}
					</h3>
					<h3 className="text-2xl drop-shadow-lg font-semibold">
						{counterOn && (
							<CountUp
								end={parseInt(data.home.degree_offer) || 58}
								duration={5}
								start={0}
								delay={0}
							/>
						)}
					</h3>
				</div>
				<div className="text-center space-y-4">
					<h3 className="text-[1.05rem]">Admission</h3>
					<button className="text-sm py-1 px-5 bg-white text-third block drop-shadow-lg font-semibold shadow-lg cursor-pointer">
						Click Here
					</button>
				</div>
			</div>
		</ScrollTrigger>
	);
};

export default ApprovementSection;
