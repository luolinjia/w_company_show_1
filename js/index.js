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
    _.renderBox($('.c-layer1-left'), dataLayer1, '358px', 'post');
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
        'content': '杭州市电子商务协会是由杭州市经济信息中心、阿里巴巴（中国）网络技术公司、杭州科希盟科技有限公司、杭州市邮政投递服务公司、浙江华立集团、杭州祐康电子商务网络有限公司六家单位发起，由杭州市从事电子商务研究开发、应用等相关领域的企事业单位和个人自愿结合组成的地方性、联合性、非营利性社团组织，经杭州市民政局批准，2002年7月正式成'
    };
    _.renderBox($('.c-layer2-left'), dataLayer2, '358px', 'post');
    _.renderBox($('.c-layer2-center'), dataLayer21, '358px', 'about');

	var dataLayer4 = {
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
	_.renderBox($('.c-layer4-left'), dataLayer4, '445px', 'post');
	_.renderBox($('.c-layer4-right'), dataLayer4, '445px', 'post');

	var dataLayer3 = {
		'postList': [{
			'link': 'http://luolinjia.com',
			'img': 'images/biaozhi.jpg'
		},{
			'link': 'http://luolinjia.com',
			'img': 'images/biaozhi.jpg'
		},{
			'link': 'http://luolinjia.com',
			'img': 'images/biaozhi.jpg'
		},{
			'link': 'http://luolinjia.com',
			'img': 'images/biaozhi.jpg'
		}]
	};
	_.renderPP($('.c-layer3-list'), dataLayer3);

	var dataLayer5 = {
		'boxH': '友情链接',
		'boxLink': 'http://luolinjia.com',
		'isMore': true,
		'picList': [{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		},{
			'link': 'http://luolinjia.com',
			'logo': 'images/logo/1.jpg'
		}]
	};
	_.renderBox($('.c-layer5-sponsor'), dataLayer5, '100%', 'sponsor');


});

var _ = {
    renderBox: function (self, data, width, flag) {
		var innerDom = '';
		if ('post' === flag) {
			innerDom = _.renderPostList(data).join('');
		} else if ('about' === flag) {
			innerDom = _.renderAbout(data);
		} else if ('sponsor' === flag) {
			innerDom = _.renderSponsors(data).join('');
		}

        var dom = '<div class="b-box"><div class="b-header"><span>' + data['boxH'] + '</span>' + (data['isMore'] ? '<a href="' + data['boxLink'] + '" target="_self"><img src="images/more.gif" alt=""/></a>' : '') + '</div><div class="b-list"><div class="b-list-content">' + innerDom + '</div></div></div>';
        self.append(dom);
        $('.b-box', self).css({'width': width});
    },
    renderPostList: function (data) {
		var list = [], i = 0, size = data['list'].length;
		list.push('<ul>');
		for (; i < size; i++) {
			var item = data['list'][i];
			list.push('<li><div class="b-list-content-title"><a href="' + item['link'] + '" target="_self"><span><img src="images/ico.jpg" alt=""/></span>'  + item['title'] + '</a></div><div class="b-list-content-time">' + item['date'] + '</div></li>');
		}
		list.push('</ul>');
		return list;
    },
    renderAbout: function (data) {
		return '<div class="b-about"><img src="images/biaozhi.jpg" alt=""/>' + data['content'] + '</div>';
    },
    renderPicBox: function (o) {
        o.picScroll({
            size: {'height': '270px', width: '530px'},
            color: '#ddd', //rgba(221, 221, 221, 0.4)
            hovercolor: '#C70909',
            time: 2000,
            hasNumber: false
        });
    },
	renderPP: function (self, data) {
		var list = [], i = 0, size = data['postList'].length;
		for (; i < size; i++) {
			var item = data['postList'][i];
			list.push('<li><a href="' + item['link'] + '" target="_self"><img src="' + item['img'] + '" alt=""/></a></li>');
		}

		var dom = '<ul>' + list.join('') + '</ul>';
		self.append(dom);
	},
    renderSponsors: function (data) {
		var list = [], i = 0, size = data['picList'].length;
		list.push('<ul>');
		for (; i < size; i++) {
			var item = data['picList'][i];
			list.push('<li><a href="' + item['link'] + '"><img src="' + item['logo'] + '" alt=""/></a></li>');
		}
		list.push('</ul>');
		return list;
    }
};