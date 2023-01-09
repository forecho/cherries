import {Col, Container, Row, Spacer, Text} from "@nextui-org/react";
import { site } from "../api";

export default function Banner() {
    return (
        <>
            <Row justify="center" align="center">
                <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold" >
                    {site.banner.title}
                </Text>
            </Row>
            <Spacer y={1}/>
            <Row justify="center" align="center">
                <Text color="gary-8" size={20}>
                    {site.banner.subtitle}
                </Text>
            </Row>
        </>
    );
}