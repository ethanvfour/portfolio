import { useEffect } from "react";
import { Link } from "react-router-dom";

function WrongPlace() {
  useEffect(() => {
    document.title = "404 Error";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-3 w-full h-full min-h-screen">
      <p className="text-2xl font-bold mb-4">{"404 could not find page :("}</p>
      <Link
        to="/"
        className={`text-base transition-all duration-500 text-center hover:text-[#000000] focus:text-[#000000] text-[#999999]`}
      >
        Click to go back
      </Link>
    </div>
  );
}

export default WrongPlace;
