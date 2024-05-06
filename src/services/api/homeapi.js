/** @format */

import { URL } from "../api_endpont";

export const fetchHome = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}home`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyCategories = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}facultysubcategories`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchAdCategories = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}adsubcategories`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFaculty = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyAboutDepartment/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};
