var videoGroup1 = ["化物语","恋物语","凭物语","伪物语"];
var videoGroup2 = ["SVD","FAMAS","HK416","FNC"];
var videoGroup3 = ["NTW-20","SV-98","蝎式","UMP45"];
var videoGroup4 = ["VECTOR","WA2000","春田步枪","李·英菲尔德"];

var videoPicEle = $(".video-pic");
var videoTitEle = $(".video-title");

$("#head").bind("click",function(event){
  switch(event.attr("id")){
    case "page-1":
    {

      for(i = 0; i < videoPicEle.length;i++){
        videoPicEle[i].children().attr("src","./images/" + videoGroup1[i] + ".jpg");
        videoTitEle[i].children().text(videoGroup1[i]);
      }
    }
    break;
    case "page-2":
    {
      for(i = 0; i < videoPicEle.length;i++){
        videoPicEle[i].children().attr("src","./images/" + videoGroup2[i] + ".jpg");
        videoTitEle[i].children().text(videoGroup2[i]);
      }
    }
    break;
    case "page-3":
    {
      for(i = 0; i < videoPicEle.length;i++){
        videoPicEle[i].children().attr("src","./images/" + videoGroup3[i] + ".jpg");
        videoTitEle[i].children().text(videoGroup3[i]);
      }
    }
    break;
    case "page-4":
    {
      for(i = 0; i < videoPicEle.length;i++){
        videoPicEle[i].children().attr("src","./images/" + videoGroup4[i] + ".jpg");
        videoTitEle[i].children().text(videoGroup4[i]);
      }
    }
    break;
  }
});
