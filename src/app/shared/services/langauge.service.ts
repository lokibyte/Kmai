import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangaugeService {

  constructor(private translate: TranslateService) { }
  async setDefaultLanguage(){
    let language:string = "en";
    language = await localStorage.getItem("languageselected") || 'en';
    this.translate.setDefaultLang(language);
    this.translate.addLangs(['en','ka','de','hi','kn','te','or','ta','ur']);
    console.info("language",language);
  }
   
  setLanguage(lang:string) { 
    console.info('setLanguage',lang);
    if(lang){
      this.translate.use(lang); 
    }
    
  }

}
