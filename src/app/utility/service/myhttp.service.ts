import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoadingController,ToastController} from 'ionic-angular';


@Injectable()
export class MyHttpService{
    constructor(
        private myToast:ToastController,
        private myHttp:HttpClient,
        private LoadingCtrl:LoadingController,
        ){

    }
    showToast(msg) {
        this.myToast.create({
            message:msg,
            duration:1500
        }).present()
    }

    sendRequest(url,func){
        //显示一个Loading
        var myLoading=this.LoadingCtrl.create({
            content:'正在加载...'
        })
        myLoading.present();
        //发请求
        this.myHttp.get(url,{withCredentials:true}).subscribe((result) =>{
            //关闭loading
            myLoading.dismiss();
            //执行第二个参数所指定的方法
            func(result);
        })
        
    }

}