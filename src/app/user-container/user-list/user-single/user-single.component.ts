import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { objInterface2 } from "src/app/user-container/user-list/user-list.component";

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() prova!:string;
  @Input() utente!:any
  @Output() utenteDelete = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteFunction(utente: any) {
    this.utenteDelete.emit(utente);
    
  }
}
