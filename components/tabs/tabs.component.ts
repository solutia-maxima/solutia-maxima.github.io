const is = 'sm-tabs';

const ready = function() {
    this.selectedTab = 0;
};

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    e.stopPropagation();
    console.log('tabs component');
    console.log(e.detail.state);
};

const handleDispatchClick = function(e) {

    const newTemp = this.$.tempInput.value;
    console.log(newTemp);

    this.action = {
        type: 'CHANGE_TEMP',
        newTemp
    };
};

Polymer({
    is,
    ready,
    listeners,
    mapStateToThis,
    handleDispatchClick
});
