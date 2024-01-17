import { ChangeDetectionStrategy, OnInit, Component, ChangeDetectorRef  } from '@angular/core';
//angular changed from @angular/core to @angular/animations.
import { trigger,animate,style,transition,keyframes } from '@angular/animations';
import { TodoService } from './services/todo.service';
import { Todo } from './models/Todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 
 
           transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])    
      
      ])
 
   ]
})
export class AppComponent {

  title = 'todo2-app';
  todoArray: string[] = [];

  item: string = "";
  priority: number = 3;
  todoForm: any;
  constructor(private changeDetection: ChangeDetectorRef, public todoService: TodoService) {}

  ngOnInit(): void {
  }

  addTodo(item: string, priority: string){
    if(item!==""){
      let prior = (parseInt(priority, 10)!==undefined) ? parseInt(priority, 10) : 3;
      this.todoService.addTodo(item, prior);
      this.item = '';
    }
    else{
      alert('Input required **')
    }
  }
  
  //
  refresh(){
    this.changeDetection.detectChanges();
  }
}
