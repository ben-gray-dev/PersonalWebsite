import { Injectable } from '@angular/core';


export const portfolioData = [
  {
      'displayName': 'Diglossia',
      'github': 'https://github.com/benniferLopez/Diglossia',
      'website': 'https://diglossia.me',
      'description': 'Diglossia is a text analytics tool for medical professionals to analyze their rhetoric for potentially confusing language, speaking speed, automated script orders, etc.',
      'fullDescription': '',
      'imgPath': './../../assets/diglossia.jpg',
      'tags': [
        'medical',
        'webdev',
        'angular'
      ],
  },
  {
      'displayName': 'Service Raleigh Web Committee',
      'github': 'https://github.com/ServiceRaleigh/',
      'website': 'https://www.serviceraleigh.org/',
      'description': 'Service Raleigh is a service organization which organizes volunteers for a day of service throughout the Raleigh area.',
      'fullDescription': '',
      'imgPath': './../../assets/sr.jpg',
      'tags': [
        'webdev',
        'python'
      ],
  },
  {
      'displayName': 'GradeGetter',
      'github': 'https://github.com/benniferLopez/GradeGetter',
      'description': 'GradeGetter is a CLI python utility which automates analysis of NCSU grade distribution data (WolfTech Gradient) with the user\'s MyPack schedule availability to compute the optimal schedule.',
      'fullDescription': '',
      'imgPath': './../../assets/gradegetter.jpg',
      'tags': [
        'automation',
        'CLI',
        'python'
      ]
  },
  {
      'displayName': 'DropShipper',
      'github': 'https://github.com/benniferLopez/DropShipper',
      'description': '',
      'fullDescription': '',
      'imgPath': './../../assets/dropshipper.jpg',
      'tags': [
        'automation',
        'selenium',
        'python'
      ]
  },
  {
      'displayName': 'HQ Trivia Bot',
      'github': 'https://github.com/benniferLopez/HQTriviaBot',
      'description': '',
      'fullDescription': '',
      'imgPath': './../../assets/hqtriviabot.jpg',
      'tags': [
        'automation',
        'selenium',
        'python'
      ]
  }];

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
}

