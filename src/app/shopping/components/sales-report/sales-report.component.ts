import { CategoryPostService } from './../../../shared/services/category-post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit  {
  categories$;
  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService) { 
    this.getCategories();
  } 

  getCategories() {
    this.categorypostservice.getAll().subscribe(data => this.categories$ = data);
  }

     ngOnInit() {
    }
}