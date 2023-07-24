import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { filter } from 'rxjs';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { currentPage, users, labelTotalUser } from '../../store/users.store';

@Component({
  selector: 'app-users-signal-page',
  templateUrl: './users-signal-page.component.html',
  styleUrls: ['./users-signal-page.component.css']
})
export class UsersSignalPageComponent implements OnInit {

  public usersService = inject(UsersService);

  get users() {
    return users
  }

  get currentPage() {
    return currentPage
  }

  get labelTotalUser() {
    return labelTotalUser
  }

  // public users = signal<User[]>([]);
  // public currentPage = signal(1)
// 
  // public labelTotalUser = computed(()=>`Total de usuarios ${this.users().length}`)

  ngOnInit(): void {
    this.loadPage(currentPage())
  }

  loadPage(page: number) {
    currentPage.set(page)

    this.usersService.loadPage(page)
        .pipe(
          filter(users => users.length > 0)
        )
        .subscribe((newUsers)=> {
          users.set(newUsers)
          // this.currentPage.set(page)
          users.update(currentUsers => [...currentUsers, ...newUsers])
        })

  }

}
