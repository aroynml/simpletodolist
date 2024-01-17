import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  // @Input() todoInput;
  @Input() todoInput: Todo = {
    id: 0,
    title: '',
    description: '',
    priority: 0,
    isCompleted: false,
    isHighlight: false,
    date: undefined
  } ;

  completed: boolean = false;
  todo: Todo | any;

  constructor(public todoService: TodoService, private toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Item completed`, 'completed') : '';
  }

  deleteTodo(item: Todo) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(`Item ${item.id} Deleted!`, 'Deleted Successfuly');
  }

  selectHighlight() {
    this.todoInput.isHighlight = !this.todoInput.isHighlight;
    if (this.todoInput.isHighlight) {
      this.toasterService.success('Added to Highlight');
      this.todoService.highlighted.unshift(this.todoInput);
      localStorage.setItem("highlighted", JSON.stringify(this.todoService.highlighted));
    }
    else {
      this.toasterService.error('Removed from Highlight');
      let index = this.todoService.todoList.indexOf(this.todo);
      this.todoService.highlighted.splice(index, 1);
      localStorage.setItem("highlighted", JSON.stringify(this.todoService.highlighted));
    }
  } 

}
