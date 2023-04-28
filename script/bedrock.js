
var $ = function() {
    var _ids = {};

    function _id (id) {
        if (!(id in _ids)) {
            _ids[id] = document.getElementById(id);
        }

        return _ids[id];
    }

    var _html = document.getElementsByTagName('html')[0];
    var _body = document.getElementsByTagName('body')[0];

    function _go (fn) {
        window.onload = fn;
    }

    function _range(start, stop, step) {
        if (!stop) {
            stop = start;
            start = 0;
        }

        if (!step) step = 1;
        
        var r = [];

        for (var i = start; i <= stop; i += step) {
            r.push(i);
        }

        return r;
    }

    function _rand(start, stop) {
        if (!stop) {
            stop = start;
            start = 0;
        }

        return Math.floor(Math.random() * (stop - start) + start);
    }

    return {
        id: _id,
        html: _html,
        body: _body,
        go: _go,
        range: _range,
        rand: _rand
    };
}();

function MaxQueue(maxSize) {
    var start = 0;

    this.Add = function(item) {
        if (this.length == maxSize)
            this.pop();

        this.unshift(item);
    }
}

MaxQueue.prototype = new Array()

Object.defineProperties(Object.prototype, { extend: { enumerable: false, value: function(options) {
    for (var opt in options) {
        Object.defineProperty(this.prototype, opt, { enumerable: false, value: options[opt] });
    }
}}});

Object.extend({
    map: function(func) {
        var newObj = {};
        for (var o in this) {
            newObj[o] = func(this[o]);
        }
        return newObj;
    }
});

Array.extend({
    reduce: function(func) {
        var best = this[0];
        for (var i = 1; i < this.length; i++) {
            best = func(best, this[i]);
        }
        return best;
    },
    mult: function(multiplier) {
        return this.map(function(n){
            return n * multiplier;
        });
    }
});
