import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as $ from "jquery";
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { FieldsService } from '../fields.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcelService } from '../excel.service';
//import { DataTablesModule } from 'angular-datatables';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularMaterialModule } from '../angular-material.module';
import swal from 'sweetalert';
import * as XLSX from 'xlsx';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private FieldsList: FieldsService, private router: Router, private excelService: ExcelService
    , private http: HttpClient, private modalService: BsModalService, private bnIdle: BnNgIdleService) { }

    keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
     ,
     {
       id: 3,
       name: 'India'
     }
     ,
     {
       id: 4,
       name: 'Nepal'
     }
     ,
     {
       id: 5,
       name: 'Australia'
     }
     ,
     {
       id: 6,
       name: 'Srilanka'
     }
     ,
     {
       id: 7,
       name: 'South Africa'
     }
  ];
 
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
  ngOnInit(): void {
  }

}


