import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm;
  contactFormCtl: FormGroup;

  constructor(private db: AngularFirestore
  ) { 

    this.contactFormCtl = new FormGroup({
       
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required]),
      
    });
  }

  ngOnInit(): void {


  }

  onSubmit(formVals: any) {
   this.db.collection('messages').add(formVals);
   this.contactFormCtl.reset();
  }

}
