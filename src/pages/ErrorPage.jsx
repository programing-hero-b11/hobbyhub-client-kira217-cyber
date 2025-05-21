import React from "react";
import { Link } from "react-router";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          {error?.statusText ||
            error?.message ||
            "The page you're looking for doesn't exist."}
        </p>
        <Link to="/">
          <a className="inline-block hover:cursor-pointer mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
