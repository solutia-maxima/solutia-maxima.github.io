import {createStore} from '../node_modules/redux/dist/redux.min.js';
import {rootReducer} from '../redux/reducers.ts';

(() => {

    const is = 'sm-redux-store';

    const store = createStore(rootReducer);

    store.subscribe(function() {
        console.log('state change');
        this.fire('stateChange', store.getState());
    });

    Polymer({
        is
    });
})();
