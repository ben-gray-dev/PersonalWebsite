import { Injectable } from '@angular/core';


export const portfolioData = [
  {
      'displayName': 'Diglossia',
      'github': 'https://github.com/benniferLopez/Diglossia',
      'website': 'https://diglossia.me',
      'description': 'Diglossia is a text analytics tool for medical professionals to analyze their rhetoric for potentially confusing language, speaking speed, automated script orders, etc.',
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
      'imgPath': './../../assets/sr-logo.png',  
      'tags': [
        'webdev',
        'python',
        'django'
      ],
      'showDetails': false,
  },
  {
      'displayName': 'GradeGetter',
      'github': 'https://github.com/benniferLopez/GradeGetter',
      'description': 'GradeGetter is a CLI python utility which automates analysis of NCSU grade distribution data (WolfTech Gradient) with the user\'s MyPack schedule availability to compute the optimal schedule.',
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
      'description': 'DropShipper is a bot which automates proxied scraping of AliExpress and listing of items on Ebay for purchase in the American markets',
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
      'description': 'The HQ Trivia Bot assists a player of the game HQ Trivia by polling Google\'s search API and Wikipedia\'s API to form an educated guess',
      'imgPath': './../../assets/hqtrivia-logo.jpg',
      'tags': [
        'automation',
        'selenium',
        'python'
      ],
      'showDetails': false,
  },
  {
    'displayName': 'Thermal Security Camera',
    'github': 'https://github.com/benniferLopez/thermal-security-camera',
    'description': 'A real-time thermal security camera using a raspberry pi with Adafruit AMG8833 thermal sensor, Flask with server sent events, and machine learning to classify human thermal traces.',
    'imgPath': './../../assets/thermalCamDemo.gif',
    'tags': [
      'machine-learning',
      'raspi',
      'flask',
      'python'
    ],
    'showDetails': false,
    'scale': true,
}];

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
}


