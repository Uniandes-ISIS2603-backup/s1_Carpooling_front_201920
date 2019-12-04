import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

/**
 * The app component. This component is the base of s1_carpooling-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s1_carpooling-Front";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

}





