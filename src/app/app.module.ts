import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StateManagerService} from './core/state-management/state-manager.service';


export function initApplication(appInitService: StateManagerService) {
  return () => appInitService.initStore();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [
        StateManagerService
      ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
