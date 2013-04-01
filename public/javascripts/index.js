$(function () {
    /**
     * 多吃一碗米饭
     */
    $(".rice-add-button").click(function () {
        var $riceInput = $("input[name=rice]");
        if (parseInt($riceInput.val().trim()) < 3) {
            $riceInput.val(parseInt($riceInput.val().trim()) + 1);
        } else {
            ElfDialog.pop("别吃太多，容易撑着。");
        }
    });

    /**
     * 少吃一碗米饭
     */
    $(".rice-reduce-button").click(function () {
        var $riceInput = $("input[name=rice]");
        if (parseInt($riceInput.val().trim()) > 0) {
            $riceInput.val(parseInt($riceInput.val().trim()) - 1);
        } else {
            ElfDialog.pop("已经没得吃了！");
        }
    });

    /**
     * 多吃一个馒头
     */
    $(".bred-add-button").click(function () {
        var $bredInput = $("input[name=bred]");
        if (parseInt($bredInput.val().trim()) < 3) {
            $bredInput.val(parseInt($bredInput.val().trim()) + 1);
        } else {
            ElfDialog.pop("别吃太多，容易撑着。");
        }
    });

    /**
     * 少吃一个馒头
     */
    $(".bred-reduce-button").click(function () {
        var $bredInput = $("input[name=bred]");
        if (parseInt($bredInput.val().trim()) > 0) {
            $bredInput.val(parseInt($bredInput.val().trim()) - 1);
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
                ElfDialog.pop("你最多可以选择三个菜品！");
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
                    if(json.dished){
                        // 已经订过餐了
                        $userName.data("validated", json.valiedated)
                            .next(".info").remove().end()
                            .next(".error").remove().end()
                            .after('<span class="error">你今天已经点过餐了！</span>');
                    } else {
                        $userName.data("validated", json.valiedated)
                            .next(".info").remove().end()
                            .next(".error").remove().end()
                            .after('<span class="info">来来，快看今天吃什么。</span>');
                    }
                } else {
                    $userName.data("validated", json.valiedated)
                        .next(".info").remove().end()
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
//        if ($("input[name='rice']").val() + $("input[name='bred']").val() <= 0) {
//            ElfDialog.alert("人是铁，饭是钢。主食还是要吃的。");
//            return;
//        }
        // 验证菜的数量
        var $dishChecked = $(".dish-item.dish-checked");
        if ($dishChecked.size() == 0) {
            ElfDialog.alert("大家都不选菜，就没法吃了！");
            return;
        }
        // 提交数据到后台
        ElfDialog.confirm("一但提交，你将不能再更改点餐数据，是否确定提交？","", function(){
            fan();
            ElfDialog.close();
        }, function(){
            ElfDialog.close();
        });

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
            "riceCount": $("input[name='rice']").val(),
            "bredCount": $("input[name='bred']").val(),
            "dishs": dishs
        }, function (data) {
            if (data.error && data.errorCode == 1) {
                ElfDialog.alert("你今天已经点过菜了。");
            } else if (data.success) {
                // 更新页面中的数据
                $("#riceTotalCount").text(data.data.riceCount);
                $("#bredTotalCount").text(data.data.bredCount);
                var $dishs = $("#dishs").empty();
                $.each(data.data.dishs, function () {
                    $dishs.append('<li>' + $(this)[0].name + ' <span class="disRank overt">' + $(this)[0].count + '</span></li>');
                });
                // 移除“我选好了”按钮
                // $("#fan-submit").remove();
                // 弹出提示
                ElfDialog.alert("<b style='color:red'>恭喜！</b>点菜成功！")
            }
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