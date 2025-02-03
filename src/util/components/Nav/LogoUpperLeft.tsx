import { Link } from "react-router-dom";

import './style.css'
import { IRootProps } from "../..";
import { COL_WIDTH } from "../../styles";
export function LogoUpperLeft(props: IRootProps) {
    return <div style={{ position: 'absolute', zIndex: 1000, background: 'rgba(255, 255, 255,0)' }}>
        <Link to="/">{props.width < COL_WIDTH ? 
        <img src="/images/Harvard_University_logo_short.png" alt="logo" id='hlogo_short' /> :
            <img src="/images/Harvard_University_logo.svg.png" alt="logo" id='hlogo' />}</Link>
    </div>
}