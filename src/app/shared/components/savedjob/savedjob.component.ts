import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-savedjob',
  templateUrl: './savedjob.component.html',
  styleUrls: ['./savedjob.component.scss'],
})
export class SavedjobComponent  implements OnInit {

  @Input() job:any;
  @Output() onEasyApply = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // console.info(this.job);
  }

  doEasyApply(){
    this.onEasyApply.emit(this.job);
  }
}
