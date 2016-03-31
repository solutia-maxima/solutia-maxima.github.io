const is = 'sm-tabs';

const ready = function() {
    this.selectedTab = 0;
};

const listeners = {
    'stateChange': 'mapStateToThis'
};

const mapStateToThis = function(e) {
    console.log('tabs component');
    console.log(e.detail.state);
};

const handleDispatchClick = function(e) {
    this.fire('dispatch', {
        action: {
            type: 'CHANGE_TEMP',
            newTemp: 'goodbye'
        }
    });
};

Polymer({
    is,
    ready,
    listeners,
    mapStateToThis,
    handleDispatchClick
});
