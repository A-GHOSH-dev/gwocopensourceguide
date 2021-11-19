import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path: 'angular', component: AngularComponent},
  {path: 'vue', component: VueComponent},
  {path: 'python', component: PythonComponent},
  {path: 'nodejs', component: NodejsComponent},
  {path: 'atom', component: AtomComponent},
  {path: 'gnu', component: GnuComponent},
  {path: 'cordova', component: CordovaComponent},
  {path: 'tensorflow', component: TensorflowComponent},
  {path: 'pytorch', component: PytorchComponent},
  {path: 'opencv', component: OpencvComponent},
  {path: 'php', component: PhpComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  {path: 'eclipse', component: EclipseComponent},
  {path: 'git', component: GitComponent},
  {path: 'nestjs', component: NestjsComponent},
  {path: 'nextjs', component: NextjsComponent},
  {path: 'django', component: DjangoComponent},
  {path: 'flask', component: FlaskComponent},
  {path: 'reactjs', component: ReactjsComponent},
  {path: 'swift', component: SwiftComponent},
  {path: 'mongodb', component: MongodbComponent},
  {path: 'linux', component: LinuxComponent},
  {path: 'ruby', component: RubyComponent}, 
  {path: 'apachenet', component: ApachenetComponent},
  {path: 'opensource', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
