import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { debounceTime, filter, delay, distinctUntilChanged, distinctUntilKeyChanged, delayWhen, switchMap, materialize, dematerialize } from 'rxjs/operators';
import { NgAnimateScrollService } from 'bens-ng-animate-scroll';
import { Subscription, BehaviorSubject, Subject, interval, of, empty, NEVER, Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

let scrollWatcher = new Subject<number>();
let pauser = new BehaviorSubject<boolean>(false);
let oldScrollLoc: number;
let lastTS: number = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'personalSite';

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(NavbarComponent) navbarComp: NavbarComponent;

  constructor(private animateScrollService: NgAnimateScrollService) { }
  ngAfterViewInit(): void {
    pauser.pipe(
         switchMap(paused => paused ? NEVER : scrollWatcher.pipe(materialize())),
         dematerialize()
    ).subscribe((v) => {
      this.scrollToPortfolioView();
      this.navbarComp.sticky = true;
      this.navbarComp.unselectAll();
      this.navbarComp.portfolioSelected = true;
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
      console.log(currOffset);
      if ( currOffset < 974) {
       if (!this.navbarComp.homeSelected) {
          this.navbarComp.unselectAll();
          this.navbarComp.homeSelected = true;
       }
       this.navbarComp.sticky = false;
       if (currOffset > oldScrollLoc) {
          if (ev.timeStamp - 1000 > lastTS) {
            scrollWatcher.next(ev.timeStamp);
            pauser.next(false);
          }
        }
      } else {
        this.navbarComp.sticky = true;
        if (currOffset < window.innerHeight*2) {
          if (!this.navbarComp.portfolioSelected) {
            this.navbarComp.unselectAll();
            this.navbarComp.portfolioSelected = true;
          }
        }
      }
      oldScrollLoc = currOffset;


      
    };

  
  }


  scrollToNavBar() {
    this.animateScrollService.scrollToElement('navBar');
  }

  scrollToContactsView() {
    this.animateScrollService.scrollToElement('contacts');
  }

  scrollToHomeView() {
    this.animateScrollService.scrollToElement('header');
  }

  scrollToPortfolioView() {
    this.animateScrollService.scrollToElement('navBar');
  }
  
  scrollToAboutView() {
    this.animateScrollService.scrollToElement('about');
  }
  
}
