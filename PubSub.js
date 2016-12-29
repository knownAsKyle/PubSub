var PubSub = (function () {
    function PubSub() {this.events = {};}
    PubSub.prototype.on = function (eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    };
    PubSub.prototype.update = function (eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fn) {
                fn(data);
            });
        }
    };
    return PubSub;
}());