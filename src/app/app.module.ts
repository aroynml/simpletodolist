import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: TodoListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    //TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    
    NgClass,

    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent,TodoComponent]
})
export class AppModule { }
