import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './app-sidenav-list.component.html',
  styleUrls: ['./app-sidenav-list.component.css']
})
export class AppSideNavListComponent implements OnInit {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onClose() {
    this.sidenavToggle.emit();
  }

}
