
$(".openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".hamburger__menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".hamburger__menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $(".hamburger__menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
