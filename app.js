
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

// //Example function
// function findMexicanFood(){
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//     return results;
// }

// let mexicanFood = findMexicanFood();
// console.log('Mexican Foods: ', mexicanFood)



// //1. Create a function that will return all dishes with the cuisine type of "vegetarian"
// //Filter

// function definevegetarian(){

//     let results = dishes.filter(function(el){
//         if (el.cuisine === "Vegetarian"){
//             return true;
//         }
//         else{
//             return false;
//         }})


//     return results;
// }

// let vegetarianoption =definevegetarian();
// console.log('vegetarian options: ', vegetarianoption)


// //2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
// //Filter

// function italianserversize(){
//     let results = dishes.filter(function(el){
//         if (el.cuisine === "Italian"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//         let servingsize = dishes.filter(function(element){
//             if (element.cuisine >=5){
//                 return true;
//             }
//             else{
//                 return false;
//             }})

//         return results;
// }

// let italianfood = italianserversize();
// console.log('Italian food and servings: ', italianfood)
// //3. Create a function that will return only dishes whose serving id number matches their serving count.
// //Filter

// function servingidmatch(){
//     let results = dishes.filter(function(el){
//         if (el.id === el.servings){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let idchoices = servingidmatch();
// console.log ('Places that match servings and I.D. number: ', idchoices)

// //4. Create a function that will return only dishes whose serving count is even.
// //Filter
// function servingivencount(){
//     let results = dishes.filter(function(el){
                     
//         if (el.servings %2 == 0){
//             return true;
//         }
//         else{
//             return false;  
//         }})  

//     return results;
// }

// let evenserving = servingivencount();
// console.log('Even number of serving sizes: ',evenserving)

// //5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
// //Filter

// function arrayofingredients(){
//     let results = dishes.filter(function(el){
//         if (el.ingredients.includes = "tomato",'cheese'){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }
//  let choseningredient = arrayofingredients();
//  console.log ('These dishes have the chosen ingreidnets in them: ', choseningredient)



// //6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
// //Map

// function cuisinetypes(){
//     let cuisineresults = dishes.map(function(el){
//         return el.cuisine
//     });
//     return cuisineresults;
// }

// console.log('These are the types of cuisine: ',cuisinetypes())

// BONUS: (come back to this after finishing all)

//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
function cuisinetypes(){
    let cuisineresults = dishes.map(function(el){
        return el.cuisine
    });
    return cuisineresults;
}
function cuisinelist(){
    let cuisinesinglename = [...new Set(dishes.cuisine)];
}

console.log('These are the types of cuisine: ',(cuisinelist))


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 



//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter


//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

