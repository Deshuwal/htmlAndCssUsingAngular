import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './components/home-component/showcase/showcase.component';
import { StatsComponent } from './components/home-component/stats/stats.component';
import { CliComponent } from './components/home-component/cli/cli.component';
import { CloudComponent } from './components/home-component/cloud/cloud.component';
import { LanguagesComponent } from './components/home-component/languages/languages.component';
import { ShowcaseFormComponent } from './components/home-component/showcase-form/showcase-form.component';
import { MainSectionsComponent } from './components/feature-component/main-sections/main-sections.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DocSideBarComponent } from './components/doc-component/doc-side-bar/doc-side-bar.component';
import { DocMainSectionComponent } from './components/doc-component/doc-main-section/doc-main-section.component';
import { DocComponentComponent } from './components/doc-component/doc-component.component';
import { FeatureComponentComponent } from './components/feature-component/feature-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';


// const appRoute:Routes =[
//   {
//     path:'/',
//     component: HomeComponentComponent
//   },
//   {
//     path:'feature',
//     component: FeatureComponentComponent
//   },
//   {
//     path: 'docs',
//     component:DocComponentComponent
//   },
//   {
//     path: 'about',
//     component:DocSideBarComponent
//   },
//   {
//     path: 'showcase',
//     component: ShowcaseComponent
//   }


// ]

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    StatsComponent,
    CliComponent,
    CloudComponent,
    LanguagesComponent,
    ShowcaseFormComponent,
    MainSectionsComponent,
    FooterComponent,
    NavbarComponent,
    DocSideBarComponent,
    DocMainSectionComponent,
    DocComponentComponent,
    FeatureComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  //   RouterModule.forRoot([
  //     {
  //       path:'/',
  //       component: HomeComponentComponent
  //     },
  //     {
  //       path:'feature',
  //       component: FeatureComponentComponent
  //     },
  //     {
  //       path: 'docs',
  //       component:DocComponentComponent
  //     },
  //     {
  //       path: 'about',
  //       component:DocSideBarComponent
  //     },
  //     {
  //       path: 'showcase',
  //       component: ShowcaseComponent
  //     }
    
    
  //   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
