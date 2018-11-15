import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  s=5;
  myTimer=null;
  constructor(
   
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
     this.myTimer=setInterval(()=>{
      this.s--;
      if(this.s==1){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }else{
          clearInterval(this.myTimer);
        }
      };
     },1000) 
  }

  ionViewWillLeave(){
    clearInterval(this.myTimer);
  }
}
