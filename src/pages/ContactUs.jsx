/** @format */

import React, { useState } from "react";

import photo from "../assets/img/slider2.png";
import CustomInput from "../components/__common/CustomInput";
import CustomTextArea from "../components/__common/CustomTextArea";
import { RightArrow } from "../assets/icons/Icons";

const ContactUs = () => {
	const [formData, setFormData] = useState();
	return (
		<div className="flex gap-6 justify-center top_section_padding">
			<img className="w-1/2" src={photo} alt="" />
			<form className="w-1/2 space-y-3 max-w-[447px] lg:px-10 lg:py-8 shadow-lg">
				<h2 className="text-xl font-bold">Send Message</h2>
				<CustomInput name={"name"} placeholder={"Name"} setForm={setFormData} />
				<CustomInput name={"subject"} placeholder={"Subject"} setForm={setFormData} />
				<CustomInput name={"email"} placeholder={"Email"} setForm={setFormData} />
				<CustomInput name={"phone"} placeholder={"Phone Number"} setForm={setFormData} />
				<CustomTextArea name={"message"} height="100px" placeholder={"Your Message"} setForm={setFormData} />
        <button className="btn_primary flex items-center gap-2 px-4 py-2">
          Send Us <RightArrow className="text-lg" />
        </button>
			</form>
		</div>
	);
};

export default ContactUs;
