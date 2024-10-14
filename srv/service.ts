import * as cds from '@sap/cds';
import { Products } from '#cds-models/test/TestService';
 
export default class TestService extends cds.ApplicationService {
    async init() {
        const productsAPI = await cds.connect.to('Product');
        this.on('READ', Products, (req) => {
            return productsAPI.run(req.query);
        });
        return await super.init();
    }
}