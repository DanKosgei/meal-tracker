System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, MealComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MealComponent = (function () {
                function MealComponent() {
                }
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        inputs: ['meal'],
                        template: "\n    <div class=\"meal\">\n      <div class=\"meal-header\">\n        <h4 class=\"meal-header-name\">{{ meal.name }}</h4>\n      </div>\n      <h5 class=\"meal-details\">Calories: <span class=\"h5-display\">{{ meal.calories }}</span></h5>\n      <h5 class=\"meal-details\">Description:</h5>\n      <h5 class=\"h5-display\">{{ meal.details }}</h5>\n    </div>\n  "
                    })
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    };
});
//# sourceMappingURL=meal.component.js.map