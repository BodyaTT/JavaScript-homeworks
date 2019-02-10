import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals = [
    {
      id: 1,
      name:"Dog"
    }, 
    {
      id: 2,
      name:"Pig"
    }, 
    { 
      id: 3,
      name:"Cat"
    }, 
    {
      id: 4,
      name:"Elephant"
    }, 
    {
      id: 5,
      name:"Wolf"
    }, 
    {
      id: 6,
      name:"Chicken"
    }, 
    { id: 7,
      name:"Fish"
    }
  ];

  showList : boolean = true;
  animalName : string;
  num : number;


  deleted(i : number){
      let index = i;
       if (index > -1){
         this.animals.splice(i, 1);
       }
  }

  addAnimal(){
    this.num = this.animals.length + 1;
    this.animals.push({id: this.num, name: this.animalName});
    this.animalName = '';

  }

  constructor() { }

  ngOnInit() {
  }

}
