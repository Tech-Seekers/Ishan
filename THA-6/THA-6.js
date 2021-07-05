/*  QUESTION 1 : Write a JavaScript program to list the properties of a JavaScript object. 
 Sample object: var student = { name : "David Rayy", sclass : 
"VI", rollno : 12 }; Sample Output: name,sclass,rollno*/


function vish(obj) 
 {
    return Object.vish(obj);
}
console.log(vish({name : "Ishan", class : "12", rollno : 22}));


/* QUESTION2. : Write a JavaScript program to delete the rollno property from the following object.
 Also print the object before or after deleting the property. 
 Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */


function vish(obj) 
 { 
   delete obj.rollno;
    return Object.vish(obj);
}
console.log(vish({name : "Ishan", sclass : "12", rollno : 22}));



/*QUESTION 3. Write a JavaScript program to get the length of a JavaScript object.
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };*/

function vish(obj) 
 {
    return Object.vish(obj).length;
}
console.log(vish({name : "Ishan", sclass : "12", rollno : 22}));



/* QUESTION 4. Write a JavaScript program to display the reading status
 (i.e. display book name, author name and reading status) of
 the following books. var library = [ { author: 'Bill Gates',
 title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs'
 , title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne 
  Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; */


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
{
    if (library[i].readingStatus) {
      console.log("READ" + library[i].title);
    } else
    {
     console.log("LEFT " + library[i].title);
    }
   }


/* QUESTION 5. Write a JavaScript program to get the volume of a Cylinder
 with four decimal places using object classes. Volume of a cylinder
 : V = πr2h where r is the radius and h is the height of the cylinder. 
 Try To Attempt : Difficult Level Increased */


function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);

console.log('volume =', cyl.Volume().toFixed(4));


 /*QUESTION 6. Write a JavaScript program to sort an array of JavaScript objects. 
Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates',
  libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', 
   libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson",
  libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", 
  libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object]
 { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]*/


function compare(a, b) 
{
    const name1 = a.title.toUpperCase();
    const name2 = b.title.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const student = [{
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254;
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264;
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245;
   }];

console.log(student.sort(compare));