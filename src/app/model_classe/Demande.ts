import { Client } from "./Client";
import { Menagere } from "./Menagere";
import { Quartier } from "./Quartier";

export class Demande {
    id: number;
    client: Client;
    quartier: Quartier;
    menagere: Menagere;
    datetime_debut: Date;
    datetime_fin: Date;     
    appreciation: String;
    supprimer: boolean;
    terminer: boolean;
    note: number;
    accepter: boolean;
    state: boolean;

    constructor(id = 0, client, quartier, menagere, datetime_debut, datetime_fin, appreciation = '', supprimer = true, terminer = true, note = 0, accepter = true, state = true) {
        this.id = id;
        this.client = client;
        this.quartier = quartier;
        this.menagere = menagere;
        this.datetime_debut = datetime_debut;
        this.datetime_fin = datetime_fin;
        this.appreciation = appreciation;
        this.supprimer = supprimer;
        this.terminer = terminer;
        this.note = note;
        this.accepter = accepter;
        this.state = state;
    }
}