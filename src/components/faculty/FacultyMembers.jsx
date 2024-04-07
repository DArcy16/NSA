/** @format */

import React from "react";

import dryinminhtwe from "../../assets/img/DrYinMinHtwe.jpg";
import drnanthidawin from "../../assets/img/DrNanThidaWIn.jpg";
import dawyuwahhtet from "../../assets/img/DawYuWahHtet.jpg";
import dawwinsandarkhin from "../../assets/img/DawWinSandarKhin.jpg";
import dawmyatmon from "../../assets/img/DawMyatMonPhyo.png";
import dawmoethuzarhlaing from "../../assets/img/DawMoeThuzarHlaing.jpg";
import dawkhaingsandar from "../../assets/img/DawKhaingSandarKyi.jpg";
import daweieinyein from "../../assets/img/daweieinyein.jpg";

const data = [
	{
		name: "management-studies",
		head: {
			role: "Professor (Head)",
			name: "Dr. Yin Min Htwe",
			img: dryinminhtwe,
			position: "Professor (Head of Management Studies)",
			degree: "BCom(Hons), MCom, PhD(Commerce)",
			research_work_total: 3,
			desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium dolor delectus, debitis sit quo eos in eum ratione cum veniam suscipit officiis nemo ut! Et rerum natus odio veritatis.",
		},
		staffs: [
			{
				role: "Tutor",
				name: "Daw Win Sandar Khin",
				img: dawwinsandarkhin,
				position: "tutor",
				degree: "BBA(Hons), MBA",
				research_work_total: 2,
			},
			{
				role: "Tutor",
				name: "Daw Yu Wah Htet",
				img: dawyuwahhtet,
				position: "tutor",
				degree: "BBA(Qualified)",
				research_work_total: 0,
			},
			{
				role: "Tutor",
				name: "Jelly Toke",
				img: dawyuwahhtet,
			},
		],
	},
	{
		name: "commerce",
		head: {
			name: "Dr. Nan Thida Win",
			role: "Professor (Head)",
			img: drnanthidawin,
			position: "Professor (Head of Commerce)",
			degree: "BCom(Hons), MCom, PhD(Commerce)",
			research_work_total: 3,
			desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium dolor delectus, debitis sit quo eos in eum ratione cum veniam suscipit officiis nemo ut! Et rerum natus odio veritatis.",
		},
		staffs: [
			{
				role: "Associate Professor",
				name: "Daw Khaing Sandar Kyi",
				img: dawkhaingsandar,
				position: "Associate Professor",
				degree: "BCom(Q), MCom",
				research_work_total: 6,
			},
			{
				role: "Tutor",
				name: "Daw Myat Mon Phyo",
				img: dawmyatmon,
				position: "Tutor",
				degree: "BAct",
				research_work_total: 0,
			},
			{
				role: "Lecturer",
				img: daweieinyein,
				name: "Daw Ei Ei Nyein",
				position: "Lecturer",
				degree: "BCom(Hons), MCom, PhD(Thesis)",
				research_work_total: 3,
			},
		],
	},
	{
		name: "sport",
		head: {
			name: "Daw Moe Thuzar Hlaing",
			role: "Sports Officer",
			img: dawmoethuzarhlaing,
			position: "Sports Office",
			degree:
				"B.Sc(Chemistry), Diploma(English), Diploma(Computer Application)",
			research_work_total: 2,
			desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium dolor delectus, debitis sit quo eos in eum ratione cum veniam suscipit officiis nemo ut! Et rerum natus odio veritatis.",
		},
		staffs: [],
	},
];

const sampleData = {
	name: "sport",
	head: {
		name: "Daw Moe Thuzar Hlaing",
		role: "Sports Officer",
		img: dawmoethuzarhlaing,
		position: "Sports Office",
		degree: "B.Sc(Chemistry), Diploma(English), Diploma(Computer Application)",
		research_work_total: 2,
		desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium dolor delectus, debitis sit quo eos in eum ratione cum veniam suscipit officiis nemo ut! Et rerum natus odio veritatis.",
	},
	staffs: [],
};

const FacultyMembers = ({ major }) => {
	const filterData =
		data.filter((item) => item.name === major).length > 0
			? data.filter((item) => item.name === major)[0]
			: sampleData;

	const StaffCard = ({info, head = false}) => {
		return (
			<article className="w-fit space-y-1 text-center">
				<img
					className={`${head ? "w-[280px] h-[340px]" : "w-[200px] h-[230px]"}`}
					src={info.img}
					alt={info.name}
				/>
				<p className="text-sm">{info.role}</p>
				<h2 className={`${head ? "text-xl" : "text-base"} font-semibold`}>{info.name}</h2>
				<button className="font-semibold px-6 py-2 block w-fit mx-auto mt-2 rounded-md drop-shadow-md bg-third text-white active:bg-third hover:bg-third/90">
					View Profile
				</button>
			</article>
		);
	};

	return (
		<div className="mt-12 space-y-8">
			<div className="w-fit mx-auto">
				<StaffCard info={filterData.head} head/>
			</div>
			<div className="flex w-fit mx-auto gap-12">
				{filterData.staffs.map((item) => (
					<StaffCard info={item}/>
				))}
			</div>
		</div>
	);
};

export default FacultyMembers;
