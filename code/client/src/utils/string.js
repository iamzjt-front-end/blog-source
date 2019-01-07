import sensitiveWords from '@/config/sensitiveWords'

/**
 * 检查字符串
 * @param {*} str 
 * @param {*} type 
 */
export const checkStr = (str, type) => {
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /^\d{15}|\d{18}$/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number':  //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}

/**
 * 过滤html标签
 * @param {*} str 
 * @param {*} space 
 */
export const filterHTMLTag = (str, space) => {
    str = str.replace(/<\/?[^>]*>/g, '') //去除HTML Tag
    if (space) {
        str = str.replace(/[|]*\n/, '') //去除行尾空格
    }
    str = str.replace(/&npsp;/ig, '') //去掉npsp
    return str
}

/**
 * 验证个人信息
 * @param {*} info 
 */
export const checkpersonalInfo = info => {
    let msg = ''
    if (!info.name) {
        msg = '请输入姓名'
    } else if (!info.msg) {
        msg = '请输入留言信息'
    } else if (info.email && !checkStr(info.email, 'email')) {
        msg = '请输入正确的邮箱'
    } else if (info.qq && !checkStr(info.qq, 'QQ')) {
        msg = '请输入正确的QQ号'
    } else if (info.url && !checkStr(info.url, 'URL')) {
        msg = '请输入正确的Url'
    }
    let word = sensitiveWords.find(word => info.name.indexOf(word) >= 0)
    if (word) {
        msg = `存在非法词：${word}`
    }
    word = sensitiveWords.find(word => info.msg.indexOf(word) >= 0)
    if (word) {
        msg = `存在非法词：${word}`
    }
    return msg
}