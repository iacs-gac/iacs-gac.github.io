import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { Box, Button, Text } from "grommet";

import { IRootProps } from "../../util";
import "./style.css"
import { COL_WIDTH } from "../../util/styles";
import { LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";
export function JoinPage(props: IRootProps) {
    return <div >
        <div className="rel-cont">
            <div
                className="add-seriff fade-up header-text "
            >
                <div>
                    <div className="header-image-text" >Join</div>
                    <br />
                    <div className="header-image-subtext">
                    GAC meetings are held <b>every Tuesday at 4-5PM in SEC 1.316 Seminar Room.</b>
                    </div>
                    <br/>
                    <div className="header-image-subtext fade-up fade-up-delay">Below we have outlined some of the things that GAC works on.
                        <br />Let us know if you would like to
                        get involved with one or more of these efforts!
                    </div>
                </div>
            </div>

            <div className="faded-image header-container">
                <img alt="calendar header" src="/images/campus4.png" className="header-image" />
            </div>
        </div>
        <div className="fade-up fade-up-delay">
            <table id="join-table" className="p-15L-15R">
                {
                    props.width < COL_WIDTH * 1.35 ?
                        <tbody>
                            <tr><td><DinnersPic/></td></tr>
                            <tr><td><DinnersDesc/></td></tr>
                            <tr><td><AlumPic/></td></tr>
                            <tr><td><AlumDesc/></td></tr>
                            <tr><td><EventPic/></td></tr>
                            <tr><td><EventDesc/></td></tr>
                            <tr><td><MerchPic/></td></tr>
                            <tr><td><MerchDesc/></td></tr>
                            <tr><td><OtherPic/></td></tr>
                            <tr><td><OtherDesc/></td></tr>

                        </tbody> :
                        <tbody>
                            <tr>
                                <td><DinnersPic/></td>
                                <td><DinnersDesc/></td>
                            </tr>

                            <tr>
                                <td><AlumPic/></td>
                                <td><AlumDesc/></td>
                            </tr>
                            <tr>
                                <td><EventPic/></td>
                                <td><EventDesc/></td>
                            </tr>
                            <tr>
                                <td><MerchPic/></td>
                                <td><MerchDesc/></td>
                            </tr>
                            <tr>
                                <td><OtherPic/></td>
                                <td><OtherDesc/></td>
                            </tr>

                        </tbody>
                }

            </table>
        </div>

        <GlobalFooter {...props} />
    </div>
}


function DinnersPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/dinner.png" className="header-image" />
    </div>
}

function DinnersDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Small Group Dinners</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" ></Text></div>
        <div className="pad-b-10">
            
        </div>
    </>
}

function AlumPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/speaker.png" className="header-image" />
    </div>
}

function AlumDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Alumni Speaker Series</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" ></Text></div>
        <div className="pad-b-10">
            
        </div>
    </>
}

function EventPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/event.png" className="header-image" />
    </div>
}

function EventDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Event Planning</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" ></Text></div>
        <div className="pad-b-10">
            
        </div>
    
    </>}


function MerchPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/design.png" className="header-image" />
    </div>
}

function MerchDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Graphic Design</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" ></Text></div>
        <div className="pad-b-10">
            
        </div>
    
    </>}

function OtherPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/admin.png" className="header-image" />
    </div>
}

function OtherDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Other Tasks</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" ></Text></div>
        <div className="pad-b-10">
            
        </div>
    
    </>}