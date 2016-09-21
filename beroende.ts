namespace App {
    export class Beroende {
        namn:string;
        constructor() {
            this.namn = 'ABC'
        }

        Skriv(medd) {
            console.log('Meddelande från Beroende: ',medd);
        }

        SkapaElement(text) {
            let $div = $('<div>');
            $div.text(text);
            $div.appendTo('body');
        }

    }
}