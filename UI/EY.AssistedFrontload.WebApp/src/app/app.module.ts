import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import{Routes, RouterModule} from '@angular/router';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import{AngularFontAwesomeModule} from 'angular-font-awesome';
import{ Ng2TableModule,NgTableComponent, NgTableFilteringDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DataTableModule, SharedModule } from 'primeng/primeng'; 
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';                 //api
import {ButtonModule} from 'primeng/primeng';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';
import{SortService} from './sortable-column/sort.service';
import {SortableTableDirective} from './sortable-table-directive/sortable-table.directive';
import {FilterPipe} from './filter.pipe'
import {Homeservice} from './home/home.service'
import { GetHeaders } from './home/getheader.service';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'Engagement', component:EngagementsComponent},
   {path:'Assignee', component:AssigneeComponent},
   
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    EngagementsComponent,
    AssigneeComponent,
    SortableColumnComponent, 
    SortableTableDirective,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    SharedModule,   
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule, 
    AngularFontAwesomeModule,
    PdfViewerModule,
    Ng2TableModule,  
    HttpModule  ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SortService,Homeservice,GetHeaders],
  bootstrap: [AppComponent]
})
export class AppModule { }
