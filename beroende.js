var App;
(function (App) {
    var Beroende = (function () {
        function Beroende() {
            this.namn = 'ABC';
        }
        Beroende.prototype.Skriv = function (medd) {
            console.log('Meddelande från Beroende: ', medd);
        };
        Beroende.prototype.SkapaElement = function (text) {
            var $div = $('<div>');
            $div.text(text);
            $div.appendTo('body');
        };
        return Beroende;
    }());
    App.Beroende = Beroende;
})(App || (App = {}));
