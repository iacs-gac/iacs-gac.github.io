import { Footer, Box, Text, Anchor } from "grommet";
import { Instagram, Linkedin, MailOption } from 'grommet-icons'
import { Link } from "react-router-dom";

export function GlobalFooter() {
    return <>
        <Footer background="dark-1" pad="large" title="Links" role="contentinfo">
            site map
        </Footer>
        <Footer
            background="dark-4"
            pad={{ horizontal: 'large', vertical: 'small' }}
            title="Copyright"
            role="none"
        >
            <Box direction="row" gap="small">
                <Link to="/"><img src="/Harvard_University_logo.svg.png" alt="logo" style={{ width: 150 }} /></Link>
            </Box>
            <Box direction="row" gap="xxsmall" justify="center">
                <Anchor
                    a11yTitle="Join the the Mailing List"
                    href="https://forms.gle/YPUbP1bHLampv22J7"
                    icon={<MailOption color="brand" />}
                />
                <Anchor
                    a11yTitle="See what's happening"
                    href="https://www.instagram.com/harvard.gac/"
                    icon={<Instagram color="brand" />}
                />

                <Anchor
                    a11yTitle="Harvard on Linkedin"
                    href="https://www.linkedin.com/school/harvard-university"
                    icon={<Linkedin color="brand" />}
                />
            </Box>
            <Text textAlign="center" size="small">
                Copyright © {new Date().getUTCFullYear()}
            </Text>
        </Footer>
    </>


}

