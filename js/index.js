/**
 * Created by luolinj on 4/7/2015.
 */
$(function () {
    var dataLayer1 = {
        'boxH': '协会活动',
        'boxLink': 'http://luolinjia.com',
        'isMore': true,
        'list': [{
            'link': 'http://baidu.com',
            'title': '祝贺第五届最受关注十大评选颁奖盛典圆满落a啊啊啊',
            'date': '2015-04-08'
        },{
            'link': 'http://baidu.com',
            'title': '转发：浙江省商务厅什么等等我转发：浙江省商务厅什么等等我',
            'date': '2015-04-07'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        }]
    };
    _.renderBox($('.c-layer1-left'), dataLayer1, '0');
    _.renderPicBox($('.c-layer1-right'));

    var dataLayer2 = {
        'boxH': '公告栏',
        'boxLink': 'http://luolinjia.com',
        'isMore': true,
        'list': [{
            'link': 'http://baidu.com',
            'title': '祝贺第五届最受关注十大评选颁奖盛典圆满落a啊啊啊',
            'date': '2015-04-08'
        },{
            'link': 'http://baidu.com',
            'title': '转发：浙江省商务厅什么等等我转发：浙江省商务厅什么等等我',
            'date': '2015-04-07'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        }]
    };
    var dataLayer21 = {
        'boxH': '公告栏',
        'isMore': false,
        'list': [{
            'link': 'http://baidu.com',
            'title': '祝贺第五届最受关注十大评选颁奖盛典圆满落a啊啊啊',
            'date': '2015-04-08'
        },{
            'link': 'http://baidu.com',
            'title': '转发：浙江省商务厅什么等等我转发：浙江省商务厅什么等等我',
            'date': '2015-04-07'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        },{
            'link': 'http://baidu.com',
            'title': '电商先行，法律随后 ——记杭州市电子商务a厅什么等',
            'date': '2015-04-06'
        }]
    };
    _.renderBox($('.c-layer2-left'), dataLayer2, '0');
    _.renderBox($('.c-layer2-center'), dataLayer21, '0');
});

var _ = {
    renderBox: function (self, data, type) {
        var list = [], i = 0, size = data['list'].length;
        for (; i < size; i++) {
            var item = data['list'][i];
            list.push('<li><div class="b-list-content-title"><a href="' + item['link'] + '" target="_self"><span><img src="images/ico.jpg" alt=""/></span>'  + item['title'] + '</a></div><div class="b-list-content-time">' + item['date'] + '</div></li>');
        }

        var dom = '<div class="b-box"><div class="b-header"><span>' + data['boxH'] + '</span>' + (data['isMore'] ? '<a href="' + data['boxLink'] + '" target="_self"><img src="images/more.gif" alt=""/></a>' : '') + '</div><div class="b-list"><div class="b-list-content"><ul>' + list.join('') + '</ul></div></div></div>';
        self.append(dom);
        $('.b-box').css({'width': type === '0' ? '358px' : '485px'});
    },
    renderPostList: function () {

    },
    renderAbout: function () {

    },
    renderPicBox: function (o) {
        o.picScroll({
            size: {'height': '270px', width: '530px'},
            color: 'rgba(221, 221, 221, 0.4)',
            hovercolor: '#C70909',
            time: 2000,
            hasNumber: false
        });
    },
    renderSponsors: function () {

    }
};