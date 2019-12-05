import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ViajeDetailComponent } from '../viaje/viaje-detail/viaje-detail.component';
import { ViajeListComponent } from '../viaje/viaje-list/viaje-list.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ViajeroDetailComponent } from '../viajero/viajero-detail/viajero-detail.component';
import { ViajeroListComponent } from '../viajero/viajero-list/viajero-list.component';
import { NotificacionListComponent } from '../notificacion/notificacion-list/notificacion-list.component';
import { ReservaListComponent } from '../reserva/reserva-list/reserva-list.component';
import { ConductorDetailComponent } from '../conductor/conductor-detail/conductor-detail.component';
import { ConductorListaComponent } from '../conductor/conductor-lista/conductor-lista.component';
import { PublicistaDetailComponent } from '../publicista/publicista-detail/publicista-detail.component';
import { PublicistaListComponent } from '../publicista/publicista-list/publicista-list.component';
import { PublicidadListComponent } from '../publicidad/publicidad-list/publicidad-list.component';
import { PublicidadDetailComponent } from '../publicidad/publicidad-detail/publicidad-detail.component';
import { ReservaDetailComponent } from '../reserva/reserva-detail/reserva-detail.component';
import { ConductorAddViajeComponent } from '../conductor/conductor-add-viaje/conductor-add-viaje.component';
import { PrincipalComponent } from '../principal/principal.component'
import { ViajeAddTrayectoComponent } from '../viaje/viaje-add-trayecto/viaje-add-trayecto.component';

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
      component: ViajeroListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN']
        }
      }
    },
    {
      path: ':id',
      component: ViajeroDetailComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'VIAJERO']
        }
      }
    }
    ]
  },
  {
    path: 'publicistas',
    children: [{
      path: 'list',
      component: PublicistaListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN']
        }
      }
    },
    {
      path: ':id',
      component: PublicistaDetailComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'PUBLICISTA']
        }
      }
    }
    ]
  },
  {
    path: 'publicidades',
    children: [{
      path: 'list',
      component: PublicidadListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN']
        }
      }
    },
    {
      path: ':id',
      component: PublicidadDetailComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'PUBLICISTA']
        }
      }
    }
    ]
  },
  {
    path: 'conductores',
    children: [{
      path: 'list',
      component: ConductorListaComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN']
        }
      }
    },
    {
      path: ':id',
      component: ConductorDetailComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'CONDUCTOR']
        }
      }
    }
    ]
  },
  {
    path: 'notificaciones',
    children: [{
      path: 'list',
      component: NotificacionListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'CONDUCTOR', 'VIAJERO', 'PUBLICISTA']
        }
      }
    }
    ]
  },
  {
    path: 'reservas',
    children: [{
      path: 'list',
      component: ReservaListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'VIAJERO']
        }
      }
    },
    {
      path: ':id',
      component: ReservaDetailComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'VIAJERO', 'CONDUCTOR']
        }
      }
    }
    ]
  },
  {
    path: 'viajes',
    children: [
      {
        path: 'list',
        component: ViajeListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ADMIN', 'GUEST', 'VIAJERO']
          }
        }
      },
      {
        path: ':id',
        component: ViajeDetailComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ADMIN', 'GUEST', 'VIAJERO', 'CONDUCTOR']
          }
        }
      },
      {
        path: 'add/:idConductor',
        component: ConductorAddViajeComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ADMIN', 'CONDUCTOR']
          }
        }
      }
    ]
  },
  {
    path: 'trayectos',
    children: [{
      path: 'add/:idViaje',
      component: ViajeAddTrayectoComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ADMIN', 'CONDUCTOR']
        }
      }
    }
    ]
  },
  {
    path: 'home',
    component: PrincipalComponent
  }
  ,
  {
    path: '**',
    redirectTo: 'home'
  }



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
