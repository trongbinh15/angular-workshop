import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from './model/user.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: User[] = [
    {
      id: '1',
      name: 'John',
      role: 'Developer'
    },
    {
      id: '2',
      name: 'Jane',
      role: 'Designer'
    },
    {
      id: '3',
      name: 'Bob',
      role: 'Manager'
    },
    {
      id: '4',
      name: 'Mary',
      role: 'Developer'
    },
    {
      id: '5',
      name: 'Mike',
      role: 'Designer'
    },
    {
      id: '6',
      name: 'Adam',
      role: 'Manager'
    }
  ];

  constructor() { }

  getAllUsers() {
    return of(this.list);
  }

  getUserById(id: string) {
    return of(this.list.find(user => user.id === id));
  }

  addUser(user: User) {
    if (user) {
      user.id = uuid();
      this.list.push(user);
    }
    return of(true);
  }

  updateUser(user: User) {
    const index = this.list.findIndex(u => u.id === user.id);
    this.list[index] = user;
    return of(true);
  }

  deleteUser(id: string) {
    this.list = this.list.filter(user => user.id !== id);
    return of(true);
  }
}
