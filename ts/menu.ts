temp.menu = COA
temp.menu {
	10 = HMENU
	10 {
		1 = TMENU
		1 {
			maxItems = 5
			begin = 1
			#expAll =1
			wrap = <ul class="column">|<div class="clear"></div></ul>
			noBlur = 1
			NO = 1
			NO {
				
				wrapItemAndSub = <li>|</li>
				stdWrap.htmlSpecialChars = 1
				ATagTitle.field = title
			}
			ACT <.NO
			ACT {
				
				wrapItemAndSub = <li class="active">|</li>
			}
		}
	}
	20 < .10
	20 {
		1 = TMENU
		1 {
			begin = 6
			maxItems = 5
		}
	}
	30 < .10
	30 {
		1 = TMENU
		1 {
			begin = 11
			maxItems = 5
		}
	}
	40 < .10
	40 {
		1 = TMENU
		1 {
			begin = 16
			maxItems = 5
		}
	}
}



temp.menu2 = COA 
temp.menu2 {
	10 = HMENU 
	# 10.special = directory 
	# 10.special.value = 1 
	10.1 = TMENU 
	10.1 {
		wrap = <div>1.teil<br>|</div> 
		NO {
			stdWrap.cObject = COA 
			stdWrap.cObject {
				10 = TEXT 
				10.field = title 
				if.value.data = register:count_HMENU_MENUOBJ 
				if.negate = 1 
				if.isLessThan.prioriCalc=1 
				if.isLessThan.cObject=TEXT 
				if.isLessThan.cObject.insertData=1 
				if.isLessThan.cObject.value = ({register:count_menuItems}+1)/3 
				wrap = |<br> 
			} 
		} 
	} 
	20 < .10 
	20.1.wrap = <div>2.teil<br>|</div> 
	20.1.NO.stdWrap.cObject.if.negate > 
	30 < .20 
	30.1.wrap = <div>3.teil<br>|</div> 
	30.1.NO.stdWrap.cObject.if.negate > 
}


temp.menu3 = HMENU
temp.menu3 {
	special = directory
	special.value.field = uid
	1 = TMENU
	1 {
		noBlur = 1
		expAll = 1
		wrap = <ul class="nav_1">|</ul>
		begin = 0
		maxItems = 4
		NO = 1
		NO {
			allWrap = <li>|</li>
		}
	}
}
20 < .10
20 {
	1 {
		begin = 5
		wrap = <ul class="nav_2">|</ul>
	}
}

temp.menu < temp.menu
