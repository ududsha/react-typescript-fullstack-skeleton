/// <reference path="../../../../typings/lodash/lodash.d.ts"/>

import AppDispatcher from "../dispatchers/AppDispatcher";
import {Payload} from "../actions/Payload";
import {default as actions, SomethingPayload, DoSomethingPayload, DoSomethingElsePayload} from "../actions/SomethingActions";
import constants from "../constants/SomethingConstants";
import * as _ from "lodash";
import * as events  from "events";


export var CHANGE_EVENT: string = 'change';

export class SomethingStore extends events.EventEmitter {

    constructor() {
        super();
    }

    emitChange(): void {
        this.emit(CHANGE_EVENT);
    }
    

    addChangeListener(callback: Function): void {
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback: Function): void {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getRandomId(): string {
        return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    }


    getState(): { something:any } {
        return { something:'my-react-typescript-skeleton' };
    }

}

var somethingStore = new SomethingStore();

// Register callback to handle all updates
AppDispatcher.register((action: SearchPayload) => {

    switch (action.actionType) {
        case constants.DO_SOMETHING:
		
             // somethingStore.do...
			 
             break;

        case constants.DO_SOMETHING_ELSE:
		
             // somethingStore.do...
			 
             break;

    }

});

export default somethingStore;