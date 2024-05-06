/** @format */

import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import BannerSlider from "../components/home/BannerSlider";

import SideBar from "../components/home/SideBar";
import Main from "../components/home/Main";
import Aside from "../components/home/Aside";
import ApprovementSection from "../components/home/ApprovementSection";
import { useFetchHome } from "../hooks/useHome";
import Loading from "./Loading";

const Home = () => {
	const { data, isLoading } = useFetchHome();

	if (isLoading) return <Loading />;

	return (
		<div>
			<BannerSlider />

			<div className="flex section_padding1">
				<div className="w-1/4 pl-4">
					<SideBar data={data} />
				</div>

				<div className="w-2/4 px-12">
					<Main data={data} />
				</div>
				<div className="w-1/4 pr-4">
					<Aside data={data} />
				</div>
			</div>

			<div className="section_padding1">
				<ApprovementSection data={data} />
			</div>
		</div>
	);
};

export default Home;
