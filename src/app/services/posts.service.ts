import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "../models/post";

@Injectable({
    providedIn: 'root'
})

export class PostServise{
    constructor(private http: HttpClient){
        
    }
        
    // getData(): Observable<IProduct>{
    //     return this.http.get<IProduct>('/utils/data.json')
    // }
}