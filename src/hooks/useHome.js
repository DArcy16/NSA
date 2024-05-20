/** @format */

import { useQuery } from "@tanstack/react-query";
import {
	fetchAbout,
	fetchAdActivity,
	fetchAdCategories,
	fetchAdPeople,
	fetchAdministration,
	fetchFaculty,
	fetchFacultyActivity,
	fetchFacultyCategories,
	fetchFacultyDegreeOffered,
	fetchFacultyPeople,
	fetchFacultyProgram,
	fetchFacultyProgramCategories,
	fetchFacultyResearchWork,
	fetchHome,
	fetchLibrary,
	fetchLibraryMember,
	fetchNewsAndActivities,
} from "../services/api/homeapi";

export const useFetchHome = () => {
	return useQuery({ queryKey: ["home"], queryFn: fetchHome });
};

export const useFetchAbout = () => {
	return useQuery({ queryKey: ["about"], queryFn: fetchAbout });
};

export const useFetchLibrary = () => {
	return useQuery({ queryKey: ["library"], queryFn: fetchLibrary });
};

export const useFetchLibraryMember = () => {
	return useQuery({
		queryKey: ["library_member"],
		queryFn: fetchLibraryMember,
	});
};

export const useFetchNewsAndActivities = () => {
	return useQuery({
		queryKey: ["library_member"],
		queryFn: fetchNewsAndActivities,
	});
};

export const useFetchFacultyCategories = () => {
	return useQuery({
		queryKey: ["faculty_categories"],
		queryFn: fetchFacultyCategories,
	});
};

export const useFetchAdCategories = () => {
	return useQuery({
		queryKey: ["ad_categories"],
		queryFn: fetchAdCategories,
	});
};

// Faculty
export const useFetchFaculty = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_categories", catId, subCatId],
		queryFn: () => fetchFaculty(catId, subCatId),
	});
};

export const useFetchFacultyProgramCategories = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_program_categories", catId, subCatId],
		queryFn: () => fetchFacultyProgramCategories(catId, subCatId),
	});
};

export const useFetchFacultyProgram = (catId, subCatId, programId) => {
	return useQuery({
		queryKey: ["faculty_program", catId, subCatId, programId],
		queryFn: () => fetchFacultyProgram(catId, subCatId, programId),
	});
};

export const useFetchFacultyPeople = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_people", catId, subCatId],
		queryFn: () => fetchFacultyPeople(catId, subCatId),
	});
};

export const useFetchFacultyResearchWork = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_researchWork", catId, subCatId],
		queryFn: () => fetchFacultyResearchWork(catId, subCatId),
	});
};

export const useFetchFacultyDegreeOffered = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_degreeoffered", catId, subCatId],
		queryFn: () => fetchFacultyDegreeOffered(catId, subCatId),
	});
};

export const useFetchFacultyActivity = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_activity", catId, subCatId],
		queryFn: () => fetchFacultyActivity(catId, subCatId),
	});
};

// Administration

export const useFetchAdministration = (catId, subCatId) => {
	return useQuery({
		queryKey: ["administration", catId, subCatId],
		queryFn: () => fetchAdministration(catId, subCatId),
	});
};

export const useFetchAdPeople = (catId, subCatId) => {
	return useQuery({
		queryKey: ["ad_people", catId, subCatId],
		queryFn: () => fetchAdPeople(catId, subCatId),
	});
};

export const useFetchAdActivity = (catId, subCatId) => {
	return useQuery({
		queryKey: ["ad_activity", catId, subCatId],
		queryFn: () => fetchAdActivity(catId, subCatId),
	});
};
