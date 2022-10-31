var Student = function (rollNo, name, age) {
    // creating Student object
    var student = {};
    // parameters as keys to this object
    student.rollNo = rollNo
    student.name = name;
    student.age = age;
    // function to greet
    student.greeting = function () {
       return (
          'Hello I am ' + student.name +
          ' My roll no is ' + student.rollNo + 
          '. I am ' + student.age + ' years old. '
       );
    };
    return student;
 };
 var student1 = Student(1, 'Arpita', 21);
 console.log(student1.greeting());
 var student1 = Student(2, 'Somi', 21);
 console.log(student1.greeting());
 
 