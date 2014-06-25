var request = require('request')
, cheerio = require('cheerio')
, fs = require('fs');
//, sqlite = require('sqlite3');

var Min_Sentinel = 9999999;
var Max_Sentinel = 0;

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

var url = "http://www.speedy-feet.com/races/2014/0618/cc2-tri.htm" //the DNFs at the end I think are bc people only got one lap of the run in before the skies opened and they made them come in.
var CC2014Tri1="http://www.speedy-feet.com/races/2014/0604/cc1_ov.htm" //this was a super sprint or something bc the times are much lower
request (url, function(err, resp, body) {
    $ = cheerio.load(body,{normalizeWhitespace:true});
    var tableRows=$('tr')
//    console.log( typeof tableRows );
    parseRowIntoObjects(tableRows);
});

function parseTimeToTenthsOfSeconds(time){
    console.log(time);

    var splitTime=time.split(":");
    var TenthsOfSecondsFromHour=0,
    TenthsOfSecondsFromMinute=0,
    TenthsOfSecondsFromSecond=0,
    TotalTenthsOfSeconds=0;

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
console.log(TotalTenthsOfSeconds);
//return (TotalTenthsOfSeconds);
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
function minMaxCompare(obj,value){
console.log(obj)
console.log(value)

if (value !== '') {
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
MinMax.Swim_Time=minMaxCompare(MinMax.Swim_Time,st);
MinMax.T1_Time=minMaxCompare(MinMax.T1_Time,t1t);

MinMax.Bike_Time=minMaxCompare(MinMax.Bike_Time,bt);
MinMax.Bike_Rate_MPH=minMaxCompare(MinMax.Bike_Rate_MPH,brt);

MinMax.T2_Time=minMaxCompare(MinMax.T2_Time,t2t);
MinMax.Run_Time=minMaxCompare(MinMax.Run_Time,rt);
MinMax.Run_Rate=minMaxCompare(MinMax.Run_Rate,rp);
MinMax.Overall_Time=minMaxCompare(MinMax.Overall_Time,ot);

//MinMax.=minMaxCompare(MinMax.,);


}

function printRowData(p,n,b,a,g,ag,sw,st,t1r,t1t,br,bt,brt,t2r,t2t,rr,rt,rp,ot){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log(p+" : "+n+" : "+b+" : "+a+" : "+g+" : "+ag+" : "+sw+" : "+st+" : "+t1r+" : "+t1t+" : "+br+" : "+bt+" : "+brt+" : "+t2r+" : "+t2t+" : "+rr+" : "+rt+" : "+rp+" : "+ot);
}
function printRowDataJSON(p,n,b,a,g,ag,sw,st,t1r,t1t,br,bt,brt,t2r,t2t,rr,rt,rp,ot){
    //console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
    console.log("{Place:"+p+", Name:'"+n+"', Bib_No:"+b+", Age:"+a+", Gender:'"+g+"', Age_Group:'"+ag+"', Swim_Rnk:"+sw+", Swim_Time:'"+st+"', T1_Rnk:"+t1r+", T1_Time:'"+t1t+"', Bike_Rnk:"+br+", Bike_Time:'"+bt+"', Bike_Rate_MPH:"+brt+", T2_Rnk:"+t2r+", T2_Time:'"+t2t+"', Run_Rnk:"+rr+", Run_Time:'"+rt+"', Run_Pace:'"+rp+"', Overall_Time:'"+ot+"'}");
}

function validateNoNBSP(field){
//&nbsp; shows up as 0xc2a0 in cheerio. adding the {normalizeWhitespace:true}); solved that problem and now &nbsp; shows up as simply a space/' '
//return field!==0xc2a0?field:'';
return field!==' '?field:'';
}

function parseRowIntoObjects(tableRows){
  //  console.log("Place : Name: Bib_No : Age : Gender : Age_Group : Swim_Rnk : Swim_Time : T1_Rank : T1_Time : Bike_Rnk : Bike_Time : Bike_Rate_MPH : T2_Rank : T2_Time : Run_Rnk : Run_Time : Run_Pace : Overall_Time")
console.log('[');

    for (var counter=4,length=tableRows.length; counter<length;counter++){
//    for (var counter=74,length=tableRows.length; counter<84/*length*/;counter++){
	//we need to skip the first few lines since they won't have the right number of children etc. line=3 is the header of categories of the columns

//	console.log("---");
	//console.log(tableRows[counter].children[1].children[0].data); //every other child is a data tag. it goes data,type,data,type,....
	//console.log(tableRows[counter].children[3].children[0].data);
	//console.log(tableRows[counter].children[3].children[0].data);
//	console.log(tableRows[counter].children);

	//prevent header columns from being written, 
	if (tableRows[counter].children.length > 15 && tableRows[counter].children[1].children[0].data !== "Place") {
	    var Place = validateNoNBSP(tableRows[counter].children[1].children[0].data);
	    var Name = validateNoNBSP(tableRows[counter].children[3].children[0].data);
	    var Bib_No = validateNoNBSP(tableRows[counter].children[5].children[0].data);
	    var Age = validateNoNBSP(tableRows[counter].children[7].children[0].data);
	    var Gender = validateNoNBSP(tableRows[counter].children[9].children[0].data);
	    var Age_Group = validateNoNBSP(tableRows[counter].children[11].children[0].data);
	    var Swim_Rnk = validateNoNBSP(tableRows[counter].children[13].children[0].data);
	    var Swim_Time = validateNoNBSP(tableRows[counter].children[15].children[0].data);
	    var T1_Rnk = validateNoNBSP(tableRows[counter].children[17].children[0].data);
	    var T1_Time = validateNoNBSP(tableRows[counter].children[19].children[0].data);
	    var Bike_Rnk = validateNoNBSP(tableRows[counter].children[21].children[0].data);
	    var Bike_Time = validateNoNBSP(tableRows[counter].children[23].children[0].data);
	    var Bike_Rate_MPH = validateNoNBSP(tableRows[counter].children[25].children.length>0?tableRows[counter].children[25].children[0].data:'');
	    var T2_Rnk = validateNoNBSP(tableRows[counter].children[27].children[0].data||'');
	    var T2_Time = validateNoNBSP(tableRows[counter].children[29].children[0].data||'');
	    var Run_Rnk = validateNoNBSP(tableRows[counter].children[31].children[0].data||'');
	    var Run_Time = validateNoNBSP(tableRows[counter].children[33].children.length>0?tableRows[counter].children[33].children[0].data:0);
	    var Run_Pace = validateNoNBSP(tableRows[counter].children[35].children.length>0?tableRows[counter].children[35].children[0].data:0);
	    var Overall_Time = validateNoNBSP(tableRows[counter].children[37].children.length>0?tableRows[counter].children[37].children[0].data:0);

//parseTimeToTenthsOfSeconds(T2_Time);
//parseTimeToTenthsOfSeconds(Bike_Time);
//parseTimeToTenthsOfSeconds(Overall_Time);



	    //printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rank , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rank , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
//	    printRowData(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    printRowDataJSON(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
	    Compare(Place , Name, Bib_No , Age , Gender , Age_Group , Swim_Rnk , Swim_Time , T1_Rnk , T1_Time , Bike_Rnk , Bike_Time , Bike_Rate_MPH , T2_Rnk , T2_Time , Run_Rnk , Run_Time , Run_Pace , Overall_Time);
if(counter<length-1) {console.log(',')}
	}


    }
console.log(']');
printMinMax();
}

//need an object of each record and then an stats/aggregator object that has max of each field
