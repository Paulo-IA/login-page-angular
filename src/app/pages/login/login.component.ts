import { Component } from '@angular/core';
import { LayoutLoginPageComponent } from '../../components/layout-login-page/layout-login-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutLoginPageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
