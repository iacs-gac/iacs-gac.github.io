import { Footer, Box, Text, Anchor } from "grommet";
import { Instagram, Linkedin, MailOption } from 'grommet-icons'
import { Link } from "react-router-dom";
import { IRootProps } from "../..";
import { COL_WIDTH } from "../../styles";

export function GlobalFooter(props: IRootProps) {
    return <>
        <Footer background="dark-1" pad="large" title="Links" role="contentinfo" id="top-footer"
        >
            {
                props.width < COL_WIDTH ? <table><tbody>
                    <tr><td><SiteContent /><br /></td></tr>
                    <tr><td><GetInTouch /><br /></td></tr>
                    <tr><td> <AddInfo /></td></tr>
                </tbody></table> :
                    <>
                        <SiteContent />
                        <GetInTouch />
                        <AddInfo />
                    </>
            }
        </Footer>
        <Footer
            background="dark-4"
            pad={{ horizontal: 'large', vertical: 'small' }}
            title="Copyright"
            role="none"
        >
            <Box direction="row" gap="small">
                <Link to="/">{props.width<COL_WIDTH?
                /**<img src="/images/hlogo.png" alt="logo" id="hlogo-footer-2" />: */
                <img src="/images/Harvard_University_logo_short.png" alt="logo" id="hlogo-footer-2" />:
                <img src="/images/Harvard_University_logo.svg.png" alt="logo" id="hlogo-footer" />}</Link>
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
                    href="https://www.linkedin.com/school/harvard-school-of-engineering-and-applied-sciences/"
                    icon={<Linkedin color="brand" />}
                />
            </Box>
            <Text textAlign="center" size="small">
                Copyright © {new Date().getUTCFullYear()}
            </Text>
        </Footer>
    </>


}

/* - - - - - - - - SUB COMPONENTS - - - - - - - - */

function SiteContent() {
    return <Box gap="medium" className="footer-content" >
        <Text weight="bold" size="medium">
            Site Content
        </Text>
        <Box>
            <Link to='/'><Anchor color={'brand-light'}>Home</Anchor></Link>
            <Link to='/about'><Anchor color={'brand-light'}>About</Anchor></Link>
            <Link to='/calendar'><Anchor color={'brand-light'}>Calendar</Anchor></Link>
            <Link to='/join'><Anchor color={'brand-light'}>Join</Anchor></Link>

        </Box>

    </Box>
}

function GetInTouch() {
    return <Box gap="medium"  className="footer-content">
        <Text weight="bold" size="medium">
            Get In Touch
        </Text>
        <Box>
        <Link to='/contact'><Anchor color={'brand-light'}>Contact</Anchor></Link>
            <Anchor color={'brand-light'} href="https://forms.gle/YPUbP1bHLampv22J7">Join Mailing List</Anchor>
            <Anchor color={'brand-light'} href="mailto:harvardGAC@gmail.com" >Contact Us Directly</Anchor>
            <Anchor href="https://www.instagram.com/harvard.gac/" color={'brand-light'} >Instagram</Anchor>
        </Box>
    </Box>
}

function AddInfo() {
    return <Box gap="medium" className="footer-content" >
        <Text weight="bold" size="medium">
            Additional Information
        </Text>
        <Box>
        <Anchor color={'brand-light'} href="https://engage.gsas.harvard.edu/" >Harvard Engage</Anchor>
            <Anchor color={'brand-light'} href="https://gsas.harvard.edu/resources" >Resources</Anchor>
            <Anchor href="https://seas.harvard.edu/" color={'brand-light'} >SEAS Home</Anchor>
            <Anchor color={'brand-light'} href="https://seas.harvard.edu/about-us/visit-us/allston/science-engineering-complex">Science & Engineering Complex</Anchor>
        </Box>
    </Box>
}