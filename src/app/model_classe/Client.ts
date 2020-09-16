import { Utilisateur } from "./Utilisateur";

export class Client extends Utilisateur {
    id: number;
    domicile: string;
    tel: string;
    constructor(id = 0, username = '', email = '', password = '', password2 = '', image = '', nom = '', prenom = '', domicile = '', tel = '') {
        super(username, email, password, password2, image, nom, prenom);
        this.id = id;
        this.domicile = domicile;
        this.tel = tel;
    }
}