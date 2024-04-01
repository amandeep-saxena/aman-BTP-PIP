namespace radmiDB;

entity User {
    key id       : Integer;
        name     : String;
        email    : String;
        password : String;
}


entity Company {
  key id : Integer;
      name     : String;
      hr_Number : Int64;
      location : String;
}
