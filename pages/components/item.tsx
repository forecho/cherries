import { Card, Grid, Text, Link } from "@nextui-org/react";
import {ResourceItem} from "../api";

export default function Item(item: ResourceItem) {
    return (
        <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
                <img
                    alt={item.title}
                    src={item.logo}
                    width="34px"
                    height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            {item.title}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>{item.description}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
        </Card>
    );
}