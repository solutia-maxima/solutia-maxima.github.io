import {createStore} from '../node_modules/redux/dist/redux.min.js';
import {rootReducer} from '../redux/reducers.ts';

//TODO this needs to become a singleton...I'm not sure if it is at the moment, I think each element declaration in the markup is creatign a new object
(() => {

    const is = 'sm-redux-store';

    const store = createStore(rootReducer);

    const ready = function() {
        store.subscribe(() => {
            this.fire('stateChange', {
                state: store.getState()
            });
        });
    };

    const listeners = {
        'dispatch': 'handleDispatch'
    };

    const handleDispatch = function(e) {
        store.dispatch(e.detail.action);
    };

    Polymer({
        is,
        ready,
        listeners,
        handleDispatch
    });
})();
