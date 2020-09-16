import { Utilisateur } from "./Utilisateur";

export class Administrateur extends Utilisateur {
    id: number;
    constructor(id = 0, username = '', email = '', password = '', password2 = '', image = '', nom = '', prenom = '') {
        super(username, email, password, password2, image, nom, prenom);
        this.id = id;
    }
}