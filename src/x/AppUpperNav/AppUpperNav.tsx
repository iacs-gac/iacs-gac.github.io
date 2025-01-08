import React from "react"
import { Header, Box, Text, Tip } from "grommet";
import { Contact, Instagram, MailOption, Shield } from "grommet-icons";
import { Link } from "react-router-dom";
import { copyToClipboard } from "../../util/functions";

export function AppUpperNav() {
    return <Header
        pad="small"
        background={"dark_brown"}
    >
        {/* - - - left-hand side - - - */}
        <Box direction="row" >
            <Link to="/">
                <Shield color="beige0" />
            </Link>
            &nbsp;
            <Text color="beige0"><b>G A C</b></Text>
        </Box>
        {/* - - - right-hand side - - - */}
        <Box direction="row">
            <Box className="nav-button" >
                <Link to="/" style={{ color: "#e0bbb4" }}>
                    Home
                </Link>
            </Box>
            <Box className="nav-button" >
                <Link to="/resources" style={{ color: "white" }}>
                    Resources
                </Link>
            </Box>
            <Box className="nav-button" >|</Box>
            <Tip content="Instagram">
                <Box className="nav-button">
                    <div>
                        <a href="https://www.instagram.com/harvard.gac/" target="_blank" rel="noreferrer">
                            <Instagram />
                        </a>
                    </div>
                </Box>
            </Tip>
            <Tip content="Join Mailing List">
                <Box className="nav-button">
                    <div>
                        <a href="https://forms.gle/YPUbP1bHLampv22J7" target="_blank" rel="noreferrer">
                            <MailOption />
                        </a>
                    </div>
                </Box>
            </Tip>
            <Tip content="Copy Email">
                <Box className="nav-button" onClick={() => {
                    copyToClipboard("harvardGAC@gmail.com", "Email copied to clipboard")
                }}>
                    <div>
                        <Contact />
                    </div>
                </Box>
            </Tip>
        </Box>
    </Header>
}