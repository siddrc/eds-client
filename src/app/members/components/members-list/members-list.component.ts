import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MembersService } from '../../services/members.service'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'members-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  resultsLength = 0;
  isLoadingResults = true;
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private membersService: MembersService) {}

  ngOnInit() {
    this.isLoadingResults = true;
    this.membersService.getStudents().subscribe((data: any) => {
      this.isLoadingResults = false;
      this.dataSource.data = data["response"]
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
interface StudentData {
  name: string
}
