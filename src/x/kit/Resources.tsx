import { Box } from "grommet";
import { COL_WIDTH } from "../../util/styles";

export function Resources(props: { width: number }) {
    return <div>
        <div className="section-divider" id="resources">Resources</div>
        <div className="section-body">
            {
                props.width < COL_WIDTH ? <Box>
                    <Box fill justify="center" >
                        <Paragraph1 />
                    </Box>
                    <Paragraph2 />
                </Box> : <Box align="center">
                    <Box fill direction="row" style={{ maxWidth: COL_WIDTH * 1.5 }} >
                        <Box fill>
                            <Paragraph1 />
                        </Box>
                        <Box fill >
                            <Paragraph2 />
                        </Box>
                    </Box>
                </Box>
            }
        </div>
    </div>
}

function Paragraph1() {
    return <p>Finding funding for you graduate education can be tough and tedious.
        With busy schedules, there's little time to go scouring the internet for them.
        GAC is committed to making education accessible and support historically
        marginalized groups.<b> We've compiled a list of scholarhips and fellowships,
            found on the Scholarships & Fellowships page.</b></p>
}

function Paragraph2() {
    return <p>
        If you are aware of an opportunity we've missed,
        please let us know by emailing us at harvardGAC@gmail.com
        so we can update our list. Your help is greatly appreciated!
    </p>
}
