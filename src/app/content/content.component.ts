import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  foodData: { name: string; image: string; ingredients: string; recipe: string; origin: string; category: string; }[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getFoodData().subscribe(data => {
      this.foodData = data.foodArray;
    });
  }
}
