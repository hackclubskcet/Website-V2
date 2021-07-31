import '../styles/globals.css'
import '../styles/index.css'
import {supabase} from "../utils/supabaseClient";

function MyApp({ Component, pageProps }) {
  function passLoggedIn() {
    return supabase.auth.user() !== null;
  }

 if (typeof window === "object") {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  return <Component {...pageProps } loggedIn={passLoggedIn()}/>
}

export default MyApp;
