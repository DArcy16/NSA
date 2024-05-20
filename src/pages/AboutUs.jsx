/** @format */

import React from "react";

import VisionMissionCard from "../components/aboutus/VisionMissionCard";
import { useFetchAbout } from "../hooks/useHome";
import Loading from "./Loading";

const AboutUs = () => {
	const {data,  isLoading} = useFetchAbout();

	if(isLoading) return <Loading />



	return (
		<div>
			<div className="h-[356px] bg_filler flex bg-white justify-center items-center">
				<h2 className="text-3xl font-semibold text-white">About Us</h2>
			</div>
			<div className="section_padding2 flex items-center gap-6">
				<img className=" w-1/2" src={data?.about?.about_image} alt="photo" />
				<div className="h-fit ">
					<span className="font-semibold">{data?.about?.about_subtitle}</span>
					<h2
						dangerouslySetInnerHTML={{ __html: data?.about?.about_title }}
						className="text-2xl font-bold"
					/>
					<p
						dangerouslySetInnerHTML={{ __html: data?.about?.about_description }}
						className="text-justify text-sm mt-4"
					/>
				</div>
			</div>

			<div className="section_padding2 max-w-[683px] mx-auto">
				<h2 className="uppercase text-2xl tracking-wide font-semibold text-center">
					{data?.about?.motto_title}
				</h2>
				<div className="w-16 h-0.5 bg-black mx-auto mt-2"></div>
				<p
					dangerouslySetInnerHTML={{ __html: data?.about?.motto_description }}
					className="text-center text-sm mt-4"
				/>
			</div>

			{data?.about?.vision_title && (
				<div className="section_padding2">
					<VisionMissionCard
						img={data?.about?.vision_image}
						heading={data?.about?.vision_title}
						desc={data?.about?.vision_description}
					/>
				</div>
			)}

			{data?.about?.mission_title && (
				<div className="section_padding2">
					<VisionMissionCard
						img={data?.about?.mission_image}
						heading={data?.about?.mission_title}
						desc={data?.about?.mission_description}
						reverse
					/>
				</div>
			)}

			
		</div>
	);
};

export default AboutUs;
