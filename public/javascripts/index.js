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

    /**
     * 用户名失去焦点，ajax验证用户有效性
     */
    $("input[name='userName']").focus().blur(function () {
        var $userName = $(this);
        var userName = $(this).val().trim();
        if (userName) {
            $.getJSON("/users/validateUser", {
                "userName": userName
            }, function (json) {
                if (json && json.valiedated) {
                    // 验证通过
                    $userName.data("validated", json.valiedated)
                        .next(".info").remove().end()
                        .after('<span class="info">来来，快看今天吃什么。</span>');
                } else {
                    $userName.data("validated", json.valiedated)
                        .next(".error").remove().end()
                        .after('<span class="error">你还不是我们饭团成员，去<a href="mailto:laichendong@gmail.com">申请</a>吧</span>');
                }
            });
        }
    });

    /**
     * 选好餐了，提交
     */
    $("#fan-submit").click(function () {
        // 验证用户名是否已经验证
        var $userName = $("input[name='userName']");
        if (!$userName.data("validated")) {
            if ($userName.val()) {
                // 如果发现用户名里有值，但显示没验证通过，则等待一会儿，防止ajax验证结果还没返回
                sleep(800);
            }
            if (!$userName.data("validated")) {
                ElfDialog.alert("我们还不知道你是谁呢！");
                return;
            }
        }
        // 验证选择的主食数量
        if ($(".rice-img").size() + $(".bred-img").size() <= 0) {
            ElfDialog.alert("人是铁，饭是钢。主食还是要吃的。");
            return;
        }
        // 验证菜的数量
        var $dishChecked = $(".dish-item.dish-checked");
        if ($dishChecked.size() == 0) {
            ElfDialog.alert("大家都不选菜，就没法吃了！");
            return;
        }
        // 提交数据到后台
        fan();

    });

    /**
     * 提交数据到后台
     */
    function fan() {
        var dishs = [];
        $(".dish-item.dish-checked").each(function (i) {
            dishs.push($(this).find(".dish-name").text());
        });
        $.post("/fan", {
            "userName": $("input[name='userName']").val(),
            "riceCount": $(".rice-container img").size(),
            "bredCount": $(".bred-container img").size(),
            "dishs": dishs
        }, function (data) {
            console.log(data);
        });
    }
});

/**
 * 模拟线程休眠
 * @param millisecond
 */
function sleep(millisecond) {
    var start = new Date().getTime();
    while (new Date().getTime() - start >= millisecond) {
    }
}