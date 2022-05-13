// ----------- Chapter 14-16 Arrays ----------

// 1. Declare an empty array using JS literal notation to store student names in future. 

// var students=[];

// // 2. Declare an empty array using JS object notation to store student names in future. 

// var students = new Array();


// // 3. Declare and initialize a strings array.
// var colors = ["Yellow", "Orange", "Red", "Purple", "Blue"];
// document.write("String Array: " + colors + "<br/>" + "<br/>" + "<br/>");

// // 4.  Declare and initialize a numbers array. 
// var marks = [203, 212, 288, 233, 264];
// document.write("Number Array: " + marks + "<br/>" + "<br/>" + "<br/>");

// // 5.  Declare and initialize a boolean array. 
// var bool = [true, false, false, true];
// document.write("Boolean Array: " + bool + "<br/>" + "<br/>" + "<br/>");

// // 6. Declare and initialize a mixed array. 
// var data = ["Tayyaba", "Ali", 23, true];
// document.write("Mixed Array: " + data + "<br/>" + "<br/>" + "<br/>");

// // 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
// var count = 0;
// var i = 0;

// document.write("Qualification" + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 

// var students=['Tayyaba','Umra','Hafsa'];
// var score=[450,400,350];
// var total=500;
// percentage1=(score[0]/total)*100;
// percentage2=(score[1]/total)*100;
// percentage3=(score[2]/total)*100;
// document.write('Score of  '+students[0]+' is  '+score[0]+' . Percentage: '+percentage1+' % '+'<br>')
// document.write('Score of  '+students[1]+' is  '+score[1]+' . Percentage: '+percentage2+' % '+'<br>')
// document.write('Score of  '+students[2]+' is  '+score[2]+' . Percentage: '+percentage3+' % '+'<br>')


// 9. Initialize an array with color names. Display the array elements in your browser.

// var colors = [];


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.

// var userColor=prompt('Enter your desire color to be added in the beginning of the array');
// colors.unshift(userColor);

// document.write('Updated array :'+colors+'<br>')

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 

// var userColorend=prompt('Enter your desire color to be added at the end  of the array');
// colors.push(userColorend);
// document.write('Updated array :'+userColorend+'<br>')

// c. Add two more color to the beginning of the array. 

// var addColor1=prompt('Add first color to the beginning of the array');
// var addColor2=prompt('Add second color to the beginning of the array');
// colors.unshift(addColor1,addColor2)
// document.write("Updated array: " + colors + "<br/>");

// d. Delete the first color in the array. 

// colors.shift();
// document.write('Updated array :'+ colors+'<br>')

// e. Delete the last color in the array

// colors.pop();
// document.write('Updated array :'+ colors+'<br>')

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.

// var index=+prompt('At which index no you want to add color');
// var colorName=prompt('And which color ?');
// colors.splice(index,0,colorName);
// document.write('Updated array :'+ colors+'<br>')

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete

// index=+prompt(' At which index you want to delete color' );
// var deleteCount=+prompt('How many colors do you want to delete?');
// colors.splice(index,deleteCount);
// document.write('Updated array :'+ colors+'<br>')

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// var score=[122,102,110,140];
// document.write('Scores of Students : '+score+'<br>');   
// document.write('Ordered Scores of Students : '+score.sort()+'<br>');

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// var citynames=['Karachi','Lahore','Multan','Isl','Quetta'];
// document.write('Cities List :'+citynames+'<br>'+'<br>')
// var selectedCities=citynames.slice(2,5);
// document.write('Selectedcities List :'+selectedCities+'<br>')

// 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

// var array=['This','is','my','cat'];
// document.write('Array : '+'<br>'+array+'<br>');
// var string=array.join(' ');
// document.write('String : '+'<br>'+string);


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// var out;
// document.write('Devices :' +devices+ '<br>');
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')



// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in  browser using document.write() method: 

// var phoneMenu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// var index = 0;
// document.write('<select>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<select>')


// ----------- End of Chapter 14-16 ----------