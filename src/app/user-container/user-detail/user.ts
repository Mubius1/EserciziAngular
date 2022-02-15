export enum role{staff,student,manager,admin}
export enum gender{male,female,other}
export interface location{
    city:string;
    street:string;
    postalCode:string;
}
export interface companies{
    id: number;
    name: string;
    description:string;
    location:location;
}
export interface objInterface{
    id:number;
    name:string;
    surname:string;
    age:number;
    dateOfBirth:number;
    address:location;
      
    role: keyof typeof role;
    username: string,
    profilePhotoUrl: string,
    companies: companies[]
    gender: keyof typeof gender;
}
