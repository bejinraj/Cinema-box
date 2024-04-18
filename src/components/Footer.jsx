import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2030{" "}
        <Link to="/" className="hover:underline">
          Cinema Box
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Youtube
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
