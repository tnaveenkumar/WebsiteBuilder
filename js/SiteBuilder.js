$(function() {
	function editLogoModel() {
		var htm='<div class="modal fade" id="EditLogoModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
			htm+='<div class="modal-dialog">';
				htm+='<div class="modal-content">';
				  htm+='<div class="modal-header">';
					htm+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					htm+='<h4 class="modal-title">Edit Logo</h4>';
				  htm+='</div>';
				  htm+='<div class="modal-body">';
					htm+='<form id="ImgUploadForm" enctype="multipart/form-data" role="form">';
						htm+='<div class="form-group">';
							htm+='<label for="LogoLink">Logo URL</label>';
							htm+='<input type="text" class="form-control" name="LogoLink" id="LogoLink" placeholder="Logo URL">';
						htm+='</div>';
						htm+='<p>OR</p>';
						htm+='<div class="form-group">';
							htm+='<label for="ImageUploade">Browse Logo</label>';
							htm+='<input type="file" name="file" id="ImageUploade"><input type="hidden">';
						htm+='</div>';
					htm+='</div>';
				  htm+='</form>';
				  htm+='<p class="HintText"></p>';
				  htm+='<div class="modal-footer">';
					htm+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
					htm+='<button type="button" class="btn btn-primary SaveLogo">Save changes</button>';
				  htm+='</div>';
				htm+='</div>';
			  htm+='</div>';
			htm+='</div>';
		$('.ModelHolder').append(htm);
	}
	editLogoModel();
	
	function editEmail() {
		var htm='<div class="modal fade" id="EditEmailModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
			htm+='<div class="modal-dialog modal-sm">';
				htm+='<div class="modal-content">';
				  htm+='<div class="modal-header">';
					htm+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					htm+='<h4 class="modal-title">Edit Email</h4>';
				  htm+='</div>';
				  htm+='<div class="modal-body">';
					htm+='<div class="form-group">';
						htm+='<label for="Email">Email</label>';
						htm+='<input type="email" class="form-control" name="Email" id="Email" placeholder="Email Address">';
					htm+='</div>';
				  htm+='<div class="modal-footer">';
					htm+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
					htm+='<button type="button" class="btn btn-primary SaveEmail">Save changes</button>';
				  htm+='</div>';
				htm+='</div>';
			  htm+='</div>';
			htm+='</div>';
		$('.ModelHolder').append(htm);
	}
	editEmail();
	
	function editMobile() {
		var htm='<div class="modal fade" id="EditPhoneModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
			htm+='<div class="modal-dialog modal-sm">';
				htm+='<div class="modal-content">';
				  htm+='<div class="modal-header">';
					htm+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
					htm+='<h4 class="modal-title">Edit Phone</h4>';
				  htm+='</div>';
				  htm+='<div class="modal-body">';
					htm+='<div class="form-group">';
						htm+='<label for="Email">Phone</label>';
						htm+='<input type="text" class="form-control" name="Phone" id="Phone" placeholder="Phone number">';
					htm+='</div>';
				  htm+='<div class="modal-footer">';
					htm+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
					htm+='<button type="button" class="btn btn-primary SavePhone">Save changes</button>';
				  htm+='</div>';
				htm+='</div>';
			  htm+='</div>';
			htm+='</div>';
		$('.ModelHolder').append(htm);
	}
	editMobile();
	
	function FormBuilder() {
		var htm='';
		htm+='<div class="modal fade" id="FormBuilderModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
			htm+='<div class="modal-dialog modal-lg">';
				htm+='<div class="modal-content">';
					htm+='<div class="modal-header">';
						htm+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
						htm+='<h4 class="modal-title">Form Builder</h4>';
					htm+='</div>';
					htm+='<div class="modal-body">';
						htm+='<div class="row">';
							htm+='<div class="col-md-4">';
								htm+='<div class="form-group selectorField draggableField">';
									htm+='<label class="control-label">Text Input</label>';
									htm+='<input type="text" title="Text Input" placeholder="Text here..." class="ctrl-textbox form-control"></input>';
								htm+='</div>';
								htm+='<div class="form-group selectorField draggableField">';
									htm+='<label class="control-label">Password</label>';
									htm+='<input type="password" title="Password" placeholder="Password..." class="ctrl-passwordbox form-control"></input>';
								htm+='</div>';
								htm+='<div class="form-group selectorField draggableField">';
									htm+='<label class="control-label">Combobox</label>';
									htm+='<select title="Combobox" class="ctrl-combobox form-control">';
										htm+='<option value="option1">Option 1</option>';
										htm+='<option value="option2">Option 2</option>';
										htm+='<option value="option3">Option 3</option>';
									htm+='</select>';
								htm+='</div>';
								htm+='<div class="checkbox selectorField draggableField checkboxgroup">';
									htm+='<label><input title="Checkbox" type="checkbox" class="ctrl-checkbox"> Check me out</label>';
								htm+='</div>';
								htm+='<div class="form-group selectorField draggableField">';
									htm+='<button title="Button" class="btn ctrl-btn">Simple Button</button>';
								htm+='</div>';
							htm+='</div>';
							htm+='<div class="col-md-6">';
								htm+='<div id="selected-column-1" class="well droppedFields"></div>';
							htm+='</div>';
						htm+='</div>';
					htm+='</div>';
					htm+='<div class="modal-footer">';
						htm+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
						htm+='<button type="button" class="btn btn-primary SaveForm">Save</button>';
					htm+='</div>';
				htm+='</div>';
			htm+='</div>';
		htm+='</div>';
		$('.ModelHolder').append(htm);
	}
	FormBuilder();
	
	$('.logo-div').hover(function() {
		parent = $(this);
		parent.append("<div class='Layer'><i class='fa fa-pencil'></i></div>");
		$('.Layer i').click(function() {
			ImgHeight = parent.find('img').height();
			ImgWidth = parent.find('img').width();
			$('.HintText').html('Note: Image Width and Height shoul be '+ImgWidth+'px and '+ImgHeight+'px.');
			$('#EditLogoModel').modal('show');
		});
	}, function() {
		$(this).children(".Layer").remove();
	});
	
	$('.form-div').hover(function() {
		parent = $(this);
		parent.append("<div class='Layer'><i class='fa fa-pencil'></i></div>");
		$('.Layer i').click(function() {
			$(".droppedFields").html('');
			$('.popover').popover('hide');
			$('#FormBuilderModal').modal('show');
		});
	}, function() {
		$(this).children(".Layer").remove();
	});
	
	$('.EmailDiv').hover(function() {
		$(this).append("<div class='Layer'><i class='fa fa-pencil'></i></div>");
		$('.Layer i').click(function() {
			$('#EditEmailModel').modal('show');
		});
	}, function() {
		$(this).children(".Layer").remove();
	});
	
	$('.PhoneDiv').hover(function() {
		$(this).append("<div class='Layer'><i class='fa fa-pencil'></i></div>");
		$('.Layer i').click(function() {
			$('#EditPhoneModel').modal('show');
		});
	}, function() {
		$(this).children(".Layer").remove();
	});
	
	$(document).on('click', '.SaveLogo', function() {
		if($('#LogoLink').val()!='') {
			var link = $('#LogoLink').val();
			$('.logo-div img').attr('src', link);
		} else {
			var form = $('#ImgUploadForm');
			var formdata = false;
			if(window.FormData){
				formdata = new FormData(form[0]);
			}
			var formAction = form.attr('action');
			$.ajax({
				type        : 'POST',
				url         : 'uploade_file.php?imageWidth='+ImgWidth+'&imageHeight='+ImgHeight,
				cache       : false,
				data        : formdata ? formdata : form.serialize(),
				contentType : false,
				processData : false,
				success: function(response) {
					var obj = JSON.parse(response);
					if(obj.responseCode=='ok') {
						parent.find('img').attr('src', obj.responseData);
						$("#EditLogoModel").modal('hide');
					} else {
						alert(obj.responseData);
					}
					
				}
			});
		}
	});
	$(document).on('click', '.SaveEmail', function() {
		var link = $('#Email').val();
		$('.EmailDiv').html('<i class="fa fa-envelope icon_phone"></i>&nbsp;&nbsp;'+link);
	});
	$(document).on('click', '.SavePhone', function() {
		var link = $('#Phone').val();
		$('.PhoneDiv').html('<i class="fa fa-phone icon_phone"></i>&nbsp;&nbsp;'+link);
	});
	$("#ImageUploade").change(function() {
		var file = this.files[0];
		var imagefile = file.type;
		var match= ["image/jpeg","image/png","image/jpg"];
		if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))) {
			alert('Enter valid image');
			return false;
		} else {
			var reader = new FileReader();
			reader.readAsDataURL(this.files[0]);
			reader.onload = function (e) {
                //Initiate the JavaScript Image object.
                var image = new Image();
 
                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;
                       
                //Validate the File Height and Width.
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    if (height > ImgHeight || width > ImgWidth) {
                        alert("Width and Height must not exceed "+ImgWidth+"px and "+ImgHeight+"px.");
                        return false;
                    }
                    return true;
                };
 
            }
		}
	});
	var _ctrl_index = 1001;
	/* Make the control draggable */
	function makeDraggable() {
		$(".selectorField").draggable({ helper: "clone",stack: "div",cursor: "move", cancel: null  });
	}
	makeDraggable();
	$( ".droppedFields" ).droppable({
		activeClass: "activeDroppable",
		hoverClass: "hoverDroppable",
		accept: ":not(.ui-sortable-helper)",
		drop: function( event, ui ) {
			//console.log(event, ui);
			var draggable = ui.draggable;				
			draggable = draggable.clone();
			draggable.removeClass("selectorField");
			draggable.addClass("droppedField");
			draggable[0].id = "CTRL-DIV-"+(_ctrl_index++); // Attach an ID to the rendered control
			draggable.appendTo(this);
			draggable.find('label.control-label').addClass('sr-only');
			if($('.droppedField').find('button').length>1)
				draggable.find('button').remove();
			//Once dropped, attach the customization handler to the control
			draggable.click(function () {
				// The following assumes that dropped fields will have a ctrl-defined. 
				//   If not required, code needs to handle exceptions here. 
				var me = $(this)
				var ctrl = me.find("[class*=ctrl]")[0];
				var ctrl_type = $.trim(ctrl.className.match("ctrl-.*")[0].split(" ")[0].split("-")[1]);
				customize_ctrl(ctrl_type, this.id);
			});

			makeDraggable();
		}
	});
	/* Make the droppedFields sortable and connected with other droppedFields containers*/
	$( ".droppedFields" ).sortable({
		cancel: null, // Cancel the default events on the controls
		connectWith: ".droppedFields"
	}).disableSelection();
	function customize_ctrl(type,id) {
		$(".droppedField .ctrl-"+type).popover({
			  placement : 'right',
			  html: 'true', //needed to show html of course
			  content : getPopoverContent(type, id)// hope this should be link
		});
	}
	function getPopoverContent(type, id) {
		var htm = '<form id="ElemetsForm">';
		htm+='<input type="hidden" name="CtrlDivId" id="CtrlDivId" value="'+id+'"/>';
		htm+='<input type="hidden" name="elemType" id="elemType" value="'+type+'"/>';
		htm+='<div class="form-group">';
			htm+='<label for="id">Name/ Id</label>';
			htm+='<input type="text" class="form-control" id="id" name="id" placeholder="Name/ Id">';
		htm+='</div>';
		switch (type) {
			case 'textbox':
				htm+='<div class="form-group">';
					htm+='<label for="id">Placeholder</label>';
					htm+='<input type="text" class="form-control" id="placeholder" name="placeholder" placeholder="Placholder">';
				htm+='</div>';
				break;
			case 'passwordbox':
				htm+='<div class="form-group">';
					htm+='<label for="id">Placeholder</label>';
					htm+='<input type="text" class="form-control" id="placeholder" name="placeholder" placeholder="Placholder">';
				htm+='</div>';
				break;
			case 'combobox':
				htm+='<div class="form-group">';
					htm+='<label for="id">Options</label>';
					htm+='<textarea class="form-control" id="options" rows="3"></textarea>';
				htm+='</div>';
				htm+='<div class="form-group">';
					htm+='<label for="id">Values</label>';
					htm+='<textarea class="form-control" id="values" rows="3"></textarea>';
				htm+='</div>';
				break;
			case 'checkbox':
				htm+='<div class="form-group">';
					htm+='<label for="id">Message</label>';
					htm+='<input type="text" class="form-control" id="CheckboxMessage" name="CheckboxMessage" placeholder="Checkbox message">';
				htm+='</div>';
				break;
			case 'btn':
				htm+='<div class="form-group">';
					htm+='<label for="id">Name on button</label>';
					htm+='<input type="text" class="form-control" id="ButtonName" name="ButtonName" placeholder="Name on button">';
				htm+='</div>';
				break;
		}
		htm+='<div class="checkbox">';
			htm+='<label>';
			  htm+='<input type="checkbox" id="isRequired" name="isRequired"> Required';
			htm+='</label>';
		htm+='</div>';
		htm+='<button type="button" class="btn btn-primary SaveElemetAttr">Save</button>';
		htm+='</form>';
		return htm;
	}
	$('body').on('click', function (e) {
		$('[aria-describedby^="popover"]').each(function () {
			//the 'is' for buttons that trigger popups
			//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});
	$(document).on('click','.SaveForm',function(e) {
		var selected_content = $("#selected-column-1").clone();
		selected_content.find("div").each(function(i,o) {
			var obj = $(o)
			obj.removeClass("draggableField ui-draggable well ui-droppable ui-sortable");
		});
		var selected_content_html = selected_content.html();
		$("#contact").html(selected_content_html);
		//console.log(selected_content_html);
	});
	$(document).on('click','.SaveElemetAttr',function(e) {
		var formValues = {};
		var val=null;
		$("#ElemetsForm").find("input, textarea").each(function(i,o) {
			if(o.type=="checkbox") {
				val = o.checked;
			} else {
				val = o.value;
			}
			formValues[o.name] = val;
		});
		$('#'+formValues.CtrlDivId+' .ctrl-'+formValues.elemType).attr('id', formValues.id);
		$('#'+formValues.CtrlDivId+' .ctrl-'+formValues.elemType).attr('name', formValues.id);
		if(formValues.elemType=='textbox' || formValues.elemType=='passwordbox')
			$('#'+formValues.CtrlDivId+' .ctrl-'+formValues.elemType).attr('placeholder', formValues.placeholder);
		$('#'+formValues.CtrlDivId+' .ctrl-'+formValues.elemType).attr('required', formValues.isRequired==true?'required':'');
	});
});