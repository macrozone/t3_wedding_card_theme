<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/card_layout/ts/realurl.ts">

<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/card_layout/ts/autoparser.ts">

<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/card_layout/ts/menu.ts">

plugin.tt_news.excludeAlreadyDisplayedNews = 0

lib.stdheader.10 {
	1 {
		split {
			token = |
			cObjNum =  1 |*| 1 |*| 2
			1 = TEXT
			1.current = 1
			1.wrap = |<br>
			2 = TEXT
			2.current = 1
			2.wrap =
		}
	}
	2.split < .1.split
	3.split < .1.split
	4.split < .1.split
	5.split < .1.split
}

config.doctype = html_5

# Main TEMPLATE cObject for the BODY
temp.mainTemplate = TEMPLATE
temp.mainTemplate {
    # Feeding the content from the Auto-parser to the TEMPLATE cObject:
    template =< plugin.tx_automaketemplate_pi1
    # Select only the content between the <body>-tags
    workOnSubpart = DOCUMENT_BODY
    
    subparts.navigation < temp.menu
    subparts.contentLeft < styles.content.getLeft
    
    
    subparts.contentRight< styles.content.getRight
}
# Main TEMPLATE cObject for the HEAD
temp.headTemplate = TEMPLATE
temp.headTemplate {
    # Feeding the content from the Auto-parser to the TEMPLATE cObject:
    template =< plugin.tx_automaketemplate_pi1
    # Select only the content between the <head>-tags
    workOnSubpart = DOCUMENT_HEAD
}
# Default PAGE object:
page = PAGE
page{
	typeNum = 0
	# Copying the content from TEMPLATE for <body>-section:
	10 < temp.mainTemplate
	# Copying the content from TEMPLATE for <head>-section:
	headerData.10  < temp.headTemplate
	
	
	includeCSS { 
		
		file1 = fileadmin/templates/card_layout/tt_news/teaser.css 
		file1.media = screen,projection 
		
		
		file2 =fileadmin/templates/card_layout/js/jquery.fancybox-1.3.4/fancybox/jquery.fancybox-1.3.4.css
		
		file2.media = screen,projection 
		file3 = fileadmin/templates/card_layout/css/gallery.css 
		file3.media = screen,projection 
		
	}
	
	# javascripts
	includeJS {
		file10 = fileadmin/templates/card_layout/js/scripts.js
		
		
		
	}
	
}
# special page for ajaxCalls
ajaxRequests = PAGE
ajaxRequests {
	typeNum = 1000
	10 < plugin.tx_ginassposaajax_pi1
	config {
		disableAllHeaderCode = 1
		xhtml_cleaning = 0
		admPanel = 0
		debug = 0
	}
}

# special page for gallery
ajaxGallery = PAGE
ajaxGallery {
	typeNum = 1001
	10 < plugin.tx_ginassposagallery_pi1
	config {
		
		disableAllHeaderCode = 1
		xhtml_cleaning = 0
		admPanel = 0
		debug = 0
		#no_cache = 1		
	}	
	
	
}






# page title




# tt_news


plugin.tt_news.useHRDatesSingle = 1
plugin.tt_news.useHRDatesSingleWithoutDay = 0
plugin.tt_news.dontUseBackPid = 1
plugin.tt_news.useHRDates = 1

plugin.tt_news{
    displayLatest {
    	content_stdWrap.parseFunc < lib.parseFunc_RTE
    	subheader_stdWrap.stripHtml = 0
    }
    displayList{
    	content_stdWrap.parseFunc < lib.parseFunc_RTE
    }
}

plugin.tt_news.displayLatest.subheader_stdWrap.ifEmpty >


# google analytics
	
        
    config.tx_monoga_pi1 {
 ga_type = 2
 ga_code = UA-26921612-1
}

page.1000 < plugin.tx_monoga_pi1


tt_content.image.20.maxW = 385

tt_content.image.20.maxH = 430
tt_content.image.20.cols = 1
tt_content.image.20.cols.field >

