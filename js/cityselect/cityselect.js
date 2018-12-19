/* *
 * 全局空间 Vcity
 * */
var Vcity = {};
/* *
 * 静态方法集
 * @name _m
 * */
Vcity._m = {
    /* 选择元素 */
    $: function (arg, context) {
        var tagAll, n, eles = [], i, sub = arg.substring(1);
        context = context || document;
        if (typeof arg == 'string') {
            switch (arg.charAt(0)) {
                case '#':
                    return document.getElementById(sub);
                    break;
                case '.':
                    if (context.getElementsByClassName) return context.getElementsByClassName(sub);
                    tagAll = Vcity._m.$('*', context);
                    n = tagAll.length;
                    for (i = 0; i < n; i++) {
                        if (tagAll[i].className.indexOf(sub) > -1) eles.push(tagAll[i]);
                    }
                    return eles;
                    break;
                default:
                    return context.getElementsByTagName(arg);
                    break;
            }
        }
    },

    /* 绑定事件 */
    on: function (node, type, handler) {
        node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    },
    // focus: function (node, type, handler) {
    //     node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    // },
    // bind:function (node, type, handler) {
    //     node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    // },
    /* 获取事件 */
    getEvent: function (event) {
        return event || window.event;
    },

    /* 获取事件目标 */
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    /* 获取元素位置 */
    getPos: function (node) {
        var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollt = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = node.getBoundingClientRect();
        return {
            top: pos.top + scrollt,
            right: pos.right + scrollx,
            bottom: pos.bottom + scrollt,
            left: pos.left + scrollx
        }
    },

    /* 添加样式名 */
    addClass: function (c, node) {
        if (!node)return;
        node.className = Vcity._m.hasClass(c, node) ? node.className : node.className + ' ' + c;
    },

    /* 移除样式名 */
    removeClass: function (c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if (!Vcity._m.hasClass(c, node))return;
        node.className = reg.test(node.className) ? node.className.replace(reg, '') : node.className;
    },

    /* 是否含有CLASS */
    hasClass: function (c, node) {
        if (!node || !node.className)return false;
        return node.className.indexOf(c) > -1;
    },

    /* 阻止冒泡 */
    stopPropagation: function (event) {
        event = event || window.event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    },
    /* 去除两端空格 */
    trim: function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
};

Vcity.allCity = Vcity.allCity = {"hot":{"hot":[{"code":"CTU","cityCode":"CTU","name":"成都(CTU)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"CHENGDU","en_name":"CHENGDU","en_simple_name":null,"search_value":"|成都(CTU)|CTU|CHENGDU|CD|","is_city":"1"},{"code":"CAN","cityCode":"CAN","name":"广州(CAN)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"GUANGZHOU","en_name":"GUANGZHOU","en_simple_name":null,"search_value":"|广州(CAN)|CAN|GUANGZHOU|GZ|","is_city":"1"},{"code":"SHA","cityCode":"SHA","name":"上海(SHA)","depCitys":"|SJW|SJW|","arrCitys":"|SJW|SJW|","cityEnName":"SHANGHAI","en_name":"SHANGHAI","en_simple_name":null,"search_value":"|上海(SHA)|SHA|SHANGHAI|SH|","is_city":"1"},{"code":"SJW","cityCode":"SJW","name":"石家庄(SJW)","depCitys":"|BPE|DLC|HGH|KWL|WNZ|BHY|CAN|CSX|FOC|HFE|JJN|SHA|SHE|SWA|SYX|URC|BAV|CTU|NNG|SHA|SIA|BAR|ERL|KWE|LYI|NKG|NTG|TAO|BKK|LYG|NZH|TPE|XMN|ZHA|CKG|HAK|HLD|LHW|UCB|WUA|ZQZ|CDE|HET|HRB|JNG|MIG|NGB|SIN|SZX|YNZ|ZYI|INC|KHN|KMG|MDG|ZUH|","arrCitys":"|ZQZ|SYX|SWA|SIA|KHN|HRB|HAK|FOC|ERL|CTU|BKK|ZYI|UCB|LYI|KWL|JNG|INC|HFE|BHY|BAV|ZHA|URC|MIG|KWE|HLD|CDE|CAN|SIN|NZH|NTG|KMG|TPE|SHA|NNG|MDG|JJN|BAR|SHA|NKG|HET|CKG|YNZ|WUA|SZX|LYG|LHW|HGH|BPE|ZUH|XMN|WNZ|TAO|SHE|NGB|DLC|CSX|","cityEnName":"SHIJIAZHUANG","en_name":"SHIJIAZHUANG","en_simple_name":null,"search_value":"|石家庄(SJW)|SJW|SHIJIAZHUANG|SJZ|","is_city":"1"},{"code":"XMN","cityCode":"XMN","name":"厦门(XMN)","depCitys":"|ZQZ|NKG|SJW|","arrCitys":"|SJW|NKG|ZQZ|","cityEnName":"XIAMEN","en_name":"XIAMEN","en_simple_name":null,"search_value":"|厦门(XMN)|XMN|XIAMEN|XM|","is_city":"1"}]},"BC":{"B":[{"code":"BAV","cityCode":"BAV","name":"包头(BAV)","depCitys":"|KWE|SJW|","arrCitys":"|SJW|KWE|","cityEnName":"BAOTOU","en_name":"BAOTOU","en_simple_name":null,"search_value":"|包头(BAV)|BAV|BAOTOU|BT|","is_city":"1"},{"code":"BAV","cityCode":"BAV","name":"包头/二里半机场(BAV)","depCitys":"|KWE|SJW|","arrCitys":"|SJW|KWE|","cityEnName":"BAOTOU","en_name":"BAOTOU AIRPORT","en_simple_name":"BAOTOU","search_value":"|二里半机场(BAV)|BAV|ERLIBAN|ELB|BAOTOUERLIBAN|BTELB|","is_city":"0"},{"code":"BHY","cityCode":"BHY","name":"北海(BHY)","depCitys":"|SJW|HFE|","arrCitys":"|SJW|HFE|","cityEnName":"BEIHAI","en_name":"BEIHAI","en_simple_name":null,"search_value":"|北海(BHY)|BHY|BEIHAI|BH|","is_city":"1"},{"code":"BHY","cityCode":"BHY","name":"北海/福成机场(BHY)","depCitys":"|SJW|HFE|","arrCitys":"|SJW|HFE|","cityEnName":"BEIHAI","en_name":"BEIHAI AIRPORT","en_simple_name":"BEIHAI","search_value":"|福成机场(BHY)|BHY|FUCHENG|FC|BEIHAIFUCHENG|BHFC|","is_city":"0"}],"C":[{"code":"CSX","cityCode":"CSX","name":"长沙(CSX)","depCitys":"|BAR|HAK|SJW|","arrCitys":"|HAK|SJW|BAR|","cityEnName":"CHANGSHA","en_name":"CHANGSHA","en_simple_name":null,"search_value":"|长沙(CSX)|CSX|CHANGSHA|CS|","is_city":"1"},{"code":"CSX","cityCode":"CSX","name":"长沙/黄花机场(CSX)","depCitys":"|BAR|HAK|SJW|","arrCitys":"|HAK|SJW|BAR|","cityEnName":"CHANGSHA","en_name":"CHANGSHA AIRPORT","en_simple_name":"CHANGSHA","search_value":"|黄花机场(CSX)|CSX|HUANGHUA|HH|CHANGSHAHUANGHUA|CSHH|","is_city":"0"},{"code":"CDE","cityCode":"CDE","name":"承德(CDE)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"CHENGDE","en_name":"CHENGDE","en_simple_name":null,"search_value":"|承德(CDE)|CDE|CHENGDE|CD|","is_city":"1"},{"code":"CDE","cityCode":"CDE","name":"承德/普宁机场(CDE)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"CHENGDE","en_name":"CHENGDE AIRPORT","en_simple_name":"CHENGDE","search_value":"|普宁机场(CDE)|CDE|PUNING|PN|CHENGDEPUNING|CDPN|","is_city":"0"},{"code":"CTU","cityCode":"CTU","name":"成都(CTU)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"CHENGDU","en_name":"CHENGDU","en_simple_name":null,"search_value":"|成都(CTU)|CTU|CHENGDU|CD|","is_city":"1"},{"code":"CTU","cityCode":"CTU","name":"成都/双流机场(CTU)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"CHENGDU","en_name":"CHENGDU AIRPORT","en_simple_name":"CHENGDU","search_value":"|双流机场(CTU)|CTU|SHUANGLIU|SL|CHENGDUSHUANGLIU|CDSL|","is_city":"0"},{"code":"CKG","cityCode":"CKG","name":"重庆(CKG)","depCitys":"|NNG|SJW|","arrCitys":"|NNG|SJW|","cityEnName":"CHONGQING","en_name":"CHONGQING","en_simple_name":null,"search_value":"|重庆(CKG)|CKG|CHONGQING|CQ|","is_city":"1"},{"code":"CKG","cityCode":"CKG","name":"重庆/江北机场(CKG)","depCitys":"|NNG|SJW|","arrCitys":"|NNG|SJW|","cityEnName":"CHONGQING","en_name":"CHONGQING AIRPORT","en_simple_name":"CHONGQING","search_value":"|江北机场(CKG)|CKG|JIANGBEI|JB|CHONGQINGJIANGBEI|CQJB|","is_city":"0"}]},"DEF":{"D":[{"code":"DLC","cityCode":"DLC","name":"大连(DLC)","depCitys":"|JJN|CGO|SJW|","arrCitys":"|SJW|CGO|JJN|","cityEnName":"DALIAN","en_name":"DALIAN","en_simple_name":null,"search_value":"|大连(DLC)|DLC|DALIAN|DL|","is_city":"1"},{"code":"DLC","cityCode":"DLC","name":"大连/周水子机场(DLC)","depCitys":"|JJN|CGO|SJW|","arrCitys":"|SJW|CGO|JJN|","cityEnName":"DALIAN","en_name":"DALIAN AIRPORT","en_simple_name":"DALIAN","search_value":"|周水子机场(DLC)|DLC|ZHOUSHUIZI|ZSZ|DALIANZHOUSHUIZI|DLZSZ|","is_city":"0"}],"E":[{"code":"ERL","cityCode":"ERL","name":"二连浩特(ERL)","depCitys":"|SJW|UCB|","arrCitys":"|UCB|SJW|","cityEnName":"ERLIANHAOTE","en_name":"ERLIANHAOTE","en_simple_name":null,"search_value":"|二连浩特(ERL)|ERL|ERLIANHAOTE|ELHT|","is_city":"1"},{"code":"ERL","cityCode":"ERL","name":"二连浩特/赛乌苏机场(ERL)","depCitys":"|SJW|UCB|","arrCitys":"|UCB|SJW|","cityEnName":"ERLIANHAOTE","en_name":"ERLIANHAOTE AIRPORT","en_simple_name":null,"search_value":"|赛乌苏机场(ERL)|ERL|SAIWUSU|SWS|ERLIANHAOTESAIWUSU|ELHTSWS|","is_city":"0"}],"F":[{"code":"FOC","cityCode":"FOC","name":"福州(FOC)","depCitys":"|SJW|YNZ|NKG|ZUH|","arrCitys":"|ZUH|SJW|YNZ|NKG|","cityEnName":"FUZHOU","en_name":"FUZHOU","en_simple_name":null,"search_value":"|福州(FOC)|FOC|FUZHOU|FZ|","is_city":"1"},{"code":"FOC","cityCode":"FOC","name":"福州/长乐机场(FOC)","depCitys":"|SJW|YNZ|NKG|ZUH|","arrCitys":"|ZUH|SJW|YNZ|NKG|","cityEnName":"FUZHOU","en_name":"FUZHOU AIRPORT","en_simple_name":"FUZHOU","search_value":"|长乐机场(FOC)|FOC|CHANGLE|CL|FUZHOUCHANGLE|FZCL|","is_city":"0"}]},"GHI":{"G":[{"code":"CAN","cityCode":"CAN","name":"广州/白云机场(CAN)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"GUANGZHOU","en_name":"BAIYUN AIRPORT","en_simple_name":"BAIYUN","search_value":"|白云机场(CAN)|CAN|BAIYUN|BY|GUANGZHOUBAIYUN|GZBY|","is_city":"0"},{"code":"CAN","cityCode":"CAN","name":"广州(CAN)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"GUANGZHOU","en_name":"GUANGZHOU","en_simple_name":null,"search_value":"|广州(CAN)|CAN|GUANGZHOU|GZ|","is_city":"1"},{"code":"KWL","cityCode":"KWL","name":"桂林(KWL)","depCitys":"|HFE|SJW|SYX|","arrCitys":"|SJW|SYX|HFE|","cityEnName":"GUILIN","en_name":"GUILIN","en_simple_name":null,"search_value":"|桂林(KWL)|KWL|GUILIN|GL|","is_city":"1"},{"code":"KWL","cityCode":"KWL","name":"桂林/两江机场(KWL)","depCitys":"|HFE|SJW|SYX|","arrCitys":"|SJW|SYX|HFE|","cityEnName":"GUILIN","en_name":"GUILIN AIRPORT","en_simple_name":"GUILIN","search_value":"|两江机场(KWL)|KWL|LIANGJIANG|LJ|GUILINLIANGJIANG|GLLJ|","is_city":"0"},{"code":"KWE","cityCode":"KWE","name":"贵阳(KWE)","depCitys":"|SIA|SJW|BAV|HAK|","arrCitys":"|BAV|SJW|HAK|SIA|","cityEnName":"GUIYANG","en_name":"GUIYANG","en_simple_name":null,"search_value":"|贵阳(KWE)|KWE|GUIYANG|GY|","is_city":"1"},{"code":"KWE","cityCode":"KWE","name":"贵阳/龙洞堡机场(KWE)","depCitys":"|SIA|SJW|BAV|HAK|","arrCitys":"|BAV|SJW|HAK|SIA|","cityEnName":"GUIYANG","en_name":"GUIYANG AIRPORT","en_simple_name":"GUIYANG","search_value":"|龙洞堡机场(KWE)|KWE|LONGDONGBAO|LDB|GUIYANGLONGDONGBAO|GYLDB|","is_city":"0"}],"H":[{"code":"HAK","cityCode":"HAK","name":"海口(HAK)","depCitys":"|CSX|SJW|HGH|NNG|JNG|KWE|LYG|","arrCitys":"|HGH|JNG|KWE|SJW|LYG|NNG|CSX|","cityEnName":"HAIKOU","en_name":"HAIKOU","en_simple_name":null,"search_value":"|海口(HAK)|HAK|HAIKOU|HK|","is_city":"1"},{"code":"HAK","cityCode":"HAK","name":"海口/美兰机场(HAK)","depCitys":"|CSX|SJW|HGH|NNG|JNG|KWE|LYG|","arrCitys":"|HGH|JNG|KWE|SJW|LYG|NNG|CSX|","cityEnName":"HAIKOU","en_name":"HAIKOU AIRPORT","en_simple_name":"HAIKOU","search_value":"|美兰机场(HAK)|HAK|MEILAN|ML|HAIKOUMEILAN|HKML|","is_city":"0"},{"code":"HLD","cityCode":"HLD","name":"海拉尔(HLD)","depCitys":"|HET|SJW|","arrCitys":"|SJW|HET|","cityEnName":"HAILAER","en_name":"HAILAR","en_simple_name":null,"search_value":"|海拉尔(HLD)|HLD|HAILAER|HLE|","is_city":"1"},{"code":"HLD","cityCode":"HLD","name":"海拉尔/东山机场(HLD)","depCitys":"|HET|SJW|","arrCitys":"|SJW|HET|","cityEnName":"HAILAER","en_name":"HAILAR AIRPORT","en_simple_name":"HAILAR ","search_value":"|东山机场(HLD)|HLD|DONGSHANJICHANG|DSJC|HAILAERDONGSHANJICHANG|HLEDSJC|","is_city":"0"},{"code":"HGH","cityCode":"HGH","name":"杭州(HGH)","depCitys":"|HAK|JJN|NZH|SIN|SJW|","arrCitys":"|SJW|SIN|HAK|JJN|NZH|","cityEnName":"HANGZHOU","en_name":"HANGZHOU","en_simple_name":null,"search_value":"|杭州(HGH)|HGH|HANGZHOU|HZ|","is_city":"1"},{"code":"HGH","cityCode":"HGH","name":"杭州/萧山机场(HGH)","depCitys":"|HAK|JJN|NZH|SIN|SJW|","arrCitys":"|SJW|SIN|HAK|JJN|NZH|","cityEnName":"HANGZHOU","en_name":"HANGZHOU AIRPORT","en_simple_name":"HANGZHOU","search_value":"|萧山机场(HGH)|HGH|XIAOSHAN|XS|HANGZHOUXIAOSHAN|HZXS|","is_city":"0"},{"code":"HRB","cityCode":"HRB","name":"哈尔滨(HRB)","depCitys":"|SJW|LHW|","arrCitys":"|LHW|SJW|","cityEnName":"HAERBIN","en_name":"HARBIN","en_simple_name":null,"search_value":"|哈尔滨(HRB)|HRB|HAERBIN|HEB|","is_city":"1"},{"code":"HRB","cityCode":"HRB","name":"哈尔滨/太平机场(HRB)","depCitys":"|SJW|LHW|","arrCitys":"|LHW|SJW|","cityEnName":"HAERBIN","en_name":"HARBIN AIRPORT","en_simple_name":"HARBIN","search_value":"|太平机场(HRB)|HRB|TAIPING|TP|HAERBINTAIPING|HEBTP|","is_city":"0"},{"code":"HFE","cityCode":"HFE","name":"合肥(HFE)","depCitys":"|SJW|BHY|KWL|","arrCitys":"|KWL|SJW|BHY|","cityEnName":"HEFEI","en_name":"HEFEI","en_simple_name":null,"search_value":"|合肥(HFE)|HFE|HEFEI|HF|","is_city":"1"},{"code":"HET","cityCode":"HET","name":"呼和浩特(HET)","depCitys":"|HLD|SJW|NZH|","arrCitys":"|NZH|HLD|SJW|","cityEnName":"HUHEHAOTE","en_name":"HOHHOT","en_simple_name":null,"search_value":"|呼和浩特(HET)|HET|HUHEHAOTE|HHHT|","is_city":"1"},{"code":"HET","cityCode":"HET","name":"呼和浩特/白塔机场(HET)","depCitys":"|HLD|SJW|NZH|","arrCitys":"|NZH|HLD|SJW|","cityEnName":"HUHEHAOTE","en_name":"HOHHOT AIRPORT","en_simple_name":"HOHHOT","search_value":"|白塔机场(HET)|HET|BAITA|BT|HUHEHAOTEBAITA|HHHTBT|","is_city":"0"},{"code":"HFE","cityCode":"HFE","name":"合肥/新桥机场(HFE)","depCitys":"|SJW|BHY|KWL|","arrCitys":"|KWL|SJW|BHY|","cityEnName":"HEFEI","en_name":"XINQIAO AIRPORT","en_simple_name":"HEFEI XINQIAO INTERNATIONAL","search_value":"|新桥机场(HFE)|HFE|XINQIAO|XQ|HEFEIXINQIAO|HFXQ|","is_city":"0"}]},"JKL":{"J":[{"code":"SWA","cityCode":"SWA","name":"揭阳/潮汕机场(SWA)","depCitys":"|SJW|KHN|","arrCitys":"|SJW|KHN|","cityEnName":"JIEYANG","en_name":"JIEYANG CHAOSHAN INTERNATIONAL AIRPORT","en_simple_name":null,"search_value":"|潮汕机场(SWA)|SWA|CHAOSHAN|CS|JIEYANGCHAOSHAN|JYCS|","is_city":"0"},{"code":"JNG","cityCode":"JNG","name":"济宁(JNG)","depCitys":"|HAK|SJW|","arrCitys":"|HAK|SJW|","cityEnName":"JINING","en_name":"JINING","en_simple_name":null,"search_value":"|济宁(JNG)|JNG|JINING|JN|","is_city":"1"},{"code":"JNG","cityCode":"JNG","name":"济宁/曲阜机场(JNG)","depCitys":"|HAK|SJW|","arrCitys":"|HAK|SJW|","cityEnName":"JINING","en_name":"JINING AIRPORT","en_simple_name":"JINING","search_value":"|曲阜机场(JNG)|JNG|QUFU|QF|JININGQUFU|JNQF|","is_city":"0"},{"code":"SWA","cityCode":"SWA","name":"揭阳(SWA)","depCitys":"|SJW|KHN|","arrCitys":"|SJW|KHN|","cityEnName":"JIEYANG","en_name":"SHANTOU","en_simple_name":null,"search_value":"|揭阳(SWA)|SWA|JIEYANG|JY|","is_city":"1"}],"K":[{"code":"KMG","cityCode":"KMG","name":"昆明(KMG)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"KUNMING","en_name":"KUNMING","en_simple_name":null,"search_value":"|昆明(KMG)|KMG|KUNMING|KM|","is_city":"1"},{"code":"KMG","cityCode":"KMG","name":"昆明/长水机场(KMG)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"KUNMING","en_name":"KUNMING AIRPORT","en_simple_name":"KUNMING","search_value":"|长水机场(KMG)|KMG|CHANGSHUI|CS|KUNMINGCHANGSHUI|KMCS|","is_city":"0"}],"L":[{"code":"LHW","cityCode":"LHW","name":"兰州(LHW)","depCitys":"|HRB|SJW|","arrCitys":"|HRB|SJW|","cityEnName":"LANZHOU","en_name":"LANZHOU","en_simple_name":null,"search_value":"|兰州(LHW)|LHW|LANZHOU|LZ|","is_city":"1"},{"code":"LHW","cityCode":"LHW","name":"兰州/中川机场(LHW)","depCitys":"|HRB|SJW|","arrCitys":"|HRB|SJW|","cityEnName":"LANZHOU","en_name":"LANZHOU AIRPORT","en_simple_name":"LANZHOU","search_value":"|中川机场(LHW)|LHW|ZHONGCHUAN|ZC|LANZHOUZHONGCHUAN|LZZC|","is_city":"0"},{"code":"LYG","cityCode":"LYG","name":"连云港(LYG)","depCitys":"|HAK|SJW|","arrCitys":"|SJW|HAK|","cityEnName":"LIANYUNGANG","en_name":"LIANYUNGANG","en_simple_name":null,"search_value":"|连云港(LYG)|LYG|LIANYUNGANG|LYG|","is_city":"1"},{"code":"LYG","cityCode":"LYG","name":"连云港/白塔埠机场(LYG)","depCitys":"|HAK|SJW|","arrCitys":"|SJW|HAK|","cityEnName":"LIANYUNGANG","en_name":"LIANYUNGANG AIRPORT","en_simple_name":"LIANYUNGANG ","search_value":"|白塔埠机场(LYG)|LYG|BAITABUJICHANG|BTBJC|LIANYUNGANGBAITABUJICHANG|LYGBTBJC|","is_city":"0"},{"code":"LYI","cityCode":"LYI","name":"临沂(LYI)","depCitys":"|SJW|WNZ|","arrCitys":"|SJW|WNZ|","cityEnName":"LINYI","en_name":"LINYI","en_simple_name":null,"search_value":"|临沂(LYI)|LYI|LINYI|LY|","is_city":"1"},{"code":"LYI","cityCode":"LYI","name":"临沂/沭埠岭国际机场(LYI)","depCitys":"|SJW|WNZ|","arrCitys":"|SJW|WNZ|","cityEnName":"LINYI","en_name":"LINYI AIRPORT","en_simple_name":"LINYI","search_value":"|沭埠岭国际机场(LYI)|LYI|SHUBULINGGUOJI|SBLGJ|LINYISHUBULINGGUOJI|LYSBLGJ|","is_city":"0"}]},"MN":{"M":[{"code":"BKK","cityCode":"BKK","name":"曼谷(BKK)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"MANGU","en_name":"BANGKOK","en_simple_name":null,"search_value":"|曼谷(BKK)|BKK|MANGU|MG|","is_city":"1"},{"code":"NZH","cityCode":"NZH","name":"满洲里(NZH)","depCitys":"|HET|SJW|HGH|","arrCitys":"|HGH|SJW|HET|","cityEnName":"MANZHOULI","en_name":"MANZHOULI","en_simple_name":null,"search_value":"|满洲里(NZH)|NZH|MANZHOULI|MZL|","is_city":"1"},{"code":"NZH","cityCode":"NZH","name":"满洲里/西郊机场(NZH)","depCitys":"|HET|SJW|HGH|","arrCitys":"|HGH|SJW|HET|","cityEnName":"MANZHOULI","en_name":"MANZHOULI AIRPORT","en_simple_name":"MANZHOULI","search_value":"|西郊机场(NZH)|NZH|XIJIAO|XJ|MANZHOULIXIJIAO|MZLXJ|","is_city":"0"},{"code":"MIG","cityCode":"MIG","name":"绵阳(MIG)","depCitys":"|SIA|SJW|","arrCitys":"|SIA|SJW|","cityEnName":"MIANYANG","en_name":"MIAN YANG","en_simple_name":null,"search_value":"|绵阳(MIG)|MIG|MIANYANG|MY|","is_city":"1"},{"code":"MIG","cityCode":"MIG","name":"绵阳/南郊机场(MIG)","depCitys":"|SIA|SJW|","arrCitys":"|SIA|SJW|","cityEnName":"MIANYANG","en_name":"MIAN YANG AIRPORT","en_simple_name":"MIAN YANG","search_value":"|南郊机场(MIG)|MIG|NANJIAO|NJ|MIANYANGNANJIAO|MYNJ|","is_city":"0"},{"code":"MDG","cityCode":"MDG","name":"牡丹江(MDG)","depCitys":"|SJW|SHE|","arrCitys":"|SHE|SJW|","cityEnName":"MUDANJIANG","en_name":"MUDANJIANG","en_simple_name":null,"search_value":"|牡丹江(MDG)|MDG|MUDANJIANG|MDJ|","is_city":"1"},{"code":"MDG","cityCode":"MDG","name":"牡丹江/海浪机场(MDG)","depCitys":"|SJW|SHE|","arrCitys":"|SHE|SJW|","cityEnName":"MUDANJIANG","en_name":"MUDANJIANG AIRPORT","en_simple_name":"MUDANJIANG ","search_value":"|海浪机场(MDG)|MDG|HAILANGJICHANG|HLJC|MUDANJIANGHAILANGJICHANG|MDJHLJC|","is_city":"0"},{"code":"BKK","cityCode":"BKK","name":"曼谷/素万那普(BKK)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"MANGU","en_name":"SUVARNABHUMI AIRPORT","en_simple_name":"SUVARNABHUMI","search_value":"|素万那普(BKK)|BKK|SUWANNAPU|SWNP|MANGUSUWANNAPU|MGSWNP|","is_city":"0"}],"N":[{"code":"KHN","cityCode":"KHN","name":"南昌(KHN)","depCitys":"|SJW|ZHA|SWA|","arrCitys":"|SWA|ZHA|SJW|","cityEnName":"NANCHANG","en_name":"NANCHANG","en_simple_name":null,"search_value":"|南昌(KHN)|KHN|NANCHANG|NC|","is_city":"1"},{"code":"KHN","cityCode":"KHN","name":"南昌/昌北机场(KHN)","depCitys":"|SJW|ZHA|SWA|","arrCitys":"|SWA|ZHA|SJW|","cityEnName":"NANCHANG","en_name":"NANCHANG AIRPORT","en_simple_name":"NANCHANG","search_value":"|昌北机场(KHN)|KHN|CHANGBEI|CB|NANCHANGCHANGBEI|NCCB|","is_city":"0"},{"code":"NKG","cityCode":"NKG","name":"南京(NKG)","depCitys":"|JJN|FOC|SJW|XMN|","arrCitys":"|SJW|JJN|XMN|FOC|","cityEnName":"NANJING","en_name":"NANJING","en_simple_name":null,"search_value":"|南京(NKG)|NKG|NANJING|NJ|","is_city":"1"},{"code":"NKG","cityCode":"NKG","name":"南京/禄口机场(NKG)","depCitys":"|JJN|FOC|SJW|XMN|","arrCitys":"|SJW|JJN|XMN|FOC|","cityEnName":"NANJING","en_name":"NANJING AIRPORT","en_simple_name":"NANJING","search_value":"|禄口机场(NKG)|NKG|LUKOU|LK|NANJINGLUKOU|NJLK|","is_city":"0"},{"code":"NNG","cityCode":"NNG","name":"南宁(NNG)","depCitys":"|CKG|SJW|HAK|","arrCitys":"|SJW|HAK|CKG|","cityEnName":"NANNING","en_name":"NANNING","en_simple_name":null,"search_value":"|南宁(NNG)|NNG|NANNING|NN|","is_city":"1"},{"code":"NNG","cityCode":"NNG","name":"南宁/吴圩机场(NNG)","depCitys":"|CKG|SJW|HAK|","arrCitys":"|SJW|HAK|CKG|","cityEnName":"NANNING","en_name":"NANNING AIRPORT","en_simple_name":"NANNING","search_value":"|吴圩机场(NNG)|NNG|WUYU|WY|NANNINGWUYU|NNWY|","is_city":"0"},{"code":"NTG","cityCode":"NTG","name":"南通(NTG)","depCitys":"|WNZ|SJW|","arrCitys":"|SJW|WNZ|","cityEnName":"NANTONG","en_name":"NANTONG","en_simple_name":null,"search_value":"|南通(NTG)|NTG|NANTONG|NT|","is_city":"1"},{"code":"NTG","cityCode":"NTG","name":"南通/兴东机场(NTG)","depCitys":"|WNZ|SJW|","arrCitys":"|SJW|WNZ|","cityEnName":"NANTONG","en_name":"NANTONG AIRPORT","en_simple_name":"NANTONG","search_value":"|兴东机场(NTG)|NTG|XINGDONG|XD|NANTONGXINGDONG|NTXD|","is_city":"0"},{"code":"NGB","cityCode":"NGB","name":"宁波(NGB)","depCitys":"|ZUH|SJW|","arrCitys":"|ZUH|SJW|","cityEnName":"NINGBO","en_name":"NINGBO","en_simple_name":null,"search_value":"|宁波(NGB)|NGB|NINGBO|NB|","is_city":"1"},{"code":"NGB","cityCode":"NGB","name":"宁波/栎社机场(NGB)","depCitys":"|ZUH|SJW|","arrCitys":"|ZUH|SJW|","cityEnName":"NINGBO","en_name":"NINGBO LISHE INTERNATIONAL AIRPORT","en_simple_name":"NINGBO LISHE INTERNATIONAL ","search_value":"|栎社机场(NGB)|NGB|LISHEJICHANG|LSJC|NINGBOLISHEJICHANG|NBLSJC|","is_city":"0"}]},"OPQ":{"Q":[{"code":"BPE","cityCode":"BPE","name":"秦皇岛/北戴河机场(BPE)","depCitys":"|TAO|SJW|","arrCitys":"|SJW|TAO|","cityEnName":"QINHUANGDAO","en_name":"BEIDAIHEJICHANG","en_simple_name":"BEIDAIHE AIR PORT","search_value":"|北戴河机场(BPE)|BPE|BEIDAIHE|BDH|QINHUANGDAOBEIDAIHE|QHDBDH|","is_city":"0"},{"code":"TAO","cityCode":"TAO","name":"青岛(TAO)","depCitys":"|BPE|SJW|","arrCitys":"|BPE|SJW|","cityEnName":"QINGDAO","en_name":"QINGDAO","en_simple_name":null,"search_value":"|青岛(TAO)|TAO|QINGDAO|QD|","is_city":"1"},{"code":"TAO","cityCode":"TAO","name":"青岛/流亭机场(TAO)","depCitys":"|BPE|SJW|","arrCitys":"|BPE|SJW|","cityEnName":"QINGDAO","en_name":"QINGDAO AIRPORT","en_simple_name":"QINGDAO","search_value":"|流亭机场(TAO)|TAO|LIUTING|LT|QINGDAOLIUTING|QDLT|","is_city":"0"},{"code":"BPE","cityCode":"BPE","name":"秦皇岛(BPE)","depCitys":"|TAO|SJW|","arrCitys":"|SJW|TAO|","cityEnName":"QINHUANGDAO","en_name":"QINHUANGDAO","en_simple_name":null,"search_value":"|秦皇岛(BPE)|BPE|QINHUANGDAO|QHD|","is_city":"1"},{"code":"BAR","cityCode":"BAR","name":"琼海(BAR)","depCitys":"|SJW|ZYI|CSX|","arrCitys":"|CSX|ZYI|SJW|","cityEnName":"QIONGHAI","en_name":"QIONGHAI","en_simple_name":null,"search_value":"|琼海(BAR)|BAR|QIONGHAI|QH|","is_city":"1"},{"code":"BAR","cityCode":"BAR","name":"琼海/博鳌机场(BAR)","depCitys":"|SJW|ZYI|CSX|","arrCitys":"|CSX|ZYI|SJW|","cityEnName":"QIONGHAI","en_name":"QIONGHAI AIRPORT","en_simple_name":"BOAO","search_value":"|博鳌机场(BAR)|BAR|BOAO|BA|QIONGHAIBOAO|QHBA|","is_city":"0"},{"code":"JJN","cityCode":"JJN","name":"泉州(JJN)","depCitys":"|TSN|CGO|DLC|HGH|NKG|SJW|","arrCitys":"|HGH|TSN|SJW|CGO|NKG|DLC|","cityEnName":"QUANZHOU","en_name":"QUANZHOU","en_simple_name":null,"search_value":"|泉州(JJN)|JJN|QUANZHOU|QZ|","is_city":"1"},{"code":"JJN","cityCode":"JJN","name":"泉州/晋江机场(JJN)","depCitys":"|TSN|CGO|DLC|HGH|NKG|SJW|","arrCitys":"|HGH|TSN|SJW|CGO|NKG|DLC|","cityEnName":"QUANZHOU","en_name":"QUANZHOU AIRPORT","en_simple_name":"QUANZHOU","search_value":"|晋江机场(JJN)|JJN|JINJIANG|JJ|QUANZHOUJINJIANG|QZJJ|","is_city":"0"}]},"RST":{"S":[{"code":"SZX","cityCode":"SZX","name":"深圳/宝安机场(SZX)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"SHENZHEN","en_name":"BAOAN  AIRPORT","en_simple_name":"SHENZHEN","search_value":"|宝安机场(SZX)|SZX|BAOAN|BA|SHENZHENBAOAN|SZBA|","is_city":"0"},{"code":"SHA","cityCode":"SHA","name":"上海/虹桥机场(SHA)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"SHANGHAI","en_name":"HONGQIAO AIRPORT","en_simple_name":"HONGQIAO","search_value":"|虹桥机场(SHA)|SHA|HONGQIAO|HQ|SHANGHAIHONGQIAO|SHHQ|","is_city":"0"},{"code":"PVG","cityCode":"SHA","name":"上海/浦东机场(PVG)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"SHANGHAI","en_name":"PU DONG AIRPORT","en_simple_name":"PU DONG","search_value":"|浦东机场(PVG)|PVG|PUDONG|PD|SHANGHAIPUDONG|SHPD|","is_city":"0"},{"code":"SYX","cityCode":"SYX","name":"三亚(SYX)","depCitys":"|SJW|KWL|","arrCitys":"|SJW|KWL|","cityEnName":"SANYA","en_name":"SANYA","en_simple_name":null,"search_value":"|三亚(SYX)|SYX|SANYA|SY|","is_city":"1"},{"code":"SYX","cityCode":"SYX","name":"三亚/凤凰机场(SYX)","depCitys":"|SJW|KWL|","arrCitys":"|SJW|KWL|","cityEnName":"SANYA","en_name":"SANYA AIRPORT","en_simple_name":"SANYA","search_value":"|凤凰机场(SYX)|SYX|FENGHUANG|FH|SANYAFENGHUANG|SYFH|","is_city":"0"},{"code":"SHA","cityCode":"SHA","name":"上海(SHA)","depCitys":"|SJW|SJW|","arrCitys":"|SJW|SJW|","cityEnName":"SHANGHAI","en_name":"SHANGHAI","en_simple_name":null,"search_value":"|上海(SHA)|SHA|SHANGHAI|SH|","is_city":"1"},{"code":"SHE","cityCode":"SHE","name":"沈阳(SHE)","depCitys":"|MDG|SJW|","arrCitys":"|SJW|MDG|","cityEnName":"SHENYANG","en_name":"SHENYANG","en_simple_name":null,"search_value":"|沈阳(SHE)|SHE|SHENYANG|SY|","is_city":"1"},{"code":"SHE","cityCode":"SHE","name":"沈阳/桃仙机场(SHE)","depCitys":"|MDG|SJW|","arrCitys":"|SJW|MDG|","cityEnName":"SHENYANG","en_name":"SHENYANG AIRPORT","en_simple_name":"SHENYANG","search_value":"|桃仙机场(SHE)|SHE|TAOXIAN|TX|SHENYANGTAOXIAN|SYTX|","is_city":"0"},{"code":"SZX","cityCode":"SZX","name":"深圳(SZX)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"SHENZHEN","en_name":"SHENZHEN","en_simple_name":null,"search_value":"|深圳(SZX)|SZX|SHENZHEN|SZ|","is_city":"1"},{"code":"SJW","cityCode":"SJW","name":"石家庄(SJW)","depCitys":"|BPE|DLC|HGH|KWL|WNZ|BHY|CAN|CSX|FOC|HFE|JJN|SHA|SHE|SWA|SYX|URC|BAV|CTU|NNG|SHA|SIA|BAR|ERL|KWE|LYI|NKG|NTG|TAO|BKK|LYG|NZH|TPE|XMN|ZHA|CKG|HAK|HLD|LHW|UCB|WUA|ZQZ|CDE|HET|HRB|JNG|MIG|NGB|SIN|SZX|YNZ|ZYI|INC|KHN|KMG|MDG|ZUH|","arrCitys":"|ZQZ|SYX|SWA|SIA|KHN|HRB|HAK|FOC|ERL|CTU|BKK|ZYI|UCB|LYI|KWL|JNG|INC|HFE|BHY|BAV|ZHA|URC|MIG|KWE|HLD|CDE|CAN|SIN|NZH|NTG|KMG|TPE|SHA|NNG|MDG|JJN|BAR|SHA|NKG|HET|CKG|YNZ|WUA|SZX|LYG|LHW|HGH|BPE|ZUH|XMN|WNZ|TAO|SHE|NGB|DLC|CSX|","cityEnName":"SHIJIAZHUANG","en_name":"SHIJIAZHUANG","en_simple_name":null,"search_value":"|石家庄(SJW)|SJW|SHIJIAZHUANG|SJZ|","is_city":"1"},{"code":"SJW","cityCode":"SJW","name":"石家庄/正定机场(SJW)","depCitys":"|BPE|DLC|HGH|KWL|WNZ|BHY|CAN|CSX|FOC|HFE|JJN|SHA|SHE|SWA|SYX|URC|BAV|CTU|NNG|SHA|SIA|BAR|ERL|KWE|LYI|NKG|NTG|TAO|BKK|LYG|NZH|TPE|XMN|ZHA|CKG|HAK|HLD|LHW|UCB|WUA|ZQZ|CDE|HET|HRB|JNG|MIG|NGB|SIN|SZX|YNZ|ZYI|INC|KHN|KMG|MDG|ZUH|","arrCitys":"|ZQZ|SYX|SWA|SIA|KHN|HRB|HAK|FOC|ERL|CTU|BKK|ZYI|UCB|LYI|KWL|JNG|INC|HFE|BHY|BAV|ZHA|URC|MIG|KWE|HLD|CDE|CAN|SIN|NZH|NTG|KMG|TPE|SHA|NNG|MDG|JJN|BAR|SHA|NKG|HET|CKG|YNZ|WUA|SZX|LYG|LHW|HGH|BPE|ZUH|XMN|WNZ|TAO|SHE|NGB|DLC|CSX|","cityEnName":"SHIJIAZHUANG","en_name":"ZHENGDING AIRPORT","en_simple_name":"ZHENGDING","search_value":"|正定机场(SJW)|SJW|ZHENGDING|ZD|SHIJIAZHUANGZHENGDING|SJZZD|","is_city":"0"}],"T":[{"code":"TPE","cityCode":"TPE","name":"台北/桃园机场(TPE)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"TAIBEI","en_name":"CHIANG KAI SHEK AIRPORT","en_simple_name":"CHIANG KAI SHEK","search_value":"|桃园机场(TPE)|TPE|TAOYUAN|TY|TAIBEITAOYUAN|TBTY|","is_city":"0"},{"code":"TPE","cityCode":"TPE","name":"台北(TPE)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"TAIBEI","en_name":"TAIPEI","en_simple_name":null,"search_value":"|台北(TPE)|TPE|TAIBEI|TB|","is_city":"1"},{"code":"TSN","cityCode":"TSN","name":"天津(TSN)","depCitys":"|JJN|CGO|","arrCitys":"|JJN|CGO|","cityEnName":"TIANJIN","en_name":"TIANJIN","en_simple_name":null,"search_value":"|天津(TSN)|TSN|TIANJIN|TJ|","is_city":"1"},{"code":"TSN","cityCode":"TSN","name":"天津/滨海机场(TSN)","depCitys":"|JJN|CGO|","arrCitys":"|JJN|CGO|","cityEnName":"TIANJIN","en_name":"TIANJIN AIRPORT","en_simple_name":"TIANJIN","search_value":"|滨海机场(TSN)|TSN|BINHAI|BH|TIANJINBINHAI|TJBH|","is_city":"0"}]},"UVW":{"W":[{"code":"URC","cityCode":"URC","name":"乌鲁木齐(URC)","depCitys":"|SJW|INC|","arrCitys":"|SJW|INC|","cityEnName":"WULUMUQI","en_name":"URUMQI","en_simple_name":null,"search_value":"|乌鲁木齐(URC)|URC|WULUMUQI|WLMQ|","is_city":"1"},{"code":"URC","cityCode":"URC","name":"乌鲁木齐/地窝堡机场(URC)","depCitys":"|SJW|INC|","arrCitys":"|SJW|INC|","cityEnName":"WULUMUQI","en_name":"URUMQI AIRPORT","en_simple_name":"URUMQI","search_value":"|地窝堡机场(URC)|URC|DIWOBAO|DWB|WULUMUQIDIWOBAO|WLMQDWB|","is_city":"0"},{"code":"WNZ","cityCode":"WNZ","name":"温州(WNZ)","depCitys":"|NTG|LYI|SJW|","arrCitys":"|SJW|NTG|LYI|","cityEnName":"WENZHOU","en_name":"WENZHOU","en_simple_name":null,"search_value":"|温州(WNZ)|WNZ|WENZHOU|WZ|","is_city":"1"},{"code":"WNZ","cityCode":"WNZ","name":"温州/龙湾机场(WNZ)","depCitys":"|NTG|LYI|SJW|","arrCitys":"|SJW|NTG|LYI|","cityEnName":"WENZHOU","en_name":"WENZHOU AIRPORT","en_simple_name":"WENZHOU","search_value":"|龙湾机场(WNZ)|WNZ|LONGWAN|LW|WENZHOULONGWAN|WZLW|","is_city":"0"},{"code":"WUA","cityCode":"WUA","name":"乌海(WUA)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"WUHAI","en_name":"WU HAI","en_simple_name":null,"search_value":"|乌海(WUA)|WUA|WUHAI|WH|","is_city":"1"},{"code":"WUA","cityCode":"WUA","name":"乌海/乌海机场(WUA)","depCitys":"|SJW|","arrCitys":"|SJW|","cityEnName":"WUHAI","en_name":"WU HAI AIRPORT","en_simple_name":"WU HAI ","search_value":"|乌海机场(WUA)|WUA|WUHAIJICHANG|WHJC|WUHAIWUHAIJICHANG|WHWHJC|","is_city":"0"},{"code":"UCB","cityCode":"UCB","name":"乌兰察布(UCB)","depCitys":"|SJW|ERL|","arrCitys":"|ERL|SJW|","cityEnName":"WULANCHABU","en_name":"WULANCHABU","en_simple_name":null,"search_value":"|乌兰察布(UCB)|UCB|WULANCHABU|WLCB|","is_city":"1"},{"code":"UCB","cityCode":"UCB","name":"乌兰察布/集宁机场(UCB)","depCitys":"|SJW|ERL|","arrCitys":"|ERL|SJW|","cityEnName":"WULANCHABU","en_name":"WULANCHABU AIRPORT","en_simple_name":null,"search_value":"|集宁机场(UCB)|UCB|JINING|JN|WULANCHABUJINING|WLCBJN|","is_city":"0"}]},"XYZ":{"X":[{"code":"SIN","cityCode":"SIN","name":"新加坡/樟宜机场(SIN)","depCitys":"|HGH|SJW|","arrCitys":"|HGH|SJW|","cityEnName":"XINJIAPO","en_name":"CHANGI AIRPORT","en_simple_name":"CHANGI ","search_value":"|樟宜机场(SIN)|SIN|ZHANGYIJICHANG|ZYJC|XINJIAPOZHANGYIJICHANG|XJPZYJC|","is_city":"0"},{"code":"SIN","cityCode":"SIN","name":"新加坡(SIN)","depCitys":"|HGH|SJW|","arrCitys":"|HGH|SJW|","cityEnName":"XINJIAPO","en_name":"SINGAPORE","en_simple_name":null,"search_value":"|新加坡(SIN)|SIN|XINJIAPO|XJP|","is_city":"1"},{"code":"XMN","cityCode":"XMN","name":"厦门(XMN)","depCitys":"|ZQZ|NKG|SJW|","arrCitys":"|SJW|NKG|ZQZ|","cityEnName":"XIAMEN","en_name":"XIAMEN","en_simple_name":null,"search_value":"|厦门(XMN)|XMN|XIAMEN|XM|","is_city":"1"},{"code":"XMN","cityCode":"XMN","name":"厦门/高崎机场(XMN)","depCitys":"|ZQZ|NKG|SJW|","arrCitys":"|SJW|NKG|ZQZ|","cityEnName":"XIAMEN","en_name":"XIAMEN AIRPORT","en_simple_name":"XIAMEN","search_value":"|高崎机场(XMN)|XMN|GAOQI|GQ|XIAMENGAOQI|XMGQ|","is_city":"0"},{"code":"SIA","cityCode":"SIA","name":"西安(SIA)","depCitys":"|SJW|MIG|KWE|","arrCitys":"|KWE|SJW|MIG|","cityEnName":"XIAN","en_name":"XIAN","en_simple_name":null,"search_value":"|西安(SIA)|SIA|XIAN|XA|","is_city":"1"},{"code":"XIY","cityCode":"SIA","name":"西安/咸阳机场(XIY)","depCitys":"|SJW|MIG|KWE|","arrCitys":"|KWE|SJW|MIG|","cityEnName":"XIAN","en_name":"XIANYANG AIRPORT","en_simple_name":"XIANYANG","search_value":"|咸阳机场(XIY)|XIY|XIANYANG|XY|XIANXIANYANG|XAXY|","is_city":"0"}],"Y":[{"code":"YNZ","cityCode":"YNZ","name":"盐城(YNZ)","depCitys":"|FOC|SJW|","arrCitys":"|FOC|SJW|","cityEnName":"YANCHENG","en_name":"YANCHENG","en_simple_name":null,"search_value":"|盐城(YNZ)|YNZ|YANCHENG|YC|","is_city":"1"},{"code":"YNZ","cityCode":"YNZ","name":"盐城/南洋机场(YNZ)","depCitys":"|FOC|SJW|","arrCitys":"|FOC|SJW|","cityEnName":"YANCHENG","en_name":"YANCHENG AIRPORT","en_simple_name":"YANCHENG ","search_value":"|南洋机场(YNZ)|YNZ|NANYANG|NY|YANCHENGNANYANG|YCNY|","is_city":"0"},{"code":"INC","cityCode":"INC","name":"银川(INC)","depCitys":"|SJW|URC|","arrCitys":"|URC|SJW|","cityEnName":"YINCHUAN","en_name":"YINCHUAN","en_simple_name":null,"search_value":"|银川(INC)|INC|YINCHUAN|YC|","is_city":"1"},{"code":"INC","cityCode":"INC","name":"银川/河东机场(INC)","depCitys":"|SJW|URC|","arrCitys":"|URC|SJW|","cityEnName":"YINCHUAN","en_name":"YINCHUAN AIRPORT","en_simple_name":"YINCHUAN","search_value":"|河东机场(INC)|INC|HEDONG|HD|YINCHUANHEDONG|YCHD|","is_city":"0"}],"Z":[{"code":"ZQZ","cityCode":"ZQZ","name":"张家口(ZQZ)","depCitys":"|SJW|XMN|","arrCitys":"|XMN|SJW|","cityEnName":"ZHANGGUKOU","en_name":"ZHANGJIAKOU","en_simple_name":null,"search_value":"|张家口(ZQZ)|ZQZ|ZHANGGUKOU|ZGK|","is_city":"1"},{"code":"ZQZ","cityCode":"ZQZ","name":"张家口/宁远机场(ZQZ)","depCitys":"|SJW|XMN|","arrCitys":"|XMN|SJW|","cityEnName":"ZHANGGUKOU","en_name":"ZHANGJIAKOU AIRPORT","en_simple_name":"ZHANGJIAKOU","search_value":"|宁远机场(ZQZ)|ZQZ|NINGYUAN|NY|ZHANGGUKOUNINGYUAN|ZGKNY|","is_city":"0"},{"code":"ZHA","cityCode":"ZHA","name":"湛江(ZHA)","depCitys":"|SJW|KHN|","arrCitys":"|KHN|SJW|","cityEnName":"ZHANJIANG","en_name":"ZHANJIANG","en_simple_name":null,"search_value":"|湛江(ZHA)|ZHA|ZHANJIANG|ZJ|","is_city":"1"},{"code":"ZHA","cityCode":"ZHA","name":"湛江/湛江机场(ZHA)","depCitys":"|SJW|KHN|","arrCitys":"|KHN|SJW|","cityEnName":"ZHANJIANG","en_name":"ZHANJIANG AIRPORT","en_simple_name":"ZHANJIANG","search_value":"|湛江机场(ZHA)|ZHA|ZHANJIANG|ZJ|ZHANJIANGZHANJIANG|ZJZJ|","is_city":"0"},{"code":"CGO","cityCode":"CGO","name":"郑州(CGO)","depCitys":"|JJN|DLC|TSN|","arrCitys":"|JJN|TSN|DLC|","cityEnName":"ZHENGZHOU","en_name":"ZHENGZHOU","en_simple_name":null,"search_value":"|郑州(CGO)|CGO|ZHENGZHOU|ZZ|","is_city":"1"},{"code":"CGO","cityCode":"CGO","name":"郑州/新郑机场(CGO)","depCitys":"|JJN|DLC|TSN|","arrCitys":"|JJN|TSN|DLC|","cityEnName":"ZHENGZHOU","en_name":"ZHENGZHOU AIRPORT","en_simple_name":"ZHENGZHOU","search_value":"|新郑机场(CGO)|CGO|XINZHENG|XZ|ZHENGZHOUXINZHENG|ZZXZ|","is_city":"0"},{"code":"ZUH","cityCode":"ZUH","name":"珠海(ZUH)","depCitys":"|FOC|NGB|SJW|","arrCitys":"|NGB|SJW|FOC|","cityEnName":"ZHUHAI","en_name":"ZHUHAI","en_simple_name":null,"search_value":"|珠海(ZUH)|ZUH|ZHUHAI|ZH|","is_city":"1"},{"code":"ZUH","cityCode":"ZUH","name":"珠海/金湾机场(ZUH)","depCitys":"|FOC|NGB|SJW|","arrCitys":"|NGB|SJW|FOC|","cityEnName":"ZHUHAI","en_name":"ZHUHAI AIRPORT","en_simple_name":"ZHUHAI","search_value":"|金湾机场(ZUH)|ZUH|JINWAN|JW|ZHUHAIJINWAN|ZHJW|","is_city":"0"},{"code":"ZYI","cityCode":"ZYI","name":"遵义(ZYI)","depCitys":"|SJW|BAR|","arrCitys":"|BAR|SJW|","cityEnName":"ZUNYI","en_name":"ZUNYI","en_simple_name":null,"search_value":"|遵义(ZYI)|ZYI|ZUNYI|ZY|","is_city":"1"},{"code":"ZYI","cityCode":"ZYI","name":"遵义/新舟机场(ZYI)","depCitys":"|SJW|BAR|","arrCitys":"|BAR|SJW|","cityEnName":"ZUNYI","en_name":"ZUNYI XINZHOU AIRPORT","en_simple_name":"ZUNYI XINZHOU","search_value":"|新舟机场(ZYI)|ZYI|XINZHOU|XZ|ZUNYIXINZHOU|ZYXZ|","is_city":"0"}]}};

Vcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+[^<]*)/;
// 获取三字码
Vcity.getCode = function (id) {
    var cityCode;
    // var reg = /(\w+)/;
    var str = Vcity._m.$('#' + id).value;
    if (!str) {
        return "";
    }
    var reg = /[^()]+/g;
    var values = str.match(reg);
    var city = values[0].split("/");
    var len = city.length;
    if (len > 1) {
        for (var x in Vcity.allCity) {
            if (x != "hot") {
                for (var y in Vcity.allCity[x]) {
                    for (var z = 0; z < Vcity.allCity[x][y].length; z++) {
                        var item = Vcity.allCity[x][y][z];
                        var targetValue = item.name.match(reg);
                        if (city[0] == targetValue[0]) {
                            cityCode = item.code;
                            break;
                        }
                    }
                }
            }
        }
        if (values) {
            return cityCode + "," + values[len - 1];
        }
    } else {
        if (values) {
            return values[values.length - 1];
        }
    }
    return "";
};
// 根据三字码匹配城市名
Vcity.getCity = function (obj,arr) {
	if(!obj){
		return "";
	}
    var target = obj.split(",");
    var len = target.length;
    for (var x in Vcity.allCity) {
        if (x != "hot") {
            for (var y in Vcity.allCity[x]) {
                for (var z = 0; z < Vcity.allCity[x][y].length; z++) {
                    var item = Vcity.allCity[x][y][z];
                    if (item.code == target[len - 1]) {
                        if (len > 1) {
                            if (item.name.split("/").length > 1) {
                                return item.name;
                                break;
                            }
                        } else {
                            if (item.name.split("/").length == 1) {
                                if(arr==1){
                                    return item.name.split("(")[0];
                                }else {
                                    return item.name;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
};
/* *
 * 城市控件构造函数
 * @CitySelector
 * */

Vcity.CitySelector = function () {
    this.initialize.apply(this, arguments);
};

Vcity.CitySelector.prototype = {

    constructor: Vcity.CitySelector,

    /* 初始化 */

    initialize: function (options) {
        var input = options.input;
        this.input = Vcity._m.$('#' + input);
        if(!this.input){
        	return;
        }
        this.select_city_type = options.select_city_type;
        this.search_city_type = options.search_city_type;
        this.dep_id = options.dep_id;
        this.arr_id = options.arr_id;
        this.inputEvent();
    },
    

    screenCity:function(){
    	if(!$){
    		return;
    	}
	  for (var x in Vcity.allCity) {
          if (x != "hot") {
              for (var y in Vcity.allCity[x]) {
                  for (var z = 0; z < Vcity.allCity[x][y].length; z++) {
                    var item = Vcity.allCity[x][y][z];
                    var is_ok=this.isInterworkingCity(item);
                	var box_a=$(this.cityBox).find("a[data-code='"+item.code+"']");
                	box_a.data("select",is_ok);
                	if(is_ok){
                		box_a.attr("title",box_a.html()).css({    
                			"background-color": "",
	                	    "color": "",
	                	    "cursor": ""});
                	}else{
                		box_a.attr("title","暂未开通此航线").css({    
                			"background-color": "#ffffff",
	                	    "color": "#cccccc",
	                	    "cursor": "not-allowed"});
                	}
                  }
              }
          }
      }
    },
    
    isInterworkingCity:function(item){
      	var is_ok=false;
    	if(this.dep_id){
        	var dep_code=Vcity.getCode(this.dep_id).split(",")[0];
        	if(dep_code){
        		if(item.arrCitys.indexOf(dep_code)>=0){
        			is_ok=true;
        		}
        	}else{
    			is_ok=true;
        	}
    	}
//    	else if(this.arr_id){
//        	var arr_code=Vcity.getCode(this.arr_id).split(",")[0];
//        	if(arr_code){
//        		if(item.depCitys.indexOf(arr_code)>=0){
//        			is_ok=true;
//        		}
//        	}else{
//    			is_ok=true;
//        	}
//    	}
    	else{
    		is_ok=true;
    	}
    	return is_ok;
    },

     /* *
     * @createWarp
     * 创建城市BOX HTML 框架
     * */

    createWarp: function () {
        var inputPos = Vcity._m.getPos(this.input);
        var div = this.rootDiv = document.createElement('div');
        var that = this;

        // 设置DIV阻止冒泡
        Vcity._m.on(this.rootDiv, 'click', function (event) {
            Vcity._m.stopPropagation(event);
        });

        // 设置点击文档隐藏弹出的城市选择框
        Vcity._m.on(document, 'click', function (event) {
            event = Vcity._m.getEvent(event);
            var target = Vcity._m.getTarget(event);
            if (target == that.input) return false;
            //console.log(target.className);
            if (that.cityBox)Vcity._m.addClass('hide', that.cityBox);
            if (that.ul)Vcity._m.addClass('hide', that.ul);
            if (that.myIframe)Vcity._m.addClass('hide', that.myIframe);
        });
        div.className = 'citySelector';
        div.style.position = 'absolute';
        div.style.left = inputPos.left + 'px';
        div.style.top = inputPos.bottom + 5 + 'px';
        div.style.zIndex = 999999;

        // 判断是否IE6，如果是IE6需要添加iframe才能遮住SELECT框
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if (isIE6) {
            var myIframe = this.myIframe = document.createElement('iframe');
            myIframe.frameborder = '0';
            myIframe.src = 'about:blank';
            myIframe.style.position = 'absolute';
            myIframe.style.zIndex = '-1';
            this.rootDiv.appendChild(this.myIframe);
        }

        var childdiv = this.cityBox = document.createElement('div');
        childdiv.className = 'cityBox';
        childdiv.id = 'cityBox';
        var childdiv_html = '<p class="tip">直接输入可搜索城市(支持汉字/拼音)</p><ul>';
        for (var i in Vcity.allCity) {
            if (i == "hot") {
                childdiv_html += "<li class='on'>热门城市</li>";
            } else {
                childdiv_html += "<li>" + i + "</li>";
            }
        }
        childdiv_html += '<ul>';
        childdiv.innerHTML = childdiv_html;
        var hotCity = this.hotCity = document.createElement('div');
        hotCity.className = 'hotCity';
        childdiv.appendChild(hotCity);
        div.appendChild(childdiv);
        this.createHotCity();
    },

    /* *
     * @createHotCity
     * TAB下面DIV：hot,a-h,i-p,q-z 分类HTML生成，DOM操作
     * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{},QRSTUVWXYZ:{}}
     **/

    createHotCity: function () {
        var odiv, odl, odt, odd, odda = [], str, key, ckey, sortKey,
            oCity = Vcity.allCity;
        for (key in oCity) {
            odiv = this[key] = document.createElement('div');
            // 先设置全部隐藏hide
            odiv.className = key + ' ' + 'cityTab hide';
            sortKey = [];
            for (ckey in oCity[key]) {
                sortKey.push(ckey);
                // ckey按照ABCDEDG顺序排序
                sortKey.sort();
            }
            for (var j = 0, k = sortKey.length; j < k; j++) {
                odl = document.createElement('dl');
                odt = document.createElement('dt');
                odd = document.createElement('dd');
                odt.innerHTML = sortKey[j] == 'hot' ? '&nbsp;' : sortKey[j];
                odda = [];
                for (var i = 0, n = oCity[key][sortKey[j]].length; i < n; i++) {
                    var item = oCity[key][sortKey[j]][i];
                    if (!this.select_city_type || this.select_city_type == item.is_city) {
                        str = '<a href="javascript:" data-code="'+item.code+'" title="' + item.name + '">' + item.name + '</a>';
                        odda.push(str);
                    }
                }
                odd.innerHTML = odda.join('');
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl);
            }

            // 移除热门城市的隐藏CSS
            Vcity._m.removeClass('hide', this.hot);
            this.hotCity.appendChild(odiv);
        }
        document.body.appendChild(this.rootDiv);
        /* IE6 */
        this.changeIframe();

        this.tabChange();
        this.linkEvent();
    },

    /* *
     *  tab按字母顺序切换
     *  @ tabChaVnge
     * */

    tabChange: function () {
        var lis = Vcity._m.$('li', this.cityBox);
        var divs = Vcity._m.$('div', this.hotCity);
        var that = this;
        for (var i = 0, n = lis.length; i < n; i++) {
            lis[i].index = i;
            lis[i].onclick = function () {
                for (var j = 0; j < n; j++) {
                    Vcity._m.removeClass('on', lis[j]);
                    Vcity._m.addClass('hide', divs[j]);
                }
                Vcity._m.addClass('on', this);
                Vcity._m.removeClass('hide', divs[this.index]);
                /* IE6 改变TAB的时候 改变Iframe 大小*/
                that.changeIframe();
            };
        }
    },

    /* *
     * 城市LINK事件
     *  @linkEvent
     * */

    linkEvent: function () {
        var links = Vcity._m.$('a', this.hotCity);
        var that = this;
        for (var i = 0, n = links.length; i < n; i++) {
            links[i].onclick = function () {
            	if($){
            		if($(this).data("select")==false){
            			return;
            		}
            	}
                that.input.value = this.innerHTML;
                if($){
                	$(that.input).trigger("change");
                	if(that.arr_id){
                		$("#"+that.arr_id).val("").trigger("change");
                	}
                }
                that.ul_click = true;
                that.createUl();
                Vcity._m.addClass('hide', that.ul);
                Vcity._m.addClass('hide', that.cityBox);
                /* 点击城市名的时候隐藏myIframe */
                Vcity._m.addClass('hide', that.myIframe);
                if (that.input.id == "depCitySelecter") {
                    document.getElementById("arrCitySelecter").focus();
                } else if (that.input.id == "arrCitySelecter") {
                    if(document.getElementById("biginTime")!=null){
                        document.getElementById("biginTime").focus();
                    }
                }
            }
        }
    },

    /* *
     * INPUT城市输入框事件
     * @inputEvent
     * */

    inputEvent: function () {
        var that = this;
        Vcity._m.on(this.input, 'focus', function (event) {
            event = event || window.event;
            if (!that.cityBox) {
                that.createWarp();
            } else if (!!that.cityBox && Vcity._m.hasClass('hide', that.cityBox)) {
                // slideul 不存在或者 slideul存在但是是隐藏的时候 两者不能共存
                if (!that.ul || (that.ul && Vcity._m.hasClass('hide', that.ul))) {
                    Vcity._m.removeClass('hide', that.cityBox);
                    /*that.input.value = "";*/
                    /* IE6 移除iframe 的hide 样式 */
                    //alert('click');
                    Vcity._m.removeClass('hide', that.myIframe);
                    that.changeIframe();
                }
            }
        	that.screenCity();
        });
        // Vcity._m.on(this.input,'focus',function(){
        //     that.input.select();
        //     if(that.input.value == '城市名') that.input.value = '';
        // });
        Vcity._m.on(this.input, 'blur', function () {
            // if(that.input.value == '') that.input.value = '城市名';
            setTimeout(function () {
                if (!that.ul_click) {
                    var value = Vcity._m.trim(that.input.value);
                    if (value != ''&&!Vcity.getCode(that.input.id)) {
                        var lis = Vcity._m.$('li', that.ul);
                        if (typeof lis == 'object' && lis['length'] > 0) {
                            var li = lis[0];
                            var bs = li.children;
                            if (bs && bs['length'] > 1) {
                                that.input.value = bs[0].innerHTML;
                            }
                        } else {
                            that.input.value = '';
                        }
                        if($){
                        	$(that.input).trigger("change");
                        }
                    }
                    
                }
                that.ul_click = false;
            }, 200);

        });
        Vcity._m.on(this.input, 'keyup', function (event) {
            event = event || window.event;
            var keycode = event.keyCode;
            Vcity._m.addClass('hide', that.cityBox);
            that.createUl();

            /* 移除iframe 的hide 样式 */
            Vcity._m.removeClass('hide', that.myIframe);

            // 下拉菜单显示的时候捕捉按键事件
            if (that.ul && !Vcity._m.hasClass('hide', that.ul) && !that.isEmpty) {
                that.KeyboardEvent(event, keycode);
            }
        });
    },

    /* *
     * 生成下拉选择列表
     * @ createUl
     * */

    createUl: function () {
        //console.log('createUL');
        var str;
        var value = Vcity._m.trim(this.input.value);
        // 当value不等于空的时候执行
        if (value !== '') {
            var searchResult = [];
            var upper_value = "|" + value.toUpperCase();
            for (var x in Vcity.allCity) {
                if (x != "hot") {
                    for (var y in Vcity.allCity[x]) {
                        for (var z = 0; z < Vcity.allCity[x][y].length; z++) {
                            var item = Vcity.allCity[x][y][z];
                            if (item.search_value.indexOf(upper_value) >= 0 && (!this.search_city_type || this.search_city_type == item.is_city)&&this.isInterworkingCity(item)) {
                                searchResult.push('<li ' + (searchResult.length != 0 ? '' : 'class="on"') + '><b class="cityname">' + item.name + '</b><b class="cityspell">' + item.en_name + '</b></li>');
                            }
                        }
                    }
                }
            }
            this.isEmpty = false;
            // 如果搜索数据为空
            if (searchResult.length == 0) {
                this.isEmpty = true;
                str = '<li class="empty">对不起，没有找到 "<em>' + value + '</em>"</li>';
                searchResult.push(str);
            }
            // 如果slideul不存在则添加ul
            if (!this.ul) {
                var ul = this.ul = document.createElement('ul');
                ul.className = 'cityslide mCustomScrollbar';
                this.rootDiv && this.rootDiv.appendChild(ul);
                // 记录按键次数，方向键
                this.count = 0;
            } else if (this.ul && Vcity._m.hasClass('hide', this.ul)) {
                this.count = 0;
                Vcity._m.removeClass('hide', this.ul);
            }
            this.ul.innerHTML = searchResult.join('');

            /* IE6 */
            this.changeIframe();

            // 绑定Li事件
            this.liEvent();
        } else {
            Vcity._m.addClass('hide', this.ul);
            Vcity._m.removeClass('hide', this.cityBox);

            Vcity._m.removeClass('hide', this.myIframe);

            this.changeIframe();
        }
    },

    /* IE6的改变遮罩SELECT 的 IFRAME尺寸大小 */
    changeIframe: function () {
        if (!this.isIE6)return;
        this.myIframe.style.width = this.rootDiv.offsetWidth + 'px';
        this.myIframe.style.height = this.rootDiv.offsetHeight + 'px';
    },

    /* *
     * 特定键盘事件，上、下、Enter键
     * @ KeyboardEvent
     * */

    KeyboardEvent: function (event, keycode) {
        var lis = Vcity._m.$('li', this.ul);
        var len = lis.length;
        switch (keycode) {
            case 40: //向下箭头↓
                this.count++;
                if (this.count > len - 1) this.count = 0;
                for (var i = 0; i < len; i++) {
                    Vcity._m.removeClass('on', lis[i]);
                }
                Vcity._m.addClass('on', lis[this.count]);
                break;
            case 38: //向上箭头↑
                this.count--;
                if (this.count < 0) this.count = len - 1;
                for (i = 0; i < len; i++) {
                    Vcity._m.removeClass('on', lis[i]);
                }
                Vcity._m.addClass('on', lis[this.count]);
                break;
            case 13: // enter键
                this.input.value = Vcity.regExChiese.exec(lis[this.count].innerHTML)[0];
                this.createUl();
                Vcity._m.addClass('hide', this.ul);
                /* IE6 */
                Vcity._m.addClass('hide', this.myIframe);
                if (this.input.id == "depCitySelecter") {
                    document.getElementById("arrCitySelecter").focus();
                } else if (this.input.id == "arrCitySelecter") {
                    if(document.getElementById("biginTime")!=null){
                        document.getElementById("biginTime").focus();
                    }
                }
                break;
            default:
                break;
        }
    },

    /* *
     * 下拉列表的li事件
     * @ liEvent
     * */

    liEvent: function () {
        var that = this;
        var lis = Vcity._m.$('li', this.ul);
        for (var i = 0, n = lis.length; i < n; i++) {
            Vcity._m.on(lis[i], 'click', function (event) {
                that.ul_click = true;
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                if (target.tagName != "LI") {
                    target = target.parentElement;
                }
                if (target.innerHTML.indexOf("对不起，没有找到") == -1) {
                    that.input.value = Vcity.regExChiese.exec(target.innerHTML)[0];
                    if($){
                    	$(that.input).trigger("change");
                    }
                }
                that.createUl();
                Vcity._m.addClass('hide', that.ul);
                /* IE6 下拉菜单点击事件 */
                Vcity._m.addClass('hide', that.myIframe);
                if (that.input.id == "depCitySelecter") {
                    document.getElementById("arrCitySelecter").focus();
                } else if (that.input.id == "arrCitySelecter") {
                    if(document.getElementById("biginTime")!=null){
                        document.getElementById("biginTime").focus();
                    }
                }
            });
            Vcity._m.on(lis[i], 'mouseover', function (event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.addClass('on', target);
            });
            Vcity._m.on(lis[i], 'mouseout', function (event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.removeClass('on', target);
            })
        }
    }

};