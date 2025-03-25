import React from "react";
import Weather from "./weather/page";
import DogImage from "./dog/page";


const Page: React.FC = () => {
  return (
    <div className="p-6">
      <Weather />
      <DogImage />
    </div>
  );
};

export default Page;