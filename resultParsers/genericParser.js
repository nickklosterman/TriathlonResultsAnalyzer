var request = require('request')
, cheerio = require('cheerio')
, fs = require('fs');
//, sqlite = require('sqlite3');

var Min_Sentinel = 9999999;
var Max_Sentinel = 0;
var Sentinel = -99; 
var MinMax = {
    Place:{min:Min_Sentinel,max:Max_Sentinel},
    Age : {min:Min_Sentinel,max:Max_Sentinel},
    Swim_Time:{min:Min_Sentinel,max:Max_Sentinel},
    T1_Time:{min:Min_Sentinel,max:Max_Sentinel},
    Bike_Time:{min:Min_Sentinel,max:Max_Sentinel},
    Bike_Rate_MPH:{min:Min_Sentinel,max:Max_Sentinel},
    T2_Time:{min:Min_Sentinel,max:Max_Sentinel},
    Run_Time:{min:Min_Sentinel,max:Max_Sentinel},
    Run_Rate:{min:Min_Sentinel,max:Max_Sentinel},
    Overall_Time:{min:Min_Sentinel,max:Max_Sentinel}
}

var DataArray = {
    Age : [],
    Swim_Time:[],
    T1_Time:[],
    Bike_Time:[],
    Bike_Rate_MPH:[],
    T2_Time:[],
    Run_Time:[],
    Run_Rate:[],
    Overall_Time:[]
}

var StatsArray = {

}

function computeStatsOnDataArray(){

    for (var item in DataArray){
//	console.log(item)  // item is the name of the property. duh we even use it to index into DataArray
	computeStat(DataArray[item],item)
    }
//	computeStat(DataArray["Age"])
}

function computeStat(item,itemName) {
//console.log(typeof item);
//console.log(item);
//    if (typeof item === 'Array'){
//for (var name in item) console.log(name)
    if (true){
	var length = item.length,
	sum=0;
	sum=item.reduce(function(p,c,i,a){
	    if (typeof c !== 'undefined') {
//		console.log(p+":"+c);
		return parseInt(p)+parseInt(c)
	    }else { 
		return p
	    }
	})
//	console.log(sum+":"+sum/length);
//console.log("{"+itemName+":"+sum/length+"}")
var temp = (MinMax[itemName])
temp.median=sum/length
    }
}

var url = "http://www.speedy-feet.com/races/2014/0618/cc2-tri.htm" //the DNFs at the end I think are bc people only got one lap of the run in before the skies opened and they made them come in.
var CC2014Tri1="http://www.speedy-feet.com/races/2014/0604/cc1_ov.htm" //this was a super sprint or something bc the times are much lower
var resultsName= "CC3";//Chicago2014";
switch (resultsName) {
case "CC1": // has add'l 'pace' fields
    $ = cheerio.load(fs.readFileSync("../data/cc1_ov.htm",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    parseRowIntoObjects22Fields(tableRows);
    break;
case "CC2":
    $ = cheerio.load(fs.readFileSync("../data/cc2-tri.htm",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    //    console.log( typeof tableRows );
    parseRowIntoObjects(tableRows);
    break;
case "CC3": //fuck the syntax is diff, has a ton of stupid attr on the data
    $ = cheerio.load(fs.readFileSync("../data/cc3_ov.htm",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    //    console.log( typeof tableRows );
    parseRowIntoObjectsExtraAttribs(tableRows);
    break;
case "CC4":
    $ = cheerio.load(fs.readFileSync("../data/cc4-ov.htm",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    //    console.log( typeof tableRows );
    parseRowIntoObjects(tableRows);
    break;
case "Chicago2014":
    $ = cheerio.load(fs.readFileSync("../data/ChicagoTriathlon24082014/AllResults.html",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    parseRowIntoObjectsChicago(tableRows);
    break;
default:
    request (url, function(err, resp, body) {
	$ = cheerio.load(body,{normalizeWhitespace:true});
	var tableRows=$('tr')
	//    console.log( typeof tableRows );
	parseRowIntoObjects(tableRows);
    });
}

function parseTimeToTenthsOfSeconds(time){
    //console.log(time);
if (time.indexOf('.') !== -1 ) { 
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
//    console.log(TotalTenthsOfSeconds);
    return (TotalTenthsOfSeconds);
} else { 
return (parseTimeToSeconds(time)*10);
}
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

function printMinMax() {
    console.log("Age Max:"+MinMax.Age.max+" Age Min:"+MinMax.Age.min);
    console.log("Swim_Time Max:"+MinMax.Swim_Time.max+" Swim_Time Min:"+MinMax.Swim_Time.min);
    console.log("T1_Time Max:"+MinMax.T1_Time.max+" T1_Time Min:"+MinMax.T1_Time.min);
    console.log("Bike_Time Max:"+MinMax.Bike_Time.max+" Bike_Time Min:"+MinMax.Bike_Time.min);
    console.log("Bike_Rate Max:"+MinMax.Bike_Rate_MPH.max+" Bike_Rate Min:"+MinMax.Bike_Rate_MPH.min);
    console.log("T2_Time Max:"+MinMax.T2_Time.max+" T2_Time Min:"+MinMax.T2_Time.min);
    console.log("Run_Time Max:"+MinMax.Run_Time.max+" Run_Time Min:"+MinMax.Run_Time.min);
    console.log("Run_Rate Max:"+MinMax.Run_Rate.max+" Run_Rate Min:"+MinMax.Run_Rate.min);
    console.log("Overall_Time Max:"+MinMax.Overall_Time.max+" Overall_Time Min:"+MinMax.Overall_Time.min);

    //console.log("zz Max:"+MinMax.zz.Max+" zz Min:"+MinMax.zz.Min);

}
function printMinMaxJSON() {
    console.log("{");
    console.log("Age:{ Max:"+MinMax.Age.max+", Min:"+MinMax.Age.min);
    console.log("},Swim_Time :{ Max:"+MinMax.Swim_Time.max+",  Min:"+MinMax.Swim_Time.min);
    console.log("},T1_Time:{ Max:"+MinMax.T1_Time.max+",  Min:"+MinMax.T1_Time.min);
    console.log("},Bike_Time:{ Max:"+MinMax.Bike_Time.max+",  Min:"+MinMax.Bike_Time.min);
    console.log("},Bike_Rate:{ Max:"+MinMax.Bike_Rate_MPH.max+", Min:"+MinMax.Bike_Rate_MPH.min);
    console.log("},T2_Time:{ Max:"+MinMax.T2_Time.max+", Min:"+MinMax.T2_Time.min);
    console.log("},Run_Time:{ Max:"+MinMax.Run_Time.max+", Min:"+MinMax.Run_Time.min);
    console.log("},Run_Rate:{ Max:"+MinMax.Run_Rate.max+", Min:"+MinMax.Run_Rate.min);
    console.log("},Overall_Time:{ Max:"+MinMax.Overall_Time.max+", Min:"+MinMax.Overall_Time.min);
    console.log("}}");


}

function printMinMaxMedianJSON() {
    console.log("{");
    console.log("Age:{ Max:"+MinMax.Age.max+", Min:"+MinMax.Age.min+", Median:"+MinMax.Age.median);
    console.log("},Swim_Time :{ Max:"+MinMax.Swim_Time.max+",  Min:"+MinMax.Swim_Time.min+", Median:"+MinMax.Swim_Time.median);
    console.log("},T1_Time:{ Max:"+MinMax.T1_Time.max+",  Min:"+MinMax.T1_Time.min+", Median:"+MinMax.T1_Time.median);
    console.log("},Bike_Time:{ Max:"+MinMax.Bike_Time.max+",  Min:"+MinMax.Bike_Time.min+", Median:"+MinMax.Bike_Time.median);
    console.log("},Bike_Rate:{ Max:"+MinMax.Bike_Rate_MPH.max+", Min:"+MinMax.Bike_Rate_MPH.min+", Median:"+MinMax.Bike_Rate_MPH.median);
    console.log("},T2_Time:{ Max:"+MinMax.T2_Time.max+", Min:"+MinMax.T2_Time.min+", Median:"+MinMax.T2_Time.median);
    console.log("},Run_Time:{ Max:"+MinMax.Run_Time.max+", Min:"+MinMax.Run_Time.min+", Median:"+MinMax.Run_Time.median);
    console.log("},Run_Rate:{ Max:"+MinMax.Run_Rate.max+", Min:"+MinMax.Run_Rate.min+", Median:"+MinMax.Run_Rate.median);
    console.log("},Overall_Time:{ Max:"+MinMax.Overall_Time.max+", Min:"+MinMax.Overall_Time.min+", Median:"+MinMax.Overall_Time.median);
    console.log("}}");


}

function minMaxCompare(obj,value){
//    console.log(obj)
//    console.log(value)

    if (value !== '' && value > 0) {
	if (obj.min === Min_Sentinel && obj.max === Max_Sentinel) {
	    obj.min=value; obj.max=value;
	} else {
	    if (value<obj.min){obj.min=value} else {if (value>obj.max) {obj.max=value}}
	}
    }
    return obj;
}

function Compare(p,n,b,a,g,ag,sw,st,t1r,t1t,br,bt,brt,t2r,t2t,rr,rt,rp,ot){
    MinMax.Age=minMaxCompare(MinMax.Age,a);
    MinMax.Swim_Time=minMaxCompare(MinMax.Swim_Time,validateSwimTime(parseTimeToTenthsOfSeconds(st),"750m"));

    MinMax.T1_Time=minMaxCompare(MinMax.T1_Time,validateTransitionTime(parseTimeToTenthsOfSeconds(t1t)));

    MinMax.Bike_Time=minMaxCompare(MinMax.Bike_Time,validateBikeTime(parseTimeToTenthsOfSeconds(bt),"34k"));
    MinMax.Bike_Rate_MPH=minMaxCompare(MinMax.Bike_Rate_MPH,validateBikeRateMPH(brt));

    MinMax.T2_Time=minMaxCompare(MinMax.T2_Time,validateTransitionTime(parseTimeToTenthsOfSeconds(t2t)));

    MinMax.Run_Time=minMaxCompare(MinMax.Run_Time,validateRunTime(parseTimeToTenthsOfSeconds(rt),"5k"));
    MinMax.Run_Rate=minMaxCompare(MinMax.Run_Rate,rp);

    MinMax.Overall_Time=minMaxCompare(MinMax.Overall_Time,parseTimeToTenthsOfSeconds(ot));

    //MinMax.=minMaxCompare(MinMax.,);
}

function addToDataArray(p,n,b,a,g,ag,sw,st,t1r,t1t,br,bt,brt,t2r,t2t,rr,rt,rp,ot){
    DataArray.Age.push(validateAge(a));
    DataArray.Swim_Time.push(validateSwimTime(parseTimeToTenthsOfSeconds(st),"750m"));

    DataArray.T1_Time.push(validateTransitionTime(parseTimeToTenthsOfSeconds(t1t)));

    DataArray.Bike_Time.push(validateBikeTime(parseTimeToTenthsOfSeconds(bt),"34k"));
    DataArray.Bike_Rate_MPH.push(validateBikeRateMPH(brt));

    DataArray.T2_Time.push(validateTransitionTime(parseTimeToTenthsOfSeconds(t2t)));

    DataArray.Run_Time.push(validateRunTime(parseTimeToTenthsOfSeconds(rt),"5k"));
    DataArray.Run_Rate.push(rp);

    DataArray.Overall_Time.push(parseTimeToTenthsOfSeconds(ot));


}

function printRowData(p,n,b,a,g,ag,sw,st,t1r,t1t,br,bt,brt,t2r,t2t,rr,rt,rp,ot){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log(p+" : "+n+" : "+b+" : "+a+" : "+g+" : "+ag+" : "+sw+" : "+st+" : "+t1r+" : "+t1t+" : "+br+" : "+bt+" : "+brt+" : "+t2r+" : "+t2t+" : "+rr+" : "+rt+" : "+rp+" : "+ot);
}

function printRowDataJSON(p,n,b,a,g,ag,sw,st,stt,t1r,t1t,t1tt,br,bt,btt,brt,t2r,t2t,t2tt,rr,rt,rtt,rp,ot,ott,stpoot,t1poot,btpoot,t2poot,rtpoot,ar){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    //var place = isNaN(p)?"'"+p+"'":p;
    var place = p
    var bike_rate_mph = isNaN(brt)?undefined:brt;
    bike_rate_mph = bike_rate_mph===''?undefined:bike_rate_mph;
    //var run_rank = rr==='DQ'?"'"+rr+"'":rr;
    var run_rank = rr
    console.log("{Place:"+place+
		", Name:\""+n+
		"\", Bib_No:"+b+
		", Age:"+a+
		", Gender:'"+g+
		"', Age_Group:'"+ag+
		"', Swim_Rnk:"+sw+
		", Swim_Time:'"+st+
		"', Swim_Time_TenthsOfSeconds:"+stt+
		", T1_Rnk:"+t1r+
		", T1_Time:'"+t1t+
		"', T1_Time_TenthsOfSeconds:"+t1tt+
		", Bike_Rnk:"+br+
		", Bike_Time:'"+bt+
		"', Bike_Time_TenthsOfSeconds:"+btt+
		", Bike_Rate_MPH:"+bike_rate_mph+
		", T2_Rnk:"+t2r+
		", T2_Time:'"+t2t+
		"', T2_Time_TenthsOfSeconds:"+t2tt+
		", Run_Rnk:"+run_rank+
		", Run_Time:'"+rt+
		"', Run_Time_TenthsOfSeconds:"+rtt+
		", Run_Pace:'"+rp+
		"', Overall_Time:'"+ot+
		"', Overall_Time_TenthsOfSeconds:"+ott+
		",Swim_Time_Percent_Of_Overall_Time:"+stpoot+
		",T1_Time_Percent_Of_Overall_Time:"+t1poot+
		",Bike_Time_Percent_Of_Overall_Time:"+btpoot+
		",T2_Time_Percent_Of_Overall_Time:"+t2poot+
		",Run_Time_Percent_Of_Overall_Time:"+rtpoot+
		",AverageRank:"+ar+"}");
}
function printChicagoRowDataJSON(p,n,b,a,g,ag,sw,st,stt,t1r,t1t,t1tt,br,bt,btt,brt,t2r,t2t,t2tt,rr,rt,rtt,rp,ot,ott,stpoot,t1poot,btpoot,t2poot,rtpoot,ar,c,s){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    var place = isNaN(p)?"'"+p+"'":p;
    var bike_rate_mph = isNaN(brt)?undefined:brt;
    bike_rate_mph = bike_rate_mph===''?undefined:bike_rate_mph;
    var run_rank = rr==='DQ'?"'"+rr+"'":rr;
    console.log("{Place:"+place+
		", Name:\""+n+  //handle apostrophied names like D'Angelo
		"\", Bib_No:"+b+
		", Age:"+a+
		", Gender:'"+g+
		"', Age_Group:'"+ag+
		"', Swim_Rnk:"+sw+
		", Swim_Time:'"+st+
		"', Swim_Time_TenthsOfSeconds:"+stt+
		", T1_Rnk:"+t1r+
		", T1_Time:'"+t1t+
		"', T1_Time_TenthsOfSeconds:"+t1tt+
		", Bike_Rnk:"+br+
		", Bike_Time:'"+bt+
		"', Bike_Time_TenthsOfSeconds:"+btt+
		", Bike_Rate_MPH:"+bike_rate_mph+
		", T2_Rnk:"+t2r+
		", T2_Time:'"+t2t+
		"', T2_Time_TenthsOfSeconds:"+t2tt+
		", Run_Rnk:"+run_rank+
		", Run_Time:'"+rt+
		"', Run_Time_TenthsOfSeconds:"+rtt+
		", Run_Pace:'"+rp+
		"', Overall_Time:'"+ot+
		"', Overall_Time_TenthsOfSeconds:"+ott+
		", Swim_Time_Percent_Of_Overall_Time:"+stpoot+
		", T1_Time_Percent_Of_Overall_Time:"+t1poot+
		", Bike_Time_Percent_Of_Overall_Time:"+btpoot+
		", T2_Time_Percent_Of_Overall_Time:"+t2poot+
		", Run_Time_Percent_Of_Overall_Time:"+rtpoot+
		", AverageRank:"+ar+
		", City:'"+c+
		"', State:'"+s+"'}");
}

function validateNoNBSPTime(field){
    if (typeof field !== 'undefined') {
	return field!==' '?field.trim():'';
    } else { 
	return '';
    }
}

function validateNoNBSP(field){
    if (typeof field !== 'undefined') {
	//&nbsp; shows up as 0xc2a0 in cheerio. adding the {normalizeWhitespace:true}); solved that problem and now &nbsp; shows up as simply a space/' '
	//return field!==0xc2a0?field:'';
	var value= field!==' '?field.trim():undefined;
//	return value==='DQ'?"'DQ'":value
	return isNaN(value)?"'"+value+"'":value
	//    return field!==' '?field:'';
    } else { 
	return '';
    }
}

/****
To make the validation smart, I could assume a gaussian distribution. Then chop off any outliers as not being true values.
The removal of outliers would have to be used judiciously but nothing crazy. 
***/

function validateAge(a) {
if (a> 10 && a < 100){
return a
}
return undefined
};

//swim times usually are good since it is usually mass start timed and no timing mat is involved. 
//but the exit mat could cause a problem.
function validateSwimTime(timeInTenthsOfSeconds,distance) {
    switch (distance) {
    case "750m":
	//swim must be between 10 minutes and 40 minutes to be considered valid
	if (timeInTenthsOfSeconds < 24000 && timeInTenthsOfSeconds > 6000 )
	{ return timeInTenthsOfSeconds } 
	break;
    }
    return Sentinel;//undefined
}

function validateBikeTime(timeInTenthsOfSeconds,distance) {
    switch (distance) {
    case "34k":
	//bike must be between 45 minutes and 1.5hrs to be considered valid
	if (timeInTenthsOfSeconds < 54000 && timeInTenthsOfSeconds > 27000 )
	{ return timeInTenthsOfSeconds } 
	break;
    }
    return Sentinel;//undefined
}
function validateBikeRateMPH(mph) {
    //bike rate must be reasonable
    if (mph < 35 && mph > 10 )
    { return mph } 
    return Sentinel;//undefined
}

function validateRunTime(timeInTenthsOfSeconds,distance) {
    switch (distance) {
    case "5k":
	//run must be between 15 minutes and 1hrs to be considered valid
	if (timeInTenthsOfSeconds < 36000 && timeInTenthsOfSeconds > 9000 )
	{ return timeInTenthsOfSeconds } 
	break;
    }
    return Sentinel;//undefined
}

function validateTransitionTime(timeInTenthsOfSeconds) {
//transition must be between 2 minuts and 15 seconds to be considered valid
if (timeInTenthsOfSeconds < 1200 && timeInTenthsOfSeconds > 150 )
{ return timeInTenthsOfSeconds } 
return Sentinel;//undefined
}

function parseRowIntoObjects(tableRows){
    //  console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log('[');

    for (var counter=4,length=tableRows.length; counter<length;counter++){
	//    for (var counter=74,length=tableRows.length; counter<84/*length*/;counter++){
	//we need to skip the first few lines since they won't have the right number of children etc. line=3 is the header of categories of the columns

	//prevent header columns from being written, 
	if (tableRows[counter].children.length > 15 && tableRows[counter].children[1].children[0].data !== "Place") {
	    var Place = validateNoNBSP(tableRows[counter].children[1].children[0].data);
	    var Name = validateNoNBSP(tableRows[counter].children[3].children[0].data);
	    var Bib_No = validateNoNBSP(tableRows[counter].children[5].children[0].data);
	    var Age = typeof tableRows[counter].children[7].children[0]!=='undefined'?validateNoNBSP(tableRows[counter].children[7].children[0].data):''; 
	    var Gender = validateNoNBSP(tableRows[counter].children[9].children[0].data);
	    var Age_Group = validateNoNBSP(tableRows[counter].children[11].children[0].data);
	    var Swim_Rnk = validateNoNBSP(tableRows[counter].children[13].children[0].data);
	    var Swim_Time = validateNoNBSPTime(tableRows[counter].children[15].children[0].data);//validateSwimTime(validateNoNBSP(tableRows[counter].children[15].children[0].data),"750m");
	    var Swim_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Swim_Time);
	    var T1_Rnk = validateNoNBSP(tableRows[counter].children[17].children[0].data);
	    var T1_Time = validateNoNBSPTime(tableRows[counter].children[19].children[0].data);//validateTransitionTime(validateNoNBSP(tableRows[counter].children[19].children[0].data));
	    var T1_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T1_Time);
	    var Bike_Rnk = validateNoNBSP(tableRows[counter].children[21].children[0].data);
	    var Bike_Time = validateNoNBSPTime(tableRows[counter].children[23].children[0].data);//validateBikeTime(validateNoNBSP(tableRows[counter].children[23].children[0].data),"34k");
	    var Bike_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Bike_Time);
	    var Bike_Rate_MPH = validateNoNBSP(tableRows[counter].children[25].children.length>0?tableRows[counter].children[25].children[0].data:'');
	    var T2_Rnk = validateNoNBSP(tableRows[counter].children[27].children[0].data||'');
	    var T2_Time = validateNoNBSPTime(tableRows[counter].children[29].children[0].data||'');//validateTransitionTime(validateNoNBSP(tableRows[counter].children[29].children[0].data||''));
	    var T2_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T2_Time);
	    var Run_Rnk = validateNoNBSP(tableRows[counter].children[31].children[0].data||'');
	    var Run_Time = validateNoNBSPTime(tableRows[counter].children[33].children.length>0?tableRows[counter].children[33].children[0].data:'');//validateRunTime(validateNoNBSP(tableRows[counter].children[33].children.length>0?tableRows[counter].children[33].children[0].data:''),"5k");
	    var Run_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Run_Time);
	    var Run_Pace = validateNoNBSP(tableRows[counter].children[35].children.length>0?tableRows[counter].children[35].children[0].data:'');
	    var Overall_Time = validateNoNBSPTime(tableRows[counter].children[37].children.length>0?tableRows[counter].children[37].children[0].data:'');
	    var Overall_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Overall_Time);


	    var SwimTimePercentageOfOverallTime = Swim_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T1TimePercentageOfOverallTime = T1_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var BikeTimePercentageOfOverallTime = Bike_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T2TimePercentageOfOverallTime = T2_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var RunTimePercentageOfOverallTime = Run_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var AverageRank = (parseInt(Swim_Rnk,10) + parseInt(T1_Rnk,10) + parseInt(T2_Rnk,10) + parseInt(Bike_Rnk,10) + parseInt(Run_Rnk,10) ) / 5.0;


	    //parseTimeToTenthsOfSeconds(T2_Time);
	    //parseTimeToTenthsOfSeconds(Bike_Time);
	    //parseTimeToTenthsOfSeconds(Overall_Time);

	    //printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rank , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rank , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    //	    printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    printRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds,SwimTimePercentageOfOverallTime,T1TimePercentageOfOverallTime,BikeTimePercentageOfOverallTime,T2TimePercentageOfOverallTime,RunTimePercentageOfOverallTime,AverageRank);

// perform comparison to get min max
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
// extra fields	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds);

//	    Stats(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    addToDataArray(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    if(counter<length-1) {console.log(',')} //add comma at end of each object to make valid json
	}
    }
    console.log(']'); //add closing array bracket for json
    computeStatsOnDataArray();
    printMinMax();
    printMinMaxMedianJSON();
//console.log(DataArray["Age"]);

}
function parseRowIntoObjectsExtraAttribs(tableRows){
    //  console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log('[');

    for (var counter=4,length=tableRows.length; counter<length;counter++){
	//    for (var counter=74,length=tableRows.length; counter<84/*length*/;counter++){
	//we need to skip the first few lines since they won't have the right number of children etc. line=3 is the header of categories of the columns

	//prevent header columns from being written, 

	if (tableRows[counter].children.length > 15 
	    && tableRows[counter].children[1].children[0].next.children[0].children[0].data !== "Place"
	    && typeof tableRows[counter].children[1].children[0].next.children[0].children[0].data !== "undefined") {
//	console.log(tableRows[counter].children.length + ' '+ tableRows[counter].children[1].children[0].next.children[0].children[0].data )
	    var Place = validateNoNBSP(tableRows[counter].children[1].children[0].next.children[0].children[0].data);
	    var Name = validateNoNBSP(tableRows[counter].children[3].children[0].next.children[0].children[0].data);
//                          console.log(tableRows[counter].children[3].children[0].next.children[0].children[0]);
	    if (tableRows[counter].children[3].children[0].next.children[0].children[0].data!==''){
//		                          console.log(tableRows[counter].children[3].children[0].next.children[0].children[0].data);
		Name = tableRows[counter].children[3].children[0].next.children[0].children[0].data;
//		console.log("i");
	    }
	    //find second element of split name v1
	    if (tableRows[counter].children[3].children[0].next.children[0].children[0].next && tableRows[counter].children[3].children[0].next.children[0].children[0].next.name=="span"){
//		console.log(tableRows[counter].children[3].children[0].next.children[0].children[0].next.children[0].data);
		Name += tableRows[counter].children[3].children[0].next.children[0].children[0].next.children[0].data;
		//console.log("v1");
	    }
//find weird split name v2
	    if (tableRows[counter].children[3].children[0].next.children[0].children[0].children && tableRows[counter].children[3].children[0].next.children[0].children[0].children[0].data ){
//    console.log(tableRows[counter].children[3].children[0].next.children[0].children[0].children[0].data);
//   console.log("p2:"+tableRows[counter].children[3].children[0].next.children[1].children[0].data);
		if (tableRows[counter].children[3].children[0].next.children[1].children[0].data.trim()=="" ) {
		    //console.log("woo")
		    //console.log(tableRows[counter].children[3].children[0].next.children[1].children[0].next.children[0].data)
		Name = tableRows[counter].children[3].children[0].next.children[0].children[0].children[0].data 
		    + tableRows[counter].children[3].children[0].next.children[1].children[0].next.children[0].data		    
		} else { 
		    Name = tableRows[counter].children[3].children[0].next.children[0].children[0].children[0].data 
                     + tableRows[counter].children[3].children[0].next.children[1].children[0].data

		}
//		console.log("v2");
	    }

	    //console.log(tableRows[counter].children[3].children[0].next.children[0].children[0]);
	    var Bib_No = validateNoNBSP(tableRows[counter].children[5].children[0].next.children[0].children[0].data);
	    var Age = typeof tableRows[counter].children[7].children[0]!=='undefined'?validateNoNBSP(tableRows[counter].children[7].children[0].next.children[0].children[0].data):''; 
	    var Gender = validateNoNBSP(tableRows[counter].children[9].children[0].next.children[0].children[0].data);
	    var Age_Group = validateNoNBSP(tableRows[counter].children[11].children[0].next.children[0].children[0].data);
	    var Swim_Rnk = validateNoNBSP(tableRows[counter].children[13].children[0].next.children[0].children[0].data);
	    var Swim_Time = validateNoNBSPTime(tableRows[counter].children[15].children[0].next.children[0].children[0].data);//validateSwimTime(validateNoNBSP(tableRows[counter].children[15].children[0].next.children[0].children[0].data),"750m");
	    var Swim_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Swim_Time);
	    var T1_Rnk = validateNoNBSP(tableRows[counter].children[17].children[0].next.children[0].children[0].data);
	    var T1_Time = validateNoNBSPTime(tableRows[counter].children[19].children[0].next.children[0].children[0].data);//validateTransitionTime(validateNoNBSP(tableRows[counter].children[19].children[0].next.children[0].children[0].data));
	    var T1_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T1_Time);
	    var Bike_Rnk = validateNoNBSP(tableRows[counter].children[21].children[0].next.children[0].children[0].data);
	    var Bike_Time = validateNoNBSPTime(tableRows[counter].children[23].children[0].next.children[0].children[0].data);//validateBikeTime(validateNoNBSP(tableRows[counter].children[23].children[0].next.children[0].children[0].data),"34k");
	    var Bike_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Bike_Time);
	    var Bike_Rate_MPH = validateNoNBSP(tableRows[counter].children[25].children.length>0?tableRows[counter].children[25].children[0].next.children[0].children[0].data:'');
	    var T2_Rnk = validateNoNBSP(tableRows[counter].children[27].children[0].next.children[0].children[0].data||'');
	    var T2_Time = validateNoNBSPTime(tableRows[counter].children[29].children[0].next.children[0].children[0].data||'');//validateTransitionTime(validateNoNBSP(tableRows[counter].children[29].children[0].next.children[0].children[0].data||''));
	    var T2_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T2_Time);
	    var Run_Rnk = validateNoNBSP(tableRows[counter].children[31].children[0].next.children[0].children[0].data||'');
	    var Run_Time = validateNoNBSPTime(tableRows[counter].children[33].children.length>0?tableRows[counter].children[33].children[0].next.children[0].children[0].data:'');//validateRunTime(validateNoNBSP(tableRows[counter].children[33].children.length>0?tableRows[counter].children[33].children[0].next.children[0].children[0].data:''),"5k");
	    var Run_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Run_Time);
	    var Run_Pace = validateNoNBSP(tableRows[counter].children[35].children.length>0?tableRows[counter].children[35].children[0].next.children[0].children[0].data:'');
	    var Overall_Time = validateNoNBSPTime(tableRows[counter].children[37].children.length>0?tableRows[counter].children[37].children[0].next.children[0].children[0].data:'');
	    var Overall_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Overall_Time);


	    var SwimTimePercentageOfOverallTime = Swim_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T1TimePercentageOfOverallTime = T1_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var BikeTimePercentageOfOverallTime = Bike_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T2TimePercentageOfOverallTime = T2_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var RunTimePercentageOfOverallTime = Run_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var AverageRank = (parseInt(Swim_Rnk,10) + parseInt(T1_Rnk,10) + parseInt(T2_Rnk,10) + parseInt(Bike_Rnk,10) + parseInt(Run_Rnk,10) ) / 5.0;


	    printRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds,SwimTimePercentageOfOverallTime,T1TimePercentageOfOverallTime,BikeTimePercentageOfOverallTime,T2TimePercentageOfOverallTime,RunTimePercentageOfOverallTime,AverageRank);

// perform comparison to get min max
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    addToDataArray(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    if(counter<length-1) {console.log(',')} //add comma at end of each object to make valid json
	}
    }
    console.log(']'); //add closing array bracket for json
    computeStatsOnDataArray();
    printMinMax();
    printMinMaxMedianJSON();
//console.log(DataArray["Age"]);

}
function parseRowIntoObjects22Fields(tableRows){
    console.log('[');
    for (var counter=4,length=tableRows.length; counter<length;counter++){
	//prevent header columns from being written, 
	if (tableRows[counter].children.length > 15 && tableRows[counter].children[1].children[0].data !== "Place") {
	    var Place = validateNoNBSP(tableRows[counter].children[1].children[0].data);
	    var Name = validateNoNBSP(tableRows[counter].children[3].children[0].data);
	    var Bib_No = validateNoNBSP(tableRows[counter].children[5].children[0].data);
	    var Age = typeof tableRows[counter].children[7].children[0]!=='undefined'?validateNoNBSP(tableRows[counter].children[7].children[0].data):''; 
	    var Gender = validateNoNBSP(tableRows[counter].children[9].children[0].data);
	    var Age_Group = validateNoNBSP(tableRows[counter].children[11].children[0].data);
	    var Swim_Rnk = validateNoNBSP(tableRows[counter].children[13].children[0].data);
	    var Swim_Time = validateNoNBSPTime(tableRows[counter].children[15].children[0].data);//validateSwimTime(validateNoNBSP(tableRows[counter].children[15].children[0].data),"750m");
	    var Swim_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Swim_Time);
	    var T1_Rnk = validateNoNBSP(tableRows[counter].children[19].children[0].data);
	    var T1_Time = validateNoNBSPTime(tableRows[counter].children[21].children[0].data);//validateTransitionTime(validateNoNBSP(tableRows[counter].children[19].children[0].data));
	    var T1_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T1_Time);
	    var Bike_Rnk = validateNoNBSP(tableRows[counter].children[25].children[0].data);
	    var Bike_Time = validateNoNBSPTime(tableRows[counter].children[27].children[0].data);//validateBikeTime(validateNoNBSP(tableRows[counter].children[23].children[0].data),"34k");
	    var Bike_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Bike_Time);
	    var Bike_Rate_MPH = validateNoNBSP(tableRows[counter].children[29].children.length>0?tableRows[counter].children[31].children[0].data:'');
	    var T2_Rnk = validateNoNBSP(tableRows[counter].children[31].children[0].data||'');
	    var T2_Time = validateNoNBSPTime(tableRows[counter].children[33].children[0].data||'')
	    var T2_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T2_Time);
	    var Run_Rnk = validateNoNBSP(tableRows[counter].children[37].children[0].data||'');
	    var Run_Time = validateNoNBSPTime(tableRows[counter].children[39].children.length>0?tableRows[counter].children[39].children[0].data:'')
	    var Run_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Run_Time);
	    var Run_Pace = validateNoNBSP(tableRows[counter].children[41].children.length>0?tableRows[counter].children[41].children[0].data:'');
	    var Overall_Time = validateNoNBSPTime(tableRows[counter].children[43].children.length>0?tableRows[counter].children[43].children[0].data:'');
	    var Overall_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Overall_Time);


	    var SwimTimePercentageOfOverallTime = Swim_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T1TimePercentageOfOverallTime = T1_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var BikeTimePercentageOfOverallTime = Bike_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T2TimePercentageOfOverallTime = T2_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var RunTimePercentageOfOverallTime = Run_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var AverageRank = (parseInt(Swim_Rnk,10) + parseInt(T1_Rnk,10) + parseInt(T2_Rnk,10) + parseInt(Bike_Rnk,10) + parseInt(Run_Rnk,10) ) / 5.0;


	    //parseTimeToTenthsOfSeconds(T2_Time);
	    //parseTimeToTenthsOfSeconds(Bike_Time);
	    //parseTimeToTenthsOfSeconds(Overall_Time);

	    //printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rank , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rank , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    //	    printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    printRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds,SwimTimePercentageOfOverallTime,T1TimePercentageOfOverallTime,BikeTimePercentageOfOverallTime,T2TimePercentageOfOverallTime,RunTimePercentageOfOverallTime,AverageRank);

// perform comparison to get min max
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
// extra fields	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds);

//	    Stats(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    addToDataArray(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    if(counter<length-1) {console.log(',')} //add comma at end of each object to make valid json
	}
    }
    console.log(']'); //add closing array bracket for json
    computeStatsOnDataArray();
    printMinMax();
    printMinMaxMedianJSON();
//console.log(DataArray["Age"]);

}

function parseRowIntoObjectsChicago(tableRows){
    //  console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log('[');

    for (var counter=1,length=tableRows.length; counter<length;counter++){
	//prevent header columns from being written, 
	//if (true) { //
	if (tableRows[counter].children.length > 15 
	    && tableRows[counter].children[1].children[0].data !== "" 
	    && validateNoNBSP(tableRows[counter].children[5].children[0].children[0].data) !== "") {
	    var Place = validateNoNBSP(tableRows[counter].children[1].children[0].data);
	    var Bib_No = validateNoNBSP(tableRows[counter].children[3].children[0].data);
	    var Name = validateNoNBSP(tableRows[counter].children[5].children[0].children[0].data);
//	    console.log(tableRows[counter].children[5].children[0].children[0].data);

	    if (tableRows[counter].children[7].children[0]) {
		var City = validateNoNBSP(tableRows[counter].children[7].children[0].data);
	    } else { 
		var City = "";
	    }
	    
	    if (tableRows[counter].children[9].children[0]) {
		var State = validateNoNBSP(tableRows[counter].children[9].children[0].data); 
	    } else { 
		var State = "";
	    }

	    if (tableRows[counter].children[11].children[0]) {
		var Age = validateNoNBSP(tableRows[counter].children[11].children[0].data);
	    } else {
		var Age = '-1'; //assume relay
	    }
	    if (tableRows[counter].children[11].children[0]) {
		var Gender = validateNoNBSP(tableRows[counter].children[13].children[0].data);
		} else { 
		    var Gender = 'R'; // assume relay
		}
	    var Age_Group = validateNoNBSP(tableRows[counter].children[15].children[0].data);
	    var Swim_Time = validateNoNBSPTime(tableRows[counter].children[17].children[0].data);
	    var Bike_Time = validateNoNBSPTime(tableRows[counter].children[19].children[0].data);
	    if (tableRows[counter].children[21].children[0]) { 
		var Run_Time = validateNoNBSPTime(tableRows[counter].children[21].children.length>0?tableRows[counter].children[21].children[0].data:''); 
	    } else { 
		var Run_Time= "0";  //must be a string for the time conversion
	    }
	    var Div_Place = validateNoNBSP(tableRows[counter].children[23].children[0].data);
	    var Gender_Place = validateNoNBSP(tableRows[counter].children[25].children[0].data);
	    var Swim_Rnk = validateNoNBSP(tableRows[counter].children[27].children[0].data);
	    var Bike_Rnk = validateNoNBSP(tableRows[counter].children[29].children[0].data);
	    var Bike_Rate_MPH = validateNoNBSP(tableRows[counter].children[31].children.length>0?tableRows[counter].children[31].children[0].data:'');
	    var Run_Rnk = validateNoNBSP(tableRows[counter].children[33].children[0].data||'');
	    var Penalty = validateNoNBSPTime(tableRows[counter].children[35].children[0].data||'');
	    var Overall_Time = validateNoNBSPTime(tableRows[counter].children[37].children.length>0?tableRows[counter].children[37].children[0].data:'');
	    if (tableRows[counter].children[39].children[0]) {
		var T1_Time = validateNoNBSPTime(tableRows[counter].children[39].children[0].data);//validateTransitionTime(validateNoNBSP(tableRows[counter].children[19].children[0].data));
	    } else { 
		var T1_Time  = "0";
	    }

	    if (tableRows[counter].children[41].children[0]) {
		var T2_Time = validateNoNBSPTime(tableRows[counter].children[41].children[0].data||'');//validateTransitionTime(validateNoNBSP(tableRows[counter].children[29].children[0].data||''));
	    } else { 
		var T2_Time = "0" ;
	    }

	    var Swim_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Swim_Time);
	    var T1_Rnk = 0;//validateNoNBSP(tableRows[counter].children[17].children[0].data);
	    var T1_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T1_Time);
	    var Bike_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Bike_Time);
	    var T2_Rnk = 0;//validateNoNBSP(tableRows[counter].children[27].children[0].data||'');
	    var T2_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T2_Time);
	    var Run_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Run_Time);
	    var Run_Pace = "need to calculate";
	    var Overall_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Overall_Time);


	    var SwimTimePercentageOfOverallTime = Swim_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T1TimePercentageOfOverallTime = T1_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var BikeTimePercentageOfOverallTime = Bike_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var T2TimePercentageOfOverallTime = T2_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var RunTimePercentageOfOverallTime = Run_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
	    var AverageRank = (parseInt(Swim_Rnk,10) + parseInt(Bike_Rnk,10) + parseInt(Run_Rnk,10) ) / 3.0; // no t1,t2 rank


	    printChicagoRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds,SwimTimePercentageOfOverallTime,T1TimePercentageOfOverallTime,BikeTimePercentageOfOverallTime,T2TimePercentageOfOverallTime,RunTimePercentageOfOverallTime,AverageRank,City,State);

// perform comparison to get min max
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);

	    addToDataArray(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    if(counter<length-1) {console.log(',')} //add comma at end of each object to make valid json
	}
    }
    console.log(']'); //add closing array bracket for json
    computeStatsOnDataArray();
    printMinMax();
    printMinMaxMedianJSON();
//console.log(DataArray["Age"]);

}

//need an object of each record and then an stats/aggregator object that has max of each field


function DataObject(dataRow) {
    this.Place = validateNoNBSP(dataRow.children[1].children[0].data);
    this.Name = validateNoNBSP(dataRow.children[3].children[0].data);
    this.Bib_No = validateNoNBSP(dataRow.children[5].children[0].data);
    this.Age = validateNoNBSP(dataRow.children[7].children[0].data);
    this.Gender = validateNoNBSP(dataRow.children[9].children[0].data);
    this.Age_Group = validateNoNBSP(dataRow.children[11].children[0].data);
    this.Swim_Rnk = validateNoNBSP(dataRow.children[13].children[0].data);
    this.Swim_Time = validateNoNBSPTime(dataRow.children[15].children[0].data);//validateSwimTime(validateNoNBSP(dataRow.children[15].children[0].data),"750m");
    this.Swim_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Swim_Time);
    this.T1_Rnk = validateNoNBSP(dataRow.children[17].children[0].data);
    this.T1_Time = validateNoNBSPTime(dataRow.children[19].children[0].data);//validateTransitionTime(validateNoNBSP(dataRow.children[19].children[0].data));
    this.T1_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T1_Time);
    this.Bike_Rnk = validateNoNBSP(dataRow.children[21].children[0].data);
    this.Bike_Time = validateNoNBSPTime(dataRow.children[23].children[0].data);//validateBikeTime(validateNoNBSP(dataRow.children[23].children[0].data),"34k");
    this.Bike_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Bike_Time);
    this.Bike_Rate_MPH = validateNoNBSP(dataRow.children[25].children.length>0?dataRow.children[25].children[0].data:'');
    this.T2_Rnk = validateNoNBSP(dataRow.children[27].children[0].data||'');
    this.T2_Time = validateNoNBSPTime(dataRow.children[29].children[0].data||'');//validateTransitionTime(validateNoNBSP(dataRow.children[29].children[0].data||''));
    this.T2_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(T2_Time);
    this.Run_Rnk = validateNoNBSP(dataRow.children[31].children[0].data||'');
    this.Run_Time = validateNoNBSPTime(dataRow.children[33].children.length>0?dataRow.children[33].children[0].data:'');//validateRunTime(validateNoNBSP(dataRow.children[33].children.length>0?dataRow.children[33].children[0].data:''),"5k");
    this.Run_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Run_Time);
    this.Run_Pace = validateNoNBSP(dataRow.children[35].children.length>0?dataRow.children[35].children[0].data:'');
    this.Run_Pace_MinutesPerMile = this.Run_Pace.substring(0,this.Run_Pace.length-2)
    this.Run_Pace_MinutesPerMileInSeconds = parseTimeToSeconds(this.Run_Pace_MinutesPerMile);

    this.Overall_Time = validateNoNBSPTime(dataRow.children[37].children.length>0?dataRow.children[37].children[0].data:'');
    this.Overall_Time_TenthsOfSeconds = parseTimeToTenthsOfSeconds(Overall_Time);


    this.PercentageOfOverallTimeSwim = parseFloat(Swim_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds);
    this.PercentageOfOverallTimeT1 = T1_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeBike = Bike_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeT2 = T2_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeRun = Run_Time_TenthsOfSeconds/Overall_Time_TenthsOfSeconds;
    this.AvgRank = (Swim_Rnk + T1_Rnk + T2_Rnk + Bike_Rnk + Run_Rnk ) / 5.0;

}
DataObject.prototype.print=function() {
    for (item in this){
	if (typeof item !== 'function') {
	    console.log(item+":"+this[item])
	}
    }
}


function StatisticalObject() {

}
StatisticalObject.prototype.print =function(){

}
