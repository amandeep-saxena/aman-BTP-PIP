const cds = require('@sap/cds');
const express = require('express');
const { copyFileSync } = require('fs');
app = express();


// module.exports = async srv => {
//     srv.on('READ', 'User', async (req) => {
//         let add = await SELECT.from(User)
//         console.log(add)
//         console.log(JSON.stringify(add))
//         return add;
//     });
// };


class CatalogService extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const { User, Product } = db.entities('Myhana');

        this.on('READ', 'User', async (req) => {

            let add = await SELECT.from(User)
            console.log('Executing READ operation on User entity');
            console.log(JSON.stringify(add))
            return add;

        })

        // this.on('READ', 'User', async (req) => {
        //     let add = await SELECT.from(User)
        //     console.log(add)
        //     console.log(JSON.stringify(add))
        //     return add;
        // });
    


        this.on('READ', 'Product', async (req) => {
            // const forwardedPath = req.headers['forwarded-path']
            // console.log('Forwarded Path:', forwardedPath);
            let add = await SELECT.from(Product)
            console.log(JSON.stringify(add))
            return add;

        })



        this.on(CREATE, 'User', async (req) => {
            const { data } = req
            const keys = Object.keys(data);
            const values = Object.values(data);

            console.log(keys, values);
            const insertedData = await INSERT.into(User).columns(keys).values(values);
            return insertedData;

        })



        this.on(CREATE, 'Product', async (req) => {
            const { data } = req
            const keys = Object.keys(data);
            const values = Object.values(data);

            console.log(keys, values);
            const insertedData1 = await INSERT.into(Product).columns(keys).values(values);
            return insertedData1;

        })


        this.on('READ', 'User', async (req) => {
            const { Id } = req.params;
            console.log(Id);
            const recordTo = await DELETE.from(User).where({ Id })
            console.log(recordTo)
            return { recordTo }
            // return { recordTo, success: true, message: `Record with ID ${Id} deleted successfully.` };
        })



        this.on('READ', 'Product', async (req) => {
            const { Id } = req.params;
            console.log(Id);
            const recordTo = await DELETE.from(Product).where({ Id })
            console.log(recordTo)
            return { recordTo }

        })



        this.on(UPDATE, 'Product', async (req) => {
            const { Id } = req.params;
            const { data } = req;

            console.log(Id)

            console.log("data", data)
            const result = await UPDATE(Product).set(data).where({ Id: data.Id });
            // console.log(JSON.stringify(result))
            return { result };
        });



        this.on(UPDATE, 'User', async (req) => {
            const { Id } = req.params;
            const { data } = req;

            console.log(Id)

            console.log("data", data)
            const result = await UPDATE(User).set(data).where({ Id: data.Id });
            // console.log(JSON.stringify(result))
            return { result };
        });



        await super.init();
    }
}




module.exports = { CatalogService };