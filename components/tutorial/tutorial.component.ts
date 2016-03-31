const is = 'sm-tutorial';

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    e.stopPropagation();
    console.log('tutorial component');
    console.log(e.detail.state);
};

Polymer({
    is,
    listeners,
    mapStateToThis
});
