import { Box, Text } from "grommet";
import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { COL_WIDTH } from "../../util/styles";
import './style.css'
export function AboutPage(props: { width: number }) {
    return <div >
        <div className="about-page">
            <div className="section-divider" id="about">About</div>
            <div className="section-body">
                <Box fill overflow={"none"} >
                    {
                        props.width < COL_WIDTH ? <Box>
                            <Box fill justify="center" style={{ padding: 25 }}>
                                <GAC />
                            </Box>
                            <TextBody />
                        </Box> : <Box align="center">
                            <Box fill direction="row" style={{ maxWidth: COL_WIDTH * 1.5 }} >
                                <Box width={"50%"}>
                                    <GAC />
                                </Box>
                                <Box fill style={{ margin: 25 }}>
                                    <TextBody />
                                </Box>
                            </Box>
                        </Box>
                    }
                </Box>
            </div>
        </div>

        <GlobalFooter />
    </div>
}
/* - - - - - - - - SUB COMPONENTS - - - - - - - - */
/**
 * 
 * @returns 
 */
function TextBody() {
    return <div>
        <p>
            The Graduate Advisory Committee (GAC) on Diversity, Inclusion, and Leadership is a Departmental Graduate Student Organization representing students and alumni of Harvard’s professional master programs. ​Established in Summer 2020 as a collaborative effort between students, faculty, and administrators, the GAC and its student leaders have a mandate to:
        </p>
        <ul>
            <li> Work with staff to foster an inclusive and welcoming environment</li>
            <li>
                Design guidelines for the program diversity, inclusion, and belonging strategy

            </li>
            <li>
                Amplify the voices of underrepresented groups
            </li>
            <li>
                Provide a forum for students to gain diversity and inclusion leadership experience within the academic domain
            </li>
        </ul>
    </div>
}

function GAC() {
    return <img src="/gac_logo.png" alt="GAC" style={{ margin: 34 }} />
}

