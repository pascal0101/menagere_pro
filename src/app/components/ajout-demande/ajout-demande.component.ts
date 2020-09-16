import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteUtilisateurService } from 'app/Model/compteUtilisateur/compte-utilisateur.service';
import { DemandeService } from 'app/Model/demande/demande.service';
import { QuartierService } from 'app/Model/quartier/quartier.service';
import { Quartier } from 'app/model_classe/Quartier';

@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit {
  quartiers: Quartier[];
  constructor(
    private compteUtilisateurService: CompteUtilisateurService,
    private demandeService: DemandeService,
    private quartierService: QuartierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quartierService.liste().then(
      (data: Quartier[]) => {
        this.quartiers = data;
      }
    );
  }

  ajoutDemande(value: number) {
    console.log('value : ', value);
    var data = {
      quartier_data: {
        id: value
      },
      utilisateur_data: {
        id: this.compteUtilisateurService.client.id
      }
    };
    
    this.demandeService.ajout(data).then(
      (reponse: any) => {
        console.log('reponse: bon', reponse);
        if(!reponse) {
          let link = ['demande'];
          this.router.navigate(link);
        }
      }
    );
  }

}
