import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotosService {
  private apiUrl = 'http://127.0.0.1:5000/votos';

  constructor(private http: HttpClient) { }

  getVotos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postVote(idCandidate: string, name: string): Observable<any> {
    return this.http.post(this.apiUrl,
      {
        "nombre": name,
        "opcion": idCandidate
      }
    );
  }

}
