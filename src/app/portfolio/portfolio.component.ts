import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  imgSource:any='';
  isClicked:boolean=false;
  displayImage(imgSrc:string){
  this.imgSource = imgSrc;
  this.isClicked =true;
  }

  hiddenImage(){
    this.isClicked = false;
  }
}
