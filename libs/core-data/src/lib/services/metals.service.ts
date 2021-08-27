import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metal } from '@mines/api-interfaces';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class MetalsService {
  private model = 'metals';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Metal[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Metal>(this.getUrlById(id));
  }

  create(metal: Metal) {
    return this.httpClient.post<Metal>(this.getUrl(), metal);
  }

  update(metal: Metal) {
    return this.httpClient.patch<Metal>(this.getUrlById(metal.id), metal);
  }

  delete(metal: Metal) {
    return this.httpClient
      .delete<Metal>(this.getUrlById(metal.id))
      .pipe(mapTo(metal));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
