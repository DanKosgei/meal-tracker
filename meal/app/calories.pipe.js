System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, CaloriesPipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CaloriesPipe = (function () {
                function CaloriesPipe() {
                }
                CaloriesPipe.prototype.transform = function (input, args) {
                    if (args[0] === "over500") {
                        return input.filter(function (meal) {
                            return meal.calories > 500;
                        });
                    }
                    else if (args[0] === "under500") {
                        return input.filter(function (meal) {
                            return meal.calories <= 500;
                        });
                    }
                    else {
                        return input;
                    }
                };
                CaloriesPipe = __decorate([
                    core_1.Pipe({
                        name: "calories",
                        pure: false
                    })
                ], CaloriesPipe);
                return CaloriesPipe;
            }());
            exports_1("CaloriesPipe", CaloriesPipe);
        }
    };
});
//# sourceMappingURL=calories.pipe.js.map