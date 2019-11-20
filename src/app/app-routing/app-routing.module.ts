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
import { NotificacionListComponent} from '../notificacion/notificacion-list/notificacion-list.component';
import { ReservaListComponent } from '../reserva/reserva-list/reserva-list.component';
import { ConductorDetailComponent } from '../conductor/conductor-detail/conductor-detail.component';
import { ConductorListaComponent } from '../conductor/conductor-lista/conductor-lista.component';
import { PublicistaDetailComponent } from '../publicista/publicista-detail/publicista-detail.component';
import { PublicistaListComponent } from '../publicista/publicista-list/publicista-list.component';
import { ReservaDetailComponent } from '../reserva/reserva-detail/reserva-detail.component';

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
          path: ':id',
          component: ViajeroDetailComponent
        }
        ]
      },
      {
        path: 'publicistas',
        children: [{
          path: 'list',
          component: PublicistaListComponent
        },
        {
          path: ':id',
          component: PublicistaDetailComponent
        }
        ]
      },
      {
        path: 'conductores',
        children: [{
          path: 'list',
          component: ConductorListaComponent 
        },
        {
          path: ':id',
          component: ConductorDetailComponent
        }
        ]
      },
      {
        path: 'notificaciones',
        children: [{
          path: 'list',
          component: NotificacionListComponent
        }
        ]
      },
      {
        path: 'reservas',
        children: [{
          path: 'list',
          component: ReservaListComponent
        },
        {
          path: ':id',
          component: ReservaDetailComponent,

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
