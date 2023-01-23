import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { ModalUpdateService } from 'src/app/services/modal-update.service '

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent implements OnInit {

  @Input() title: string



  constructor(public modalService: ModalService, public navigationComponent: NavigationComponent, public modalUpdateService: ModalUpdateService) {

  }
  ngOnInit(): void {

  }

}
