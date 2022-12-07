import { AppProps } from 'next/app'
import "../styles/Homepagestyling/modalform.css"
import "../styles/Homepagestyling/mainboard.css"
import "../styles/Sidebarstyling/sidenav.css"
import "../styles/Kanbanstyling/Kanban.css"
import "../styles/globals.css"
import Sidenav from "../components/Sidebar/Sidenav"
import { useEffect } from 'react'
import { registerLicense } from '@syncfusion/ej2-base';
import '../../node_modules/@syncfusion/ej2/material.css';
import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import "../../node_modules/@syncfusion/ej2-react-documenteditor/styles/material.css";


// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0djXH5ccn1QTmFeUUA=');

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
  document.getElementById("__next")!.className = "application";
  }, []);
  return (
    <div className="flex w-full h-full">
      <Sidenav />
      <main className="bg-gray-200 h-full w-full absolute!important">
      <Component {...pageProps} />
      </main>
    </div>
  );
}

