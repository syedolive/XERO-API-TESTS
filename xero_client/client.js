import { XeroClient } from "xero-node";
const port = 4000
// const xero = new XeroClient({
//     clientId: 'D94127A9EFCD4FCEAE661103BEE44F61',
//     clientSecret: 'PS5sKF6Ln8IpZWO4c6yLb1wiJ8UcAMWf38xogrR1YhSttrku',
//     redirectUris: [`http://localhost:${port}/redirect_url`],
//     scopes: 'openid profile email accounting.transactions offline_access'.split(" "),
//     state: 'returnPage=my-sweet-dashboard', // custom params (optional)
//     httpTimeout: 3000 // ms (optional)
//   });


const xero = new XeroClient({
    clientId: '21C861BF6C894717ABCE5EEF6B810E97',
    clientSecret: 'drD3Exj-4nc7RzmWCh1px-cnVfYmJc7geSi9AC8C4Yb__e8Q',
    grantType: 'client_credentials'
});

export default xero