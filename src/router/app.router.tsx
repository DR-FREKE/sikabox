import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error.page";
import CountriesRoot from "../pages/countries";
import CountryDetail from "../pages/country.detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/countries",
    element: <CountriesRoot />,
    children: [
      //   {
      //     path: "",
      //     element: <div>Countries</div>,
      //   },
      {
        path: ":countryId",
        element: <CountryDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
