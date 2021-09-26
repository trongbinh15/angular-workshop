
export class Schedule {
  id: string;
  title: string;
  creator: string;
  description: string;
  location: string;
  timeStart: Date;
  timeEnd: Date;

  constructor(obj: any) {
    this.id = obj.id;
    this.title = obj.title;
    this.creator = obj.creator;
    this.description = obj.description;
    this.location = obj.location;
    this.timeStart = obj.timeStart;
    this.timeEnd = obj.timeEnd;
  }
}