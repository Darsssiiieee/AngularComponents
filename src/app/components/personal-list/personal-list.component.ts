import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrl: './personal-list.component.css'
})
export class PersonalListComponent {
  notifications: string[] = []; 
  newNotification: string = ''; 


  addNotification() {
    if (this.newNotification.trim()) {
      this.notifications.push(this.newNotification);
      this.newNotification = ''; 
    }
  }


  clearNotifications() {
    this.notifications = [];
  }
}
