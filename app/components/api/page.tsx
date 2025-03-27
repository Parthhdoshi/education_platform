
import React from "react";
import Weather from "../weather/page";
import DogImage from "../dog/page";
import FakeStore from "../store/page";
const Page: React.FC = () => {
    return (
    <div className="p-6">
    <Weather />
    <DogImage />
    <FakeStore />
    </div>
    );
};

export default Page;
