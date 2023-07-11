import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(){
    return[
      { _id: '1', name: 'Angular', category: 'Front-end'},
      { _id: '2', name: 'Node', category: 'Back-end'}
    ]
  }
}
