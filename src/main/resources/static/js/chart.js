$(function() {
	$('#year').on("change", function() {
		var hostUrl = 'http://localhost:8080/chart/graph';
		var year = $("#year").val();
		$.ajax({
			url : hostUrl,
			type : 'POST',
			dataType : 'json',
			data : {
				year : year
			},
			async : true
		}).done(function(data) {
			console.log(data);
			console.dir(JSON.stringify(data));
			/*<![CDATA[*/
			var ct = document.getElementById("graph");
			var chart = new Chart(ct, {
				type : 'line',
				data : {
					labels :/*[[ ${yokos} ]]*/, 
					datasets : [ 
						{
						/*■ グラフの値 */
						data : [ 35, 34, 37, 35, 34, 35, 34, 25 ],
						/*■ グラフの線の題名 */
	/*  				label : '最高気温(度）', */
						/*■ グラフの線の色 */
	/* 					borderColor : "rgba(255,0,0,1)", */
						/*■ ①グラフの背景の色：なし */
	/*                  fill: false, */
						/*■ ②グラフの背景の色：細かく */
	/* 					backgroundColor : "rgba(0,0,0,0)" */					
						/*■ 線の種類 */
	/*                  lineTension: 0, */
						}
					],
				},
				/*■ オプション設定 */
				/* ①title、②scalesを設定します。 */
				options : {
					/*■ グラフの名前*/
					title : {
						text : '気温（8月1日~8月7日）'
					},
					/*■ グラフ軸の設定 */
					scales : {
						/*■ タテ軸 */
						yAxes : [ {
							/*■ タテ軸の目盛線の設定 */
							ticks : {
								/*■ 最大値  */
								suggestedMax : 40,
								/*■ 最小値 */
								suggestedMin : 30,
								/*■ 軸の刻み幅 */
								stepSize : 2,
								/*■ 軸の表記 */
								callback : function(value) {
									return value + '度'
								}
							}
						} ]
					},
				}
			});
			/*]]>*/

			
		}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
			alert("エラーが発生しました！");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		});
	});
});
