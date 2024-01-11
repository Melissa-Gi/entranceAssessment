export default class Subject {
  //define class properties
  sub_id: string;
  teacher: string;
  name: string;

  constructor(json: any) 
  {
    const castedJson = json as Subject;

    this.sub_id = castedJson.sub_id;
    this.teacher = castedJson.teacher;
    this.name = castedJson.name;
  }
}
