import '../styles/globals.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
if (typeof window === 'object') {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  }
  return <Component {...pageProps} />
}

export default MyApp
