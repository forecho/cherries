import { ReactElement } from "react";
import { Box } from "./box";
import Content from "./content";

export default function Layout({ children }: { children: ReactElement }): JSX.Element {
    return (
        <Box
            css={{
                maxW: "100%",
            }}
        >
            {children}
            <Content />
        </Box>
    );
}
