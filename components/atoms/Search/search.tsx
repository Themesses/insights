import React from "react";
import { SearchIcon  } from "@primer/octicons-react";
interface SearchProps {
  name: string;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
}
const Search = ({ placeholder, name, value , autoFocus}: SearchProps): JSX.Element => {
  return (
    <div className="flex  py-2 w-max px-3 shadow-input border transition focus-within:ring focus-within:border-orange-500 focus-within:ring-orange-100 rounded-lg   ring-light-slate-6 items-center">
      <SearchIcon className="text-light-slate-9" size={18} />
      <input
        className="pl-2 w-52 font-medium placeholder:text-md  placeholder:font-medium text-md focus:outline-none placeholder:text-light-slate-9"
        autoFocus={autoFocus}
        placeholder={placeholder}
        name={name}
        value={value}
        type="search"
        id={name}
      />
    </div>
  );
};
export default Search;
