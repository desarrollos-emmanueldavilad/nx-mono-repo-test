import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'argo-inicioshare',
  templateUrl: './inicioshare.component.html',
  styleUrls: ['./inicioshare.component.scss']
})
export class InicioshareComponent implements OnInit {
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
