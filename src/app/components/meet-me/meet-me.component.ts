import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meet-me',
  templateUrl: './meet-me.component.html',
  styleUrls: ['./meet-me.component.css']
})
export class MeetMeComponent implements OnInit {

  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
