const is = 'sm-problem-index';

const ready = function() {
};

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    console.log('problem index component');
    console.log(e.detail.state);
};

const sort = function(a, b) {
    if (a.timestamp > b.timestamp) {
        return -1;
    }

    if (a.timestamp < b.timestamp) {
        return 1;
    }

    return 0;
};

Polymer({
    is,
    ready,
    sort,
    listeners,
    mapStateToThis
});
