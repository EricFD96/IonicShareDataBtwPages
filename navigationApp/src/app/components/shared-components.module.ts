import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox/textbox.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextboxComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TextboxComponent],
})
export class SharedComponentsModule {}
