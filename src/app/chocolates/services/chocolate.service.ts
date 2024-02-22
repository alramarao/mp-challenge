import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chocolate, ChocolatesTableList } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChocolateService {

  constructor(private httpClient: HttpClient) {}

  getChocolates(pageNo: number): Observable<ChocolatesTableList> {
    const params = new HttpParams().set('page', String(pageNo));
    return this.httpClient.get<ChocolatesTableList>('/chocolates', { params });
  }

  updateChocolate(
    id: string,
    payload: Partial<Chocolate>
  ): Observable<Chocolate> {
    return this.httpClient.put<Chocolate>(`/chocolates/${id}`, payload);
  }
}
