import { Component, OnInit, Input } from '@angular/core';
import { Name } from '../name';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.css']
})
export class NameDetailComponent implements OnInit {
  @Input() name: Name;
  constructor() { }

  ngOnInit() {
  }

}
