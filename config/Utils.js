/**
 *  author:LISA
 *  底层方法封装
 *  
 * */

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
}



/**
 * 格式验证 返回错误信息，正确返回空字符串
 * type  监测类型
 * value 输入框值
 */

export const chinArk_form = (type, value) => {
    if(type){
        var check = new ChinArk_form(type, value)
        return check._init();
    }
    else return "";
}

function ChinArk_form(check, value) {
    var type = check
    this.option = {
        type: type,
        value: value,
    }
}

ChinArk_form.prototype = {
    _init() {
        var fun = '_check_' + this.option.type;
        var msg = this[fun](this.option)
        return msg
    },

    _check_num(option){
        var str = option.value;
        var msg = "";
        if (typeof str == "undefined" || str == "") {
            msg = "此项不能为空！";
            return msg;
        }
        if (!(/^[0-9][0-9]*$/.test(str))) {
            if (this._get_str_byte(str) > 16) {
                str = str.slice(0, 16) + "...";
            }
            str = "<b>" + str + "</b> ";
            msg = "此项应填零或正整数,并且不能输入空格";
        }
        return msg;
    },

    _get_str_byte: function (str) {
        var bytes = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                bytes += 2;
            } else {
                bytes += 1;
            }
        }
        return bytes;
    },
}



