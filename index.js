const lastsend = []
function send(){
    
    const msg = document.getElementById('question').value
    if (msg == ''){
        alert('input is null')
    }
    else{
        document.getElementById("main").style.display = "none"
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
		lastsend.push(document.getElementById('question').value)
        document.getElementById("chat").innerHTML += "<li>" + "😀:" + String(document.getElementById('question').value) + "</li>"
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
					
				}
				appendstr()
				document.getElementById("chat").innerHTML += "</li>"
            },
            error: function(xhr, status, error) {
                alert('error')
				lastsend.splice(lastsend.length-1,1)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
    }
}
function hide(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML += "You>" + "写一篇文章"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "帮我写一篇文章200字",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
function hide1(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML += "You>" + "帮我写一段代码"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "帮我写一段C++输出hello world的代码",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
function hide2(){
    document.getElementById("main").style.display = "none"
    lastsend.push(document.getElementById('question').value)
        document.getElementById("question").disabled = true
        document.getElementById("send").disabled = true
        document.getElementById("chat").innerHTML += "You>" + "给我讲一个笑话"
        $.ajax({
            url: 'https://v1.apigpt.cn/',
            type: 'GET',
            dataType: 'json',
            data: {q: "给我讲一个笑话",apitype: "sql"},
            success: function(data) {
                console.log(lastsend)
                console.log(data.ChatGPT_Answer)
                document.getElementById("chat").innerHTML +=  "<li>" + data.ChatGPT_Answer + "</li>"
                document.getElementById("question").disabled = false
                document.getElementById("send").disabled = false
                document.getElementById('question').value = ""
                
            },
            error: function(xhr, status, error) {
                alert('error')
                lastsend.splice(lastsend.length-1,1)
                console.log(lastsend)
                document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML + "<li>"+"sorry,network error or connect error"+"</li>"
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
                document.getElementById("send").disabled = false
                document.getElementById("question").disabled = false
            }
        })
}
