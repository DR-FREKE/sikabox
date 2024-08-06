import { useLocation } from "react-router-dom";
import { DetailView } from "../components/detail.view";
import { getUrlPath } from "../lib/utils";
import { MethodType, useRequest } from "../hooks/request.hook";
import { useEffect } from "react";

const CountryDetail = () => {
  const location = useLocation();
  const is_home = getUrlPath(location);
  const name = is_home.replace(/_/g, " ");
  const { loading, data, makeRequest } = useRequest({ url: `https://restcountries.com/v3.1/name/${name}?fullText=true`, method: MethodType.Get });

  const country_data = data?.[0];

  useEffect(() => {
    makeRequest();
  }, [name]);

  return (
    <div className="bg-white box-border shadow border px-10 py-5 rounded-lg flex flex-col gap-[30px]">
      {loading || !data ? (
        <span>loading...</span>
      ) : (
        <>
          <div className="flex gap-5">
            <div className="rounded-md bg-gray-100 w-[50px] h-[50px] overflow-hidden flex justify-center items-center">
              <img src={country_data?.flags.svg} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span>{country_data.name.common}</span>
              <small>population: {new Intl.NumberFormat().format(country_data?.population)}</small>
            </div>
          </div>
          <hr />
          <DetailView data={country_data} />
        </>
      )}
    </div>
  );
};

export default CountryDetail;
