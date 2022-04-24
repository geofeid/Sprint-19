import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  paragraph1 = "This site is my first test of Angular";
  paragraph2 = "I was hoping it'd be more like vanilla node.js";
  paragraph3 = "Even though it isn't, I can still see the appeal now that I've messed around";

  constructor() { }

  ngOnInit(): void {
  }

}
