import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule} from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ViajeModule } from './viaje/viaje.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ReservaModule } from './reserva/reserva.module';
import { ViajeroModule } from './viajero/viajero.module';
import { ConductorModule} from './conductor/conductor.module';
import { NotificacionModule} from './notificacion/notificacion.module';




@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        ViajeModule,
        ViajeroModule,
        ReservaModule,
        ReactiveFormsModule,
        ConductorModule,
        NotificacionModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
