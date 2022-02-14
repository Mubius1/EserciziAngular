import { Component, OnInit } from '@angular/core';
import{role,gender,companies,location,objInterface} from'src/app/user-container/user-detail/user'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  utenti:objInterface[]=[
    {
      id:3487,
      name:'Mario',
      surname:'Rossi',
      age:30,
      dateOfBirth:818970000000, //epoch time...jonh titor
      address:{
        city:'Roma',
        street:'Via roma 10',
        postalCode:'00100',
      },
      role:'staff',
      username:'MarioRossi80',
      profilePhotoUrl:'https://upload.wikimedia.org/wikipedia/commons/4/48/RedCat_8727.jpg',
      gender:'male',
      companies:[{
        id: 1,
        name: 'Develhope',
        description:'La migliore',
        location:{
          city:'Roma',
          street:'Via roma 10',
          postalCode:'00100',
        },
    }, {
        id: 2,
        name: 'Apple',
        description:'Eh insomma...',
        location:{
          city:'Cupertino',
          street:'One Apple Park Way',
          postalCode:'95014',
        },
    }],
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  
}


