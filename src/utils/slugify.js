/** @format */

export const slugify = (name) => {
	return name.toLowerCase().split("-").join("_").split(" ").join("-");
};

export const reSlugify = (name) => {
	return name.split("-").join(" ").split("_").join("-");
};

export const formatDate = (date) => {
	// Get day, month, and year
	var day = date.getDate().toString().padStart(2, "0");
	var month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-based
	var year = date.getFullYear().toString();

	// Define month names array
	var monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// Get month name
	var monthName = monthNames[date.getMonth()];

	// Construct the formatted date string
	var formattedDate = day + " " + monthName + ", " + year;

	return formattedDate;
};

export const getArray = (number) => {
	return Array.from({ length: number }, (_, i) => i + 1);
};