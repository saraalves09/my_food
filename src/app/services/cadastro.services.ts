import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Produto} from "../models/produto.model"

@Injectable({
  providedIn: 'root',
})

export class CadastroService {
  constructor (private http: HttpClient){}
  URL = "http://localhost:3001/produtos";

  listarProdutos(): Observable<Produto[]>{
    return this.http.get<[Produto]>('http://localhost:3000/pessoas')
  }

  buscarPorId(id : number): Observable<Produto>{
    return this.http.get<Produto>(this.URL + "/" + id )
  }

  incluirProduto(produto : Produto){
    this.http.post(this.URL, produto);
  }

  atualizarProduto(produto: Produto, id : number){
    this.http.put(this.URL + "/" + id, produto);
  }

  excluirProduto(id : number){
    this.http.delete(this.URL + "/" + id);
  }

}
