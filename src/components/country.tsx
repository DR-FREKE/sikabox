import { Link } from "react-router-dom";
import { countries_data } from "../lib/fake";

export const Country = ({ name, id, flag, population, currency }: (typeof countries_data)[number]) => (
  <Link to={`${name.toLowerCase().replace(/ /g, "_")}`} state={{ name }} className="bg-white flex self-stretch items-center gap-5 p-3 rounded-lg">
    <div className="w-[40px] h-[40px] rounded-md bg-red-100 flex justify-center items-center overflow-hidden">
      <img src={flag} className="object-cover w-full h-full" />
    </div>
    <div className="flex flex-1 justify-between">
      <div className="flex flex-col">
        <h3>{name}</h3>
        <small>population: {population}</small>
      </div>
      <small>{currency}</small>
    </div>
  </Link>
);
