import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Homeservice} from './home.service'
import {Ng2TableModule, NgTableComponent,NgTableFilteringDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

// import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
// import {MenuItem} from 'primeng/primeng';                 //api
// import {ButtonModule} from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tasks:any=[
  {
    Date:'01-01-2018',
    engagement:'XDC Return',
    assignee:'DEC',
    AssigneeID:'10',
    HomeCountry:'India',
    HostCountry:'Germany',
    Task:'Correction',
    Complexity:'Simple',
    Priority:'1',
    Status:'Inprogress'
  },
  {
    Date:'01-01-2017',
    engagement:'XBC Return',
    assignee:' ABC',
    AssigneeID:'2',
    HomeCountry:'India',
    HostCountry:'Germany',
    Task:'Correction',
    Complexity:'Simple',
    Priority:'1',
    Status:'Inprogress'
  },
  {
    Date:'01-01-2018',
    engagement:'XDC Return',
    assignee:'CEC',
    AssigneeID:'1',
    HomeCountry:'India',
    HostCountry:'Germany',
    Task:'Correction',
    Complexity:'Simple',
    Priority:'1',
    Status:'Inprogress'
  },
  ];

  // public columns:Array<any> = [
  //   {title: 'Date', name: 'date', filtering: {filterString: '', placeholder: 'Filter by Date'}},
  //   {
  //     title: 'EngagementName',
  //     name: 'engagementName',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by name'}
  //   },
  //   {
  //     title: 'Assignee',
  //     name: 'assignee',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Assignee'}
  //   },
  //   {
  //     title: 'AssigneeID',
  //     name: 'id',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Assignee ID'}
  //   },
  //   {
  //     title: 'HomeCountry',
  //     name: 'homeCountry',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Home Country'}
  //   },
  //   {
  //     title: 'HostCountry',
  //     name: 'hostCountry',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Host Country'}
  //   },
  //    {
  //     title: 'Task',
  //     name: 'task',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Task'}
  //   },
  //    {
  //     title: 'Complexity',
  //     name: 'complexity',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Complexity'}
  //   }, {
  //     title: 'Priority',
  //     name: 'priority',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Priority'}
  //   }, {
  //     title: 'Status',
  //     name: 'status',
  //     sort: '',
  //     filtering: {filterString: '', placeholder: 'Filter by Status'}
  //   }

    
  // ];
  // public rows:Array<any> = [];
  // public length:number = 0;
  //  public page:number = 1;
  // public itemsPerPage:number = 10;
  // public maxSize:number = 5;
  // public numPages:number = 1;
  // public config:any = {
  //   paging: true,
  //   sorting: {columns: this.columns},
  //   filtering: {filterString: ''},
  //   className: ['table-striped','bordered']
  // };

  // private data:Array<any> = [{
  //   'date':'01-01-2018',
  //   'engagementName':'Tax Return',
  //   'assignee':' ABC',
  //   'id':'1',
  //   'homeCountry':'India',
  //   'hostCountry':'Germany',
  //   'task':'Correction',
  //   'complexity':'Simple',
  //   'priority':'1',
  //   'status':'Inprogress'
  // },
  // {
  //   'date':'01-01-2018',
  //   'engagementName':'Tax Return',
  //   'assignee':' ABC',
  //   'id':'1',
  //   'homeCountry':'India',
  //   'hostCountry':'Germany',
  //   'task':'Correction',
  //   'complexity':'Simple',
  //   'priority':'1',
  //   'status':'Inprogress'
  // }
  // ];

  constructor(private homeservice:Homeservice) { 
    //this.length = this.data.length;
  }
  // onSorted($event){
  //   this.getData($event);
  // }
  // getData(criteria: SortCriteria){
  //    this.tasks = this.getDatas(criteria);
  // }

  // getDatas(criteria: SortCriteria): any[] {
  //       return this.tasks.sort((a,b) => {
  //         if(criteria.sortDirection === 'desc'){
  //           return a[criteria.sortColumn] < b[criteria.sortColumn];
  //         }
  //         else {
  //           return a[criteria.sortColumn] > b[criteria.sortColumn];
  //         }
  //       });
  //   }
  

 public  ngOnInit():void {
  //  this.getData({sortColumn: 'assignee', sortDirection:'asc'});
   this.homeservice.getAssigneeList()
   .subscribe((respose)=>console.log(respose),
  (error)=>console.log(error));
   //this.onChangeTable(this.config);
  }

  // public changePage(page:any, data:Array<any> = this.data):Array<any> {
  //   let start = (page.page - 1) * page.itemsPerPage;
  //   let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  //   return data.slice(start, end);
  // }

  // public changeSort(data:any, config:any):any {
  //   if (!config.sorting) {
  //     return data;
  //   }

  //   let columns = this.config.sorting.columns || [];
  //   let columnName:string = void 0;
  //   let sort:string = void 0;

  //   for (let i = 0; i < columns.length; i++) {
  //     if (columns[i].sort !== '' && columns[i].sort !== false) {
  //       columnName = columns[i].name;
  //       sort = columns[i].sort;
  //     }
  //   }

  //   if (!columnName) {
  //     return data;
  //   }

  //   // simple sorting
  //   return data.sort((previous:any, current:any) => {
  //     if (previous[columnName] > current[columnName]) {
  //       return sort === 'desc' ? -1 : 1;
  //     } else if (previous[columnName] < current[columnName]) {
  //       return sort === 'asc' ? -1 : 1;
  //     }
  //     return 0;
  //   });
  // }

  // public changeFilter(data:any, config:any):any {
  //   let filteredData:Array<any> = data;
  //   this.columns.forEach((column:any) => {
  //     if (column.filtering) {
  //       filteredData = filteredData.filter((item:any) => {
  //         return item[column.name].match(column.filtering.filterString);
  //       });
  //     }
  //   });

  //   if (!config.filtering) {
  //     return filteredData;
  //   }

  //   if (config.filtering.columnName) {
  //     return filteredData.filter((item:any) =>
  //       item[config.filtering.columnName].match(this.config.filtering.filterString));
  //   }

  //   let tempArray:Array<any> = [];
  //   filteredData.forEach((item:any) => {
  //     let flag = false;
  //     this.columns.forEach((column:any) => {
  //       if (item[column.name].toString().match(this.config.filtering.filterString)) {
  //         flag = true;
  //       }
  //     });
  //     if (flag) {
  //       tempArray.push(item);
  //     }
  //   });
  //   filteredData = tempArray;

  //   return filteredData;
  // }

  // public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
  //   if (config.filtering) {
  //     Object.assign(this.config.filtering, config.filtering);
  //   }

  //   if (config.sorting) {
  //     Object.assign(this.config.sorting, config.sorting);
  //   }

  //   let filteredData = this.changeFilter(this.data, this.config);
  //   let sortedData = this.changeSort(filteredData, this.config);
  //   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  //   this.length = sortedData.length;
  // }

  // public onCellClick(data: any): any {
  //   console.log(data);
  // }
}
// export class SortCriteria {
//   sortColumn: string;
//   sortDirection: string;
// }