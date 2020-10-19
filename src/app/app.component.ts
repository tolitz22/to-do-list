import { Component, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  toDoList = [];
  doneItem = [];	
  id = 0;	
  @ViewChild('addItem') addItem: ElementRef;
  add = (value)=>{
  	if(value!='')
  	{
			this.toDoList.push({ name: value, id: this.id });
			this.id++;	
      this.addItem.nativeElement.value = '';
  	}
  	  
  }	

  del =(id)=>{
	 

	  let rm = this.toDoList.filter((item) => {
		  return item.id !== id;
	  });

	  this.toDoList = rm;

  }

  done = (item) =>{



	this.del(item.id);
	this.doneItem.push(item)	

  }

}
