import { MetaReducer, INIT } from '@ngrx/store';

export const localStorageMetaReducer: MetaReducer = (reducer) => { 
    return (state, action) => {
        let nextState = state;
        if(action.type === INIT) {
            const oldStateStr = localStorage.getItem('appState');
            if(oldStateStr) {
                nextState = JSON.parse(oldStateStr);
            }
        }

        nextState = reducer(nextState, action);

        if(action.type !== INIT) { 
            localStorage.setItem('appState', JSON.stringify(nextState));
        }


        return nextState;
    };
};
