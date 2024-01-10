export class Student {
  //Define student properties
  id!: string;
  first_name!: string;
  last_name!: string;

  constructor(json: any) {
    const castedObject = json as Student;
    //Assign the properties to the class instance
    this.id = castedObject.id;
    this.first_name = castedObject.first_name;
    this.last_name = castedObject.last_name;
    }
}