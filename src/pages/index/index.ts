import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';
import {DetailPage} from '../detail/detail';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  carouselItems=[];
  newArrivalItems = [];
  recommendedItems = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private myService:MyHttpService) 
    {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    //发起网络请求
    let url='http://localhost/framework/forStu/ajia_code/data/product/index.php';
    this.myService.sendRequest(url,(result)=>{
      console.log(result);
      this.carouselItems=result.carouselItems;
      this.newArrivalItems=result.newArrivalItems;
      this.recommendedItems=result.recommendedItems;
    })
  }
  jump(pid) {
    this.navCtrl.push(DetailPage,{id:pid});
  }
}
