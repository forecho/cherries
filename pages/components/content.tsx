import Banner from "./banner";
import {Container, Card, Text, Grid} from "@nextui-org/react";
import { resources } from "../api";
import Item from "./item";
import { Box } from "./box";

export default function Content(){
    return (
    <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
        <Banner/>
        <Container lg css={{mt: '$10'}}>
            <Grid.Container gap={2}>
                {
                    resources.map((resource, i) => {
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
                                            <Grid xs={12} md={6} lg={4} key={index}>
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
    </Box>
    );
}