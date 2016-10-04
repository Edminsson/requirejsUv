class DenExternaModulen {
    titel: string;

    constructor() {
        this.titel = "Den externa modulen";
    }

    logga(medd) {
        console.log('Den externa modulen skriver: ', medd);
    }
}

export = DenExternaModulen;