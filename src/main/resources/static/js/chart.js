/*<![CDATA[*/
$(function(){
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
		}).done(function(data){
			console.log(data);
			console.dir(JSON.stringify(data));
			
			var ct = document.getElementById("graph");
			var chart = new Chart(ct, {
				type : 'line',
				data : {
					labels :/*[[${yokos}]]*/,
					datasets : [ 
						{
							data :/*[[${tates}]]*/,
						}
					],
				},
				options : {
					title : {
                        display: true,
						text : '売上'
					},
					scales : {
						yAxes : [ {
							ticks : {
								suggestedMax : 40,
								suggestedMin : 30,
								stepSize : 2,
								callback : function(value) {
									return value + '度'
								}
							}
						} ]
					},
				}
			});
						
		}).fail(function(){
			alert("エラーが発生しました！");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		//■ ajaxの終わり
		});
	//■ onの終わり
	});
//■ 1番上のready関数の最後
});
/*]]>*/