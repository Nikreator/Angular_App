import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  @Input() title: string

  

  constructor(public modalService: ModalService, public navigationComponent: NavigationComponent) { 
   
  }
  ngOnInit(): void {
    
  }

}
