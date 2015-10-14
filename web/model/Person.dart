class Person {
  /* Base Fields for a Person */
  int PersonId;
  String FirstName;
  String MiddleName;
  String LastName;
  String FamilyName;
  String Sex;
  String State;
  String Country;

  Person(Map Person) {
    this.PersonId = Person["Id"];
    this.FirstName = Person["FirstName"];
    this.MiddleName = Person["MiddleName"];
    this.LastName = Person["LastName"];
    this.FamilyName = Person["FamilyName"];
    this.Sex = Person["Sex"];
    this.State = Person["State"];
    this.Country = Person["Country"];
  }
}
