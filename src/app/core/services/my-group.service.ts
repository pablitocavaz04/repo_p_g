import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Paginated } from "../models/paginated.model";
import { group } from "../models/group.model";

export interface PaginatedRaw<T> {
    first: number
    prev: number|null
    next: number|null
    last: number
    pages: number
    items: number
    data: T[]
  };

  export interface GroupRaw {
    id: string
    nombre: string
}
@Injectable({
    providedIn:'root'
})
export class MyGroupService{

    private apiUrl:string = "http://localhost:3000/grupos"
    constructor(
        private http:HttpClient
    ){

    }

    getAll(page:number, pageSize:number): Observable<Paginated<group>> {
        return this.http.get<PaginatedRaw<GroupRaw>>(`${this.apiUrl}/?_page=${page}&_per_page=${pageSize}`).pipe(map(res=>{
            return {page:page, pageSize:pageSize, pages:res.pages, data:res.data.map<group>((d:GroupRaw)=>{
                return {
                    id:d.id, 
                    name:d.nombre, 
                };
            })};
        }))
    }
}