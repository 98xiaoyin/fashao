import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';
import {NotFoundPage} from '../not-found/not-found';
import {CartPage} from '../cart/cart'; 
import {LoginPage} from '../login/login';
/**
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart = CartPage;
  notFound = NotFoundPage;
  details=[];
  constructor(
    private myToast:ToastController,
    private myServe:MyHttpService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    var id = this.navParams.get('id');
    console.log(id);
    //发起请求
    let url='http://localhost/framework/forStu/ajia_code/data/product/details.php?lid='+id;
    this.myServe.sendRequest(url,(result)=>{
      console.log(result);
      this.details=result.details;
    })
  }

  addCount() {
    let url='http://localhost/framework/forStu/ajia_code/data/cart/add.php?buyCount=1&lid='
    +this.navParams.get('id');
    this.myServe.sendRequest(url,(result)=>{
      console.log(result);
      var msg='';
      if(result.code==200){
          msg='添加成功';        
      }else{
        if(result.code==300){
          this.navCtrl.push(LoginPage)
        }else{
          msg='登陆失败'
        }
      }
      this.myToast.create({
        message:msg,
        duration:1500
      }).present();
    })
  }
}
