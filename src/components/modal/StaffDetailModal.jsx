/** @format */

import { Modal } from "antd";
import React from "react";

const StaffDetailModal = ({ info, isOpen, setIsOpen, head = false }) => {
	const handleCancel = () => {
		setIsOpen(false);
	};

	console.log(info);

	return (
		<Modal
			title=""
			width={"fit-content"}
			footer=""
			open={isOpen}
			onCancel={handleCancel}
		>
			<article className="space-y-2 bg_info_card md:w-[580px] font-semibold">
				<img
					className={`w-[150px] h-[180px] drop-shadow-md bg-white object-cover rounded-md`}
					src={info?.title_photo}
					alt={info?.name}
				/>
				<p className="text-xs">{info?.position}</p>
				<h2 className={`text-base font-semibold`}>{info?.name}</h2>
				<p>
					<span className="w-1/3 inline-block">Position</span> :{"   "}
					<span className="pl-3">{info?.position}</span>
				</p>
				{info?.degree && (
					<p>
						<span className="w-1/3 inline-block">Degree</span> :{"   "}
						<span
							dangerouslySetInnerHTML={{ __html: info?.degree }}
							className="pl-3"
						></span>
					</p>
				)}
				{info?.num_of_research_work && (
					<p>
						<span className="w-1/3 inline-block">Number of Research Work</span>
						{"   "}: <span className="pl-3">{info?.num_of_research_work}</span>
					</p>
				)}
				{head && info?.body && (
					<p dangerouslySetInnerHTML={{ __html: info?.body }} />
				)}
			</article>
		</Modal>
	);
};

export default StaffDetailModal;
