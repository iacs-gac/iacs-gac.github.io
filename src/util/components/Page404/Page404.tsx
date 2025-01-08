import { Box, Text } from "grommet";
import { GlobalFooter } from "../Nav/GlobalFooter";


export function Page404() {
    return <Box fill
    >
        <div className="single-page">
            <Box direction="column">
                <div style={{ paddingBottom: 20 }}>
                    <Text style={{ fontSize: '4.5rem' }}>
                        404
                    </Text>
                </div>
                <div>
                    <Text style={{ fontSize: '1.8rem', color: 'gray' }}>
                        Page not found
                    </Text>
                </div>
            </Box>

        </div>
        <GlobalFooter />
    </Box>
}