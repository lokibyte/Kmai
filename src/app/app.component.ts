import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangaugeService } from './shared/services/langauge.service';
import { NetworkService } from 'src/app/shared/services/network.service';
import { HttpService } from './shared/services/http.service';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { UtilityService } from './shared/services/utility.service';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  _isLoggedin = false;
  constructor(private translate:TranslateService, private networkService:NetworkService,private httpService:HttpService,private _langauge:LangaugeService,public router: Router,private utility:UtilityService) {
    console.info("app componet constructor");
    
    this._langauge.setDefaultLanguage();
    
  }
  async ngOnInit() {
    console.info("apps ngOnInit");
    let status = await this.networkService.getCurrentNetworkStatus();
    console.info("status",status.connected);
    this.initialize();
    // const url = "https://reqres.in/api/users";
    // const reqObj = {
    //      name: "paul rudd",
    //      movies: ["I Love You Man", "Role Models"]
    //  };
    // let res = await this.httpService.doPost(url,reqObj,{});
    // console.info("res",res);
  }

  initialize(){
    
    this.utility.userLoggedIn.subscribe((isUserLoggedin: boolean) => {
        console.info("isUserLoggedin",isUserLoggedin);
        this._isLoggedin = isUserLoggedin;
      });

    let isLoggedin = localStorage.isLoggedin;
    if(isLoggedin=='true'){
      this.router.navigate(['/home']);
    }else if(isLoggedin=='false'){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/landing']);
    }
  }

}
