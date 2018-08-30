		var t =new Date();//开始时间
		
		function showtime(){
			
			var time = new Date();

			var date3=time.getTime()-t.getTime();

			//var days=Math.floor(date3/(24*3600*1000));//相差天数

			var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
			var hours=Math.floor(leave1/(3600*1000));

			//计算相差分钟数
			var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
			var minutes=Math.floor(leave2/(60*1000));

			//计算相差秒数
			var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000);


			var formattime = time.toLocaleString();
			
			var howlong = document.getElementById("howlong");

			var classtime = document.getElementById("time");
			
			classtime.innerHTML = formattime;

			howlong.innerHTML = hours +":"+minutes+":"+seconds;
		}

		setInterval("showtime();",1000);