import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  homeSelected = false;
  aboutSelected = false;
  portfolioSelected = false;
  contactSelected = false;
  sticky = false;

  @Output() scrollToContactEmitter = new EventEmitter();
  @Output() scrollToHomeEmitter = new EventEmitter();
  @Output() scrollToPortfolioEmitter = new EventEmitter();
  @Output() scrollToAboutEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  unselectAll() {
    this.homeSelected = this.portfolioSelected = this.contactSelected = this.aboutSelected = false;
  }


  scrollToHome() {
    this.sticky = false;
    this.homeSelected = true;
    this.contactSelected = this.portfolioSelected = this.aboutSelected = false;
    this.scrollToHomeEmitter.emit();
  }

  scrollToAbout() {
    this.aboutSelected = true;
    this.contactSelected = this.portfolioSelected = this.homeSelected = false;
    this.scrollToAboutEmitter.emit();
  }

  scrollToPortfolio() {
    this.portfolioSelected = true;
    this.aboutSelected = this.homeSelected = this.contactSelected = false;
    this.scrollToPortfolioEmitter.emit();
  }

  scrollToContact() {
    this.contactSelected = true;
    this.homeSelected = this.aboutSelected = this.portfolioSelected = false;
    this.scrollToContactEmitter.emit();
  }

}
