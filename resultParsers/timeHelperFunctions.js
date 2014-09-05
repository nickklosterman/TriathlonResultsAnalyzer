var Sentinel = -99; 

function parseTimeToTenthsOfSeconds(time){
    //console.log(time);

if (typeof time !== 'undefined' && time !== Sentinel ) {
    var splitTime=time.split(":");
    var TenthsOfSecondsFromHour=0,
    TenthsOfSecondsFromMinute=0,
    TenthsOfSecondsFromSecond=0,
    TotalTenthsOfSeconds=undefined;

    switch (splitTime.length) {
    case 3:
	TenthsOfSecondsFromHour = parseInt(splitTime[0],10)*36000; //36000 since in tenths of seconds
	TenthsOfSecondsFromMinute = parseInt(splitTime[1],10)*600 //600 since in tenths of seconds
	var splitSeconds  = splitTime[2].split(".")
	TenthsOfSecondsFromSecond = parseInt(splitSeconds[0],10)*10; 
	TotalTenthsOfSeconds = TenthsOfSecondsFromHour + TenthsOfSecondsFromMinute + TenthsOfSecondsFromSecond + parseInt(splitSeconds[1],10); 
	break; 
    case 2:
	TenthsOfSecondsFromMinute = parseInt(splitTime[0],10)*600 //600 since in tenths of seconds
	var splitSeconds  = splitTime[1].split(".")
	TenthsOfSecondsFromSecond = parseInt(splitSeconds[0],10)*10; 
	TotalTenthsOfSeconds = TenthsOfSecondsFromHour + TenthsOfSecondsFromMinute + TenthsOfSecondsFromSecond + parseInt(splitSeconds[1],10); 
	break;
    case 1:
	//I don't think this case will ever be hit
	break;
    default:
	//throw error
    }
}
if (time === '') { return 0 }
//    console.log(TotalTenthsOfSeconds);
    return (TotalTenthsOfSeconds);
}

function parseTimeToSeconds(time){
    //console.log(time);

if (typeof time !== 'undefined' && time !== Sentinel ) {
    var splitTime=time.split(":");
    var SecondsFromHour=0,
    SecondsFromMinute=0,
    SecondsFromSecond=0,
    TotalSeconds=undefined;

    switch (splitTime.length) {
    case 3:
	SecondsFromHour = parseInt(splitTime[0],10)*3600;
	SecondsFromMinute = parseInt(splitTime[1],10)*60 
	SecondsFromSecond = parseInt(splitTime[2],10); 
	TotalSeconds = SecondsFromHour + SecondsFromMinute + SecondsFromSecond;
	break; 
    case 2:
	SecondsFromMinute = parseInt(splitTime[0],10)*60 
	SecondsFromSecond = parseInt(splitTime[1],10); 
	TotalSeconds = SecondsFromHour + SecondsFromMinute + SecondsFromSecond;
	break;
    case 1:
	// No one can run this fast
	break;
    default:
	//throw error
    }
}
//    console.log(TotalSeconds);
    return (TotalSeconds);
}

module.exports.parseTimeToTenthsOfSeconds = parseTimeToTenthsOfSeconds;
module.exports.parseTimeToSeconds =  parseTimeToSeconds;

