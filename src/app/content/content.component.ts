import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  foodData: { name: string; image: string; ingredients: string; recipe: string; origin: string; category: string; }[];
  randomFoodItems: { name: string; image: string; ingredients: string; recipe: string; origin: string; category: string; }[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFoodData().subscribe(data => {
      this.foodData = data.foodArray;
      this.getRandomFoodItems();
    });
  }

  getRandomFoodItems(): void {
    const randomIndexes = this.getRandomIndexes(this.foodData.length, 4);
    this.randomFoodItems = randomIndexes.map(index => this.foodData[index]);
  }

  getRandomIndexes(max: number, count: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
}
