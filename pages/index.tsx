import Head from 'next/head'
import {site,} from "./api";
import App from './components/app';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="keywords" content={site.keywords}/>
                <link rel="icon" href={site.favicon}/>
                <title>{site.seo.title}</title>
            </Head>
            <App/>
        </>
    )
}