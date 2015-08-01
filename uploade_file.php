<?php
if(isset($_FILES["file"]["type"])) {
	$errors = array();
	list($width, $height) = getimagesize($_FILES["file"]["tmp_name"]);
	if($width<=$_GET['imageWidth'] && $height<=$_GET['imageHeight']) {
		$folder = 'uploads/';
		$validextensions = array("jpeg", "jpg", "png");
		$temporary = explode(".", $_FILES["file"]["name"]);
		$file_extension = end($temporary);
		if (in_array($file_extension, $validextensions)) {
			if ($_FILES["file"]["error"] > 0) {
				$response['responseCode'] = "error";
				$response['responseData'] = $_FILES["file"]["error"];
			} else {
				if (file_exists($folder . $_FILES["file"]["name"])) {
					$response['responseCode'] = "error";
					$response['responseData'] = $_FILES["file"]["name"] . " already exists.";
				} else {
					$sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
					$targetPath = $folder.$_FILES['file']['name']; // Target path where file is to be stored
					if(move_uploaded_file($sourcePath,$targetPath)) {	// Moving Uploaded file
						$response['responseCode'] = "ok";
						$response['responseData'] = $targetPath;
					}
				}
			}
		} else {
			$response['responseCode'] = "error";
			$response['responseData'] = 'Invalid file Size or Type';
		}
	} else {
		$response['responseCode'] = "error";
		$response['responseData'] = "Image width and height should be ".$_GET['imageWidth']."px and ".$_GET['imageHeight'];
	}
	echo json_encode($response);
}
?>