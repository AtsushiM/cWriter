CW.prototype.Helper = {
    _UA: window.navigator.userAgent.toLowerCase(),
    _checkBrowser: function(browsernames) {
        var i,
            len;

        for (i = 0, len = browsernames.length; i < len; i++) {
            if (this._UA.indexOf(browsernames[i]) !== -1) {
                return browsername;
            }
        }

        return false;
    },
    chkAgent: function() {
        return this._checkBrowser([
            'chrome',
            'firefox',
            'safari'
        ]);
    }
};
