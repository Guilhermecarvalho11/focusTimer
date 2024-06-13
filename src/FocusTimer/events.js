import { controls } from "./elements.js";
import * as actions from './actions.js';

export function registerConstrols() {
    controls.addEventListener('click', (event) => {
        const act = event.target.dataset.action;

        if(typeof actions[act] != 'function'){
            return
        }

        actions[act]();
    })
}