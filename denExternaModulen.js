define(["require", "exports"], function (require, exports) {
    "use strict";
    var DenExternaModulen = (function () {
        function DenExternaModulen() {
            this.titel = "Den externa modulen";
        }
        DenExternaModulen.prototype.logga = function (medd) {
            console.log('Den externa modulen skriver: ', medd);
        };
        return DenExternaModulen;
    }());
    return DenExternaModulen;
});
