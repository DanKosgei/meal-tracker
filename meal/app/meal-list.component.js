System.register(["angular2/core", "./meal.component", "./meal.model", "./edit-meal-details.component", "./new-meal.component", "./calories.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, meal_component_1, meal_model_1, edit_meal_details_component_1, new_meal_component_1, calories_pipe_1, MealListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (calories_pipe_1_1) {
                calories_pipe_1 = calories_pipe_1_1;
            }
        ],
        execute: function () {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterCalories = "all";
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealListComponent.prototype.createMeal = function (newMeal) {
                    console.log(newMeal[0], newMeal[1], newMeal[2], this.mealList.length);
                    this.mealList.push(new meal_model_1.Meal(newMeal[0], newMeal[1], parseInt(newMeal[2]), this.mealList.length));
                };
                MealListComponent.prototype.onCaloriesChange = function (filterOption) {
                    this.filterCalories = filterOption;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        outputs: ['onMealSelect'],
                        pipes: [calories_pipe_1.CaloriesPipe],
                        directives: [meal_component_1.MealComponent, edit_meal_details_component_1.EditMealDetailsComponent, new_meal_component_1.NewMealComponent],
                        template: "\n    <h3>Filter</h3>\n    <select (change)=\"onCaloriesChange($event.target.value)\" class=\"filter form-control form-calories-select\">\n      <option value=\"all\" selected=\"selected\">SHOW ALL MEALS</option>\n      <option value=\"under500\">SHOW MEALS < 500 CALORIES</option>\n      <option value=\"over500\">SHOW MEALS > 500 CALORIES</option>\n    </select>\n    <div class=\"meal-display\">\n      <meal-display *ngFor=\"#currentMeal of mealList | calories:filterCalories\"\n        (click)=\"mealClicked(currentMeal)\"\n        [class.selected]=\"currentMeal === selectedMeal\"\n        [meal]=\"currentMeal\">\n      </meal-display>\n    </div>\n    <div>\n      <edit-meal-details *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\"></edit-meal-details>\n    </div>\n    <div>\n      <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n    </div>\n  "
                    }),
                    __metadata("design:paramtypes", [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    };
});
//# sourceMappingURL=meal-list.component.js.map