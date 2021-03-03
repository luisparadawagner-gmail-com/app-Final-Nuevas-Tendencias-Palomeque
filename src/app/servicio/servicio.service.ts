import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServicioService{
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    private personaUrl = 'http://localhost:3002/api/modules/pasajeros/';

    constructor(private httpClient: HttpClient){}

    getPasajeroById(idPasajero: String) {
        return this.httpClient.get(this.personaUrl + 'pasajeroId/' + idPasajero);
    }
    
    getPasajero(){
        return this.httpClient.get(this.personaUrl + 'pasajero');
    }

    guardarPasajero(pasajero: any){
        return this.httpClient.post(this.personaUrl + 'pasajero', JSON.stringify(pasajero), this.httpOptions);
    }

    editarPasajero(idPasajero, pasajero) {
        return this.httpClient.put(this.personaUrl + 'pasajero/' + idPasajero, JSON.stringify(pasajero), this.httpOptions);

    }

    borrarPasajero(idPasajero){
        return this.httpClient.delete(this.personaUrl + 'pasajero/' + idPasajero, this.httpOptions);
    }    
}