import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Client } from '../client';
import { ClientService } from '../client.service';

export interface classePoste {
  id: number;
  nom: string;
  img: string;
  client: string;
  etat: boolean;
}

@Component({
  selector: 'app-visuel',
  templateUrl: './visuel.component.html',
  styleUrls: ['./visuel.component.scss']
})

export class VisuelComponent implements OnInit {

  offForm: FormGroup;
  onForm: FormGroup;
  
  public lesPostes: classePoste[] = [
    { id: 0, nom: 'Carrosserie', img: 'carrosserie.png', client: '', etat: false },
    { id: 1, nom: 'Mécanique', img: 'mecanique.png', client: '', etat: false },
    { id: 2, nom: 'Service minute', img: 'service.png', client: '', etat: false }
  ];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.offForm = new FormGroup({
      client: new FormControl()
    });

    this.onForm = new FormGroup({
      client: new FormControl()
    });
  }

  on(n: number) {
    console.log("Nombre : ",n);

    if ((this.offForm.value.client == "") || (this.offForm.value.client == null)) {
      this.lesPostes[n].client = "Inconnu";
    } else {
      this.lesPostes[n].client = this.offForm.value.client;
    }

    this.offForm.value.client == '';
    this.offForm.value == '';

    this.lesPostes[n].etat = true;

    return;
  }

  off(n: number) {
    let leClient = new Client(this.lesPostes[n].client,this.lesPostes[n].nom);
    this.clientService.addClient(leClient);

    this.lesPostes[n].client = "";
    this.lesPostes[n].etat = false;

    return;
  }

}
