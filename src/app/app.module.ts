import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AngularComponent } from './angular/angular.component';
import { VueComponent } from './vue/vue.component';
import { PythonComponent } from './python/python.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { RubyComponent } from './ruby/ruby.component';
import { ApachenetComponent } from './apachenet/apachenet.component';
import { LinuxComponent } from './linux/linux.component';
import { DjangoComponent } from './django/django.component';
import { FlaskComponent } from './flask/flask.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NextjsComponent } from './nextjs/nextjs.component';
import { ReactjsComponent } from './reactjs/reactjs.component';
import { SwiftComponent } from './swift/swift.component';
import { NestjsComponent } from './nestjs/nestjs.component';
import { GitComponent } from './git/git.component';
import { EclipseComponent } from './eclipse/eclipse.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PhpComponent } from './php/php.component';
import { OpencvComponent } from './opencv/opencv.component';
import { TensorflowComponent } from './tensorflow/tensorflow.component';
import { PytorchComponent } from './pytorch/pytorch.component';
import { CordovaComponent } from './cordova/cordova.component';
import { GnuComponent } from './gnu/gnu.component';
import { AtomComponent } from './atom/atom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavbarComponent,
    AngularComponent,
    VueComponent,
    PythonComponent,
    NodejsComponent,
    RubyComponent,
    ApachenetComponent,
    LinuxComponent,
    DjangoComponent,
    FlaskComponent,
    MongodbComponent,
    NextjsComponent,
    ReactjsComponent,
    SwiftComponent,
    NestjsComponent,
    GitComponent,
    EclipseComponent,
    BootstrapComponent,
    PhpComponent,
    OpencvComponent,
    TensorflowComponent,
    PytorchComponent,
    CordovaComponent,
    GnuComponent,
    AtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
