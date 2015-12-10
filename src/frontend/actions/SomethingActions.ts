import AppDispatcher from "../dispatchers/AppDispatcher";
import SomethingConstants from "../constants/SomethingConstants";
import {Payload} from "./Payload";
import Helper from "../../utils/Helper";


export interface DoSomethingPayload {
    something: string;
}

export interface DoSomethingElsePayload {

	somethingElse:string;
}

export interface SomethingPayload extends DoSomethingPayload, DoSomethingElsePayload, Payload {
    somethingEngineShared: string;
}

export class SomethingActions {

    doSomething(something: string): void {
        AppDispatcher.dispatch({ actionType: SomethingConstants.DO_SOMETHING, something: something });
    }

    doSomethingElse(something: string): void {
        AppDispatcher.dispatch({ actionType: SomethingConstants.DO_SOMETHING_ELSE, somethingElse: something });
    }
}

export default new SomethingActions();