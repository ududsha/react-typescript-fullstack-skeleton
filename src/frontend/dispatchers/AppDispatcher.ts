/// <reference path="../../../../typings/flux/flux.d.ts"/>
import {Dispatcher} from "flux";
import {SomethingPayload} from "../actions/SomethingActions";

type Payload = SomethingActions | any;

export default  new Dispatcher<Payload>();