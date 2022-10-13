$(document).ready(function(){
    loadLinks();
    $(".addLink__form").submit(function(e){
        e.preventDefault();
    });
    $(".submit").click(function(){
        let url = $(".url").val();
        let line = document.createElement("DIV");
        if(url == ""){
            alert("Si no escribes nada que quieres agregar?");
        }else if(url.includes(" ")){
            alert("No puedes agregar una URL que contenga espacios en blanco");
        }else if(!url.includes("http") || !url.includes("://")){
            alert("Tu URL no tiene el protocolo http:// o https://");
        }else if(!url.includes(".")){
            alert("te falta el TLD. un ejemplo sería el .com o el .net");
        }else{
            line.classList.add("line--list");
            $(".links").prepend(`<li><a class="link" href="${url}">${url}</a></li>`);
            $(".link").append(line);
            url = $(".url").val("");
        }
        loadLinks();
    });
    $(".delete").click(function(){
        $(".link").remove();
    });
});
function loadLinks(){
    $(".link").each(function(a, i){
        let that = $(this);
        let href = that.attr("href");   
        let line = document.createElement("DIV");
        line.classList.add("line--list");

        that.attr("target","_blank");
        that.text(href);
        that.append(line);
    });
}