import { Box, Text } from "grommet";
import { GlobalFooter } from "../Nav/GlobalFooter";
import { IRootProps } from "../..";


export function Page404(props:IRootProps) {
    return <Box fill
    >
        <div className="single-page gray-grad">
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
        <GlobalFooter {...props} />
    </Box>
}