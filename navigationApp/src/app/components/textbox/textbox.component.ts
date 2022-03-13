import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements OnInit {
  @Input() title: string;
  @Output() textChanged: EventEmitter<string> = new EventEmitter();
  myText: string = '';

  constructor() {}

  ngOnInit() {}

  inputChanged() {
    this.textChanged.emit(this.myText);
  }
}
