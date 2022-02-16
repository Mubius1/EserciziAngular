import { Component, Input, OnInit } from '@angular/core';
import { objInterface2 } from "src/app/user-container/user-list/user-list.component";

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() prova!:string;
  @Input() utente!:objInterface2
  constructor() { }

  ngOnInit(): void {
  }

}
