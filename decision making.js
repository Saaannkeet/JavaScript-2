// que1::  Write a program to make a simple calculator using 
// switch statement that takes operator and two numbers 
// from user and print the result after operation.


const Calculator = (A, B, C) => {

    switch (A) {

        case "+":
            return B + C;

        case "-":
            return B - C;

        case "*":
            return B * C;

        case "/":
            return B / C;

        default:
            return 'return result';
    }
};

// que2:: Check whether the condition is fulfilled or not?
// Write a program that takes a number and prints whether
//  the number is divisible by 6 and 9 or not.


const Check_divisibility = (N) => {

    if (N % 6 === 0 && N % 9 === 0) {
        return ("Divisible by both")
    }
    else {
        return ("Not Divisible by both")
    }
};

//   que3::  You are given an integer  A, denoting the age of a person, 
//     and your task is to determine whether he/she is eligible 
//     to vote or not.


const isEligible = (a) => {

    if (a > 18) {
        return ("Eligible for Voting")
    }
    else {
        return ("Not Eligible for Voting")
    }
};
  
// que4::  PrepBuddy wants you to get familiar with various Relational operators.
//    He provides you with two integer values XandY
// and asks you to find the relation between them.
// The relationships between integersXandY
// are as follows:
// If X<Y, it means that X is smaller than Y.
// If X > Y, it means that X is greater than Y.
// If X = Y, it means that X is equal to Y.


const findRelation = (x,y) => {
    
    if(x<y){
      return x+ "is smaller than"+y
    }
    else if (x>y){
      return x+ "is greater than"+y
    }
    else{
      return x+"is equal to"+y
    }
    
    
  };
  
//  que5:: Your school has the following grading system based upon the 
//   marks(M) obtained by a student:
//    If M≤10, the grade will be E.
//    If 11≥M≤20, the grade will be D.
//    If 21≥M≥30, the grade will be C.
//    If 31≥M≤40, the grade will be B.
//    If 41≥M≤50, the grade will be A.
//    Your friend will enter his marks out of 50, and your task is 
//    to print his grades using a switch statement.

const findGrades = (a) => {
    
    if(a>=41&&a<=50){
      return "A";
    }
    else if(a>=31&&a<=40){
      return "B";
    }
    else if(a>=21&&a<=30){
      return "C";
    }
    else if(a>=11&&a<=20){
      return "D";
    }
    else if(a<=11){
      return "E";
    }  
};

// que6::  You are provided with a table containing some characters and their
//  corresponding values. Your task will be to find the value from the 
//  table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|


const getValue = (a) => {
    
    switch (true){
      
      case(C==="p" || C==="P")
       return("PrepBytes");
    
       
      case(C==="z" || C==="Z")
       return("Zenith ");
    
       
      case(C==="e" || C==="E")
       return("Expert Coder ");
    
       
      case(C==="d" || C==="D")
       return("Data Structure ");
    
       default:
       return ("Invalid");    
    }  
    };
    
    
//   que7::  Find the maximum out of three numbers.Take three numbers and print
//      the largest number among them if all of three are same print −1.


const Max_out_of_three = (A,B,C) => {
    

    if (A>B && A>C){
      return (A);
    }
    
    
    else if (B>A && B>C){
      return (B);
    }
    
    if (C>A && C>B){
      return (C);
    }
    
    else {
      return (-1);
    }
    
    
    
    
    };
    
//  que8::You are given 3distinct integers X,Y,and Z,and your task is to 
// find and return the second smallest integer among the three provided 
// integers.    


const findSndSmallest = (x,y,z) => {
  
    if((x<y&& y<z)||(z<y&&y<x)){
       
       return (y)
     }
       
    else if((y<x&& x<z)||(z<x&&x<y)){
       
       return (x)
     }
   else{
     return(z);
   }    
     
 };
 
// que9::Write a program takes takes three angles and checks 
// whether the triangle is acute or obtuse. 


const Triangle_Check = (A,B,C) => {
    
    if(A<120 && B<120&& C<120){
      return "acute";
    }
     else{
       return "obtuse";
     }
     
     
 };
 
 









