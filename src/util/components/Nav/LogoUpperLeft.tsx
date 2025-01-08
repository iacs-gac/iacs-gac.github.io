import react from 'react'
import { Link } from "react-router-dom";

import './style.css'
export function LogoUpperLeft() {
    return <div style={{ position: 'absolute' }}>
        <Link to="/"><img src="/Harvard_University_logo.svg.png" alt="logo" id='hlogo' /></Link>
    </div>
}