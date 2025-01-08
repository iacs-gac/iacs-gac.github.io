import React from "react"
import { Box, Text } from "grommet";
import "./style.css"
import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";


export function LandingPage(props: { width: number }) {
    return <Box fill overflow={"auto"}>
        <div className="lp-header">
            <div className="fade-up" >
                <div id="lp-header-title-cont"><Text id="lp-header-title" size="xxlarge">Harvard Graduate Advisory Committee</Text></div>
                <div id='lp-header-text'> Founded in Summer 2020, represents Harvard’s professional master’s
                    students and alumni, working with staff to promote inclusion, design diversity strategies,
                    amplify underrepresented voices, and offer leadership opportunities in diversity within academia.</div>
            </div>
        </div>
        <div >
            <table className="fade-up fade-up-delay" style={{width:'100%', textAlign:'center',}}>
                <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>y</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <GlobalFooter/>
    </Box>
}