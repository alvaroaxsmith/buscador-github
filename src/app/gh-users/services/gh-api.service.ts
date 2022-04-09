import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GhRepositories } from '../models/ghRepositories';
import { GhUser } from '../models/ghUser';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https:api.github.com/users'

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findRepo(username: string): Observable<GhRepositories[]>{
    return this.http.get<GhRepositories[]>(`${this.baseUrl}/${username}/repos`)
    
  }
}
