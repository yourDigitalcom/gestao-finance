import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiskService {

  constructor(
    private readonly httpClient: HttpClient,
    ) { }
  
  public getBeers(): Observable<any> {
    return this.httpClient.get('app/assets/cervejasMock.json');
  }

}
