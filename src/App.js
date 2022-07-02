import React from "react";
import {Route, Routes} from "react-router-dom";
import Page from "./components/page";
import Home from "./components/Home";
import Projects from "./components/Projects";
import P2 from "./components/P2";
import P3 from "./components/P3";
import P4 from "./components/P4";
import P1 from "./components/P1";

function App(){
    const styles ={
        section:{
            
        backgroundColor : "#E4F3D8",
        }
    }

    return(
        <Routes>
            <Route path="/" element={<Page />}>
            <Route index element={<Home />}/>
            </Route>
            <Route exact path="/projects" element={<Page />}>
                <Route index element={<Projects />}/>
            </Route>
            <Route exact path="/projects/1" element={<Page />}>
                <Route index element={<P1 />}/>
            </Route>
            <Route exact path="/projects/2" element={<Page />}>
                <Route index element={<P2 />}/>
            </Route>
            <Route exact path="/projects/3" element={<Page />}>
                <Route index element={<P3 />}/>
            </Route>
            <Route exact path="/projects/4" element={<Page />}>
                <Route index element={<P4 />}/>
            </Route>
        </Routes>
        )
}

export default App