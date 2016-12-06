import { Route } from '@angular/router';

import { PartiesListComponent } from './parties/parties-list.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { ControllerComponent } from './pages/controller/controller.component';
import { WaterPlantComponent } from './pages/waterplant/waterplant.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'parties', redirectTo: '' },
  { path: 'home', component: HomeComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'controller', component: ControllerComponent },
  { path: 'waterplant', component: WaterPlantComponent },
  { path: 'docs', component: DocsComponent }
];
