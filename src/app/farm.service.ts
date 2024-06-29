import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CropDetailSearchCriteria } from './cropDetailSearchCriteria';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private http: HttpClient) { }

  public getCropDetails(searchCriteria: CropDetailSearchCriteria) {

    console.log('Request to be posted to back-end: ' + JSON.stringify(searchCriteria))

    return this.http.post("http://localhost:8080/api/v1/cropDetail/getByCriteria",
      searchCriteria
    );
  }

  public getFarms() {
    return this.http.get("http://localhost:8080/api/v1/farm/getAll");
  }

  public getSeasons() {
    return this.http.get("http://localhost:8080/api/v1/season/getAll");
  }

  public getCrops() {
    return this.http.get("http://localhost:8080/api/v1/cropDefinition/getAll");
  }

}
