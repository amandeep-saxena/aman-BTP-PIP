const cds = require('@sap/cds');
const express = require('express');
const axios = require('axios');
app = express();


const getReportData = async function () {
    return new Promise((resolve, reject) => {
        const auth = {
            username: 'hpratap',
            password: 'Programming@1234',
        };
        const Url = 'http://71.251.192.136:8011/sap/opu/odata/sap//API_PRODUCT_SRV/A_Product?$format=json'
        axios.get(Url, {
            withCredentials: true,
            auth,
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch',
                'Application-Interface-Key': '077wa73s',
            }
        })
            .then(response => {
                resolve(response.data.d.results)
            })
            .catch(error => {
                reject(error)
            })
    })

}




class CatalogService extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const { User, Company } = db.entities('radmiDB');

        // cds.serve('Company').with(function () {
        //     this.after('READ', '*',async (req) => {
        //         let add = await SELECT.from(Company)
        //         console.log(JSON.stringify(add))
        //         return add;
        //     })
        // }


        this.on('READ', 'User', async (req) => {

            let add = await SELECT.from(User)
            console.log(JSON.stringify(add))
            return add;

        })

        this.on('READ', 'Company', async (req) => {

            let add = await SELECT.from(Company)
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



        this.on(CREATE, 'Company', async (req) => {
            const { data } = req
            const keys = Object.keys(data);
            const values = Object.values(data);

            console.log(keys, values);
            const insertedData1 = await INSERT.into(Company).columns(keys).values(values);
            return insertedData1;

        })


        this.on(DELETE, 'User', async (req) => {
            const { Id } = req.params;
            console.log(Id);
            const recordTo = await DELETE.from(User).where({ Id })
            console.log(recordTo)
            return { recordTo }
            // return { recordTo, success: true, message: `Record with ID ${Id} deleted successfully.` };
        })



        this.on(DELETE, 'Company', async (req) => {
            const { Id } = req.params;
            console.log(Id);
            const recordTo = await DELETE.from(Company).where({ Id })
            console.log(recordTo)
            return { recordTo }

        })



        this.on(UPDATE, 'Company', async (req) => {
            const { Id } = req.params;
            const { data } = req;

            console.log(Id)

            console.log("data", data)
            const result = await UPDATE(Company).set(data).where({ Id: data.Id });
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


        //read odata url ////////

        this.on('READ', 'ReportData', async (req) => {
            let data = await getReportData()
            console.log(JSON.stringify(data))
            return data
        });







        // this.on('READ', 'User', async (req) => {
        //     const { id } = req.params;

        //     let add = await SELECT.from(User).where( id )
        //     console.log(JSON.stringify(add))
        //     return add;

        // })



        await super.init();
    }
}




module.exports = { CatalogService };



