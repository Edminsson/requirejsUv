var App;
(function (App) {
    var Dependency = (function () {
        function Dependency() {
        }
        Dependency.prototype.Skriv = function (medd) {
            console.log('Meddelande från Dependency: ', medd);
        };
        return Dependency;
    }());
    App.Dependency = Dependency;
})(App || (App = {}));
