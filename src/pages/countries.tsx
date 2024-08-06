import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header";
import { AppButton } from "../components/button";
import { SearchNormal1 } from "iconsax-react";
import { FlatList } from "../components/list";
import { countries_data } from "../lib/fake";
import { getUrlPath } from "../lib/utils";
import { Country } from "../components/country";
import { MethodType, useRequest } from "../hooks/request.hook";
import React, { useEffect, useState } from "react";
import { DefaultComp } from "../components/default.comp";

// process the needed data from the API
const processCountries = (data: any, index: number) => ({
  name: data.name.common,
  currency: Object.values(data.currencies ?? {})
    .map((currency: any) => `${currency.name} (${currency.symbol})`)
    .join(", "),
  capital: data.capital?.join(","),
  flag: data.flags?.svg,
  population: new Intl.NumberFormat().format(data.population),
  timezones: data.timezones.join(", "),
  language_spoken: Object.values(data.languages ?? {})?.join(", "),
});

const CountriesRoot = () => {
  const { loading, data, errors, makeRequest } = useRequest({ url: "https://restcountries.com/v3.1/all", method: MethodType.Get });
  const location = useLocation();
  const [search, setSearch] = useState("");

  const is_home = getUrlPath(location);

  useEffect(() => {
    makeRequest();
  }, []);

  // handle onChange event when you type in the search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /** filter the countries...this allows us search for the country(ies) we need */
  const filterCountries = (countries: (typeof processCountries)[]) => {
    return countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
  };

  /** render the different countries */
  const renderItem = ({ item }: { item: (typeof countries_data)[number] }) => <Country {...item} />;

  const countries = data?.map(processCountries); // processed countries data
  const filtered_countries = filterCountries(countries ?? []); // filtered countries

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 md:flex-row flex-col">
        <div className="flex flex-col gap-10 bg-gray03 md:w-[45%] w-full p-10 md:px-12 px-5 max-h-screen overflow-scroll">
          {loading || !data ? (
            <span>loading...</span>
          ) : (
            <>
              <form className="flex gap-1 self-stretch bg-white shadow-sm rounded-lg p-1 top-1 sticky">
                <input
                  value={search}
                  aria-label="Search contacts"
                  placeholder="Search"
                  type="search"
                  name="q"
                  className="flex-1 px-5 outline-none  placeholder:text-[14px]"
                  onChange={handleSearchChange}
                />

                <AppButton icon={<SearchNormal1 size={20} />} className="shadow-none" />
              </form>
              <FlatList data={filtered_countries} renderItem={renderItem} className="gap-4" />
            </>
          )}
        </div>

        <div id="detail" className="md:w-[55%] w-full md:p-10 p-4">
          {is_home == "countries" ? <DefaultComp /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default CountriesRoot;
