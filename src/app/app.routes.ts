import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.routes').then((m) => m.contactoRoutes)
  },
  { path: '**', component: PageNotFoundComponent }

];
