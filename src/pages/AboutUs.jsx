/** @format */

import React from "react";

import VisionMissionCard from "../components/aboutus/VisionMissionCard";
import { useFetchAbout } from "../hooks/useHome";
import Loading from "./Loading";

const AboutUs = () => {
	const { data, isLoading } = useFetchAbout();

	if (isLoading) return <Loading />;

	return (
		<div className="">
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
			{/* 
			<div className="section_padding2 max-w-[683px] mx-auto">
				<h2 className="uppercase text-2xl tracking-wide font-semibold text-center">
					{data?.about?.motto_title}
				</h2>
				<div className="w-16 h-0.5 bg-black mx-auto mt-2"></div>
				<p
					dangerouslySetInnerHTML={{ __html: data?.about?.motto_description }}
					className="text-center text-sm mt-4"
				/>
			</div> */}

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

			{/* <div className="section_padding2 vision-mission-card aside_card_desc">
				<div className="relative w-[800px] max-w-full mx-auto h-fit mt-10">
					<div
						className={`text-white bg_gradient1 transform p-10 ${"-translate-x-6 -translate-y-6"} z-10`}
					>
						<h2 className="text-xl font-semibold uppercase">
							{data?.about?.motto_title}
						</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: data?.about?.motto_description,
							}}
							className="text-sm text-white core_value"
						/>
					</div>
					<div className="absolute bottom-0 right-0 w-full h-full bg-third/40 -z-10"></div>
				</div>
			</div> */}

			<div className="section_padding2 mx-auto">
				<h2 className="uppercase text-2xl tracking-wide font-semibold text-center">
					{data?.about?.motto_title}
				</h2>
				<div className="w-16 h-0.5 bg-black mx-auto mt-2"></div>
				{/* <p
					dangerouslySetInnerHTML={{ __html: data?.about?.motto_description }}
					className="text-center text-sm mt-4"
				/> */}
				<div className=" grid grid-cols-4 gap-4 mt-8 auto-row-max">
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Professionalism</h2>
						<p className="">
							We apply the high standards in the process of teaching and
							learning, in the conduct of research, and in the provision of
							service.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Integrity </h2>
						<p className="">
							We practice sincerity, honesty, and equity in carrying out our
							duties and responsibilities.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Continuous Improvement</h2>
						<p className="">
							We monitor and evaluate our planning, processes, outputs and
							outcomes for the improvement of quality in teaching, research, and
							service.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Collaboration </h2>
						<p className="">
							We nurture a caring and sharing organizational culture while we
							work collaboratively with external stakeholders and colleagues
							from international academic institutions.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Uniqueness</h2>
						<p className="">
							Standing as a comprehensive academic institution and offering
							degrees in Arts, Natural Sciences, Social Sciences, Medicine and
							Sports, we endeavour to be a leading university in wisdom.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Diversity </h2>
						<p className="">
							We recognize, appreciate and value the existence of diversity in
							terms of gender, religion, ethnicity, social status, tradition and
							customs among students, staff and stakeholders.
						</p>
					</div>
					<div className=" bg-secondary text-white p-4 rounded-md">
						<h2 className="text-lg">Responsibility </h2>
						<p className="">
							We utilize our expertise for the betterment of the community by
							complying organizational regulations and ethical standards and by
							taking into consideration of environmental concerns and the
							sustainability of the society.
						</p>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
