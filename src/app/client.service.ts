import { Injectable } from '@angular/core';
import { Client } from './client';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[];
  

  constructor(private http: HttpClient) { this.clients = []; }

  getALLClients() {
    this.clients = JSON.parse(localStorage.getItem('Clients') || '[]');
    return this.clients;
  }

  addClient(client: Client) {
    this.clients.push(client);
    let tabItems = JSON.stringify(this.clients);
    localStorage.setItem('Clients', tabItems);
    console.log(client);
  }

  deleteAll(){
    localStorage.clear();
  }

  saveAll(){
    this.http.post('http://localhost:4201/addClient', this.clients).subscribe();
  }
}
