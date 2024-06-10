import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langauge',
  templateUrl: './langauge.page.html',
  styleUrls: ['./langauge.page.scss'],
})
export class LangaugePage implements OnInit {
  
  selectedlang = 'en';
  constructor(public router: Router,private _translate: TranslateService) { }

  ngOnInit() {
    console.info("ngOnInit");
  }
  
  onLanguageChange(e:any){
    this.selectedlang = e.target.value;
    this._translate.use(this.selectedlang);
    console.info(this.selectedlang);
  }

  gotoLogin(){
    // this.router.navigate(['/login']);
    this.router.navigate(['/home']);
  }
  goBack(){
    // this.router.navigate(['/landing']);
    this.router.navigate(['/home']);
  }
}
