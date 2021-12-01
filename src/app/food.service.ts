import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiServerUrl}/food`);
  }

  public addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(`${this.apiServerUrl}/food/add`, food);
  }

  public updateFood(food: Food): Observable<Food> {
    return this.http.put<Food>(`${this.apiServerUrl}/food/update`, food);
  }

  public deleteFood(foodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/food/delete/${foodId}`);
  }
}
