/**
 * 模拟数据库
 */

/**
 * 菜谱数据
 * @type {Array}
 */
var dishs = exports.dishs = [];
var dish = function(name, price, photoUrl){
    this.name = name;
    this.price = price;
    this.photoUrl = photoUrl;
};
dishs.push(new dish("石锅草鱼", 32, "/fan/images/dishs/1.png"));
dishs.push(new dish("石锅鲶鱼", 32, "/fan/images/dishs/1.png"));
dishs.push(new dish("鸿运当头", 58, "/fan/images/dishs/2.png"));
dishs.push(new dish("双味鱼头", 58, "/fan/images/dishs/3.png"));
dishs.push(new dish("外婆鸭大份", 48, "/fan/images/dishs/4.png"));
dishs.push(new dish("外婆鸭小份", 38, "/fan/images/dishs/4.png"));
dishs.push(new dish("萝卜丝煮鲫鱼", 28, "/fan/images/dishs/5.png"));
dishs.push(new dish("杂鱼贴饼子", 48, "/fan/images/dishs/6.png"));
dishs.push(new dish("酸菜鱼（斤）", 28, "/fan/images/dishs/7.png"));
dishs.push(new dish("砂锅山药", 28, "/fan/images/dishs/8.png"));
dishs.push(new dish("红煨牛肉", 48, "/fan/images/dishs/9.png"));
dishs.push(new dish("砂锅米豆腐", 20, "/fan/images/dishs/10.png"));
dishs.push(new dish("香味茄子煲", 26, "/fan/images/dishs/11.png"));
dishs.push(new dish("干锅娃娃菜", 22, "/fan/images/dishs/12.png"));
dishs.push(new dish("干锅肥肠", 38, "/fan/images/dishs/13.png"));
dishs.push(new dish("干锅茶树菇", 38, "/fan/images/dishs/14.png"));
dishs.push(new dish("干锅杏鲍菇", 38, "/fan/images/dishs/15.png"));
dishs.push(new dish("盐菜扣肉", 42, "/fan/images/dishs/16.png"));
dishs.push(new dish("铁板韭菜", 18, "/fan/images/dishs/17.png"));
dishs.push(new dish("手撕包菜", 15, "/fan/images/dishs/18.png"));
dishs.push(new dish("剁椒鸡蛋", 24, "/fan/images/dishs/19.png"));
dishs.push(new dish("韶山香干", 26, "/fan/images/dishs/20.png"));
dishs.push(new dish("毛氏红烧肉", 38, "/fan/images/dishs/21.png"));
dishs.push(new dish("去骨下饭鸭", 32, "/fan/images/dishs/22.png"));
dishs.push(new dish("油焖烟笋", 38, "/fan/images/dishs/23.png"));
dishs.push(new dish("北大荒茄子", 26, "/fan/images/dishs/24.png"));
dishs.push(new dish("一品水晶虾", 58, "/fan/images/dishs/25.png"));
dishs.push(new dish("宫保鸡丁", 18, "/fan/images/dishs/26.png"));
dishs.push(new dish("油菜", 16, "/fan/images/dishs/27.png"));
dishs.push(new dish("芥蓝", 18, "/fan/images/dishs/28.png"));
dishs.push(new dish("砂锅扁豆", 24, ""));
dishs.push(new dish("井冈山豆皮", 24, ""));
dishs.push(new dish("海味蛋卷煮娃娃菜", 38, ""));
dishs.push(new dish("青椒山薯仔", 36, ""));
dishs.push(new dish("干锅牛蛙", 48, ""));
dishs.push(new dish("四菌小鸡钵", 28, ""));
dishs.push(new dish("农家靠豆腐", 18, ""));
dishs.push(new dish("锅仔千叶豆腐", 26, ""));
dishs.push(new dish("蒜蓉粉丝娃娃菜", 26, ""));
dishs.push(new dish("铁板杏鲍菇", 38, ""));
dishs.push(new dish("农家下饭菜", 18, ""));
dishs.push(new dish("芥兰扒牛柳", 32, ""));
dishs.push(new dish("山菌西兰花", 22, ""));
dishs.push(new dish("腰果虾仁", 48, ""));
dishs.push(new dish("农家乐仔鸡", 28, ""));
dishs.push(new dish("糖醋杏仁排", 48, ""));
dishs.push(new dish("湘味小河虾", 28, ""));
dishs.push(new dish("韭香胡萝卜丝", 16, ""));
dishs.push(new dish("萝卜干腊肉", 32, ""));
dishs.push(new dish("咸蛋黄南瓜", 24, ""));
dishs.push(new dish("南粤煎豆腐", 18, ""));
dishs.push(new dish("生菜", 16, ""));
dishs.push(new dish("空心菜", 18, ""));
dishs.push(new dish("香笋焖排骨", 48, ""));
dishs.push(new dish("美味牛蛙煲", 48, ""));
dishs.push(new dish("酸菜排骨", 28, ""));
dishs.push(new dish("酸菜白肉", 28, ""));
dishs.push(new dish("开胃豆渣钵", 15, ""));
dishs.push(new dish("干锅土豆片", 20, ""));
dishs.push(new dish("干锅湘之驴", 48, ""));
dishs.push(new dish("干锅腐竹", 22, ""));
dishs.push(new dish("西红柿牛腩", 36, ""));
dishs.push(new dish("酱椒金针菇", 28, ""));
dishs.push(new dish("铁板水晶粉", 26, ""));
dishs.push(new dish("小炒黑木耳", 22, ""));
dishs.push(new dish("雷公菌炒鸡蛋", 24, ""));
dishs.push(new dish("长豆角茄子", 22, ""));
dishs.push(new dish("蒜香鸡中翅", 48, ""));
dishs.push(new dish("肉末酸菜小笋", 22, ""));
dishs.push(new dish("小炒肉", 28, ""));
dishs.push(new dish("小炒黄牛肉", 32, ""));
dishs.push(new dish("口味花菜", 26, ""));
dishs.push(new dish("炒随便", 15, ""));
dishs.push(new dish("健康三色", 26, ""));
dishs.push(new dish("鱼香肉丝", 18, ""));
dishs.push(new dish("油麦菜", 16, ""));
dishs.push(new dish("土豆丝", 12, ""));
dishs.push(new dish("苦瓜", 18, ""));
dishs.push(new dish("菠菜", 16, ""));


var findDishByName = exports.findDishByName = function(name) {
    for(var i=0; i< dishs.length; i++){
        if(dishs[i].name == name){
            return dishs[i];
        }
    }
};

/**
 * 用户数据
 * @type {Array}
 */
var users = exports.users = [];
users.push({name: "赖晨东", email: "", isTeamLeader: true});
users.push({name: "高飞", email: ""});
users.push({name: "陈有存", email: ""});
users.push({name: "欧阳兴文", email: ""});
users.push({name: "韩世超", email: ""});
users.push({name: "许立龙", email: ""});
users.push({name: "徐贤军", email: ""});
users.push({name: "邵东", email: ""});
users.push({name: "杨威", email: ""});
users.push({name: "米闯", email: ""});
users.push({name: "赵一国", email: ""});
users.push({name: "王文尧", email: ""});
users.push({name: "杨磊", email: ""});
users.push({name: "牛万祥", email: ""});
users.push({name: "王栋", email: ""});
users.push({name: "曹佳东", email: ""});
