const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// creating a schema
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  age: Number,
  school: schoolSchema
});

// creating a model
const School = mongoose.model("School", schoolSchema);
const Person = mongoose.model("Person", personSchema);

// const Person = mongoose.model("Person",{
//   id: Number,
//   name: String,
//   age: Number
// });

// creating a document
const school = new School({
  name: "St. Paul"
});

// school.save();

const person = new Person({
  name: "Mozhi",
  id: 2,
  age: 10,
  school: school
});

const person1 = new Person({
  id: 1,
  name: "Kani",
  age: 33
});

const person2 = new Person({
  id: 2,
  name: "Mozhi",
  age: 25
});

const person3 = new Person({
  id: 3,
  name: "Kani Mozhi",
  age: 33
});

// to save single document
// person.save();

// to save multiple documents
// Person.insertMany([person1, person2, person3], function(err) {
//   if (!err) {
//     console.log("Inserted successfully");
//   } else {
//     console.log("Insert failed");
//   }
// });

//quering people model to view documents
Person.find(function(err, people) {
  mongoose.connection.close();
  if (err) {
    console.log(err);
  } else {
    people.forEach(function(person) {
        console.log("Name: " + person.name + " Age: " + person.age);
    });
  }
});

// update a document after connection.close()
Person.updateOne({id:2},{age:24}, function(err){
if(err){
  console.log(err);
}else{
  console.log("Updated Successfully");
}
});

//quering people model to view documents after Connection.close()
Person.find(function(err, people) {
  // mongoose.connection.close();
  if (err) {
    console.log(err);
  } else {
    people.forEach(function(person) {
      console.log("Name: " + person.name + " Age: " + person.age);
    });
  }
});


// delete the documents from model

// Person.deleteOne({
//   name: "Kani"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Successfully");
//   }
// });


// Person.deleteMany({
//   name: "Kani"
// }, function(err) {
//   if (!err) {
//     console.log("Deleted successfully");
//   } else {
//     console.log("Failure");
//   }
// });
