var query = require('../../../database/dbquery.js');

function addServerRevenue(srvuuid, newrevenue) {
    return new Promise(async function(resolve, reject) {
        var sql = "UPDATE server SET revenue=revenue+" + parseInt(newrevenue) + " WHERE uuid='" + srvuuid + "';";
        await query(sql);

        resolve();
    });
}

module.exports = addServerRevenue;
