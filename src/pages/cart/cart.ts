import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import {LoginPage} from '../login/login';
import {OrderConfirmPage} from '../order-confirm/order-confirm';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list=[];
  myCount=0;
  isAllSelected = false;
  constructor(
    private myHttpToast:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let url='http://localhost/framework/forStu/ajia_code/data/cart/list.php';
    this.myHttpToast.sendRequest(url,(result)=>{
      console.log(result);
        if(result.code==200){
        this.list=result.data;
        console.log(this.list)
        for(var i=0;i<this.list.length;i++){
          this.list[i].isSelected = false;
        }
       
      }else{
        this.navCtrl.push(LoginPage);
      }
    })
    console.log('ionViewWillEnter CartPage');
    
  }
  handleLittle(index,isAdd){
    if(isAdd){
      this.list[index].count++;
    }else{
      if(this.list[index].count==1){
        return
      }
      this.list[index].count--;
    }
  }
  handleDel(index){
    this.list.splice(index, 1)
  }
  jump(){
    this.navCtrl.push(OrderConfirmPage);
    console.log(1);
  }
  selectAll(){
    for(var i=0;i<this.list.length;i++){
      this.list[i].isSelected=this.isAllSelected;
    }
  }
  selectOne(){
    var result= true;
    for(var i=0;i<this.list.length;i++){
      result=result && this.list[i].isSelected // 与运算
    }
    this.isAllSelected=result;
  }
//计算被选中总和
 calcAll(){
   var totalPrice=0;
   for(var i=0;i<this.list.length;i++){
     var product=this.list[i];
     if(product.isSelected==true){
      totalPrice+=(product.price*product.count)
     }
   }
   return totalPrice;
 }
}
