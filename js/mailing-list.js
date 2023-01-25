document.getElementById("mailing-list").addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us20.api.mailchimp.com/subscribe/post-json?u=3574d9387c&id=mailing-list', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonResponse = JSON.parse(xhr.responseText);
            if(jsonResponse.result === 'success'){
                alert('Thank you for subscribing!');
            } else {
                alert(jsonResponse.msg);
            }
        }
    };
    xhr.send(JSON.stringify({EMAIL: email}));
});