import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { ViajeDetailComponent } from '../viaje/viaje-detail/viaje-detail.component';
import { ViajeListComponent } from '../viaje/viaje-list/viaje-list.component'; 
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ViajeroDetailComponent } from '../viajero/viajero-detail/viajero-detail.component';
import { ViajeroListComponent } from '../viajero/viajero-list/viajero-list.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'viajeros',
        children: [{
          path: 'list',
          component: ViajeroListComponent
        },
        {
          path: ':idViajero',
          component: ViajeroDetailComponent,
          outlet: 'detail'
        }
        ]
      },
    {
        path: 'viajes',
        children:[
          {
            path: 'list',
            component: ViajeListComponent 
          },
          {
            path: ':id',
            component: ViajeDetailComponent
          }
          ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
