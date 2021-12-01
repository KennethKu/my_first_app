import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public foods: Food[] | undefined; 

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  public getFoods(): void {
    this.foodService.getFoods().subscribe(
      (response: Food[]) => {
        this.foods = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
