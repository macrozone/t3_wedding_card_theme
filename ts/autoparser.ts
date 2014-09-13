# Configuring the Auto-Parser:
plugin.tx_automaketemplate_pi1 {
    # Read the template file:
  content = FILE
  content.file = fileadmin/templates/card_layout/html/main.html
    # Here we define which elements in the HTML that 
    # should be wrapped in subpart-comments:
  elements {
    BODY.all = 1
    BODY.all.subpartMarker = DOCUMENT_BODY
    HEAD.all = 1
    HEAD.all.subpartMarker = DOCUMENT_HEAD
    HEAD.rmTagSections = title
    DIV.all = 1
  }
    # Prefix all relative paths with this value:
  relPathPrefix = fileadmin/templates/card_layout/html/
}
