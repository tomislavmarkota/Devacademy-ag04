import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() categorization: number | null = null;


  constructor() { }

  ngOnInit(): void {
  }

  getNumOfStarsArr(n:number): Array<number>{
    return Array(n);
  }


}
