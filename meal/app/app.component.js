System.register(["angular2/core", "./meal.model", "./meal-list.component"], function (exports_1, context_1) {
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
    var core_1, meal_model_1, meal_list_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [];
                    this.meals = [
                        new meal_model_1.Meal("Stir Fry", "Chicken stir fry with broccoli, carrots, bamboo shoots, and brown rice", 350, 0),
                        new meal_model_1.Meal("Pizza", "Pepperoni and cheese pizza", 550, 1),
                        new meal_model_1.Meal("Salad", "Spinach salad with pine nuts, scallions, carrots, avocado, and lemon juice", 300, 2),
                    ];
                }
                AppComponent.prototype.mealWasSelected = function (clickedMeal) {
                    console.log("parent", clickedMeal);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n    <div class=\"wrap\">\n      <div class=\"nav-header\">\n        <div class=\"nav-header-title\">\n          <h1 class=\"title\">meal tracker</h1>\n        </div>\n        <div class=\"nav-header-angular2\">\n          <div class=\"nav-header-angular2-logo\">\n            <img class=\"angular2-logo\" src=\"https://camo.githubusercontent.com/07cdd0c91fc537ecb88c95d77c7d9f3b7d171ad6/687474703a2f2f692e696d6775722e636f6d2f353058624d4e522e706e67\" alt=\"Angular2 Logo\">\n          </div>\n          <div class=\"nav-header-angular2-app\">\n            <h6 class=\"angular2-app\">APP</h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"meals-info\">\n        <meal-list\n          [mealList]=\"meals\"\n          (onMealSelect)=\"mealWasSelected($event)\">\n        </meal-list>\n      </div>\n\n    </div>\n  "
                    }),
                    __metadata("design:paramtypes", [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map