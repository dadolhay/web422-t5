import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contact: any = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Submit
    }
  }
}
