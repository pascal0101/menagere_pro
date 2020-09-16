import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteUtilisateurService } from 'app/Model/compteUtilisateur/compte-utilisateur.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    client: Object;
    menagere: Object;
    estClient: boolean
    error: boolean;
    test : Date = new Date();
    focus;
    focus1;
    constructor(
        private compteUtilisateur: CompteUtilisateurService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.client = {
            signup_image: 'client.png',
            signup_page_image: 'client_page.png'
        };

        this.menagere = {
            signup_image: 'signup.png',
            signup_page_image: 'background-signup.png'
        };
    }

    ngOnInit() {
        // Déconnecter l'utilisateur conrant
        this.compteUtilisateur.deconnecter(); 

        this.activatedRoute.params.subscribe(
            (params) => {
                if (params['user'] === 'client') {
                    this.estClient = true;
                } else if (params['user'] === 'menagere') {
                    this.estClient = false;
                }
            }
        );
    }

    sinscrire (formulaire: NgForm) {        
        if(this.estClient) {
            this.signupClient(formulaire);
        } else {
            this.signupMenagere(formulaire);
        }
    }

    signupClient (formulaire: NgForm) {
        this.compteUtilisateur.signupClient(formulaire.value).then(
            (reponse) => {
              if(reponse) {
                this.error = true;
              } else {
                var link = ['home'];
                this.error = false;
                this.router.navigate(link);
              }
            }
        );
    }

    signupMenagere (formulaire: NgForm) {
        this.compteUtilisateur.signupMenagere(formulaire.value).then(
            (reponse) => {
              if(reponse) {
                this.error = true;
              } else {
                var link = ['home'];
                this.error = false;
                this.router.navigate(link);
              }
            }
        );
    }
}
