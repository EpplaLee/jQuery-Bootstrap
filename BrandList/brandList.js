var $category = $("ul li:gt(5):not(:last)");
$category.hide();

$("span:contains('显示全部品牌')").click(function(){
  if($category.is(":visible"))
  {
    $category.hide();
    $("span:contains('显示主流品牌')").text("显示全部品牌");
  }
  else
  {
    $category.show();
    $("span:contains('显示全部品牌')").text("显示主流品牌");
  }
  return false;
});
