namespace App {
    export class Beroende {
        namn: string;
        constructor() {
            this.namn = 'ABC';
        }

        SkapaElement(text) {
            let $div = $('<div>');
            $div.text(text);
            $div.appendTo('body');
        }

    }
}