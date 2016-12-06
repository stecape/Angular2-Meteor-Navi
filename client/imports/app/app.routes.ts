import { Route } from '@angular/router';

import { PartiesListComponent } from './parties/parties-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ControllerComponent } from './pages/controller/controller.component';
import { DocsComponent } from './pages/docs/docs.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { WaterPlantComponent } from './pages/water-plant/waterplant.component';

export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'water-plant', component: WaterPlantComponent },
  { path: 'controller', component: ControllerComponent }
];
