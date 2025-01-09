import { Box } from "grommet";
import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { COL_WIDTH } from "../../util/styles";
import { IRootProps } from "../../util";
import './style.css'

export function AboutPage(props: IRootProps) {
    return <div >
        <div className="rel-cont">
            <div
                className="add-seriff fade-up header-text "
            >
                <div>
                    <div className="header-image-text" >About</div>
                    <br />
                    <div className="header-image-subtext">Learn more about our aims.</div>
                </div>
            </div>

            <div className="faded-image header-container">
                <img alt="about-header" src="/images/campus2.jpg" className="header-image" />
            </div>
          
        </div>
        <div className="fade-up ">
            {
                props.width < COL_WIDTH + 100 ?
                    <Box >
                        <Box fill justify="center" className="p-15L-15R">
                            <GAC />
                        </Box>
                        <TextBody />
                    </Box> : <Box align="center"
                        style={{ paddingBottom: '10%' }}
                    >
                        <Box fill direction="row" className="p-15L-15R" >
                            <Box width={"90%"} >
                                <GAC />
                            </Box>
                            <Box fill >
                                <TextBody />
                            </Box>
                        </Box>
                    </Box>
            }
        </div>

        <GlobalFooter {...props} />
    </div>
}
/* - - - - - - - - SUB COMPONENTS - - - - - - - - */
/**
 * 
 * @returns 
 */
function TextBody() {
    return <div className="about-text-body">
        <p>
            The <b>Graduate Advisory Committee (GAC)</b> on Diversity, Inclusion, and Leadership is a Departmental Graduate Student Organization representing students and alumni of Harvard’s professional master programs.

        </p>
        <p>
            Established in <b>Summer 2020</b> as a collaborative effort between students, faculty, and administrators, the GAC and its student leaders have a mandate to
        </p>
        <ul>
            <li> work with staff to foster an inclusive and welcoming environment</li>
            <li>
                design guidelines for the program diversity, inclusion, and belonging strategy

            </li>
            <li>
                amplify the voices of underrepresented groups
            </li>
            <li>
                provide a forum for students to gain diversity and inclusion leadership experience within the academic domain
            </li>
        </ul>
    </div>
}

function GAC() {
    return <img src="/gac_logo.png" alt="GAC" id='gac-img' />
}

