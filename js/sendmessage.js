import a from 'a.js';
import b from 'b.js';
import c from 'c.js';  
$( "#message" ).submit(function( event ) {
  event.preventDefault()
  var form = document.getElementById("message");
  var name = form.elements["name"].value;
  var email  =form.elements["email"].value;
  var subject  = form.elements["subject"].value;
  var message = form.elements["text"].value;
  var reader = new FileReader()
        
  
  var url = "https://hooks.slack.com/services/" + a.val + '/' + b.val + '/' + c.val
  var d = new Date();
  

  $.ajax({
    type: "POST",
    url: url,
    data: 'payload=' + JSON.stringify({
      "text" : "Message from Flood Response at " + d,
      "attachments": [
        {
          "author_name": name, 
          "color": "#34ebd8",
          "title": subject,
          "text": message,
          "footer": email
        }
      ]
    }),
    success: function(msg){
      alert('Thank you! your message has been sent.');
    }
  });
});
console.log("test")