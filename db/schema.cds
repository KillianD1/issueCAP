namespace test;

using {Product as ApiProduct} from '../srv/external/Product';

entity Products            as
    projection on ApiProduct.A_Product {
        key Product,
            ProductType,
            CreationDate,
            CreatedByUser,
            to_Description : Association to many ProductDescriptions on to_Description.Product  = $self.Product
                             and                                        to_Description.Language = $user.locale
    }

entity ProductDescriptions as
    projection on ApiProduct.A_ProductDescription {
        key Product,
        key Language,
            ProductDescription
    }
