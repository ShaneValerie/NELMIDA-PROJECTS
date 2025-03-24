const StudentId =[
    { 
        Name: "Val",
        Idnnum: 111,
        Year: 2025, 
        Grade: 99,
    }, 
    {
        Name: "Shin",
        Idnnum: 112,
        Year: 2025, 
        Grade: 97,
    },
    { 
    Name: "Diego",
    Idnnum: 113,
    Year: 2025, 
    Grade: 95,
},
{ 
    Name: "Van",
    Idnnum: 114,
    Year: 2025, 
    Grade: 91,
},
{ 
    Name: "Lily",
    Idnnum: 115,
    Year: 2025, 
    Grade: 90,
},
{ 
    Name: "Shayla",
    Idnnum: 116,
    Year: 2025, 
    Grade: 92,
},

{ 
    Name: "Ali",
    Idnnum: 117,
    Year: 2025, 
    Grade: 90,
},

{ 
    Name: "Rin",
    Idnnum: 118,
    Year: 2025, 
    Grade: 93,
},

{ 
    Name: "Larry",
    Idnnum: 119,
    Year: 2025, 
    Grade: 94,
},

{ 
    Name: "Vangho",
    Idnnum: 120,
    Year: 2025, 
    Grade: 99,
},
];


function 
findHighestAndLowestGrades(students){
    let highest = students[0];
    let lowest = students[0];
    
    for(let student of students){
        if(student.Grade > highest.Grade){
            highest = student;
        }
        if(student.Grade < lowest.Grade){
            lowest = student;
        }
    }

    console.log(`Highest Grade: (${highest.Name})- ID: ${highest.Idnnum} - ${highest.Grade}`);
    console.log(`Lowest Grade: (${lowest.Name})- ID: ${lowest.Idnnum} - ${lowest.Grade}`);

}
findHighestAndLowestGrades(StudentId);

