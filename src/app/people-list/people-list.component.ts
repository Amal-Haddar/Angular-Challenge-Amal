import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  bookList = ['bb', 'cc'];
  i;
  PeopleList = [
    {
      id: 1,
      FirstName: 'Amal',
      LastName: 'Haddar',
      Phone: '20625497'
    },
    {
      id: 2,
      FirstName: 'Fedi',
      LastName: 'Guesmi',
      Phone: '50859231'
    },
    {
      id: 3,
      FirstName: 'Seif',
      LastName: 'Medini',
      Phone: '23687946'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  Delete(id) {
    this.PeopleList.splice(id, 1);
  }
}
