/** @param {NS} ns **/

import {getServers} from "getServers.js";
import {unlock} from "unlock.js";
import {useServer} from "newAttack.js";

export async function main(ns) {
	var target = ns.args[0];
	var allServers = getServers(ns);
	var script = "delayAttack.js";

	for (let i = 0; i < allServers.length; i++){
		var server = allServers[i];

		await unlock(ns, server);
		await ns.scp(script, server);
		
		if (ns.hasRootAccess(server)){
			await useServer(ns, server, target);
		}
	}
}
