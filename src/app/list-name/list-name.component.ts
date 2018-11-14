import { Component, OnInit } from '@angular/core';
import {ListName} from '../listName';
import { Name } from '../name';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent implements OnInit {
  arrName = ListName;
  selectedName: Name;
  
  constructor() { }
  ngOnInit() {
  }
  
  onSelect(name: Name): void{
    this.selectedName = name;
  }
}
