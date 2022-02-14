/** @param {NS} ns **/

export function unlock(ns, target) {
	var openedPorts = 0;
	var portsRequired = ns.getServerNumPortsRequired(target)

	if (ns.fileExists("BruteSSH.exe", "home")){
		ns.brutessh(target);
		openedPorts++;
	}
	
	if (ns.fileExists("FTPCrack.exe", "home")){
		ns.ftpcrack(target);
		openedPorts++;
	}
	
	if (ns.fileExists("relaySMTP.exe", "home")){
		ns.relaysmtp(target);
		openedPorts++;
	}
	
	if (ns.fileExists("HTTPWorm.exe", "home")){
		ns.httpworm(target);
		openedPorts++;
	}
	
	if (ns.fileExists("SQLInject.exe", "home")){
		ns.sqlinject(target);
		openedPorts++;
	}

	if (openedPorts >= portsRequired){
		ns.nuke(target);
		return true;
	}
	else{
		return false;
	}
}

export async function main(ns) {
}
