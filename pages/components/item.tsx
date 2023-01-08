import {Card, Grid, Text, Link} from "@nextui-org/react";
import {ResourceItem} from "../api";
import Image from 'next/image'

export default function Item(item: ResourceItem) {
    return (
            <Card isPressable css={{p: "$6", mw: "400px"}}>
                <Link href={item.url} target="_blank">
                <Card.Header>
                    <Image
                        alt={item.title}
                        src={item.logo}
                        width="34"
                        height="34"
                    />
                    <Grid.Container css={{pl: "$6"}}>
                        <Grid xs={12}>
                            <Text h4 css={{lineHeight: "$xs"}}>
                                {item.title}
                            </Text>
                        </Grid>
                        <Grid xs={12}>
                            <Text css={{color: "$accents8"}}>{item.description}</Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                </Link>

            </Card>
    );
}