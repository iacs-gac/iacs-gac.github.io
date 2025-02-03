import { GlobalFooter } from "../../util/components/Nav/GlobalFooter";
import { Text } from "grommet";

import { IRootProps } from "../../util";
import "./style.css"
import { COL_WIDTH } from "../../util/styles";
import { MeetingInfo } from "../../util/components/MeetingInfo";

export function JoinPage(props: IRootProps) {
    return <div >
        <div className="rel-cont">
            <div
            
                className="fade-up header-text "
            >
                <div className="p-10L-10R">
                    <div className="header-image-text add-seriff " >Join</div>
                    <br /><br/>
                    <div className="header-image-subtext">
                        <MeetingInfo/>
                    </div>
                    <br />
                    <div className="header-image-subtext fade-up">Below we have outlined some of the things that GAC works on.
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
            <table id="join-table">
                {
                    props.width < COL_WIDTH * 1.35 ?
                        <tbody>
                            <tr><td><DinnersPic /></td></tr>
                            <tr><td><DinnersDesc /></td></tr>
                            <tr><td><AlumPic /></td></tr>
                            <tr><td><AlumDesc /></td></tr>
                            <tr><td><EventPic /></td></tr>
                            <tr><td><EventDesc /></td></tr>
                            <tr><td><MerchPic /></td></tr>
                            <tr><td><MerchDesc /></td></tr>
                            <tr><td><OtherPic /></td></tr>
                            <tr><td><OtherDesc /></td></tr>

                        </tbody> :
                        <tbody>
                            <tr>
                                <td><DinnersPic /></td>
                                <td><DinnersDesc /></td>
                            </tr>

                            <tr>
                                <td><AlumPic /></td>
                                <td><AlumDesc /></td>
                            </tr>
                            <tr>
                                <td><EventPic /></td>
                                <td><EventDesc /></td>
                            </tr>
                            <tr>
                                <td><MerchPic /></td>
                                <td><MerchDesc /></td>
                            </tr>
                            <tr>
                                <td><OtherPic /></td>
                                <td><OtherDesc /></td>
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
        <div className="pad-b-10"><Text size="1.3rem" >
        Several times a semester GAC organizes subsidized small group dinners for DS/CSE graduate students. Each dinner will have a GAC member to faciliate conversation and handle logisics.  </Text></div>
       
    </>
}

function AlumPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/speaker.png" className="header-image" />
    </div>
}

function AlumDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Alumni Speaker Series</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >
            We work to bring former students from our programs back to campus to talk about their job, the application process, salary exectations, interviews, and make connections.
        </Text></div>
        <div className="pad-b-10">
            <Text size="1.3rem" >
                Your role could be contacting and coordinating with potential speakers, organizing zoom meetings/rooms, or advertising the event.
            </Text>

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
        <div className="pad-b-10"><Text size="1.3rem" >
            Aside from our regularly occuring events, we hold everything from safe spaces to trivia to campus escapes. We're open to new suggestions from members, so please don't hesitate if you've got a fun idea!</Text></div>
        <div className="pad-b-10">
            <Text size="1.3rem" >
            There are many potential roles involved in event planning, including helping with setup and takedown, assisting with guest registration, guiding attendees, managing supplies, providing technical support, and offering general assistance throughout the event to ensure everything runs smoothly.
            </Text>
        </div>

    </>
}


function MerchPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/design.png" className="header-image" />
    </div>
}

function MerchDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Graphic Design</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >
                Interested in designing GAC merch? Or perhaps a new logo? There's plenty of opportunities for design work in GAC, including perhaps contributing to or redesigning this very website! 
            </Text></div>
      

    </>
}

function OtherPic() {
    return <div className="img-container ">
        <img alt="dinner" src="/images/admin.png" className="header-image" />
    </div>
}

function OtherDesc() {
    return <><div className="pad-b-10"><Text size="2.3rem" className="add-seriff cp-title ">Other Tasks</Text></div>
        <div className="pad-b-10"><Text size="1.3rem" >
            There are plenty of other adminstrative, planning, and creative tasks available. Come to our recurring meetings to hear more about how you can help! 
            </Text></div>
            <div className="pad-b-10"><Text size="1.3rem" >
            You can always pitch a project if you have idea that fits your skillset! 
            </Text></div>

    </>
}