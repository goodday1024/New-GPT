const lastsend = []
function send(){
    
    const msg = document.getElementById('question').value
    if (msg == ''){
        return false
    }
    else{
        document.getElementById("main").style.display = "none"
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
	lastsend.push(document.getElementById('question').value)
        document.getElementById("chat").innerHTML += "<li>" + "👨‍💻:" + String(document.getElementById('question').value) + "</li>"
        $.ajax({
            url: 'https://nejmw5w7fq.hk.aircode.run/chat',
            type: 'GET',
            dataType: 'json',
            data: {question: String(lastsend)},
            success: function(data) {
				lastsend.push(data.reply)
				console.log(data)
				document.getElementById("chat").innerHTML += "<li>" + "🤖:"
				var i = 0
				function appendstr(){
					
					setTimeout(() => {
						document.getElementById("chat").innerHTML += String(data.reply)[i]
                        			document.getElementById("chat").innerHTML += "🁢"
						if (i < String(data.reply).length-1){
							appendstr()
						}
						else{
						     	document.getElementById("question").disabled = false
                					document.getElementById("send").disabled = false
                					document.getElementById('question').value = ""
						}
						i++
					}, 100)
                    			setTimeout(() => {
                        			var s = document.getElementById("chat").innerHTML.replace("🁢","")
                        			document.getElementById("chat").innerHTML = s
                    			}, 200)
					
				}
				appendstr()
				document.getElementById("chat").innerHTML += "</li>"
            },
            error: function(xhr, status, error) {
                alert('error')
				lastsend.splice(lastsend.length-1,1)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"❌:sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
    }
}
