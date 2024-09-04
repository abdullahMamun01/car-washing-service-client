import { Filter, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function ServiceFilter() {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <Button className="text-white col-span-1 h-auto ">
        <Filter className="w-3.5 h-3.5 mr-2 " /> Filter
      </Button>
      <div className="col-span-2 bg-white p-1.5">
        <h1 className=" my-auto">
          There are (<span className="text-green-500 font-bold">6</span>)
          results in total
        </h1>
      </div>
      <FilterSearch />
      <div className="col-span-3 flex gap-1 items-center">
        <label htmlFor="" className="text-primary mr-1">Sort By: </label>
        <select className="w-2/3 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg">
          <option value="">Select a category</option>
          <option value="60">1:00 hour</option>
        </select>
      </div>
    </div>
  );
}

function FilterSearch() {
  return (
    <form className=" mx-auto col-span-6 w-full h-[33px]">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-2  px-10 text-sm text-gray-900 border border-gray-300  bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </form>
  );
}
