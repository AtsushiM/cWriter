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
