$(document).ready(function()
	{
		$(window).bind( 'hashchange', function(e) {
				_gaq.push(['_setAccount', 'UA-26921612-1']);
				_gaq.push(['_trackPageview', location.pathname + location.search + location.hash]);
				
		});
		$("#navigation a[href='gallery/']").click(function()
			{	
				initHash("#gallery");
				
				return false;
			});
		initHash();
		
		
		$("a[href*='#']").click(function()
			{
				var hash = $(this).attr("href").split("#")[1];
				initHash(hash);
			});
		
		initImageNavigations();	
		
	}          
	
	
	
	);

function initHash(forceHash)
{
	
	if(forceHash)
		window.location.hash = forceHash;
	if(window.location.hash)
	{
		
		var hashArray = window.location.hash.split("_");
		if(hashArray.length > 0)
		{
			hashArray[0] = hashArray[0].substring(1);
			switch(hashArray[0])
			{
			case 'gallery':
				loadGallery(hashArray);
				break;
			default:
				
			}
		}
	}	
}


function loadGallery(hashArray)
{
	$.fancybox({
			type: "ajax",
			href: "?type=1001",
			ajax: {
                type: "POST",
                data: {
                	"tx_ginassposagallery_pi1": hashArray
                }
            },
			autoScale: false,
			autoDimensions: false,
			showCloseButton: true,
			hideOnOverlayClick: true,
			overlayColor: "#f0d9d1",
			width:720,
			height: 2004,
			onComplete: function()
			{
				var that = this;
				$("#fancybox-wrap").css("height","2004px !important");
				$("#fancybox-overlay").css("height","2024px !important");
				$('<a class="closeButton">Zurück</a>').
				appendTo("#fancybox-content > *:last").click(function()
					{
						window.location.hash = "";
						$.fancybox.close();	
					});
				
			}
	});	
}



function initImageNavigations()
{
	$('.csc-textpic-imagewrap').each(function()
		{
			var $wrap = $(this);
			var selected = 0;
			var maxitems = $wrap.find("dl").length;
			
			if($wrap.find("dl").length > 1)
			{
			$wrap.find("dl").each(function()
				{
					var innerHtml = '<div class="navigation"><a class="previous" rel="noreferrer"><img src="fileadmin/templates/card_layout/images/arrow_left.png"></a><span class="pageIndicators"></span><a class="next" rel="noreferrer"><img src="fileadmin/templates/card_layout/images/arrow_right.png"></a></div>';
					if($(this).find("dd").length > 0)
					{
						
						$(this).find("dd").prepend(innerHtml);
					}
					else
					{
						$("<dd></dd>").appendTo($(this)).append(innerHtml);	
					}
				}
				);
			}
			
			function show(selected)
			{
				
				$wrap.find("dl").each(function(index, item)
					{
						if(index == selected)
						{
							$(item).show();	
						}
						
						else
						{
							$(item).hide();	
						}
					});
				$wrap.find("dl").each(function()
					{
						$(this).find(".pageIndicators a").each(function(index, item)
							{
								if(index == selected)
								{
									$(item).addClass("active");	
								}
								
								else
								{
									$(item).removeClass("active");	
								}
							}
							);
					});
				
				
			}
			
			for(i=0;i<maxitems;i++)
			{
				$wrap.find(".navigation .pageIndicators").append("<a>"+(i+1)+"</a>");	
			}
			$wrap.find("dl").each(function()
				{
					$(this).find(".navigation .pageIndicators a").each(function(index, item)
						{
							$(item).click(function(){show(index)});
							
						});
					
					
				});
			
			
			function showNext()
			{
				selected = (selected+1)%maxitems;
				
				
				
				show(selected);
			}
			
			function showPrevious()
			{
				selected =(selected-1+maxitems)%maxitems;
				show(selected);
			}
			
			$(this).find(".navigation .next").click(showNext);
					
					$(this).find(".navigation .previous").click(showPrevious);
					
					
			
			show(selected);
			
			
			
		}
		);
}





