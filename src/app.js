'use strict';
//--------------------------------------------------------------------------
//  Init
//--------------------------------------------------------------------------
var CW = function(str, option) {
    this.str = str;
    this.option = option;
    this.s = [];
    this.opt = {style: ''};
    this.unit = [];
    this.sl = 0;

    this.init();
};

CW.prototype = {
    len : 8,

    init: function() {
        var j=0;

        this.extend();
        this.sl = this.str?this.str.length:false;
        if(!this.sl) return false;

        for(;j<this.len;j++) {
            this.s[j] = j + ' ';
        }

        this.splits();
        this.convert();
    },

    extend: function() {
        if(this.option) {
            this.opt = {
                style: this.option.style?this.option.style:this.opt.style
            };
        } else {
            return false;
        }
    },

    splits: function() {
        var i=0,
            _s;
        for(;i<this.sl;i++) {
            _s = this.str.charAt(i);
            if(_s.match(/[a-zA-Z]/)) {
                this.unit[i] = _s.toLowerCase();
            } else if (_s.match(/[0-9]/)) {
                this.unit[i] = 'num' + _s;
            } else if (_s.match(/[\?]/)) {
                this.unit[i] = 'qmark';
            } else {
                this.unit[i] = 'space';
            }
        }
    },

    convert: function() {
        var i=0;
        for(;i<this.sl;i++) {
            this.Type[this.unit[i]](this.s);
        }
    },

    // output s to Console.log
    output: function() {
        var i=0;
        if (!this.Helper.chkAgent) return false;

        if(this.opt.style!=='undefined' || this.opt.style!=='null') {
            for(;i<this.len;i++) {
                window.console.log('%c%s', this.opt.style, this.s[i]);
            }
        } else {
            for(;i<this.len;i++) {
                window.console.log('%s',this.s[i]);
            }
        }
    }
};