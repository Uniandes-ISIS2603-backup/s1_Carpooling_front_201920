import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {PublicistaService} from '../publicista.service';
import {PublicidadService} from '../../publicidad/publicidad.service';

import {BookDetail} from '../book-detail';
import {Author} from '../../author/author';
import {Editorial} from '../../editorial/editorial';

@Component({
  selector: 'app-publicista-add-publicidad',
  templateUrl: './publicista-add-publicidad.component.html',
  styleUrls: ['./publicista-add-publicidad.component.css']
})
export class PublicistaAddPublicidadComponent implements OnInit {

  constructor(        private dp: DatePipe,
    private publicistaService: PublicistaService,
    private publicidadService: PublicidadService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
