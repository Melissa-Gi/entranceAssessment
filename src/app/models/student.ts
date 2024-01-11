export default class Student {
  //define class properties
  id: string;
  first_name: string;
  last_name: string;

  constructor(json: any) 
  {
    const castedJson = json as Student;

    this.id = castedJson.id;
    this.first_name = castedJson.first_name;
    this.last_name = castedJson.last_name;
  }
}
