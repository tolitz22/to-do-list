import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  animations:[
    trigger('fade',[

      state('init', style({backgroundColor:'white',opacity:0})),

      state('in',style({
        backgroundColor:'yellow',
        opacity:1
      })),

      transition('init=>in',animate(1000)),
      transition('in=>init', animate(1000))

      // transition('void=> *',[
      //     style({backgroundColor:'white',opacity:0}),
      //     animate(2000)
      //   ]),

      ]),

  ]
})
export class ToDoListComponent implements OnInit {
	@Input() item;
	
	@Output() delItem = new EventEmitter<string>();
	@Output() doneItem = new EventEmitter<string>();
  
  isInit = false;
  constructor() { }

  toggle() {
    
    // this.isInit = !this.isInit;
    // console.log(this.isInit)  

    this.isInit = true;
    setTimeout(() => {
      this.isInit = false;
    }, 1)  
  }



  ngOnInit(): void {
    this.isInit = false;
    setTimeout(()=>{
    this.isInit = true;
    },1)
  }

  


  del = (id)=>{
	  console.log(id);
	  this.toggle();
    setTimeout(()=>{
    this.delItem.emit(id);  
    },1000)
    

  }

  done =(item)=>{
    this.toggle();
    setTimeout(()=>{
    this.doneItem.emit(item);
    },1000)

  }


}
