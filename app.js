require.config({
    paths: {
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min'
    }
});
require([
    'jquery',
    'beroende',
    'dependency',
], function (jQuery, beroende, dependency) {
    var b = new App.Beroende();
    var d = new App.Dependency();
    d.Skriv('hola amigos');
    b.SkapaElement('hello world');
});
