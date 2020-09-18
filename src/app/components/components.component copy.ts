import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AdministrateurService } from 'app/Model/administrateur/administrateur.service';
import { CompteUtilisateurService } from 'app/Model/compteUtilisateur/compte-utilisateur.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    small {
        font-size: 75%;
        color: #777;
        font-weight: 400;
    }
    
    .container .title{
        color: #3c4858;
        text-decoration: none;
        margin-top: 30px;
        margin-bottom: 25px;
        min-height: 32px;
    }
    
    .container .title h3{
        font-size: 25px;
        font-weight: 300;
    }
    
    div.card {
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: rgba(0,0,0,.87);
        background: #fff;
        width: 100%;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    }
    
    div.card.card-plain {
        background: transparent;
        box-shadow: none;
    }
    div.card .card-header {
        border-radius: 3px;
        padding: 1rem 15px;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: -30px;
        border: 0;
        background: linear-gradient(60deg,#eee,#bdbdbd);
    }
    
    .card-plain .card-header:not(.card-avatar) {
        margin-left: 0;
        margin-right: 0;
    }
    
    .div.card .card-body{
        padding: 15px 30px;
    }
    
    div.card .card-header-primary {
        background: linear-gradient(60deg,#ab47bc,#7b1fa2);
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);
    }
    
    div.card .card-header-danger {
        background: linear-gradient(60deg,#ef5350,#d32f2f);
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(244,67,54,.6);
    }
    
    
    .card-nav-tabs .card-header {
        margin-top: -30px!important;
    }
    
    .card .card-header .nav-tabs {
        padding: 0;
    }
    
    .nav-tabs {
        border: 0;
        border-radius: 3px;
        padding: 0 15px;
    }
    
    .nav {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    
    .nav-tabs .nav-item {
        margin-bottom: -1px;
    }
    
    .nav-tabs .nav-item .nav-link.active {
        background-color: hsla(0,0%,100%,.2);
        transition: background-color .3s .2s;
    }
    
    .nav-tabs .nav-item .nav-link{
        border: 0!important;
        color: #fff!important;
        font-weight: 500;
    }
    
    .nav-tabs .nav-item .nav-link {
        color: #fff;
        border: 0;
        margin: 0;
        border-radius: 3px;
        line-height: 24px;
        text-transform: uppercase;
        font-size: 12px;
        padding: 10px 15px;
        background-color: transparent;
        transition: background-color .3s 0s;
    }
    
    .nav-link{
        display: block;
    }
    
    .nav-tabs .nav-item .material-icons {
        margin: -1px 5px 0 0;
        vertical-align: middle;
    }
    
    .nav .nav-item {
        position: relative;
    }
    .menagere_card {
        filter: brightness(50%);
    }
    `]
})

export class ComponentsComponent implements OnInit {
    images_card = [];
    image_card = 'assets/img/home-page-12.png';
    image_card_1 = 'assets/img/home-page1.png';
    
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( 
        private renderer : Renderer2,
        private administrateur_service: AdministrateurService,
        private compteUtilisateur: CompteUtilisateurService
    ) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }

        // initialiser les image
        this.images_card = [
            'assets/img/home-page-12.png',
            'assets/img/home.png',
            'assets/img/office_2.png',
            'assets/img/home-page1.png',
            'assets/img/home-page2-argent.png',
        ]

        this.administrateur_service.liste();
    }

    changeImageCard(index: number) {
        if (index >= 3) {
            this.image_card_1 = this.images_card[index];
        } else {
            this.image_card = this.images_card[index];
        }
    }

    estClient() {
        return this.compteUtilisateur.estClient();
    }

    estMenagere() {
        return this.compteUtilisateur.estMenagere();
    }

    estConnecter() {
        return this.compteUtilisateur.estConnecter();
    }
}
