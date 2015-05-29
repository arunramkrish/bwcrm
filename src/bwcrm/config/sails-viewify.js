module.exports = { 
	template : 	[
		{
			type : 'string' ,
			htmltext : '        <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\"\r\n            <% if( p_lp_update ) {%>\r\n              value=<%= p_lp.{{name}} %>\r\n            <% } else { %> \r\n            value=\"\" \r\n            <% } %>  >                        \r\n          </div>\r\n        </div>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'text' ,
			htmltext : '        <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <textarea class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\"> </textarea>                       \r\n          </div>\r\n        </div>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'float' ,
			htmltext : '      <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"number\" class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\"\r\n            <% if( p_lp_update ) {%>\r\n              value=<%= p_lp.{{name}} %>\r\n            <% } else { %> \r\n            value=\"0\" \r\n            <% } %>  >                        \r\n          </div>\r\n        </div>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'integer' ,
			htmltext : '      <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"number\" class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\"\r\n            <% if( p_lp_update ) {%>\r\n              value=<%= p_lp.{{name}} %>\r\n            <% } else { %> \r\n            value=\"0\" \r\n            <% } %>  >                        \r\n          </div>\r\n        </div>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'email' ,
			htmltext : '        <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"email\" class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\" required>\r\n          </div>\r\n        </div>        \r\n' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'date' ,
			htmltext : '        <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <input class=\"form-control datepicker\" type=\"text\" placeholder=\"dd/mm/yyyy\" name=\"{{name}}\" id=\"{{name}}\">\r\n           </div>\r\n        </div> \r\n        \r\n        <script type=\"text/javascript\">\r\n        $(function(){\r\n          $(\'.datepicker\').datepicker({\r\n            format: \'mm-dd-yyyy\'\r\n          });\r\n        });\r\n        </script>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		} ,
		{
			type : 'boolean' ,
			htmltext : '        <!-- {{viewify_name}} -->\r\n        <div class=\"form-group\">\r\n          <label for=\"{{name}}\" class=\"col-lg-4 control-label\">{{viewify_name}}</label>\r\n          <div class=\"col-lg-8\">\r\n            <select class=\"form-control\" name=\"{{name}}\" id=\"{{name}}\">\r\n              <option value=\"true\">Yes </option>\r\n              <option value=\"false\">No </option>\r\n            </select>                      \r\n          </div>\r\n        </div>' ,
			specials : [
				{
					text : '{{name}}' ,
					replacer : 'name'
				} ,
				{
					text : '{{viewify_name}}' ,
					replacer : 'viewify_name'
				}
			]
		}
		]
};