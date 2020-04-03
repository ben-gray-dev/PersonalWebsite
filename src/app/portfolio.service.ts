import { Injectable } from '@angular/core';


export const portfolioData = [
  {
      'displayName': 'Diglossia',
      'github': 'https://github.com/benniferLopez/Diglossia',
      'website': 'https://diglossia.me',
      'description': 'Diglossia is a text analytics tool for medical professionals to analyze their rhetoric for potentially confusing language, speaking speed, automated script orders, etc.',
      'fullDescription': '',
      'imgPath': './../../assets/diglossia-logo-pic.svg',
      'tags': [
        'medical',
        'webdev',
        'angular'
      ],
      'showDetails': false,
  },
  {
      'displayName': 'Service Raleigh Web Committee',
      'github': 'https://github.com/ServiceRaleigh/',
      'website': 'https://www.serviceraleigh.org/',
      'description': 'Service Raleigh is a service organization which organizes volunteers for a day of service throughout the Raleigh area.',
      'fullDescription': '',
      'imgPath': './../../assets/sr-logo.png',
      'tags': [
        'webdev',
        'python'
      ],
      'showDetails': false,
  },
  {
      'displayName': 'GradeGetter',
      'github': 'https://github.com/benniferLopez/GradeGetter',
      'description': 'GradeGetter is a CLI python utility which automates analysis of NCSU grade distribution data (WolfTech Gradient) with the user\'s MyPack schedule availability to compute the optimal schedule.',
      'fullDescription': '',
      'imgPath': './../../assets/wolftech_redwhite.png',
      'tags': [
        'automation',
        'CLI',
        'python'
      ],
      'showDetails': false,
  },
  {
      'displayName': 'DropShipper',
      'github': 'https://github.com/benniferLopez/DropShipper',
      'description': '',
      'fullDescription': '',
      'imgPath': './../../assets/ebay-logo.png',
      'tags': [
        'automation',
        'selenium',
        'python'
      ],
      'showDetails': false,
  },
  {
      'displayName': 'HQ Trivia Bot',
      'github': 'https://github.com/benniferLopez/HQTriviaBot',
      'description': '',
      'fullDescription': '',
      'imgPath': './../../assets/hqtrivia-logo.jpg',
      'tags': [
        'automation',
        'selenium',
        'python'
      ],
      'showDetails': false,
  }];

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
}


