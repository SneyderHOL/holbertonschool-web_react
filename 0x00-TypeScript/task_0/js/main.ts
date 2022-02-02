// Creating an interface for a student
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Jhon',
  lastName: 'Doe',
  age: 30,
  location: 'Los Angeles'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  location: 'California'
};

const studentList = [student1, student2];
const body = document.getElementsByTagName('body')[0];
const table = document.createElement('tr');
const tBody = document.createElement('tbody');

studentList.forEach((student) => {
  const tRow = document.createElement('tr');
  const nameData = document.createElement('td');
  const locationData = document.createElement('td');
  nameData.textContent = student.firstName;
  locationData.textContent = student.location;
  tRow.appendChild(nameData);
  tRow.appendChild(locationData);
  tBody.appendChild(tRow);
});

table.appendChild(tBody);
body.appendChild(table);
