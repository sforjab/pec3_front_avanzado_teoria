import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../Models/image'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://picsum.photos/v2/list');
  }
}
