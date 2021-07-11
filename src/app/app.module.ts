import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './commons/core/layout/layout.module';
import { PopupModule } from './commons/services/popup/popup.module';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PopupContentModule } from './commons/components/popup-content/popup-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule,
    PopupContentModule,
    LayoutModule
  ],
  providers: [
    { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8080] : undefined }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
