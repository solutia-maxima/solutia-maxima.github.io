const is = 'sm-hero';

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    e.stopPropagation();

    const state = e.detail.state;

    this.$.tempDiv.innerHTML = state.temp;

    console.log('hero component');
    console.log(e.detail.state);
};

Polymer({
    is,
    listeners,
    mapStateToThis
});
