import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponentComponent } from './components/doc-component/doc-component.component';
import { DocSideBarComponent } from './components/doc-component/doc-side-bar/doc-side-bar.component';
import { FeatureComponentComponent } from './components/feature-component/feature-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ShowcaseComponent } from './components/home-component/showcase/showcase.component';

const routes: Routes = [
    {
      path: '', 
      redirectTo:'/home',
      pathMatch: 'full' 
    },
    {   
      path:'home',
      component: HomeComponentComponent
    },
    {
      path:'feature',
      component: FeatureComponentComponent
    },
    {
      path: 'docs',
      component:DocComponentComponent
    },
    {
      path: 'about',
      component:DocSideBarComponent
    },
    {
      path: 'showcase',
      component: ShowcaseComponent
    }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
