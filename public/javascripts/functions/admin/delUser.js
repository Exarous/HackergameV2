var query = require('../../database/dbquery.js');

function deleteUser(uuid){
	return new Promise(async function(resolve, reject){
		var tables = [	"lastActivity",
				"levels",
				"logins",
				"admins",
				"money",
				"userdata"];

		for(var i in tables){
			await query("DELETE FROM "+tables[i]+" WHERE uuid='"+uuid+"';");
		}

		console.log("Deleted user:%s", uuid);
		resolve();
	});

}

module.exports = deleteUser;
