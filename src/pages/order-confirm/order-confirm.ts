import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';
import {PayPage} from '../pay/pay';


/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  list=[];
  constructor(
    private ModalCtrl:ModalController,
    private myHttp:MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var url='http://localhost/framework/forStu/ajia_code/data/cart/list.php';
    this.myHttp.sendRequest(url,(result) =>{
      console.log(result)
      this.list=result.data;
    })
    console.log('ionViewDidLoad OrderConfirmPage');
  }
  //显示一个模态框
  handlePay(){
    this.ModalCtrl.create(PayPage).present()
  }
}
