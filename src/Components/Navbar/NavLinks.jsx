import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("btn-down")) {
        setIsActive(false);
      }
    });
  });

  return (
    <div className="relative space-y-4">
      <div className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <i className="fas fa-sort-down fa-lg btn-down" />
      </div>
      {isActive && (
        <ul className="nav-links absolute space-y-2 text-center py-2 px-4 w-32 bg-gray-900 bg-opacity-90 rounded-md">
          <li>
            <Link className="tracking-wide hover:font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="tracking-wide hover:font-bold" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="tracking-wide hover:font-bold" to="/tvshows">
              TV Shows
            </Link>
          </li>
          <li>
            <Link className="tracking-wide hover:font-bold" to="/mylists">
              My List
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavLinks;
