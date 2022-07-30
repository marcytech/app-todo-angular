import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectType } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiURL: string = ''

  constructor(private http: HttpClient ) {
    this.apiURL = 'http://localhost:3000'
  }

  get (): Observable<ProjectType[]> {
    return this.http.get<ProjectType[]>('http://localhost:3000/projects')
  }
}
