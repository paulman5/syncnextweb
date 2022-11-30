import React from "react";
import { useState } from "react";
import Add from "../../lib/icons/Homepageicons/Add";


export default function Addmodal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={showModal ? "main" : "hidden"}>
      <div className="Modalform">
        <div></div>
      </div>
    </div>
  );
}
