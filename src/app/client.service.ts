import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[];

  constructor() { this.clients = []; }

  getALLClients() {
    this.clients = JSON.parse(localStorage.getItem('Clients') || '[]');
    return this.clients;
  }

  addClient(client: Client) {
    this.clients.push(client);
    let tabItems = JSON.stringify(this.clients);
    localStorage.setItem('Clients', tabItems);
  }
}
