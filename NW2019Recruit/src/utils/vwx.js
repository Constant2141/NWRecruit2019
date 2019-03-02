import axios from 'axios'

let vwx = {};
let jsApiList = ['updateTimelineShareData', 'updateAppMessageShareData'] //分享到朋友圈QQ空间，分享给朋友QQ



function get_url() { //获取当前页面url
    let { href, hash } = location;
    let url = href.replace(hash, '');
    return url;
}

vwx.share = function () {
    let url = get_url();
    // let url = 'http://192.168.0.104/'
    console.log(url);
    axios.get(`/api/config?url=${encodeURIComponent(url)}`).then(obj => {
        let res = obj.data.data;
        // console.log('拿到配置了');
        // console.log(res);
        wx.config({
            debug: false,
            jsApiList: jsApiList,
            ...res
        });
        wx.ready(vwx.resolve);
        // wx.ready(function(){
        //     wx.updateAppMessageShareData({
        //         title: '啊', // 分享标题
        //         desc: '啊', // 分享描述
        //         link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //         imgUrl: '', // 分享图标
        //         success: function () {
        //         }
        //     })
        // })
    })
    .catch(err => {
        console.log('为什么报错');
        console.log(err);
    });
}


vwx.config_ok = new Promise(res => {
    vwx.resolve = res;
});

function getWord(){
    let words = [
        '轻轻地，我们来了。', 
        '$ echo aSBhbSBoZXJlIHdhdGluZyBmb3IgeW91Cgo= | base64 -d # ', 
        'NaN Undefined Null Number Object Boolean Symbol ',
        '记住你无畏青春的样子，你未必出类拔萃，但一定与众不同 ', 
        '"Night\'s " + "Watch" = "Night \'s Watch"',
        '长夜将至，我从今开始守望。今夜如此，夜夜皆然。'
    ].map(e => e + '[正在招新]'); 

    return words[parseInt(Math.random() * words.length)]; 
}

vwx.config_ok.then(config_ok => {
	let obj = {
        title: '2019 Night\'s Watch 招新现场' , // 分享标题
        desc: getWord(), // 分享描述
        link: 'http://wx.zqyy.site/#/', // 分享链接
        imgUrl: 'http://pnqc4vaxj.bkt.clouddn.com/logo.jpg', // 分享图标
        success(){},
        
    }

    wx.updateTimelineShareData(obj);
    wx.updateAppMessageShareData(obj);


});

export default vwx;
