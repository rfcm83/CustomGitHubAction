const core = require('@actions/core');
const github = require('@actions/github');

const culture = 'es-ES';

try {    
    var utcDate = new Date(new Date().toUTCString());
    const timeZone = core.getInput('time-zone');
    if (timeZone) {
        var customTime = utcDate.toLocaleString(culture, { timeZone: timeZone });
        console.log(`Time in your zone (${timeZone}): ${getTimeString(customTime)}`);
        core.setOutput("time", new Date(customTime));
    }
    else {
        var newYork = utcDate.toLocaleString(culture, { timeZone: 'America/New_York' });
        var madrid = utcDate.toLocaleString(culture, { timeZone: 'Europe/Madrid' });
        var minsk = utcDate.toLocaleString(culture, { timeZone: 'Europe/Minsk' });
        var shangai = utcDate.toLocaleString(culture, { timeZone: 'Asia/Shanghai' });
        var brisbane = utcDate.toLocaleString(culture, { timeZone: 'Australia/Brisbane' });

        console.log(`New York: ${getTimeString(newYork)}`);
        console.log(`Madrid: ${getTimeString(madrid)}`);
        console.log(`Minsk: ${getTimeString(minsk)}`);
        console.log(`Shangai: ${getTimeString(shangai)}`);
        console.log(`Brisbane: ${getTimeString(brisbane)}`);
        core.setOutput("time", utcDate);
    }
    
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}

function getTimeString(dateTime) {
    return new Date(dateTime).toTimeString().split(' ')[0];
}