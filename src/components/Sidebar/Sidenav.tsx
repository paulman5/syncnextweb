import React, { useEffect } from "react";
import { navData } from "../../lib/SidebarData/navData1";
import Expandicon from "../../lib/icons/Sidebaricons/Expandicon";
import Expandiconback from "../../lib/icons/Sidebaricons/Expandiconback";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidenav() {
  const [Expanded, setExpanded] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(-1); 
  
   // Saving user data in localstorage
   useEffect(() => {
    const data = window.localStorage.getItem("MY_SIDEBAR_APP");
    if (data !== null) setExpanded(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_SIDEBAR_APP", Expanded.toString());
  }, [Expanded]);

  const router = useRouter()
  const currentRoute = router.pathname

  return (
    // Checking if sidebar is expanded and if so switch classes
    <nav className="nav-container">
      <div className={`expandeffect ${Expanded ? "sidebar" : "short"}`}>
        <div className="sidebartop">
          <button
            className="menuexpand"
            onClick={() => {
              setExpanded(!Expanded);
            }}
          >
            {Expanded ? <Expandiconback /> : <Expandicon />}
          </button>
        </div>
        <div className="separator"></div>
        <div className="sidebarmiddle">
          {navData.map(({ link, icon: Icon, title }, key) => {
            return (
              <Link
                href={link}
                key={key}
                className= { currentRoute === link ? "active-nav" : "inactive-nav"}
                onMouseEnter={() => setTooltipIndex(key)} onMouseLeave={() => setTooltipIndex(-1)}
              >
                <div className="row">
                  <span>
                    <Icon />
                  </span>
                  {Expanded ? title : ( tooltipIndex === key ? ( <div className="tooltip">{title}</div> ) : null )}                
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
