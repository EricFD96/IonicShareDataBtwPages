import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalPage } from '../modal/modal.page';
import { filter } from 'rxjs/operators';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valueFromChild: string = '';
  todos: Observable<string[]>;
  todo: string = '';

  constructor(
    private modalCtrl: ModalController,
    private stateService: StateService
  ) {
    this.todos = this.stateService.todos;
  }

  async showModal() {
    const mySubject = new BehaviorSubject(null);

    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { subject: mySubject },
    });

    await modal.present();

    mySubject.pipe(filter((value) => !!value)).subscribe((res) => {
      console.log('new value while open: ', res);
    });

    const { data } = await modal.onWillDismiss();
    console.log(`On dismiss modal: `, data);
  }

  childChanged(data: string) {
    this.valueFromChild = data;
  }

  addTodo(){
    this.stateService.addTodo(this.todo);
    this.todo = '';
  }

  removeTodo(index: number){
    this.stateService.removeTodo(index);
  }
}
