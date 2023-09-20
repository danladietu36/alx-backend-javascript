interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const firstStudent: Student = {
    firstName: "Dan",
    lastName: "Etu",
    age: 32,
    location: "Abuja",
};

const secondStudent: Student = {
    firstName: "Omachonu",
    lastName: "Wada",
    age: 31,
    location: "Abuja",
};

const studentsList: Array<Student> = [firstStudent, secondStudent];

