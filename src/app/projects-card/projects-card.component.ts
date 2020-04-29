import { Component, OnInit } from '@angular/core';

import { portfolioData } from './../portfolio.service';
@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {

  tileData: any;

  constructor() { }

  ngOnInit(): void {
    this.tileData = this.chunkArray(portfolioData, 3);
  }

  chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        var myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
  }


  styleProject(project: Object) {
    const styles = {}
    if (project.hasOwnProperty('scale') && project['scale'] === true) {
      styles['background-size'] = '10vw auto'
    }
    styles['background-image']= `url(${project['imgPath']})`;
    return styles;
  }

}
