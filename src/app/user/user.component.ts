import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '../shared/modal.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => this.users = users)
  }

  addUser(): void {
    this.modalService.openComponentDialog(AddUserComponent)
      .subscribe((res: User) => {
        if (res) {
          this.userService.addUser(res).subscribe(
            () => this.loadUsers());
        }
      })
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(
      () => this.loadUsers())
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      () => this.loadUsers());
  }
}
