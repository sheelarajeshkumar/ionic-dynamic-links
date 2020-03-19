import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
/* import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from '@ionic/angular'; */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly options: InAppBrowserOptions = {
    zoom: 'no',
    fullscreen: 'yes',
    hidenavigationbuttons: 'yes',
    hideurlbar: 'yes'

  };
  constructor(private iab: InAppBrowser/* , private platform: Platform, private splashScreen: SplashScreen */) {
    // this.splashScreen.show();
    this.iab.create('http://ouracademy.cc/b', '_self', this.options);
  }

}
