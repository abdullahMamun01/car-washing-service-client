import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb3 = () => {
  const location = useLocation();

  // Split the pathname into parts, filter out any empty strings
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="mb-20">
      <div className="w-full mb-8">
        <div className="px-4 py-4 bg-white rounded-lg shadow-1 dark:shadow-card dark:bg-dark-2 dark:border-dark-3 sm:px-6 md:px-8 md:py-5">
          <ul className="flex items-center">
            <li className="flex items-center">
              <Link
                to="/"
                className="text-base font-medium hover:text-primary dark:hover:text-primary text-dark dark:text-white text-sky-600"
              >
                Home
              </Link>
              <span className="px-3 text-body-color dark:text-dark-6"> / </span>
            </li>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return isLast ? (
                <li
                  key={index}
                  className="text-base font-medium text-body-color dark:text-dark-6"
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </li>
              ) : (
                <li key={index} className="flex items-center">
                  <Link
                    to={to}
                    className="text-base font-medium text-body-color dark:text-dark-6 dark:hover:text-white hover:text-sky-700 text-sky-600"
                  >
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Link>
                  <span className="px-3 text-body-color dark:text-dark-6">
                    {" "}
                    /{" "}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb3;
