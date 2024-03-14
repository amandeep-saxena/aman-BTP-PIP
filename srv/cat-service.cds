using Myhana from '../db/schema';


service CatalogService {
    @requires: 'authenticated-user'
    entity User    as projection on Myhana.User;

    @requires: 'Admin'
    @restrict: [{
        grant: 'READ',
        where: 'LANGU = ''DE'''
    }]
    entity Product as projection on Myhana.Product;
}
