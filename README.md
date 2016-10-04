# Playing around with requirejs

I'm trying to get requirejs to understand that jquery is already loaded.

Normally when jQuery is loaded it seems to check if requirejs is used and in that case define 'jquery'.
But since jQuery in UV is loaded before requirejs (or at least declared before in the app.html) then it's never defined.

The simplest way to make things work is to do the same thing that jQuery skipped and declare jquery. I do this in app.ts

    define('jquery', [], function() {
        return jQuery;
    });

I also tried to declare jquery in the paths of require.config. It works but then jquery gets loaded twice.


To install
- npm install
- tsd install
- use http-server to load index.html

To build (since gulp is not installed)
- tsc
