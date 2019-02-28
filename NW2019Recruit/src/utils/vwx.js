import axios from 'axios'

let vwx = {};
let jsApiList = ['updateTimelineShareData', 'updateAppMessageShareData'] //分享到朋友圈QQ空间，分享给朋友QQ

let obj = {
    title: '2019 Night\'s Watch 招新现场' , // 分享标题
    desc: '我是描述', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function(){
    console.log('成功调用微信接口');
    },
}

function get_url() { //获取当前页面url
    let { href, hash } = location;
    let url = href.replace(hash, '');
    return url;
}

vwx.share = function () {
    let url = get_url();
    // let url = 'http://192.168.0.104/'
    console.log(url);
    axios.get(`/api/config?url=${url}`).then(obj => {
        let res = obj.data.data;
        // console.log(res);
        wx.config({
            debug: true,
            jsApiList: jsApiList,
            ...res
        });
        // wx.ready(vwx.resolve);
        wx.ready(function(){
            wx.updateAppMessageShareData({ 
                title: '啊', // 分享标题
                desc: '啊', // 分享描述
                link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                success: function () {
                }
            })
        })
    })
    // axios.post("/api/config",{
    //     url:"http://baidu.com"
    // }).then(res => {
    //     let resobj = res.data.data;
    //     console.log(res);
    //     wx.config({
    //         debug: false,
    //         jsApiList: jsApiList,
    //         ...resobj
    //     });
    //     wx.ready(vwx.resolve);
    // })
    .catch(err => {
        console.log('为什么报错');
        console.log(err);
    });
}


vwx.config_ok = new Promise(res => { 
    vwx.resolve = res; 
});

vwx.config_ok.then(config_ok => {
	let obj = {
        title: '2019 Night\'s Watch 招新现场' , // 分享标题
        desc: "我是描述", // 分享描述
        link: '', // 分享链接
        imgUrl: '', // 分享图标
        success: function(){
        console.log('成功调用微信接口');
        },
    }

    wx.updateTimelineShareData(obj); 
    wx.updateTimelineShareData(obj); 

   
}); 

export default vwx;