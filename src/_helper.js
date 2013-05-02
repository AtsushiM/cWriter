CW.prototype.Helper = {
    _UA: window.navigator.userAgent.toLowerCase(),
    _ret: null,
    _checkBrowser: function(browsernames) {
        var i,
            len;

        for (i = 0, len = browsernames.length; i < len; i++) {
            if (this._UA.indexOf(browsernames[i]) !== -1) {
                this._ret = browsername;

                return browsername;
            }
        }

        return false;
    },
    chkAgent: function() {
        if (this._ret !== null) {
            return this._ret;
        }

        return this._checkBrowser([
            'chrome',
            'firefox',
            'safari'
        ]);
    }
};
