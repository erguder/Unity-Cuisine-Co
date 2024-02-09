import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FoodData {
  foodArray: {
    name: string;
    image: string;
    ingredients: string;
    recipe: string;
    origin: string;
    category: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getFoodData(): Observable<FoodData> {
    return this.http.get<FoodData>('assets/recipes.json');
  }
}
