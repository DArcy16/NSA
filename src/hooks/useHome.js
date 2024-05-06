/** @format */

import { useQuery } from "@tanstack/react-query";
import {
	fetchAdCategories,
	fetchFaculty,
	fetchFacultyCategories,
	fetchHome,
} from "../services/api/homeapi";

export const useFetchHome = () => {
	return useQuery({ queryKey: ["home"], queryFn: fetchHome });
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

export const useFetchFaculty = (catId, subCatId) => {
	return useQuery({
		queryKey: ["faculty_categories", catId, subCatId],
		queryFn: () => fetchFaculty(catId, subCatId),
	});
};
