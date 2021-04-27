import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-liste-form',
  templateUrl: './liste-form.component.html',
  styleUrls: ['./liste-form.component.scss']
})
export class ListeFormComponent implements OnInit {
  form: FormGroup;
  message = "";
  codetab= [];
  codes = this.http.get<any[]>('http://localhost:4201');
  codesval = this.codes.subscribe(lecode => {this.codetab = lecode});

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl()
    })
  }

 
  

getCode(){
  let zicode;
  for(let code of this.codetab){
    zicode = code.code;
  }
  console.log(zicode);

  if (zicode == this.form.value.code) {
    this.message = 'Code bon';
  }
  else {
    this.message = 'code incorrect'
  }
}

}
