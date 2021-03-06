import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import {  EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { MainComponent } from './main.component';
import { CaloriesPipeComponent } from './calories.pipe.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealDetailsComponent,
    NewMealComponent,
    MainComponent,
    CaloriesPipeComponent,

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
