$(document).ready(function()
	{
		var options = {  
			
			'detailView' : $(".newsDetailView")
		}; 
		$(".teaser").teaserBox(options);
		
		
		
	});


(function($){  
		$.fn.teaserBox = function(options) {  
			var defaults = {  
				
				'detailView' : null
			};  
			var options = $.extend(defaults, options);
			
			
			
			return this.each(function() {  
					var that = this;
					this.current = getStartPos();
					this.maxItems = $(this).find(".news-item-box").length;
					$(this).find(".teaserContainer").css("position","relative");
					$(this).find(".teaserContainer").height($(this).find(".news-item-box").height());	
					$(this).find(".news-item-box").hide();	
					$(this).find(".news-item-box").css("position","absolute");
					
					options.detailView.find(".item").css("position","absolute");
					//options.detailView.find(".item").css("width","100%");
					$(this).find(".news-item-box").css("width","100%");
					
					// init pageNav
					for(i=0;i<this.maxItems;i++)
					{
						$(this).find(".navigation .pageIndicators").append("<a>"+(i+1)+"</a>");	
					}
					$(this).find(".navigation .pageIndicators a").each(function(index, item)
						{
							$(item).click(function(){show(index)});
						});
					
					if(this.maxItems > 1)
					{
						$(this).find(".navigation").show();	
					}
					else
					{
							$(this).find(".navigation").hide();	
						
					}
					function getStartPos()
					{
						var position = 0;
						$(that).find(".news-item-box").each(function(index, item)
							{
								if($(item).hasClass("news-current"))
								{
									position = index;	
									
								}
							}
							);
						
						return position;
					}
					
					
					function showCurrent()
					{
						options.detailView.find(".news-item-box").each(function(index, item)
							{
								/*
								if(index == that.current)
								{
								$(item).show();
								$(item).css({position:'absolute', left:-500})
								.animate({left:0});
								
								}
								else
								{
								$(item).hide();
								}
								
								*/
								if(index == that.current)
								{
									$(item).fadeIn();
									
									
								}
								else
								{
									$(item).hide();
								}
							}
							);
						
						$(that).find(".news-item-box").each(function(index, item)
							{
								
								if(index == that.current)
								{
									$(item).fadeIn();  
									$(item).find(".navigation .pageIndicators a").each(function(index, item)
										{
											if(index == that.current)
											{
												$(item).addClass("active");
												
											}
											else
											{
												
												$(item).removeClass("active");
											}
										});
									
								}
								else
								{
									$(item).fadeOut();
								}
							});  
						
					}
					function showNext()
					{
						that.current = (that.current+1)%that.maxItems;
						
						
						
						showCurrent();
					}
					function show(position)
					{
						that.current = (position)%that.maxItems;
						showCurrent();
					}
					
					
					function showPrevious()
					{
						that.current =(that.current-1+that.maxItems)%that.maxItems;
						showCurrent();
					}
					
					$(this).find(".navigation .next").click(showNext);
					
					$(this).find(".navigation .previous").click(showPrevious);
					
					
					
					$(window).keydown(function(event){
							switch (event.keyCode) {
							case 37:
								// left
								showPrevious();
								break;
							case 39:
								// right
								showNext();
								break;
							default:
								break;
							}	
					});
					
					
					showCurrent();
					
					
					
					
			});  
		};  
})(jQuery); 

