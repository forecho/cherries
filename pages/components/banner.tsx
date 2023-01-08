import {Col, Container, Row, Spacer, Text} from "@nextui-org/react";

export default function Banner() {
    return (
        <>
            <Row justify="center" align="center">
                <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold" >
                    Find Trading Opportunities
                </Text>
            </Row>
            <Spacer y={1}/>
            <Row justify="center" align="center">
                <Text color="gary-8" size={20}>
                    Trading is a lifelong journey. You must accept you will not get rich overnight. You have to
                    learn to
                    survive.
                </Text>
            </Row>
        </>
    );
}