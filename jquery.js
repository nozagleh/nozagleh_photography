$(function(){
				$("#wrapper").fadeIn(500);
				$("#search").click(function() {
					$("#search input").val("");
				});
				
				var countIMG = $(".pictureBox").size();
				
				
				$("#search").focusout(function(){
					$("#search input").val("Search...");
				});
				
				$(".pictureBox").click(function(){
					var imgNR = $(this).children().attr("src");
					var imgSubStr = imgNR.substr(13);
					$(".pictureBox").css("display","none");
					$(".img_big").css("display","block").html("<img src='images/" + imgSubStr + "'/>");
					$(".backbtn").css("display","block");
					$(".backbtn a").css("display","block");
				});
				
				$(".logo").click(function(){
					if($(window).width() >= 1040){
					$(".click").hide();
					}
					else{
						$(".norm").toggle("swing");
					}
				});
				
			});