/** @format */

import React from "react";

import logo from "../../assets/img/logo.png";

const SideBar = () => {
	const Card = ({ heading, desc }) => {
		return (
			<div className="text-primary space-y-2">
				<h2 className="text-2xl text-center font-semibold tracking-wider">
					{heading}
				</h2>
				<div className=" h-[.15rem] w-12 mx-auto bg-black/80"></div>
				<p className="text-justify">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					aperiam similique quibusdam! Recusandae harum natus sit labore
					quaerat, eum quidem voluptates magnam sequi amet delectus accusamus.
					Voluptatem doloribus delectus qui. Lorem ipsum dolor sit amet
					
				</p>
			</div>
		);
	};

	return (
		<div className="space-y-6">
			<div className="w-fit mx-auto">
				<img className=" size-28" src={logo} alt="logo" />
			</div>

			<Card heading={"Motto"} />
			<Card heading={"Vision"} />
			<Card heading={"Mission"} />
		</div>
	);
};

export default SideBar;
