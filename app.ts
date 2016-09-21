require.config({
    paths: {
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min'
    }
});

require([
    'jquery',
    'beroende',
    'dependency',
], (
    jQuery,
    beroende,
    dependency
) => {

    let b = new App.Beroende();
    let d = new App.Dependency();
    d.Skriv('hola amigos');
    b.SkapaElement('hello world');

});