import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-enriching-reads',
  templateUrl: './enriching-reads.component.html',
  styleUrls: ['./enriching-reads.component.css']
})
export class EnrichingReadsComponent implements OnInit {

  faBook = faBook;

  constructor() { }

  ngOnInit(): void {
  }

}
