var timeHelper = require('./timeHelperFunctions')
, util = require('util');

function TuxedoBrosResult(line) {
// Their results were pretty pristine so I don't see a need to validate the results
// I do know that there were some timing errors but that isn't so horrible
    var splitLine = line.split(',');

if (0===1)
{
for (var i = 0; i<splitLine.length; i++) {
console.log(i+":"+splitLine[i].trim());
}
}
    this.Place = parseInt(splitLine[0]);
//this.Age_Group_Place I suppose I could compute this on the fly..... as it stands I'm not sure how to handle the * since they are overall winners and not age group winners. And you can't just use their overall rank in the case of the women as they typically are slower than the men. And in the case when men and women are interspersed in the top that wouldn't work either.
    this.Name = (splitLine[2]).trim();
//    this.Bib_No = validateNoNBSP(splitLine[]);
    this.Age = parseInt(splitLine[4]);
    this.Gender = splitLine[3];
//    this.Age_Group = validateNoNBSP(splitLine[]);
    this.Swim_Rnk = parseInt(splitLine[6]);
    this.Swim_Time = (splitLine[5]).trim();
    this.Swim_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Swim_Time);
    this.T1_Rnk = parseInt(splitLine[8]);
    this.T1_Time = (splitLine[7]).trim();
    this.T1_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.T1_Time);
    this.Bike_Rnk = parseInt(splitLine[11]);
    this.Bike_Time = (splitLine[9]).trim();
    this.Bike_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Bike_Time);
    this.Bike_Rate_MPH = (splitLine[10]).trim();
    this.T2_Rnk = parseInt(splitLine[13]);
    this.T2_Time = (splitLine[12]).trim();
    this.T2_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.T2_Time);
    this.Run_Rnk = parseInt(splitLine[16]);
    this.Run_Time = (splitLine[14]).trim();
    this.Run_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Run_Time);
//    this.Run_Pace = (splitLine[15]).trim();
    this.Run_Pace_MinutesPerMile = (splitLine[15]).trim(); //this.Run_Pace.substring(0,this.Run_Pace.length-2)
    this.Run_Pace_MinutesPerMileInSeconds = timeHelper.parseTimeToSeconds(this.Run_Pace_MinutesPerMile);
    this.Run_Pace_MinutesPerMileInTenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Run_Pace_MinutesPerMile);

    this.Penalty_Time = (splitLine[17]).trim();
    this.Penalty_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Penalty_Time);

    this.Overall_Time = (splitLine[18]).trim();
    this.Overall_Time_TenthsOfSeconds = timeHelper.parseTimeToTenthsOfSeconds(this.Overall_Time);


    this.PercentageOfOverallTimeSwim = parseFloat(this.Swim_Time_TenthsOfSeconds/this.Overall_Time_TenthsOfSeconds);
    this.PercentageOfOverallTimeT1 = this.T1_Time_TenthsOfSeconds/this.Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeBike = this.Bike_Time_TenthsOfSeconds/this.Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeT2 = this.T2_Time_TenthsOfSeconds/this.Overall_Time_TenthsOfSeconds;
    this.PercentageOfOverallTimeRun = this.Run_Time_TenthsOfSeconds/this.Overall_Time_TenthsOfSeconds;
    this.AvgRank = (this.Swim_Rnk + this.T1_Rnk + this.T2_Rnk + this.Bike_Rnk + this.Run_Rnk ) / 5.0;

}

TuxedoBrosResult.prototype.print=function() {
    for (item in this){
	if (typeof item !== 'function') {
	    console.log(item+":"+this[item])
	}
    }
}

TuxedoBrosResult.prototype.JSON=function() {
//to double these variables, I copied the variable setting from above, did a query-replace-regexp of =.* to nothing, then I copied the variable names and duplicated them in a temp file. I then used the command line 'sort' command to stick the two sets of variables next to each other.

//console.log("{ Age  :"+this.Age+", AvgRank  :"+this.AvgRank+", Bike_Rate_MPH  :'"+this.Bike_Rate_MPH+"', Bike_Rnk  :"+this.Bike_Rnk+", Bike_Time  :'"+this.Bike_Time+"', Bike_Time_TenthsOfSeconds  :'"+this.Bike_Time_TenthsOfSeconds+"', Gender  :'"+this.Gender+"', Name  :'"+this.Name+"', Overall_Time  :'"+this.Overall_Time+"', Overall_Time_TenthsOfSeconds  :"+this.Overall_Time_TenthsOfSeconds+", Penalty_Time  :'"+this.Penalty_Time+"', Penalty_Time_TenthsOfSeconds  :"+this.Penalty_Time_TenthsOfSeconds+", PercentageOfOverallTimeBike  :"+this.PercentageOfOverallTimeBike+", PercentageOfOverallTimeRun  :"+this.PercentageOfOverallTimeRun+", PercentageOfOverallTimeSwim  :"+this.PercentageOfOverallTimeSwim+", PercentageOfOverallTimeT1  :"+this.PercentageOfOverallTimeT1+", PercentageOfOverallTimeT2  :"+this.PercentageOfOverallTimeT2+/*", Run_Pace  :'"+this.Run_Pace+"',*/+", Run_Pace_MinutesPerMile  :"+this.Run_Pace_MinutesPerMile+", Run_Pace_MinutesPerMileInSeconds  :"+this.Run_Pace_MinutesPerMileInSeconds+", Run_Rnk  :"+this.Run_Rnk+", Run_Time  :'"+this.Run_Time+"', Run_Time_TenthsOfSeconds  :"+this.Run_Time_TenthsOfSeconds+", Swim_Rnk  :"+this.Swim_Rnk+", Swim_Time  :'"+this.Swim_Time+"', Swim_Time_TenthsOfSeconds  :"+this.Swim_Time_TenthsOfSeconds+", T1_Rnk  :"+this.T1_Rnk+", T1_Time  :'"+this.T1_Time+"', T1_Time_TenthsOfSeconds  :"+this.T1_Time_TenthsOfSeconds+", T2_Rnk  :"+this.T2_Rnk+", T2_Time :'"+this.T2_Time+"', T2_Time_TenthsOfSeconds :"+this.T2_Time_TenthsOfSeconds+"}");
console.log("{ Age  :"+this.Age+", AvgRank  :"+this.AvgRank+", Bike_Rate_MPH  :'"+this.Bike_Rate_MPH+"', Bike_Rnk  :"+this.Bike_Rnk+", Bike_Time  :'"+this.Bike_Time+"', Bike_Time_TenthsOfSeconds  :'"+this.Bike_Time_TenthsOfSeconds+"', Gender  :'"+this.Gender+"', Name  :'"+this.Name+"', Overall_Time  :'"+this.Overall_Time+"', Overall_Time_TenthsOfSeconds  :"+this.Overall_Time_TenthsOfSeconds+", Penalty_Time  :'"+this.Penalty_Time+"', Penalty_Time_TenthsOfSeconds  :"+this.Penalty_Time_TenthsOfSeconds+", PercentageOfOverallTimeBike  :"+this.PercentageOfOverallTimeBike+", PercentageOfOverallTimeRun  :"+this.PercentageOfOverallTimeRun+", PercentageOfOverallTimeSwim  :"+this.PercentageOfOverallTimeSwim+", PercentageOfOverallTimeT1  :"+this.PercentageOfOverallTimeT1+", PercentageOfOverallTimeT2  :"+this.PercentageOfOverallTimeT2+", Run_Pace_MinutesPerMile  :'"+this.Run_Pace_MinutesPerMile+"', Run_Pace_MinutesPerMileInSeconds  :"+this.Run_Pace_MinutesPerMileInSeconds+", Run_Pace_MinutesPerMileInTenthsOfSeconds  :"+this.Run_Pace_MinutesPerMileInTenthsOfSeconds+", Run_Rnk  :"+this.Run_Rnk+", Run_Time  :'"+this.Run_Time+"', Run_Time_TenthsOfSeconds  :"+this.Run_Time_TenthsOfSeconds+", Swim_Rnk  :"+this.Swim_Rnk+", Swim_Time  :'"+this.Swim_Time+"', Swim_Time_TenthsOfSeconds  :"+this.Swim_Time_TenthsOfSeconds+", T1_Rnk  :"+this.T1_Rnk+", T1_Time  :'"+this.T1_Time+"', T1_Time_TenthsOfSeconds  :"+this.T1_Time_TenthsOfSeconds+", T2_Rnk  :"+this.T2_Rnk+", T2_Time :'"+this.T2_Time+"', T2_Time_TenthsOfSeconds :"+this.T2_Time_TenthsOfSeconds+"}");

// console.log("{ 
//     Age 
//     :"+this.Age+",
//     AvgRank 
//     :"+this.AvgRank+",
//     Bike_Rate_MPH 
//     :"+this.Bike_Rate_MPH+",
//     Bike_Rnk 
//     :"+this.Bike_Rnk+",
//     Bike_Time 
//     :"+this.Bike_Time+",
//     Bike_Time_TenthsOfSeconds 
//     :'"+this.Bike_Time_TenthsOfSeconds+"',
//     Gender 
//     :"+this.Gender+",
//     Name 
//     :"+this.Name+",
//     Overall_Time 
//     :"+this.Overall_Time+",
//     Overall_Time_TenthsOfSeconds 
//     :'"+this.Overall_Time_TenthsOfSeconds+"',
//     Penalty_Time 
//     :'"+this.Penalty_Time+"',
//     Penalty_Time_TenthsOfSeconds 
//     :"+this.Penalty_Time_TenthsOfSeconds+",
//     this.PercentageOfOverallTimeBike 
//     :"+this.PercentageOfOverallTimeBike+",
//     PercentageOfOverallTimeRun 
//     :"+this.PercentageOfOverallTimeRun+",
//     PercentageOfOverallTimeSwim 
//     :"+this.PercentageOfOverallTimeSwim+",
//     PercentageOfOverallTimeT1 
//     :"+this.PercentageOfOverallTimeT1+",
//     PercentageOfOverallTimeT2 
//     :"+this.PercentageOfOverallTimeT2+",
//     Run_Pace 
//     :'"+this.Run_Pace+"',
//     Run_Pace_MinutesPerMile 
//     :"+this.Run_Pace_MinutesPerMile+",
//     Run_Pace_MinutesPerMileInSeconds 
//     :"+this.Run_Pace_MinutesPerMileInSeconds+",
//     Run_Rnk 
//     :"+this.Run_Rnk+",
//     Run_Time 
//     :'"+this.Run_Time+"',
//     Run_Time_TenthsOfSeconds 
//     :"+this.Run_Time_TenthsOfSeconds+",
//     Swim_Rnk 
//     :"+this.Swim_Rnk+",
//     Swim_Time 
//     :'"+this.Swim_Time+"',
//     Swim_Time_TenthsOfSeconds 
//     :"+this.Swim_Time_TenthsOfSeconds+",
//     T1_Rnk 
//     :"+this.T1_Rnk+",
//     T1_Time 
//     :'"+this.T1_Time+"',
//     T1_Time_TenthsOfSeconds 
//     :"+this.T1_Time_TenthsOfSeconds+",
//     T2_Rnk 
//     :"+this.T2_Rnk+",
//     T2_Time 
//     :'"+this.T2_Time+"',
//     T2_Time_TenthsOfSeconds 
//     :"+this.T2_Time_TenthsOfSeconds+"}"

}

TuxedoBrosResult.prototype.JSONstring=function() {
var jsonString = util.format("{ Age  :"+this.Age+", AvgRank  :"+this.AvgRank+", Bike_Rate_MPH  :'"+this.Bike_Rate_MPH+"', Bike_Rnk  :"+this.Bike_Rnk+", Bike_Time  :'"+this.Bike_Time+"', Bike_Time_TenthsOfSeconds  :'"+this.Bike_Time_TenthsOfSeconds+"', Gender  :'"+this.Gender+"', Name  :'"+this.Name+"', Overall_Time  :'"+this.Overall_Time+"', Overall_Time_TenthsOfSeconds  :"+this.Overall_Time_TenthsOfSeconds+", Penalty_Time  :'"+this.Penalty_Time+"', Penalty_Time_TenthsOfSeconds  :"+this.Penalty_Time_TenthsOfSeconds+", PercentageOfOverallTimeBike  :"+this.PercentageOfOverallTimeBike+", PercentageOfOverallTimeRun  :"+this.PercentageOfOverallTimeRun+", PercentageOfOverallTimeSwim  :"+this.PercentageOfOverallTimeSwim+", PercentageOfOverallTimeT1  :"+this.PercentageOfOverallTimeT1+", PercentageOfOverallTimeT2  :"+this.PercentageOfOverallTimeT2+", Run_Pace_MinutesPerMile  :'"+this.Run_Pace_MinutesPerMile+"', Run_Pace_MinutesPerMileInSeconds  :"+this.Run_Pace_MinutesPerMileInSeconds+", Run_Pace_MinutesPerMileInTenthsOfSeconds  :"+this.Run_Pace_MinutesPerMileInTenthsOfSeconds+", Run_Rnk  :"+this.Run_Rnk+", Run_Time  :'"+this.Run_Time+"', Run_Time_TenthsOfSeconds  :"+this.Run_Time_TenthsOfSeconds+", Swim_Rnk  :"+this.Swim_Rnk+", Swim_Time  :'"+this.Swim_Time+"', Swim_Time_TenthsOfSeconds  :"+this.Swim_Time_TenthsOfSeconds+", T1_Rnk  :"+this.T1_Rnk+", T1_Time  :'"+this.T1_Time+"', T1_Time_TenthsOfSeconds  :"+this.T1_Time_TenthsOfSeconds+", T2_Rnk  :"+this.T2_Rnk+", T2_Time :'"+this.T2_Time+"', T2_Time_TenthsOfSeconds :"+this.T2_Time_TenthsOfSeconds+"}");

return jsonString;
}

module.exports = TuxedoBrosResult
