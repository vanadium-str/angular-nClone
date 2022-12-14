import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "../models/post";

@Injectable({
    providedIn: 'root'
})

export class PostServise{
    constructor(private http: HttpClient){}
        
    getData(): Observable<IPost[]>{
        return this.http.get<IPost[]>('https://my-json-server.typicode.com/vanadium-str/fakeJSON/data')
    }
}