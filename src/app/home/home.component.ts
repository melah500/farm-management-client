import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { CropDetailSearchCriteria } from '../cropDetailSearchCriteria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  cropDetails: any;
  farms: any;
  seasons: any;
  crops: any;

  searchCriteria: CropDetailSearchCriteria = 
  new CropDetailSearchCriteria("", "", "");

  constructor(private service: FarmService) { }

  ngOnInit() {
    
    let resp = this.service.getCropDetails(this.searchCriteria);
    resp.subscribe((data) => this.cropDetails = data)

    let farmResp = this.service.getFarms();
    farmResp.subscribe((data) => this.farms = data)

    let seasonResp = this.service.getSeasons();
    seasonResp.subscribe((data) => this.seasons = data)

    let cropResp = this.service.getCrops();
    cropResp.subscribe((data) => this.crops = data)
  }

  public fetchCropDetailsByCriteria() {

    let resp = this.service.getCropDetails(this.searchCriteria);
    resp.subscribe((data) => this.cropDetails = data)
    console.log('Farms' + JSON.stringify(this.cropDetails))
  }

  changeDepartment(e: any) {
      console.log(e.target.value)
  }

}
