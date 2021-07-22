
function highlight_html(){
  var ca = document.querySelectorAll("pre code");
  var ba =document.getElementsByClassName("copycpy");
  for( var i = 0; i < ca.length; i++){
    var data= ca[i].innerHTML;
        data = data.replace(/=/g,'&equalsa').replace(/'(.*?)'/g,'&aaposa$1&aaposa').replace(/"(.*?)"/g,'&aquota$1&aquota').replace(/\$([A-Za-z0-9-_]+)/g,'<span class="phpvar">&dollar;$1</span>').replace(/([A-Za-z0-9-_]+)&equalsa&aquota/g,'<span class="html_atr">$1</span><span class="eql">&equalsa</span>&aquota').replace(/(http|https):/g,'$1&colona') 
        data=data.replace(/\/\*(.*?)\*\//gs,'<com class="html_comm">/*$1*/</com>')
        data=data.replace(/&lt;!--(.*?)-&gt;/gs,'<span class="html_comm">&lt;&excl;--$1-&gt;</span>').replace(/&lt;([A-Za-z0-9]+)/g,'<span class="html_tag">&lt;$1 </span>').replace(/&lt;\/([A-Za-z0-9]+)/g,'<span class="html_tag">&lt;/$1 </span>').replace(/&lt;(.*?)&sol;&gt;/g,'&lt;$1<span class="html_tag">&sol;&gt;</span>').replace(/&lt;(.*?)\/&gt;/g,'&lt;$1<span class="html_tag">/&gt;</span>').replace(/&lt;(.*?)&gt;/g,'&lt;$1<span class="html_tag">&gt;</span>').replace(/(\s+)(function|let|var|import)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(continue|debugger|default)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(const|break|catch|case)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(delete|do|else|for)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(finally|implements|in)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(instanceof|interface|new|package)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(private|protected|public|return)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(static|switch|throw|try)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(typeof|void|while|with|yield)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(class|enum|export|extends)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/(\s+)(super|def|try:|except|as)(\s+)/gi,'$1<span class="key">$2</span>$3').replace(/([\s\{\(\)\}]+)(if|else|echo)([\s\{\(]+)/gi,'$1<span class="key">$2</span>$3').replace(/(echo&aquota)/g,'<span class="key">echo</span>&aquota')
  data=data.replace(/#(.*?)([\r\n])/g,'<span class="html_comm">#$1</span>$2').replace(/\/\/(.*?)([\r\n])/g,'<span class="html_comm">//$1</span>$2')  
       
       data=data.replace(/(&equalsa)/g,'<span class="eql">=</span>').replace(/&aquota(.*?)&aquota/gs,'<span class="str">"$1"</span>').replace(/&aaposa(.*?)&aaposa/gs,"<span class='str'>'$1'</span>").replace(/([\r\n])/g,'$1<line></line>').replace(/&equalsa/,'=');   
       
       
  
        
      data=data.replace(/([A-Za-z0-9-_.]+):(.*?)([;])/g,'<span class="css1">$1</span>:<span class="css">$2</span>$3').replace(/(http|https)&colona/g,'$1:')
      
    ba[i].innerHTML=' <button onclick="CopyToClipboard(\'code\','+i+');return false;" class="btn copytoboard">Copy  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg></button><br>'
    ca[i].innerHTML="<line></line>"+data;
     
  }
}
function CopyToClipboard(id,n)
{
var r = document.createRange();
var ba=document.getElementsByClassName(id);
r.selectNode(ba[n]);
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

