import { AppProps } from 'next/app'
import "../styles/Homepagestyling/modalform.css"
import "../styles/Homepagestyling/mainboard.css"
import "../styles/Sidebarstyling/sidenav.css"
import "../styles/globals.css"
import Sidenav from "../components/Sidebar/Sidenav"
import { useEffect } from 'react'
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('License Key');

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
  document.getElementById("__next")!.className = "application";
  }, []);
  return (
    <div className="flex w-full h-full ">
      <Sidenav />
      <main className="bg-gray-200 h-full w-full absolute!important">
      <Component {...pageProps} />
      </main>
    </div>
  );
}

