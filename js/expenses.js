// Sum
const p_sum = document.querySelector("#sumTotal");
// Sum total array
let sum_total = [];


// Fuel
const fuel_quantity_input = document.querySelector("#fuel-quantity");
const fuel_price_input = document.querySelector("#fuel-price");
const total_fuel_input = document.querySelector("#fuel-total");

const fuel_inputs = [fuel_quantity_input, fuel_price_input];

function fuel_total() {
    fuel_inputs.forEach(input => {
        input.addEventListener('input', () => {
            total_fuel_input.value = parseFloat(fuel_quantity_input.value) * parseFloat(fuel_price_input.value);
            p_sum.innerText = update_sum();
        });
    });
    return parseFloat(total_fuel_input.value);
}

total_fuel_input.addEventListener('change', () => {
    console.log("Value changed!")
})

// Ice
const ice_quantity_input = document.querySelector("#ice-quantity");
const ice_price_input = document.querySelector("#ice-price");
const total_ice_input = document.querySelector("#ice-total");

const ice_inputs = [ice_quantity_input, ice_price_input];

function ice_total() {
    ice_inputs.forEach(input => {
        input.addEventListener('input', () => {
            total_ice_input.value = parseFloat(ice_quantity_input.value) * parseFloat(ice_price_input.value);
            p_sum.innerText = update_sum();
        });
    });
    return parseFloat(total_ice_input.value);
}

// Food

const food_total_input = document.querySelector("#food-total");
const supplies_total_input = document.querySelector("#supplies-total");
const other_total_input = document.querySelector("#remarks-total");

// array containing inputs of food, supplies and other
const arr = [food_total_input, supplies_total_input, other_total_input]

arr.forEach(input => {
    input.addEventListener('input', () => {
        p_sum.innerText = update_sum();

    })
})


function update_sum() {
    let total_sum_arr = 0;
    const inputs_with_total = [total_fuel_input.value, total_ice_input.value, food_total_input.value, supplies_total_input.value, other_total_input.value]
    inputs_with_total.forEach(input => {
        if (input == "") {
            input = 0;
        }
        else {
            total_sum_arr = parseFloat(input) + total_sum_arr;
        }
    })

    return total_sum_arr;
}




fuel_total();
ice_total();




