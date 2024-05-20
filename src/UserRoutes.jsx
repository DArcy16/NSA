import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"
import Faculty from "./pages/Faculty";
import NotFound from "./pages/NotFound";
import Administration from "./pages/Administration";
import Library from "./pages/Library";
import NewsAndActivities from "./pages/NewsAndActivities";
import NewDetails from "./pages/NewDetails";

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
				path: "news-&-activities",
				children : [{
					index: true,
					element: <NewsAndActivities />
				},
				{
					path: ":title",
					element : <NewDetails />
				},
				{
					path: "sling",
					element : <div className="top_section_padding h-96 flex items-center justify-center text-4xl">Sling</div>
				}
			]
			},
			{
				path: "administration-departments",
				children : [{
					path: ":major",
					element: <Administration />
				}]
			},
			{
				path: "library",
				children : [{
					path: ":type",
					element : <Library />
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