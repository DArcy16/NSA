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

export const fetchAbout = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}about`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchLibrary = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}librarysetting`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchLibraryMember = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}all_libraryMember`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchLatestNews = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}latest_NewActivity`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchNews = async (type) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}get_New/${type}`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchNewDetails = async (id) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}get_New_By_Id/${id}`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchGallery = async () => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(`${URL}gallery`, requestOption);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchNewsAndActivities = async (filter = "") => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}get_NewActivity/${filter}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchSingleNew = async (id = "") => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}get_NewActivity_By_Id/${id}`,
			requestOption
		);
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

export const fetchFacultyProgramCategories = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}getFacultyProgramCategories/${catId}${
				subCatId ? `/${subCatId}` : ""
			}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyProgram = async (catId, subCatId, programId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyProgram/${catId}${
				subCatId ? `/${subCatId}` : ""
			}/${programId}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyPeople = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyMember/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyResearchWork = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyResearchWork/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyDegreeOffered = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyDegreeOffered/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchFacultyActivity = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}facultyActivity/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchAdministration = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}ad_AdministrationDepartment/${catId}${
				subCatId ? `/${subCatId}` : ""
			}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchAdPeople = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}ad_ADMember/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchAdActivity = async (catId, subCatId) => {
	const requestOption = {
		headers: {
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			`${URL}ad_ADActivity/${catId}${subCatId ? `/${subCatId}` : ""}`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};
