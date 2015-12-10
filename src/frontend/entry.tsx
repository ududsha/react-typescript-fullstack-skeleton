/// <reference path="../../typings/react-router/history.d.ts"/>
/// <reference path="../../typings/react/react-dom.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>
import { createHistory, useBasename  } from 'history';
import {render} from "react-dom";
import AppRouter from "./AppRouter";
import * as React from "react";
window["jQuery"] = window["$"] = require("jquery");

render(
    <AppRouter history={createHistory()}/>, document.getElementById("root")
);
