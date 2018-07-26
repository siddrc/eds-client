import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MembersService } from '../../services/members.service'
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'members-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class StudentsListComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  resultsLength = 0;
  isLoadingResults = true;
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private membersService: MembersService) {}
  ngOnInit() {
    this.isLoadingResults = true;
    this.membersService.getStudentsDetails().subscribe((data: any) => {
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
