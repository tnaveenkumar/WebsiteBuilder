 jQuery(document).ready(function() {
 jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Letters and spaces only please");  
	
jQuery.validator.addMethod("alphanumeric", function(value, element) 
{
return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
}, "Letters and Number only please"); 
	
	jQuery.validator.addMethod("numeric", function(value, element) 
{
return this.optional(element) || /^[0-9\-]+$/i.test(value);
}, "Allowed Number only"); 

			jQuery("#contact").validate({
        // Specify the validation rules
        rules: {
            txtName: {required: true,lettersonly: true},
  		 txtEmail: {required: true,email: true},
   txtContact: {required: true,maxlength: 10,minlength: 10,numeric:true},
   selProgram: {required: true},
    selState: {required: true},
   txtCity: {required: true},
   declare : {required:true}
        },
 messages: {
          txtName: "Please enter the name",
      txtEmail: "Please enter the valid email address",
       txtContact: {
                required: "Please enter the phone number",
                numeric: "Contain only numbers.",
				maxlength:"Maximum length exceed",
				minlength:"Phone number is minimum length"
            	},
		selProgram: "Please select the course",
		selState: "Please select the state",
		txtCity: "Please select the city",
		declare: "Please mark the checkbox",
    
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
	
		jQuery("#contact_res").validate({
        // Specify the validation rules
        rules: {
            name: {required: true,lettersonly: true},
  		 email: {required: true,email: true},
   phone: {required: true,maxlength: 10,minlength: 10,numeric:true}
        },
 messages: {
          name: "Please enter the name",
     	 email: "Please enter the valid email address",
      	 phone: {
                required: "Please enter the phone number",
                numeric: "Contain only  numbers.",
				maxlength:"Maximum length exceed",
				minlength:"Phone number is minimum length"
            	},
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
	
	});

