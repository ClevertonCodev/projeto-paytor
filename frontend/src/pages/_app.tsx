import type { AppProps } from 'next/app';
import '../components/layout/layout.css';
import '../components/footer/footer.css';
import '../components/loader/loader.css';
import  '../styles/curriculum.css' ;
import  '../styles/escolaridade.css' ;
import  'bootstrap/dist/css/bootstrap.min.css' ;
import '../components/button/button.css';
import '../components/modal/modal.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps}/> 
    
    </>
  )
}
