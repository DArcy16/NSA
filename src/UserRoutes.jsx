import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"
import Faculty from "./pages/Faculty";
import NotFound from "./pages/NotFound";



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
			},
			{
				path: "faculty",
				children : [{
					path: ":major",
					element: <Faculty />
				}]
			}, 
			{
				path: "*",
				element: <NotFound />
			}
		],

	},
	{
		path: "*",
		element: <NotFound />
	}
];

export default UserRoutes