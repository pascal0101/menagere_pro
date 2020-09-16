export class Utilisateur {
    username: string;
    email: string;
    password: string;
    password2: string;
    image: any;
    nom: string;
    prenom: string;

    constructor(username = '', email = '', password = '', password2 = '', image = '', nom = '', prenom = '') {
        this.username = username;
        this.email = email;
        this.password = password;
        this.password2 = password2;
        this.image = image;
        this.nom = nom;
        this.prenom = prenom;
    }
}