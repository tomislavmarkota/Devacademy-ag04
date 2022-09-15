import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  isAuth!: string | null;
  private subscription: Subscription = new Subscription()

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const subscription = this.authService.userToken$.subscribe(res => this.isAuth = res);
    this.subscription.add(subscription)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.authService.isAuth(localStorage.getItem('token'))
  }
}
