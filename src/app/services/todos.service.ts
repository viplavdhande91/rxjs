import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  link = "https://dummyjson.com/todos";

  constructor(private http: HttpClient) { }


  todosData() {


    return this.http.get(this.link);
  }
}
