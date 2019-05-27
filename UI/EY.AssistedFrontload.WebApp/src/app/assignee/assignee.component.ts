import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {Ng2TableModule, NgTableComponent,NgTableFilteringDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

// @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
 
// search(stringToSearch: string) {
//   this.pdfComponent.pdfFindController.executeCommand('find', {
//     caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
//   });
// }

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {
  
  
    pdfSrc :string="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
Extracts:any=[{
  name:'waiverOfRefund',
  id:1
},
{
  name:'Germany',
  id:2

}];
Documents:any=[
{
  name:'www.pdf.com',
  id:1,
  type:'doctype',
  status:'open',
  percentage:78

},
{
  name:'Document3',
  id:2,
  type:'doctype',
  status:'In Progress',
  percentage:10

},
{
  name:'www.pdf.com',
  id:3,
  type:'doctype',
  status:'open',
  percentage:20

},
{
  name:'Document4',
  id:4,
  type:'doctype',
  status:'In Progress',
  percentage:68

},
{
  name:'www.pdf.com',
  id:5,
  type:'doctype',
  status:'open',
  percentage:90

},
{
  name:'Document6',
  id:6,
  type:'doctype',
  status:'In Progress',
  percentage:45

},
{
  name:'Document6',
  id:7,
  type:'doctype',
  status:'In Progress',
  percentage:100


},
{
  name:'Document6',
  id:8,
  type:'doctype',
  status:'In Progress',
  percentage:45

},
{
  name:'Document6',
  id:9,
  type:'doctype',
  status:'In Progress',
  percentage:100


},
{
  name:'Document6',
  id:10,
  type:'doctype',
  status:'In Progress',
  percentage:45

},
{
  name:'Document6',
  id:11,
  type:'doctype',
  status:'In Progress',
  percentage:100


},
{
  name:'Document6',
  id:12,
  type:'doctype',
  status:'In Progress',
  percentage:45

},
{
  name:'Document6',
  id:13,
  type:'doctype',
  status:'In Progress',
  percentage:100


},
{
  name:'Document6',
  id:14,
  type:'doctype',
  status:'In Progress',
  percentage:45

},
{
  name:'Document6',
  id:15,
  type:'doctype',
  status:'In Progress',
  percentage:100


}
  
];
getCondition(x,percentage){
if(percentage<50){
  x.innerText='Critical'
  x.style.color='red'; 
}
else if(percentage>50 && percentage<75){
  x.innerText='Ok'
  x.style.color='orange'; 
}
else if(percentage>75){
  x.innerText='Good'
  x.style.color='green'; 
}
}
onSorted($event){
    this.getData($event);
  }
  getData(criteria: SortCriteria){
     this.Documents = this.getDatas(criteria);
  }

  getDatas(criteria: SortCriteria): any[] {
        return this.Documents.sort((a,b) => {
          if(criteria.sortDirection === 'desc'){
            return a[criteria.sortColumn] < b[criteria.sortColumn];
          }
          else {
            return a[criteria.sortColumn] > b[criteria.sortColumn];
          }
        });
    }
  constructor() { 
  
  }

  ngOnInit() {
    this.getData({sortColumn: 'name', sortDirection:'asc'});
    
  }
  SetStyles(percentage) {
    let styles;
      if(percentage < 50){
        styles={'color':'red'};  
      }
      else if(percentage >50 &&percentage < 75  ){
        styles={'color':'orange'}; 
      }
      else{
        styles={'color':'green'}; 
      }
     
   
    return styles;
  }

  onFileSelected() {
  let $img: any = document.querySelector('#file');
    
  if (typeof (FileReader) !== 'undefined') {
    let reader = new FileReader();
 
    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result;
      console.log(this.pdfSrc);
    };
 
    reader.readAsArrayBuffer($img.files[0]);
  }
}

}
export class SortCriteria {
  sortColumn: string;
  sortDirection: string;
}
