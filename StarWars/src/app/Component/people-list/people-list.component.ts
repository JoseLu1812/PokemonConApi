import { Component, OnInit } from '@angular/core';
import { People } from "src/app/Interfaces/starwars-response.interface";
import { PeopleService } from 'src/app/Service/people-service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  PeopleList: People[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(Response => {
      this.PeopleList = Response.results;
    })
  }

}
