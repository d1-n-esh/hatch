/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var sliderimg=["appdev","design","iot","ct","cos"];
var slidertxt=["App Development. ","Design. ","IOT. ","Conquering technology. ","Code School. "];
var slidertxt2=["We don't<br>build apps that just work, we<br>build apps that inspire.",
                 "Less is more and<br>'perfect' is just the<br>beginning.",
                    "With every object on<br>earth waiting to connect to<br>the internet, we at Hatch<br>are busy mastering &<br>making this happen.",
                        "<br>Push the boundaries of what<br>technology can do for you.",
                            "Empowering<br>the people will the most<br>important language on<br>earth - code."];
var links=["layout/appdev.html","layout/design.html","layout/iot.html","error","error"];                      
function temp(){
    alert("working");
}
function showloader(){
   //alert("lol");
    $("#loader").css({"opacity":"1"});
    setTimeout(function(){
        $("#content").css({"opacity":"1"});
        $("#loaderbg").css({"opacity":"0"});
        $("#loader").css({"opacity":"0"});
    },2000);
}
function showMainPage(){
    $("#content").css({"top":"0","left":"0"});
}

function showSideMenu(){
    $("#freezelayer").show();
    $("#menuicon").hide();
    $("#sidemenu").css({"margin-left":"70%"});
}
function closesidemenu(){
    $("#freezelayer").hide();
    $("#sidemenu").css({"margin-left":"120%"});
    $("#menuicon").show();
}
function moveleft(){
    $("#leftarw").addClass("gradl");
    var i=parseInt($("#curslider").val())-1;
    $("#temp").css({"margin-left":"50%","opacity":"0"});
    setTimeout(function(){ 
        $("#temp").css({"transition":"none","margin-left":"-50%"}); 
        $("#leftarw").removeClass("gradl");
        $("#cimg").attr("src",("images/"+sliderimg[i]+".png"));
        var txt="<span style='color:red'>"+slidertxt[i]+"</span>"+slidertxt2[i]+"<br><span onclick='javascript:redir()' style='cursor:pointer;color:blue;text-decoration: underline;font-size:15px;'>Learn More</span>";
        $("#ctxt").html(txt);
        $("#curslider").val(i);
        if(i!==3){
            $("#cimg").css({"height":"","border-radius":""})
        }else{
            $("#cimg").css({"height":"400px","border-radius":"50%"})
        }
    }, 1000);
    setTimeout(function(){
        $("#temp").css({"transition":"1s"});
        $("#temp").css({"margin-left":"0px","opacity":"1"});
    },1300);
    if(i===0){
        $("#leftarw").css({"opacity":"0.3","pointer-events":"none"});
    }else{
        $("#leftarw").css({"opacity":"1","pointer-events":""});
    }
    $("#rightarw").css({"opacity":"1","pointer-events":""});
}
function moveright(){
    $("#rightarw").addClass("gradr");
    var i=parseInt($("#curslider").val())+1;
    $("#temp").css({"margin-left":"-50%","opacity":"0"});
    setTimeout(function(){ 
        $("#temp").css({"transition":"none","margin-left":"50%"}); 
        $("#rightarw").removeClass("gradr");
        $("#cimg").attr("src",("images/"+sliderimg[i]+".png"));
        var txt="<span style='color:red'>"+slidertxt[i]+"</span>"+slidertxt2[i]+"<br><span onclick='javascript:redir()' style='cursor:pointer;color:blue;text-decoration: underline;font-size:15px;'>Learn More</span>";
        $("#ctxt").html(txt);
        $("#curslider").val(i);
        if(i!==3){
            $("#cimg").css({"height":"","border-radius":""})
        }else{
            $("#cimg").css({"height":"400px","border-radius":"50%"})
        }
    }, 1000);
    setTimeout(function(){
        $("#temp").css({"transition":"1s"});
        $("#temp").css({"margin-left":"0px","opacity":"1"});
    },1300);
    
    if(i===4){
        $("#rightarw").css({"opacity":"0.3","pointer-events":"none"});
    }else{
        $("#rightarw").css({"opacity":"1","pointer-events":""});
    }
    $("#leftarw").css({"opacity":"1","pointer-events":""});
}
function redir(){
    var i=parseInt($("#curslider").val());
    console.log(links[i]);
    document.location.href=links[i];
}
