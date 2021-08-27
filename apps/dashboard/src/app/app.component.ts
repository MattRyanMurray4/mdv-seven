import { Component } from '@angular/core';

@Component({
  selector: 'mines-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Metals-Application';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'metals', icon: 'view_list', title: 'Metal-List' },
  ];
}
