import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-and-social-media',
  templateUrl: './contact-and-social-media.component.html',
  styleUrls: ['./contact-and-social-media.component.css']
})
export class ContactAndSocialMediaComponent implements OnInit {

  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
