const axios = require('axios')

async function fetchData(req, res, next) {
    try {
        const {data}= await axios({
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {
              from: '0',
              size: '20',
              tags: 'under_30_minutes'
            },
            headers: {
              'X-RapidAPI-Key': 'e75fe5845fmsh0c96634a1dd9c12p1304a7jsn88f968a9bae5',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        });
        req.menu = {data}
        next()
    } catch (error) {
        console.log(error);
    }
}
// async function rajaongkir(req, res, next) {
//     try {
//         const {data}= await axios({
//                 method: 'POST',
//                 url: 'https://api.rajaongkir.com/starter/cost',
//                 headers: {key: 'your-api-key', 'content-type': 'application/x-www-form-urlencoded'},
//                 form: {origin: '501', destination: '114', weight: 1700, courier: 'jne'}
//         });
//         console.log(data);
//         req.menu = {data}
//         next()
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {fetchData}