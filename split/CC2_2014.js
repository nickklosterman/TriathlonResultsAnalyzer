      function showStats (select) {
      var selectedOption = select.options[select.selectedIndex];
//      alert ("The selected option is " + selectedOption.value);
      plot(selectedOption.value);
      }

// ugg to be jaon each field must be in quotes : ie. "Age":23, "Bib_No":12.... and not Age:23, Bib_No:12
// var data3;
// d3.json("CC2_2014.json", function (error,json) {
// if (error) return console.warn(error);
// data3=json;
// console.log(data2)
//       plot("Age");
// });



      var data2=[
      {Place:1, Name:'Cody Bohachek', Bib_No:119, Age:28, Gender:'M', Age_Group:'1 25-29', Swim_Rnk:4, Swim_Time:'12:21.2', Swim_Time_TenthsOfSeconds:7412, T1_Rnk:2, T1_Time:'0:21.2', T1_Time_TenthsOfSeconds:212, Bike_Rnk:2, Bike_Time:'52:01.6', Bike_Time_TenthsOfSeconds:31216, Bike_Rate_MPH:23.9, T2_Rnk:1, T2_Time:'0:19.2', T2_Time_TenthsOfSeconds:192, Run_Rnk:3, Run_Time:'19:47.7', Run_Time_TenthsOfSeconds:11877, Run_Pace:'5:49/M', Overall_Time:'1:24:51.1', Overall_Time_TenthsOfSeconds:50911}
      ,
      {Place:2, Name:'Christopher Cain', Bib_No:10, Age:33, Gender:'M', Age_Group:'1 30-34', Swim_Rnk:11, Swim_Time:'14:00.5', Swim_Time_TenthsOfSeconds:8405, T1_Rnk:18, T1_Time:'0:45.6', T1_Time_TenthsOfSeconds:456, Bike_Rnk:1, Bike_Time:'51:45.9', Bike_Time_TenthsOfSeconds:31059, Bike_Rate_MPH:24.0, T2_Rnk:4, T2_Time:'0:22.7', T2_Time_TenthsOfSeconds:227, Run_Rnk:7, Run_Time:'21:28.1', Run_Time_TenthsOfSeconds:12881, Run_Pace:'6:19/M', Overall_Time:'1:28:22.9', Overall_Time_TenthsOfSeconds:53029}
      ,
      {Place:3, Name:'Jeffrey Coudron', Bib_No:14, Age:44, Gender:'M', Age_Group:'1 40-44', Swim_Rnk:6, Swim_Time:'13:17.7', Swim_Time_TenthsOfSeconds:7977, T1_Rnk:39, T1_Time:'1:01.7', T1_Time_TenthsOfSeconds:617, Bike_Rnk:3, Bike_Time:'52:52.5', Bike_Time_TenthsOfSeconds:31725, Bike_Rate_MPH:23.5, T2_Rnk:16, T2_Time:'0:33.9', T2_Time_TenthsOfSeconds:339, Run_Rnk:5, Run_Time:'21:16.0', Run_Time_TenthsOfSeconds:12760, Run_Pace:'6:15/M', Overall_Time:'1:29:02.0', Overall_Time_TenthsOfSeconds:53420}
      ,
      {Place:4, Name:'Sean Williams', Bib_No:86, Age:31, Gender:'M', Age_Group:'2 30-34', Swim_Rnk:16, Swim_Time:'14:38.7', Swim_Time_TenthsOfSeconds:8787, T1_Rnk:11, T1_Time:'0:38.0', T1_Time_TenthsOfSeconds:380, Bike_Rnk:4, Bike_Time:'53:12.5', Bike_Time_TenthsOfSeconds:31925, Bike_Rate_MPH:23.3, T2_Rnk:6, T2_Time:'0:23.7', T2_Time_TenthsOfSeconds:237, Run_Rnk:10, Run_Time:'21:39.9', Run_Time_TenthsOfSeconds:12999, Run_Pace:'6:22/M', Overall_Time:'1:30:33.0', Overall_Time_TenthsOfSeconds:54330}
      ,
      {Place:5, Name:'Ryan Hoff', Bib_No:118, Age:27, Gender:'M', Age_Group:'2 25-29', Swim_Rnk:12, Swim_Time:'14:02.0', Swim_Time_TenthsOfSeconds:8420, T1_Rnk:30, T1_Time:'0:51.1', T1_Time_TenthsOfSeconds:511, Bike_Rnk:6, Bike_Time:'54:01.6', Bike_Time_TenthsOfSeconds:32416, Bike_Rate_MPH:23.0, T2_Rnk:10, T2_Time:'0:29.5', T2_Time_TenthsOfSeconds:295, Run_Rnk:4, Run_Time:'21:11.1', Run_Time_TenthsOfSeconds:12711, Run_Pace:'6:14/M', Overall_Time:'1:30:35.5', Overall_Time_TenthsOfSeconds:54355}
      ,
      {Place:6, Name:'Joshua Bozue', Bib_No:116, Age:29, Gender:'M', Age_Group:'3 25-29', Swim_Rnk:20, Swim_Time:'15:12.3', Swim_Time_TenthsOfSeconds:9123, T1_Rnk:37, T1_Time:'0:58.6', T1_Time_TenthsOfSeconds:586, Bike_Rnk:7, Bike_Time:'54:25.8', Bike_Time_TenthsOfSeconds:32658, Bike_Rate_MPH:22.8, T2_Rnk:42, T2_Time:'0:48.3', T2_Time_TenthsOfSeconds:483, Run_Rnk:11, Run_Time:'21:51.4', Run_Time_TenthsOfSeconds:13114, Run_Pace:'6:26/M', Overall_Time:'1:33:16.6', Overall_Time_TenthsOfSeconds:55966}
      ,
      {Place:7, Name:'David Steiner', Bib_No:107, Age:48, Gender:'M', Age_Group:'1 45-49', Swim_Rnk:13, Swim_Time:'14:04.5', Swim_Time_TenthsOfSeconds:8445, T1_Rnk:42, T1_Time:'1:02.9', T1_Time_TenthsOfSeconds:629, Bike_Rnk:5, Bike_Time:'53:51.5', Bike_Time_TenthsOfSeconds:32315, Bike_Rate_MPH:23.1, T2_Rnk:26, T2_Time:'0:40.1', T2_Time_TenthsOfSeconds:401, Run_Rnk:28, Run_Time:'24:00.8', Run_Time_TenthsOfSeconds:14408, Run_Pace:'7:04/M', Overall_Time:'1:33:40.0', Overall_Time_TenthsOfSeconds:56200}
      ,
      {Place:8, Name:'Lee Wise', Bib_No:71, Age:23, Gender:'M', Age_Group:'1 20-24', Swim_Rnk:7, Swim_Time:'13:35.6', Swim_Time_TenthsOfSeconds:8156, T1_Rnk:7, T1_Time:'0:35.8', T1_Time_TenthsOfSeconds:358, Bike_Rnk:15, Bike_Time:'57:12.3', Bike_Time_TenthsOfSeconds:34323, Bike_Rate_MPH:21.7, T2_Rnk:9, T2_Time:'0:28.8', T2_Time_TenthsOfSeconds:288, Run_Rnk:13, Run_Time:'21:59.2', Run_Time_TenthsOfSeconds:13192, Run_Pace:'6:28/M', Overall_Time:'1:33:51.9', Overall_Time_TenthsOfSeconds:56319}
      ,
      {Place:9, Name:'Brandon Hough', Bib_No:111, Age:24, Gender:'M', Age_Group:'2 20-24', Swim_Rnk:26, Swim_Time:'16:10.0', Swim_Time_TenthsOfSeconds:9700, T1_Rnk:22, T1_Time:'0:46.9', T1_Time_TenthsOfSeconds:469, Bike_Rnk:19, Bike_Time:'58:46.2', Bike_Time_TenthsOfSeconds:35262, Bike_Rate_MPH:21.1, T2_Rnk:2, T2_Time:'0:19.9', T2_Time_TenthsOfSeconds:199, Run_Rnk:1, Run_Time:'19:02.1', Run_Time_TenthsOfSeconds:11421, Run_Pace:'5:36/M', Overall_Time:'1:35:05.3', Overall_Time_TenthsOfSeconds:57053}
      ,
      {Place:10, Name:'Andy Johnson', Bib_No:29, Age:43, Gender:'M', Age_Group:'2 40-44', Swim_Rnk:28, Swim_Time:'16:40.7', Swim_Time_TenthsOfSeconds:10007, T1_Rnk:4, T1_Time:'0:30.8', T1_Time_TenthsOfSeconds:308, Bike_Rnk:18, Bike_Time:'58:37.2', Bike_Time_TenthsOfSeconds:35172, Bike_Rate_MPH:21.2, T2_Rnk:13, T2_Time:'0:31.8', T2_Time_TenthsOfSeconds:318, Run_Rnk:2, Run_Time:'19:31.6', Run_Time_TenthsOfSeconds:11716, Run_Pace:'5:44/M', Overall_Time:'1:35:52.2', Overall_Time_TenthsOfSeconds:57522}
      ,
      {Place:11, Name:'Philip Minutolo', Bib_No:40, Age:26, Gender:'M', Age_Group:'4 25-29', Swim_Rnk:17, Swim_Time:'14:43.6', Swim_Time_TenthsOfSeconds:8836, T1_Rnk:33, T1_Time:'0:53.9', T1_Time_TenthsOfSeconds:539, Bike_Rnk:11, Bike_Time:'56:42.4', Bike_Time_TenthsOfSeconds:34024, Bike_Rate_MPH:21.9, T2_Rnk:47, T2_Time:'0:50.5', T2_Time_TenthsOfSeconds:505, Run_Rnk:22, Run_Time:'23:34.8', Run_Time_TenthsOfSeconds:14148, Run_Pace:'6:56/M', Overall_Time:'1:36:45.5', Overall_Time_TenthsOfSeconds:58055}
      ,
      {Place:12, Name:'Brian Denaro', Bib_No:89, Age:36, Gender:'M', Age_Group:'1 35-39', Swim_Rnk:3, Swim_Time:'12:18.7', Swim_Time_TenthsOfSeconds:7387, T1_Rnk:50, T1_Time:'1:11.9', T1_Time_TenthsOfSeconds:719, Bike_Rnk:39, Bike_Time:'1:01:23.2', Bike_Time_TenthsOfSeconds:36832, Bike_Rate_MPH:20.2, T2_Rnk:19, T2_Time:'0:36.0', T2_Time_TenthsOfSeconds:360, Run_Rnk:14, Run_Time:'22:07.2', Run_Time_TenthsOfSeconds:13272, Run_Pace:'6:30/M', Overall_Time:'1:37:37.2', Overall_Time_TenthsOfSeconds:58572}
      ,
      {Place:13, Name:'Daniel Lehtonen', Bib_No:34, Age:43, Gender:'M', Age_Group:'3 40-44', Swim_Rnk:46, Swim_Time:'18:09.4', Swim_Time_TenthsOfSeconds:10894, T1_Rnk:34, T1_Time:'0:54.3', T1_Time_TenthsOfSeconds:543, Bike_Rnk:8, Bike_Time:'54:36.9', Bike_Time_TenthsOfSeconds:32769, Bike_Rate_MPH:22.7, T2_Rnk:38, T2_Time:'0:45.8', T2_Time_TenthsOfSeconds:458, Run_Rnk:19, Run_Time:'23:27.6', Run_Time_TenthsOfSeconds:14076, Run_Pace:'6:54/M', Overall_Time:'1:37:54.2', Overall_Time_TenthsOfSeconds:58742}
      ,
      {Place:14, Name:'Alexander Bruns', Bib_No:9, Age:24, Gender:'M', Age_Group:'3 20-24', Swim_Rnk:18, Swim_Time:'15:09.7', Swim_Time_TenthsOfSeconds:9097, T1_Rnk:40, T1_Time:'1:02.7', T1_Time_TenthsOfSeconds:627, Bike_Rnk:22, Bike_Time:'59:25.1', Bike_Time_TenthsOfSeconds:35651, Bike_Rate_MPH:20.9, T2_Rnk:55, T2_Time:'0:58.1', T2_Time_TenthsOfSeconds:581, Run_Rnk:6, Run_Time:'21:21.2', Run_Time_TenthsOfSeconds:12812, Run_Pace:'6:17/M', Overall_Time:'1:37:56.9', Overall_Time_TenthsOfSeconds:58769}
      ,
      {Place:15, Name:'Mike Mullins', Bib_No:98, Age:37, Gender:'M', Age_Group:'2 35-39', Swim_Rnk:36, Swim_Time:'17:22.9', Swim_Time_TenthsOfSeconds:10429, T1_Rnk:106, T1_Time:'58:04.9', T1_Time_TenthsOfSeconds:34849, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:0.21, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:15, Run_Time:'22:49.5', Run_Time_TenthsOfSeconds:13695, Run_Pace:'6:43/M', Overall_Time:'1:37:57.0', Overall_Time_TenthsOfSeconds:58770}
      ,
      {Place:16, Name:'Brad Deaton', Bib_No:93, Age:33, Gender:'M', Age_Group:'3 30-34', Swim_Rnk:47, Swim_Time:'18:11.8', Swim_Time_TenthsOfSeconds:10918, T1_Rnk:29, T1_Time:'0:50.7', T1_Time_TenthsOfSeconds:507, Bike_Rnk:9, Bike_Time:'54:40.5', Bike_Time_TenthsOfSeconds:32805, Bike_Rate_MPH:22.7, T2_Rnk:29, T2_Time:'0:41.0', T2_Time_TenthsOfSeconds:410, Run_Rnk:27, Run_Time:'23:48.8', Run_Time_TenthsOfSeconds:14288, Run_Pace:'7:00/M', Overall_Time:'1:38:13.1', Overall_Time_TenthsOfSeconds:58931}
      ,
      {Place:17, Name:'Paul Bizzarro', Bib_No:100, Age:35, Gender:'M', Age_Group:'3 35-39', Swim_Rnk:2, Swim_Time:'11:54.3', Swim_Time_TenthsOfSeconds:7143, T1_Rnk:10, T1_Time:'0:37.3', T1_Time_TenthsOfSeconds:373, Bike_Rnk:20, Bike_Time:'59:03.4', Bike_Time_TenthsOfSeconds:35434, Bike_Rate_MPH:21.0, T2_Rnk:35, T2_Time:'0:45.1', T2_Time_TenthsOfSeconds:451, Run_Rnk:46, Run_Time:'26:34.6', Run_Time_TenthsOfSeconds:15946, Run_Pace:'7:49/M', Overall_Time:'1:38:54.9', Overall_Time_TenthsOfSeconds:59349}
      ,
      {Place:18, Name:'Jed Jesse', Bib_No:28, Age:45, Gender:'M', Age_Group:'2 45-49', Swim_Rnk:21, Swim_Time:'15:26.4', Swim_Time_TenthsOfSeconds:9264, T1_Rnk:9, T1_Time:'0:36.6', T1_Time_TenthsOfSeconds:366, Bike_Rnk:24, Bike_Time:'59:37.9', Bike_Time_TenthsOfSeconds:35779, Bike_Rate_MPH:20.8, T2_Rnk:18, T2_Time:'0:35.1', T2_Time_TenthsOfSeconds:351, Run_Rnk:16, Run_Time:'22:58.9', Run_Time_TenthsOfSeconds:13789, Run_Pace:'6:45/M', Overall_Time:'1:39:15.1', Overall_Time_TenthsOfSeconds:59551}
      ,
      {Place:19, Name:'Joshua Otstot', Bib_No:45, Age:43, Gender:'M', Age_Group:'4 40-44', Swim_Rnk:37, Swim_Time:'17:24.6', Swim_Time_TenthsOfSeconds:10446, T1_Rnk:5, T1_Time:'0:31.5', T1_Time_TenthsOfSeconds:315, Bike_Rnk:12, Bike_Time:'56:59.3', Bike_Time_TenthsOfSeconds:34193, Bike_Rate_MPH:21.8, T2_Rnk:3, T2_Time:'0:21.2', T2_Time_TenthsOfSeconds:212, Run_Rnk:29, Run_Time:'24:10.1', Run_Time_TenthsOfSeconds:14501, Run_Pace:'7:06/M', Overall_Time:'1:39:26.9', Overall_Time_TenthsOfSeconds:59669}
      ,
      {Place:20, Name:'Kelly Perrault', Bib_No:48, Age:0, Gender:'M', Age_Group:'1 0- 0', Swim_Rnk:89, Swim_Time:'22:01.2', Swim_Time_TenthsOfSeconds:13212, T1_Rnk:16, T1_Time:'0:44.8', T1_Time_TenthsOfSeconds:448, Bike_Rnk:10, Bike_Time:'54:43.5', Bike_Time_TenthsOfSeconds:32835, Bike_Rate_MPH:22.7, T2_Rnk:41, T2_Time:'0:47.5', T2_Time_TenthsOfSeconds:475, Run_Rnk:9, Run_Time:'21:39.9', Run_Time_TenthsOfSeconds:12999, Run_Pace:'6:22/M', Overall_Time:'1:39:57.0', Overall_Time_TenthsOfSeconds:59970}
      ,
      {Place:21, Name:'Gregg Slayton', Bib_No:113, Age:52, Gender:'M', Age_Group:'1 50-54', Swim_Rnk:10, Swim_Time:'13:48.4', Swim_Time_TenthsOfSeconds:8284, T1_Rnk:35, T1_Time:'0:56.8', T1_Time_TenthsOfSeconds:568, Bike_Rnk:21, Bike_Time:'59:24.4', Bike_Time_TenthsOfSeconds:35644, Bike_Rate_MPH:20.9, T2_Rnk:57, T2_Time:'0:58.6', T2_Time_TenthsOfSeconds:586, Run_Rnk:39, Run_Time:'25:36.5', Run_Time_TenthsOfSeconds:15365, Run_Pace:'7:32/M', Overall_Time:'1:40:44.8', Overall_Time_TenthsOfSeconds:60448}
      ,
      {Place:22, Name:'Mike Meiners', Bib_No:39, Age:36, Gender:'M', Age_Group:'4 35-39', Swim_Rnk:39, Swim_Time:'17:35.8', Swim_Time_TenthsOfSeconds:10558, T1_Rnk:20, T1_Time:'0:46.5', T1_Time_TenthsOfSeconds:465, Bike_Rnk:13, Bike_Time:'57:01.4', Bike_Time_TenthsOfSeconds:34214, Bike_Rate_MPH:21.8, T2_Rnk:24, T2_Time:'0:39.7', T2_Time_TenthsOfSeconds:397, Run_Rnk:38, Run_Time:'25:19.4', Run_Time_TenthsOfSeconds:15194, Run_Pace:'7:27/M', Overall_Time:'1:41:22.9', Overall_Time_TenthsOfSeconds:60829}
      ,
      {Place:23, Name:'Mick Mominee', Bib_No:99, Age:40, Gender:'M', Age_Group:'5 40-44', Swim_Rnk:30, Swim_Time:'16:55.4', Swim_Time_TenthsOfSeconds:10154, T1_Rnk:47, T1_Time:'1:08.5', T1_Time_TenthsOfSeconds:685, Bike_Rnk:25, Bike_Time:'59:43.7', Bike_Time_TenthsOfSeconds:35837, Bike_Rate_MPH:20.8, T2_Rnk:36, T2_Time:'0:45.2', T2_Time_TenthsOfSeconds:452, Run_Rnk:21, Run_Time:'23:32.4', Run_Time_TenthsOfSeconds:14124, Run_Pace:'6:55/M', Overall_Time:'1:42:05.3', Overall_Time_TenthsOfSeconds:61253}
      ,
      {Place:24, Name:'Justin Sanker', Bib_No:114, Age:35, Gender:'M', Age_Group:'5 35-39', Swim_Rnk:57, Swim_Time:'18:38.6', Swim_Time_TenthsOfSeconds:11186, T1_Rnk:14, T1_Time:'0:43.4', T1_Time_TenthsOfSeconds:434, Bike_Rnk:33, Bike_Time:'1:00:29.5', Bike_Time_TenthsOfSeconds:36295, Bike_Rate_MPH:20.5, T2_Rnk:44, T2_Time:'0:49.0', T2_Time_TenthsOfSeconds:490, Run_Rnk:8, Run_Time:'21:33.9', Run_Time_TenthsOfSeconds:12939, Run_Pace:'6:20/M', Overall_Time:'1:42:14.7', Overall_Time_TenthsOfSeconds:61347}
      ,
      {Place:25, Name:'Cheryl Chaney', Bib_No:82, Age:52, Gender:'F', Age_Group:'1 50-54', Swim_Rnk:40, Swim_Time:'17:40.8', Swim_Time_TenthsOfSeconds:10608, T1_Rnk:27, T1_Time:'0:48.9', T1_Time_TenthsOfSeconds:489, Bike_Rnk:14, Bike_Time:'57:01.6', Bike_Time_TenthsOfSeconds:34216, Bike_Rate_MPH:21.8, T2_Rnk:28, T2_Time:'0:40.6', T2_Time_TenthsOfSeconds:406, Run_Rnk:42, Run_Time:'26:11.2', Run_Time_TenthsOfSeconds:15712, Run_Pace:'7:42/M', Overall_Time:'1:42:23.3', Overall_Time_TenthsOfSeconds:61433}
      ,
      {Place:26, Name:'Tony Steffel', Bib_No:61, Age:32, Gender:'M', Age_Group:'4 30-34', Swim_Rnk:25, Swim_Time:'16:02.9', Swim_Time_TenthsOfSeconds:9629, T1_Rnk:15, T1_Time:'0:43.5', T1_Time_TenthsOfSeconds:435, Bike_Rnk:35, Bike_Time:'1:00:53.2', Bike_Time_TenthsOfSeconds:36532, Bike_Rate_MPH:20.4, T2_Rnk:11, T2_Time:'0:30.3', T2_Time_TenthsOfSeconds:303, Run_Rnk:35, Run_Time:'24:44.6', Run_Time_TenthsOfSeconds:14846, Run_Pace:'7:16/M', Overall_Time:'1:42:54.6', Overall_Time_TenthsOfSeconds:61746}
      ,
      {Place:27, Name:'Michael Whitaker', Bib_No:68, Age:31, Gender:'M', Age_Group:'5 30-34', Swim_Rnk:54, Swim_Time:'18:33.9', Swim_Time_TenthsOfSeconds:11139, T1_Rnk:21, T1_Time:'0:46.7', T1_Time_TenthsOfSeconds:467, Bike_Rnk:17, Bike_Time:'57:15.3', Bike_Time_TenthsOfSeconds:34353, Bike_Rate_MPH:21.7, T2_Rnk:50, T2_Time:'0:52.4', T2_Time_TenthsOfSeconds:524, Run_Rnk:41, Run_Time:'26:10.5', Run_Time_TenthsOfSeconds:15705, Run_Pace:'7:42/M', Overall_Time:'1:43:39.1', Overall_Time_TenthsOfSeconds:62191}
      ,
      {Place:28, Name:'Candida Crasto', Bib_No:15, Age:27, Gender:'F', Age_Group:'1 25-29', Swim_Rnk:56, Swim_Time:'18:38.2', Swim_Time_TenthsOfSeconds:11182, T1_Rnk:19, T1_Time:'0:46.0', T1_Time_TenthsOfSeconds:460, Bike_Rnk:23, Bike_Time:'59:35.5', Bike_Time_TenthsOfSeconds:35755, Bike_Rate_MPH:20.8, T2_Rnk:33, T2_Time:'0:44.0', T2_Time_TenthsOfSeconds:440, Run_Rnk:31, Run_Time:'24:15.5', Run_Time_TenthsOfSeconds:14555, Run_Pace:'7:08/M', Overall_Time:'1:43:59.4', Overall_Time_TenthsOfSeconds:62394}
      ,
      {Place:29, Name:'Drew Puckett', Bib_No:112, Age:15, Gender:'M', Age_Group:'1 15-19', Swim_Rnk:15, Swim_Time:'14:33.2', Swim_Time_TenthsOfSeconds:8732, T1_Rnk:8, T1_Time:'0:36.2', T1_Time_TenthsOfSeconds:362, Bike_Rnk:52, Bike_Time:'1:04:16.8', Bike_Time_TenthsOfSeconds:38568, Bike_Rate_MPH:19.3, T2_Rnk:7, T2_Time:'0:25.9', T2_Time_TenthsOfSeconds:259, Run_Rnk:33, Run_Time:'24:28.9', Run_Time_TenthsOfSeconds:14689, Run_Pace:'7:12/M', Overall_Time:'1:44:21.1', Overall_Time_TenthsOfSeconds:62611}
      ,
      {Place:30, Name:'Holly Fiora', Bib_No:105, Age:36, Gender:'F', Age_Group:'1 35-39', Swim_Rnk:38, Swim_Time:'17:29.9', Swim_Time_TenthsOfSeconds:10499, T1_Rnk:31, T1_Time:'0:51.6', T1_Time_TenthsOfSeconds:516, Bike_Rnk:34, Bike_Time:'1:00:41.3', Bike_Time_TenthsOfSeconds:36413, Bike_Rate_MPH:20.5, T2_Rnk:22, T2_Time:'0:38.3', T2_Time_TenthsOfSeconds:383, Run_Rnk:36, Run_Time:'24:51.8', Run_Time_TenthsOfSeconds:14918, Run_Pace:'7:19/M', Overall_Time:'1:44:33.0', Overall_Time_TenthsOfSeconds:62730}
      ,
      {Place:31, Name:'Marie Sparrow', Bib_No:85, Age:34, Gender:'F', Age_Group:'1 30-34', Swim_Rnk:27, Swim_Time:'16:17.2', Swim_Time_TenthsOfSeconds:9772, T1_Rnk:53, T1_Time:'1:13.3', T1_Time_TenthsOfSeconds:733, Bike_Rnk:28, Bike_Time:'1:00:09.6', Bike_Time_TenthsOfSeconds:36096, Bike_Rate_MPH:20.6, T2_Rnk:25, T2_Time:'0:39.7', T2_Time_TenthsOfSeconds:397, Run_Rnk:45, Run_Time:'26:30.2', Run_Time_TenthsOfSeconds:15902, Run_Pace:'7:48/M', Overall_Time:'1:44:50.2', Overall_Time_TenthsOfSeconds:62902}
      ,
      {Place:32, Name:'Lisa Nolte', Bib_No:44, Age:28, Gender:'F', Age_Group:'2 25-29', Swim_Rnk:34, Swim_Time:'16:59.4', Swim_Time_TenthsOfSeconds:10194, T1_Rnk:52, T1_Time:'1:13.0', T1_Time_TenthsOfSeconds:730, Bike_Rnk:42, Bike_Time:'1:01:55.8', Bike_Time_TenthsOfSeconds:37158, Bike_Rate_MPH:20.1, T2_Rnk:52, T2_Time:'0:54.7', T2_Time_TenthsOfSeconds:547, Run_Rnk:37, Run_Time:'24:53.9', Run_Time_TenthsOfSeconds:14939, Run_Pace:'7:19/M', Overall_Time:'1:45:57.0', Overall_Time_TenthsOfSeconds:63570}
      ,
      {Place:33, Name:'Emily Rizek', Bib_No:50, Age:34, Gender:'F', Age_Group:'2 30-34', Swim_Rnk:33, Swim_Time:'16:58.3', Swim_Time_TenthsOfSeconds:10183, T1_Rnk:46, T1_Time:'1:08.5', T1_Time_TenthsOfSeconds:685, Bike_Rnk:46, Bike_Time:'1:03:22.3', Bike_Time_TenthsOfSeconds:38023, Bike_Rate_MPH:19.6, T2_Rnk:70, T2_Time:'1:08.6', T2_Time_TenthsOfSeconds:686, Run_Rnk:18, Run_Time:'23:26.2', Run_Time_TenthsOfSeconds:14062, Run_Pace:'6:54/M', Overall_Time:'1:46:04.0', Overall_Time_TenthsOfSeconds:63640}
      ,
      {Place:34, Name:'Emmett Saulnier', Bib_No:53, Age:19, Gender:'M', Age_Group:'2 15-19', Swim_Rnk:19, Swim_Time:'15:10.4', Swim_Time_TenthsOfSeconds:9104, T1_Rnk:65, T1_Time:'1:23.0', T1_Time_TenthsOfSeconds:830, Bike_Rnk:69, Bike_Time:'1:07:17.5', Bike_Time_TenthsOfSeconds:40375, Bike_Rate_MPH:18.5, T2_Rnk:65, T2_Time:'1:05.0', T2_Time_TenthsOfSeconds:650, Run_Rnk:12, Run_Time:'21:54.6', Run_Time_TenthsOfSeconds:13146, Run_Pace:'6:26/M', Overall_Time:'1:46:50.6', Overall_Time_TenthsOfSeconds:64106}
      ,
      {Place:35, Name:'Austin Spruill', Bib_No:60, Age:17, Gender:'M', Age_Group:'3 15-19', Swim_Rnk:1, Swim_Time:'11:35.8', Swim_Time_TenthsOfSeconds:6958, T1_Rnk:13, T1_Time:'0:42.9', T1_Time_TenthsOfSeconds:429, Bike_Rnk:80, Bike_Time:'1:10:20.6', Bike_Time_TenthsOfSeconds:42206, Bike_Rate_MPH:17.7, T2_Rnk:17, T2_Time:'0:34.6', T2_Time_TenthsOfSeconds:346, Run_Rnk:24, Run_Time:'23:44.8', Run_Time_TenthsOfSeconds:14248, Run_Pace:'6:59/M', Overall_Time:'1:46:59.0', Overall_Time_TenthsOfSeconds:64190}
      ,
      {Place:36, Name:'John Nenni', Bib_No:79, Age:35, Gender:'M', Age_Group:'6 35-39', Swim_Rnk:14, Swim_Time:'14:14.9', Swim_Time_TenthsOfSeconds:8549, T1_Rnk:24, T1_Time:'0:48.0', T1_Time_TenthsOfSeconds:480, Bike_Rnk:41, Bike_Time:'1:01:40.5', Bike_Time_TenthsOfSeconds:37005, Bike_Rate_MPH:20.1, T2_Rnk:5, T2_Time:'0:22.8', T2_Time_TenthsOfSeconds:228, Run_Rnk:79, Run_Time:'30:18.7', Run_Time_TenthsOfSeconds:18187, Run_Pace:'8:55/M', Overall_Time:'1:47:25.1', Overall_Time_TenthsOfSeconds:64451}
      ,
      {Place:37, Name:'Becca Moore', Bib_No:41, Age:38, Gender:'F', Age_Group:'2 35-39', Swim_Rnk:35, Swim_Time:'17:16.2', Swim_Time_TenthsOfSeconds:10362, T1_Rnk:62, T1_Time:'1:20.8', T1_Time_TenthsOfSeconds:808, Bike_Rnk:50, Bike_Time:'1:04:07.2', Bike_Time_TenthsOfSeconds:38472, Bike_Rate_MPH:19.4, T2_Rnk:68, T2_Time:'1:07.9', T2_Time_TenthsOfSeconds:679, Run_Rnk:25, Run_Time:'23:45.3', Run_Time_TenthsOfSeconds:14253, Run_Pace:'6:59/M', Overall_Time:'1:47:37.5', Overall_Time_TenthsOfSeconds:64575}
      ,
      {Place:38, Name:'Michael Miller', Bib_No:77, Age:53, Gender:'M', Age_Group:'2 50-54', Swim_Rnk:61, Swim_Time:'18:58.1', Swim_Time_TenthsOfSeconds:11381, T1_Rnk:68, T1_Time:'1:29.8', T1_Time_TenthsOfSeconds:898, Bike_Rnk:40, Bike_Time:'1:01:33.5', Bike_Time_TenthsOfSeconds:36935, Bike_Rate_MPH:20.2, T2_Rnk:59, T2_Time:'1:01.7', T2_Time_TenthsOfSeconds:617, Run_Rnk:34, Run_Time:'24:35.5', Run_Time_TenthsOfSeconds:14755, Run_Pace:'7:14/M', Overall_Time:'1:47:38.7', Overall_Time_TenthsOfSeconds:64587}
      ,
      {Place:39, Name:'Michael Sullivan', Bib_No:64, Age:32, Gender:'M', Age_Group:'6 30-34', Swim_Rnk:43, Swim_Time:'18:03.7', Swim_Time_TenthsOfSeconds:10837, T1_Rnk:17, T1_Time:'0:45.5', T1_Time_TenthsOfSeconds:455, Bike_Rnk:30, Bike_Time:'1:00:22.4', Bike_Time_TenthsOfSeconds:36224, Bike_Rate_MPH:20.6, T2_Rnk:8, T2_Time:'0:26.0', T2_Time_TenthsOfSeconds:260, Run_Rnk:66, Run_Time:'28:06.2', Run_Time_TenthsOfSeconds:16862, Run_Pace:'8:16/M', Overall_Time:'1:47:43.9', Overall_Time_TenthsOfSeconds:64639}
      ,
      {Place:40, Name:'Ray Schommer', Bib_No:55, Age:55, Gender:'M', Age_Group:'1 55-59', Swim_Rnk:55, Swim_Time:'18:34.3', Swim_Time_TenthsOfSeconds:11143, T1_Rnk:58, T1_Time:'1:18.3', T1_Time_TenthsOfSeconds:783, Bike_Rnk:29, Bike_Time:'1:00:12.1', Bike_Time_TenthsOfSeconds:36121, Bike_Rate_MPH:20.6, T2_Rnk:63, T2_Time:'1:02.8', T2_Time_TenthsOfSeconds:628, Run_Rnk:53, Run_Time:'26:57.6', Run_Time_TenthsOfSeconds:16176, Run_Pace:'7:56/M', Overall_Time:'1:48:05.4', Overall_Time_TenthsOfSeconds:64854}
      ,
      {Place:41, Name:'Rick Lukin', Bib_No:36, Age:46, Gender:'M', Age_Group:'3 45-49', Swim_Rnk:77, Swim_Time:'21:05.7', Swim_Time_TenthsOfSeconds:12657, T1_Rnk:61, T1_Time:'1:20.4', T1_Time_TenthsOfSeconds:804, Bike_Rnk:36, Bike_Time:'1:00:56.3', Bike_Time_TenthsOfSeconds:36563, Bike_Rate_MPH:20.4, T2_Rnk:75, T2_Time:'1:16.1', T2_Time_TenthsOfSeconds:761, Run_Rnk:23, Run_Time:'23:38.9', Run_Time_TenthsOfSeconds:14189, Run_Pace:'6:57/M', Overall_Time:'1:48:17.6', Overall_Time_TenthsOfSeconds:64976}
      ,
      {Place:42, Name:'Karen Lehtonen', Bib_No:35, Age:43, Gender:'F', Age_Group:'1 40-44', Swim_Rnk:22, Swim_Time:'15:31.8', Swim_Time_TenthsOfSeconds:9318, T1_Rnk:32, T1_Time:'0:53.8', T1_Time_TenthsOfSeconds:538, Bike_Rnk:31, Bike_Time:'1:00:27.3', Bike_Time_TenthsOfSeconds:36273, Bike_Rate_MPH:20.5, T2_Rnk:49, T2_Time:'0:52.3', T2_Time_TenthsOfSeconds:523, Run_Rnk:82, Run_Time:'30:53.1', Run_Time_TenthsOfSeconds:18531, Run_Pace:'9:05/M', Overall_Time:'1:48:38.6', Overall_Time_TenthsOfSeconds:65186}
      ,
      {Place:43, Name:'Julie Moser', Bib_No:43, Age:36, Gender:'F', Age_Group:'3 35-39', Swim_Rnk:48, Swim_Time:'18:13.9', Swim_Time_TenthsOfSeconds:10939, T1_Rnk:38, T1_Time:'0:59.7', T1_Time_TenthsOfSeconds:597, Bike_Rnk:45, Bike_Time:'1:02:57.1', Bike_Time_TenthsOfSeconds:37771, Bike_Rate_MPH:19.7, T2_Rnk:15, T2_Time:'0:32.6', T2_Time_TenthsOfSeconds:326, Run_Rnk:43, Run_Time:'26:20.9', Run_Time_TenthsOfSeconds:15809, Run_Pace:'7:45/M', Overall_Time:'1:49:04.4', Overall_Time_TenthsOfSeconds:65444}
      ,
      {Place:44, Name:'Bob Ausdenmoore', Bib_No:3, Age:56, Gender:'M', Age_Group:'2 55-59', Swim_Rnk:32, Swim_Time:'16:58.0', Swim_Time_TenthsOfSeconds:10180, T1_Rnk:69, T1_Time:'1:30.0', T1_Time_TenthsOfSeconds:900, Bike_Rnk:26, Bike_Time:'59:54.0', Bike_Time_TenthsOfSeconds:35940, Bike_Rate_MPH:20.7, T2_Rnk:58, T2_Time:'1:00.0', T2_Time_TenthsOfSeconds:600, Run_Rnk:75, Run_Time:'29:47.0', Run_Time_TenthsOfSeconds:17870, Run_Pace:'8:46/M', Overall_Time:'1:49:09.0', Overall_Time_TenthsOfSeconds:65490}
      ,
      {Place:45, Name:'Nick Klosterman', Bib_No:31, Age:36, Gender:'M', Age_Group:'7 35-39', Swim_Rnk:98, Swim_Time:'23:18.5', Swim_Time_TenthsOfSeconds:13985, T1_Rnk:45, T1_Time:'1:07.6', T1_Time_TenthsOfSeconds:676, Bike_Rnk:16, Bike_Time:'57:13.6', Bike_Time_TenthsOfSeconds:34336, Bike_Rate_MPH:21.7, T2_Rnk:67, T2_Time:'1:07.1', T2_Time_TenthsOfSeconds:671, Run_Rnk:59, Run_Time:'27:33.8', Run_Time_TenthsOfSeconds:16538, Run_Pace:'8:06/M', Overall_Time:'1:50:20.8', Overall_Time_TenthsOfSeconds:66208}
      ,
      {Place:46, Name:'Ashley Valentine', Bib_No:108, Age:54, Gender:'F', Age_Group:'2 50-54', Swim_Rnk:59, Swim_Time:'18:39.6', Swim_Time_TenthsOfSeconds:11196, T1_Rnk:86, T1_Time:'1:53.9', T1_Time_TenthsOfSeconds:1139, Bike_Rnk:57, Bike_Time:'1:05:15.5', Bike_Time_TenthsOfSeconds:39155, Bike_Rate_MPH:19.0, T2_Rnk:82, T2_Time:'1:24.0', T2_Time_TenthsOfSeconds:840, Run_Rnk:17, Run_Time:'23:10.8', Run_Time_TenthsOfSeconds:13908, Run_Pace:'6:49/M', Overall_Time:'1:50:24.0', Overall_Time_TenthsOfSeconds:66240}
      ,
      {Place:47, Name:'Chris Anderson', Bib_No:115, Age:41, Gender:'M', Age_Group:'6 40-44', Swim_Rnk:69, Swim_Time:'19:54.4', Swim_Time_TenthsOfSeconds:11944, T1_Rnk:96, T1_Time:'2:11.7', T1_Time_TenthsOfSeconds:1317, Bike_Rnk:48, Bike_Time:'1:04:00.5', Bike_Time_TenthsOfSeconds:38405, Bike_Rate_MPH:19.4, T2_Rnk:27, T2_Time:'0:40.6', T2_Time_TenthsOfSeconds:406, Run_Rnk:26, Run_Time:'23:48.4', Run_Time_TenthsOfSeconds:14284, Run_Pace:'7:00/M', Overall_Time:'1:50:35.7', Overall_Time_TenthsOfSeconds:66357}
      ,
      {Place:48, Name:'Hannah Ross', Bib_No:51, Age:38, Gender:'F', Age_Group:'4 35-39', Swim_Rnk:80, Swim_Time:'21:25.2', Swim_Time_TenthsOfSeconds:12852, T1_Rnk:48, T1_Time:'1:08.5', T1_Time_TenthsOfSeconds:685, Bike_Rnk:47, Bike_Time:'1:03:36.9', Bike_Time_TenthsOfSeconds:38169, Bike_Rate_MPH:19.5, T2_Rnk:56, T2_Time:'0:58.1', T2_Time_TenthsOfSeconds:581, Run_Rnk:20, Run_Time:'23:29.7', Run_Time_TenthsOfSeconds:14097, Run_Pace:'6:54/M', Overall_Time:'1:50:38.6', Overall_Time_TenthsOfSeconds:66386}
      ,
      {Place:49, Name:'Brian Purchase', Bib_No:78, Age:46, Gender:'M', Age_Group:'4 45-49', Swim_Rnk:52, Swim_Time:'18:29.6', Swim_Time_TenthsOfSeconds:11096, T1_Rnk:71, T1_Time:'1:30.9', T1_Time_TenthsOfSeconds:909, Bike_Rnk:32, Bike_Time:'1:00:28.7', Bike_Time_TenthsOfSeconds:36287, Bike_Rate_MPH:20.5, T2_Rnk:79, T2_Time:'1:20.3', T2_Time_TenthsOfSeconds:803, Run_Rnk:70, Run_Time:'28:50.7', Run_Time_TenthsOfSeconds:17307, Run_Pace:'8:29/M', Overall_Time:'1:50:40.3', Overall_Time_TenthsOfSeconds:66403}
      ,
      {Place:50, Name:'Tim Bowman', Bib_No:96, Age:59, Gender:'M', Age_Group:'3 55-59', Swim_Rnk:65, Swim_Time:'19:40.5', Swim_Time_TenthsOfSeconds:11805, T1_Rnk:56, T1_Time:'1:15.4', T1_Time_TenthsOfSeconds:754, Bike_Rnk:38, Bike_Time:'1:01:04.2', Bike_Time_TenthsOfSeconds:36642, Bike_Rate_MPH:20.3, T2_Rnk:37, T2_Time:'0:45.2', T2_Time_TenthsOfSeconds:452, Run_Rnk:69, Run_Time:'28:36.4', Run_Time_TenthsOfSeconds:17164, Run_Pace:'8:25/M', Overall_Time:'1:51:22.0', Overall_Time_TenthsOfSeconds:66820}
      ,
      {Place:51, Name:'Geoffrey Magley', Bib_No:37, Age:48, Gender:'M', Age_Group:'5 45-49', Swim_Rnk:63, Swim_Time:'19:03.6', Swim_Time_TenthsOfSeconds:11436, T1_Rnk:6, T1_Time:'0:33.4', T1_Time_TenthsOfSeconds:334, Bike_Rnk:44, Bike_Time:'1:02:55.4', Bike_Time_TenthsOfSeconds:37754, Bike_Rate_MPH:19.7, T2_Rnk:48, T2_Time:'0:52.0', T2_Time_TenthsOfSeconds:520, Run_Rnk:73, Run_Time:'29:21.7', Run_Time_TenthsOfSeconds:17617, Run_Pace:'8:38/M', Overall_Time:'1:52:46.3', Overall_Time_TenthsOfSeconds:67663}
      ,
      {Place:52, Name:'Jason Enix', Bib_No:17, Age:39, Gender:'M', Age_Group:'8 35-39', Swim_Rnk:31, Swim_Time:'16:56.7', Swim_Time_TenthsOfSeconds:10167, T1_Rnk:67, T1_Time:'1:29.5', T1_Time_TenthsOfSeconds:895, Bike_Rnk:60, Bike_Time:'1:05:32.1', Bike_Time_TenthsOfSeconds:39321, Bike_Rate_MPH:19.0, T2_Rnk:84, T2_Time:'1:24.8', T2_Time_TenthsOfSeconds:848, Run_Rnk:63, Run_Time:'27:51.9', Run_Time_TenthsOfSeconds:16719, Run_Pace:'8:11/M', Overall_Time:'1:53:15.2', Overall_Time_TenthsOfSeconds:67952}
      ,
      {Place:53, Name:'Sean Kelly', Bib_No:90, Age:24, Gender:'M', Age_Group:'4 20-24', Swim_Rnk:82, Swim_Time:'21:28.2', Swim_Time_TenthsOfSeconds:12882, T1_Rnk:64, T1_Time:'1:22.9', T1_Time_TenthsOfSeconds:829, Bike_Rnk:51, Bike_Time:'1:04:10.9', Bike_Time_TenthsOfSeconds:38509, Bike_Rate_MPH:19.4, T2_Rnk:23, T2_Time:'0:39.4', T2_Time_TenthsOfSeconds:394, Run_Rnk:40, Run_Time:'25:53.4', Run_Time_TenthsOfSeconds:15534, Run_Pace:'7:37/M', Overall_Time:'1:53:34.9', Overall_Time_TenthsOfSeconds:68149}
      ,
      {Place:54, Name:'Heather Poast', Bib_No:121, Age:34, Gender:'F', Age_Group:'3 30-34', Swim_Rnk:23, Swim_Time:'15:48.7', Swim_Time_TenthsOfSeconds:9487, T1_Rnk:54, T1_Time:'1:14.1', T1_Time_TenthsOfSeconds:741, Bike_Rnk:70, Bike_Time:'1:07:20.6', Bike_Time_TenthsOfSeconds:40406, Bike_Rate_MPH:18.4, T2_Rnk:76, T2_Time:'1:16.5', T2_Time_TenthsOfSeconds:765, Run_Rnk:65, Run_Time:'28:00.6', Run_Time_TenthsOfSeconds:16806, Run_Pace:'8:14/M', Overall_Time:'1:53:40.7', Overall_Time_TenthsOfSeconds:68207}
      ,
      {Place:55, Name:'Dan Hart', Bib_No:92, Age:25, Gender:'M', Age_Group:'5 25-29', Swim_Rnk:42, Swim_Time:'17:55.6', Swim_Time_TenthsOfSeconds:10756, T1_Rnk:91, T1_Time:'2:03.6', T1_Time_TenthsOfSeconds:1236, Bike_Rnk:76, Bike_Time:'1:08:55.9', Bike_Time_TenthsOfSeconds:41359, Bike_Rate_MPH:18.0, T2_Rnk:12, T2_Time:'0:30.6', T2_Time_TenthsOfSeconds:306, Run_Rnk:30, Run_Time:'24:14.8', Run_Time_TenthsOfSeconds:14548, Run_Pace:'7:08/M', Overall_Time:'1:53:40.7', Overall_Time_TenthsOfSeconds:68207}
      ,
      {Place:56, Name:'Andrea Arlinghaus', Bib_No:2, Age:32, Gender:'F', Age_Group:'4 30-34', Swim_Rnk:41, Swim_Time:'17:54.9', Swim_Time_TenthsOfSeconds:10749, T1_Rnk:89, T1_Time:'2:01.5', T1_Time_TenthsOfSeconds:1215, Bike_Rnk:71, Bike_Time:'1:07:30.1', Bike_Time_TenthsOfSeconds:40501, Bike_Rate_MPH:18.4, T2_Rnk:91, T2_Time:'1:56.3', T2_Time_TenthsOfSeconds:1163, Run_Rnk:32, Run_Time:'24:21.4', Run_Time_TenthsOfSeconds:14614, Run_Pace:'7:10/M', Overall_Time:'1:53:44.5', Overall_Time_TenthsOfSeconds:68245}
      ,
      {Place:57, Name:'William Hardie', Bib_No:23, Age:52, Gender:'M', Age_Group:'3 50-54', Swim_Rnk:100, Swim_Time:'24:47.3', Swim_Time_TenthsOfSeconds:14873, T1_Rnk:81, T1_Time:'1:39.8', T1_Time_TenthsOfSeconds:998, Bike_Rnk:27, Bike_Time:'59:56.4', Bike_Time_TenthsOfSeconds:35964, Bike_Rate_MPH:20.7, T2_Rnk:80, T2_Time:'1:20.5', T2_Time_TenthsOfSeconds:805, Run_Rnk:48, Run_Time:'26:41.6', Run_Time_TenthsOfSeconds:16016, Run_Pace:'7:51/M', Overall_Time:'1:54:25.8', Overall_Time_TenthsOfSeconds:68658}
      ,
      {Place:58, Name:'David Gelb', Bib_No:20, Age:46, Gender:'M', Age_Group:'6 45-49', Swim_Rnk:60, Swim_Time:'18:47.7', Swim_Time_TenthsOfSeconds:11277, T1_Rnk:43, T1_Time:'1:03.8', T1_Time_TenthsOfSeconds:638, Bike_Rnk:43, Bike_Time:'1:02:40.2', Bike_Time_TenthsOfSeconds:37602, Bike_Rate_MPH:19.8, T2_Rnk:46, T2_Time:'0:49.8', T2_Time_TenthsOfSeconds:498, Run_Rnk:88, Run_Time:'31:34.8', Run_Time_TenthsOfSeconds:18948, Run_Pace:'9:17/M', Overall_Time:'1:54:56.5', Overall_Time_TenthsOfSeconds:68965}
      ,
      {Place:59, Name:'Kirk Storer', Bib_No:63, Age:32, Gender:'M', Age_Group:'7 30-34', Swim_Rnk:71, Swim_Time:'20:08.8', Swim_Time_TenthsOfSeconds:12088, T1_Rnk:63, T1_Time:'1:22.3', T1_Time_TenthsOfSeconds:823, Bike_Rnk:65, Bike_Time:'1:05:52.1', Bike_Time_TenthsOfSeconds:39521, Bike_Rate_MPH:18.9, T2_Rnk:32, T2_Time:'0:43.1', T2_Time_TenthsOfSeconds:431, Run_Rnk:54, Run_Time:'27:04.5', Run_Time_TenthsOfSeconds:16245, Run_Pace:'7:58/M', Overall_Time:'1:55:11.0', Overall_Time_TenthsOfSeconds:69110}
      ,
      {Place:60, Name:'Ron Brower', Bib_No:84, Age:65, Gender:'M', Age_Group:'1 65-69', Swim_Rnk:107, Swim_Time:'29:23.8', Swim_Time_TenthsOfSeconds:17638, T1_Rnk:105, T1_Time:'3:28.2', T1_Time_TenthsOfSeconds:2082, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:92, Run_Time:'1:22:42.6', Run_Time_TenthsOfSeconds:49626, Run_Pace:'3:26/M', Overall_Time:'1:55:34.7', Overall_Time_TenthsOfSeconds:69347}
      ,
      {Place:61, Name:'James Bard', Bib_No:6, Age:44, Gender:'M', Age_Group:'7 40-44', Swim_Rnk:86, Swim_Time:'21:42.6', Swim_Time_TenthsOfSeconds:13026, T1_Rnk:82, T1_Time:'1:41.0', T1_Time_TenthsOfSeconds:1010, Bike_Rnk:56, Bike_Time:'1:05:00.1', Bike_Time_TenthsOfSeconds:39001, Bike_Rate_MPH:19.1, T2_Rnk:30, T2_Time:'0:43.0', T2_Time_TenthsOfSeconds:430, Run_Rnk:47, Run_Time:'26:35.0', Run_Time_TenthsOfSeconds:15950, Run_Pace:'7:49/M', Overall_Time:'1:55:41.9', Overall_Time_TenthsOfSeconds:69419}
      ,
      {Place:62, Name:'Steven Hanks', Bib_No:22, Age:41, Gender:'M', Age_Group:'8 40-44', Swim_Rnk:44, Swim_Time:'18:06.9', Swim_Time_TenthsOfSeconds:10869, T1_Rnk:94, T1_Time:'2:06.2', T1_Time_TenthsOfSeconds:1262, Bike_Rnk:61, Bike_Time:'1:05:32.2', Bike_Time_TenthsOfSeconds:39322, Bike_Rate_MPH:19.0, T2_Rnk:31, T2_Time:'0:43.1', T2_Time_TenthsOfSeconds:431, Run_Rnk:72, Run_Time:'29:16.0', Run_Time_TenthsOfSeconds:17560, Run_Pace:'8:36/M', Overall_Time:'1:55:44.6', Overall_Time_TenthsOfSeconds:69446}
      ,
      {Place:63, Name:'Shawn Koivisto', Bib_No:32, Age:39, Gender:'M', Age_Group:'9 35-39', Swim_Rnk:58, Swim_Time:'18:39.0', Swim_Time_TenthsOfSeconds:11190, T1_Rnk:36, T1_Time:'0:57.4', T1_Time_TenthsOfSeconds:574, Bike_Rnk:73, Bike_Time:'1:07:50.5', Bike_Time_TenthsOfSeconds:40705, Bike_Rate_MPH:18.3, T2_Rnk:43, T2_Time:'0:49.0', T2_Time_TenthsOfSeconds:490, Run_Rnk:62, Run_Time:'27:41.2', Run_Time_TenthsOfSeconds:16612, Run_Pace:'8:09/M', Overall_Time:'1:55:57.3', Overall_Time_TenthsOfSeconds:69573}
      ,
      {Place:64, Name:'David French', Bib_No:19, Age:53, Gender:'M', Age_Group:'4 50-54', Swim_Rnk:45, Swim_Time:'18:08.8', Swim_Time_TenthsOfSeconds:10888, T1_Rnk:57, T1_Time:'1:18.1', T1_Time_TenthsOfSeconds:781, Bike_Rnk:64, Bike_Time:'1:05:50.9', Bike_Time_TenthsOfSeconds:39509, Bike_Rate_MPH:18.9, T2_Rnk:40, T2_Time:'0:46.5', T2_Time_TenthsOfSeconds:465, Run_Rnk:78, Run_Time:'30:06.1', Run_Time_TenthsOfSeconds:18061, Run_Pace:'8:51/M', Overall_Time:'1:56:10.5', Overall_Time_TenthsOfSeconds:69705}
      ,
      {Place:65, Name:'Theodora Rich', Bib_No:49, Age:41, Gender:'F', Age_Group:'2 40-44', Swim_Rnk:66, Swim_Time:'19:47.9', Swim_Time_TenthsOfSeconds:11879, T1_Rnk:41, T1_Time:'1:02.8', T1_Time_TenthsOfSeconds:628, Bike_Rnk:72, Bike_Time:'1:07:30.5', Bike_Time_TenthsOfSeconds:40505, Bike_Rate_MPH:18.4, T2_Rnk:64, T2_Time:'1:04.1', T2_Time_TenthsOfSeconds:641, Run_Rnk:52, Run_Time:'26:46.6', Run_Time_TenthsOfSeconds:16066, Run_Pace:'7:52/M', Overall_Time:'1:56:12.1', Overall_Time_TenthsOfSeconds:69721}
      ,
      {Place:66, Name:'Rick Mount', Bib_No:106, Age:46, Gender:'M', Age_Group:'7 45-49', Swim_Rnk:49, Swim_Time:'18:18.0', Swim_Time_TenthsOfSeconds:10980, T1_Rnk:78, T1_Time:'1:37.0', T1_Time_TenthsOfSeconds:970, Bike_Rnk:55, Bike_Time:'1:04:43.5', Bike_Time_TenthsOfSeconds:38835, Bike_Rate_MPH:19.2, T2_Rnk:69, T2_Time:'1:08.2', T2_Time_TenthsOfSeconds:682, Run_Rnk:80, Run_Time:'30:32.3', Run_Time_TenthsOfSeconds:18323, Run_Pace:'8:59/M', Overall_Time:'1:56:19.2', Overall_Time_TenthsOfSeconds:69792}
      ,
      {Place:67, Name:'Tim Carter', Bib_No:12, Age:55, Gender:'M', Age_Group:'4 55-59', Swim_Rnk:68, Swim_Time:'19:50.4', Swim_Time_TenthsOfSeconds:11904, T1_Rnk:75, T1_Time:'1:34.4', T1_Time_TenthsOfSeconds:944, Bike_Rnk:53, Bike_Time:'1:04:18.0', Bike_Time_TenthsOfSeconds:38580, Bike_Rate_MPH:19.3, T2_Rnk:39, T2_Time:'0:46.3', T2_Time_TenthsOfSeconds:463, Run_Rnk:76, Run_Time:'29:57.4', Run_Time_TenthsOfSeconds:17974, Run_Pace:'8:49/M', Overall_Time:'1:56:26.7', Overall_Time_TenthsOfSeconds:69867}
      ,
      {Place:68, Name:'Ruth Kohstall', Bib_No:103, Age:60, Gender:'F', Age_Group:'1 60-64', Swim_Rnk:64, Swim_Time:'19:29.1', Swim_Time_TenthsOfSeconds:11691, T1_Rnk:44, T1_Time:'1:05.1', T1_Time_TenthsOfSeconds:651, Bike_Rnk:77, Bike_Time:'1:09:26.9', Bike_Time_TenthsOfSeconds:41669, Bike_Rate_MPH:17.9, T2_Rnk:34, T2_Time:'0:44.1', T2_Time_TenthsOfSeconds:441, Run_Rnk:51, Run_Time:'26:46.4', Run_Time_TenthsOfSeconds:16064, Run_Pace:'7:52/M', Overall_Time:'1:57:31.8', Overall_Time_TenthsOfSeconds:70518}
      ,
      {Place:69, Name:'Ken Moore', Bib_No:42, Age:45, Gender:'M', Age_Group:'8 45-49', Swim_Rnk:84, Swim_Time:'21:33.4', Swim_Time_TenthsOfSeconds:12934, T1_Rnk:66, T1_Time:'1:27.8', T1_Time_TenthsOfSeconds:878, Bike_Rnk:68, Bike_Time:'1:06:28.3', Bike_Time_TenthsOfSeconds:39883, Bike_Rate_MPH:18.7, T2_Rnk:74, T2_Time:'1:16.0', T2_Time_TenthsOfSeconds:760, Run_Rnk:60, Run_Time:'27:34.5', Run_Time_TenthsOfSeconds:16545, Run_Pace:'8:06/M', Overall_Time:'1:58:20.2', Overall_Time_TenthsOfSeconds:71002}
      ,
      {Place:70, Name:'Michael Bush', Bib_No:97, Age:47, Gender:'M', Age_Group:'9 45-49', Swim_Rnk:97, Swim_Time:'22:56.3', Swim_Time_TenthsOfSeconds:13763, T1_Rnk:72, T1_Time:'1:31.4', T1_Time_TenthsOfSeconds:914, Bike_Rnk:62, Bike_Time:'1:05:43.4', Bike_Time_TenthsOfSeconds:39434, Bike_Rate_MPH:18.9, T2_Rnk:51, T2_Time:'0:52.4', T2_Time_TenthsOfSeconds:524, Run_Rnk:58, Run_Time:'27:29.9', Run_Time_TenthsOfSeconds:16499, Run_Pace:'8:05/M', Overall_Time:'1:58:33.6', Overall_Time_TenthsOfSeconds:71136}
      ,
      {Place:71, Name:'Joseph Gleeson', Bib_No:21, Age:52, Gender:'M', Age_Group:'5 50-54', Swim_Rnk:72, Swim_Time:'20:10.0', Swim_Time_TenthsOfSeconds:12100, T1_Rnk:93, T1_Time:'2:05.3', T1_Time_TenthsOfSeconds:1253, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:0.21, T2_Rnk:96, T2_Time:'1:07:21.4', T2_Time_TenthsOfSeconds:40414, Run_Rnk:81, Run_Time:'30:46.2', Run_Time_TenthsOfSeconds:18462, Run_Pace:'9:03/M', Overall_Time:'1:58:36.7', Overall_Time_TenthsOfSeconds:71167}
      ,
      {Place:72, Name:'Darrin Dolehanty', Bib_No:16, Age:51, Gender:'M', Age_Group:'6 50-54', Swim_Rnk:103, Swim_Time:'25:17.4', Swim_Time_TenthsOfSeconds:15174, T1_Rnk:73, T1_Time:'1:31.7', T1_Time_TenthsOfSeconds:917, Bike_Rnk:59, Bike_Time:'1:05:18.4', Bike_Time_TenthsOfSeconds:39184, Bike_Rate_MPH:19.0, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:50, Run_Time:'26:45.1', Run_Time_TenthsOfSeconds:16051, Run_Pace:'7:52/M', Overall_Time:'1:58:36.8', Overall_Time_TenthsOfSeconds:71168}
      ,
      {Place:73, Name:'Tracey Bachmann', Bib_No:4, Age:48, Gender:'F', Age_Group:'1 45-49', Swim_Rnk:8, Swim_Time:'13:38.3', Swim_Time_TenthsOfSeconds:8183, T1_Rnk:84, T1_Time:'1:45.0', T1_Time_TenthsOfSeconds:1050, Bike_Rnk:79, Bike_Time:'1:10:12.4', Bike_Time_TenthsOfSeconds:42124, Bike_Rate_MPH:17.7, T2_Rnk:86, T2_Time:'1:37.6', T2_Time_TenthsOfSeconds:976, Run_Rnk:87, Run_Time:'31:31.1', Run_Time_TenthsOfSeconds:18911, Run_Pace:'9:16/M', Overall_Time:'1:58:44.7', Overall_Time_TenthsOfSeconds:71247}
      ,
      {Place:74, Name:'Jason Laux', Bib_No:91, Age:35, Gender:'M', Age_Group:'10 35-39', Swim_Rnk:51, Swim_Time:'18:19.5', Swim_Time_TenthsOfSeconds:10995, T1_Rnk:79, T1_Time:'1:37.8', T1_Time_TenthsOfSeconds:978, Bike_Rnk:63, Bike_Time:'1:05:48.5', Bike_Time_TenthsOfSeconds:39485, Bike_Rate_MPH:18.9, T2_Rnk:60, T2_Time:'1:01.8', T2_Time_TenthsOfSeconds:618, Run_Rnk:89, Run_Time:'32:30.2', Run_Time_TenthsOfSeconds:19502, Run_Pace:'9:34/M', Overall_Time:'1:59:17.9', Overall_Time_TenthsOfSeconds:71579}
      ,
      {Place:75, Name:'Andrew Wendeln', Bib_No:67, Age:34, Gender:'M', Age_Group:'8 30-34', Swim_Rnk:95, Swim_Time:'22:33.1', Swim_Time_TenthsOfSeconds:13531, T1_Rnk:87, T1_Time:'1:55.7', T1_Time_TenthsOfSeconds:1157, Bike_Rnk:66, Bike_Time:'1:05:56.8', Bike_Time_TenthsOfSeconds:39568, Bike_Rate_MPH:18.8, T2_Rnk:20, T2_Time:'0:37.1', T2_Time_TenthsOfSeconds:371, Run_Rnk:68, Run_Time:'28:30.4', Run_Time_TenthsOfSeconds:17104, Run_Pace:'8:23/M', Overall_Time:'1:59:33.3', Overall_Time_TenthsOfSeconds:71733}
      ,
      {Place:76, Name:'Mike Zelinskas', Bib_No:75, Age:57, Gender:'M', Age_Group:'5 55-59', Swim_Rnk:91, Swim_Time:'22:05.6', Swim_Time_TenthsOfSeconds:13256, T1_Rnk:74, T1_Time:'1:32.5', T1_Time_TenthsOfSeconds:925, Bike_Rnk:49, Bike_Time:'1:04:03.7', Bike_Time_TenthsOfSeconds:38437, Bike_Rate_MPH:19.4, T2_Rnk:73, T2_Time:'1:15.9', T2_Time_TenthsOfSeconds:759, Run_Rnk:84, Run_Time:'31:03.6', Run_Time_TenthsOfSeconds:18636, Run_Pace:'9:08/M', Overall_Time:'2:00:01.5', Overall_Time_TenthsOfSeconds:72015}
      ,
      {Place:77, Name:'Jimmy Nutt', Bib_No:76, Age:40, Gender:'M', Age_Group:'9 40-44', Swim_Rnk:74, Swim_Time:'20:49.1', Swim_Time_TenthsOfSeconds:12491, T1_Rnk:107, T1_Time:'1:09:44.5', T1_Time_TenthsOfSeconds:41845, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:0.21, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:83, Run_Time:'30:53.7', Run_Time_TenthsOfSeconds:18537, Run_Pace:'9:05/M', Overall_Time:'2:00:26.6', Overall_Time_TenthsOfSeconds:72266}
      ,
      {Place:78, Name:'Mike Mangino', Bib_No:38, Age:36, Gender:'M', Age_Group:'11 35-39', Swim_Rnk:81, Swim_Time:'21:26.8', Swim_Time_TenthsOfSeconds:12868, T1_Rnk:60, T1_Time:'1:19.6', T1_Time_TenthsOfSeconds:796, Bike_Rnk:74, Bike_Time:'1:07:55.7', Bike_Time_TenthsOfSeconds:40757, Bike_Rate_MPH:18.3, T2_Rnk:72, T2_Time:'1:13.9', T2_Time_TenthsOfSeconds:739, Run_Rnk:71, Run_Time:'29:01.3', Run_Time_TenthsOfSeconds:17413, Run_Pace:'8:32/M', Overall_Time:'2:00:57.4', Overall_Time_TenthsOfSeconds:72574}
      ,
      {Place:79, Name:'Stacey Roberts', Bib_No:122, Age:32, Gender:'F', Age_Group:'5 30-34', Swim_Rnk:102, Swim_Time:'25:08.0', Swim_Time_TenthsOfSeconds:15080, T1_Rnk:85, T1_Time:'1:51.1', T1_Time_TenthsOfSeconds:1111, Bike_Rnk:67, Bike_Time:'1:06:02.5', Bike_Time_TenthsOfSeconds:39625, Bike_Rate_MPH:18.8, T2_Rnk:94, T2_Time:'2:26.0', T2_Time_TenthsOfSeconds:1460, Run_Rnk:44, Run_Time:'26:23.4', Run_Time_TenthsOfSeconds:15834, Run_Pace:'7:46/M', Overall_Time:'2:01:51.0', Overall_Time_TenthsOfSeconds:73110}
      ,
      {Place:80, Name:'Don Yohman', Bib_No:72, Age:63, Gender:'M', Age_Group:'1 60-64', Swim_Rnk:96, Swim_Time:'22:47.6', Swim_Time_TenthsOfSeconds:13676, T1_Rnk:83, T1_Time:'1:42.4', T1_Time_TenthsOfSeconds:1024, Bike_Rnk:54, Bike_Time:'1:04:35.4', Bike_Time_TenthsOfSeconds:38754, Bike_Rate_MPH:19.2, T2_Rnk:89, T2_Time:'1:49.6', T2_Time_TenthsOfSeconds:1096, Run_Rnk:86, Run_Time:'31:15.8', Run_Time_TenthsOfSeconds:18758, Run_Pace:'9:11/M', Overall_Time:'2:02:11.0', Overall_Time_TenthsOfSeconds:73310}
      ,
      {Place:81, Name:'Jill Inkrott-Smith', Bib_No:26, Age:33, Gender:'F', Age_Group:'6 30-34', Swim_Rnk:73, Swim_Time:'20:29.1', Swim_Time_TenthsOfSeconds:12291, T1_Rnk:55, T1_Time:'1:14.7', T1_Time_TenthsOfSeconds:747, Bike_Rnk:83, Bike_Time:'1:12:02.9', Bike_Time_TenthsOfSeconds:43229, Bike_Rate_MPH:17.2, T2_Rnk:90, T2_Time:'1:50.5', T2_Time_TenthsOfSeconds:1105, Run_Rnk:49, Run_Time:'26:44.6', Run_Time_TenthsOfSeconds:16046, Run_Pace:'7:52/M', Overall_Time:'2:02:22.0', Overall_Time_TenthsOfSeconds:73420}
      ,
      {Place:82, Name:'Jennifer Perrault', Bib_No:47, Age:39, Gender:'F', Age_Group:'5 35-39', Swim_Rnk:94, Swim_Time:'22:32.4', Swim_Time_TenthsOfSeconds:13524, T1_Rnk:23, T1_Time:'0:47.6', T1_Time_TenthsOfSeconds:476, Bike_Rnk:84, Bike_Time:'1:12:22.7', Bike_Time_TenthsOfSeconds:43427, Bike_Rate_MPH:17.2, T2_Rnk:54, T2_Time:'0:57.8', T2_Time_TenthsOfSeconds:578, Run_Rnk:57, Run_Time:'27:21.4', Run_Time_TenthsOfSeconds:16414, Run_Pace:'8:03/M', Overall_Time:'2:04:02.1', Overall_Time_TenthsOfSeconds:74421}
      ,
      {Place:83, Name:'Emilie Hunter', Bib_No:83, Age:23, Gender:'F', Age_Group:'1 20-24', Swim_Rnk:67, Swim_Time:'19:49.2', Swim_Time_TenthsOfSeconds:11892, T1_Rnk:101, T1_Time:'2:22.5', T1_Time_TenthsOfSeconds:1425, Bike_Rnk:81, Bike_Time:'1:10:39.7', Bike_Time_TenthsOfSeconds:42397, Bike_Rate_MPH:17.6, T2_Rnk:87, T2_Time:'1:42.7', T2_Time_TenthsOfSeconds:1027, Run_Rnk:74, Run_Time:'29:44.9', Run_Time_TenthsOfSeconds:17849, Run_Pace:'8:45/M', Overall_Time:'2:04:19.1', Overall_Time_TenthsOfSeconds:74591}
      ,
      {Place:84, Name:'John Contreras', Bib_No:13, Age:36, Gender:'M', Age_Group:'12 35-39', Swim_Rnk:108, Swim_Time:'32:13.4', Swim_Time_TenthsOfSeconds:19334, T1_Rnk:102, T1_Time:'2:30.6', T1_Time_TenthsOfSeconds:1506, Bike_Rnk:37, Bike_Time:'1:01:01.3', Bike_Time_TenthsOfSeconds:36613, Bike_Rate_MPH:20.4, T2_Rnk:88, T2_Time:'1:48.4', T2_Time_TenthsOfSeconds:1084, Run_Rnk:55, Run_Time:'27:06.1', Run_Time_TenthsOfSeconds:16261, Run_Pace:'7:58/M', Overall_Time:'2:04:40.0', Overall_Time_TenthsOfSeconds:74800}
      ,
      {Place:85, Name:'Heidi Seymour', Bib_No:57, Age:38, Gender:'F', Age_Group:'6 35-39', Swim_Rnk:78, Swim_Time:'21:06.8', Swim_Time_TenthsOfSeconds:12668, T1_Rnk:51, T1_Time:'1:12.1', T1_Time_TenthsOfSeconds:721, Bike_Rnk:87, Bike_Time:'1:13:57.7', Bike_Time_TenthsOfSeconds:44377, Bike_Rate_MPH:16.8, T2_Rnk:53, T2_Time:'0:55.6', T2_Time_TenthsOfSeconds:556, Run_Rnk:64, Run_Time:'27:52.9', Run_Time_TenthsOfSeconds:16729, Run_Pace:'8:12/M', Overall_Time:'2:05:05.3', Overall_Time_TenthsOfSeconds:75053}
      ,
      {Place:86, Name:'Lowell Clark', Bib_No:95, Age:45, Gender:'M', Age_Group:'10 45-49', Swim_Rnk:75, Swim_Time:'21:01.3', Swim_Time_TenthsOfSeconds:12613, T1_Rnk:88, T1_Time:'1:56.4', T1_Time_TenthsOfSeconds:1164, Bike_Rnk:78, Bike_Time:'1:10:10.8', Bike_Time_TenthsOfSeconds:42108, Bike_Rate_MPH:17.7, T2_Rnk:71, T2_Time:'1:12.6', T2_Time_TenthsOfSeconds:726, Run_Rnk:85, Run_Time:'31:06.0', Run_Time_TenthsOfSeconds:18660, Run_Pace:'9:09/M', Overall_Time:'2:05:27.5', Overall_Time_TenthsOfSeconds:75275}
      ,
      {Place:87, Name:'Dove Erich', Bib_No:117, Age:38, Gender:'F', Age_Group:'7 35-39', Swim_Rnk:53, Swim_Time:'18:32.0', Swim_Time_TenthsOfSeconds:11120, T1_Rnk:76, T1_Time:'1:34.6', T1_Time_TenthsOfSeconds:946, Bike_Rnk:91, Bike_Time:'1:17:18.6', Bike_Time_TenthsOfSeconds:46386, Bike_Rate_MPH:16.1, T2_Rnk:66, T2_Time:'1:05.9', T2_Time_TenthsOfSeconds:659, Run_Rnk:61, Run_Time:'27:40.8', Run_Time_TenthsOfSeconds:16608, Run_Pace:'8:08/M', Overall_Time:'2:06:12.1', Overall_Time_TenthsOfSeconds:75721}
      ,
      {Place:88, Name:'Randy Kelsey-Knapp', Bib_No:30, Age:48, Gender:'M', Age_Group:'11 45-49', Swim_Rnk:87, Swim_Time:'21:52.8', Swim_Time_TenthsOfSeconds:13128, T1_Rnk:99, T1_Time:'2:12.8', T1_Time_TenthsOfSeconds:1328, Bike_Rnk:92, Bike_Time:'1:18:04.8', Bike_Time_TenthsOfSeconds:46848, Bike_Rate_MPH:15.9, T2_Rnk:14, T2_Time:'0:32.1', T2_Time_TenthsOfSeconds:321, Run_Rnk:56, Run_Time:'27:07.8', Run_Time_TenthsOfSeconds:16278, Run_Pace:'7:59/M', Overall_Time:'2:09:50.5', Overall_Time_TenthsOfSeconds:77905}
      ,
      {Place:89, Name:'Ed D Seaman', Bib_No:56, Age:52, Gender:'M', Age_Group:'7 50-54', Swim_Rnk:83, Swim_Time:'21:32.7', Swim_Time_TenthsOfSeconds:12927, T1_Rnk:95, T1_Time:'2:10.6', T1_Time_TenthsOfSeconds:1306, Bike_Rnk:75, Bike_Time:'1:08:36.6', Bike_Time_TenthsOfSeconds:41166, Bike_Rate_MPH:18.1, T2_Rnk:78, T2_Time:'1:20.3', T2_Time_TenthsOfSeconds:803, Run_Rnk:91, Run_Time:'36:49.2', Run_Time_TenthsOfSeconds:22092, Run_Pace:'10:50/M', Overall_Time:'2:10:29.5', Overall_Time_TenthsOfSeconds:78295}
      ,
      {Place:90, Name:'Anna Zelinskas', Bib_No:74, Age:56, Gender:'F', Age_Group:'1 55-59', Swim_Rnk:79, Swim_Time:'21:24.2', Swim_Time_TenthsOfSeconds:12842, T1_Rnk:49, T1_Time:'1:09.0', T1_Time_TenthsOfSeconds:690, Bike_Rnk:95, Bike_Time:'1:21:10.2', Bike_Time_TenthsOfSeconds:48702, Bike_Rate_MPH:15.3, T2_Rnk:81, T2_Time:'1:21.2', T2_Time_TenthsOfSeconds:812, Run_Rnk:67, Run_Time:'28:28.0', Run_Time_TenthsOfSeconds:17080, Run_Pace:'8:22/M', Overall_Time:'2:13:32.6', Overall_Time_TenthsOfSeconds:80126}
      ,
      {Place:91, Name:'Brooke Hayden', Bib_No:24, Age:23, Gender:'F', Age_Group:'2 20-24', Swim_Rnk:88, Swim_Time:'21:57.7', Swim_Time_TenthsOfSeconds:13177, T1_Rnk:98, T1_Time:'2:12.6', T1_Time_TenthsOfSeconds:1326, Bike_Rnk:93, Bike_Time:'1:19:26.2', Bike_Time_TenthsOfSeconds:47662, Bike_Rate_MPH:15.6, T2_Rnk:85, T2_Time:'1:29.1', T2_Time_TenthsOfSeconds:891, Run_Rnk:77, Run_Time:'29:59.0', Run_Time_TenthsOfSeconds:17990, Run_Pace:'8:49/M', Overall_Time:'2:15:04.7', Overall_Time_TenthsOfSeconds:81047}
      ,
      {Place:92, Name:'Doug Burlen', Bib_No:80, Age:48, Gender:'M', Age_Group:'12 45-49', Swim_Rnk:85, Swim_Time:'21:38.0', Swim_Time_TenthsOfSeconds:12980, T1_Rnk:90, T1_Time:'2:02.1', T1_Time_TenthsOfSeconds:1221, Bike_Rnk:90, Bike_Time:'1:17:18.2', Bike_Time_TenthsOfSeconds:46382, Bike_Rate_MPH:16.1, T2_Rnk:61, T2_Time:'1:02.4', T2_Time_TenthsOfSeconds:624, Run_Rnk:90, Run_Time:'33:31.2', Run_Time_TenthsOfSeconds:20112, Run_Pace:'9:51/M', Overall_Time:'2:15:32.2', Overall_Time_TenthsOfSeconds:81322}
      ,
      {Place:'DNF', Name:'Chris McAlpine', Bib_No:123, Age:39, Gender:'M', Age_Group:'35-39', Swim_Rnk:50, Swim_Time:'18:19.4', Swim_Time_TenthsOfSeconds:10994, T1_Rnk:97, T1_Time:'2:12.1', T1_Time_TenthsOfSeconds:1321, Bike_Rnk:85, Bike_Time:'1:12:37.9', Bike_Time_TenthsOfSeconds:43579, Bike_Rate_MPH:17.1, T2_Rnk:93, T2_Time:'2:07.2', T2_Time_TenthsOfSeconds:1272, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Dori Spaulding', Bib_No:59, Age:36, Gender:'F', Age_Group:'35-39', Swim_Rnk:62, Swim_Time:'18:59.9', Swim_Time_TenthsOfSeconds:11399, T1_Rnk:25, T1_Time:'0:48.0', T1_Time_TenthsOfSeconds:480, Bike_Rnk:88, Bike_Time:'1:14:16.9', Bike_Time_TenthsOfSeconds:44569, Bike_Rate_MPH:16.7, T2_Rnk:77, T2_Time:'1:18.8', T2_Time_TenthsOfSeconds:788, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Benjamin Wildenhaus', Bib_No:70, Age:33, Gender:'M', Age_Group:'30-34', Swim_Rnk:104, Swim_Time:'25:54.0', Swim_Time_TenthsOfSeconds:15540, T1_Rnk:70, T1_Time:'1:30.1', T1_Time_TenthsOfSeconds:901, Bike_Rnk:94, Bike_Time:'1:20:30.0', Bike_Time_TenthsOfSeconds:48300, Bike_Rate_MPH:15.4, T2_Rnk:83, T2_Time:'1:24.6', T2_Time_TenthsOfSeconds:846, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Jay Rutherford', Bib_No:52, Age:54, Gender:'M', Age_Group:'50-54', Swim_Rnk:101, Swim_Time:'24:51.9', Swim_Time_TenthsOfSeconds:14919, T1_Rnk:92, T1_Time:'2:04.1', T1_Time_TenthsOfSeconds:1241, Bike_Rnk:96, Bike_Time:'1:23:06.9', Bike_Time_TenthsOfSeconds:49869, Bike_Rate_MPH:14.9, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Carl Eichert', Bib_No:120, Age:24, Gender:'M', Age_Group:'20-24', Swim_Rnk:5, Swim_Time:'13:12.1', Swim_Time_TenthsOfSeconds:7921, T1_Rnk:3, T1_Time:'0:24.0', T1_Time_TenthsOfSeconds:240, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Evan Price', Bib_No:81, Age:23, Gender:'M', Age_Group:'20-24', Swim_Rnk:9, Swim_Time:'13:40.8', Swim_Time_TenthsOfSeconds:8208, T1_Rnk:26, T1_Time:'0:48.7', T1_Time_TenthsOfSeconds:487, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Nickie Luse', Bib_No:102, Age:34, Gender:'F', Age_Group:'30-34', Swim_Rnk:24, Swim_Time:'16:01.3', Swim_Time_TenthsOfSeconds:9613, T1_Rnk:12, T1_Time:'0:39.3', T1_Time_TenthsOfSeconds:393, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Tom Tiller', Bib_No:109, Age:73, Gender:'M', Age_Group:'70-74', Swim_Rnk:105, Swim_Time:'25:56.9', Swim_Time_TenthsOfSeconds:15569, T1_Rnk:1, T1_Time:'0:19.1', T1_Time_TenthsOfSeconds:191, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Michael Brown', Bib_No:8, Age:37, Gender:'M', Age_Group:'35-39', Swim_Rnk:99, Swim_Time:'24:13.0', Swim_Time_TenthsOfSeconds:14530, T1_Rnk:104, T1_Time:'3:05.7', T1_Time_TenthsOfSeconds:1857, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Ryan Ireland', Bib_No:27, Age:30, Gender:'M', Age_Group:'30-34', Swim_Rnk:106, Swim_Time:'27:30.4', Swim_Time_TenthsOfSeconds:16504, T1_Rnk:100, T1_Time:'2:14.3', T1_Time_TenthsOfSeconds:1343, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DNF', Name:'Leigh Saulnier', Bib_No:54, Age:52, Gender:'F', Age_Group:'50-54', Swim_Rnk:90, Swim_Time:'22:03.4', Swim_Time_TenthsOfSeconds:13234, T1_Rnk:undefined, T1_Time:'', T1_Time_TenthsOfSeconds:undefined, Bike_Rnk:undefined, Bike_Time:'', Bike_Time_TenthsOfSeconds:undefined, Bike_Rate_MPH:undefined, T2_Rnk:undefined, T2_Time:'', T2_Time_TenthsOfSeconds:undefined, Run_Rnk:undefined, Run_Time:'', Run_Time_TenthsOfSeconds:undefined, Run_Pace:'', Overall_Time:'', Overall_Time_TenthsOfSeconds:undefined}
      ,
      {Place:'DQ', Name:'Amy Koorn', Bib_No:33, Age:38, Gender:'F', Age_Group:'DQ 35-39', Swim_Rnk:29, Swim_Time:'16:48.4', Swim_Time_TenthsOfSeconds:10084, T1_Rnk:28, T1_Time:'0:50.6', T1_Time_TenthsOfSeconds:506, Bike_Rnk:58, Bike_Time:'1:05:17.7', Bike_Time_TenthsOfSeconds:39177, Bike_Rate_MPH:19.0, T2_Rnk:62, T2_Time:'1:02.5', T2_Time_TenthsOfSeconds:625, Run_Rnk:'DQ', Run_Time:'15:16.4', Run_Time_TenthsOfSeconds:9164, Run_Pace:'4:29/M', Overall_Time:'1:39:15.7', Overall_Time_TenthsOfSeconds:59557}
      ,
      {Place:'DQ', Name:'Nathan Stockman', Bib_No:62, Age:41, Gender:'M', Age_Group:'DQ 40-44', Swim_Rnk:76, Swim_Time:'21:02.6', Swim_Time_TenthsOfSeconds:12626, T1_Rnk:77, T1_Time:'1:35.0', T1_Time_TenthsOfSeconds:950, Bike_Rnk:89, Bike_Time:'1:15:15.8', Bike_Time_TenthsOfSeconds:45158, Bike_Rate_MPH:16.5, T2_Rnk:45, T2_Time:'0:49.3', T2_Time_TenthsOfSeconds:493, Run_Rnk:'DQ', Run_Time:'16:15.2', Run_Time_TenthsOfSeconds:9752, Run_Pace:'4:47/M', Overall_Time:'1:54:58.1', Overall_Time_TenthsOfSeconds:68981}
      ,
      {Place:'DQ', Name:'Jamie Viers', Bib_No:66, Age:39, Gender:'M', Age_Group:'DQ 35-39', Swim_Rnk:93, Swim_Time:'22:27.7', Swim_Time_TenthsOfSeconds:13477, T1_Rnk:103, T1_Time:'2:56.8', T1_Time_TenthsOfSeconds:1768, Bike_Rnk:82, Bike_Time:'1:11:23.1', Bike_Time_TenthsOfSeconds:42831, Bike_Rate_MPH:17.4, T2_Rnk:95, T2_Time:'2:31.2', T2_Time_TenthsOfSeconds:1512, Run_Rnk:'DQ', Run_Time:'17:47.6', Run_Time_TenthsOfSeconds:10676, Run_Pace:'5:14/M', Overall_Time:'1:57:06.6', Overall_Time_TenthsOfSeconds:70266}
      ,
      {Place:'DQ', Name:'Julie Blair', Bib_No:7, Age:50, Gender:'F', Age_Group:'DQ 50-54', Swim_Rnk:92, Swim_Time:'22:14.8', Swim_Time_TenthsOfSeconds:13348, T1_Rnk:80, T1_Time:'1:39.5', T1_Time_TenthsOfSeconds:995, Bike_Rnk:86, Bike_Time:'1:13:35.1', Bike_Time_TenthsOfSeconds:44151, Bike_Rate_MPH:16.9, T2_Rnk:92, T2_Time:'2:06.0', T2_Time_TenthsOfSeconds:1260, Run_Rnk:'DQ', Run_Time:'17:52.8', Run_Time_TenthsOfSeconds:10728, Run_Pace:'5:15/M', Overall_Time:'1:57:28.3', Overall_Time_TenthsOfSeconds:70483}
      ,
      {Place:'DQ', Name:'Sarah Harvey', Bib_No:88, Age:30, Gender:'F', Age_Group:'DQ 30-34', Swim_Rnk:70, Swim_Time:'20:01.1', Swim_Time_TenthsOfSeconds:12011, T1_Rnk:59, T1_Time:'1:18.3', T1_Time_TenthsOfSeconds:783, Bike_Rnk:97, Bike_Time:'1:24:05.6', Bike_Time_TenthsOfSeconds:50456, Bike_Rate_MPH:14.8, T2_Rnk:21, T2_Time:'0:37.4', T2_Time_TenthsOfSeconds:374, Run_Rnk:'DQ', Run_Time:'16:48.8', Run_Time_TenthsOfSeconds:10088, Run_Pace:'4:56/M', Overall_Time:'2:02:51.4', Overall_Time_TenthsOfSeconds:73714}
      ]


function getMultiplier(field){
      switch (field) {

      case "Age":
      case "Bike_Rate_MPH":
return 10;
break;
      case "Swim_Rnk":
      case "T1_Rnk":
      case "Bike_Rnk":
      case "T2_Rnk":
      case "Run_Rnk":
return 10;      
      break;

      case "Swim_Time_TenthsOfSeconds":
      return 0.05;
      case "T1_Time_TenthsOfSeconds":
      case "T2_Time_TenthsOfSeconds":
      return 0.5;
      break;


      case "Bike_Time_TenthsOfSeconds":
      case "Run_Time_TenthsOfSeconds":
      case "Overall_Time_TenthsOfSeconds":
      return 0.01;
break;
}
}
      function sanitizeBikeRateMPH(obj){
      //var val=(typeof obj.Bike_Rate_MPH !=='undefined')?obj.Bike_Rate_MPH*10 + "px":"0px"; 
      var val="0px";
      if (typeof obj.Bike_Rate_MPH !== 'undefined') {
      val = obj.Bike_Rate_MPH*40+"px";
      }
      return val;
      }

      function sanitize2(obj){
      //var val=(typeof obj.Bike_Rate_MPH !=='undefined')?obj.Bike_Rate_MPH*10 + "px":"0px"; 
      var val="0";
      if (typeof obj.Bike_Rate_MPH !== 'undefined') {
      val = obj.Bike_Rate_MPH*40;
      }
      return val;
      }

      function sanitize(obj,field){
      var val="0px";
      if (typeof obj[field] !== 'undefined') {
      var multiplier = getMultiplier(field);
      val = obj[field]*multiplier+"px";
      }
      return val;
      }

      function sanitize3(obj,field){
      var val="0";
      if (typeof obj[field] !== 'undefined') {
      var multiplier = getMultiplier(field);
      val = obj[field]*multiplier;
      }
      return val;
      }

      function sanitize4(obj,field){
      var val="0";
      if (typeof obj[field] !== 'undefined') {
      val = obj[field];
      }
      return val;
      }


      function sanitizeRunTimeTenthsOfSeconds(obj){
      var val="0px";
      if (typeof obj.Run_Time_TenthsOfSeconds !== 'undefined') {
      val = obj.Run_Time_TenthsOfSeconds/10+"px";
      }
      return val;
      }

      function sanitizeTimeTenthsOfSeconds(obj,field){
      var val="0px";
      if (typeof obj[field] !== 'undefined') {
      val = obj[field]/50+"px";
      }
      return val;
      }

      function genderColor(d){
      if (d.Gender==='F') {
      return "pink"
      }
      if (d.Gender==='M'){
      return "steelblue"
      }
      return black
      }


var barHeight = 12;
var barSpacer = 15;
var textHeight = 10;

      var width = 460,
      height = data2.length*barSpacer;

//      var svg = d3.select(".chart")
      var svg = d3.select(".chartOrig")
      .append("svg")
      .attr("width",width)
      .attr("height",height)
      .append("g")



function createMenu(field) {

//var field = "Name"
var length = data2.length

var target= document.getElementById("menu")

var output="<select onchange='showStats(this)'>"
for (var counter =0 ; counter < length; counter++){
output+="<option>"+(data2[counter])[field]+"</option>"
}
output+="</select>"

target.innerHTML = output
};


      //it'd be nice if there was a background grid that extended to the axes
      //or a fisheye view to get it all on one screen and the fisheye gave the details of that participant
      function plot (field) { 

	  var xScale = d3.scale.linear()
	      .domain([0,d3.max(data2,function(d) { return d[field];})])
	      .range([0,width]);

	  console.log('d3.max:'+d3.max(data2,function(d) { return d[field];}));

      switch (field) {
      case "Age":
      case "Swim_Rnk":
      case "T1_Rnk":
      case "Bike_Rnk":
      case "T2_Rnk":
      case "Run_Rnk":
      case "Bike_Rate_MPH":
      case "Overall_Time_TenthsOfSeconds":
      case "Swim_Time_TenthsOfSeconds":
      case "T1_Time_TenthsOfSeconds":
      case "Bike_Time_TenthsOfSeconds":
      case "T2_Time_TenthsOfSeconds":
      case "Run_Time_TenthsOfSeconds":

      var rect = svg.selectAll("rect")
      .data(data2)

      rect.enter().append("rect")
      .attr("x", 0)
      .attr("y", function(d,i) { return i*barSpacer})
//      .attr("width", function(d) { var rt =  xScale(parseInt(sanitize2(d,field),10)); console.log(rt); return rt })
//      .attr("width", function(d) { return sanitize4(d,field);  })
      .attr("width", function(d) { var val = xScale(parseInt(d[field],10)); console.log(typeof val); return isNaN(val)?0:val;  })
      .attr("height",barHeight)
      .attr("fill", function(d) {return genderColor(d)})

      rect.transition().duration(1000)
      .attr("x", 0)
      .attr("y", function(d,i) { return i*barSpacer})
//      .attr("width", function(d) { var rt =  xScale(parseInt(sanitize2(d,field),10)); console.log(rt); return rt })
//      .attr("width", function(d) { return sanitize4(d,field);  })
      .attr("width", function(d) { var val = xScale(parseInt(d[field],10)); console.log(typeof val); return isNaN(val)?0:val;  })
      .attr("height",barHeight)

      rect.exit()
      .transition().duration(100)
      .attr("width", 0)
      .attr("height",0)
      .remove();


      var text= svg.selectAll("text")
      .data(data2)
      .enter()
      .append("text")
      .text(function(d) { return d.Age+"/"+d.Place })
      .attr("x", function(d, i) { return 0 })
      .attr("y", function(d,i) { return i*barSpacer+textHeight}) 


      break;

      case "Swim_Time_TenthsOfSeconds":
      case "T1_Time_TenthsOfSeconds":
      case "Bike_Time_TenthsOfSeconds":
      case "T2_Time_TenthsOfSeconds":
      case "Run_Time_TenthsOfSeconds":


      var rect = svg.selectAll("rect")
      .data(data2)

      rect.enter().append("rect")
      .attr("x", 0)
      .attr("y", function(d,i) { return i*barSpacer})
      .attr("width", function(d) { return sanitize(d,field)||"10" })
      .attr("height",barHeight)
      .attr("fill", function(d) {return genderColor(d)})

      rect.transition().duration(1000)
      .attr("x", 10)
      .attr("y", function(d,i) { return i*barSpacer})
      .attr("width", function(d) { return sanitize(d,field)})
      .attr("height",barHeight)

      rect.exit()
      .transition().duration(100)
      .attr("width", 0)
      .attr("height",0)
      .remove();


      var text= svg.selectAll("text")
      .data(data2)
      .enter()
      .append("text")
      .attr("x", function(d, i) { return 0 })
      .attr("y", function(d,i) { return i*barSpacer+textHeight}) 
      .text(function(d) { return d.Age+"/"+d.Place })

      text.exit().remove();

      break;

      case "Overall_Time_TenthsOfSeconds":

      var rect = svg.selectAll("rect")
      .data(data2)

      rect.enter().append("rect")
      .attr("x", 0)
      .attr("y", function(d,i) { return i*barSpacer})
      .attr("width", function(d) { return sanitize(d,field) })
      .attr("height",barHeight)
      .attr("fill", function(d) {return genderColor(d)})

      rect.transition().duration(1000)
      .attr("x", 10)
      .attr("y", function(d,i) { return i*barSpacer})
      .attr("width", function(d) { return sanitize(d,field)||"10" })
      .attr("height",barHeight)

      rect.exit()
      .transition().duration(100)
      .attr("width", 0)
      .attr("height",0)
      .remove();

      var text= svg.selectAll("text")
      .data(data2)
      .enter()
      .append("text")
      .text(function(d) { return d.Age+"/"+d.Place })
      .attr("x", function(d, i) { return 0 })
      .attr("y", function(d,i) { return i*barSpacer+textHeight}) 

      break;
      default:

      break;
      }
      }
      plot("Age");

window.onload=createMenu("Swim_Rnk");


