// app.routes.ts actualizado
import { Routes } from '@angular/router';
import { BackOfficeComponent } from './backoffice/backoffice.component';
import { ActivitiesComponent } from './backoffice-activity/backoffice-activity.component';
import { MessagesComponent } from './components/messages/messages.component'; 


export const routes: Routes = [
    { path: 'admin', component: BackOfficeComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'messages', component: MessagesComponent },
    //{ path: '', redirectTo: '/admin', pathMatch: 'full' }
];