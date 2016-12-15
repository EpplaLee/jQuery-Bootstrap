//基本选择器
$(".one").css("background","rgb(174,221,129)");
$(".mini").css("background","rgb(107,194,53)");
$("*").css("color","#FFFFFF");
//层次选择器
$(".hide + div").css("background","#DBF6A9");
$(".hide + div").css("color","#499D3F");

//过滤选择器
$("span:last").css("background","#86D168");
$("span:last").css("color","#F8F3ED");

//可见性过滤选择器
$("div:hidden").css("background","#FA6964");
$("div:hidden").css("color","#FFFFFF");
$("div:hidden").show(6000);
