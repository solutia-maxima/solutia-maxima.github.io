const is = 'sm-problem-index';

const ready = function() {
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
    sort
});
