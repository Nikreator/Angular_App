import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ 'providedIn': 'root' })

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, public router: Router, private translateService: TranslateService) {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;

      if (this.isAuthenticated == !!user) {
        this.router.navigate(["/"])
      } else {
        this.router.navigate(["/auth"])
      }
      console.log(!!user);
      console.log(!user);

    })
  }

  ngOnInit(): void {

  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value)
  }
}