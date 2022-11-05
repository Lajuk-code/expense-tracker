import React from "react";
import ReactDOM from "react-dom";
import {Provider} from './context/context'
import { SpeechProvider } from "@speechly/react-client";

import App from "./App"
import "./index.css"



ReactDOM.render(
    <SpeechProvider appId="96fcf22c-1790-4138-81ad-848d34a2fc12" language="en-US">
        <Provider >
            <App/>
        </Provider>
    </SpeechProvider>
    ,document.getElementById("root"));