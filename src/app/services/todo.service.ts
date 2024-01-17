import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  highlighted: Todo[] = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Task One',
      description: '',
      priority: 5,
      isCompleted: false,
      isHighlight: false,
      date: new Date('2023-10-10')
    },
    {
      id: 2,
      title: 'Task Two',
      description: '',
      priority: 4,
      isCompleted: false,
      isHighlight: false,
      date: new Date('2023-11-11')
    },
    {
      id: 3,
      title: 'Task Three',
      description: '',
      priority: 3,
      isCompleted: false,
      isHighlight: false,
      date: new Date('2023-12-12')
    }
    ,
    {
      id: 4,
      title: 'Task Four',
      description: '',
      priority: 5,
      isCompleted: false,
      isHighlight: false,
      date: new Date('2024-01-12')
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item:Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.deletePopup.success(`Event ${item.id} Removed`);
  }

  addTodo(title:string, priority:number=3, description:string = '') {
    let id = 1 + Math.max.apply(null,
      this.todoList.map(function (t) { return t.id; })
      );

    const item: Todo = {
      id: id,
      isCompleted: false,
      isHighlight: false,
      priority: priority,
      date: new Date(),
      description: description,
      title: title
    }
    this.todoList.unshift(item);
    this.todoList.sort((a,b)=> a.priority-b.priority);
    console.log(this.todoList);
    
  }
  
  /*
  getHighlight(){
    this.highlighted = JSON.parse(localStorage.getItem('highlighted'));
  }
  */
}
