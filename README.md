# ES6-Tutorial
A tutorial to learn the new features introduced in the ECMAScript 2015. This tutorial has been divided into different parts, each of which is represented by the different branches of this repository.

## Stages of the Tutorial

  [Stage 1: var, let and const](#stage-1-var-let-and-const)
  [Stage 2: Arrow Functions](#stage-2-arrow-functions)
  [Stage 3: Modules](#stage-3-modules)
  [Stage 4: Spread and Rest Operators](#stage-4-spread-and-rest-operators)
  [Stage 5: Classes](#stage-5-classes)
  [Stage 6: Number Functions](#stage-6-number-functions)
  
  
## Stage 1: var, let and const
This is the starting point of the calculator app we're going to make through out this tutorial. This gives a brief introduction to the let and const keywords introduced in ES6 for declaring variables.jjj

## Stage 2: Arrow Functions
Files from stage 1 contains basic mathematical functions like add, substract etc., but these are written using the ES5 function syntax. In this stage we'll use the ES6 arrow functions to write these methods in a better, modern and more effective way.

## Stage 3: Modules
ES6 introduced to JavaScript the concept of Modules, which makes it super easy to export and import functionalities between the applications, helping in building more modular applications. In this stage, we'll make our calculator app more modular, by converting the making a calculator module and an app.js file wich imports and uses its functionality.

## Stage 4: Spread and Rest Operators
ES6 provides a very efficient and effective way to work with arrays. 

  The Spread Operator helps to spread an arrays elements
  
      let nums = [1, 2, 3, 4, 5];
      
      // creating a new array using the spread operator to populate values
      let newNums = [...nums, 6];
      
      // using the spread operator
      console.log(...newNums);      // 1 2 3 4 5 6
      
      // without using the spread operator
      console.log(newNums);         // [1, 2, 3, 4, 5]
      
  The Rest operator is similar in syntax to the Spread operator, but it works in the opposite way. It contracts the values received into  a new array object.
  
      // nums functions uses rest parameter and logs out the array object
      nums = (...nums) => console.log(nums);
      
      // call the nums function with values
      nums(1, 2, 3, 4, 5);          // [1, 2, 3, 4, 5]
      
