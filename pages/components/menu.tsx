import {Navbar, Button, Link, Text} from "@nextui-org/react";

export default function Menu() {
    const color = 'error';
    const variant = 'default';
    return (
        <Navbar variant="sticky">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content activeColor={color} hideIn="xs" variant={variant}>
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link isActive href="#">Customers</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} color={color} href="#">
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}