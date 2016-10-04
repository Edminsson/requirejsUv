// require.config({
//     paths: {
//         'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min'
//     }
// });

define('jquery', [], function() {
    return jQuery;
});

require([
    'beroendeAvDenExternaModulen',
    'beroendeAvjQuery',
    'beroende',
    'dependency',
], (
    badem,
    bajq,
    beroende,
    dependency
) => {

    let b = new App.Beroende();
    let d = new App.Dependency();
    d.Skriv('hola amigos');
    b.SkapaElement('hello world');

});