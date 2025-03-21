import React from "react";
import Weather from "./weather/page";
import DogImage from "./dog/page";
import UsersList from "./userlist/page";

const Page: React.FC = () => {
  return (
    <div className="p-6">
      <Weather />
      <DogImage />
      <UsersList />
    </div>
  );
};

export default Page;
