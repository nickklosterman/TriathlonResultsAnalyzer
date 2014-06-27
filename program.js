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
//	console.log(Object.getOwnPropertyNames(item));
	computeStat(DataArray[item])
    }
//	computeStat(DataArray["Age"])
}

function computeStat(item) {
//console.log(typeof item);
//console.log(item);
//    if (typeof item === 'Array'){
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
//	console.log(Object.getOwnPropertyNames(item)+":"+sum/length);
	console.log(sum+":"+sum/length);
    }
}

var url = "http://www.speedy-feet.com/races/2014/0618/cc2-tri.htm" //the DNFs at the end I think are bc people only got one lap of the run in before the skies opened and they made them come in.
var CC2014Tri1="http://www.speedy-feet.com/races/2014/0604/cc1_ov.htm" //this was a super sprint or something bc the times are much lower
if ( false ) {
request (url, function(err, resp, body) {
    $ = cheerio.load(body,{normalizeWhitespace:true});
    var tableRows=$('tr')
    //    console.log( typeof tableRows );
    parseRowIntoObjects(tableRows);
});
}
if (true) {
$ = cheerio.load(fs.readFileSync("cc2-tri.htm",'utf8'),{normalizeWhitespace:true});
    var tableRows=$('tr')
    //    console.log( typeof tableRows );
    parseRowIntoObjects(tableRows);
}

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
//    console.log(TotalTenthsOfSeconds);
    return (TotalTenthsOfSeconds);
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
function printRowDataJSON(p,n,b,a,g,ag,sw,st,stt,t1r,t1t,t1tt,br,bt,btt,brt,t2r,t2t,t2tt,rr,rt,rtt,rp,ot,ott){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    var place = isNaN(p)?"'"+p+"'":p;
    var bike_rate_mph = isNaN(brt)?undefined:brt;
    bike_rate_mph = bike_rate_mph===''?undefined:bike_rate_mph;
    var run_rank = rr==='DQ'?"'"+rr+"'":rr;
    console.log("{Place:"+place+", Name:'"+n+"', Bib_No:"+b+", Age:"+a+", Gender:'"+g+"', Age_Group:'"+ag+"', Swim_Rnk:"+sw+", Swim_Time:'"+st+"', Swim_Time_TenthsOfSeconds:"+stt+", T1_Rnk:"+t1r+", T1_Time:'"+t1t+"', T1_Time_TenthsOfSeconds:"+t1tt+", Bike_Rnk:"+br+", Bike_Time:'"+bt+"', Bike_Time_TenthsOfSeconds:"+btt+", Bike_Rate_MPH:"+bike_rate_mph+", T2_Rnk:"+t2r+", T2_Time:'"+t2t+"', T2_Time_TenthsOfSeconds:"+t2tt+", Run_Rnk:"+run_rank+", Run_Time:'"+rt+"', Run_Time_TenthsOfSeconds:"+rtt+", Run_Pace:'"+rp+"', Overall_Time:'"+ot+"', Overall_Time_TenthsOfSeconds:"+ott+"}");
}

function validateNoNBSPTime(field){
    return field!==' '?field:'';
}

function validateNoNBSP(field){
    //&nbsp; shows up as 0xc2a0 in cheerio. adding the {normalizeWhitespace:true}); solved that problem and now &nbsp; shows up as simply a space/' '
    //return field!==0xc2a0?field:'';
    return field!==' '?field:undefined;
//    return field!==' '?field:'';
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
	    var Age = validateNoNBSP(tableRows[counter].children[7].children[0].data);
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

	    //parseTimeToTenthsOfSeconds(T2_Time);
	    //parseTimeToTenthsOfSeconds(Bike_Time);
	    //parseTimeToTenthsOfSeconds(Overall_Time);

	    //printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rank , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rank , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    //	    printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    printRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds);

// perform comparison to get min max
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
// extra fields	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , Swim_Time_TenthsOfSeconds, T1_Rnk , T1_Time , T1_Time_TenthsOfSeconds, Bike_Rnk , Bike_Time , Bike_Time_TenthsOfSeconds, Bike_Rate_MPH , T2_Rnk , T2_Time ,T2_Time_TenthsOfSeconds, Run_Rnk , Run_Time , Run_Time_TenthsOfSeconds, Run_Pace , Overall_Time, Overall_Time_TenthsOfSeconds);

//	    Stats(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    addToDataArray(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    if(counter<length-1) {console.log(',')} //add comma at end of each object to make valid json
	}
    }
    console.log(']'); //add closing array bracket for json
    printMinMax();
//console.log(DataArray["Age"]);
    computeStatsOnDataArray();
}

//need an object of each record and then an stats/aggregator object that has max of each field
