import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['ADMIN','VIAJERO', 'CONDUCTOR', 'PUBLICISTA']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            ;
        } else if(role == 'VIAJERO'){
            this.roleService;
        }
        else if(role == 'CONDUCTOR'){
           this.setConductorRole ;
        }
        else if(role == 'PUBLICISTA'){
           this.setPublicistaRole ;
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setViajeroRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VIAJERO', []);
        localStorage.setItem('role', 'VIAJERO');
    }

    setConductorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CONDUCTOR', []);
        localStorage.setItem('role', 'CONDUCTOR');
    }

    setPublicistaRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('PUBLICISTA', []);
        localStorage.setItem('role', 'PUBLICISTA');
    }

    setAdministradorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', []);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role:string): void {
        if (role == "Viajero") {
            this.setViajeroRole()
        } 
        else if( role == "Conductor") {
            this.setConductorRole()
        }
        else if( role == "Publicista") {
            this.setPublicistaRole()
        }
        else if( role == "Administrador") {
            this.setAdministradorRole()
        }
        this.router.navigateByUrl('/');
    }

    setId (id:number): void {
        localStorage.setItem('id', id+"");
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        this.router.navigateByUrl('/');
    }
}
