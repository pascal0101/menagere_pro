import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteUtilisateurService } from 'app/Model/compteUtilisateur/compte-utilisateur.service';
import { DemandeService } from 'app/Model/demande/demande.service';
import { Demande } from 'app/model_classe/Demande';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  cars = [
    { lastName: 'lastName 1', firstName: 'firstName 1', carName: 'carName 1' },
    { lastName: 'lastName 2', firstName: 'firstName 2', carName: 'carName 2' },
    { lastName: 'lastName 3', firstName: 'firstName 3', carName: 'carName 3' },
    { lastName: 'lastName 4', firstName: 'firstName 4', carName: 'carName 4' },
    { lastName: 'lastName 5', firstName: 'firstName 5', carName: 'carName 5' },
    { lastName: 'lastName 6', firstName: 'firstName 6', carName: 'carName 6' },
  ];
  demandes = [];

  constructor(
    private demandeService: DemandeService,
    private compteUtilisateur: CompteUtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.compteUtilisateur.estConnecter()) {
      var link = ['login'];
      this.router.navigate(link);
    }

    this.demandeEnCours();
  }

  demandeEnCours() {
    this.demandeService.demandeEnCours().then(
      (data: Demande[]) => {
        this.demandes = data;
      }
    );
  }

  setDemandes(demandes: Demande[]) {
    this.demandes = demandes;
  }

  estClient() {
    return this.compteUtilisateur.estClient();
  }

  estMenagere() {
    return this.compteUtilisateur.estMenagere();
  }
}
