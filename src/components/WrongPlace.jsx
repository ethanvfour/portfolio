import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function WrongPlace() {
  const mainRef = useRef(null);

  useEffect(() => {
    document.title = "404 Error";
    // move focus to main content so screen reader users land here
    if (mainRef.current) mainRef.current.focus();
  }, []);

  return (
    <div
      ref={mainRef}
      role="main"
      aria-labelledby="notfound-heading"
      tabIndex={-1}
      className="flex flex-col justify-center items-center p-3 w-full h-full min-h-screen"
    >
      <h1 id="notfound-heading" className="text-2xl font-bold mb-2">
        {"404 — Page not found"}
      </h1>
      <p className="text-base text-gray-700 mb-4">The page you tried to open doesn't exist.</p>
      <Link
        to="/"
        className={`text-base transition-all duration-500 text-center hover:text-[#000000] focus:text-[#000000] text-[#999999]`}
        aria-label="Go back to the home page"
      >
        Click to go back
      </Link>
    </div>
  );
}

export default WrongPlace;
