import {Text, Container, Link, Row} from "@nextui-org/react";

export default function Footer() {
    return (
        <Container css={{mt: "$12", mb: "$10"}} color={"#fff"}>
            <Row justify="center">
                Created by&#20;
                <Text b>
                    <Link href="https://forecho.com" target="_blank" rel="noopener noreferrer">
                        forecho
                    </Link>
                </Text>
                &#20;on&#20;
                <Text b>
                    <Link href="https://github.com/forecho/cherries" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                </Text>
            </Row>
        </Container>
    );
};
