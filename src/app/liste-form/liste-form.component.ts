import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-liste-form',
  templateUrl: './liste-form.component.html',
  styleUrls: ['./liste-form.component.scss']
})
export class ListeFormComponent implements OnInit {
  form: FormGroup;
  message = "";
  isConnected: boolean = false ;
  codetab= [];
  tableauClients = this.clientService.getALLClients();
  codes = this.http.get<any[]>('http://localhost:4201');
  codesval = this.codes.subscribe(lecode => {this.codetab = lecode});

  constructor(private http: HttpClient, private clientService: ClientService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl()
    })
  }

 saveAllClient(){
  this.clientService.saveAll();
 }

 deleteAllClient(){
   this.clientService.deleteAll();
 }

getCode(){
  let zicode;
  for(let code of this.codetab){
    zicode = code.code;
  }
  console.log(zicode);

  if (zicode == this.form.value.code) {
    this.message = 'Code bon';
    this.isConnected = true
  }
  else {
    this.message = 'code incorrect'
  }
}

}
