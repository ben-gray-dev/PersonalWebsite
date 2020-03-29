import { transition, trigger, state, style, animate } from '@angular/animations';
import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

const textOffsets = [15, 12, 12, 12, 6];
let currentOffset = 350;

declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('arrowDown', [
      state('topOfPath', style({
        marginTop: '0',
        opacity: 0.7,
      })),
      state('bottomOfPath', style({
        marginTop: '4vh',
        opacity: 0,
      })),
      transition('*=>bottomOfPath', animate('500ms ease-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit, AfterViewInit {

 @Output() scrollToNavBarEmitter = new EventEmitter();

  isUp = true;
  currentOffset = 350;
  subscription: Subscription;
       
  constructor() { }
  ngAfterViewInit(): void {
    particlesJS.load('particles-js', './../../assets/data/particles.json', function() {
      console.log('callback - particles.js config loaded');
    })
  }
  
  ngOnInit(): void {
    const source = interval(1000);
    this.subscription = source.subscribe(() => this.isUp = !this.isUp);
   
    


  }

  centerText(indexOfStr) {
    this.currentOffset = textOffsets[indexOfStr];
  }

  scrollToProjectsView() {
    this.scrollToNavBarEmitter.emit();
  }
 

}
