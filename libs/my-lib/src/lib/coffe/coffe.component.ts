import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hive-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent implements OnInit {
    @Input()
    title: string;
    @Input()
    URL: string;
    @Input()
    GOTO: string;
  constructor() { }

  ngOnInit() {
  }

}
