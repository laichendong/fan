$(function () {
    /**
     * 多吃一碗米饭
     */
    $(".rice-add-button").click(function () {
        if ($(".rice-container img").size() < 3) {
            $(".rice-container").append('<img class="rice-img" src="/images/rice.png" />')
        } else {
            ElfDialog.pop("别吃太多，容易撑着。");
        }
    });

    /**
     * 少吃一碗米饭
     */
    $(".rice-reduce-button").click(function () {
        if ($(".rice-container img").size() > 0) {
            $(".rice-container img:last").remove();
        } else {
            ElfDialog.pop("已经没得吃了！");
        }
    });

    /**
     * 多吃一个馒头
     */
    $(".bred-add-button").click(function () {
        if ($(".bred-container img").size() < 3) {
            $(".bred-container").append('<img class="bred-img" src="/images/bred.png" />')
        } else {
            ElfDialog.pop("别吃太多，容易撑着。");
        }
    });

    /**
     * 少吃一个馒头
     */
    $(".bred-reduce-button").click(function () {
        if ($(".bred-container img").size() > 0) {
            $(".bred-container img:last").remove();
        } else {
            ElfDialog.pop("已经没得吃了！");
        }
    });

    /**
     * 点菜 / 取消点菜
     */
    $(".dish-item").click(function () {
        if (!$(this).data("checked")) {
            $(this).addClass("dish-checked").data("checked", true);
            if ($(".dish-item.dish-checked").size() > 3) {
                ElfDialog.pop("别挑太多，把机会留给你的伙伴们吧！");
                $(this).removeClass("dish-checked").data("checked", false);
            }
        } else {
            $(this).removeClass("dish-checked").data("checked", false);
        }
    });

    $("input[name='userName']").focus().blur(function () {
        // 用户名失去焦点，ajax验证用户有效性
        var $userName = $(this);
        var userName = $(this).val().trim();
        if (userName) {
            $.getJSON("valiedateUser", {
                "userName": userName
            }, function (json) {
                if(json && json.valiedated){
                    // 验证通过
                } else {
                    $userName.after('<span class="error">你还不是我们饭团成员，去<a href="mailto:laichendong@gmail.com">申请</a>吧</span> ');
                }
            });
        }
    });

})
;
