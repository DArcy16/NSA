/** @format */

import { Slider } from "antd";
import React from "react";
import BannerSlider from "../components/home/BannerSlider";

import SideBar from "../components/home/SideBar";
import Main from "../components/home/Main";
import Aside from "../components/home/Aside";
import ApprovementSection from "../components/home/ApprovementSection";

const Home = () => {
	return (
		<div>
			<BannerSlider />

			<div className="flex section_padding1">
				<div className="w-1/4 pl-4">
                    <SideBar />
                </div>

				<div className="w-2/4 px-12">
                    <Main />
                </div>
				<div className="w-1/4 pr-4">
                    <Aside />
                </div>
			</div>

            <div className="section_padding1">
                <ApprovementSection />
            </div>

		</div>
	);
};

export default Home;
