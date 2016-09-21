require.config({
    paths: {
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min'
    }
});

require([
    'jquery',
    'beroende',
], (
    jQuery,
    beroende
) => {

    let b = new App.Beroende();
    b.Skriv('hola amigos');
    b.SkapaElement('hello world');

});