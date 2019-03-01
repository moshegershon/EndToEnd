import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ContactModel } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: ContactModel;
  constructor(private contactService: ContactService) {
    this.contact = {
      email: '',
      name: '',
      phone: ''
    };
  }

  ngOnInit() {
  }
  onClick() {
    this.contactService.onClick(this.contact).subscribe()
  }


}
