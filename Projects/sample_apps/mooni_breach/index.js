const { setTimeout } = require("timers/promises");

let exploit = (tgt) => {
    setTimeout(function() {
        console.log(`Exploiting ${tgt.name} from IP ${tgt.ip}...`);
    }, 3000);
    setTimeout(function() {
        console.log(`Found client user ${tgt.name} on local network.`);
    }, 3800);
    setTimeout(function() {
        console.log(`Exporting malware files to ${tgt.name}\'s root.`);
    }, 5000);
    setTimeout(function() {
        console.log(`Awaiting commands for target...`);
    }, 7000);
    setTimeout(function() {
        console.log(`Exploiting ${tgt.name} from IP ${tgt.ip}...`);
    }, 3000);
}