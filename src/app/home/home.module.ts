import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../core/navigation/navigation.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ListBlogpostComponent } from './components/list-blogpost/list-blogpost.component';
import { SingleBlogpostComponent } from './components/single-blogpost/single-blogpost.component';

@NgModule({
  declarations: [
    HomeComponent, 
    JumbotronComponent, ListBlogpostComponent, SingleBlogpostComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
