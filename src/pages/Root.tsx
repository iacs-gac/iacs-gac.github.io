import { useState, useEffect } from "react";
import { Box, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import {  HashRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { theme } from "../util/styles/theme";
import { Page404 } from "../util/components/Page404/Page404";
import { LogoUpperLeft } from "../util/components/Nav/LogoUpperLeft";
import { MenuUpperRight } from "../util/components/Nav/MenuUpperRight";
import { AboutPage } from "./AboutPage/AboutPage";
import { EventsPage } from "./EventsPage/EventsPage";
import { ContactPage } from "./ContactPage/ContactPage";
import ScrollToTop from "../util/components/ScrollToTop";
import { JoinPage } from "./JoinPage/JoinPage";

export function Root() {
    /* state management */
    const [width, setWindowWidth] = useState(0); // hooks
    useEffect(() => {
        updateDimensions(); // initial width call
        window.addEventListener("resize", updateDimensions); // listener
        return () => window.removeEventListener("resize", updateDimensions); // on unmount
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };


    return <Grommet
        full
        theme={deepMerge(grommet, theme)}
        id="scroller"
    >
        <Box fill>
            <HashRouter  >
             <ScrollToTop/>
                <LogoUpperLeft />
                <MenuUpperRight />
                <Routes>
                    <Route path="/" element={< LandingPage width={width} />} />
                    <Route path="/about" element={< AboutPage width={width} />} />
                    <Route path="/calendar" element={< EventsPage width={width} />} />
                    <Route path="/contact" element={< ContactPage width={width} />} />
                    <Route path="/join" element={< JoinPage width={width} />} />
                    <Route path="/*" element={<Page404 width={width} />} />
                </Routes>
            </HashRouter>
        </Box>

    </Grommet>


}