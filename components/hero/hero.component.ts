const is = 'sm-hero';

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    e.stopPropagation();
    console.log('hero component');
    console.log(e.detail.state);
};

Polymer({
    is,
    listeners,
    mapStateToThis
});
