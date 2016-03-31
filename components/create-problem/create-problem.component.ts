const is = 'sm-create-problem';

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    e.stopPropagation();
    console.log('create problem component');
    console.log(e.detail.state);
};

Polymer({
    is,
    listeners,
    mapStateToThis
});
