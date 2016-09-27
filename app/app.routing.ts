import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AdminDashComponent } from './dashboard/adminDash.component';
import { ManagementComponent } from './management/management.component';

const APP_ROUTES: Routes = [
    { path: 'admin/manage', component: ManagementComponent},
    { path: 'admin', component: AdminDashComponent },
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);