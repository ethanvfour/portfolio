import { useEffect } from "react";

function WrongPlace() {
  useEffect(() => {
    document.title = "404 Error";
  }, []);

  return (
    <div className="flex justify-center items-center">
      WHoa there buddy hahaha
    </div>
  );
}

export default WrongPlace;
