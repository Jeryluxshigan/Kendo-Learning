import { Component, } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public margin = { horizontal: -46, vertical: 7 };
  public show = false;

  public onToggle(): void {
    this.show = !this.show;
  }

  
  

}


