namespace Myhana;

entity User {
    key id    : Integer;
        name  : String;
        email : String;

}


entity Product {
    key id          : Integer;
        price       : Int16;
        processId   : Int16;
        productType : String;

}
