import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName='';
  upwds='';
  constructor(
    private toastCtrl:ToastController,
    private myServe:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
  }
  handleUp(){
    let url='http://localhost/framework/forStu/ajia_code/data/user/login.php?'+'uname='+
    this.userName+'&'+'upwd='+this.upwds;
    this.myServe.sendRequest(url,(result)=>{
      if(result.code==201){
        this.toastCtrl.create({
          message:'用户名或者密码出错',
          duration:1500
        }).present();
      }else if(result.code==401){
        this.toastCtrl.create({
          message:'用户名未填写!',
          duration:1500
        }).present();
      }else if(result.code==402){
        this.toastCtrl.create({
          message:'密码未填写!',
          duration:1500
        }).present();
      }else{
        this.toastCtrl.create({
          message:'登陆成功',
          duration:1500
        }).present();
        this.navCtrl.pop();
      }
      console.log(result);
    })
  }
}
