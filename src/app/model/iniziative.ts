export class Iniziative {

    status: string;
    id: string;
    value: string;
    reg: string;
    associazione: string;
    img: string;
    url: string;

    constructor(status: string, id: string, value: string, reg: string, associazione: string, img: string, url: string) {
        this.status = status;
        this.id = id;
        this.value = value;
        this.reg = reg;
        this.associazione = associazione;
        this.img = img;
        this.url = url;

    }
}
