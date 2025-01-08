import { useState, useEffect } from "react";
import { Box, grommet, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { theme } from "../util/styles/theme";
import { Page404 } from "../util/components/Page404/Page404";
import { LogoUpperLeft } from "../util/components/Nav/LogoUpperLeft";
import { MenuUpperRight } from "../util/components/Nav/MenuUpperRight";
import { AboutPage } from "./AboutPage/AboutPage";

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
    >
        <Box fill>
            <BrowserRouter basename="/" >
                <LogoUpperLeft />
                <MenuUpperRight />
                <Routes>
                    <Route path="/" element={< LandingPage width={width} />} />
                    <Route path="/about" element={< AboutPage width={width} />} />

                    <Route path="/*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Box>

    </Grommet>


}