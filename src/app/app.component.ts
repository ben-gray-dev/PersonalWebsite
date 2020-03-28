import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { switchMap, materialize, dematerialize } from 'rxjs/operators';
import { NgAnimateScrollService } from 'bens-ng-animate-scroll';
import { BehaviorSubject, Subject, NEVER } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

let scrollWatcher = new Subject<number>();
let pauser = new BehaviorSubject<boolean>(false);
let oldScrollLoc: number;
let lastTS: number = 0;
let locked = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'personalSite';
  myLocked = false;

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(NavbarComponent) navbarComp: NavbarComponent;

  constructor(private animateScrollService: NgAnimateScrollService) { }
  ngAfterViewInit(): void {
    pauser.pipe(
         switchMap(paused => paused ? NEVER : scrollWatcher.pipe(materialize())),
         dematerialize()
    ).subscribe((v) => {
      this.scrollToAboutView();
      lastTS = v;
      pauser.next(true);
    });
  }
  
  
  ngOnInit(): void {
    window.onload = () => {
      oldScrollLoc = window.pageYOffset || 0;
    };


    window.onscroll = (ev) => {
      const currOffset = window.pageYOffset;
      if ( currOffset < window.innerHeight) {
       if (!this.navbarComp.homeSelected && !this.myLocked) {
          this.navbarComp.unselectAll();
          this.navbarComp.homeSelected = true;
       }
       this.navbarComp.sticky = false;
       if (currOffset > oldScrollLoc) {
          if (ev.timeStamp - 1000 > lastTS && !this.myLocked) {
            scrollWatcher.next(ev.timeStamp);
            pauser.next(false);
          }
        }
      } else {
        this.navbarComp.sticky = true;
        if (currOffset < window.innerHeight*2*.9) {
          if (!this.myLocked) {
            this.navbarComp.unselectAll();
            this.navbarComp.aboutSelected = true;
          }
        } else if (currOffset < window.innerHeight*3*.9) {
          if (!this.myLocked) {
            this.navbarComp.unselectAll();
            this.navbarComp.portfolioSelected = true;
          }
        } else {
          if (!this.myLocked) {
            this.navbarComp.unselectAll();
            this.navbarComp.contactSelected = true;
          }
        }
      }
      oldScrollLoc = currOffset;


      
    };

  
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



  scrollToNavBar() {
    this.animateScrollService.scrollToElement('navBar');
  }

  async scrollToSection(id: string) {
    pauser.next(true);
    this.myLocked = true;
    this.animateScrollService.scrollToElement(id);
    await this.delay(750);
    this.myLocked = false;
  }

  scrollToContactsView() {
    this.scrollToSection('contacts');
  }

  scrollToHomeView() {
    this.animateScrollService.scrollToElement('header');
  }

  scrollToPortfolioView() {
    this.scrollToSection('portfolio');
  }
  
  scrollToAboutView() {
    this.animateScrollService.scrollToElement('navBar');
  }
  
}
