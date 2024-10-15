import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-login-page',
  standalone: true,
  imports: [],
  templateUrl: './layout-login-page.component.html',
  styleUrl: './layout-login-page.component.scss'
})
export class LayoutLoginPageComponent {
  @Input() title: string = '';
}
