export class Quartier {
    id: number;
    libelle: string;

    constructor(id = 0, libelle = '') {
        this.id = id;
        this.libelle = libelle;
    }
}