import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {apiData} from 'src/app/models/apiResponse';
import {ApiResponseService} from '../api-response.service';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css']
})
export class ApiComponentComponent implements OnInit {
  allData: apiData[]=[];
  displayedColumns : string[]=['userId','id','title','body'];
  dataSource = new MatTableDataSource<apiData>(this.allData);
  public errorMsg: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private service: ApiResponseService) { }

  ngOnInit(){
    this.getAllData();
  }

  public getAllData(){
    this.service.fakeApiResponse().subscribe(row=>this.dataSource.data=row as apiData[], error=>this.errorMsg=error);
  }

}
