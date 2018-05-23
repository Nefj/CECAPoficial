export class Person {
   constructor(
      public first_name: string,
      public last_name: string,
      public ci: number,
      public cellphone:number,
      public whatsapp_group:string,
      public email:string,
      public ocupation: number,  //1 = universitario, 2=Profecional, 3=particular
     // public user: string,
     public carteras:string
   ) { }
}