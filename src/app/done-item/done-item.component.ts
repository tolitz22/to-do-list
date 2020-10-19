import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {
	@Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
