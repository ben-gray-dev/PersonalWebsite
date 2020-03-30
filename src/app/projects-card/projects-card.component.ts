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
    this.tileData = portfolioData;
  }

}
