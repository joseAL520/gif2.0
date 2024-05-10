import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class GifService {
    
    private _tagHistory: string[] = []
    
    constructor() { }
    
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
    }


}