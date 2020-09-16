import { Utilisateur } from "./Utilisateur";

export class Menagere extends Utilisateur {
    id: number;
    domicile: string;
    tel: string;
    sexe: boolean;
    note_good: number;
    note_bad: number;
    constructor(id = 0, username = '', email = '', password = '', password2 = '', image = '', nom = '', prenom = '', domicile = '', tel = '', sexe = true, note_good: 0, note_bad: 0) {
        super(username, email, password, password2, image, nom, prenom);
        this.id = id;
        this.domicile = domicile;
        this.tel = tel;
        this.sexe = sexe;
        this.note_good = note_good;
        this.note_bad = note_bad;
    }
}