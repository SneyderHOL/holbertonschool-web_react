import { Seq } from 'immutable';

export default function printBestStudents(studentGrades) {
  const seq = Seq(studentGrades);
  const filtered = seq.filter((student) => student.score > 70);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const jsObj = filtered.toJS();

  Object.keys(jsObj).map((key) => {
    jsObj[key].firstName = capitalizeFirstLetter(jsObj[key].firstName);
    jsObj[key].lastName = capitalizeFirstLetter(jsObj[key].lastName);
    return jsObj[key];
  });

  console.log(jsObj);
}
