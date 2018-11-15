import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service';

/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  constructor(
    private myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }
  handleLeave() {
    let url='http://localhost/framework/forStu/ajia_code/data/user/logout.php'
    this.myHttp.sendRequest(url,(result)=>{
      if(result.code==200){
        this.myHttp.showToast('退出成功');
      }
    })
  }
}
