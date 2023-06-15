import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";
import CreateRoom from "../../components/Cards/CreateRoom";
import AllRooms from "@/components/Cards/AllRooms";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CreateRoom />
        </div>
        <div className="w-full mb-12 px-4">
          <AllRooms color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
