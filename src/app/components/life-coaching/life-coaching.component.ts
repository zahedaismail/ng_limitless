import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-life-coaching',
  templateUrl: './life-coaching.component.html',
  styleUrls: ['./life-coaching.component.css']
})
export class LifeCoachingComponent implements OnInit {

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
