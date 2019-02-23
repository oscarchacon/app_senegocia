import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './services/service1.service';
import { ModalAddComponent } from './components/modals/modal-add/modal-add.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap';
import { ModalConfirmComponent } from './components/modals/modal-confirm/modal-confirm.component';
import { ModalEditComponent } from './components/modals/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ModalAddComponent,
    ModalAddComponent,
    ModalConfirmComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule,
  ],
  providers: [
    Service1Service,
    BsModalService,
  ],
  entryComponents:[
    ModalAddComponent,
    ModalConfirmComponent,
    ModalEditComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
