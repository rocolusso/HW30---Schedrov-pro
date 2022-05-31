'use strict';
/*
Написать свою реализацию функции bind()
 */

void function () {
    const car = {make: 'Nissan', year: 3.7};

    function carData(make, year, engine) {
        console.log(`make: ${this.make} \nyear: ${+year} \nengine: ${+engine} `);
    }

    function bind(func, ctx) {
        return function (argggs) {
            const args = [].slice.call(arguments);
            return func.apply(ctx, args);
        };
    }

    bind(carData, car)('Nissan', 2020, 3.7);

}();


