var videoGroup1 = ["化物语","恋物语","凭物语","伪物语"];
var videoGroup2 = ["SVD","FAMAS","HK416","FNC"];
var videoGroup3 = ["NTW-20","SV-98","蝎式","UMP45"];
var videoGroup4 = ["VECTOR","WA2000","春田步枪","李·英菲尔德"];

var $videoPicEle = $(".video-pic");
var $videoTitEle = $(".video-title");


$("#head").bind("click",function(event){
  switch(event.target.getAttribute("id")){
    case "page-1":
    {

      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup1[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup1[i]);
        $(".selected").removeClass("selected");
        $(event.target).addClass("selected");
      }
    }
    break;
    case "page-2":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup2[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup2[i]);
        $(".selected").removeClass("selected");
        $(event.target).addClass("selected");
      }
    }
    break;
    case "page-3":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup3[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup3[i]);
        $(".selected").removeClass("selected");
        $(event.target).addClass("selected");
      }
    }
    break;
    case "page-4":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup4[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup4[i]);
        $(".selected").removeClass("selected");
        $(event.target).addClass("selected");
      }
    }
    break;
    case "left-btn":
    {
      switch($(".selected").attr("id")){
        case "page-1":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup4[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup4[i]);
            $(".selected").removeClass("selected");
            $("#page-4").addClass("selected");
          }
        }
        break;
        case "page-2":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup1[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup1[i]);
            $(".selected").removeClass("selected");
            $("#page-1").addClass("selected");
          }
        }
        break;
        case "page-3":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup2[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup2[i]);
            $(".selected").removeClass("selected");
            $("#page-2").addClass("selected");
          }
        }
        break;
        case "page-4":
        {

          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup3[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup3[i]);
            $(".selected").removeClass("selected");
            $("#page-3").addClass("selected");
          }
        }
        break;
      }
    }
    break;
    case "right-btn":
    {
      switch($(".selected").attr("id")){
        case "page-1":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup2[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup2[i]);
            $(".selected").removeClass("selected");
            $("#page-2").addClass("selected");
          }
        }
        break;
        case "page-2":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup3[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup3[i]);
            $(".selected").removeClass("selected");
            $("#page-3").addClass("selected");
          }
        }
        break;
        case "page-3":
        {
          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup4[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup4[i]);
            $(".selected").removeClass("selected");
            $("#page-4").addClass("selected");
          }
        }
        break;
        case "page-4":
        {

          for(i = 0; i < $videoPicEle.length;i++){
            $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup1[i] + ".jpg");
            $($videoTitEle[i].childNodes[1]).text(videoGroup1[i]);
            $(".selected").removeClass("selected");
            $("#page-1").addClass("selected");
          }
        }
        break;
      }
      break;
    }
  }
});
var nextPage = function(){
  switch($(".selected").attr("id")){
    case "page-1":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup2[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup2[i]);
        $(".selected").removeClass("selected");
        $("#page-2").addClass("selected");
      }
    }
    break;
    case "page-2":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup3[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup3[i]);
        $(".selected").removeClass("selected");
        $("#page-3").addClass("selected");
      }
    }
    break;
    case "page-3":
    {
      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup4[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup4[i]);
        $(".selected").removeClass("selected");
        $("#page-4").addClass("selected");
      }
    }
    break;
    case "page-4":
    {

      for(i = 0; i < $videoPicEle.length;i++){
        $($videoPicEle[i].childNodes[1]).attr("src","./images/" + videoGroup1[i] + ".jpg");
        $($videoTitEle[i].childNodes[1]).text(videoGroup1[i]);
        $(".selected").removeClass("selected");
        $("#page-1").addClass("selected");
      }
    }
    break;
  }
};

setInterval(nextPage,6000);
