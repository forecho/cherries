import Banner from "./banner";
import {Text, Grid, Link, Container} from "@nextui-org/react";
import {resources} from "../api";
import Item from "./item";
import {Box} from "./box";
import Footer from "./footer";

export default function Content() {
    return (
        <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
            <Container>
                <Banner/>
                <Grid.Container gap={2}>
                    {
                        resources.map((resource, i) => {
                            return (
                                <>
                                    <Grid xs={12} id={resource.title} className="title">
                                        <Link href={`#${resource.title}`}>
                                            <Text h3>
                                                {resource.title}
                                            </Text>
                                        </Link>
                                    </Grid>
                                    {
                                        resource.site.map((site, index) => {
                                            return (
                                                <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                                                    <Item {...site}/>
                                                </Grid>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                    <Footer/>
                </Grid.Container>
            </Container>
        </Box>
    );
}