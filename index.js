const lastsend = []
var cid = ''
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
            url: 'https://hd363kkqqb.hk.aircode.run/hello',
            type: 'GET',
            dataType: 'json',
            data: {question: document.getElementById("question").value, cid: cid, apikey: localStorage.getItem('key')},
            success: function(data) {
		    		cid = data.cid
				lastsend.push(data.reply)
				console.log(data)
				document.getElementById("chat").innerHTML += "<li>" + "🤖:"
				var i = 0
				function appendstr(){
					
					setTimeout(() => {
						document.getElementById("chat").innerHTML += String(data.reply)[i]
                        			document.getElementById("chat").innerHTML += "🖋️"
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
                        			var s = document.getElementById("chat").innerHTML.replace("🖋️","")
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
function key(){
	
    	if (localStorage.getItem('key') != " " && localStorage.getItem('key') != "null"){
		
		if(localStorage.getItem('key') == "zzh20081022@gmail.com"){
			alert("您好管理员")
			localStorage.setItem('key','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')
			alert(localStorage.getItem('key'))
		}
		else{
			alert("Key:" + localStorage.getItem('key'))
		}
	}
	else{
		localStorage.setItem('key', prompt("请输入您的APIkey(前往openAI官网获取)"))
	}
}
function c(){
	
	localStorage.setItem('key', " ")
	
	alert("successed")
	
	key()
}	
