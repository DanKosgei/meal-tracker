System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, NewMealComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.onSubmitNewMeal = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addMeal = function (newName, newDetails, newCalories) {
                    this.onSubmitNewMeal.emit([newName.value, newDetails.value, newCalories.value]);
                    newName.value = "";
                    newDetails.value = "";
                    newCalories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        outputs: ['onSubmitNewMeal'],
                        template: "\n    <div class=\"meal-form\">\n      <h3>New Meal</h3>\n      <input placeholder=\"Name\" class=\"form-input\" #newName/>\n      <input placeholder=\"Calories\" class=\"form-input\" type=\"number\" #newCalories/>\n      <input placeholder=\"Details\" class=\"form-input-details\" #newDetails/>\n      <button (click)=\"addMeal(newName, newDetails, newCalories)\" class=\"add-button\">Add Meal</button>\n    </div>\n  "
                    }),
                    __metadata("design:paramtypes", [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    };
});
//# sourceMappingURL=new-meal.component.js.map