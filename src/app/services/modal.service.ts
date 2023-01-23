import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { AppComponent } from '../app.component';
import { AuthService } from '../components/auth/auth.service';
import { NavigationComponent } from '../components/navigation/navigation.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public navigationComponent: NavigationComponent, public authService: AuthService) {

  }

  isVisible$ = new BehaviorSubject<boolean>(false)

  open() {

    this.isVisible$.next(true)


  }



  close() {
    this.isVisible$.next(false)
  }

}
