import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"



const UserRoutes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about-nsa",
				element: <AboutUs />
			},
			{
				path: "contact-us",
				element: <ContactUs />
			}
		],
	},
];

export default UserRoutes