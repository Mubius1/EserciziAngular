import { Component, OnInit } from '@angular/core';

export enum Role{STAFF,STUDENT,MANAGER,ADMIN}
export enum Gender{MALE,FEMALE,OTHER}
export interface location{
    city:string;
    street:string;
    postalCode:string;
}
// export interface companies{
//     id: number;
//     name: string;
//     description:string;
//     location:location;

export interface objInterface{
    id:number;
    name:string;
    surname:string;
    age:number;
    dateOfBirth:string;
    address:location;
      
    role: Role;
    username: string,
    profilePhotoUrl: string,
    // companies: companies[]
    gender: Gender;
}

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
utenti:objInterface[] = [
    {
        id: 3487,
        name: 'Mario',
        surname: 'Rossi',
        age: 25,
        dateOfBirth: '1995-14-12',
        address: {
          city: 'Roma',
          street: 'Via roma 10',
          postalCode: '00100'
        },
        role: Role.STAFF,
        username: 'MarioRossi80',
        profilePhotoUrl: 'https://bit.ly/3yRngEP',
        gender: Gender.MALE
      },
      {
        id: 12312,
        name: 'Maria',
        surname: 'Rossa',
        age: 26,
        dateOfBirth: '1994-10-11',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 10',
          postalCode: '90100'
        },
        role: Role.MANAGER,
        username: 'MariaRossa94',
        profilePhotoUrl: 'https://bit.ly/3DWWxuj',
        gender: Gender.FEMALE
      },
      {
        id: 45645,
        name: 'Elis',
        surname: 'Miao',
        age: 5,
        dateOfBirth: '2016-05-08',
        address: {
          city: 'Palermo',
          street: 'Via Palermo 120',
          postalCode: '90100'
        },
        role: Role.ADMIN,
        username: 'ElisMiao',
        profilePhotoUrl: 'https://bit.ly/3zU6iH3',
        gender: Gender.FEMALE
      }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
