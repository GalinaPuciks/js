// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
//   }


const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode = listNode.querySelectorAll("name");
const firstName = listNode.querySelectorAll("first");
const secondName = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");

const nameAttr1 = nameNode[0].getAttribute('lang');
const nameAttr2 = nameNode[1].getAttribute('lang');


// const nameAttr1 = nameNode.find(element => {
//   element.attribute == lang;
// });

// console.log(nameAttr1);




 

const result = {
  list:[
    {
      name: firstName[0].textContent + " "+ secondName[0].textContent,
      age: ageNode[0].textContent,
      prof: profNode[0].textContent,
      lang: nameAttr1
  
},
{
    name: firstName[1].textContent + " "+ secondName[1].textContent,
    age: ageNode[1].textContent,
    prof: profNode[1].textContent, 
    lang: nameAttr2
}
  ]

 };
console.log("result", result);