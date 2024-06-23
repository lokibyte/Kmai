import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../shared/services/utility.service';
import { UserService } from '../shared/services/user.service';
import { RegisterService } from '../shared/services/api/register.service';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  selectedFltr = false;
  selectedroles:any = [];
  isanyrolechekced = false;
  isDisabled = true;
  name = '';
  location = '';
  jobroles = [
    {
      id:1,
      name:'Barber'
    },
    {
      id:2,
      name:'Barber'
    },
    {
      id:3,
      name:'Barber'
    },
    {
      id:4,
      name:'Barber'
    },
    {
      id:5,
      name:'Barber'
    },
    {
      id:6,
      name:'Barber'
    },
    {
      id:7,
      name:'Barber'
    },
    {
      id:8,
      name:'Barber'
    },
    {
      id:9,
      name:'Barber'
    },
    {
      id:10,
      name:'Barber'
    },
    {
      id:11,
      name:'Barber'
    },
    {
      id:12,
      name:'Barber'
    },
    {
      id:13,
      name:'Barber'
    },
    {
      id:14,
      name:'Barber'
    },
    {
      id:15,
      name:'Barber'
    },
    {
      id:16,
      name:'Barber'
    },
    {
      id:17,
      name:'Barber'
    },
    {
      id:18,
      name:'Barber'
    },
    {
      id:19,
      name:'Barber'
    }
  ];
  preferredJobRoles:any[]=[];
  constructor(
    public router: Router,
    private utility:UtilityService,
    private registerService:RegisterService,
    private userService:UserService,
    private loader:LoaderService,
  ) { }

  ngOnInit() {
  }
  doRegister(){
    console.info("this.isDisabled",this.isDisabled);
    if(!this.isDisabled){
      this.utility.setfromlocation('register');
      
      let usr = this.userService.getUser();
      this.selectedroles.every((itm:any)=>this.preferredJobRoles.push({ "preferredJobRoleName": itm.name }));

      let reqobj = {
            "fullName": this.name,
            "location": this.location,
            "preferredJobRoles": this.preferredJobRoles
            
         };
         this.loader.showLoader("User Registration progressing..")
      this.registerService.updateUserInfo(reqobj,usr).subscribe( (data:any) => {
        this.loader.hideLoader();
        console.info("updateUserInfo response",data);
        let usr = this.userService.getUser();
      
      let _usr = {...usr,...data};
      this.userService.setuser(_usr);
        console.info(this.userService.getUser());
        localStorage.setItem('isLoggedin','true');
          this.router.navigate(['/video-landing']);  
      }
      ,(err:any) => {
         this.loader.hideLoader();
        console.log("Get call in error", err);
      }
      ,() => {
        console.log("The POST observable is now completed.");
      }
     );
    }
    
  }
  locationChange(){
    this.validateRegistration();
  }
  nameChange(){
    this.validateRegistration();
  }
  onSelect(role:any,idx:any){
    
    let roleidx = this.selectedroles.findIndex((obj:any) => obj.id == role.id);
    if(this.selectedroles.length < 5){
      role.selected = role.selected == true ? false:true;
      
      console.info("roleidx",roleidx);
      if(roleidx != -1){
        
        if(!role.selected){
          this.selectedroles.splice(roleidx,1);  
        }else{
          this.selectedroles[roleidx] = role;
        }
        
      }else{
        this.selectedroles.push(role);
      }
      console.info(this.selectedroles);
      
      this.validateRegistration();  
    }else{
      // role.selected = role.selected == true ? false:true;
      // this.selectedroles.splice(roleidx,1);
    }
    
  }
  onisRoleChange(evt:any){
    console.info(evt.target.checked);
    if(evt.target.checked){
      this.isanyrolechekced = true;
    }else{
      this.isanyrolechekced = false;
    }
    this.validateRegistration();
  }
  validateRegistration(){
    console.info(this.selectedroles,)
    console.info("isDisabled",this.isDisabled,this.selectedroles,this.isanyrolechekced,this.name,this.location);
    if( (this.selectedroles.length > 0 || this.isanyrolechekced) && this.name.length > 0 && this.location.length > 0){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
}