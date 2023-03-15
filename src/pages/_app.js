import '@/styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faEnvelope);
import { Provider } from 'react-redux';
import store from '../store/index';

export default function App({ Component, pageProps }) {
  return <Provider store={store}> <Component {...pageProps} /> </Provider>
}
