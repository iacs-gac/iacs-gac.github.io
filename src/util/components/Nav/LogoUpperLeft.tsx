import { Link } from "react-router-dom";

import './style.css'
export function LogoUpperLeft() {
    return <div style={{ position: 'absolute', zIndex:1000, background:'rgba(255, 255, 255,0)' }}>
        <Link to="/"><img src="/images/Harvard_University_logo.svg.png" alt="logo" id='hlogo' /></Link>
    </div>
}