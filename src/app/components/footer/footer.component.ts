import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  isAuth!: string | null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const subscription = this.authService.userToken$.subscribe(res => this.isAuth = res)
    this.subscription.add(subscription)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
