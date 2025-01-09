import { Box, Button, Text } from "grommet";
import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { IRootProps } from "../../util";
import './style.css'
import { LinkNext } from "grommet-icons";
import { COL_WIDTH } from "../../util/styles";

export function ContactPage(props: IRootProps) {
    return <div >
        <div className="rel-cont">
            <div
                className="fade-up header-text "
            >
                <div className="p-10L-10R">
                    <div className="header-image-text add-seriff " >Get In Touch</div>
                    <br />
                    <div className="header-image-subtext">Various ways to connect with us.</div>
                </div>
            </div>

            <div className="faded-image header-container">
                <img alt="about-header" src="/images/campus3.jpg" className="header-image" />
            </div>

        </div>

        <div className="fade-up fade-up-delay">
            <table id="contact-table" >
                {
                    props.width < COL_WIDTH*1.35 ?
                        <tbody>
                               <tr><td><ContactPic /></td></tr>
                               <tr><td><ContactDesc /></td></tr>
                               <tr><td><MailingListPic /></td></tr>
                            <tr><td><MailingListDesc /></td></tr>
                            <tr><td> <InstagramPic /></td></tr>
                            <tr><td><InstagramDesc /></td></tr>
                            
                         
                        </tbody> :
                        <tbody>
                              <tr>
                                <td><ContactPic /></td>
                                <td><ContactDesc /></td>
                            </tr>
                           
                            <tr>
                                <td>
                                    <MailingListPic />
                                </td>
                                <td>
                                    <MailingListDesc />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <InstagramPic />
                                </td>
                                <td>
                                    <InstagramDesc />
                                </td>
                            </tr>

                        </tbody>
                }

            </table>
        </div>


        <GlobalFooter {...props} />
    </div>
}

function InstagramPic() {
    return <div className="img-container ">
        <img alt="" src="/images/instagram.png" className="header-image" />
    </div>
}

function InstagramDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Connect with Us on Instagram</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >See past events and notifications for future ones.</Text></div>
        <div className="pad-b-10">
            <a href="https://www.instagram.com/harvard.gac/">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to our Instagram</b></Text>
                </Box>
            </a>
        </div>
    </>
}

function MailingListPic() {
    return <div className="img-container ">
        <img alt="mailing list" src="/images/email.png" className="header-image" />
    </div>
}

function MailingListDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Join Our Mailing List</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >Receive event notifications and updates. No spam, we promise.</Text></div>
        <div className="pad-b-10">
            <a  href="https://forms.gle/YPUbP1bHLampv22J7">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Go to form</b></Text>
                </Box>
            </a>
        </div>
    </>
}

function ContactPic() {
    return <div className="img-container ">
        <img alt="contact pic" src="/images/email2.png" className="header-image" />
    </div>
}

function ContactDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Email Us Directly</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >For questions, suggestions, and problems. </Text></div>
        <div className="pad-b-10">
            <a href="mailto:harvardGAC@gmail.com">
                <Box direction="row" >
                    <Button><LinkNext color="brand" size="medium" /></Button>&nbsp;<Text size='medium' color="brand"><b>Send an email</b></Text>
                </Box>
            </a>
        </div>
    </>
}