import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.scss'],
})
export class AppliedjobComponent  implements OnInit {
  @Input() job:any;
  constructor() { }

  ngOnInit() {}
  
  
}
