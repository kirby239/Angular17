import { Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { TeamComponent } from "./team/team.component";
export const contactoRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'team',
    component: TeamComponent,
  }
]
