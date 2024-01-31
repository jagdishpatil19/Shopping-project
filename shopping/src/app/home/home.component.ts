import { Component } from '@angular/core';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dressServices:DressService){}

  dressImages:any;
  apiData:any;
  ngOnInit(){
  //  this.dressImages= this.dressServices.getDressImages()
   console.log(this.dressImages)
  this.getApiData()
  
  }
  
  getApiData(){
     this.dressServices.getApiCall().subscribe(res=>{
       this.dressImages=res
       console.log(this.dressImages)
    })
  }
}
