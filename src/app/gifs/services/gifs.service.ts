import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGif } from '../interfaces/gif.interfaces';

@Injectable({providedIn: 'root'})

export class GifService {
    
    private _tagHistory: string[] = [];
    private apiKey:      string = 'c77V6PBIzHX3Vh01ewOodHEg2YW1kfMC';
    private serviceUrle: string = 'https://api.giphy.com/v1/gifs';
    
    public gifList: Gif[] = []

    
    constructor(
        private http: HttpClient
    ) { }
    
    // retorna el tag 
    get tagHistory(){
        return [...this._tagHistory];
    }

    // funcion para organizar el historial de busqueda
    private organizeHystory(tag:string){
        tag = tag.toLowerCase();

        // valida si el tag esta repetidop y deja pasar los que no estan repetidos
        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag)
        }

        // coloca el tag al inicio
        this._tagHistory.unshift(tag)

        // de limita de cortar el historial para que la funcion tagHistory pueda retornar 10 tag
        this._tagHistory = this.tagHistory.splice(0,10);
    }

    searchTag(tag:string):void {
        // validamos que el tag no se encuentre vacio
        if(tag.length === 0) return;
        this.organizeHystory(tag);



        // aqui hacemos llamado del servicio 
        // 1. creamos unos parametros
        const params = new HttpParams()
            .set ('api_key', this.apiKey)
            .set('q',tag)
            .set ('limit','10')

        // 2.  hacemos  el llamado del servio con el poder del observable
        this.http.get<SearchGif>(`${this.serviceUrle}/search`,{params})
            .subscribe( resp =>{
                this.gifList = resp.data

                console.log(this.gifList)
            });
    }

    // servio de gift 


}