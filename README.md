# Playing around with requirejs

I'm trying to get requirejs to understand that jquery is already loaded but i'm not sure it can be done.
In this example you can see that dependency.js is only loaded once even though its loaded in the header with a script element and then required.
The jquery-package on the other hand is loaded twice.


To install
- npm install
- tsd install
- use http-server to load index.html
