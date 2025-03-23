
import React from "react";
import Weather from "../weather/page";
import DogImage from "../dog/page";
import UsersList from "../userlist/page";
import FakeStore from "../store/page";
const Page: React.FC = () => {
    return (
    <div className="p-6">
    <Weather />
    <DogImage />
    <UsersList />
    <FakeStore />

    </div>
    );
};

export default Page;