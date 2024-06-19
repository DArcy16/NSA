/** @format */

import React from "react";

import logo from "../../assets/img/logo.png";

const SideBar = ({ data }) => {
	console.log(data);
	const Card = ({ heading, desc }) => {
		return (
			<div className="sidebar_desc text-primary space-y-2">
				<h2 className="text-2xl text-center font-semibold tracking-wider">
					{heading}
				</h2>
				<div className=" h-[.15rem] w-12 mx-auto bg-black/80"></div>
				<div dangerouslySetInnerHTML={{__html: desc}} className="text-justify">
					
				</div>
			</div>
		);
	};

	return (
		<div className="space-y-6">
			<div className="w-fit mx-auto">
				<img className="size-28" src={data.home.logo} alt="logo" />
			</div>

			{data.home.motto_title && <Card heading={data.home.motto_title} desc={data.home.motto_description}/>}
			{data.home.vision_title && <Card heading={data.home.vision_title} desc={data.home.vision_description}/>}
			{data.home.mission_title && <Card heading={data.home.mission_title} desc={data.home.mission_description}/>}
		</div>
	);
};

export default SideBar;
