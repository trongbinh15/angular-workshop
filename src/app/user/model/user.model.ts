export class User {
  id: string;
  name: string;
  role: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.name = obj.name;
    this.role = obj.role;
  }
}