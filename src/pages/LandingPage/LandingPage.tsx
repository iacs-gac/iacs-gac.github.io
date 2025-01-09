import { Box, Button, Text } from "grommet";
import "./style.css"
import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { IRootProps } from "../../util";
import { COL_WIDTH } from "../../util/styles";
import { LinkNext } from "grommet-icons";
import { Link } from "react-router-dom"

export function LandingPage(props: IRootProps) {
    return <div>
        <div className="rel-cont">
            <div
                className="add-seriff fade-up header-text "
            >
                <div>
                    <div id="lp-header-title-cont"><Text id="lp-header-title" size="xxlarge">Harvard Graduate Advisory Committee</Text></div>
                    <div id='lp-header-text'> Founded in Summer 2020, represents Harvard’s professional master’s
                        students and alumni, working with staff to promote inclusion, design diversity strategies,
                        amplify underrepresented voices, and offer leadership opportunities in diversity within academia.</div>
                </div>
            </div>

            <div className="faded-image header-container">
                <img alt="landing header" src="/images/campus.png" className="header-image" />
            </div>

        </div>

        <div className="fade-up fade-up-delay">
            <table id="lp-table" className="p-15L-15R">
                {
                    props.width < COL_WIDTH * 1.35 ?
                        <tbody>
                            <tr><td><AboutPic/></td></tr>
                            <tr><td><AboutDesc/></td></tr>
                            <tr><td><EventsPic/></td></tr>
                            <tr><td><EventsDesc/></td></tr>
                            <tr><td><ContactPic/></td></tr>
                            <tr><td><ContactDesc/></td></tr>
                            <tr><td><JoinPic/></td></tr>
                            <tr><td><JoinDesc/></td></tr>

                        </tbody> :
                        <tbody>
                            <tr>
                                <td><AboutPic/></td>
                                <td><AboutDesc/></td>
                            </tr>

                            <tr>
                                <td><EventsPic/></td>
                                <td><EventsDesc/></td>
                            </tr>
                            <tr>
                                <td><ContactPic/></td>
                                <td><ContactDesc/></td>
                            </tr>
                            <tr>
                                <td><JoinPic/></td>
                                <td><JoinDesc/></td>
                            </tr>

                        </tbody>
                }

            </table>
        </div>
        <GlobalFooter {...props} />
    </div>
}


function AboutPic() {
    return <div className="img-container ">
        <img alt="" src="/images/about.png" className="header-image" />
    </div>
}

function AboutDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">About Us</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >Learn more about our organizations history and goals.</Text></div>
        <div className="pad-b-10">
            <Link to="about">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to page</b></Text>
                </Box>
            </Link>
        </div>
    </>
}

function EventsPic() {
    return <div className="img-container ">
        <img alt="" src="/images/party.jpeg" className="header-image" />
    </div>
}

function EventsDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Upcoming Events</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >See what's coming up on our calendar. 
            <br/><br/>Events include small group dinners, alumni speakers, parties, and more!</Text></div>
        <div className="pad-b-10">
            <Link to="calendar">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to page</b></Text>
                </Box>
            </Link>
        </div>
    </>
}

function ContactPic() {
    return <div className="img-container ">
        <img alt="" src="/images/contact.png" className="header-image" />
    </div>
}

function ContactDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Contact Us</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >Suggestions? Need Help? Get in touch. </Text></div>
        <div className="pad-b-10">
            <Link to="contact">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to page</b></Text>
                </Box>
            </Link>
        </div>
    </>
}

function JoinPic() {
    return <div className="img-container ">
        <img alt="" src="/images/join.png" className="header-image" />
    </div>
}

function JoinDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Join Us</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >Curious about how you can get involved?</Text></div>
        <div className="pad-b-10">
            <Link to="join">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to page</b></Text>
                </Box>
            </Link>
        </div>
    </>
}