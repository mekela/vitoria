<?php
	
	if (isset($_GET['action']) && $_GET['action']=='send_form'){
		foreach ($_GET as $key => $val) {
			${$key} = $val;
		}
		
		$to  = "sania_free@i.ua" ;		
		$from  = "site@site.com" ;		

		
							
		$subject = $form_name." \r\n"; 
		
		if($action_type=='form_feedback'){
		
			$emessage = "
			<html>
				Name:".$uname."<br/>Phone:".$phone."<br/>Email:".$email."
			</html>";
		}	

		elseif($action_type=='form_ask'){
		
			$emessage = "
			<html>
				Name:".$uname."<br/>Phone:".$phone."<br/>Вопрос:".$txt."
			</html>";
		}
		elseif($action_type=='form_ask2'){
		
			$emessage = "
			<html>
				Email:".$email."<br/>Вопрос:".$txt."
			</html>";
		}

			$headers  = "Content-type: text/html; charset=utf-8 \r\n";
			$headers .= "From: ".$from."\r\n";
								
			mail($to, $subject, $emessage, $headers);
			
			echo 'sended';
	}
?>