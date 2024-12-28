import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:slug',
    component: ShowPostComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'services/:slug',
    component: ShowServiceComponent,
  },
  {
    path: '**',
    redirectTo : '/',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
