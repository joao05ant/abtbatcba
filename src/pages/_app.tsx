// _app.tsx

import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css'; // Importa seus estilos globais aqui
import '@fontsource/permanent-marker'; // Importa a fonte Permanent Marker do Google Fonts

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
