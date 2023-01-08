import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Container, Card, Row, Text, Grid, Spacer} from "@nextui-org/react";
import styles from '../styles/Home.module.css'
import Menu from "./components/menu";
import Item from "./components/item";
import Banner from './components/banner';
import {useState} from "react";
import {resources, site, Site} from "./api";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="keywords" content={site.keywords}/>
                <link rel="icon" href={site.favicon}/>
                <title>{site.seo.title}</title>
            </Head>
            <Menu/>
            <Banner/>

            <Container lg css={{mt: '$10'}}>
                <Grid.Container gap={2}>
                    {
                        resources.map((resource, index) => {
                            return (
                                <>
                                    <Grid xs={12}>
                                        <Text weight="black" size={30}>
                                            {resource.title}
                                        </Text>
                                    </Grid>
                                    {
                                        resource.site.map((site, index) => {
                                            return (
                                                <Grid xs={12} md={6} lg={4}>
                                                    <Item {...site}/>
                                                </Grid>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </Grid.Container>
            </Container>
        </>
    )
}

export default Home