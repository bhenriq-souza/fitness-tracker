import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../../_core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './app-sidenav-list.component.html',
  styleUrls: ['./app-sidenav-list.component.css']
})
export class AppSideNavListComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private authSerive: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authSerive.authChange
      .subscribe(authStatus => this.isAuth = authStatus);
  }

  onClose() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authSerive.logout();
    this.onClose();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
