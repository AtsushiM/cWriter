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
CW.prototype.Type = {
    a: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '\u2588\u2588     \u2588\u2588  ';

    },
    b: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[4] += '\u2588\u2588     \u2588\u2588  ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';

    },
    c: function(s) {
        s[0] += '  \u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588         ';
        s[3] += '\u2588\u2588         ';
        s[4] += '\u2588\u2588         ';
        s[5] += '\u2588\u2588         ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '  \u2588\u2588\u2588\u2588\u2588    ';

    },
    d: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588    \u2588\u2588  ';
        s[2] += '\u2588\u2588    \u2588\u2588  ';
        s[3] += '\u2588\u2588    \u2588\u2588  ';
        s[4] += '\u2588\u2588    \u2588\u2588  ';
        s[5] += '\u2588\u2588    \u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588  ';
        s[7] += '\u2588\u2588\u2588\u2588\u2588\u2588    ';

    },
    e: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[1] += '\u2588\u2588       ';
        s[2] += '\u2588\u2588       ';
        s[3] += '\u2588\u2588       ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588   ';
        s[5] += '\u2588\u2588       ';
        s[6] += '\u2588\u2588       ';
        s[7] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';

    },
    f: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[1] += '\u2588\u2588       ';
        s[2] += '\u2588\u2588       ';
        s[3] += '\u2588\u2588\u2588\u2588\u2588\u2588   ';
        s[4] += '\u2588\u2588       ';
        s[5] += '\u2588\u2588       ';
        s[6] += '\u2588\u2588       ';
        s[7] += '\u2588\u2588       ';

    },
    g: function(s) {
        s[0] += '  \u2588\u2588\u2588\u2588\u2588\u2588\u2588   ';
        s[1] += ' \u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588          ';
        s[3] += '\u2588\u2588          ';
        s[4] += '\u2588\u2588    \u2588\u2588\u2588\u2588  ';
        s[5] += '\u2588\u2588      \u2588\u2588  ';
        s[6] += ' \u2588\u2588     \u2588\u2588  ';
        s[7] += '  \u2588\u2588\u2588\u2588\u2588\u2588    ';

    },
    h: function(s) {
        s[0] += '\u2588\u2588    \u2588\u2588  ';
        s[1] += '\u2588\u2588    \u2588\u2588  ';
        s[2] += '\u2588\u2588    \u2588\u2588  ';
        s[3] += '\u2588\u2588    \u2588\u2588  ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[5] += '\u2588\u2588    \u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588  ';
        s[7] += '\u2588\u2588    \u2588\u2588  ';

    },
    i: function(s) {
        s[0] += '\u2588\u2588  ';
        s[1] += '\u2588\u2588  ';
        s[2] += '\u2588\u2588  ';
        s[3] += '\u2588\u2588  ';
        s[4] += '\u2588\u2588  ';
        s[5] += '\u2588\u2588  ';
        s[6] += '\u2588\u2588  ';
        s[7] += '\u2588\u2588  ';

    },
    j: function(s) {
        s[0] += '      \u2588\u2588  ';
        s[1] += '      \u2588\u2588  ';
        s[2] += '      \u2588\u2588  ';
        s[3] += '      \u2588\u2588  ';
        s[4] += '      \u2588\u2588  ';
        s[5] += '      \u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588\u2588   ';

    },
    k: function(s) {
        s[0] += '\u2588\u2588    \u2588\u2588  ';
        s[1] += '\u2588\u2588   \u2588\u2588   ';
        s[2] += '\u2588\u2588  \u2588\u2588    ';
        s[3] += '\u2588\u2588\u2588\u2588      ';
        s[4] += '\u2588\u2588\u2588\u2588      ';
        s[5] += '\u2588\u2588  \u2588\u2588    ';
        s[6] += '\u2588\u2588   \u2588\u2588   ';
        s[7] += '\u2588\u2588    \u2588\u2588  ';

    },
    l: function(s) {
        s[0] += '\u2588\u2588       ';
        s[1] += '\u2588\u2588       ';
        s[2] += '\u2588\u2588       ';
        s[3] += '\u2588\u2588       ';
        s[4] += '\u2588\u2588       ';
        s[5] += '\u2588\u2588       ';
        s[6] += '\u2588\u2588       ';
        s[7] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';

    },
    m: function(s) {
        s[0] += '\u2588\u2588          \u2588\u2588  ';
        s[1] += '\u2588\u2588\u2588        \u2588\u2588\u2588  ';
        s[2] += '\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588  ';
        s[3] += '\u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588  ';
        s[4] += '\u2588\u2588  \u2588\u2588  \u2588\u2588  \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588    \u2588\u2588  ';
        s[7] += '\u2588\u2588          \u2588\u2588  ';

    },
    n: function(s) {
        s[0] += '\u2588\u2588     \u2588\u2588  ';
        s[1] += '\u2588\u2588\u2588    \u2588\u2588  ';
        s[2] += '\u2588\u2588\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588 \u2588\u2588  \u2588\u2588  ';
        s[4] += '\u2588\u2588  \u2588\u2588 \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588\u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588\u2588  ';
        s[7] += '\u2588\u2588     \u2588\u2588  ';

    },
    o: function(s) {
        s[0] += '  \u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588     \u2588\u2588  ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '  \u2588\u2588\u2588\u2588\u2588    ';

    },
    p: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[5] += '\u2588\u2588         ';
        s[6] += '\u2588\u2588         ';
        s[7] += '\u2588\u2588         ';

    },
    q: function(s) {
        s[0] += '  \u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588     \u2588\u2588  ';
        s[5] += '\u2588\u2588  \u2588\u2588 \u2588\u2588  ';
        s[6] += '\u2588\u2588    \u2588\u2588\u2588  ';
        s[7] += '  \u2588\u2588\u2588\u2588\u2588 \u2588\u2588   ';

    },
    r: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '\u2588\u2588     \u2588\u2588  ';

    },
    s: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588    \u2588\u2588   ';
        s[2] += '\u2588\u2588         ';
        s[3] += ' \u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[4] += '      \u2588\u2588   ';
        s[5] += '      \u2588\u2588   ';
        s[6] += '\u2588\u2588    \u2588\u2588   ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588\u2588    ';

    },
    t: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[1] += '    \u2588\u2588      ';
        s[2] += '    \u2588\u2588      ';
        s[3] += '    \u2588\u2588      ';
        s[4] += '    \u2588\u2588      ';
        s[5] += '    \u2588\u2588      ';
        s[6] += '    \u2588\u2588      ';
        s[7] += '    \u2588\u2588      ';

    },
    u: function(s) {
        s[0] += '\u2588\u2588     \u2588\u2588  ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588     \u2588\u2588  ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '  \u2588\u2588\u2588\u2588\u2588    ';

    },
    v: function(s) {
        s[0] += '\u2588\u2588       \u2588\u2588  ';
        s[1] += '\u2588\u2588       \u2588\u2588  ';
        s[2] += ' \u2588\u2588     \u2588\u2588   ';
        s[3] += ' \u2588\u2588     \u2588\u2588   ';
        s[4] += '  \u2588\u2588   \u2588\u2588    ';
        s[5] += '  \u2588\u2588   \u2588\u2588    ';
        s[6] += '   \u2588\u2588 \u2588\u2588     ';
        s[7] += '    \u2588\u2588\u2588      ';

    },
    w: function(s) {
        s[0] += '\u2588\u2588           \u2588\u2588  ';
        s[1] += '\u2588\u2588    \u2588\u2588\u2588    \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588 \u2588\u2588   \u2588\u2588  ';
        s[3] += ' \u2588\u2588  \u2588\u2588 \u2588\u2588  \u2588\u2588   ';
        s[4] += ' \u2588\u2588 \u2588\u2588   \u2588\u2588 \u2588\u2588   ';
        s[5] += ' \u2588\u2588 \u2588\u2588   \u2588\u2588 \u2588\u2588   ';
        s[6] += '  \u2588\u2588\u2588     \u2588\u2588\u2588    ';
        s[7] += '  \u2588\u2588       \u2588\u2588    ';

    },
    x: function(s) {
        s[0] += '\u2588\u2588     \u2588\u2588 ';
        s[1] += ' \u2588\u2588   \u2588\u2588  ';
        s[2] += '  \u2588\u2588 \u2588\u2588   ';
        s[3] += '   \u2588\u2588\u2588    ';
        s[4] += '   \u2588\u2588\u2588    ';
        s[5] += '  \u2588\u2588 \u2588\u2588   ';
        s[6] += ' \u2588\u2588   \u2588\u2588  ';
        s[7] += '\u2588\u2588     \u2588\u2588 ';

    },
    y: function(s) {
        s[0] += '\u2588\u2588      \u2588\u2588  ';
        s[1] += ' \u2588\u2588    \u2588\u2588   ';
        s[2] += '  \u2588\u2588  \u2588\u2588    ';
        s[3] += '   \u2588\u2588\u2588\u2588     ';
        s[4] += '    \u2588\u2588      ';
        s[5] += '    \u2588\u2588      ';
        s[6] += '    \u2588\u2588      ';
        s[7] += '    \u2588\u2588      ';

    },
    z: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[1] += '        \u2588\u2588  ';
        s[2] += '       \u2588\u2588   ';
        s[3] += ' \u2588\u2588  \u2588\u2588     ';
        s[4] += '   \u2588\u2588       ';
        s[5] += ' \u2588\u2588   \u2588\u2588    ';
        s[6] += '\u2588\u2588          ';
        s[7] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';

    },
    num0: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num1: function(s) {
        s[0] += '\u2588\u2588\u2588  ';
        s[1] += ' \u2588\u2588  ';
        s[2] += ' \u2588\u2588  ';
        s[3] += ' \u2588\u2588  ';
        s[4] += ' \u2588\u2588  ';
        s[5] += ' \u2588\u2588  ';
        s[6] += ' \u2588\u2588  ';
        s[7] += ' \u2588\u2588  ';

    },
    num2: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '     \u2588\u2588  ';
        s[2] += '     \u2588\u2588  ';
        s[3] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[4] += '\u2588\u2588       ';
        s[5] += '\u2588\u2588       ';
        s[6] += '\u2588\u2588       ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num3: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588\u2588    ';
        s[1] += '\u2588\u2588     \u2588\u2588  ';
        s[2] += '\u2588\u2588     \u2588\u2588  ';
        s[3] += '\u2588\u2588     \u2588\u2588  ';
        s[4] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[5] += '\u2588\u2588     \u2588\u2588  ';
        s[6] += '\u2588\u2588     \u2588\u2588  ';
        s[7] += '\u2588\u2588     \u2588\u2588  ';

    },
    num4: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num5: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num6: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num7: function(s) {
        s[0] += '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  ';
        s[1] += '\u2588\u2588    \u2588\u2588  ';
        s[2] += '     \u2588\u2588   ';
        s[3] += '     \u2588\u2588   ';
        s[4] += '    \u2588\u2588    ';
        s[5] += '    \u2588\u2588    ';
        s[6] += '   \u2588\u2588     ';
        s[7] += '   \u2588\u2588     ';

    },
    num8: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    num9: function(s) {
        s[0] += ' \u2588\u2588\u2588\u2588\u2588   ';
        s[1] += '\u2588\u2588   \u2588\u2588  ';
        s[2] += '\u2588\u2588   \u2588\u2588  ';
        s[3] += '\u2588\u2588   \u2588\u2588  ';
        s[4] += '\u2588\u2588   \u2588\u2588  ';
        s[5] += '\u2588\u2588   \u2588\u2588  ';
        s[6] += '\u2588\u2588   \u2588\u2588  ';
        s[7] += ' \u2588\u2588\u2588\u2588\u2588   ';

    },
    space: function(s) {
        s[0] += '  ';
        s[1] += '  ';
        s[2] += '  ';
        s[3] += '  ';
        s[4] += '  ';
        s[5] += '  ';
        s[6] += '  ';
        s[7] += '  ';

    },
    qmark: function(s) {
        s[0] += '  \u2588\u2588\u2588\u2588\u2588\u2588 ';
        s[1] += '\u2588\u2588     \u2588\u2588';
        s[2] += '\u2588\u2588      \u2588\u2588';
        s[3] += '      \u2588\u2588';
        s[4] += '    \u2588\u2588';
        s[5] += '    \u2588\u2588';
        s[6] += '  ';
        s[7] += '    \u2588\u2588';

    }

};
CW.prototype.Helper = {
    chkIE: function() {
        var userAgent = window.navigator.userAgent.toLowerCase(),
            appVersion = window.navigator.appVersion.toLowerCase();
        if(userAgent.indexOf("msie") != -1) {
            if (appVersion.indexOf("msie 6.") != -1) {
                return 'ie6';
            } else if(appVersion.indexOf("msie 7.") != -1) {
                return 'ie7';
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    chkAgent: function() {
        var userAgent = window.navigator.userAgent.toLowerCase();
        if(userAgent.indexOf('chrome') != -1) {
            return 'chrome';
        } else if(userAgent.indexOf('firefox') != -1) {
            return 'firefox';
        } else if(userAgent.indexOf('safari') != -1) {
            return 'safari';
        }

    }
};