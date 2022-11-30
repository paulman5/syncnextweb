import React from "react";
import Filter from "../../lib/icons/Homepageicons/Filter";
import Sort from "../../lib/icons/Homepageicons/Sort";
import Add from "../../lib/icons/Homepageicons/Add";
import Modalform from "./Modalform";
import { useRef } from "react";

export default function Items() {
  return (
    <div className="mainboard">
      <div className="mainboard_upper">
        <div className="w-8/12 ml-10 mt-5">
          <h1 className="font-black text-sm">To-Do :</h1>
        </div>
        <div className="gap-1.5 flex w-4/12 mt-5 ml-64 text-xs">
          <div className="gap-1.5 flex cursor-pointer hover:text-slate-300 hover:fill-slate-300 transition ease-in-out">
            <Sort />
            <h1>Sort</h1>
          </div>
          <div className="flex gap-1.5 ml-2 cursor-pointer hover:text-slate-300 hover:fill-slate-300 transition ease-in-out">
            <Filter />
            <h1>Filter</h1>
          </div>
          <div className="flex cursor-pointer transition ease-in-out absolute ml-44 w-5 h-5 items-center hover:bg-slate-300" >
            <Add />
          </div>
          <Modalform />
        </div>
      </div>
      <div className="mainboard_middle text-xs text-slate-400">
        <div className="mainboard_middleleft ml-10 gap-10">
          <h1>Who</h1>
          <h1>Description</h1>
        </div>
        <div className="mainboard_middleright gap-28">
          <h1>Client name</h1>
          <h1>Date</h1>
          <h1>Priority</h1>
        </div>
      </div>
    </div>
  );
}
