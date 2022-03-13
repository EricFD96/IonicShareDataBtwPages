import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() userid: number;
  @Input() filter: boolean;
  @Input() subject: BehaviorSubject<string>;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(`User: ${this.userid} - filter: ${this.filter}`);
    setTimeout(() => {
      this.subject.next('a new hope');
    }, 2000);
  }

  close() {
    this.modalCtrl.dismiss({ returnValue: 42 });
  }
}
