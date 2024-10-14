namespace test;

using {test as component} from '../db/schema';


service TestService {

    @readonly
    entity Products            as projection on component.Products;

    @readonly
    entity ProductDescriptions as projection on component.ProductDescriptions
                                  where
                                      Language = $user.locale;

}
