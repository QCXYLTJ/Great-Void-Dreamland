import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('character', function (lib, game, ui, get, ai, _status) {
	const QQQ = {
		name: '太虚幻境',
		connect: true,
		character: {
			//魔改魁拔之战+超时空密探
			//魁拔之战
			txhj_kbmanjijx: ["male", "qun", 25, ['Kuiba_kuiqu', 'Kuiba_juli', 'Kuiba_Kuiba'], []],
			txhj_kbmanji: ["male", "qun", 8, ['Kuiba_kuiti', 'Kuiba_bachong', 'Kuiba_qiheng', 'txhouyuankb'], []],
			txhj_lingxunjun: ["male", "qun", 5, ['Kuiba_lingshan', 'Kuiba_lingxun'], []],
			txhj_lingzhanjun: ["male", "qun", 5, ['Kuiba_lingshan', 'Kuiba_lingzhan'], []],
			txhj_jingxin: ["female", "qun", 12, ['Kuiba_tianshen', 'Kuiba_guangshi', 'Kuiba_guangmie'], []],
			txhj_shenghujun: ["male", "qun", 5, ['Kuiba_shengmeng', 'Kuiba_shenghu'], []],
			txhj_shengdoujun: ["male", "qun", 5, ['Kuiba_shengmeng', 'Kuiba_shengdou'], []],
			txhj_kalaxiaokepanjx: ["male", "qun", 8, ['Kuiba_wangjian', 'Kuiba_tianyi', 'Kuiba_zhuandui', 'Kuiba_tianbian'], []],
			txhj_kalaxiaokepan: ["male", "qun", 8, ['Kuiba_wangjian', 'Kuiba_tianyi', 'Kuiba_zhuandui'], []],
			txhj_shengzhujun: ["male", "qun", 5, ['Kuiba_shengmeng', 'Kuiba_shengzhu'], []],
			txhj_shengjiejun: ["male", "qun", 5, ['Kuiba_shengmeng', 'Kuiba_shengjie'], []],
			txhj_haiwenxiangjx: ["female", "qun", 10, ['Kuiba_linyao', 'Kuiba_jinghong', 'Kuiba_wenjia', 'Kuiba_huanguang'], []],
			txhj_haiwenxiang: ["female", "qun", 8, ['Kuiba_linyao', 'Kuiba_jinghong', 'Kuiba_wenjia'], []],
			txhj_youmikuangjx: ["male", "qun", 10, ['Kuiba_wuyao', 'Kuiba_sanjian', 'Kuiba_baizhan', 'Kuiba_yiyou'], []],
			txhj_lingluanjun: ["male", "qun", 5, ['Kuiba_lingshan', 'Kuiba_lingluan'], []],
			txhj_lingshoujun: ["male", "qun", 5, ['Kuiba_lingshan', 'Kuiba_lingshou'], []],
			txhj_youmikuang: ["male", "qun", 8, ['Kuiba_wuyao', 'Kuiba_sanjian', 'Kuiba_baizhan'], []],
			//副本pve驱鬼逐邪
			txhj_yanluowang: ["male", "qun", 15, ['boss_tiemianhong', 'boss_difua', 'boss_zhennub', 'boss_xingpan', 'boss_dianwei', 'boss_xuanpan'], []],
			txhj_guiwang: ["male", "qun", 26, ['boss_jizhou1', 'boss_danshi', 'boss_tiemianhong1', 'boss_chihu'], []],
			txhj_yusai: ["female", "qun", 12, ['boss_guixi', 'boss_anchao', 'boss_guimeic'], []],
			txhj_huangfeng: ["male", "qun", 7, ['boss_duzhen', 'boss_mingchong', 'boss_guimeib'], []],
			txhj_niaozui: ["male", "qun", 10, ['boss_bingyi', 'boss_suoxue', 'boss_guimeib'], []],
			txhj_baowei: ["male", "qun", 9, ['boss_yinsha', 'boss_eli', 'boss_guimeib'], []],
			txhj_heibaiwuchang: ["male", "qun", 10, ['boss_xixinga', 'boss_taipinga', 'boss_mizuia', 'boss_qiangzhenga'], []],
			txhj_niutoumamian: ["male", "qun", 10, ['boss_xiaoshoua', 'boss_manji', 'boss_shiyv', 'boss_guizhao'], []],
			txhj_riyeyoushen: ["male", "qun", 10, ['boss_zhoucha', 'boss_yezhong', 'boss_huiyun', 'boss_duane'], []],
			txhj_mengpo: ["female", "qun", 12, ['boss_aotang', 'boss_yunjv', 'boss_guimeic'], []],
			//超时空密探
			txhj_wuliuqi: ["male", "qun", 10, ['mitan_shenghu', 'mitan_feijian', 'mitan_yirong', 'mitan_qingsuo', 'mitan_xuefa'], []],
			txhj_mitan: ["male", "qun", 4, ['mitan_zhibi', 'twjiange'], []],
			txhj_meihuashisan: ["female", "qun", 8, ['mitan_lingshou', 'mitan_meibiao', 'mitan_biandao', 'mitan_yingyue', 'mitan_huti'], []],
			txhj_skwannian: ["female", "qun", 4, ['zhenge', 'xinghan'], []],
			txhj_skcaopi: ["male", "qun", 4, ['rexingshang', 'fangzhu'], []],
			//副本PVE系列关卡扩增
			/*仲夜观星+神武再世*/
			/*龙舟争渡+天书乱斗*/
			txhj_yougu: ["male", "qun", 26, ['yougu_ousheng', 'yougu_yougu'], []],
			txhj_zuogu: ["male", "qun", 26, ['zuogu_jisheng', 'zuogu_zuogu'], []],
			txhj_taoshen: ["male", "qun", 18, ['taoshen_nutao', 'mashu', 'taoshen_xiongzi', 'longdan', 'wushuang', 'taoshen_paoxiao'], []],
			txhj_lzcaoe: ["female", "qun", 15, ['caoe_shoujiang', 'mashu', 'luoshen', 'reguose', 'rebiyue', 'jizhi', 'txhouyuanlz'], []],
			/*小姐姐队友*/
			txhj_xiahouzie: ["female", "qun", '3/4', ['refanghun', 'twxuechang', 'wengua', 'dcwuyuan'], []],
			txhj_xiahoulan: ["female", "qun", 4, ['txqingshu', 'txchihun', 'tianyin'], []],
			txhj_zhangwei: ["female", "qun", 4, ['mashu', 'zmquezhan', 'nsxuezhu', 'quji'], []],
			/*捉鬼驱邪+十殿阎罗+山海志异NPC*/
			txhj_sunwukong: ["male", "qun", 5, ['dcjinjing', 'dccibei', 'dcruyi'], []],
			txhj_longwang: ["male", "qun", 4, ['dclonggong', 'dcsitian'], []],
			txhj_yeshiwen: ["female", "wu", 5, ['clbjisu', 'clbshuiyong'], []],
			txhj_sunyang: ["male", "wu", 5, ['clbshuijian', 'clbshuiyong'], []],
			txhj_xuanwuzhenshen: ["male", "qun", 5, ['txxiongqu', 'txhj_luolei', 'txleili', 'txminbao', 'dualside'], []],
			txhj_zhuquezhenshen: ["female", "qun", 5, ['txxiongqu', 'txhj_guihuo', 'txfengxing', 'txhj_beiming', 'dualside'], []],
			txhj_zhuquefaxiang: ["female", "qun", 4, ['txxiongqu', 'txhj_guihuo', 'dualside'], ["dualside:txhj_zhuquezhenshen"]],
			txhj_xuanwufaxiang: ["male", "qun", 4, ['txxiongqu', 'txhj_luolei', 'dualside'], ["dualside:txhj_xuanwuzhenshen"]],
			txhj_dahu: ["female", "qun", 5, ['weijing', 'txwuyou2', 'txxiongqu', 'txhj_daiyuan', 'mashu'], []],
			txhj_taotie: ["male", "qun", 12, ['yingjian', 'kuanggu', 'txhouyuan0', 'dualside'], []],
			txhj_zhuyin: ["male", "qun", 13, ['rezhiyi', 'txxiongshou'], []],
			txhj_qiliny: ["male", "qun", "3/6", ['txhj_daiyuan', 'qianju'], []],
			txhj_hundun: ["male", "qun", 11, ['txhj_guihuo', 'txxiongshou', 'dualside'], ["dualside:txhj_taotie"]],
			/*虎牢关之战*/
			'txhj_bosslvbu3': ["male", "shen", 4, ['wushuang', 'txshenqu', 'txjiwu'], []],
			'txhj_guanyu1': ["male", "qun", 5, ['new_rewusheng', 'new_yijue', 'buyi'], []],
			'txhj_rezhangfei1': ["male", "qun", 5, ['new_repaoxiao', 'twxuhe', 'oltishen'], []],
			'txhj_bosslvbu2': ["male", "shen", 4, ['mashu', 'wushuang', 'txxiuluo', 'txshenwei', 'shenji', 'txhouyuan9'], []],
			'txhj_bosslvbu1': ["male", "shen", 8, ['mashu', 'wushuang', 'txjingjia', 'txaozhan', 'dualside'], ["dualside:txhj_bosslvbu2"]],
			/*抚琴益州-非新杀PVE*/
			txhj_liuzhang: ["male", "qun", 14, ['txanzhan', 'xinfu_tushe', 'xiusheng', 'yinlang', 'dcjiexing', 'tx_danshu', 'txmazhan'], []],
			txhj_lihui: ["male", "qun", 5, ['dddqiaoduan', 'dddqice', 'dddlianer'], []],
			txhj_liuba: ["male", "qun", 5, ['olzhubi', 'tongduo', 'dcliuzhuan'], []],
			txhj_qinmi: ["male", "qun", 5, ['jianzheng', 'zhuandui', 'tianbian'], []],
			txhj_huangquan: ["male", "qun", 5, ['dcquanjian', 'dctujue', 'xinfu_dianhu', 'xinfu_jianji'], []],
			txhj_yzzhangfei: ["male", "shu", 6, ['new_repaoxiao', 'retishen', 'dahe'], []],
			txhj_leitong: ["male", "qun", 7, ['kuiji', 'sbzhaxiang', 'sbzhichi'], []],
			txhj_wulan: ["male", "qun", 7, ['wlcuorui', 'choulve', 'yixiang'], []],
			txhj_yanyan: ["male", "qun", 10, ['nzry_juzhan', 'paoxiao', 'llqshenwei', 'yongjue', 'sbjieyue'], []],
			txhj_wangfu: ["male", "qun", 7, ['drlt_zhengu', 'danlao', 'yuxu', 'spmengjin'], []],
			txhj_xujing: ["male", "qun", 7, ['twboming', 'twejian', 'dcshangyu', 'dccaixia'], []],
			txhj_liuxun: ["male", "qun", 7, ['naman', 'sijian', 'yongsi', 'oldxiemu'], []],
			txhj_pangtongy: ["male", "shu", 4, ['xinlianhuan', 'niepan'], []],
			txhj_zhangren: ["male", "qun", 12, ['chuanyun', 'chuanxin', 'txlipo', 'zlhuji', 'yongjue', 'fenghuo_chongfeng'], []],
			txhj_zhouqun: ["male", "qun", 8, ['txnangce', 'oldfuman', 'tiansuan', 'olchenshuo', 'txfuchen'], []],
			txhj_huanweibing: ["male", "qun", 5, ['txlianji', 'jie', 'txshouyi'], []],
			txhj_feiguan: ["male", "qun", 6, ['cuijian', 'rekuanshi', 'refuyuan', 'yusui'], []],
			txhj_liyan: ["male", "qun", 6, ['rewenji', 'dcduliang', 'fulin', 'xinzhan'], []],
			txhj_lingbao: ["male", "qun", 6, ['xinxingluan', 'qingjiao', 'dczhongjie', 'gongao'], []],
			txhj_dengxian: ["male", "qun", 6, ['xinfu_kannan', 'miaoxian', 'dcpeiqi', 'hengjiang'], []],
			txhj_wuyi: ["male", "qun", 7, ['xinbenxi', 'txhj_oldhuxiao', 'xinpojun', 'zhiyu'], []],
			txhj_liugui: ["male", "qun", 6, ['guying', 'zhangming', 'xuancun'], []],
			txhj_skzhangyi: ["male", "qun", 5, ['rezhiyi', 'fenwei'], []],
			txhj_spchengji: ["male", "qun", 5, ['txqishi', 'txhj_xixing', 'lvbuwei_qihuo', 'keji'], []],
			txhj_pangxi: ["male", "qun", 5, ['cxyFanGong', 'txkaikang', 'txshixin', 'txhj_wangzu'], []],
			txhj_gaopei: ["male", "qun", 5, ['qingguo', 'xiongsuan', 'zongshi', 'dcqinshen'], []],
			txhj_yanghuai: ["male", "qun", 4, ['yizhong', 'dcxieshou', 'dckanji', 'smyyingshi'], []],
			txhj_mengda: ["male", "qun", 5, ['yilie', 'xiandeng', 'qiuan', 'liangfan'], []],
			txhj_yizhoushitu: ["male", "qun", 3, ['xinfu_qianxin', 'gongxin'], []],
			txhj_pengyang: ["male", "qun", 3, ['pytongling', 'spdaming', 'spxiaoni'], []],
			txhj_zhangsong: ["male", "qun", 3, ['qiangzhi', 'rexiantu', 'liechi'], []],
			txhj_fazheng: ["male", "qun", 3, ['reenyuan', 'refankui', 'rexuanhuo'], []],
			txhj_weiwuchangdaobing: ["male", "qun", 3, ['danlao', 'wanwei', 'txjizhen'], []],
			//海外卧龙出山部分NPC(暂时并入<轮回之境>赛季混合)
			txhj_hujinding: ["female", "qun", 7, ['renshi', 'wuyuan', 'huaizi', 'miaojian', 'rebiyue'], []],
			txhj_moguanyu: ["male", "qun", 9, ['mashu', 'new_rewusheng', 'new_yijue', 'nuzhan'], []],
			txhj_mowolongzg: ["male", "qun", 15, ['tx_lianyu', 'releiji', 'txhj_qiangduo'], []],
			txhj_wlhuangyueying: ["female", "qun", 8, ['zhenlue', 'reqicai', 'jizhi'], []],
			txhj_friendwolong: ["male", "shu", 6, ['bazhen', 'xinfu_pdgyingshi'], []],
			txhj_mozhaoyun: ["male", "qun", 12, ['jintao', 'mashu', 'longdan', 'chongzhen'], []],
			txhj_xinyebaiqizhang: ["male", "qun", 7, ['mashu', 'relieren', 'txfengxing'], []],
			txhj_moliubei: ["male", "qun", 10, ['mashu', 'twjianming', 'twjiange'], []],
			txhj_wlganfuren: ["female", "qun", 8, ['fengji', 'xinfu_shangjian', 'new_shushen'], []],
			txhj_wlmifuren: ["female", "qun", 8, ['liangzhu', 'zhenlie', 'zaiqi', 'twjuezhu'], []],
			txhj_liaohua: ["male", "qun", 8, ['yangjie', 'rexianzhen', 'yingzi', 'redangxian'], []],
			txhj_xinyebingyong: ["male", "qun", 6, ['txhj_baoji', 'txfengxing'], []],
			txhj_mozhangfei: ["male", "qun", 9, ['twxuhe', 'mashu', 'new_repaoxiao'], []],
			txhj_xiahoushi: ["female", "qun", 7, ['shenxian', 'sbqiaoshi', 'sbyanyu'], []],
			txhj_mcyanwen: ["male", "qun", 6, ['reshuangxiong'], []],
			txhj_mcgaolan: ["male", "qun", 6, ['spjungong', 'spdengli'], []],
			txhj_xingzhanghe: ["male", "qun", 6, ['twzhilve'], []],
			txhj_wlzhoucang: ["male", "qun", 6, ['xinniluan', 'zhuhai', 'zhongyong'], []],
			txhj_wlguanping: ["male", "qun", 6, ['jianzheng', 'tuifeng', 'mingzhe', 'longyin'], []],
			txhj_liufeng: ["male", "qun", 8, ['xuanfeng', 'refankui', 'kaikang', 'xiansi'], []],
			txhj_chendao: ["male", "qun", 8, ['twmoukui', 'rezhiyi', 'duanliang'], []],
			txhj_jianyong: ["male", "qun", 4, ['tianbian', 'xinqiaoshui'], []],
			txhj_sunqian: ["male", "qun", 4, ['shuimeng', 'nzry_jianxiang'], []],
			txhj_txyiji: ["male", "qun", 4, ['xinfu_jiyuan', 'ziyuan'], []],
			txhj_mizhu: ["male", "qun", 4, ['jugu', 'twyujue'], []],
			txhj_zhugejun: ["male", "qun", 4, ['twgyshenxing', 'hongde'], []],
			txhj_huangchengyan: ["male", "qun", 4, ['sheyan', 'linglong'], []],
			/*魔改国服-长板桥之战*/
			txhj_vcaocao: ["male", "wei", 26, ['anyong', 'new_rejianxiong', 'zhichi', 'refanjian'], []],
			txhj_vzhangliao: ["male", "wei", 12, ['txhj_suoming', 'txhj_xixing', 'xinfu_gongqing'], []],
			txhj_cbqpingmin: ["male", "shu", "3/3/1", ['txsiwu', 'txcbwuyou'], []],
			txhj_cbqzhangfei: ["male", "shu", 6, ['txhj_zhennu', 'wuyuan'], []],
			txhj_xiahouyuan: ["male", "wei", 24, ['duliang', 'jijiu', 'zhuhai'], []],
			txhj_vyuejin: ["male", "wei", 18, ['rezhiheng', 'reshuangxiong', 'txhj_qiangzheng'], []],
			txhj_tuhaojiading: ["male", "qun", 6, ['retiaoxin'], []],
			txhj_cbqzhaoyun: ["male", "shu", 6, ['relonghun'], []],
			txhj_cbxiahouen: ["male", "wei", "18/18/12", ['spjungong', 'xinfu_zuilun'], []],
			txhj_cbganfuren: ["female", "shu", 6, ['txsiwu', 'txcbwuyou'], []],
			txhj_vwenpin: ["male", "wei", 23, ['tuifeng', 'rezhenxing', 'xiaoxi_hansui'], []],
			txhj_vcaoren: ["male", "wei", 15, ['fenghuo_zhendu', 'spxianchou', 'txjizhen'], []],
			txhj_vcaohong: ["male", "wei", 21, ['txchengyuan', 'lianying', 'jiyu'], []],
			txhj_caojuntieqi: ["male", "wei", 4, ['shanxie', 'retieji'], []],
			txhj_caojunjingqi: ["male", "wei", 3, ['clbjisu', 'nzry_feijun'], []],
			txhj_vxuchu: ["male", "wei", 15, ['new_reluoyi', 'jiuchi', 'spwenji'], []],
			txhj_wolongzg: ["male", "shu", 6, ['zglkongcheng', 'txhj_guihuo'], []],
			txhj_cbyujin: ["male", "wei", "9/9/9", ['nzry_chenglve', 'rejieyue', 'txqishi', 'zyqiao'], []],
			txhj_cbxiahoudun: ["male", "wei", 20, ['ganglie', 'reyaowu', 'yuanhu'], []],
			txhj_vhubaoqi: ["male", "wei", 4, ['txhj_beiming', 'nzry_feijun'], []],
			txhj_cbqcaoren: ["male", "wei", 12, ['chengzhao', 'qirang', 'wangxi'], []],
			txhj_caojunxiaoqi: ["male", "wei", 5, ['spqishe', 'retieji', 'wushuang'], []],
			/*官渡之战-海外魔改半成品*/
			//(大部分技能瞎凑缝合非官方原本,只是略有接近,凑合着玩吧)
			txhj_moyanwen: ["male", "qun", "8/8/3", ['txdiyjuezhan', 'txyongzhan', 'nsguanyong', 'txyanming', 'txhj_xianxi', 'xinfu_langxi', 'txshatun'], []],
			txhj_gdsishi: ["male", "qun", 6, ['twwanwei', 'twxuewei'], []],
			txhj_moyuanshao: ["male", "qun", 8, [/*低配版延命*/'txyanming', 'reluanji', 'txmingmen', 'txxuejian'], []],
			txhj_gdjushou: ["male", "qun", 6, ['huilei', 'reganglie', 'jianying', 'mingce'], []],
			txhj_mojushou: ["male", "qun", 10, ['rejieming', 'guzheng', 'txzhongzuo', 'paoxiao', 'txqishi'], []],
			txhj_xunchen: ["male", "qun", 6, ['twmouzhi', 'twweipo'], []],
			txhj_tianfeng: ["male", "qun", 6, ['twgongsun', 'jianzheng'], []],
			txhj_yuantan: ["male", "qun", 6, ['luanwu', 'xinniluan', 'yingjian', 'fenghuo_zhendu'], []],
			txhj_xinpi: ["male", "qun", 4, ['liuli', 'spyinju'], []],
			txhj_moshenpei: ["male", "qun", 8, ['buqu', 'txfenlu', 'txduwu', 'duanbing', 'rehengjiang'], []],
			txhj_shenpei: ["male", "qun", 7, ['zhuide', 'hongde', 'xinenyuan'], []],
			txhj_moguotufengji: ["male", "qun", 9, ['zhaohan', 'txhj_qingzhongx', 'zhaxiang', 'txjipo'], []],
			txhj_liangcao: ["male", "qun", 17, ['olranshang', 'txjianjia', 'txliangwu', 'txsiwu'], []],
			txhj_gdchunyuqiong: ["male", "qun", 8, ['qiaoyan', 'txjiuchi', 'new_reluoyi', 'txpodi'], []],
			txhj_qingzhoujingrui: ["male", "qun", 5, ['txpodi', 'bubing_changbing'], []],
			txhj_zhanghe: ["male", "qun", 6, ['qizhi', 'twjianming', 'qiangwu'], []],
			txhj_gaolan: ["male", "qun", 6, ['lirang', 'spdengli', 'spjungong'], []],
			txhj_cuiyan: ["male", "qun", 4, ['shelie', 'yingyuan', 'spzundi'], []],
			txhj_chenlin: ["male", "qun", 4, ['xiashu', 'bifa', 'reguicai'], []],
			txhj_gdliubei: ["male", "qun", 4, ['xinjujian', 'rerende'], []],
			txhj_wenchou: ["male", "qun", 5, ['txchoudou', 'zhuiji', 'xinliegong'], []],
			txhj_yanliang: ["male", "qun", 5, ['txyongzhan', 'nsguanyong', 'zhanjue', 'txhj_xianxi'], []],
			txhj_yuanxi: ["male", "qun", 5, ['txfengxing', 'nsshengyan', 'nsdaizhan', 'nslongyue'], []],
			txhj_lvkuanglvxiang: ["male", "qun", 4, ['liehou', 'qigong', 'wanlan'], []],
			txhj_hanmeng: ["male", "qun", 4, ['jieliang', 'quanjiu', 'minijinjiu'], []],
			txhj_xinping: ["male", "qun", 3, ['fuyuan', 'zhongjie', 'yongdi'], []],
			txhj_yanjinweibing: ["male", "qun", 3, ['txpodi'], []],
			/*千里走单骑*/
			//(部分魔改整合效仿于新杀十周年的千里走单骑内容)
			txhj_nuxianghoudun: ["male", "wei", 18, ['qianli_xunwen', 'fenghuo_fuzhe', 'fenghuo_chongfeng', 'txhj_suzhi', 'zylongdan', 'txhj_guiji'], []],
			txhj_caiyang: ["male", "wei", 10, ['zhuixi', 'dcxunji', 'dcjiaofeng', 'qinbao'], []],
			txhj_mache: ["double", "qun", 8, ['txmazhan', 'jianyan', 'new_reqingnang'], []],
			txhj_qinqi: ["male", "wei", 25, ['xinfu_yisuan', 'txzhangshi', 'txfengling', 'shenduan', 'qianli_hengjiang'], []],
			txhj_yinhubiaoqi: ["male", "wei", 4, ['gzjinfa', 'olguangao', 'txyingyang'], []],
			txhj_hubany: ["male", "qun", 5, ['fenghuo_zhongyong', 'txzhuyi'], []],
			txhj_huban: ["male", "wei", 9, ['fenghuo_zhongyong', 'danji_jiashu'], []],
			txhj_wangzhi: ["male", "wei", 18, ['danji_huoji', 'qianli_zonghuo', 'danji_jiayi', 'haoshi'], []],
			txhj_pujingheshang: ["male", "qun", 6, ['danji_fencha', 'yuanlve'], []],
			txhj_daofushou: ["male", "wei", 6, ['danji_cangbi', 'txshouyi', 'moukui'], []],
			txhj_bianxi: ["male", "wei", 12, ['danji_choudao', 'danji_jiayan', 'qianli_chuixi', 'dunxi'], []],
			txhj_dqhanfu: ["male", "wei", 9, ['qianli_xili', 'danji_anjian', 'qianli_wangong', 'shelie'], []],
			txhj_mengtan: ["male", "wei", 8, ['qianli_xili', 'danji_xianfeng', 'qianli_yangbai', 'wangzun'], []],
			txhj_caojunyongshi: ["male", "wei", 4, ['old_zuilun', 'xinjiefan', 'satomi_luodao'], []],
			txhj_dqmifuren: ["female", "qun", 4, ['dcguixiu', 'dccunsi', 'qingyu'], []],
			txhj_dqganfuren: ["female", "qun", 4, ['dcchanjuan', 'dcshushen', 'dcshenzhi'], []],
			txhj_kongxiu: ["male", "wei", 9, ['youyan', 'danji_shili', 'qianli_tingqiang', 'yjmangji'], []],
			txhj_caojunweibing: ["male", "wei", 4, ['reshejian', 'youdi'], []],
			/*原创迷城NPC*/
			txhj_mcfanchou: ["male", "qun", 4, ['twxingluan'], []],
			txhj_mczhangji: ["male", "qun", 4, ['xinfu_lveming', 'xinfu_tunjun'], []],
			txhj_mcguosi: ["male", "qun", 4, ['xinfu_tanbei', 'xinfu_sidao'], []],
			txhj_mclijue: ["male", "qun", "4/6", ['xinfu_langxi', 'xinfu_yisuan'], []],
			txhj_sppangtong: ["male", "qun", 3, ['xinmanjuan', 'zuixiang'], []],
			txhj_wupangtong: ["male", "wu", 3, ['xinfu_guolun', 'xinfu_songsang'], []],
			txhj_repangtong: ["male", "shu", 3, ['xinlianhuan', 'niepan'], []],
			txhj_shenzhugeliang: ["male", "shen", 3, ['qixing', 'kuangfeng', 'dawu'], []],
			txhj_spzhugeliang: ["male", "shu", 3, ['bazhen', 'rehuoji', 'rekanpo'], []],
			txhj_zhugejin: ["male", "wu", 3, ['huanshi', 'hongyuan', 'mingzhe'], []],
			txhj_mcxiahoujie: ["male", "wei", 5, ['liedan', 'zhuangdan'], []],
			txhj_mcxiahoushang: ["male", "wei", 4, ['twtanfeng'], []],
			txhj_mcxiahouen: ["male", "wei", 5, ['twfujian', 'twjianwei'], []],
			txhj_mczhuzhi: ["male", "wu", 4, ['sbanguo'], []],
			txhj_zhuran: ["male", "wu", 4, ['mobiledanshou'], []],
			txhj_zhuhuan: ["male", "wu", 4, ['fenli', 'xinpingkou'], []],
			txhj_zdyuanshu: ["male", "qun", 4, ['drlt_yongsi', 'ysweidi'], []],
			txhj_reyuanshu: ["male", "qun", 4, ['xinyongsi', 'yjixi'], []],
			txhj_mcyuanshu: ["male", "qun", 4, ['rewangzun', 'retongji'], []],
			txhj_mcqcaocao: ["male", "qun", 4, ['twlingfa'], []],
			//苟卡官方迷城NPC补充		
			txhj_zhugezhan: ["male", "shu", 3, ['xinfu_zuilun', 'xinfu_fuyin'], []],
			txhj_shencaocao: ["male", "shen", 3, ['new_guixin', 'feiying'], []],
			txhj_recaocao: ["male", "wei", 4, ['new_rejianxiong', 'rehujia'], []],
			txhj_sunru: ["female", "wu", 3, ['yingjian', 'shixin'], []],
			txhj_sunluyu: ["female", "wu", 3, ['new_meibu', 'new_mumu'], []],
			txhj_sunluban: ["female", "wu", 3, ['xinzenhui', 'xinjiaojin'], []],
			txhj_zhenji: ["female", "wei", 3, ['luoshen', 'qingguo'], []],
			txhj_caopi: ["male", "wei", 3, ['xingshang', 'fangzhu', 'jcpsongwei'], []],
			txhj_caozhi: ["male", "wei", 3, ['luoying', 'jiushi'], []],
			/*国服-赤壁之战*/
			//(赤壁曹操有两版技能,另一版是武圣+咆哮,此魔改赛季只能采用另外一版较为难打的永动机神著+谋溃)
			txhj_cbcaocao: ["male", "wei", 25, ['shenzhu', 'moukui'], []],
			txhj_cbxuchu: ["male", "wei", 12, ['kaikang', 'mjmouzhi'], []],
			txhj_chengyu: ["male", "wei", 8, ['shefu', 'heji'], []],
			txhj_caojunshizhang: ["male", "wei", 4, ['miji', 'cuorui'], []],
			txhj_xiahoudun: ["male", "wei", 10, ['ganglie', 'txxiebi'], []],
			txhj_lidian: ["male", "wei", 12, ['new_reqingnang', 'rejianxiong', 'hongyan'], []],
			txhj_yuejin: ["male", "wei", 15, ['xiaoguo', 'spxianchou'], []],
			txhj_zhangliaox: ["male", "wei", 14, ['txzhennu', 'txlianbi'], []],
			txhj_wenpin: ["male", "wei", 22, ['lingce', 'dinghan', 'txlianbi'], []],
			txhj_maojie: ["male", "wei", 18, ['reluoshen', 'paoxiao'], []],
			txhj_cbhandang: ["male", "wu", 7, ['lihuo', 'new_repaoxiao'], []],
			txhj_cbhuanggai: ["male", "wu", 25, ['rekurou', 'zhaxiang'], []],
			txhj_caochuan: ["male", "wu", 8, ['txcbwuyou', 'huilei'], []],
			txhj_xuhuang: ["male", "wei", 12, ['luanji', 'tx_mojian'], []],
			txhj_cbzhangliao: ["male", "wei", 12, ['luanji', 'tx_mojian'], []],
			txhj_tiejiajingrui: ["male", "wei", 4, ['qianju', 'daoji'], []],
			txhj_jianggan: ["male", "wei", 7, ['spdaoshu'], []],
			txhj_xunshaoduizhang: ["male", "wu", 15, ['longyin', 'lianying'], []],
			txhj_tiejiachangjibing: ["male", "wei", 4, ['retiaoxin'], []],
			txhj_caimao: ["male", "wei", 18, ['sbliegong', 'tianyin', 'rezhiheng'], []],
			txhj_caojungongbing: ["male", "wei", 3, ['liegong'], []],
			txhj_cbcaohong: ["male", "wei", 20, ['qiangxi', 'kunfen', 'chouhai'], []],
			txhj_huwei: ["male", "wei", 4, ['zhuiji', 'txmanjia'], []],
			txhj_caojunqiangbing: ["male", "wei", 4, ['qiangwu'], []],
			txhj_buzhi: ["male", "wu", 6, ['spyajun', 'bifa', 'txhouyuana'], []],
			txhj_yufan: ["male", "wu", 6, ['lieren', 'xinjiangchi'], []],
			txhj_wolongzhugeliang: ["male", "shu", 5, ['huoji', 'bazhen', 'kanpo'], []],
			txhj_cbzhangzhao: ["male", "wu", 6, ['reqiaoshui', 'retiaoxin', 'txhouyuanb'], []],
			txhj_xuezong: ["male", "wu", 6, ['weijing', 'mizhao'], []],
			txhj_caojuncike: ["male", "wei", 4, ['zhidao', 'qiangxi'], []],
			txhj_wuwei: ["male", "wei", 3, ['fankui'], []],
			txhj_wujunmitan: ["male", "wu", 4, ['lianzhu', 'xinjuece'], []],
			txhj_wujunshibing: ["male", "wu", 3, ['shifei', 'tiaoxin'], []],
			txhj_cikejingrui: ["male", "wei", 7, ['zhanjue', 'lianying'], []],
			txhj_caojunmitan: ["male", "wei", 4, ['xiantu'], []],
			txhj_caojunxiaojiang: ["male", "wei", 5, ['yiyong', 'weijing'], []],
			txhj_caojunshibing: ["male", "wei", 3, ['rejinjiu'], []],
			txhj_caojunduwei: ["male", "wei", 4, ['rejiangchi', 'yingzi'], []],
			txhj_wujungongbing: ["male", "wu", 3, ['liegong', 'tx_modao'], []],
			txhj_caojunxiaowei: ["male", "wei", 4, ['spyanjiao', 'rezhenxing'], []],
			//魔改合纵抗秦
			txhj_xinjunshibing: ["male", "qun", 1, ['mashu', 'txxinli'], []],
			txhj_zywangmang: ["male", "qun", 42, ['mashu', 'spjianqu', 'txxinchao', 'txxinli'], []],
			txhj_zyliuxiu: ["male", "qun", 5, ['jigong', 'xinjuece', 'yechou'], []],
			txhj_yingzheng: ["male", "daqin", 8, ['yingzheng_yitong', 'yingzheng_shihuang', 'txkqzulong', 'yingzheng_fenshu', 'tieji'], []],
			txhj_zhaogao: ["male", "daqin", 5, ['zhaogao_zhilu', 'zhaogao_gaizhao', 'zhaogao_haizhong', 'zhaogao_aili'], []],
			txhj_mengtian: ["male", "daqin", 5, ['kengo_weishang', 'yui_lieyin'], []],
			txhj_wangjian: ["male", "daqin", 6, ['misa_yehuo', 'rin_baoqiu'], []],
			txhj_llwangkuang: ["male", "qun", 4, ['spdifei', 'spzundi', 'spdengli', 'juliao'], []],
			txhj_cmfanchou: ["male", "qun", '4/5', ['twyangming', 'twyulong', 'fengliang'], []],
			txhj_zhaoji: ["female", "daqin", 5, ['zhaoji_shanwu', 'zhaoji_daqi', 'zhaoji_xianji', 'zhaoji_huoluan'], []],
			txhj_qinjunnushou: ["male", "daqin", 3, ['txshangnu', 'bazhen'], []],
			txhj_lvbuwei: ["male", "daqin", 5, ['lvbuwei_jugu', 'lvbuwei_qihuo', 'lvbuwei_chunqiu', 'lvbuwei_baixiang'], []],
			txhj_xiangyu: ["male", "qun", 4, ['wushuang', 'txhunpofu', 'txhongmen'], []],
			txhj_liubang: ["male", "han", 4, ['zhiheng', 'txrenwang', 'txshiwei'], []],
			txhj_longyufei: ["female", "qun", 4, ['txlongyi', 'zhenjue'], []],
			txhj_qinjunqibing: ["male", "daqin", 4, ['qibing_changjian', 'qibing_liangju'], []],
			txhj_baiqi: ["male", "daqin", 6, ['baiqi_wuan', 'baiqi_shashen', 'baiqi_fachu', 'baiqi_changsheng'], []],
			txhj_shiwei: ["male", "qun", 4, ['kaikang', 'qljsuiren'], []],
			txhj_miyue: ["female", "daqin", 5, ['miyue_zhangzheng', 'miyue_taihou', 'miyue_youmie', 'miyue_yintui'], []],
			txhj_wuguang: ["male", "qun", 4, ['twzhenxi', 'twcongji'], []],
			txhj_chensheng: ["male", "qun", 4, ['retuxi', 'mengjin'], []],
			txhj_kqzhangyi: ["male", "daqin", 5, ['zhangyi_lianheng', 'zhangyi_xichu', 'zhangyi_xiongbian', 'zhangyi_qiaoshe'], []],
			txhj_mengjiangnv: ["female", "qun", 3, ['txshuzhen', 'qieting'], []],
			txhj_shangyang: ["male", "daqin", 6, ['shangyang_bianfa', 'shangyang_limu', 'shangyang_kencao', 'yingzi'], []],
			txhj_qinjunbubing: ["male", "daqin", 4, ['bubing_fangzhen', 'bubing_changbing'], []],
			txhj_qinjunshizu: ["male", "daqin", 3, ['zhuixi'], []],
			txhj_qinjunhuwei: ["male", "daqin", 3, ['refuyuan'], []],
			txhj_shinv: ["female", "qun", 3, ['meibu'], []],
			txhj_yijibaoxiang: ["male", "qun", 3, ['tongji'], []],
			//十常侍之乱	
			txhj_shaodiliubian: ["male", "qun", 4, ['txshiyuan', 'tianming', 'zhuide'], []],
			txhj_scszhangrang: ["male", "qun", 10, ['taoluan', 'scstaoluan', 'txhj_huangmen', 'reqiuyuan', 'zhangrang_yankong', 'Neihuan_jiquan'], []],
			txhj_duangui: ["male", "qun", 4, ['scschihe', 'redangxian', 'neihuan_chibi'], []],
			txhj_fengxu: ["male", "qun", 4, ['Neihuan_huanshi', 'neihuan_leixi', 'neihuan_huangjie'], []],
			txhj_chengkuang: ["male", "qun", 4, ['Neihuan_huanshi', 'neihuan_andu', 'Neihuan_biri'], []],
			txhj_wangkuang: ["male", "qun", 4, ['txyuanwei', 'txfuji'], []],
			txhj_huanguantanzi: ["male", "qun", 4, ['twgongxin', 'guying'], []],
			txhj_guosheng: ["male", "qun", 6, ['scsniqu', 'txmazhan', 'neihuan_heimu', 'Neihuan_niluan', 'xinzhan'], []],
			txhj_yuanshuy: ["male", "qun", 4, ['quhu', 'rewangzun', 'drlt_yongsi'], []],
			txhj_zuofeng: ["male", "qun", 4, ['fenghuo_suohui', 'txhuolu'], []],
			txhj_scszhaozhong: ["male", "qun", 7, ['scschiyan', 'txhj_huangmen', 'huangkong', 'funan', 'twmouli', 'twyangshi'], []],
			txhj_sunzhang: ["male", "qun", 6, ['scszimou', 'mia_fengfa', 'satomi_luodao', 'nao_wanxin'], []],
			txhj_houlan: ["male", "qun", 4, ['Neihuan_huanshi', 'Neihuan_jingshe'], []],
			txhj_huanguanshicongx: ["male", "qun", 3, ['txlianji', 'txlinwei', 'txbingren'], []],
			txhj_huanguanshicong: ["male", "qun", 3, ['Neihuan_huanshi', 'txzhulian'], []],
			txhj_xiachangshi: ["male", "qun", 4, ['twluanlve', 'twejian', 'dingfa'], []],
			txhj_hankui: ["male", "qun", 6, ['scsxiaolu', 'mingzhe', 'mjkuanji', 'txhj_huangmen', 'twsaotao'], []],
			txhj_jianshuox: ["male", "qun", 8, ['yinbing', 'quji', 'twkunsi', 'zhuhai', 'yifa'], []],
			txhj_xiayun: ["male", "qun", 6, ['scsyaozhuo', 'rangjie', 'jsrgbahu', 'jsrgzhiheng', 'cxyJiaoXia'], []],
			txhj_lisong: ["male", "qun", 5, ['scskuiji', 'spyinzhi', 'vtbyanli', 'zymingshi'], []],
			txhj_bilan: ["male", "qun", 4, ['scspicai', 'chouce', 'dulie'], []],
			txhj_dongtaihoux: ["female", "qun", 4, ['wengua', 'qiangxi', 'xinfu_zhanji', 'fenji', 'xinfu_fujian'], []],
			txhj_dongzhong: ["male", "qun", 4, ['taixu_linglu', 'olfeibai', 'olqiejian', 'olyinji'], []],
			txhj_gaowang: ["male", "qun", 5, ['scsanruo', 'scsmiaoyu', 'lisi', 'xinfu_jiyuan'], []],
			txhj_songdian: ["male", "qun", 5, ['manjuan', 'yjdumou', 'yjrenwang'], []],
			txhj_scszhanggong: ["male", "qun", 4, ['nskuishe', 'sphuangen', 'zhuixi'], []],
			txhj_scscaojie: ["male", "qun", 6, ['twharvestinori', 'txningming', 'shouxi'], []],
			txhj_scshuanguan: ["male", "qun", 3, ['spwenji'], []],
			txhj_huanguanjianshi: ["male", "qun", 4, ['txhj_huangmen', 'twjiange'], []],
			txhj_huanguandaofu: ["male", "qun", 4, ['txhj_huangmen', 'kuangfu'], []],
			/*分隔线——*/
			//迷城幻境扩充NPC
			txhj_shenliubei: ["male", "shen", 6, ['nzry_longnu', 'nzry_jieying'], []],
			txhj_jspliubei: ["male", "qun", 4, ['jsprende', 'jsrgzhenqiao'], []],
			txhj_sphuaman: ["female", "shu", 4, ['spxiangzhen', 'spfangzong', 'spxizhan'], []],
			txhj_rezhurong: ["female", "shu", 4, ['juxiang', 'relieren'], []],
			txhj_remenghuo: ["male", "shu", 4, ['huoshou', 'rezaiqi'], []],
			txhj_zhangliang: ["male", "qun", 4, ['xinfu_jijun', 'xinfu_fangtong'], []],
			txhj_zhangbao: ["male", "qun", 3, ['rezhoufu', 'reyingbing'], []],//QQQ
			txhj_rezhangjiao: ["male", "qun", 4, ['releiji', 'guidao', 'jzjhuangtian'], []],
			txhj_rehuanggai: ["male", "wu", 4, ['rekurou', 'zhaxiang'], []],
			txhj_rechengpu: ["male", "wu", 4, ['twlihuo', 'twchunlao'], []],
			txhj_rehandang: ["male", "wu", 4, ['twgongji', 'twjiefan'], []],
			txhj_reliubei: ["male", "shu", 4, ['rerende', 'jlbjijiang'], []],
			txhj_spzhaoyun: ["male", "qun", 3, ['longdan', 'chongzhen'], []],
			txhj_shenzhaoyun: ["male", "shen", 3, ['xinjuejing', 'relonghun'], []],
			txhj_rezhaoyun: ["male", "shu", 4, ['longdan', 'new_yajiao'], []],
			txhj_reganning: ["male", "wu", 4, ['qixi', 'fenwei'], []],
			txhj_shenguanyu: ["male", "shen", 4, ['twwushen', 'twwuhun'], []],
			txhj_spguanyu: ["male", "wei", 4, ['new_rewusheng', 'danji'], []],
			txhj_caifuren: ["female", "qun", 3, ['xinqieting', 'xianzhou'], []],
			txhj_liubiao: ["male", "qun", 4, ['zishou', 'rezongshi'], []],
			txhj_liuqi: ["male", "qun", 3, ['spwenji', 'sptunjiang'], []],
			//此为魔改版的霸王征程,非官方版,请勿拿来作为官版参考.
			/*霸王征程-魔改*/
			txhj_zhoutai: ["male", "wu", 4, ['buqu', 'new_fenji', 'kuanshi'], []],
			txhj_dingfeng: ["male", "wu", 4, ['reduanbing', 'yinghun', 'relianying'], []],
			txhj_wumazhong: ["male", "wu", 4, ['xinanjian', 'refenxun'], []],
			txhj_panzhang: ["male", "wu", 4, ['xinduodao', 'jianchu'], []],
			txhj_wujungongjianshou: ["male", "wu", 3, ['olzhuiji'], []],
			txhj_heqi: ["male", "qun", 4, ['reqizhou', 'reshanxi', 'reganlu', 'rongbei'], []],
			txhj_lingcao: ["male", "qun", 4, ['twqueshi', 'dujin', 'tianshu', 'yongjin'], []],
			txhj_zhuzhi: ["male", "qun", 5, ['xinanguo'], []],
			txhj_mosunce: ["male", "qun", 12, ['rehunzi', 'txjiang', 'txbenji', 'txyongguan'], []],
			txhj_mouzhouyu: ["male", "qun", 12, ['refanjian', 'manji', 'reyingzi', 'txyongguan'], []],
			txhj_motaishici: ["male", "qun", 11, ['zhuandui', 'twjianming', 'tianyi', 'nsfeixiong', 'txyonglve'], []],
			txhj_redaqiao: ["female", "wu", 3, ['reguose', 'liuli'], []],
			txhj_moxiaoqiao: ["female", "qun", 8, ['manji', 'xinhongyan', 'retianxiang', 'dcnutao'], []],
			txhj_suweihuqiqq: ["male", "qun", 3, ['txayhanji'], []],
			txhj_suweihuqiay: ["male", "qun", 4, ['txayhanji', 'fulin'], []],
			txhj_rexiaoqiao: ["female", "wu", 3, ['xinhongyan', 'retianxiang', 'piaoling'], []],
			txhj_modaqiao: ["female", "qun", 9, ['twhuangjin', 'tiandu', 'tx_dqtianzi'], []],
			txhj_handang: ["male", "qun", 4, ['txayboji', 'txayhanji', 'twjiefan'], []],
			txhj_jiangqing: ["male", "qun", 4, ['txayboji', 'txayhanji', 'twxiangyu'], []],
			txhj_rezhouyu: ["male", "wu", 3, ['reyingzi', 'refanjian'], []],
			txhj_chengpu: ["male", "qun", 4, ['twjianming', 'chunlao'], []],
			txhj_huanggai: ["male", "qun", 4, ['kurou', 'zhaxiang'], []],
			txhj_chenwu: ["male", "qun", 4, ['twfenming', 'fenming', 'rexianzhen'], []],
			txhj_dongxi: ["male", "qun", 4, ['twyilie', 'txayhanji'], []],
			txhj_lvfan: ["male", "qun", 4, ['rebeige', 'diancai'], []],
			txhj_lvmeng: ["male", "qun", 4, ['twxuanhuo', 'txkeji', 'txmouduan'], []],
			txhj_zhangzhao: ["male", "qun", 4, ['twqirang', 'guzheng', 'drlt_qianjie'], []],
			txhj_zhanghong: ["male", "qun", 4, ['txyinli', 'zhiman', 'rezhijian'], []],
			/*七擒孟获-实为七杀孟获*/
			'txhj_menghuo7': ["male", "qun", 16, ['tuifeng', 'reluoyi', 'rechouhai', 'txhj_baolian', 'rezaiqi'], []],
			txhj_zhurongx: ["female", "qun", 6, ['txhj_guihuo', 'wurong', 'lieren', 'txbaoji'], []],
			txhj_wutugu: ["male", "qun", 21, ['txchengyuan', 'sbliegong', 'txmanjia', 'rezhiheng'], []],
			'txhj_menghuo6': ["male", "qun", 3, ['spxiangzhen', 'rezaiqi', 'dualside'], []],
			txhj_muludawang: ["male", "qun", 10, ['txzhennu', 'tx_yushou', 'spxiangzhen', 'dualside'], ["dualside:txhj_menghuo6"]],
			txhj_zhurong: ["female", "qun", 15, ['txhj_guihuo', 'wurong', 'lieren', 'rezaiqi'], []],
			txhj_gousheng: ["male", "shu", 12, ['txleizhou', 'rejianxiong', 'retuxi'], []],
			'txhj_menghuo5': ["male", "qun", 15, ['shanxie', 'reqiangxi', 'xinfu_qinguo', 'qingxi', 'reduodao', 'rezaiqi'], []],
			txhj_manzuzhanxiang: ["male", "qun", 3, ['juxiang', 'xiaoguo', 'mobilejingce'], []],
			txhj_manzuzhanxiangx: ["male", "qun", 4, ['txjuxiang', 'xiaoguo'], []],
			'txhj_menghuo4': ["male", "qun", 16, ['reshuangxiong', 'rejizhi', 'jiang', 'rezaiqi'], []],
			'txhj_menghuo3': ["male", "qun", 13, ['zhichi', 'redangxian', 'xiandeng', 'rezaiqi'], []],
			txhj_mengyou: ["male", "qun", 7, ['fangquan', 'xiangle'], []],
			txhj_manzucike: ["male", "qun", 4, ['yiyong', 'zhidao'], []],
			'txhj_menghuo2': ["male", "qun", 5, ['txxiebi', 'sbyangwei', 'redangxian', 'rezaiqi', 'dualside'], []],
			txhj_mangyachang: ["male", "qun", 9, ['spchijie', 'yingjian', 'rezhiyi', 'dualside'], ["dualside:txhj_menghuo2"]],
			txhj_tengjiabing: ["male", "qun", 4, ['txmanjia', 'spwenji'], []],
			txhj_manzuhuwei: ["male", "qun", 3, ['rezhenxing'], []],
			'txhj_menghuo1': ["male", "qun", 14, ['yiyong', 'shanxie', 'retieji', 'rezaiqi'], []],
			txhj_manzushoushi: ["male", "qun", 4, ['txmanzhen', 'aocai'], []],
			txhj_zhaoyuny: ["male", "qun", 6, ['longdan'], []],
			txhj_jinhuansanjie: ["male", "qun", 10, ['jiezi', 'txleili', 'duanliang', 'fuji'], []],
			txhj_manzuxianfengx: ["male", "qun", 3, ['kuangfu'], []],
			txhj_manzuxianfeng: ["male", "qun", 3, ['redangxian'], []],
			txhj_manzuyongshi: ["male", "qun", 4, ['qiangwu'], []],
			txhj_manzushibing: ["male", "qun", 4, ['retiaoxin'], []],
			txhj_manding: ["male", "qun", 4, ['ganglie', 'drlt_qianjie'], []],
			txhj_manzutanzi: ["male", "qun", 4, ['txdaoji'], []],
			txhj_mangu: ["female", "qun", 3, ['retuxi'], []],
			txhj_ehuan: ["male", "qun", 7, ['jiaozi', 'reyingzi', 'spwenji'], []],
			txhj_manzujishi: ["male", "qun", 4, ['lianzhu', 'xinjuece'], []],
			txhj_manzuzhuangding: ["male", "qun", 4, ['zhongyong'], []],
			txhj_nanzhongjingrui: ["male", "qun", 4, ['new_yijue', 'yingzi'], []],
			/*李郭之乱*/
			txhj_nianshou: ["male", "qun", 10, ['ranshang', 'txnianrui', 'txmengtai', 'txshouyi', 'txrenxing'], []],
			txhj_huanjingdoushi: ["male", "qun", 4, ['yingjian', 'qiaomeng', 'zhuandui'], []],
			txhj_elangx: ["male", "qun", 5, ['xinkuanggu', 'txyicheng'], []],
			txhj_panjunshizu: ["male", "qun", 3, ['anjian', 'fenxun'], []],
			txhj_panjunzhenchabing: ["male", "qun", 2, ['gongxin', 'refuyuan'], []],
			txhj_fennudeyezhu: ["male", "qun", 4, ['jili', 'roulin', 'yxs_fanji'], []],
			txhj_molijue: ["male", "qun", "17/21/2", ['txlangxi', 'txkuangyi', 'ljxuechi', 'zhiheng', 'qianglue', 'dddqiaoduan'], []],
			txhj_feixiongjingrui: ["male", "qun", 4, ['cxyRuiQi', 'cxyJingQi', 'spmingshi'], []],
			txhj_handiliuxie: ["male", "qun", "2/3", ['tianming', 'sphuangen', 'txhj_daiyuan'], []],
			txhj_duanwei: ["male", "qun", 3, ['langmie', 'txhj_wangzu'], []],
			txhj_kuangcaijun: ["male", "qun", 4, ['txdaoxi', 'zhuixi'], []],
			txhj_moguosi: ["male", "qun", 18, ['txtanbei', 'xinfu_sidao', 'satomi_luodao', 'chajue', 'dddjiexing', 'kyou_zhidian'], []],
			txhj_wuxi: ["male", "qun", 3, ['cihuai', 'dahe'], []],
			txhj_situwangyun: ["male", "qun", 3, ['xinfu_zengdao', 'relianji', 'zymoucheng', 'txhj_daiyuan'], []],
			txhj_jiawenhe: ["male", "qun", 7, ['rewansha', 'reweimu', 'reluanwu', 'yjzhenlve', 'yjjianshu', 'nsyice'], []],
			txhj_dushi: ["male", "qun", 3, ['rejuece', 'jueqing'], []],
			txhj_baolveqi: ["male", "qun", 4, ['dcmoukui', 'cxy_BaoYing'], []],
			txhj_longxiangqi: ["male", "qun", 4, ['longyin', 'huilei'], []],
			txhj_tdsunjian: ["male", "qun", 5, ['cxyYingHun', 'cxyPoLu', 'kuanshi'], []],
			txhj_jianghuaxiong: ["male", "qun", 15, ['cxyYaoWu', 'cxyMoJun', 'cxyMoQu', 'sbyangwei', 'shizhan'], []],
			txhj_longxiangjun: ["male", "qun", 4, ['hgkurou', 'dcshushen'], []],
			txhj_mozhangji: ["male", "qun", 10, ['cxyJieLve', 'cxyMoJun', 'txlveming', 'gdsanchen', 'nslulve'], []],
			txhj_matengy: ["male", "qun", 3, ['twxiongzheng', 'xiongyi', 'mashu'], []],
			txhj_hubenjun: ["male", "qun", 4, ['oldfuman', 'txhuao'], []],
			txhj_fanchou: ["male", "qun", 8, ['xinfu_xingluan', 'cxyFanGong', 'cxyMoJun', 'nsyangwu'], []],
			txhj_wangfang: ["male", "qun", 4, ['twkujian', 'twshengxi', 'yechou'], []],
			txhj_limeng: ["male", "qun", 5, ['spyishi', 'guanzong', 'gnsheque', 'dddfenji'], []],
			txhj_huchier: ["male", "qun", 3, ['liuli', 'quhu'], []],
			txhj_niufu: ["male", "qun", '6/7', ['twjuntun', 'twxiongxi', 'dcxiaoxi'], []],
			txhj_fengyaojun: ["female", "qun", 3, ['cxyFengYing'], []],
			txhj_dongxie: ["female", "qun", '4/5', ['cxyJiaoXia', 'cxyTunJun', 'jiaojie'], []],
			txhj_dongmin: ["male", "qun", 5, ['dclbjiuxian', 'tuifeng', 'tieji'], []],
			txhj_dongbai: ["female", "qun", 4, ['lianzhu', 'xiahui', 'jsrgshichong'], []],
			txhj_huangfusongy: ["male", "qun", 3, ['xinfenyue', 'gongxin', 'feiying'], []],
			txhj_feixiongjunyou: ["male", "qun", 4, ['cxyRuiQi'], []],
			txhj_feixiongjunzuo: ["male", "qun", 4, ['cxyJingQi'], []],
			txhj_xurongy: ["male", "qun", "2/5", ['xinfu_xionghuo', 'xinfu_shajue', 'txhj_daiyuan'], []],
			txhj_huzheny: ["male", "qun", 2, ['roulin', 'twxiongjun'], []],
			txhj_jianglijue: ["male", "qun", 5, ['cxyYangWu', 'cxyMoJun', 'nsfeixiong'], []],
			txhj_baolvejun: ["male", "qun", 3, ['xiadao', 'cxy_BaoYing'], []],
			txhj_dongyue: ["male", "qun", 6, ['cxyKuangXi', 'cxyMoJun', 'jiuchi'], []],
			txhj_xiaoweijunx: ["male", "qun", 4, ['kaikang'], []],
			txhj_jinweijunx: ["male", "qun", 4, ['longdan'], []],
			/*黄巾之乱-国服*/
			txhj_hjzhujun: ["male", "qun", 7, ['youdi', 'dangxian', 'shizhi'], []],
			txhj_huangjinzhangyan: ["male", "qun", '7/7/1', ['txfeiyan', 'lixia', 'txmazhan', 'xiaoxi_hansui', 'txhuangfu'], []],
			txhj_hanjiangsunjian: ["male", "qun", 9, ['jiang', 'tiaoxin', 'shizhi'], []],
			txhj_huangfusongxx: ["male", "qun", '6/6/2', ['mjmouzhi', 'spdengli', 'shizhi'], []],
			txhj_huangjinyuzhong: ["male", "qun", 3, ['txlianbi'], []],
			txhj_digongzhangbaox: ["male", "qun", '25/25/7', ['nzry_jieying', 'nzry_longnu', 'rexingshang', 'rezhenxing'], []],
			txhj_huangfusongx: ["male", "qun", 6, ['hongde', 'shenxing', 'bingyi', 'feiying'], []],
			txhj_digongzhangbao: ["male", "qun", 18, ['tx_moyany', 'spshiji', 'zhuikong', 'luoshen', 'txhj_luolei'], []],
			txhj_gaosheng: ["male", "qun", 14, ['txxiebi', 'tx_modao', 'rexianzhen', 'wushen'], []],
			txhj_rengongzhangliang: ["male", "qun", 18, ['huoji', 'rejizhi', 'mjmouzhi', 'rewurong'], []],
			txhj_tiangongzhangjiaox: ["male", "qun", 16, ['buqu', 'releiji', 'longdan', 'chongzhen'], []],
			txhj_buji: ["male", "qun", '15/15/3', ['jiaozi', 'kuangfu', 'tx_modao', 'zhiheng'], []],
			txhj_zhangmancheng: ["male", "qun", 15, ['redangxian', 'jiang', 'rejunxing', 'shibei'], []],
			txhj_bossbocai: ["male", "qun", '12/12/2', ['ranshang', 'fankui', 'qiangxi', 'moukui'], []],
			txhj_huangjinqianfengx: ["male", "qun", 4, ['wushuang', 'anguo'], []],
			txhj_huangjinjingrui: ["male", "qun", 3, ['twhuangjin', 'txhuangfu'], []],
			txhj_huangjinyushix: ["male", "qun", 3, ['txhj_guimen', 'txleizhen'], []],
			txhj_huangjinshizu: ["male", "qun", 3, ['qiangwu', 'shixin'], []],
			txhj_huangjinqibing: ["male", "qun", 3, ['reluoyi'], []],
			txhj_huangjintongling: ["male", "qun", 4, ['reluoyi', 'nzry_feijun'], []],
			txhj_bossdengmao: ["male", "qun", 30, ['rezhiyi', 'jianchu', 'benghuai'], []],
			txhj_huangjinfujiang: ["male", "qun", 4, ['rejiangchi', 'xinfu_sidao'], []],
			txhj_huangjinyaoshushi: ["male", "qun", 4, ['rezhenxing', 'txleizhen'], []],
			txhj_huangjinyudang: ["male", "qun", 3, ['xinduodao'], []],
			txhj_hanjunluzhix: ["male", "qun", 4, ['qiaoshui', 'qixi'], []],
			txhj_peiyuanshaox: ["male", "qun", 6, ['rezhijian', 'tianyi'], []],
			txhj_tiangongzhangjiao: ["male", "qun", 6, ['txhj_luolei', 'yingzi', 'txleili'], []],
			txhj_huangjinqianfeng: ["male", "qun", 3, ['wushuang', 'xinfu_qinguo'], []],
			txhj_huangjinxiaobing: ["male", "qun", 3, ['rejinjiu'], []],
			txhj_huangjindaobing: ["male", "qun", 3, ['relieren'], []],
			txhj_hanjunluzhi: ["male", "qun", 3, ['qiaoshui', 'retuxi', 'weimu'], []],
			/*轮回之境*/
			txhj_tianyu: ["male", "qun", 4, ['reyingzi', 'taixu_zhulian', 'twyangshi'], []],
			txhj_tiankai: ["male", "qun", 4, ['reyingzi', 'taixu_zhulian', 'wangxi'], []],
			txhj_bingzhoulangqi: ["male", "qun", 3, ['twxiongjun', 'mashu'], []],
			txhj_mayunlu: ["female", "shu", 4, ['mashu', 'twfengpo'], []],
			txhj_machao: ["male", "shu", 4, ['mashu', 'retieji'], []],
			txhj_madai: ["male", "shu", 4, ['mashu', 'twqianxi'], []],
			txhj_mamidi: ["male", "qun", '3/7', ['txhj_daiyuan', 'lirang'], []],
			txhj_leibo: ["male", "qun", 7, ['yingjian', 'cuijin', 'new_reyaowu'], []],
			txhj_cike: ["male", "qun", 3, ['zhuhai', 'shangyi'], []],
			txhj_xianyufu: ["male", "qun", 10, ['xinkuangfu', 'qiaomeng', 'txmazhan'], []],
			txhj_jyyuanshao: ["male", "qun", 9, ['zhanyi', 'zhiyi', 'weifeng'], []],
			txhj_bossquyi: ["male", "qun", 15, ['jiaozi', 'fuqi', 'txqyyouji', 'jsrgzhenqiao'], []],
			txhj_beimihu: ["female", "qun", '15/17', ['zongkui', 'guju', 'bmcanshi', 'xinfu_lingren', 'twxuechang'], []],
			txhj_nansheme: ["male", "qun", 4, ['waishi', 'renshe', 'twyingjia'], []],
			txhj_kaisa: ["male", "qun", 5, ['zhengfu', 'yiyong', 'tongduo'], []],
			txhj_bianjiangweishi: ["male", "qun", 4, ['jianchu', 'txmazhan'], []],
			txhj_resunjian: ["male", "wu", '3/4', ['gzyinghun', 'wulie', 'repolu'], []],
			txhj_zhangzi: ["male", "qun", 8, ['xinjiewei', 'xinfu_limu', 'xinjushou'], []],
			txhj_spdiaochan: ["female", "qun", 3, ['lihun', 'rebiyue'], []],
			txhj_relvbu: ["male", "qun", 4, ['wushuang', 'liyu'], []],
			txhj_sunquan: ["male", "wu", 4, ['zhiheng', 'kuanshi'], []],
			txhj_xganning: ["male", "qun", 4, ['gnjinfan', 'gnsheque'], []],
			txhj_sufei: ["male", "qun", 4, ['zhengjian', 'gaoyuan'], []],
			txhj_caocaox: ["male", "qun", '5/8', ['xinjuejing', 'dujin', 'txhj_daiyuan'], []],
			txhj_caohong: ["male", "qun", 4, ['kaikang', 'twyuanhu', 'twliancai'], []],
			txhj_niufudongxie: ["double", "qun", 7, ['twjuntun', 'twxiongxi', 'twxiafeng'], []],
			txhj_caobao: ["male", "qun", 5, ['shibei', 'kuangfu', 'reyingzi'], []],
			txhj_rezhangfei: ["male", "shu", 4, ['new_repaoxiao', 'twxuhe'], []],
			txhj_gongsunyue: ["male", "qun", 6, ['twqianju', 'bihuo', 'zhuiyi'], []],
			txhj_gongsunxv: ["male", "qun", 6, ['jijiu', 'bihuo', 'zhuide'], []],
			txhj_songxian: ["male", "qun", 5, ['txhj_oldhuxiao', 'txhj_wangzu'], []],
			txhj_mozhangliao: ["male", "qun", 7, ['zhuhai', 'twjiange', 'weifeng'], []],
			txhj_gongsunfan: ["male", "qun", 7, ['spqishe', 'twqianju'], []],
			txhj_yuanshaoyou: ["male", "qun", 3, ['reluanji', 'txhj_daiyuan', 'wangzun'], []],
			txhj_fuwan: ["male", "qun", 4, ['twmoukui'], []],
			txhj_liuxie: ["male", "qun", 3, ['tianming', 'mizhao'], []],
			txhj_lingju: ["female", "qun", 3, ['jieyuan', 'txshixin'], []],
			txhj_guanping: ["male", "shu", 4, ['relongyin', 'jiezhong'], []],
			txhj_zhoucang: ["male", "shu", 4, ['mobilezhongyong'], []],
			txhj_guanyu: ["male", "shu", 4, ['new_rewusheng', 'new_yijue'], []],
			txhj_shenganningx: ["male", "shen", '3/6', ['drlt_poxi', 'drlt_jieying'], []],
			txhj_xusheng: ["male", "wu", 4, ['repojun'], []],
			txhj_hubaoqi: ["male", "qun", 2, ['qingxi', 'fenxun'], []],
			txhj_sunguan: ["male", "qun", '4/6', ['nsxianhai', 'twjiange', 'jsrgbahu'], []],
			txhj_zangba: ["male", "wei", 2, ['twhanyu', 'twhengjiang'], []],
			txhj_houcheng: ["male", "qun", 4, ['xinniluan', 'sbyingzi'], []],
			txhj_xurong: ["male", "qun", 20, ['xinfu_xionghuo', 'xinfu_shajue', 'twxiongjun'], []],
			txhj_zumao: ["male", "qun", 5, ['yinbing', 'juedi', 'txhj_wangzu'], []],
			txhj_sunjian: ["male", "qun", '4/7', ['gzyinghun', 'txhj_daiyuan'], []],
			txhj_huzhen: ["male", "qun", 10, ['xinfu_langxi', 'jintao', 'twxiongjun'], []],
			txhj_guanqiujian: ["male", "wei", '4/5', ['twzhengrong', 'twhongju'], []],
			txhj_wangling: ["male", "wei", 4, ['twmibei', 'twxingqi'], []],
			txhj_zhugedan: ["male", "wei", 4, ['gongao', 'juyi'], []],
			txhj_simazhao: ["male", "wei", 3, ['xinfu_daigong', 'xinfu_zhaoxin'], []],
			txhj_simashi: ["male", "wei", 4, ['baiyi', 'jinglve'], []],
			txhj_shensimayi: ["male", "shen", '4/5', ['renjie', 'sbaiyin', 'lianpo'], []],
			txhj_wangyi: ["female", "wei", 4, ['zhenlie', 'miji'], []],
			txhj_spcaiwenji: ["female", "wei", 3, ['chenqing', 'mozhi'], []],
			txhj_zhangchunhua: ["female", "wei", 3, ['jueqing', 'shangshi'], []],
			txhj_qinyilu: ["male", "qun", 4, ['new_reqingnang', 'zhaohuo', 'txyirang'], []],
			txhj_dufuren: ["female", "qun", 3, ['yise', 'shunshi'], []],
			txhj_spcaocao: ["male", "qun", 2, ['twlingfa'], []],
			txhj_houkai: ["male", "qun", 4, ['mingjian', 'reyingzi'], []],
			txhj_xuelan: ["male", "qun", 4, ['liegong', 'feiying'], []],
			txhj_yanbaihu: ["male", "qun", 4, ['zhidao', 'jili'], []],
			txhj_liuyao: ["male", "qun", 3, ['xinfu_kannan'], []],
			txhj_wanglang: ["male", "qun", 3, ['gushe', 'jici'], []],
			txhj_guanyinping: ["female", "shu", 4, ['huxiao', 'xueji'], []],
			txhj_zhangxingcai: ["female", "shu", 4, ['shenxian', 'qiangwu'], []],
			txhj_spsunshangxiang: ["female", "shu", 4, ['liangzhu', 'xiaoji'], []],
			txhj_zhugeguo: ["female", "shu", 3, ['twqirang', 'twyuhua'], []],
			txhj_huangyueying: ["female", "shu", 3, ['rejizhi', 'reqicai'], []],
			txhj_zhugeliang: ["male", "shu", 3, ['reguanxing', 'kongcheng'], []],
			txhj_dengai: ["male", "wei", 4, ['retuntian', 'zaoxian'], []],
			txhj_zhonghui: ["male", "wei", 4, ['requanji', 'zili'], []],
			txhj_jiangwei: ["male", "shu", 4, ['retiaoxin', 'zhiji'], []],
			txhj_luocha: ["female", "qun", 3, ['tx_modao', 'tx_yushou', 'yizhong', 'tx_moyany'], []],
			txhj_yecha: ["male", "qun", 3, ['tx_modao', 'tx_mojian', 'bazhen', 'tx_danshu'], []],
			txhj_zoudan: ["male", "qun", 8, ['twqianju', 'mashu'], []],
			txhj_baimaxiaoqi: ["male", "qun", '3/4', ['yicong', 'txhj_oldhuxiao'], []],
			txhj_huanjingnantong: ["male", "qun", '2/3', ['huaizi'], []],
			txhj_baimayicong: ["male", "qun", 4, ['qiaomeng', 'reyingzi'], []],
			txhj_xianzhenying: ["male", "qun", 3, ['xianzhen', 'jinjiu'], []],
			/*初涉幻境*/
			txhj_huanjingshouhutongzi: ["female", "qun", 2, [], []],
			txhj_elang: ["male", "qun", 4, ['xinkuanggu'], []],
			txhj_huanjingweishi: ["male", "qun", 4, ['yingjian', 'qiaomeng', 'lieren'], []],
			txhj_tonghu: ["male", "qun", 4, ['wushuang', 'mengjin'], []],
			txhj_huanxiangbingnv: ["female", "qun", 2, ['mashu'], []],
			txhj_huanxiangbingnan: ["male", "qun", 2, ['mashu'], []],
			txhj_shouhudizi: ["female", "qun", 3, ['zhidao'], []],
			txhj_lingjitongren: ["female", "qun", '4/6', ['txhj_daiyuan'], []],
			txhj_fuguangtongren: ["female", "qun", '4/5', ['txhj_daiyuan'], []],
			txhj_shenjunbaima: ["female", "qun", 3, ['qiaomeng', 'yicong'], []],
			txhj_guojiahuanxiang: ["male", "wei", 4, ['tiandu', 'new_reyiji'], []],
			txhj_zhicaihuanxiang: ["male", "wei", 4, ['tiandu', 'xianfu', 'chouce'], []],
			txhj_wolonghuanxiang: ["male", "shu", 4, ['qice', 'bazhen', 'zhenlue'], []],
			txhj_fengchuhuanxiang: ["male", "shu", 4, ['rejieming', 'rekanpo', 'zhenlue'], []],
			txhj_zhouyuhuanxiang: ["male", "wu", 4, ['refanjian', 'txhj_qingzhongx'], []],
			txhj_luxunhuanxiang: ["male", "wu", 4, ['relianying', 'weijing'], []],
			txhj_jiaxuhuanxiang: ["male", "qun", 4, ['luanwu', 'wansha', 'weimu'], []],
			txhj_dianweihuanxiang: ["male", "wei", 4, ['reqiangxi', 'xinkuanggu'], []],
			txhj_xuchuhuanxiang: ["male", "wei", 4, ['reluoyi'], []],
			txhj_guanyuhuanxiang: ["male", "shu", 4, ['new_rewusheng', 'new_yijue'], []],
			txhj_zhangfeihuanxiang: ["male", "shu", 4, ['new_repaoxiao', 'txhj_zuijiu'], []],
			txhj_ganninghuanxiang: ["male", "wu", 4, ['qixi', 'fenwei'], []],
			txhj_lingtonghuanxiang: ["male", "wu", 4, ['rexianzhen', 'fenwei'], []],
			txhj_lvbuhuanxiang: ["male", "qun", 4, ['wushuang', 'repojun', 'txhj_baoji'], []],
			txhj_caorenhuanxiang: ["male", "wei", 5, ['xinjushou', 'xinjiewei', 'lizhan'], []],
			txhj_zhaoyunhuanxiang: ["male", "shu", 5, ['longdan', 'chongzhen', 'mashu'], []],
			txhj_zhoutaihuanxiang: ["male", "wu", 4, ['buqu', 'yinghun'], []],
			txhj_shangjianghuanxiang: ["male", "qun", 7, ['mengjin', 'yaowu', 'kuangfu'], []],
			txhj_hunduntongren: ["male", "qun", 4, ['rexingluan', 'txhj_juhun'], []],
			txhj_moou: ["male", "qun", 10, ['rexingluan', 'txhj_guimei', 'txhj_baoji'], []],
			txhj_mowangzhizhong: ["male", "qun", 6, ['xinfu_langxi', 'jintao'], []],
			txhj_chi: ["male", "qun", 2, ['kuangfu', 'txhj_baoji'], []],
			txhj_mei: ["male", "qun", 2, ['kuangfu', 'txhj_baoji'], []],
			txhj_wang: ["male", "qun", 2, ['kuangfu', 'txhj_baoji'], []],
			txhj_liang: ["male", "qun", 2, ['kuangfu', 'txhj_baoji'], []],
			txhj_huanshenguanyu: ["male", "shen", 5, ['retieji', 'repojun', 'jiaozi', 'wushen'], []],
			txhj_huanshenlvmeng: ["male", "shen", 4, ['benyu', 'keji', 'shelie', 'gongxin'], []],
			txhj_huanshenzhouyu: ["male", "shen", 4, ['reyingzi', 'refanjian', 'qinyin', 'yeyan'], []],
			txhj_huanshenzhuge: ["male", "shen", 4, ['reguanxing', 'kongcheng', 'qice', 'qingxian'], []],
			txhj_huanshencaocao: ["male", "shen", 5, ['rejianxiong', 'yuce', 'fuli', 'zhichi'], []],
			txhj_huanshenlvbu: ["male", "shen", 5, ['xinliegong', 'jigong', 'baonu', 'shenfen'], []],
			txhj_huanshenzhaoyun: ["male", "shen", 4, ['kunfen', 'reyajiao', 'juejing', 'longhun'], []],
			txhj_huanshensima: ["male", "shen", 4, ['refankui', 'reguicai', 'rejizhi', 'rezhiheng'], []],
			txhj_yongwuhuanxiang: ["male", "qun", 6, ['zhuiji', 'wushuang', 'jiuchi', 'nzry_shicai'], []],
			txhj_jianshouhuanxiang: ["male", "qun", 8, ['zhuiji', 'hanyong', 'shibei', 'bazhen'], []],
			txhj_huoxinhuanxiang: ["male", "qun", 5, ['retuxi', 'juece', 'mieji', 'wangzun'], []],
			txhj_manyanhuanxiang: ["male", "qun", 5, ['jianying', 'duwu', 'qiangzhi'], []],
			txhj_yinhuanxiang: ["male", "qun", 4, ['rebiyue', 'mingce', 'jujian'], []],
			txhj_yanghuanxiang: ["male", "qun", 5, ['xinkuanggu', 'jianchu'], []],
			txhj_heiwuchanghuanxiang: ["male", "qun", 6, ['duwu', 'txhj_baolian'], []],
			txhj_baiwuchanghuanxiang: ["male", "qun", 6, ['yingjian', 'txhj_zuijiu'], []],
			txhj_niutouhuanxiang: ["male", "qun", 6, ['xiangle', 'refankui', 'txhj_beiming'], []],
			txhj_mamianhuanxiang: ["male", "qun", 6, ['juece', 'retuxi', 'txhj_beiming'], []],
			txhj_qianchaotongren: ["male", "qun", 6, ['bazhen', 'shixin', 'xinfu_langxi'], []],
			txhj_hanlingdi: ["male", "qun", '4/6', ['zaiqi', 'chouhai', 'yongsi', 'txhj_daiyuan'], []],
			txhj_baxiaoweishouling: ["male", "qun", 4, ['quji', 'yinbing'], []],
			txhj_shiemoxing: ["male", "qun", 99, ['txhj_guimei', 'txhj_luolei', 'txhj_guihuo'], []],
			txhj_wujiaoxinmo: ["male", "qun", 8, ['rejieming', 'olniepan', 'drlt_xiongluan', 'rehuashen', 'xinsheng'], []],
			txhj_huanjinglingzhu: ["male", "qun", 12, ['retieji', 'xinkuanggu', 'olniepan', 'qiangzhi', 'txhj_zuijiu'], []],
			txhj_tongrenjumo: ["male", "qun", 10, ['yizhong', 'yongsi', 'txhj_juhun'], []],
			txhj_tiaopibubu: ["male", "shen", 25, ['new_repaoxiao', 'fulin', 'ranshang', 'xiangle', 'txhj_baoji'], []],
			txhj_tianjijushou: ["male", "qun", 8, ['new_reqingnang', 'txhj_kuangbao', 'txhj_tunshi', 'txhj_chuanyun'], []],
			/*黄天之怒*/
			txhj_huangjinxinjun: ["male", "qun", 3, ['txhj_huangjin', 'txhj_zhouzu'], []],/*新技能*/
			txhj_guanhai: ["male", "qun", 4, ['txhj_huangjin', 'qixi', 'txhj_zhouzu'], []],/*新技能*/
			txhj_peiyuanshao: ["male", "qun", 4, ['txhj_huangjin', 'txhj_zuijiu', 'xinfu_xingluan'], []],/*新技能*/
			txhj_huangjinmengqi: ["male", "qun", 4, ['txhj_huangjin'], []],/*新技能*/
			txhj_dengmao: ["male", "qun", 6, ['txhj_huangjin', 'shensu', 'zhidao', 'xinfu_xingluan'], []],/*新技能*/
			txhj_dongzhuo: ["male", "qun", '6/8', ['dujin', 'benghuai', 'jiaozi', 'txhj_daiyuan'], []],/*新技能*/
			txhj_bocai: ["male", "qun", 6, ['txhj_huangjin', 'dujin', 'duwu'], []],/*新技能*/
			txhj_huangjinyaoshi: ["male", "qun", 4, ['txhj_huangjin', 'txhj_guimen', 'txhj_yaoshu'], []],/*新技能*/
			txhj_huangjinyushi: ["male", "qun", 6, ['txhj_huangjin', 'txhj_guimen', 'txhj_zhoufa'], []],/*新技能*/
			txhj_huangfusong: ["male", "qun", 6, ['dujin', 'yeyan', 'lianpo'], []],
			txhj_zhujun: ["male", "qun", 6, ['yizhong', 'zhanyi', 'repojun'], []],
			txhj_changyuanshibing: ["male", "qun", 6, ['txhj_shiyuan'], []],/*新技能*/
			txhj_huanyanzhangliang: ["male", "qun", '7/16', ['nzry_chenglve', 'txhj_renwang', 'txhj_renfang'], []],/*新技能*/
			txhj_huanyanzhangbao: ["male", "qun", '10/12', ['leiji', 'qiangxi', 'txhj_dizhou', 'txhj_didun'], []],/*新技能*/
			txhj_huanyanzhangjiaoshi: ["male", "qun", '8/12', ['leiji', 'txhj_huangjin', 'txhj_wangyuan', 'txhj_shiyuan', 'txhj_zhuhun'], []],/*新技能*/
			txhj_huanyanzhangjiaolei: ["male", "qun", '10/12', ['leiji', 'qiangxi', 'txhj_zhoulei'], []],/*新技能*/
			txhj_huanyanzhangjiaohuo: ["male", "qun", '12/15', ['leiji', 'txhj_huangjin', 'lihuo', 'txhj_guiyan', 'huoji'], []],/*新技能*/
			txhj_huanyanzhangjiaofeng: ["male", "qun", '12/15', ['leiji', 'txhj_huangjin', 'qiangxi', 'txhj_xiefeng'], []],/*新技能*/
			/*何进诛宦*/
			txhj_huanguan: ["male", "qun", 3, ['taixu_xiehui'], []],/*新技能*/
			txhj_huanguandaofushou: ["male", "qun", 4, ['txhj_huangmen', 'taixu_xiehui', 'kuangfu'], []],/*新技能*/
			txhj_hetaihou: ["female", "qun", 3, ['xinfu_lingren', 'fenyin', 'zhendu', 'txhj_suoming'], []],/*新技能*/
			txhj_dongtaihou: ["female", "qun", 3, ['xinzenhui', 'qiangxi', 'xinfu_songsang', 'fenji'], []],
			txhj_baohong: ["male", "qun", 8, ['taixu_linglu', 'taixu_xiehui'], []],/*新技能*/
			txhj_xiaoweijun: ["male", "qun", 4, ['taixu_yishi', 'kaikang'], []],/*新技能*/
			txhj_chunyuqiong: ["male", "qun", 12, ['taixu_jinwei', 'taixu_jinxing', 'jiuchi'], []],/*新技能*/
			txhj_jinweijun: ["male", "qun", 6, ['taixu_jinwei', 'taixu_yishi', 'longdan'], []],/*新技能*/
			txhj_zhaorong: ["male", "qun", 4, ['taixu_zhulian', 'taixu_xiehui'], []],/*新技能*/
			txhj_zhaozhong: ["male", "qun", '6/12', ['txhj_huangmen', 'taixu_jinxing', 'taixu_xiehui', 'txhj_daiyuan', 'huaizi'], []],/*新技能*/
			txhj_yuanshao: ["male", "qun", 6, ['zhanyi', 'zhiyi', 'weifeng', 'taixu_zhanhuo'], []],/*新技能*/
			txhj_yuanshu: ["male", "qun", 4, ['duanliang', 'quhu', 'xinfu_daigong', 'xinfu_fuyin'], []],
			txhj_caocao: ["male", "qun", 6, ['kaikang', 'redangxian', 'nzry_kuizhu', 'taixu_jiaoxie'], []],/*新技能*/
			txhj_xuyou: ["male", "qun", 3, ['nzry_chenglve', 'nzry_shicai', 'nzry_cunmu'], []],
			txhj_jianshuo: ["male", "qun", 8, ['taixu_jinwei', 'taixu_jinxing', 'taixu_zhuosheng', 'taixu_zhulian'], []],/*新技能*/
			txhj_huanyanzhangrang: ["male", "qun", 11, ['txhj_huangmen', 'taixu_quanqing', 'taoluan', 'shefu'], []],/*新技能*/
			txhj_huanyanhejin: ["male", "qun", 10, ['taixu_mouqiang', 'taixu_zhuosheng', 'taixu_linglu', 'taixu_mouzhu'], []],/*新技能*/
		},
		characterSort: {
			太虚幻境: {
				txhj_HeJinZhuHuan: [
					'txhj_huanguan',
					'txhj_huanguandaofushou',
					'txhj_hetaihou',
					'txhj_dongtaihou',
					'txhj_baohong',
					'txhj_xiaoweijun',
					'txhj_chunyuqiong',
					'txhj_jinweijun',
					'txhj_zhaorong',
					'txhj_zhaozhong',
					'txhj_yuanshao',
					'txhj_yuanshu',
					'txhj_caocao',
					'txhj_xuyou',
					'txhj_jianshuo',
					'txhj_huanyanzhangrang',
					'txhj_huanyanhejin',
				],
				txhj_LiGuoZhiLuan: [
					'txhj_huangjinxinjun',
				],
				txhj_GFHuangJinZhiLuan: [
					'txhj_huangjinxinjun',
				],
				txhj_HaiWaiFenghe: [
				],
				txhj_HuangTianZhiNu: [
					'txhj_huangjinxinjun',
					'txhj_guanhai',
					'txhj_peiyuanshao',
					'txhj_huangjinmengqi',
					'txhj_dengmao',
					'txhj_dongzhuo',
					'txhj_bocai',
					'txhj_huangjinyaoshi',
					'txhj_huangjinyushi',
					'txhj_huangfusong',
					'txhj_zhujun',
					'txhj_changyuanshibing',
					'txhj_huanyanzhangliang',
					'txhj_huanyanzhangbao',
					'txhj_huanyanzhangjiaoshi',
					'txhj_huanyanzhangjiaolei',
					'txhj_huanyanzhangjiaohuo',
					'txhj_huanyanzhangjiaofeng',
				],
				txhj_ChongYingChuLin: [
					'txhj_huanjingshouhutongzi',
					'txhj_elang',
					'txhj_huanjingweishi',
					'txhj_tonghu',
					'txhj_huanxiangbingnv',
					'txhj_huanxiangbingnan',
					'txhj_shouhudizi',
					'txhj_lingjitongren',
					'txhj_fuguangtongren',
					'txhj_shenjunbaima',
					'txhj_guojiahuanxiang',
					'txhj_zhicaihuanxiang',
					'txhj_wolonghuanxiang',
					'txhj_fengchuhuanxiang',
					'txhj_zhouyuhuanxiang',
					'txhj_luxunhuanxiang',
					'txhj_jiaxuhuanxiang',
					'txhj_dianweihuanxiang',
					'txhj_xuchuhuanxiang',
					'txhj_guanyuhuanxiang',
					'txhj_zhangfeihuanxiang',
					'txhj_ganninghuanxiang',
					'txhj_lingtonghuanxiang',
					'txhj_lvbuhuanxiang',
					'txhj_caorenhuanxiang',
					'txhj_zhaoyunhuanxiang',
					'txhj_zhoutaihuanxiang',
					'txhj_shangjianghuanxiang',
					'txhj_hunduntongren',
					'txhj_moou',
					'txhj_mowangzhizhong',
					'txhj_chi',
					'txhj_mei',
					'txhj_wang',
					'txhj_liang',
					'txhj_huanshenguanyu',
					'txhj_huanshenlvmeng',
					'txhj_huanshenzhouyu',
					'txhj_huanshenzhuge',
					'txhj_huanshencaocao',
					'txhj_huanshenlvbu',
					'txhj_huanshenzhaoyun',
					'txhj_huanshensima',
					'txhj_yongwuhuanxiang',
					'txhj_jianshouhuanxiang',
					'txhj_huoxinhuanxiang',
					'txhj_manyanhuanxiang',
					'txhj_yinhuanxiang',
					'txhj_yanghuanxiang',
					'txhj_heiwuchanghuanxiang',
					'txhj_baiwuchanghuanxiang',
					'txhj_niutouhuanxiang',
					'txhj_mamianhuanxiang',
					'txhj_qianchaotongren',
					'txhj_hanlingdi',
					'txhj_baxiaoweishouling',
					'txhj_shiemoxing',
					'txhj_wujiaoxinmo',
					'txhj_huanjinglingzhu',
					'txhj_tongrenjumo',
					'txhj_tiaopibubu',
					'txhj_tianjijushou',
				],
			},
		},
		characterIntro: {
			//魔改魁拔之战+超时空密探
			txhj_kbmanjijx: '太虚幻境中的终极敌人',
			txhj_kbmanji: '太虚幻境中的终极敌人',
			txhj_lingxunjun: '太虚幻境中的普通单位',
			txhj_lingzhanjun: '太虚幻境中的普通单位',
			txhj_jingxin: '太虚幻境中的普通单位',
			txhj_kalaxiaokepanjx: '太虚幻境中的普通单位',
			txhj_kalaxiaokepan: '太虚幻境中的普通单位',
			txhj_shengdoujun: '太虚幻境中的普通单位',
			txhj_shenghujun: '太虚幻境中的普通单位',
			txhj_haiwenxiangjx: '太虚幻境中的普通单位',
			txhj_haiwenxiang: '太虚幻境中的普通单位',
			txhj_shengjiejun: '太虚幻境中的普通单位',
			txhj_shengzhujun: '太虚幻境中的普通单位',
			txhj_youmikuangjx: '太虚幻境中的普通单位',
			txhj_lingluanjun: '太虚幻境中的普通单位',
			txhj_lingshoujun: '太虚幻境中的普通单位',
			txhj_youmikuang: '太虚幻境中的普通单位',
			txhj_yanluowang: '太虚幻境中的精英敌人',
			txhj_guiwang: '太虚幻境中的精英敌人',
			txhj_huangfeng: '太虚幻境中的普通单位',
			txhj_yusai: '太虚幻境中的普通单位',
			txhj_niaozui: '太虚幻境中的普通单位',
			txhj_baowei: '太虚幻境中的普通单位',
			txhj_heibaiwuchang: '太虚幻境中的普通单位',
			txhj_niutoumamian: '太虚幻境中的普通单位',
			txhj_riyeyoushen: '太虚幻境中的普通单位',
			txhj_mengpo: '太虚幻境中的普通单位',
			txhj_wuliuqi: '太虚幻境中的普通单位',
			txhj_mitan: '太虚幻境中的普通单位',
			txhj_meihuashisan: '太虚幻境中的普通单位',
			txhj_skcaopi: '太虚幻境中的普通单位',
			txhj_skwannian: '太虚幻境中的普通单位',
			//副本PVE系列关卡扩增	
			/*抚琴益州-非新杀PVE*/
			txhj_pangtongy: '太虚幻境中的普通单位',
			txhj_yizhoushitu: '太虚幻境中的普通单位',
			txhj_mengda: '太虚幻境中的普通单位',
			txhj_pengyang: '太虚幻境中的普通单位',
			txhj_fazheng: '太虚幻境中的普通单位',
			txhj_zhangsong: '太虚幻境中的普通单位',
			txhj_weiwuchangdaobing: '太虚幻境中的普通单位',
			txhj_yanghuai: '太虚幻境中的普通单位',
			txhj_gaopei: '太虚幻境中的普通单位',
			txhj_pangxi: '太虚幻境中的普通单位',
			txhj_spchengji: '太虚幻境中的普通单位',
			txhj_skzhangyi: '太虚幻境中的普通单位',
			txhj_liugui: '太虚幻境中的普通单位',
			txhj_wuyi: '太虚幻境中的普通单位',
			txhj_dengxian: '太虚幻境中的普通单位',
			txhj_lingbao: '太虚幻境中的普通单位',
			txhj_feiguan: '太虚幻境中的普通单位',
			txhj_liyan: '太虚幻境中的普通单位',
			txhj_huanweibing: '太虚幻境中的普通单位',
			txhj_zhouqun: '太虚幻境中的普通单位',
			txhj_liuxun: '太虚幻境中的普通单位',
			txhj_zhangren: '太虚幻境中的精英敌人',
			txhj_wangfu: '太虚幻境中的普通单位',
			txhj_xujing: '太虚幻境中的普通单位',
			txhj_yzzhangfei: '太虚幻境中的普通单位',
			txhj_yanyan: '太虚幻境中的精英敌人',
			txhj_wulan: '太虚幻境中的普通单位',
			txhj_leitong: '太虚幻境中的普通单位',
			txhj_huangquan: '太虚幻境中的普通单位',
			txhj_qinmi: '太虚幻境中的普通单位',
			txhj_liuzhang: '太虚幻境中的终极敌人',
			txhj_liuba: '太虚幻境中的普通单位',
			txhj_lihui: '太虚幻境中的普通单位',
			//海外卧龙出山部分NPC(暂时并入<轮回之境>赛季混合)
			txhj_zhugejun: '太虚幻境中的普通单位',
			txhj_huangchengyan: '太虚幻境中的普通单位',
			txhj_txyiji: '太虚幻境中的普通单位',
			txhj_mizhu: '太虚幻境中的普通单位',
			txhj_sunqian: '太虚幻境中的普通单位',
			txhj_jianyong: '太虚幻境中的普通单位',
			txhj_chendao: '太虚幻境中的普通单位',
			txhj_liufeng: '太虚幻境中的普通单位',
			txhj_wlzhoucang: '太虚幻境中的普通单位',
			txhj_wlguanping: '太虚幻境中的普通单位',
			txhj_xingzhanghe: '太虚幻境中的普通单位',
			txhj_mcgaolan: '太虚幻境中的普通单位',
			txhj_mcyanwen: '太虚幻境中的普通单位',
			txhj_xiahoushi: '太虚幻境中的普通单位',
			txhj_mozhangfei: '太虚幻境中的精英敌人',
			txhj_xinyebingyong: '太虚幻境中的普通单位',
			txhj_liaohua: '太虚幻境中的普通单位',
			txhj_moliubei: '太虚幻境中的终极敌人',
			txhj_wlmifuren: '太虚幻境中的普通单位',
			txhj_wlganfuren: '太虚幻境中的普通单位',
			txhj_mozhaoyun: '太虚幻境中的终极敌人',
			txhj_xinyebaiqizhang: '太虚幻境中的普通单位',
			txhj_friendwolong: '太虚幻境中的普通单位',
			txhj_wlhuangyueying: '太虚幻境中的普通单位',
			txhj_mowolongzg: '太虚幻境中的终极敌人',
			txhj_moguanyu: '太虚幻境中的精英敌人',
			txhj_hujinding: '太虚幻境中的普通单位',
			/*魔改国服-长板桥之战*/
			txhj_vcaocao: '太虚幻境中的终极敌人',
			txhj_vzhangliao: '太虚幻境中的精英敌人',
			txhj_cbqpingmin: '太虚幻境中的普通单位',
			txhj_vyuejin: '太虚幻境中的普通单位',
			txhj_xiahouyuan: '太虚幻境中的普通单位',
			txhj_cbqzhangfei: '太虚幻境中的普通单位',
			txhj_tuhaojiading: '太虚幻境中的普通单位',
			txhj_cbqzhaoyun: '太虚幻境中的普通单位',
			txhj_cbxiahouen: '太虚幻境中的精英敌人',
			txhj_cbganfuren: '太虚幻境中的普通单位',
			txhj_vwenpin: '太虚幻境中的精英敌人',
			txhj_vcaoren: '太虚幻境中的精英敌人',
			txhj_vcaohong: '太虚幻境中的精英敌人',
			txhj_caojuntieqi: '太虚幻境中的普通单位',
			txhj_caojunjingqi: '太虚幻境中的普通单位',
			txhj_vxuchu: '太虚幻境中的精英敌人',
			txhj_wolongzg: '太虚幻境中的普通单位',
			txhj_cbyujin: '太虚幻境中的普通单位',
			txhj_cbxiahoudun: '太虚幻境中的普通单位',
			txhj_vhubaoqi: '太虚幻境中的普通单位',
			txhj_cbqcaoren: '太虚幻境中的精英敌人',
			txhj_caojunxiaoqi: '太虚幻境中的普通单位',
			/*官渡之战-海外魔改半成品*/
			txhj_moyanwen: '太虚幻境中的终极敌人',
			txhj_gdsishi: '太虚幻境中的普通单位',
			txhj_moyuanshao: '太虚幻境中的终极敌人',
			txhj_gdjushou: '太虚幻境中的普通单位',
			txhj_mojushou: '太虚幻境中的终极敌人',
			txhj_tianfeng: '太虚幻境中的普通单位',
			txhj_xunchen: '太虚幻境中的普通单位',
			txhj_yuantan: '太虚幻境中的普通单位',
			txhj_moshenpei: '太虚幻境中的精英敌人',
			txhj_xinpi: '太虚幻境中的普通单位',
			txhj_moguotufengji: '太虚幻境中的精英敌人',
			txhj_shenpei: '太虚幻境中的普通单位',
			txhj_qingzhoujingrui: '太虚幻境中的普通单位',
			txhj_gdchunyuqiong: '太虚幻境中的普通单位',
			txhj_liangcao: '太虚幻境中的普通单位',
			txhj_zhanghe: '太虚幻境中的普通单位',
			txhj_gaolan: '太虚幻境中的普通单位',
			txhj_cuiyan: '太虚幻境中的普通单位',
			txhj_chenlin: '太虚幻境中的普通单位',
			txhj_gdliubei: '太虚幻境中的普通单位',
			txhj_wenchou: '太虚幻境中的普通单位',
			txhj_yanliang: '太虚幻境中的普通单位',
			txhj_yuanxi: '太虚幻境中的精英敌人',
			txhj_lvkuanglvxiang: '太虚幻境中的普通单位',
			txhj_yanjinweibing: '太虚幻境中的普通单位',
			txhj_hanmeng: '太虚幻境中的普通单位',
			txhj_xinping: '太虚幻境中的普通单位',
			/*千里走单骑*/
			txhj_nuxianghoudun: '太虚幻境中的终极敌人',
			txhj_caiyang: '太虚幻境中的精英敌人',
			txhj_mache: '太虚幻境中的普通单位',
			txhj_qinqi: '太虚幻境中的精英敌人',
			txhj_yinhubiaoqi: '太虚幻境中的普通单位',
			txhj_wangzhi: '太虚幻境中的精英敌人',
			txhj_huban: '太虚幻境中的普通单位',
			txhj_hubany: '太虚幻境中的普通单位',
			txhj_bianxi: '太虚幻境中的精英敌人',
			txhj_pujingheshang: '太虚幻境中的普通单位',
			txhj_daofushou: '太虚幻境中的普通单位',
			txhj_dqhanfu: '太虚幻境中的精英敌人',
			txhj_mengtan: '太虚幻境中的精英敌人',
			txhj_caojunyongshi: '太虚幻境中的普通单位',
			txhj_dqganfuren: '太虚幻境中的普通单位',
			txhj_dqmifuren: '太虚幻境中的普通单位',
			txhj_kongxiu: '太虚幻境中的精英敌人',
			txhj_caojunweibing: '太虚幻境中的普通单位',
			/*原创迷城NPC*/
			txhj_mclijue: '太虚幻境中的普通单位',
			txhj_mcguosi: '太虚幻境中的普通单位',
			txhj_mczhangji: '太虚幻境中的普通单位',
			txhj_mcfanchou: '太虚幻境中的普通单位',
			txhj_repangtong: '太虚幻境中的普通单位',
			txhj_wupangtong: '太虚幻境中的普通单位',
			txhj_sppangtong: '太虚幻境中的普通单位',
			txhj_spzhugeliang: '太虚幻境中的普通单位',
			txhj_shenzhugeliang: '太虚幻境中的普通单位',
			txhj_zhugejin: '太虚幻境中的普通单位',
			txhj_mcxiahouen: '太虚幻境中的普通单位',
			txhj_mcxiahoushang: '太虚幻境中的普通单位',
			txhj_mcxiahoujie: '太虚幻境中的普通单位',
			txhj_zhuhuan: '太虚幻境中的普通单位',
			txhj_zhuran: '太虚幻境中的普通单位',
			txhj_mczhuzhi: '太虚幻境中的普通单位',
			txhj_caozhi: '太虚幻境中的普通单位',
			txhj_caopi: '太虚幻境中的普通单位',
			txhj_zhenji: '太虚幻境中的普通单位',
			txhj_sunru: '太虚幻境中的普通单位',
			txhj_sunluyu: '太虚幻境中的普通单位',
			txhj_sunluban: '太虚幻境中的普通单位',
			txhj_recaocao: '太虚幻境中的普通单位',
			txhj_shencaocao: '太虚幻境中的普通单位',
			txhj_mcqcaocao: '太虚幻境中的普通单位',
			txhj_mcyuanshu: '太虚幻境中的普通单位',
			txhj_reyuanshu: '太虚幻境中的普通单位',
			txhj_zdyuanshu: '太虚幻境中的普通单位',
			txhj_zhugezhan: '太虚幻境中的普通单位',
			//国服-赤壁之战
			txhj_cbcaocao: '太虚幻境中的终极敌人',
			txhj_cbxuchu: '太虚幻境中的普通单位',
			txhj_chengyu: '太虚幻境中的普通单位',
			txhj_caojunshizhang: '太虚幻境中的普通单位',
			txhj_yuejin: '太虚幻境中的普通单位',
			txhj_lidian: '太虚幻境中的普通单位',
			txhj_xiahoudun: '太虚幻境中的普通单位',
			txhj_zhangliaox: '太虚幻境中的普通单位',
			txhj_wenpin: '太虚幻境中的普通单位',
			txhj_cbhandang: '太虚幻境中的普通单位',
			txhj_maojie: '太虚幻境中的精英敌人',
			txhj_cbhuanggai: '太虚幻境中的普通单位',
			txhj_caochuan: '太虚幻境中的普通单位',
			txhj_cbzhangliao: '太虚幻境中的普通单位',
			txhj_xuhuang: '太虚幻境中的普通单位',
			txhj_tiejiajingrui: '太虚幻境中的普通单位',
			txhj_xunshaoduizhang: '太虚幻境中的普通单位',
			txhj_jianggan: '太虚幻境中的普通单位',
			txhj_tiejiachangjibing: '太虚幻境中的普通单位',
			txhj_caimao: '太虚幻境中的精英敌人',
			txhj_caojungongbing: '太虚幻境中的普通单位',
			txhj_huwei: '太虚幻境中的普通单位',
			txhj_cbcaohong: '太虚幻境中的精英敌人',
			txhj_caojunqiangbing: '太虚幻境中的普通单位',
			txhj_buzhi: '太虚幻境中的普通单位',
			txhj_yufan: '太虚幻境中的普通单位',
			txhj_wolongzhugeliang: '太虚幻境中的普通单位',
			txhj_cbzhangzhao: '太虚幻境中的普通单位',
			txhj_xuezong: '太虚幻境中的普通单位',
			txhj_caojuncike: '太虚幻境中的普通单位',
			txhj_wuwei: '太虚幻境中的普通单位',
			txhj_wujunmitan: '太虚幻境中的普通单位',
			txhj_wujunshibing: '太虚幻境中的普通单位',
			txhj_caojunmitan: '太虚幻境中的普通单位',
			txhj_cikejingrui: '太虚幻境中的普通单位',
			txhj_caojunxiaojiang: '太虚幻境中的普通单位',
			txhj_wujungongbing: '太虚幻境中的普通单位',
			txhj_caojunxiaowei: '太虚幻境中的普通单位',
			txhj_caojunduwei: '太虚幻境中的普通单位',
			txhj_caojunshibing: '太虚幻境中的普通单位',
			//魔改合纵抗秦
			txhj_zyliuxiu: '太虚幻境中的普通单位',
			txhj_zywangmang: '太虚幻境中的普通单位',
			txhj_xinjunshibing: '太虚幻境中的普通单位',
			txhj_cmfanchou: '太虚幻境中的普通单位',
			txhj_llwangkuang: '太虚幻境中的普通单位',
			txhj_yingzheng: '太虚幻境中的终极敌人',
			txhj_zhaogao: '太虚幻境中的精英敌人',
			txhj_mengtian: '太虚幻境中的普通单位',
			txhj_wangjian: '太虚幻境中的普通单位',
			txhj_zhaoji: '太虚幻境中的精英敌人',
			txhj_qinjunnushou: '太虚幻境中的普通单位',
			txhj_lvbuwei: '太虚幻境中的普通单位',
			txhj_liubang: '太虚幻境中的普通单位',
			txhj_xiangyu: '太虚幻境中的普通单位',
			txhj_longyufei: '太虚幻境中的普通单位',
			txhj_baiqi: '太虚幻境中的精英敌人',
			txhj_qinjunqibing: '太虚幻境中的普通单位',
			txhj_shiwei: '太虚幻境中的普通单位',
			txhj_miyue: '太虚幻境中的普通单位',
			txhj_wuguang: '太虚幻境中的普通单位',
			txhj_chensheng: '太虚幻境中的普通单位',
			txhj_kqzhangyi: '太虚幻境中的普通单位',
			txhj_wangmang: '太虚幻境中的普通单位',
			txhj_liuxiu: '太虚幻境中的普通单位',
			txhj_shangyang: '太虚幻境中的普通单位',
			txhj_mengjiangnv: '太虚幻境中的普通单位',
			txhj_qinjunbubing: '太虚幻境中的普通单位',
			txhj_shinv: '太虚幻境中的普通单位',
			txhj_qinjunhuwei: '太虚幻境中的普通单位',
			txhj_qinjunshizu: '太虚幻境中的普通单位',
			txhj_yijibaoxiang: '太虚幻境中的普通单位',
			//十常侍之乱
			txhj_shaodiliubian: '太虚幻境中的普通单位',
			txhj_scszhangrang: '太虚幻境中的普通单位',
			txhj_bilan: '太虚幻境中的普通单位',
			txhj_duangui: '太虚幻境中的普通单位',
			txhj_fengxu: '太虚幻境中的普通单位',
			txhj_chengkuang: '太虚幻境中的普通单位',
			txhj_wangkuang: '太虚幻境中的普通单位',
			txhj_guosheng: '太虚幻境中的普通单位',
			txhj_huanguantanzi: '太虚幻境中的普通单位',
			txhj_zuofeng: '太虚幻境中的普通单位',
			txhj_yuanshuy: '太虚幻境中的普通单位',
			txhj_scszhaozhong: '太虚幻境中的精英敌人',
			txhj_houlan: '太虚幻境中的普通单位',
			txhj_huanguanshicong: '太虚幻境中的普通单位',
			txhj_huanguanshicongx: '太虚幻境中的普通单位',
			txhj_sunzhang: '太虚幻境中的普通单位',
			txhj_xiachangshi: '太虚幻境中的普通单位',
			txhj_hankui: '太虚幻境中的普通单位',
			txhj_jianshuox: '太虚幻境中的精英敌人',
			txhj_xiayun: '太虚幻境中的普通单位',
			txhj_lisong: '太虚幻境中的普通单位',
			txhj_bilan: '太虚幻境中的普通单位',
			txhj_dongtaihoux: '太虚幻境中的普通单位',
			txhj_dongzhong: '太虚幻境中的精英敌人',
			txhj_gaowang: '太虚幻境中的精英敌人',
			txhj_huanguandaofu: '太虚幻境中的普通单位',
			txhj_huanguanjianshi: '太虚幻境中的普通单位',
			txhj_scshuanguan: '太虚幻境中的普通单位',
			txhj_scscaojie: '太虚幻境中的普通单位',
			txhj_songdian: '太虚幻境中的普通单位',
			txhj_scszhanggong: '太虚幻境中的普通单位',
			/*分隔线——*/
			//活动场挑战关卡整合
			/*民间灾变僵尸npc*/
			txhj_jiangshinan: '太虚幻境中的普通单位',
			txhj_jiangshinv: '太虚幻境中的普通单位',
			txhj_jiangshiwang: '太虚幻境中的普通单位',
			/*龙舟奥运西游联动卡npc*/
			txhj_zuogu: '太虚幻境中的普通单位',
			txhj_yougu: '太虚幻境中的普通单位',
			txhj_taoshen: '太虚幻境中的普通单位',
			txhj_lzcaoe: '太虚幻境中的普通单位',
			txhj_sihaibafei: '太虚幻境中的精英敌人',
			txhj_mushun: '太虚幻境中的普通单位',
			txhj_tqtfuwan: '太虚幻境中的普通单位',
			txhj_fuhuanghou: '太虚幻境中的普通单位',
			txhj_jiben: '太虚幻境中的普通单位',
			txhj_libai: '太虚幻境中的普通单位',
			txhj_xiaoyuehankehan: '太虚幻境中的普通单位',
			txhj_sunwukong: '太虚幻境中的普通单位',
			txhj_longwang: '太虚幻境中的普通单位',
			txhj_yuhuangdadi: '太虚幻境中的普通单位',
			txhj_yeshiwen: '太虚幻境中的普通单位',
			txhj_sunyang: '太虚幻境中的普通单位',
			/*圣诞捉鬼*/
			txhj_sdliubei: '太虚幻境中的普通单位',
			txhj_sdsunshangxiang: '太虚幻境中的普通单位',
			txhj_sdluxun: '太虚幻境中的普通单位',
			/*仙王圣战*/
			txhj_wanglvbu: '太虚幻境中的精英敌人',
			txhj_xiantaishici: '太虚幻境中的普通单位',
			txhj_xianmachao: '太虚幻境中的普通单位',
			txhj_wanghuaxiong: '太虚幻境中的普通单位',
			txhj_xiandiaochan: '太虚幻境中的普通单位',
			txhj_xianzhouyu: '太虚幻境中的普通单位',
			txhj_xianzhenji: '太虚幻境中的普通单位',
			txhj_yaoguanlu: '太虚幻境中的普通单位',
			txhj_wangliru: '太虚幻境中的普通单位',
			txhj_wangcaiwenji: '太虚幻境中的普通单位',
			txhj_xianzhugeke: '太虚幻境中的普通单位',
			txhj_zhangwei: '太虚幻境中的普通单位',
			/*手杀捉鬼*/
			txhj_zgwang: '太虚幻境中的普通单位',
			txhj_zgliang: '太虚幻境中的普通单位',
			txhj_pknianshou: '太虚幻境中的普通单位',
			txhj_kulouwang: '太虚幻境中的普通单位',
			txhj_zgyecha: '太虚幻境中的普通单位',
			txhj_zgluocha: '太虚幻境中的普通单位',
			txhj_xuanwuzhenshen: '太虚幻境中的普通单位',
			txhj_zhuquezhenshen: '太虚幻境中的普通单位',
			txhj_zhuquefaxiang: '太虚幻境中的普通单位',
			txhj_xuanwufaxiang: '太虚幻境中的普通单位',
			txhj_dahu: '太虚幻境中的普通单位',
			txhj_hunlvbu: '太虚幻境中的普通单位',
			txhj_hunzhangliao: '太虚幻境中的普通单位',
			txhj_hundiaochan: '太虚幻境中的普通单位',
			txhj_hunzhugeliang: '太虚幻境中的普通单位',
			txhj_hunliubei: '太虚幻境中的普通单位',
			txhj_hunguanyu: '太虚幻境中的普通单位',
			txhj_xiahouzie: '太虚幻境中的普通单位',
			txhj_xiahoulan: '太虚幻境中的普通单位',
			txhj_huncaocao: '太虚幻境中的普通单位',
			txhj_hunsimayi: '太虚幻境中的普通单位',
			txhj_hunxuchu: '太虚幻境中的普通单位',
			txhj_hunsunquan: '太虚幻境中的普通单位',
			txhj_hunzhouyu: '太虚幻境中的普通单位',
			txhj_hunganning: '太虚幻境中的普通单位',
			txhj_zhuyin: '太虚幻境中的普通单位',
			txhj_taotie: '太虚幻境中的普通单位',
			txhj_qiliny: '太虚幻境中的普通单位',
			txhj_hundun: '太虚幻境中的普通单位',
			/*手杀捉鬼*/
			txhj_zgheiwuchang: '太虚幻境中的普通单位',
			txhj_zgbaiwuchang: '太虚幻境中的普通单位',
			txhj_zgchi: '太虚幻境中的普通单位',
			txhj_zgmei: '太虚幻境中的普通单位',
			txhj_zgniutou: '太虚幻境中的普通单位',
			txhj_zgmamian: '太虚幻境中的普通单位',
			txhj_yaozhoutai: '太虚幻境中的普通单位',
			txhj_shenglingtong: '太虚幻境中的普通单位',
			txhj_guiguanyu: '太虚幻境中的普通单位',
			txhj_guizhangfei: '太虚幻境中的普通单位',
			txhj_yaosima: '太虚幻境中的普通单位',
			txhj_guizhuge: '太虚幻境中的普通单位',
			txhj_guizhangjiao: '太虚幻境中的普通单位',
			txhj_guicaocao: '太虚幻境中的普通单位',
			txhj_guihuaxiong: '太虚幻境中的普通单位',
			txhj_guilvbu: '太虚幻境中的普通单位',
			txhj_yaoxiaoqiao: '太虚幻境中的普通单位',
			txhj_shengsunce: '太虚幻境中的普通单位',
			txhj_hlgdamen: '太虚幻境中的普通单位',
			'txhj_guanyu1': '太虚幻境中的普通单位',
			'txhj_rezhangfei1': '太虚幻境中的普通单位',
			'txhj_bosslvbu3': '太虚幻境中的精英敌人',
			'txhj_bosslvbu2': '太虚幻境中的精英敌人',
			'txhj_bosslvbu1': '太虚幻境中的精英敌人',
			/*迷城幻境NPC扩充*/
			txhj_shenliubei: '太虚幻境中的普通单位',
			txhj_jspliubei: '太虚幻境中的普通单位',
			txhj_sphuaman: '太虚幻境中的普通单位',
			txhj_rezhurong: '太虚幻境中的普通单位',
			txhj_remenghuo: '太虚幻境中的普通单位',
			txhj_rezhangjiao: '太虚幻境中的普通单位',
			txhj_zhangbao: '太虚幻境中的普通单位',
			txhj_zhangliang: '太虚幻境中的普通单位',
			txhj_rehandang: '太虚幻境中的普通单位',
			txhj_rechengpu: '太虚幻境中的普通单位',
			txhj_rehuanggai: '太虚幻境中的普通单位',
			txhj_reliubei: '太虚幻境中的普通单位',
			txhj_shenzhaoyun: '太虚幻境中的普通单位',
			txhj_rezhaoyun: '太虚幻境中的普通单位',
			txhj_spzhaoyun: '太虚幻境中的普通单位',
			txhj_reganning: '太虚幻境中的普通单位',
			txhj_spguanyu: '太虚幻境中的普通单位',
			txhj_shenguanyu: '太虚幻境中的普通单位',
			txhj_caifuren: '太虚幻境中的普通单位',
			txhj_liubiao: '太虚幻境中的普通单位',
			txhj_liuqi: '太虚幻境中的普通单位',
			/*霸王征程-魔改*/
			txhj_zhoutai: '太虚幻境中的普通单位',
			txhj_dingfeng: '太虚幻境中的普通单位',
			txhj_wujungongjianshou: '太虚幻境中的普通单位',
			txhj_panzhang: '太虚幻境中的普通单位',
			txhj_wumazhong: '太虚幻境中的普通单位',
			txhj_lingcao: '太虚幻境中的普通单位',
			txhj_heqi: '太虚幻境中的普通单位',
			txhj_zhuzhi: '太虚幻境中的普通单位',
			txhj_mosunce: '太虚幻境中的终极敌人',
			/*七擒孟获*/
			'txhj_menghuo7': '太虚幻境中的终极敌人',
			txhj_zhurongx: '太虚幻境中的精英敌人',
			txhj_wutugu: '太虚幻境中的精英敌人',
			txhj_muludawang: '太虚幻境中的精英敌人',
			txhj_zhurong: '太虚幻境中的精英敌人',
			txhj_gousheng: '太虚幻境中的精英敌人',
			txhj_manzuzhanxiang: '太虚幻境中的普通单位',
			txhj_manzuzhanxiangx: '太虚幻境中的普通单位',
			txhj_mengyou: '太虚幻境中的普通单位',
			txhj_manzucike: '太虚幻境中的普通单位',
			txhj_mangyachang: '太虚幻境中的精英敌人',
			txhj_tengjiabing: '太虚幻境中的普通单位',
			txhj_manzuhuwei: '太虚幻境中的普通单位',
			'txhj_menghuo6': '太虚幻境中的普通单位',
			'txhj_menghuo5': '太虚幻境中的精英敌人',
			'txhj_menghuo4': '太虚幻境中的精英敌人',
			'txhj_menghuo3': '太虚幻境中的精英敌人',
			'txhj_menghuo2': '太虚幻境中的精英敌人',
			'txhj_menghuo1': '太虚幻境中的精英敌人',
			txhj_manzushoushi: '太虚幻境中的普通单位',
			txhj_manzuxianfeng: '太虚幻境中的普通单位',
			txhj_manzuxianfengx: '太虚幻境中的普通单位',
			txhj_zhaoyuny: '太虚幻境中的普通单位',
			txhj_jinhuansanjie: '太虚幻境中的精英敌人',
			txhj_manzuyongshi: '太虚幻境中的普通单位',
			txhj_manzushibing: '太虚幻境中的普通单位',
			txhj_manding: '太虚幻境中的普通单位',
			txhj_manzutanzi: '太虚幻境中的普通单位',
			txhj_mangu: '太虚幻境中的普通单位',
			txhj_ehuan: '太虚幻境中的精英敌人',
			txhj_manzujishi: '太虚幻境中的普通单位',
			txhj_manzuzhuangding: '太虚幻境中的普通单位',
			txhj_nanzhongjingrui: '太虚幻境中的普通单位',
			txhj_nianshou: '太虚幻境中的终极敌人',
			/*李郭之乱*/
			txhj_nianshou: '太虚幻境中的终极敌人',
			txhj_huanjingdoushi: '太虚幻境中的普通单位',
			txhj_elangx: '太虚幻境中的普通单位',
			txhj_panjunzhenchabing: '太虚幻境中的普通单位',
			txhj_panjunshizu: '太虚幻境中的普通单位',
			txhj_fennudeyezhu: '太虚幻境中的普通单位',
			txhj_duanwei: '太虚幻境中的普通单位',
			txhj_handiliuxie: '太虚幻境中的普通单位',
			txhj_molijue: '太虚幻境中的终极敌人',
			txhj_feixiongjingrui: '太虚幻境中的普通单位',
			txhj_kuangcaijun: '太虚幻境中的普通单位',
			txhj_wuxi: '太虚幻境中的普通单位',
			txhj_moguosi: '太虚幻境中的终极敌人',
			txhj_situwangyun: '太虚幻境中的普通单位',
			txhj_dushi: '太虚幻境中的普通单位',
			txhj_jiawenhe: '太虚幻境中的精英敌人',
			txhj_baolveqi: '太虚幻境中的普通单位',
			txhj_longxiangqi: '太虚幻境中的普通单位',
			txhj_tdsunjian: '太虚幻境中的普通单位',
			txhj_jianghuaxiong: '太虚幻境中的精英敌人',
			txhj_longxiangjun: '太虚幻境中的普通单位',
			txhj_mozhangji: '太虚幻境中的精英敌人',
			txhj_matengy: '太虚幻境中的普通单位',
			txhj_hubenjun: '太虚幻境中的普通单位',
			txhj_fanchou: '太虚幻境中的精英敌人',
			txhj_wangfang: '太虚幻境中的普通单位',
			txhj_limeng: '太虚幻境中的普通单位',
			txhj_huchier: '太虚幻境中的普通单位',
			txhj_niufu: '太虚幻境中的精英敌人',
			txhj_dongxie: '太虚幻境中的精英敌人',
			txhj_fengyaojun: '太虚幻境中的普通单位',
			txhj_dongmin: '太虚幻境中的普通单位',
			txhj_dongbai: '太虚幻境中的普通单位',
			txhj_xurongy: '太虚幻境中的普通单位',
			txhj_huzheny: '太虚幻境中的普通单位',
			txhj_jianglijue: '太虚幻境中的精英敌人',
			txhj_baolvejun: '太虚幻境中的普通单位',
			txhj_dongyue: '太虚幻境中的精英敌人',
			txhj_jinweijunx: '太虚幻境中的普通单位',
			txhj_xiaoweijunx: '太虚幻境中的普通单位',
			txhj_feixiongjunyou: '太虚幻境中的普通单位',
			txhj_feixiongjunzuo: '太虚幻境中的普通单位',
			txhj_huangfusongy: '太虚幻境中的普通单位',
			/*黄巾之乱-国服*/
			txhj_hjzhujun: '太虚幻境中的普通单位',
			txhj_huangjinzhangyan: '太虚幻境中的精英敌人',
			txhj_hanjiangsunjian: '太虚幻境中的普通单位',
			txhj_huangfusongxx: '太虚幻境中的普通单位',
			txhj_huangjinyuzhong: '太虚幻境中的普通单位',
			txhj_digongzhangbao: '太虚幻境中的终极敌人',
			txhj_digongzhangbao: '太虚幻境中的精英敌人',
			txhj_huangfusongx: '太虚幻境中的普通单位',
			txhj_gaosheng: '太虚幻境中的精英敌人',
			txhj_rengongzhangliang: '太虚幻境中的精英敌人',
			txhj_tiangongzhangjiaox: '太虚幻境中的精英敌人',
			txhj_buji: '太虚幻境中的精英敌人',
			txhj_zhangmancheng: '太虚幻境中的精英敌人',
			txhj_bossbocai: '太虚幻境中的精英敌人',
			txhj_huangjinqianfengx: '太虚幻境中的普通单位',
			txhj_huangjinjingrui: '太虚幻境中的普通单位',
			txhj_huangjinyushix: '太虚幻境中的普通单位',
			txhj_huangjinshizu: '太虚幻境中的普通单位',
			txhj_huangjintongling: '太虚幻境中的普通单位',
			txhj_huangjinqibing: '太虚幻境中的普通单位',
			txhj_huangjinfujiang: '太虚幻境中的普通单位',
			txhj_bossdengmao: '太虚幻境中的精英敌人',
			txhj_huangjinyudang: '太虚幻境中的普通单位',
			txhj_huangjinyaoshushi: '太虚幻境中的普通单位',
			txhj_huangjinqianfeng: '太虚幻境中的普通单位',
			txhj_huangjindaobing: '太虚幻境中的普通单位',
			txhj_hanjunluzhi: '太虚幻境中的普通单位',
			txhj_huangjinxiaobing: '太虚幻境中的普通单位',
			txhj_hanjunluzhix: '太虚幻境中的普通单位',
			txhj_peiyuanshaox: '太虚幻境中的普通单位',
			txhj_tiangongzhangjiao: '太虚幻境中的精英敌人',
			/*何进诛宦*/
			txhj_huanguan: '太虚幻境中的普通单位',
			txhj_huanguandaofushou: '太虚幻境中的普通单位',
			txhj_hetaihou: '太虚幻境中的普通单位',
			txhj_dongtaihou: '太虚幻境中的普通单位',
			txhj_baohong: '太虚幻境中的普通单位',
			txhj_xiaoweijun: '太虚幻境中的普通单位',
			txhj_chunyuqiong: '太虚幻境中的普通单位',
			txhj_jinweijun: '太虚幻境中的普通单位',
			txhj_zhaorong: '太虚幻境中的普通单位',
			txhj_zhaozhong: '太虚幻境中的普通单位',
			txhj_yuanshao: '太虚幻境中的普通单位',
			txhj_yuanshu: '太虚幻境中的普通单位',
			txhj_caocao: '太虚幻境中的普通单位',
			txhj_xuyou: '太虚幻境中的普通单位',
			txhj_jianshuo: '太虚幻境中的精英敌人',
			txhj_huanyanzhangrang: '太虚幻境中的终极敌人',
			txhj_huanyanhejin: '太虚幻境中的终极敌人',
			/*黄天之怒*/
			txhj_huangjinxinjun: '太虚幻境中的普通单位',
			txhj_guanhai: '太虚幻境中的普通单位',
			txhj_peiyuanshao: '太虚幻境中的普通单位',
			txhj_huangjinmengqi: '太虚幻境中的普通单位',
			txhj_dengmao: '太虚幻境中的普通单位',
			txhj_dongzhuo: '太虚幻境中的普通单位',
			txhj_bocai: '太虚幻境中的普通单位',
			txhj_huangjinyaoshi: '太虚幻境中的普通单位',
			txhj_huangjinyushi: '太虚幻境中的普通单位',
			txhj_huangfusong: '太虚幻境中的普通单位',
			txhj_zhujun: '太虚幻境中的普通单位',
			txhj_changyuanshibing: '太虚幻境中的普通单位',
			txhj_huanyanzhangliang: '太虚幻境中的精英敌人',
			txhj_huanyanzhangbao: '太虚幻境中的精英敌人',
			txhj_huanyanzhangjiaoshi: '太虚幻境中的终极敌人',
			txhj_huanyanzhangjiaolei: '太虚幻境中的终极敌人',
			txhj_huanyanzhangjiaohuo: '太虚幻境中的终极敌人',
			txhj_huanyanzhangjiaofeng: '太虚幻境中的终极敌人',
			/*冲应初临*/
			txhj_huanjingshouhutongzi: '太虚幻境中的普通单位',
			txhj_elang: '太虚幻境中的普通单位',
			txhj_huanjingweishi: '太虚幻境中的普通单位',
			txhj_tonghu: '太虚幻境中的普通单位',
			txhj_huanxiangbingnv: '太虚幻境中的普通单位',
			txhj_huanxiangbingnan: '太虚幻境中的普通单位',
			txhj_shouhudizi: '太虚幻境中的普通单位',
			txhj_lingjitongren: '太虚幻境中的普通单位',
			txhj_fuguangtongren: '太虚幻境中的普通单位',
			txhj_shenjunbaima: '太虚幻境中的普通单位',
			txhj_guojiahuanxiang: '太虚幻境中的普通单位',
			txhj_zhicaihuanxiang: '太虚幻境中的普通单位',
			txhj_wolonghuanxiang: '太虚幻境中的普通单位',
			txhj_fengchuhuanxiang: '太虚幻境中的普通单位',
			txhj_zhouyuhuanxiang: '太虚幻境中的普通单位',
			txhj_luxunhuanxiang: '太虚幻境中的普通单位',
			txhj_jiaxuhuanxiang: '太虚幻境中的普通单位',
			txhj_dianweihuanxiang: '太虚幻境中的普通单位',
			txhj_xuchuhuanxiang: '太虚幻境中的普通单位',
			txhj_guanyuhuanxiang: '太虚幻境中的普通单位',
			txhj_zhangfeihuanxiang: '太虚幻境中的普通单位',
			txhj_ganninghuanxiang: '太虚幻境中的普通单位',
			txhj_lingtonghuanxiang: '太虚幻境中的普通单位',
			txhj_lvbuhuanxiang: '太虚幻境中的普通单位',
			txhj_caorenhuanxiang: '太虚幻境中的普通单位',
			txhj_zhaoyunhuanxiang: '太虚幻境中的普通单位',
			txhj_zhoutaihuanxiang: '太虚幻境中的普通单位',
			txhj_shangjianghuanxiang: '太虚幻境中的普通单位',
			txhj_hunduntongren: '太虚幻境中的普通单位',
			txhj_moou: '太虚幻境中的普通单位',
			txhj_mowangzhizhong: '太虚幻境中的普通单位',
			txhj_chi: '太虚幻境中的普通单位',
			txhj_mei: '太虚幻境中的普通单位',
			txhj_wang: '太虚幻境中的普通单位',
			txhj_liang: '太虚幻境中的普通单位',
			txhj_huanshenguanyu: '太虚幻境中的精英敌人',
			txhj_huanshenlvmeng: '太虚幻境中的精英敌人',
			txhj_huanshenzhouyu: '太虚幻境中的精英敌人',
			txhj_huanshenzhuge: '太虚幻境中的精英敌人',
			txhj_huanshencaocao: '太虚幻境中的精英敌人',
			txhj_huanshenlvbu: '太虚幻境中的精英敌人',
			txhj_huanshenzhaoyun: '太虚幻境中的精英敌人',
			txhj_huanshensima: '太虚幻境中的精英敌人',
			txhj_yongwuhuanxiang: '太虚幻境中的普通单位',
			txhj_jianshouhuanxiang: '太虚幻境中的普通单位',
			txhj_huoxinhuanxiang: '太虚幻境中的普通单位',
			txhj_manyanhuanxiang: '太虚幻境中的普通单位',
			txhj_yinhuanxiang: '太虚幻境中的普通单位',
			txhj_yanghuanxiang: '太虚幻境中的普通单位',
			txhj_heiwuchanghuanxiang: '太虚幻境中的普通单位',
			txhj_baiwuchanghuanxiang: '太虚幻境中的普通单位',
			txhj_niutouhuanxiang: '太虚幻境中的普通单位',
			txhj_mamianhuanxiang: '太虚幻境中的普通单位',
			txhj_qianchaotongren: '太虚幻境中的普通单位',
			txhj_hanlingdi: '太虚幻境中的普通单位',
			txhj_baxiaoweishouling: '太虚幻境中的普通单位',
			txhj_shiemoxing: '太虚幻境中的精英敌人',
			txhj_wujiaoxinmo: '太虚幻境中的终极敌人',
			txhj_huanjinglingzhu: '太虚幻境中的终极敌人',
			txhj_tongrenjumo: '太虚幻境中的精英敌人',
			txhj_tiaopibubu: '太虚幻境中的精英敌人',
			txhj_tianjijushou: '太虚幻境中的普通单位',
			/*轮回之境*/
			txhj_mouzhouyu: '太虚幻境中的终极敌人',
			txhj_tianyu: '太虚幻境中的普通单位',
			txhj_tiankai: '太虚幻境中的普通单位',
			txhj_motaishici: '太虚幻境中的终极敌人',
			txhj_bingzhoulangqi: '太虚幻境中的普通单位',
			txhj_madai: '太虚幻境中的普通单位',
			txhj_machao: '太虚幻境中的普通单位',
			txhj_mayunlu: '太虚幻境中的普通单位',
			txhj_mamidi: '太虚幻境中的普通单位',
			txhj_leibo: '太虚幻境中的普通单位',
			txhj_cike: '太虚幻境中的普通单位',
			txhj_bossquyi: '太虚幻境中的终极敌人',
			txhj_xianyufu: '太虚幻境中的普通单位',
			txhj_jyyuanshao: '太虚幻境中的普通单位',
			txhj_beimihu: '太虚幻境中的终极敌人',
			txhj_kaisa: '太虚幻境中的普通单位',
			txhj_nansheme: '太虚幻境中的普通单位',
			txhj_bianjiangweishi: '太虚幻境中的普通单位',
			txhj_suweihuqiqq: '太虚幻境中的普通单位',
			txhj_zhangzi: '太虚幻境中的普通单位',
			txhj_resunjian: '太虚幻境中的普通单位',
			txhj_relvbu: '太虚幻境中的普通单位',
			txhj_spdiaochan: '太虚幻境中的普通单位',
			txhj_sufei: '太虚幻境中的普通单位',
			txhj_xganning: '太虚幻境中的普通单位',
			txhj_sunquan: '太虚幻境中的普通单位',
			txhj_moxiaoqiao: '太虚幻境中的终极敌人',
			txhj_redaqiao: '太虚幻境中的普通单位',
			txhj_modaqiao: '太虚幻境中的终极敌人',
			txhj_rexiaoqiao: '太虚幻境中的普通单位',
			txhj_suweihuqiay: '太虚幻境中的普通单位',
			txhj_caocaox: '太虚幻境中的普通单位',
			txhj_caohong: '太虚幻境中的普通单位',
			txhj_niufudongxie: '太虚幻境中的普通单位',
			txhj_handang: '太虚幻境中的精英敌人',
			txhj_jiangqing: '太虚幻境中的精英敌人',
			txhj_caobao: '太虚幻境中的普通单位',
			txhj_rezhangfei: '太虚幻境中的普通单位',
			txhj_gongsunxv: '太虚幻境中的普通单位',
			txhj_gongsunyue: '太虚幻境中的普通单位',
			txhj_mozhangliao: '太虚幻境中的精英敌人',
			txhj_songxian: '太虚幻境中的普通单位',
			txhj_yuanshaoyou: '太虚幻境中的普通单位',
			txhj_gongsunfan: '太虚幻境中的精英敌人',
			txhj_liuxie: '太虚幻境中的普通单位',
			txhj_fuwan: '太虚幻境中的普通单位',
			txhj_lingju: '太虚幻境中的普通单位',
			txhj_guanyu: '太虚幻境中的普通单位',
			txhj_zhoucang: '太虚幻境中的普通单位',
			txhj_guanping: '太虚幻境中的普通单位',
			txhj_xusheng: '太虚幻境中的普通单位',
			txhj_shenganningx: '太虚幻境中的普通单位',
			txhj_sunguan: '太虚幻境中的普通单位',
			txhj_hubaoqi: '太虚幻境中的普通单位',
			txhj_zangba: '太虚幻境中的普通单位',
			txhj_houcheng: '太虚幻境中的普通单位',
			txhj_rezhouyu: '太虚幻境中的普通单位',
			txhj_huanggai: '太虚幻境中的普通单位',
			txhj_chengpu: '太虚幻境中的普通单位',
			txhj_xurong: '太虚幻境中的精英敌人',
			txhj_huzhen: '太虚幻境中的普通单位',
			txhj_zumao: '太虚幻境中的普通单位',
			txhj_sunjian: '太虚幻境中的普通单位',
			txhj_guanqiujian: '太虚幻境中的普通单位',
			txhj_wangling: '太虚幻境中的普通单位',
			txhj_zhugedan: '太虚幻境中的普通单位',
			txhj_shensimayi: '太虚幻境中的普通单位',
			txhj_simashi: '太虚幻境中的普通单位',
			txhj_simazhao: '太虚幻境中的普通单位',
			txhj_spcaiwenji: '太虚幻境中的普通单位',
			txhj_wangyi: '太虚幻境中的普通单位',
			txhj_zhangchunhua: '太虚幻境中的普通单位',
			txhj_spcaocao: '太虚幻境中的普通单位',
			txhj_qinyilu: '太虚幻境中的普通单位',
			txhj_dufuren: '太虚幻境中的普通单位',
			txhj_dongxi: '太虚幻境中的普通单位',
			txhj_chenwu: '太虚幻境中的普通单位',
			txhj_lvmeng: '太虚幻境中的普通单位',
			txhj_lvfan: '太虚幻境中的普通单位',
			txhj_zhangzhao: '太虚幻境中的普通单位',
			txhj_zhanghong: '太虚幻境中的普通单位',
			txhj_xuelan: '太虚幻境中的普通单位',
			txhj_houkai: '太虚幻境中的普通单位',
			txhj_xianzhenying: '太虚幻境中的普通单位',
			txhj_baimayicong: '太虚幻境中的普通单位',
			txhj_huanjingnantong: '太虚幻境中的普通单位',
			txhj_baimaxiaoqi: '太虚幻境中的普通单位',
			txhj_zoudan: '太虚幻境中的普通单位',
			txhj_luocha: '太虚幻境中的精英敌人',
			txhj_yecha: '太虚幻境中的精英敌人',
			txhj_dengai: '太虚幻境中的普通单位',
			txhj_jiangwei: '太虚幻境中的普通单位',
			txhj_zhonghui: '太虚幻境中的普通单位',
			txhj_zhugeliang: '太虚幻境中的普通单位',
			txhj_zhugeguo: '太虚幻境中的普通单位',
			txhj_huangyueying: '太虚幻境中的普通单位',
			txhj_spsunshangxiang: '太虚幻境中的普通单位',
			txhj_guanyinping: '太虚幻境中的普通单位',
			txhj_zhangxingcai: '太虚幻境中的普通单位',
			txhj_yanbaihu: '太虚幻境中的普通单位',
			txhj_wanglang: '太虚幻境中的普通单位',
			txhj_liuyao: '太虚幻境中的普通单位',
		},
		skill: {
			//待援
			txhj_daiyuan: {
				global: 'txhj_daiyuan2', //全场调用此技能
				forced: true,
				ai: {
					threaten: 2,
				},
			},
			txhj_daiyuan2: {
				enable: 'phaseUse',
				forced: true,
				filter(event, player) {
					if (
						player.hasSkill('txhj_daiyuan') ||
						!game.hasPlayer(function (target) {
							return target.hasSkill('txhj_daiyuan') && target.isDamaged();
						})
					)
						return false;
					if (player.hasSkill('txhj_daiyuanA') && player.hasSkill('txhj_daiyuanB')) return false;
					var num = player.countCards('he');
					if (num < 2) return false;
					var c = player.getCards('he')[0];
					var num1 = player.countCards('he', (ca) => get.color(ca, player) == get.color(c, player));
					var num2 = player.countCards('he', (ca) => get.type2(ca, player) == get.type2(c, player));
					if (player.hasSkill('txhj_daiyuanB') && num1 == num) return false;
					else if (player.hasSkill('txhj_daiyuanA') && num2 == num) return false;
					else return num1 + num2 < 2 * num;
				},
				content() {
					'step 0';
					var list = ['选项一', '选项二', 'cancel2'];
					if (player.hasSkill('txhj_daiyuanA')) {
						list.remove('选项一');
					}
					if (player.hasSkill('txhj_daiyuanB')) {
						list.remove('选项二');
					}
					var str = '弃置两张XX不同的牌,令【待援】角色回复一点体力';
					str = [str.replace(/XX/g, '颜色'), str.replace(/XX/g, '类型')];
					player
						.chooseControl(list)
						.set('choiceList', str)
						.set('ai', function () {
							if (player.countCards('he', (card) => get.value(card) < 6 && player.countCards('he', (card1) => card != card1 && get.color(card, player) != get.color(card1, player) && get.value(card1) < 6) > 0) && list.includes('选项一')) return '选项一';
							if (player.countCards('he', (card) => get.value(card) < 6 && player.countCards('he', (card1) => card != card1 && get.type2(card, player) != get.type2(card1, player) && get.value(card1) < 6) > 0) && list.includes('选项二')) return '选项二';
							return 'cancel2';
						});
					('step 1');
					if (result.control != 'cancel2') {
						event.control = result.control;
						event.filter1 = function (card) {
							var color = get.color(card);
							if (Array.isArray(ui.selected.cards))
								for (var i of ui.selected.cards) {
									if (get.color(i) == color) return false;
								}
							return true;
						};
						event.filter2 = function (card) {
							var type2 = get.type2(card);
							if (Array.isArray(ui.selected.cards))
								for (var i of ui.selected.cards) {
									if (get.type2(i) == type2) return false;
								}
							return true;
						};
						var next = player.chooseToDiscard(2, 'he');
						next.set('ai', function (card) {
							return 6 - get.value(card);
						});
						next.set('complexCard', true);
						if (result.control == '选项一') {
							next.set('filterCard', event.filter1);
							next.set('prompt2', '弃置两张颜色不同的牌');
						} else if (result.control == '选项二') {
							next.set('filterCard', event.filter2);
							next.set('prompt2', '弃置两张类型不同的牌');
						}
					} else event.finish();
					('step 2');
					if (result.bool) {
						if (event.control == '选择一') {
							player.addTempSkill('txhj_daiyuanA');
						} else if (event.control == '选择二') {
							player.addTempSkill('txhj_daiyuanB');
						}
						var target = game.findPlayer(function (current) {
							return current.hasSkill('txhj_daiyuan') && current.isDamaged();
						});
						player.line(target, 'green');
						target.recover();
					}
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							var target = game.findPlayer(function (target) {
								return target.hasSkill('txhj_daiyuan') && target.isDamaged();
							});
							if (get.attitude(player, target) < 0) return 0;
							var list = ['选项一', '选项二', 'cancel2'];
							if (player.hasSkill('txhj_daiyuanA')) {
								list.remove('选项一');
							}
							if (player.hasSkill('txhj_daiyuanB')) {
								list.remove('选项二');
							}
							if (player.countCards('he', (ca) => get.value(ca) < 6 && player.countCards('he', (c) => ca != c && get.color(ca, player) != get.color(c, player) && get.value(c) < 6)) > 0 && list.includes('选项一')) return 1;
							if (player.countCards('he', (ca) => get.value(ca) < 6 && player.countCards('he', (c) => ca != c && get.type2(ca, player) != get.type2(c, player) && get.value(c) < 6)) > 0 && list.includes('选项二')) return 1;
							return 0;
						},
					},
					threaten: 5.7,
				},
			},
			txhj_daiyuanA: {
				mark: true,
				marktext: '★️',
				intro: {
					name: '待援·颜色',
					content: '本回合已发动过【待援】选项一',
				},
			},
			txhj_daiyuanB: {
				mark: true,
				marktext: '○',
				intro: {
					name: '待援·类型',
					content: '本回合已发动【待援】选项二',
				},
			},
			//------------------------//
			//醉酒
			txhj_zuijiu: {
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					//限制事件卡牌必须为杀,notlink限制没有相关的加伤事件叠加.如果两个加伤技能的过滤器里面都有notlink判断,只触发其中一个.
					return event.card && event.card.name == 'sha' && event.notLink();
				},
				forced: true,
				content() {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
			//-------------------------//
			//暴击
			txhj_baoji: {
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					//醉酒改动一下,就OK.默认概率40%触发.如果选项里开启了幸运星模式则百分百触发.
					return get.isLuckyStar(player) || (event.card && event.card.name == 'sha' && event.getRand() < 0.4);
				},
				forced: true,
				content() {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
			//-------------------------//
			//拘魂
			txhj_juhun: {
				group: ['txhj_juhun_phase', 'txhj_juhun_die'],
				subSkill: {
					phase: {
						trigger: {
							player: 'phaseAfter',
						},
						_priority: -15,
						forced: true,
						content() {
							player.storage.txhj_juhun = true;
						},
					},
					die: {
						trigger: {
							global: 'die',
						},
						_priority: -15,
						marktext: '拘魂',
						forced: true,
						filter(event, player) {
							if (!player.storage.txhj_juhun) return false;
							return event.player.side == player.side;
						},
						content() {
							'step 0';
							if (!player.storage.txhj_juhun_die) {
								player.storage.txhj_juhun_die = [];
							}
							('step 1');
							player.storage.txhj_juhun_die.push(trigger.player);
							player.markSkill('txhj_juhun_die');
						},
						intro: {
							name: '上回合阵亡的友军',
							content: 'player',
						},
					},
				},
				trigger: {
					player: 'phaseBegin',
				},
				_priority: 1,
				forced: true,
				filter(event, player) {
					player.storage.txhj_juhun = false;
					if (!player.storage.txhj_juhun_die) player.storage.txhj_juhun_die = [];
					return player.storage.txhj_juhun_die.length;
				},
				init(player, skill) {
					player.storage.txhj_juhun = false;
				},
				content() {
					'step 0';
					var revive = player.storage.txhj_juhun_die.randomGet();
					revive.revive(3);
					game.addVideo('revive', revive);
					revive.draw(3);
					('step 1');
					player.storage.txhj_juhun_die = [];
					player.unmarkSkill('txhj_juhun_die');
				},
			},
			//----------------------------//
			//鬼魅
			txhj_guimei: {
				forced: true,
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'delay') {
							return false;
						}
					},
				},
				ai: {
					threaten: 2.7,
				},
			},
			//--------------------------//
			//暴敛
			txhj_baolian: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				preHidden: true,
				content() {
					player.draw(2);
				},
			},
			//-------------------------//
			//悲鸣
			txhj_beiming: {
				trigger: { player: 'dieBegin' },
				forced: true,
				filter(event, player) {
					return event.source != undefined;
				},
				content() {
					trigger.source.discard(trigger.source.getCards('h'));
				},
				ai: {
					threaten: 0.7,
				},
			},
			//----------------------//
			//狂暴
			txhj_kuangbao: {
				trigger: {
					source: 'damageBegin',
				},
				forced: true,
				init(player, storage) {
					player.storage.txhj_kuangbao = 0;
					player.syncStorage('txhj_kuangbao');
					player.markSkill('txhj_kuangbao');
				},
				mark: true,
				marktext: '狂暴',
				intro: {
					name: '狂暴',
					content: '造成的伤害+#',
				},
				filter(event, player) {
					return player.storage.txhj_kuangbao >= 1;
				},
				content() {
					var num = player.storage.txhj_kuangbao;
					trigger.num += n;
				},
				group: ['txhj_add', 'txhj_clear'],
				ai: {
					threaten: 3.7,
				},
			},
			//每轮开始记录一次,如果满足七轮条件,增加伤害收益
			txhj_add: {
				trigger: {
					global: 'roundStart',
				},
				mark: true,
				marktext: '⑦',
				intro: {
					name: '⑦',
					content: '已经连续#轮未进入濒死状态.',
				},
				init(player, storage) {
					player.storage.txhj_add = 0;
					player.syncStorage('txhj_add');
					player.markSkill('txhj_add');
				},
				forced: true,
				_priority: 10,
				filter(event, player) {
					return !player.hasSkill('txhj_debuff') && game.roundNumber != 1;
				},
				content() {
					'step 0';
					player.storage.txhj_add++;
					player.syncStorage('txhj_add');
					player.markSkill('txhj_add');
					('step 1');
					if (player.storage.txhj_add == 7) {
						var num = player.storage.txhj_add;
						player.storage.txhj_add -= num;
						player.syncStorage('txhj_add');
						player.unmarkSkill('txhj_add');
						player.storage.txhj_kuangbao++;
						player.syncStorage('txhj_kuangbao');
						player.markSkill('txhj_kuangbao');
					}
				},
			},
			//进入濒死时,清空记录,并加上一个临时技能,用于判断.
			txhj_clear: {
				trigger: {
					player: 'dying',
				},
				forced: true,
				content() {
					'step 0';
					if (player.storage.txhj_add > 0) {
						var num = player.storage.txhj_add;
						player.storage.txhj_add -= num;
						player.syncStorage('txhj_add');
						player.unmarkSkill('txhj_add');
					}
					('step 1');
					if (!player.hasSkill('txhj_debuff')) {
						player.addSkill('txhj_debuff');
					}
				},
			},
			//进入濒死时,加上这个临时技能.
			txhj_debuff: {
				trigger: {
					global: 'roundStart',
				},
				forced: true,
				mark: true,
				marktext: '溃败',
				intro: {
					name: '溃败',
					content: '已进入过濒死状态,【狂暴】将于新的一轮重新计算.',
				},
				_priority: 1 /*技能发动的优先级,考虑到要判断轮数结算,把它排在狂暴技能结算之后.*/,
				content() {
					player.removeSkill('txhj_debuff');
				},
			},
			//--------------------------//
			//吞噬
			txhj_tunshi: {
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				filter(event, player, target) {
					return game.hasPlayer(function (target) {
						return target.isEnemyOf(player) && target.countCards('h') > player.countCards('h');
					});
				},
				content() {
					'step 0';
					player.chooseTarget(
						get.prompt('txhj_tunshi'),
						function (card, player, target) {
							return target.isEnemyOf(player) && target.countCards('h') > player.countCards('h');
						},
						true
					).ai = function (target) {
						var att = get.attitude(player, target);
						return -att;
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage();
					}
				},
				ai: {
					threaten: 2.7,
				},
			},
			//--------------------------//
			//穿云
			txhj_chuanyun: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				filter(event, player, target) {
					return game.hasPlayer(function (target) {
						return target.isEnemyOf(player) && target.hp > player.hp;
					});
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txhj_chuanyun'), function (card, player, target) {
						return target.isEnemyOf(player) && target.hp > player.hp;
					}).ai = function (target) {
						var att = get.attitude(player, target);
						return -att;
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage();
					}
				},
				ai: {
					threaten: 1.7,
				},
			},
			//------------------------//
			//鬼火
			txhj_guihuo: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txhj_guihuo'), function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'fire');
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage('fire');
					}
				},
			},
			//-----------------------//
			//落雷
			txhj_luolei: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txhj_luolei'), function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'thunder');
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage('thunder');
					}
				},
			},
			//亡阻
			txhj_wangzu: {
				trigger: {
					player: 'dieBegin',
				},
				filter(event, player) {
					return _status.currentPhase != player;
				},
				forced: true,
				_priority: 10,
				content() {
					var evt = _status.event.getParent('phaseUse');
					if (evt && evt.name == 'phaseUse') {
						evt.skipped = true;
						game.log(player, '发动了【亡阻】');
						event.finish();
					}
				},
				ai: {
					threaten: 5.7,
				},
			},
			/*黄天之怒*/
			//------黄巾------//
			txhj_huangjin: {
				trigger: {
					target: 'useCardToTarget',
				},
				filter(event, player) {
					return get.name(event.card) == 'sha';
				},
				forced: true,
				content() {
					'step 0';
					player.judge(function (result) {
						var a = Math.abs(get.number(trigger.card) - result.number);
						if (a <= 1) return 1;
						return -1;
					});
					('step 1');
					if (result.bool) {
						trigger.parent.targets.length = 0;
						trigger.parent.all_excluded = true;
						game.log(trigger.card, '对', player, '无效');
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			//------咒诅------//
			txhj_zhouzu: {
				audio: 2,
				mahouSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasSkill('txhj_zhouzu_mahou');
					});
				},
				filterTarget(card, player, target) {
					return target != player && !target.hasSkill('txhj_zhouzu_mahou');
				},
				content() {
					'step 0';
					player
						.chooseControl('1回合', '2回合', '3回合')
						.set('prompt', '请选择施法时长')
						.set('ai', function () {
							var player = _status.event.player;
							var safe = player.hp;
							if (safe < Math.min(3, game.countPlayer())) {
								var next = player.next;
								while (next != player && get.attitude(next, player) > 0) {
									safe++;
									next = next.next;
								}
							}
							return Math.max(1, Math.min(safe, 3, game.countPlayer())) - 1;
						});
					('step 1');
					if (!player.storage.txhj_zhouzu_mahou) {
						player.storage.txhj_zhouzu_mahou = [result.index + 1, result.index + 1, target];
					}
					player.addTempSkill('txhj_zhouzu_mahou', { player: 'die' });
				},
				ai: {
					damage: true,
					thunderAttack: true,
					threaten: 2.5,
					order: 7,
					result: {
						target(player, target) {
							var eff = get.damageEffect(target, player, target, 'thunder');
							return eff;
						},
					},
				},
				subSkill: {
					mahou: {
						trigger: { global: 'phaseEnd' },
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							var list = player.storage.txhj_zhouzu_mahou;
							list[1]--;
							if (list[1] == 0) {
								game.log(player, '的<咒诅>魔法生效');
								var num = list[0];
								var target = list[2];
								if (target && target.isAlive()) {
									player.line(target, 'thunder');
									target.chooseToDiscard(num, true, 'he');
									target.damage(1, 'thunder');
								}
								player.removeSkill('txhj_zhouzu_mahou');
							} else {
								game.log(player, '的<咒诅>魔法剩余', `#g${list[1]}回合`);
								player.markSkill('txhj_zhouzu_mahou');
							}
						},
						mark: true,
						marktext: '诅',
						intro: {
							name: '施法:咒诅',
							markcount(storage) {
								if (storage) return storage[0] + '-' + storage[1];
								return 0;
							},
							content(storage) {
								if (storage) {
									return `经过${storage[1]}个回合结束时,施法目标:${get.translation(storage[2])}受到一点雷电伤害,弃置${storage[0]}张牌`;
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			//------鬼门------//
			txhj_guimen: {
				trigger: {
					player: 'loseAfter',
				},
				forced: true,
				filter(event, player) {
					if (event.type != 'discard') return false;
					if (event.cards2) {
						for (var i = 0; i < event.cards2.length; i++) {
							if (get.suit(event.cards2[i], player) == 'spade') return true;
						}
					}
				},
				content() {
					'step 0';
					event.list = [];
					for (var i = 0; i < trigger.cards2.length; i++) {
						if (get.suit(trigger.cards2[i], player) == 'spade') event.list.push(trigger.cards2[i]);
						game.log(player, '弃置了', get.translation(trigger.cards2[i]));
					}
					event.count = event.list.length;
					('step 1');
					if (event.list.length) {
						var card = event.list[0];
						game.log('即将对失去的', card, '进行判定');
						player.judge(function (result) {
							var a = Math.abs(get.number(card) - result.number);
							if (a <= 1) {
								if (player.storage.txhj_guimen == undefined) player.storage.txhj_guimen = 0;
								player.markSkill('txhj_guimen');
								player.storage.txhj_guimen += 1;
								game.log('鬼门临时选择次数+1');
								player.syncStorage('txhj_guimen');
								return 1;
							}
							return -1;
						});
						event.count--;
						if (event.count > 0) {
							event.list.remove(event.list[0]);
							event.redo();
						}
					}
					('step 2');
					if (player.storage.txhj_guimen > 0) {
						player.chooseTarget(true, '选择一个目标对其造成两点雷电伤害', function (card, player, target) {
							return player != target;
						}).ai = function (target) {
							return get.damageEffect(target, player, player, 'thunder');
						};
					} else {
						event.finish();
					}
					('step 3');
					if (result.targets.length) {
						player.line(result.targets, 'thunder');
						result.targets[0].damage(2, 'thunder');
						player.storage.txhj_guimen--;
						player.syncStorage('txhj_guimen');
						event.goto(2);
					} else {
						var x = player.storage.txhj_guimen;
						player.storage.txhj_guimen -= x;
						player.syncStorage('txhj_guimen');
						player.unmarkSkill('txhj_guimen');
						game.log('我佛慈悲');
						event.finish();
					}
				},
				ai: {
					effect: {
						target(card) {
							if (get.tag(card, 'loseCard')) {
								return [0.5, 1];
							}
						},
					},
				},
			},
			//------妖术------//
			txhj_yaoshu: {
				mahouSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasSkill('txhj_yaoshu_mahou');
					});
				},
				filterTarget(card, player, target) {
					return target != player && !target.hasSkill('txhj_yaoshu_mahou');
				},
				content() {
					'step 0';
					player
						.chooseControl('1回合', '2回合', '3回合')
						.set('prompt', '请选择施法时长')
						.set('ai', function () {
							var player = _status.event.player;
							var safe = Math.min(player.getHandcardLimit(), player.countCards('h', 'shan'));
							if (safe < Math.min(3, game.countPlayer())) {
								var next = player.next;
								while (next != player && get.attitude(next, player) > 0) {
									safe++;
									next = next.next;
								}
							}
							return Math.max(2, Math.min(safe, 3, game.countPlayer())) - 1;
						});
					('step 1');
					if (!target.storage.txhj_yaoshu_mahou) {
						target.storage.txhj_yaoshu_mahou = [result.index + 1, result.index + 1];
					}
					target.addTempSkill('txhj_yaoshu_mahou', { player: 'die' });
				},
				ai: {
					order: 2,
					result: {
						player: 1,
						target: -0.5,
					},
				},
				subSkill: {
					mahou: {
						trigger: { global: 'phaseEnd' },
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							var list = player.storage.txhj_yaoshu_mahou;
							list[1]--;
							if (list[1] == 0) {
								game.log(player, '的<妖术>魔法生效');
								var num = list[0];
								player.addSkill('txhj_yaoshu_effect');
								player.addMark('txhj_yaoshu_effect', num, false);
								player.removeSkill('txhj_yaoshu_mahou');
							} else {
								game.log(player, '的<妖术>魔法剩余', `#g${list[1]}回合`);
								player.markSkill('txhj_yaoshu_mahou');
							}
						},
						mark: true,
						marktext: '妖',
						intro: {
							name: '施法:妖术',
							markcount(storage) {
								if (storage) return storage[0] + '-' + storage[1];
								return 0;
							},
							content(storage) {
								if (storage) {
									return `经过${storage[1]}个回合结束后,获得${storage[0]}层<卡牌无效>的效果`;
								}
								return '未指定施法效果';
							},
						},
					},
					effect: {
						charlotte: true,
						trigger: { player: ['useCardToBefore', 'useCard'] },
						forced: true,
						filter(event, player) {
							return player.hasMark('txhj_yaoshu_effect');
						},
						content() {
							trigger.targets.length = 0;
							trigger.all_excluded = true;
							game.log(trigger.card, '无效');
							player.removeMark('txhj_yaoshu_effect', 1, false);
							if (!player.countMark('txhj_yaoshu_effect')) player.removeSkill('txhj_yaoshu_effect');
						},
						marktext: '妖︎',
						intro: {
							content: '接下来使用或打出的#张牌无效',
						},
					},
				},
			},
			//------咒法------//
			txhj_zhoufa: {
				mahouSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.hasSkill('txhj_zhoufa_mahou');
					});
				},
				filterTarget(card, player, target) {
					return target != player && !target.hasSkill('txhj_zhoufa_mahou');
				},
				content() {
					'step 0';
					player
						.chooseControl('1回合', '2回合', '3回合')
						.set('prompt', '请选择施法时长')
						.set('ai', function () {
							var player = _status.event.player;
							var safe = 1;
							if (safe < Math.min(3, game.countPlayer(), player.getDamagedHp())) {
								var next = player.next;
								while (next != player && get.attitude(next, player) > 0) {
									safe++;
									next = next.next;
								}
							}
							return Math.max(1, Math.min(safe, 3, game.countPlayer(), player.getDamagedHp())) - 1;
						});
					('step 1');
					if (!player.storage.txhj_zhoufa_mahou) {
						player.storage.txhj_zhoufa_mahou = [result.index + 1, result.index + 1, target];
					}
					player.addTempSkill('txhj_zhoufa_mahou', { player: 'die' });
				},
				ai: {
					damage: true,
					thunderAttack: true,
					threaten: 5.5,
					order: 8,
					result: {
						target(player, target) {
							var eff = get.damageEffect(target, player, target, 'thunder');
							if (target.isLinked()) {
								return eff / 10;
							} else {
								return eff;
							}
						},
					},
				},
				subSkill: {
					mahou: {
						trigger: { global: 'phaseEnd' },
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							var list = player.storage.txhj_zhoufa_mahou;
							list[1]--;
							if (list[1] == 0) {
								game.log(player, '的<咒法>魔法生效');
								var num = list[0];
								var target = list[2];
								if (target && target.isAlive()) {
									player.line(target, 'thunder');
									target.damage(num, 'thunder');
								}
								player.removeSkill('txhj_zhoufa_mahou');
							} else {
								game.log(player, '的<咒法>魔法剩余', `#g${list[1]}回合`);
								player.markSkill('txhj_zhoufa_mahou');
							}
						},
						mark: true,
						marktext: '法',
						intro: {
							name: '施法:咒法',
							markcount(storage) {
								if (storage) return storage[0] + '-' + storage[1];
								return 0;
							},
							content(storage) {
								if (storage) {
									return `经过${storage[1]}个回合结束时后,施法目标:${get.translation(storage[2])}受到${storage[0]}点雷电伤害`;
								}
								return '未指定施法效果';
							},
						},
					},
				},
			},
			//------尸怨------//
			txhj_shiyuan: {
				forced: true,
				_priority: 1,
				trigger: {
					source: 'damageBegin1',
				},
				group: ['txhj_shiyuan_die', 'txhj_shiyuan_fuhuo'],
				content() {
					trigger.num++;
				},
				subSkill: {
					die: {
						trigger: {
							player: 'dying',
						},
						forced: true,
						_priority: 4,
						content() {
							player.die();
							game.log(player, '因【尸怨】直接死亡.');
						},
					},
					fuhuo: {
						trigger: {
							source: ['dieAfter'],
						},
						_priority: 5,
						forced: true,
						filter(event, player) {
							if (player.identity == 'zhu' || event.player.identity == 'zhu') return false;
							return event.player != player;
						},
						content() {
							'step 0';
							var target = trigger.player;
							target.side = player.side;
							target.identity = player.identity;
							target.setIdentity(get.translation(player.identity));
							target.node.identity.dataset.color = player.identity;
							target.init('txhj_changyuanshibing');
							target.maxHp = 3;
							target.revive(Infinity);
							target.draw(4);
							target.update();
						},
					},
				},
			},
			//------人望------//
			txhj_renwang: {
				trigger: {
					player: 'loseAfter',
					global: 'cardsDiscardAfter',
				},
				forced: true,
				marktext: '方',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				mod: {
					maxHandcard(player, num) {
						if (player.getExpansions('txhj_renwang')) {
							return num + player.getExpansions('txhj_renwang').length;
						} else {
							return num;
						}
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha') {
							if (player.getExpansions('txhj_renwang')) {
								return num + Math.ceil(player.getExpansions('txhj_renwang').length / 5);
							} else {
								return num;
							}
						}
					},
				},
				filter(event, player) {
					if (event.type == 'discard') return false;
					var evt = event.parent;
					if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player != player || !['useCard', 'respond'].includes(evt.relatedEvent.name)) return false;
					return (event.cards2 || event.cards).filterInD('d').length;
				},
				content() {
					var card = trigger.cards[0];
					player.addToExpansion(card, 'gain2').gaintag.add('txhj_renwang');
				},
			},
			//------人方------//
			txhj_renfang: {
				audio: 2,
				mahouSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return !player.hasSkill('txhj_renfang_mahou') && player.getExpansions('txhj_renwang').length >= 36;
				},
				prompt: '是否移去36张<方>,并施法？',
				content() {
					'step 0';
					var list = player.getExpansions('txhj_renwang');
					player.loseToDiscardpile(list.slice(0, 36));
					player
						.chooseControl('1回合', '2回合', '3回合')
						.set('prompt', '请选择施法时长')
						.set('ai', function () {
							var player = _status.event.player;
							var safe = 1;
							if (safe < Math.min(3, game.countPlayer(), player.getDamagedHp())) {
								var next = player.next;
								while (next != player && get.attitude(next, player) > 0) {
									safe++;
									next = next.next;
								}
							}
							return Math.max(1, Math.min(safe, 3, game.countPlayer(), player.getDamagedHp())) - 1;
						});
					('step 1');
					player.storage.txhj_renfang_mahou = [result.index + 1, result.index + 1];
					player.addTempSkill('txhj_renfang_mahou', { player: 'die' });
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
				subSkill: {
					mahou: {
						trigger: { global: 'phaseEnd' },
						_priority: 2,
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							'step 0';
							var list = player.storage.txhj_renfang_mahou;
							list[1]--;
							if (list[1] == 0) {
								game.log(player, '的<人方>魔法生效');
								player.markSkill('txhj_renfang_mahou');
								event.count = list[0];
								event.goto(1);
							} else {
								game.log(player, '的<人方>魔法剩余', `#g${list[1]}回合`);
								player.markSkill('txhj_renfang_mahou');
								event.finish();
							}
							('step 1');
							event.count--;
							player.chooseTarget(true, '选择一个目标对其造成36点雷电伤害', function (card, player, target) {
								return player != target && !target.hasSkill('txhj_renfang_miss');
							}).ai = function (target) {
								return get.damageEffect(target, player, player, 'thunder');
							};
							('step 2');
							if (result.targets.length) {
								player.line(result.targets, 'thunder');
								result.targets[0].damage(36, 'thunder');
								result.targets[0].addTempSkill('txhj_renfang_miss');
								if (event.count > 0) {
									event.goto(1);
								} else {
									player.removeSkill('txhj_renfang_mahou');
									event.finish();
								}
							} else {
								player.removeSkill('txhj_renfang_mahou');
								event.finish();
							}
						},
						mark: true,
						marktext: '⚡️',
						intro: {
							name: '施法:人方',
							markcount(storage) {
								if (storage) return storage[0] + '-' + storage[1];
								return 0;
							},
							content(storage) {
								if (storage) {
									return `经过${storage[1]}个<回合结束时>后,依次选择${storage[0]}名其他角色,对其各造成36点雷电伤害`;
								}
								return '未指定施法效果';
							},
						},
					},
					miss: {
						forced: true,
					},
				},
			},
			//------地咒------//
			txhj_dizhou: {
				trigger: {
					player: ['phaseBegin', 'phaseEnd'],
				},
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard('he', get.prompt('txhj_dizhou'), '将一张牌作为<地咒>置于武将牌上').set('ai', function (card) {
						if (player.getExpansions('txhj_dizhou')) {
							var suit = get.suit(card);
							for (var i of player.getExpansions('txhj_dizhou')) {
								if (get.suit(i, false) == suit) return 4 - get.value(card);
							}
						}
						return 5.5 - get.value(card);
					});
					('step 1');
					if (result.bool) {
						var card = result.cards[0];
						player.addToExpansion(card, 'gain2').gaintag.add('txhj_dizhou');
					} else event.finish();
				},
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: ['txhj_dizhou_use', 'txhj_dizhou_clear'],
				subSkill: {
					use: {
						trigger: { global: ['useCardToBefore'] },
						forced: true,
						filter(event, player) {
							if (event.player == player || event.player.isFriendsOf(player)) return false;
							var cards = player.getExpansions('txhj_dizhou');
							if (!player.getExpansions('txhj_dizhou') || !cards.length) return false;
							var suit = get.suit(event.card, false);
							if (suit == 'none') return false;
							for (var i of player.getExpansions('txhj_dizhou')) {
								if (get.suit(i, false) == suit) return true;
							}
							return false;
						},
						content() {
							'step 0';
							game.log('地咒:即将对', trigger.player, '使用的', trigger.card, '进行判定');
							trigger.player.judge(function (card) {
								if (get.color(card) == 'black') return 1;
								return -1;
							});
							('step 1');
							if (get.color(result.card) == 'black') {
								if (trigger.player && trigger.player.isIn() && !trigger._notrigger.includes(trigger.player)) {
									trigger.player.randomDiscard(true);
								}
							}
							if (get.suit(result.card) == 'spade') {
								trigger.targets.length = 0;
								trigger.all_excluded = true;
								trigger.cancel();
								game.log(trigger.card, '无效');
							}
							if (get.number(result.card) > 1 && get.number(result.card) < 10 && get.suit(result.card) == 'spade') {
								trigger.player.loseHp(1, true);
							}
						},
					},
					clear: {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						filter(event, player) {
							if (!player.getExpansions('txhj_dizhou').length) return false;
							return true;
						},
						content() {
							var cards = player.getExpansions('txhj_dizhou').randomGet();
							player.loseToDiscardpile(cards);
						},
					},
				},
			},
			//------地遁------//
			txhj_didun: {
				trigger: { global: 'judge' },
				filter(event, player) {
					return player.countCards('hes', { color: 'black' }) > 0;
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('txhj_didun'), 'hes', function (card) {
							if (get.color(card) != 'black') return false;
							var player = _status.event.player;
							var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
							if (mod2 != 'unchanged') return mod2;
							var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
							if (mod != 'unchanged') return mod;
							return true;
						})
						.set('ai', function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) {
								if (trigger.player != player) return 0;
								if (
									game.hasPlayer(function (current) {
										return get.attitude(player, current) < 0;
									})
								) {
									var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
									if (checkx > 0) return checkx;
								}
								return 0;
							}
							if (attitude > 0) {
								return result;
							} else {
								return -result;
							}
						})
						.set('judging', trigger.player.judging[0]);
					('step 1');
					if (result.bool) {
						player.respond(result.cards, 'highlight', 'txhj_didun', 'noOrdering');
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						var card = trigger.player.judging[0];
						player.$gain2(card);
						player.gain(card);
						if (get.color(card) == 'black') player.draw();
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			//------亡怨------//
			txhj_wangyuan: {
				trigger: { global: 'dieAfter' },
				forced: true,
				group: ['txhj_wangyuan_add'],
				init(player, skill) {
					player.storage.txhj_wangyuan = 0;
					player.syncStorage('txhj_wangyuan');
					player.markSkill('txhj_wangyuan');
				},
				marktext: '亡怨',
				intro: {
					name: '亡怨',
					content: '本局游戏,你造成的属性伤害基数+#',
				},
				content() {
					player.gainMaxHp();
					player.recover();
					player.storage.txhj_wangyuan++;
					player.syncStorage('txhj_wangyuan');
					player.markSkill('txhj_wangyuan');
				},
				ai: {
					threaten: 1.5,
				},
				subSkill: {
					add: {
						forced: true,
						_priority: 4,
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							if (!event.nature) return false;
							return event.notLink() && player.storage.txhj_wangyuan > 0;
						},
						content() {
							var n = player.storage.txhj_wangyuan;
							trigger.num += n;
							if (trigger.card) {
								game.log('亡怨:', trigger.card, '的属性伤害基数+' + n);
							} else {
								game.log('亡怨:属性伤害基数+' + n);
							}
						},
					},
				},
			},
			//------注魂------//
			txhj_zhuhun: {
				enable: 'phaseUse',
				group: ['txhj_zhuhun_die'],
				usable: 1,
				filter(event, player) {
					if (!player.storage.txhj_zhuhun_die) player.storage.txhj_zhuhun_die = [];
					return player.storage.txhj_zhuhun_die.length;
				},
				content() {
					'step 0';
					var list = player.storage.txhj_zhuhun_die;
					player.chooseButton(ui.create.dialog('选择一名已阵亡的同阵营角色令其复活为【长怨尸兵】', list), function (button) {
						return ai.get.attitude(_status.event.player);
					});
					('step 1');
					if (result.bool) {
						var target = result.buttons[0].link;
						target.init('txhj_changyuanshibing'); //QQQ
						target.maxHp = 3;
						target.revive(Infinity);
						target.draw(4);
						target.update();
						player.storage.txhj_zhuhun_die.remove(result.buttons[0].link);
						player.markSkill('txhj_zhuhun_die');
					}
				},
				subSkill: {
					die: {
						trigger: {
							global: 'die',
						},
						_priority: -15,
						forced: true,
						marktext: '注魂',
						forced: true,
						filter(event, player) {
							return event.player.side == player.side;
						},
						content() {
							'step 0';
							if (!player.storage.txhj_zhuhun_die) player.storage.txhj_zhuhun_die = [];
							('step 1');
							player.storage.txhj_zhuhun_die.push(trigger.player);
							player.markSkill('txhj_zhuhun_die');
						},
						intro: {
							name: '已阵亡的同阵营角色',
							content: 'player',
						},
					},
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
					threaten: 2.5,
				},
			},
			//------咒雷------//
			txhj_zhoulei: {
				trigger: { global: 'drawAfter' },
				forced: true,
				logTarget: 'player',
				filter(event, player) {
					if (event.player == player) return false;
					var a = event.player.countCards('h');
					if (!player.countMark('txhj_zhoulei')) {
						var b = 0;
					} else {
						var b = player.countMark('txhj_zhoulei');
					}
					var c = 5 - b;
					return Math.abs(a - b) >= c;
				},
				content() {
					player.line(trigger.player, 'thunder');
					trigger.player.damage(1, 'thunder');
					if (player.countMark('txhj_zhoulei') < 5) {
						player.addMark('txhj_zhoulei', 1, false);
						game.log(player, '的【咒雷】已发动次数+1');
					}
				},
				intro: {
					name: '咒雷',
					content(storage, player) {
						if (!player.countMark('txhj_zhoulei')) {
							var num = 0;
						} else {
							var num = player.countMark('txhj_zhoulei');
						}
						var c = 5 - num;
						var str = `当一名其他角色摸牌后,若其与你的手牌数之差>=<b>${c}</b>,你对其造成1点雷电伤害.`;
						return str;
					},
				},
				mark: true,
				marktext: '咒雷',
			},
			//------诡炎------//
			txhj_guiyan: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: 2,
				forced: true,
				filter(event, player, target) {
					return game.hasPlayer(function (target) {
						return target.hp >= player.hp && target != player;
					});
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txhj_guiyan'), true, function (card, player, target) {
						return target.hp >= player.hp && target != player;
					}).ai = function (target) {
						var att = get.attitude(player, target);
						return -att;
					};
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, 'fire');
						player.addTempSkill('txhj_guiyan_yan');
						player.storage.txhj_guiyan_yan = [];
						player.storage.txhj_guiyan_yan.push(target);
						player.markSkill('txhj_guiyan_yan');
						target.addTempSkill('txhj_guiyan_huo');
						if (!target.hasSkill('ranshang')) {
							target.addSkill('ranshang');
						} else {
							if (player.canUse('huogong', target)) {
								player.useCard({ name: 'huogong' }, target);
								game.log('【诡炎】:', player, '即将对', target, '使用【火攻】');
							} else {
								event.finish();
							}
						}
					}
				},
				ai: {
					threaten: 1.7,
				},
				subSkill: {
					yan: {
						mark: true,
						marktext: '诡炎',
						onremove(player, skill) {
							player.storage.txhj_guiyan_yan = [];
							player.unmarkSkill('txhj_guiyan_yan');
						},
						intro: {
							name: '诡炎:标记目标',
							markcount(storage) {
								if (storage) return get.translation(storage[0]);
								return 0;
							},
							content(storage) {
								if (storage) {
									return `本回合对${get.translation(storage[0])}造成的伤害均视为火属性,且伤害+1`;
								}
								return '无效果';
							},
						},
						forced: true,
						_priority: 30,
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							if (event.player == player) return false;
							return event.player && event.player.hasSkill('txhj_guiyan_huo');
						},
						content() {
							player.line(trigger.player, 'fire');
							trigger.nature = 'fire';
							trigger.num++;
						},
					},
					huo: {
						forced: true,
					},
				},
			},
			//------邪风------//
			txhj_xiefeng: {
				trigger: { player: 'phaseAfter' },
				forced: true,
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				content() {
					'step 0';
					var prompt2 = '弃置至多三张牌并摸一张牌';
					var next = player.chooseToDiscard('he', [1, 3], get.prompt('txhj_xiefeng'), prompt2);
					next.set('ai', function (card) {
						return 6 - get.value(card);
					});
					next.logSkill = 'txhj_xiefeng';
					('step 1');
					if (result.bool) {
						var cards = result.cards;
						player.draw(1, true);
						player.addTempSkill('txhj_xiefeng_miss', { player: 'die' });
						player.addTempSkill('txhj_xiefeng_mianshang', { player: 'die' });
						if (player.storage.txhj_xiefeng_miss == undefined) {
							player.storage.txhj_xiefeng_miss = 0;
						}
						player.storage.txhj_xiefeng_miss += cards.length;
						player.syncStorage('txhj_xiefeng_miss');
						player.markSkill('txhj_xiefeng_miss');
					}
				},
				subSkill: {
					miss: {
						trigger: { global: 'phaseEnd' },
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							player.storage.txhj_xiefeng_miss--;
							player.syncStorage('txhj_xiefeng_miss');
							player.markSkill('txhj_xiefeng_miss');
							if (player.storage.txhj_xiefeng_miss == 0) {
								game.log(player, '的【邪风】免伤效果失效');
								player.unmarkSkill('txhj_xiefeng_miss');
								player.removeSkill('txhj_xiefeng_miss');
								player.removeSkill('txhj_xiefeng_mianshang');
							} else {
								var a = player.storage.txhj_xiefeng_miss;
								game.log(player, '的【邪风】免伤效果剩余', `#g${a}回合`);
								player.markSkill('txhj_xiefeng_miss');
							}
						},
						mark: true,
						marktext: '邪风',
						intro: {
							name: '邪风',
							content: '接下来的#个回合,防止你受到的非雷电伤害.',
						},
					},
					mianshang: {
						trigger: { player: 'damageBegin4' },
						filter(event, player) {
							if (event.nature != 'thunder') return true;
							return false;
						},
						mark: true,
						forced: true,
						content() {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
								},
							},
						},
					},
				},
			},
			//侍灵
			// 金鸡独立
			txhj_datongSkill1: {
				trigger: { player: 'dying' },
				forced: true,
				charlotte: true,
				init(player) {
					player.txhj_datongSkill1 = false;
				},
				filter(event, player) {
					return !player.txhj_datongSkill1;
				},
				content() {
					var num = 1 - player.hp;
					if (num > 0) player.recover(num);
					player.txhj_datongSkill1 = true;
					// game.log(player, '触发了【金鸡独立】');
					if (player.buff) {
						player.buff['txhj_datongSkill1'].update();
					}
				},
			},//QQQ
			//祥云瑞气
			txhj_ruiSkill1: {
				trigger: {
					player: 'phaseUseEnd',
				},
				forced: true,
				filter(event, player, target) {
					return game.hasPlayer(function (target) {
						return target.isEnemiesOf(player) && target.countCards('h') < player.countCards('h');
					});
				},
				content() {
					'step 0';
					var players = game.filterPlayer(function (current) {
						return current.countCards('h') <= player.countCards('h') && current.isEnemiesOf(player);
					});
					players.remove(player);
					event.players = players;
					player.line(players, 'green');
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						current.damage(1, 'fire');
						if (player.buff) {
							player.buff['txhj_ruiSkill1'].update();
						}
						event.redo();
					}
				},
				ai: {
					threaten: 3.7,
				},
			},
			// 神妙
			txhj_ruiSkill2: {
				trigger: {
					player: ['phaseBegin', 'phaseEnd'],
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				forced: true,
				charlotte: true,
				content() {
					'step 0';
					event.numm = player.countCards('h') % 2;
					event.list1 = player.getEnemies().sortBySeat();
					event.list2 = player.getFriends().sortBySeat();
					('step 1');
					if (event.numm == 1 && event.list2.length) {
						var target = event.list2.randomGet(1);
						game.log('神妙·奇:随机令一名我方角色摸一张牌');
						player.line(target, 'green');
						target.draw();
					} else if (event.list1.length) {
						var target = event.list1.randomGet(1);
						game.log('神妙·偶:随机令一名敌方角色随机弃置一张牌');
						player.line(target, 'green');
						target.discard(target.getCards('he').randomGet());
					}
					if (player.buff) {
						player.buff['txhj_ruiSkill2'].update();
					}
				},
			},
			//洞若观火
			txhj_ruiSkill3: {
				trigger: { target: 'useCardToTargeted' },
				filter(event, player) {
					return get.type(event.card) == 'trick' && event.player != player;
				},
				forced: true,
				charlotte: true,
				content() {
					'step 0';
					player.judge(function (result) {
						if (get.color(result) == 'red') return 2;
						return -1;
					}).judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					if (result.bool) {
						trigger.parent.excluded.add(player);
						player.gain(trigger.parent.cards, 'gain2');
						if (player.buff) {
							player.buff['txhj_ruiSkill3'].update();
						}
					}
				},
			},
			// 神鬼不测
			txhj_yanSkill1: {
				trigger: { target: 'useCardToTargeted' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return get.type(event.card) == 'trick' && event.player != player && event.targets.length == 1;
				},
				content() {
					'step 0';
					player.judge(function (result) {
						if (get.color(result) == 'black') return 2;
						return -1;
					}).judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					if (result.bool) {
						trigger.targets.remove(player);
						trigger.parent.triggeredTargets2.remove(player);
						trigger.untrigger();
						if (trigger.parent.card.name == 'jiedao' && trigger.player.getEquip(1) == null) {
							event.finish();
						}
						player.useCard(trigger.parent.card, trigger.player);
						// game.log(player, '触发了【神鬼不测】');
						if (player.buff) {
							player.buff['txhj_yanSkill1'].update();
						}
					}
				},
			},
			txhj_yanSkill2: {
				trigger: { player: 'damageEnd' },
				usable: 1,
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.source && event.source != player && event.source.isAlive();
				},
				content() {
					player.useCard({ name: 'sha' }, trigger.source, false);
					// game.log(player, '触发了【反计】');
					if (player.buff) {
						player.buff['txhj_yanSkill2'].update();
					}
				},
				group: ['txhj_yanSkill2_recover'],
				subSkill: {
					recover: {
						trigger: { source: 'damageAfter' },
						forced: true,
						popup: false,
						charlotte: true,
						filter(event, player) {
							return event.parent.parent.parent.name == 'txhj_yanSkill2';
						},
						content() {
							player.recover();
							// game.log(player, '触发了【反计】');
							if (player.buff) {
								player.buff['txhj_yanSkill2'].update();
							}
						},
					},
				},
			},
			txhj_yanSkill3: {
				trigger: { source: 'damageEnd' },
				usable: 1,
				forced: true,
				charlotte: true,
				content() {
					'step 0';
					player.judge();
					('step 1');
					if (result.color == 'red') {
						player.draw(2);
					} else if (result.color == 'black') {
						player.gainPlayerCard(trigger.player, 'he', true);
					}
					// game.log(player, '触发了【天外之火】');
					if (player.buff) {
						player.buff['txhj_yanSkill3'].update();
					}
				},
			},
			// 神勇
			txhj_aHaoSkill2: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					var evt = event.getl(player);
					return evt && evt.player == player && evt.es && evt.es.length;
				},
				content() {
					'step 0';
					event.list = player.getEnemies().sortBySeat();
					('step 1');
					if (event.list.length) {
						var target = event.list.shift();
						player.line(target, 'green');
						target.damage();
						event.redo();
						if (player.buff) {
							player.buff['txhj_aHaoSkill2'].update();
						}
					}
				},
			},
			// 攫戾執猛
			txhj_aHaoSkill3: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.num += player.countCards('e');
					if (player.buff) {
						player.buff['txhj_aHaoSkill3'].update();
					}
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') {
							return num + player.countCards('e');
						}
					},
					maxHandcardBase(player, num) {
						return num + player.countCards('e');
					},
				},
			},
			txhj_luluSkill1: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				charlotte: true,
				content() {
					player.draw(2);
					// game.log(player, '触发了【如虎添翼】');
					if (player.buff) {
						player.buff['txhj_luluSkill1'].update();
					}
				},
			},
			txhj_luluSkill2: {
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					var hp = player.hp;
					var he = player.getCards('h');
					var list = [];
					player.getHistory('gain', function (evt) {
						if (evt && evt.cards) {
							if (Array.isArray(evt.cards))
								for (var i of evt.cards) {
									if (he.includes(i)) list.add(i);
								}
						}
					});
					return list.length >= hp && player.countUsed('sha', true) <= 1;
				},
				content() {
					var target = trigger.target;
					trigger.directHit.add(target);
					var id = target.playerid;
					var map = trigger.customArgs;
					if (!map[id]) map[id] = {};
					if (!map[id].extraDamage) map[id].extraDamage = 0;
					map[id].extraDamage++;
					if (player.buff) {
						player.buff['txhj_luluSkill2'].update();
					}
				},
			},
			// 乐不可支
			txhj_aleSkill1: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					return event.target == player && get.type(event.card) == 'basic';
				},
				content() {
					player.getHistory('custom').push({ aleSkill1: true, e: trigger.parent });
					if (player.buff) {
						player.buff['txhj_aleSkill1'].update();
					}
				},
				group: ['txhj_aleSkill1_after'],
				subSkill: {
					after: {
						trigger: {
							global: ['useCardAfter'],
						},
						forced: true,
						charlotte: true,
						usable: 1,
						filter(event, player) {
							var damage = player.getHistory('damage', function (evt) {
								return event.card && evt.card == event.card;
							}).length;
							var s = player.getHistory('custom', function (evt) {
								return evt.aleSkill1 && evt.e == event;
							}).length;
							return !damage && s;
						},
						content() {
							player.draw();
							if (player.buff) {
								player.buff['txhj_aleSkill1'].update();
							}
						},
					},
				},
			},
			// 饞嘴王
			txhj_aleSkill2: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.isDamaged() && !player.isMaxHp();
				},
				content() {
					player.recover();
					if (player.buff) {
						player.buff['txhj_aleSkill2'].update();
					}
				},
			},
			// 花容月貌
			txhj_yueerSkill1: {
				trigger: { global: 'damageEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.player.hasSex('male') && player.storage.yueerSkill1;
				},
				content() {
					player.recover();
					player.draw();
					player.storage.yueerSkill1 = false;
					if (player.buff) {
						player.buff['txhj_yueerSkill1'].update();
					}
				},
				group: ['yueerSkillOver'],
			},
			yueerSkillOver: {
				trigger: { global: ['roundStart'] },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return !player.storage.yueerSkill1;
				},
				content() {
					player.storage.yueerSkill1 = true;
				},
			},
			// 娇面
			txhj_yueerSkill2: {
				trigger: { player: 'phaseDiscardEnd' },
				forced: true,
				charlotte: true,
				content() {
					player.draw(2);
					// game.log(player, '触发了【娇面】');
					if (player.buff) {
						player.buff['txhj_yueerSkill2'].update();
					}
				},
			},
			// 墨玉点雪
			txhj_liuliSkill1: {
				usable: 1,
				trigger: {
					player: 'loseEnd',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return _status.currentPhase && player != _status.currentPhase;
				},
				content() {
					_status.currentPhase.damage();
					// game.log(player, '触发了【墨玉点雪】');
					if (player.buff) {
						player.buff['txhj_liuliSkill1'].update();
					}
				},
			},
			txhj_liuliSkill2: {
				usable: 1,
				trigger: { global: 'phaseDiscardEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return (
						event.player != player &&
						event.player.getHistory('lose', function (evt) {
							if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) return true;
						}).length
					);
				},
				content() {
					var card = get.discardPile(function (i) {
						return i;
					});
					if (card) player.gain(card, 'gain2');
					// game.log(player, '触发了【伶俐】');
					if (player.buff) {
						player.buff['txhj_liuliSkill2'].update();
					}
				},
			},
			txhj_manmanSkill1: {
				trigger: { player: 'phaseBegin' },
				forced: true,
				charlotte: true,
				content() {
					player.chooseUseTarget({ name: 'nanman' }, '弄鬼掉猴:回合开始时,你视为使用一张【南蛮入侵】');
					// game.log(player, '触发了【弄鬼掉猴】');
					if (player.buff) {
						player.buff['txhj_manmanSkill1'].update();
					}
				},
				group: ['txhj_manmanSkill1_damage'],
				subSkill: {
					damage: {
						trigger: { global: 'damageAfter' },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return (
								event.card &&
								event.card.name == 'nanman' &&
								player.getHistory('sourceDamage', function (evt) {
									return evt.card == event.card;
								}).length
							);
						},
						content() {
							player.draw(trigger.num);
							// game.log(player, '触发了【弄鬼掉猴】');
							if (player.buff) {
								player.buff['txhj_manmanSkill1'].update();
							}
						},
					},
				},
			},
			txhj_manmanSkill2: {
				trigger: { source: 'damageAfter' },
				usable: 1,
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.player.isAlive() && event.player.countCards('he') > 0;
				},
				content() {
					player.gainPlayerCard(trigger.player, 'he', true);
					// game.log(player, '触发了【捣蛋】');
					if (player.buff) {
						player.buff['txhj_manmanSkill2'].update();
					}
				},
			},
			//矢无虚发
			txhj_xiaoxiaoSkill1: {
				trigger: {
					target: 'useCardToTargeted',
				},
				usable: 1,
				charlotte: true,
				filter(event, player) {
					return (
						get.type(event.card, 'trick') == 'trick' &&
						event.player != player &&
						event.targets &&
						event.targets.length &&
						game.countPlayer2(function (current) {
							return current.getHistory('damage').length;
						}) == 0
					);//QQQ
				},
				prompt: '是否发动【矢无虚发】,回血或摸牌？',
				content() {
					if (player.hp < player.maxHp) {
						player.recover();
						game.log(player, '发动【矢无虚发】回复了一点体力');
					} else {
						player.draw();
						game.log(player, '未受伤.摸了一张牌');
					}
					// game.log(player, '触发了【矢无虚发】');
					if (player.buff) {
						player.buff['txhj_xiaoxiaoSkill1'].update();
					}
				},
			},
			//弓上弦
			txhj_xiaoxiaoSkill2: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards('h');
					});
				},
				content() {
					'step 0';
					var players = game.filterPlayer(function (current) {
						return current.countCards('e') <= player.countCards('e');
					});
					players.remove(player);
					event.players = players;
					player.line(players, 'green');
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						var hs = current.getCards('h');
						if (hs.length) {
							var card = hs.randomGet();
							player.gain(card, current);
							current.$giveAuto(card, player);
						}
						event.redo();
					}
					// game.log(player, '触发了【弓上弦】');
					if (player.buff) {
						player.buff['txhj_xiaoxiaoSkill2'].update();
					}
				},
			},
			//轻舞飞扬
			txhj_xuerenSkill1: {
				trigger: { player: 'phaseEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.getStat('damage');
				},
				content() {
					player.draw(1, true);
					// game.log(player, '发动了【轻舞飞扬】');
					if (player.buff) {
						player.buff['txhj_xuerenSkill1'].update();
					}
				},
			},
			//倚天拔地
			txhj_xuanwuSkill1: {
				trigger: {
					global: 'recoverBefore',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.player != player && !player.isHealthy();
				},
				content() {
					player.recover();
					// game.log(player, '发动了【倚天拔地】');
					if (player.buff) {
						player.buff['txhj_xuanwuSkill1'].update();
					}
				},
			},
			//蛇影
			txhj_xuanwuSkill2: {
				trigger: {
					player: 'loseAfter',
				},
				usable: 1,
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (event.name != 'lose' || event.type != 'discard') return false;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				content() {
					'step 0';
					player.draw(Math.ceil(trigger.getl(player).hs.length / 2));
					event.count = Math.ceil(trigger.getl(player).hs.length / 2);
					('step 1');
					event.list = player.getEnemies().sortBySeat();
					('step 2');
					if (event.list.length) {
						var target = event.list.shift();
						player.line(target, 'green');
						target.damage(1, true);
						event.count--;
						if (event.count > 0) {
							event.redo();
						} else {
							event.finish();
						}
					}
					// game.log(player, '发动了【蛇影】');
					if (player.buff) {
						player.buff['txhj_xuanwuSkill2'].update();
					}
				},
			},
			//玄冥真主
			txhj_xuanwuSkill3: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				charlotte: true,
				filter(event, player, card) {
					return get.number(event.card) <= player.countCards('h') && get.type(event.card, 'trick') == 'trick' && event.player != player && event.targets && event.targets.length;
				},
				content() {
					trigger.cancel();
					trigger.targets.remove(player);
					trigger.parent.triggeredTargets2.remove(player);
					trigger.untrigger();
					// game.log(player, '发动了【玄冥真主】');
					if (player.buff) {
						player.buff['txhj_xuanwuSkill3'].update();
					}
				},
			},
			//勇往直前
			txhj_dundunSkill1: {
				trigger: { player: 'useCardToPlayered' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.card && event.card.name == 'sha';
				},
				content() {
					player.draw(1, true);
					if (player.buff && player.buff['txhj_dundunSkill1']) {
						player.buff['txhj_dundunSkill1'].update();
					}
				},
			},
			//忠誌
			txhj_dundunSkill2: {
				trigger: { player: 'damageBegin4' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.num > 1;
				},
				content() {
					trigger.num--;
					if (player.buff && player.buff['txhj_dundunSkill2']) {
						player.buff['txhj_dundunSkill2'].update();
					}
				},
			},
			//狐火灵气
			txhj_jiuweiSkill1: {
				forced: true,
				charlotte: true,
				trigger: { global: 'phaseBegin' },
				filter(event, player) {
					if (!(player == game.me)) return false;
					return player != event.player;
				},
				content() {
					if (!trigger.player.storage.txhj_jiuweiSkill1_disable) {
						trigger.player.storage.txhj_jiuweiSkill1_disable = [];
					}
					trigger.player.storage.txhj_jiuweiSkill1_disable.push(player);
					trigger.player.addTempSkill('txhj_jiuweiSkill1_disable', 'phaseAfter');
				},
			},
			txhj_jiuweiSkill1_disable: {
				trigger: {
					player: 'useCardToTarget',
				},
				_priority: -7,
				filter(event, player) {
					return event.targets.length == 1 && event.targets.includes(player.storage.txhj_jiuweiSkill1_disable[0]) && get.type(event.card, 'trick') == 'trick';
				},
				content() {
					trigger.excluded.add(player.storage.txhj_jiuweiSkill1_disable[0]);
					if (get.type(trigger.card, 'delay') == 'delay') {
						var owner = get.owner(trigger.card);
						if (owner && owner.getCards('hej').includes(trigger.card)) {
							owner.lose(trigger.card, ui.discardPile);
						} else game.cardsDiscard(trigger.card);
						game.log(trigger.card, '进入了弃牌堆');
					}
					if (player.storage.txhj_jiuweiSkill1_disable[0].buff) {
						player.storage.txhj_jiuweiSkill1_disable[0].buff['txhj_jiuweiSkill1'].update();
					}
				},
				forced: true,
				charlotte: true,
				mark: true,
				marktext: '失',
				intro: {
					content: '本回合内对$使用锦囊牌会失效.',
				},
			},
			//秘思
			txhj_jiuweiSkill2: {
				forced: true,
				charlotte: true,
				trigger: { global: 'useCard' },
				filter(event, player) {
					if (!(player == game.me)) return false;
					if (player != _status.currentPhase || event.player == player) return false;
					let res = event.player.getHistory('useCard', function (evt) {
						return get.type(evt.card) != 'trick';
					});
					return res.length == 1;
				},
				content() {
					trigger.targets = [];
					trigger.all_excluded = true;
					if (player.buff && player.buff['txhj_jiuweiSkill2']) {
						player.buff['txhj_jiuweiSkill2'].update();
					}
				},
			},
			//九尾之命
			txhj_jiuweiSkill3: {
				forced: true,
				charlotte: true,
				trigger: { player: 'damageEnd' },
				init(player) {
					player.storage.txhj_jiuweiSkill3_count = 0;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.num > 0 && player.storage.txhj_jiuweiSkill3_count < 9;
				},
				content() {
					let count = (9 - player.storage.txhj_jiuweiSkill3_count) * trigger.num;
					player.draw(count);
					player.storage.txhj_jiuweiSkill3_count++;
					if (player.buff && player.buff['txhj_jiuweiSkill3']) {
						player.buff['txhj_jiuweiSkill3'].update();
					}
				},
			},
			//雷奔云谲
			txhj_tengsheSkill1: {
				trigger: { player: 'damageEnd' },
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return _status.currentPhase != player && !event.nature && event.source;
				},
				content() {
					player.useCard({ name: 'sha', nature: 'thunder' }, trigger.source);
					if (player.buff && player.buff['txhj_tengsheSkill1']) {
						player.buff['txhj_tengsheSkill1'].update();
					}
				},
			},
			//紫电
			txhj_tengsheSkill2: {
				trigger: { player: 'phaseAfter' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					let count = 0;
					event['txhj_tengsheSkill2'] = player.getEnemies();
					event['txhj_tengsheSkill2'].forEach((e) => {
						if (e.isDamaged()) count++;
					});
					return count;
				},
				content() {
					let len = trigger['txhj_tengsheSkill2'].length;
					trigger['txhj_tengsheSkill2'].forEach((e) => {
						e.damage(len == 1 ? 2 : 1, 'thunder', player);
					});
					if (player.buff && player.buff['txhj_tengsheSkill2']) {
						player.buff['txhj_tengsheSkill2'].update();
					}
				},
			},
			//迅雷风烈
			txhj_tengsheSkill3: {
				trigger: { source: 'damageEnd' },
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.player != player && event.nature == 'thunder';
				},
				content() {
					player.recover();
					player.draw(2);
					if (player.buff && player.buff['txhj_tengsheSkill3']) {
						player.buff['txhj_tengsheSkill3'].update();
					}
				},
			},
			//慷慨鸭昂
			txhj_yayaSkill1: {
				trigger: {
					player: 'useCard',
					target: 'useCardToTargeted',
				},
				usable: 4,
				forced: true,
				charlotte: true,
				init(player) {
					player.storage['txhj_yayaSkill1_count'] = 0;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					if (event.name == 'useCard') {
						return get.color(event.card) == 'red';
					}
					return event.player != player && get.color(event.card) == 'red';
				},
				content() {
					player.draw(1).gaintag = ['txhj_yayaSkill1'];
					player.storage['txhj_yayaSkill1_count']++;
					if (player.buff && player.buff['txhj_yayaSkill1']) {
						player.buff['txhj_yayaSkill1'].update();
					}
				},
				group: ['txhj_yayaSkill1_damage'],
				subSkill: {
					damage: {
						trigger: {
							player: 'gainAfter',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							if (!(player == game.me)) return false;
							return player.storage['txhj_yayaSkill1_count'] >= 4;
						},
						content() {
							player.getEnemies().randomGet().damage();
							player.storage['txhj_yayaSkill1_count'] = 0;
							if (player.buff && player.buff['txhj_yayaSkill1']) {
								player.buff['txhj_yayaSkill1'].update();
							}
						},
					},
				},
			},
			//鸭立
			txhj_yayaSkill2: {
				trigger: {
					player: 'dying',
				},
				forced: true,
				charlotte: true,
				init(player) {
					player.storage['txhj_yayaSkill2'] = false;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					return !player.storage['txhj_yayaSkill2'];
				},
				content() {
					'step 0';
					var num = 1 - player.hp;
					if (num > 0) player.recover(num);
					player.update();
					('step 1');
					player.addTempSkill('txhj_yayaSkill2_protected', { player: 'phaseBegin' });
					player.storage['txhj_yayaSkill2'] = true;
				},
			},
			txhj_yayaSkill2_protected: {
				trigger: {
					player: ['damageBegin3', 'loseHpBefore', 'recoverBefore'],
				},
				forced: true,
				charlotte: true,
				mark: true,
				marktext: '保',
				intro: {
					content: '你不能失去/回复体力和受到伤害',
				},
				content() {
					trigger.cancel();
				},
			},
			//承天之佑
			txhj_youyouSkill1: {
				trigger: { player: 'damageAfter' },
				usable: 1,
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return _status.currentPhase != player;
				},
				content() {
					player.draw(2);
					if (player.buff && player.buff['txhj_youyouSkill1']) {
						player.buff['txhj_youyouSkill1'].update();
					}
				},
			},
			//守护
			txhj_youyouSkill2: {
				trigger: { player: 'gainAfter' },
				usable: 1,
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					let evt = event.getParent('phaseDraw');
					return Object.keys(evt).length == 0 && event.getg(player).length > 1;
				},
				content() {
					let players = [];
					player.getFriends().forEach((e) => {
						if (!e.isHealthy()) players.push(e);
					});
					if (players.length) players.randomGet().recover();
					if (player.buff && player.buff['txhj_youyouSkill2']) {
						player.buff['txhj_youyouSkill2'].update();
					}
				},
			},
			//麒麟之姿
			txhj_qilinSkill1: {
				trigger: { player: 'phaseDrawEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					event.gains = player.getHistory('gain', function (evt) {
						if (evt.parent.name != 'draw' || evt.getParent('phaseDraw') != event) return false;
						return true;
					});
					return event.gains.length && event.gains[0].parent.num > 0;
				},
				content() {
					player.draw(trigger.gains[0].parent.num);
					if (player.buff && player.buff['txhj_qilinSkill1']) {
						player.buff['txhj_qilinSkill1'].update();
					}
				},
			},
			//掌火
			txhj_qilinSkill2: {
				trigger: { source: 'damageEnd' },
				usable: 2,
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.nature == 'fire';
				},
				content() {
					player.recover();
					player.gainPlayerCard(trigger.player, 'he', true);
					if (player.buff && player.buff['txhj_qilinSkill2']) {
						player.buff['txhj_qilinSkill2'].update();
					}
				},
			},
			//腾焰飞芒
			txhj_qilinSkill3: {
				trigger: { player: ['phaseUseBegin', 'phaseUseEnd'] },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return true;
				},
				content() {
					player.useCard({ name: 'huogong' }, player.getEnemies().randomGet());
					if (player.buff && player.buff['txhj_qilinSkill3']) {
						player.buff['txhj_qilinSkill3'].update();
					}
				},
			},
			//娉婷万種
			txhj_minminSkill1: {
				trigger: { player: 'damageEnd' },
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.num > 0;
				},
				content() {
					player.draw(trigger.num);
					if (player.buff && player.buff['txhj_minminSkill1']) {
						player.buff['txhj_minminSkill1'].update();
					}
				},
			},
			//依人
			txhj_minminSkill2: {
				trigger: { player: 'gainAfter' },
				forced: true,
				charlotte: true,
				usable: 2,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.getParent('draw').num >= 2;
				},
				content() {
					let friends = [];
					player.getFriends().forEach((e) => {
						if (!e.isHealthy()) friends.push(e);
					});
					if (friends.length) friends.randomGet().recover();
					if (player.buff && player.buff['txhj_minminSkill2']) {
						player.buff['txhj_minminSkill2'].update();
					}
				},
			},
			//披坚执锐
			txhj_ditingSkill1: {
				trigger: { source: 'damageEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return true;
				},
				content() {
					player.recover();
					if (player.buff && player.buff['txhj_ditingSkill1']) {
						player.buff['txhj_ditingSkill1'].update();
					}
				},
			},
			//轻健
			txhj_ditingSkill2: {
				trigger: { player: 'damageEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return true;
				},
				content() {
					player.gainMaxHp(1);
					if (player.buff && player.buff['txhj_ditingSkill2']) {
						player.buff['txhj_ditingSkill2'].update();
					}
				},
			},
			//巧捷万端
			txhj_ditingSkill3: {
				trigger: { player: 'phaseEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return player.getHistory('useCard', function (evt) {
						return get.number(evt.card);
					}).length;
				},
				content() {
					let evts = player.getHistory('useCard', function (evt) {
						return get.number(evt.card);
					});
					function sum(arr) {
						let evt = [...new Set(arr.map((obj) => get.number(obj.card)))];
						return evt.length;
					}
					let num = sum(evts);
					player.draw(num);
					let enemies = player.getEnemies();
					if (enemies.length < num) num = enemies.length;
					for (var i = 0; i < num; i++) {
						enemies[i].damage(1, player);
					}
					if (player.buff && player.buff['txhj_ditingSkill3']) {
						player.buff['txhj_ditingSkill3'].update();
					}
				},
			},
			//慧心巧思
			txhj_qiaoqiaoSkill1: {
				trigger: {
					global: 'addJudgeBefore',
				},
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.player != player;
				},
				content() {
					player.getEnemies().randomGet().loseHp();
					if (player.buff && player.buff['txhj_qiaoqiaoSkill1']) {
						player.buff['txhj_qiaoqiaoSkill1'].update();
					}
				},
			},
			//清婉
			txhj_qiaoqiaoSkill2: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				charlotte: true,
				usable: 1,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return true;
				},
				content() {
					player.drawTo(player.hp > 5 ? 5 : player.hp);
					if (player.buff && player.buff['txhj_qiaoqiaoSkill2']) {
						player.buff['txhj_qiaoqiaoSkill2'].update();
					}
				},
			},
			//侍灵技能扩充
			//以下技能代码全部搬运修改自K佬的【EpicFX】扩展,再次感谢K佬的侍灵素材和代码提供!
			txhj_jinwuSkill1: {
				trigger: { player: 'dying' },
				forced: true,
				charlotte: true,
				init(player) {
					player.storage['txhj_jinwuSkill1_count'] = 0;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					return player.storage['txhj_jinwuSkill1_count'] === 0 /* && EpicFX.servant.probabilityOfBuff(2)*/;
				},
				async content(event, trigger, player) {
					//QQQ
					player.recover(player.maxHp);
					player.storage['txhj_jinwuSkill1_count']++;
				},
			},
			txhj_jinwuSkill2: {
				mod: {
					maxHandcardBase(player, num) {
						return player.maxHp;
					},
				},
				trigger: { player: 'useCardAfter' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					if (_status.currentPhase != player) return false;
					let type = get.type(event.card, 'trick');
					return (
						/*EpicFX.servant.probabilityOfBuff(2) &&*/ player.getHistory('custom', function (evt) {
						return evt['txhj_jinwuSkill2_name'] == type;
					}).length == 0
					);
				},
				async content(event, trigger, player) {
					player.loseHp();
					player.draw(Math.min(player.getDamagedHp(), 9));
					player.getHistory('custom').push({ txhj_jinwuSkill2_name: get.type(trigger.card, 'trick') });
				},
			},
			txhj_jinwuSkill3: {
				trigger: { global: 'phaseAfter' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					let arr = [];
					let e = player.getHistory('lose', function (evt) {
						let r = evt.getParent('phaseDiscard');
						if (Object.keys(r).length === 0) {
							arr.addArray(evt.cards2);
							return 1;
						} else return 0;
					});
					let res = arr.length > player.hp;
					if (res) {
						event.drawNum = arr.length;
					}
					return res;
				},
				async content(event, trigger, player) {
					player.draw(trigger.drawNum);
				},
			},
			txhj_canglongSkill1: {
				trigger: { global: 'phaseZhunbeiBegin' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return player != event.player;
				},
				logTarget: 'player',
				async content(event, trigger, player) {
					player.useCard({ name: 'sha' }, trigger.player).logSkill = 'txhj_canglongSkill1';
				},
			},
			txhj_canglongSkill2: {
				usable: 1,
				trigger: {
					player: 'useCard2',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					return (
						player.getHistory(
							'useCard',
							function (evtx) {
								return evtx.card && evtx.card.name === 'sha';
							},
							event
						).length === 1
					);
				},
				async content(event, trigger, player) {
					trigger.baseDamage++;
				},
			},
			txhj_canglongSkill3: {
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				charlotte: true,
				init(player) {
					player.storage['txhj_canglongSkill3_drawCount'] = 0;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					return event.card && event.card.name == 'sha' && player.storage['txhj_canglongSkill3_drawCount'] < 5;
				},
				async content(event, trigger, player) {
					player.draw(
						player.getHistory('useCard', function (evt) {
							return evt.card && evt.card.name === 'sha';
						}).length
					);
					player.storage['txhj_canglongSkill3_drawCount']++;
				},
				group: ['txhj_canglongSkill3_clear'],
				subSkill: {
					clear: {
						trigger: { global: 'phaseEnd' },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return player == game.me;
						},
						async content(event, trigger, player) {
							player.storage['txhj_canglongSkill3_drawCount'] = 0;
						},
					},
				},
			},
			txhj_kangkangSkill1: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				forced: true,
				charlotte: true,
				init(player) {
					player.storage['txhj_kangkangSkill1_use'] = 0;
					player.storage['txhj_kangkangSkill1_draw'] = 0;
				},
				filter(event, player) {
					if (!(player == game.me)) return false;
					return player.storage['txhj_kangkangSkill1_use'] < 2 /*&& EpicFX.servant.probabilityOfBuff(2)*/;
				},
				async content(event, trigger, player) {
					player.draw();
					player.storage['txhj_kangkangSkill1_use']++;
					player.storage['txhj_kangkangSkill1_draw']++;
				},
				group: ['txhj_kangkangSkill1_twodraw', 'txhj_kangkangSkill1_clear'],
				subSkill: {
					twodraw: {
						forced: true,
						charlotte: true,
						trigger: {
							player: 'gainAfter',
						},
						filter(event, player) {
							return event.parent.parent.name == 'txhj_kangkangSkill1' && player.storage['txhj_kangkangSkill1_draw'] >= 2 && /* EpicFX.servant.skillCanBeUsed(*/ player == game.me;
						},
						async content(event, trigger, player) {
							player.recover();
							player.storage['txhj_kangkangSkill1_draw'] = 0;
						},
					},
					clear: {
						trigger: { global: 'roundStart' },
						forced: true,
						charlotte: true,
						async content(event, trigger, player) {
							player.storage['txhj_kangkangSkill1_use'] = 0;
						},
					},
				},
			},
			txhj_kangkangSkill2: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player == game.me;
				},
				async content(event, trigger, player) {
					player.draw(2);
					if (player.isHealthy()) {
						let cards1 = player.getCards('j');
						if (cards1.length) {
							player.discard(cards1, player, true);
						}
					}
				},
			},
			txhj_niuniuSkill1: {
				usable: 2,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					if (player == _status.currentPhase) return false;
					if (event.name == 'gain' && event.player == player) return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length /*&& EpicFX.servant.probabilityOfBuff(2)*/;
				},
				async content(event, trigger, player) {
					if (_status.currentPhase.countGainableCards(player, 'he') > 0) player.gainPlayerCard(_status.currentPhase, 'he', true);
				},
			},
			txhj_niuniuSkill2: {
				usable: 1,
				trigger: {
					player: 'gainAfter',
					global: 'loseAsyncAfter',
				},
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (!(player == game.me)) return false;
					var cards = event.getg(player);
					if (!cards.length) return false;
					return game.hasPlayer((current) => {
						return event.getl(current).cards2.length;
					});
				},
				async content(event, trigger, player) {
					const { result } = await player.judge(function () {
						return 1;
					});
					if (result.suit === 'heart') {
						player.recover();
						player.gain(result.card, 'gain2');
					} else {
						trigger.source.damage(player);
					}
				},
			},
			/*普通技能区分线*/
			//————
			/*贪食 来源剑阁模式boss技能*/
			txhj_tanshi: {
				trigger: { player: 'phaseEnd' },
				forced: true,
				check() {
					return false;
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					player.chooseToDiscard('h', true);
				},
			},
			tx_modao: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					player.draw(2);
				},
			},
			tx_mojian: {
				trigger: { player: 'phaseUseBegin' },
				content() {
					var list = game.filterPlayer(function (current) {
						return player.canUse('wanjian', current) && current.isEnemyOf(player);
					});
					list.sort(lib.sort.seat);
					player.useCard({ name: 'wanjian' }, list);
				},
				ai: {
					threaten: 1.8,
				},
			},
			tx_yushou: {
				trigger: { player: 'phaseUseBegin' },
				content() {
					var list = game.filterPlayer(function (current) {
						return player.canUse('nanman', current) && current.isEnemyOf(player);
					});
					list.sort(lib.sort.seat);
					player.useCard({ name: 'nanman' }, list);
				},
			},
			tx_moyany: {
				trigger: { player: 'loseEnd' },
				forced: true,
				filter(event, player) {
					return _status.currentPhase != player;
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'red' ? 1 : 0;
					});
					('step 1');
					if (result.bool) {
						player.chooseTarget(true, '选择一个目标对其造成两点火焰伤害', function (card, player, target) {
							return player != target;
						}).ai = function (target) {
							return get.damageEffect(target, player, player, 'fire');
						};
					} else {
						event.finish();
					}
					('step 2');
					if (result.targets.length) {
						player.line(result.targets, 'fire');
						result.targets[0].damage(2, 'fire');
					}
				},
				ai: {
					effect: {
						target(card) {
							if (get.tag(card, 'loseCard')) {
								return [0.5, 1];
							}
						},
					},
				},
			},
			tx_danshu: {
				trigger: { player: 'loseEnd' },
				forced: true,
				filter(event, player) {
					return _status.currentPhase != player && player.hp < player.maxHp;
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'red' ? 1 : 0;
					});
					('step 1');
					if (result.color == 'red') {
						player.recover();
					}
				},
				ai: {
					effect: {
						target(card) {
							if (get.tag(card, 'loseCard')) {
								return [0.5, 1];
							}
						},
					},
				},
			},
			txyirang: {
				audio: 'yirang',
				trigger: { player: 'phaseUseBegin' },
				forced: true,
				filter(event, player) {
					if (
						!player.countCards('he', function (card) {
							return get.type(card) != 'basic';
						})
					) {
						return false;
					}
					return game.hasPlayer(function (current) {
						return current.maxHp > player.maxHp;
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2('txyirang'), function (card, player, target) {
							return target.maxHp > player.maxHp;
						})
						.set('ai', function (target) {
							return (get.attitude(_status.event.player, target) - 2) * target.maxHp;
						});
					('step 1');
					if (result.bool) {
						var cards = player.getCards('he', function (card) {
							return get.type(card) != 'basic';
						});
						var target = result.targets[0];
						var types = [];
						if (Array.isArray(cards))
							for (var i of cards) {
								types.add(get.type(i, 'trick'));
							}
						player.give(cards, target);
						player.gainMaxHp(target.maxHp - player.maxHp, true);
					}
				},
			},
			txayboji: {
				trigger: { player: 'useCardToBefore' },
				usable: 1,
				// forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.targets.length == 1 && event.targets[0] != player;
				},
				content() {
					'step 0';
					player.chooseToDiscard(trigger.targets[0].get('h'), true);
					('step 1');
					if (result.bool) {
						trigger.targets[0].discard(trigger.targets[0].get('h'));
						player.draw(1);
					}
				},
			},
			txayhanji: {
				// 触发时机:造成伤害
				trigger: { source: 'damageBefore' },
				usable: 1,
				forced: true,
				// 触发效果
				filter(event, player) {
					// 对其他角色造成伤害
					return event.player != player;
				},
				content() {
					// 造成的伤害+1
					trigger.num++;
				},
			},
			tx_dqtianzi: {
				trigger: { player: ['damageEnd', 'phaseUseBegin'] },
				usable: 1,
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('选择一名其他角色进行判定', function (card, player, target) {
						return target != player;
					}).ai = function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					};
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.judge(function (card) {
							return get.color(card);
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.suit == 'diamond') {
						event.target.skip('phaseUse');
					} else if (result.color == 'black') {
						player.gainPlayerCard(event.target, 'h', [0, Infinity]);
					}
				},
			},
			xinmingjian: {
				audio: 2,
				usable: 2,
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player != target;
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				delay: false,
				content() {
					target.gain(cards, player, 'giveAuto');
					target.addTempSkill('xinmingjian2', { player: 'phaseAfter' });
					target.storage.xinmingjian2++;
					target.updateMarks('xinmingjian2');
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							if (target.hasSkillTag('nogain')) return 0;
							if (player.countCards('h') == player.countCards('h', 'du')) return -1;
							if (target.hasJudge('lebu')) return 0;
							if (get.attitude(player, target) > 3) {
								var basis = get.threaten(target);
								if (
									player == get.zhu(player) &&
									player.hp <= 2 &&
									player.countCards('h', 'shan') &&
									!game.hasPlayer(function (current) {
										return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
									})
								)
									return 0;
								if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
								return basis;
							}
							return 0;
						},
					},
				},
			},
			xinmingjian2: {
				charlotte: true,
				mark: true,
				intro: {
					content: '手牌上限不限制,出杀次数不限制',
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				mod: {
					maxHandcard(player, num) {
						return num + Infinity;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + Infinity;
					},
				},
			},
			txmazhan: {
				mod: {
					globalFrom(from, to, distance) {
						return distance - 2;
					},
					globalTo(from, to, distance) {
						return distance + 1;
					},
				},
			},
			txlieji: {
				trigger: {
					player: 'useCardAfter',
				},
				usable: 1,
				_priority: 9,
				forced: true,
				filter(event, player) {
					return event.targets && event.targets.length == 1 && (event.card.name == 'sha' || get.type(event.card) == 'trick');
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					game.log(player, '裂击效果发动,可以再次结算一次【', trigger.card.name, '】');
					player.useCard(trigger.card, trigger.targets, true);
				},
			},
			diycuidu: {
				audio: 2,
				trigger: { source: 'damageEnd' },
				derivation: ['diyzhongdu'],
				forced: true,
				filter(event, player) {
					if (event._notrigger.includes(event.player)) return false;
					return event.player.isIn() && event.player.isEnemyOf(player) && !event.player.hasSkill('diyzhongdu');
				},
				logTarget: 'player',
				content() {
					trigger.player.addSkill('diyzhongdu');
					player.draw(2);
					if (player) {
						player.draw(0);
					}
				},
			},
			diychunxiao: {
				audio: 1,
				forced: true,
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return player.hp < player.maxHp && Math.random() <= 0.5;
				},
				content() {
					player.hp = player.maxHp;
				},
			},
			diyzhongdu: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				mark: true,
				nopop: true,
				temp: true,
				intro: {
					content: '锁定技,回合开始时,你进行判定,若结果不为♥️,你受到1点无来源的伤害,若结果不为♠️,此中毒效果失效.',
				},
				content() {
					'step 0';
					player.judge(function (card) {
						var suit = get.suit(card);
						if (suit == 'spade') return -1;
						if (suit == 'heart') return 1;
						return 0;
					});
					('step 1');
					if (result.suit != 'heart') {
						player.damage('nosource');
					}
					if (result.suit != 'spade') {
						player.removeSkill('diyzhongdu');
					}
				},
			},
			diyzhuiling: {
				audio: 1,
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.source != undefined;
				},
				logTarget: 'source',
				content() {
					trigger.source.damage(1).nature = ['fire', 'thunder', 'ice', 'poison'].randomGet();
				},
			},
			diyfeihua: {
				trigger: { player: 'phaseUseBegin' },
				content() {
					var name = ['zhibi', 'wanjian'].randomGet();
					player.useCard(
						{ name: name },
						game.filterPlayer(function (current) {
							return player.canUse({ name: name }, current);
						}),
						'noai'
					);
				},
			},
			txclanxieshu: {
				audio: 2,
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				filter(event, player) {
					return event.card && player.countCards('he') >= lib.skill.dcweidang.getLength(event.card);
				},
				content() {
					var card = trigger.card;
					var num = lib.skill.dcweidang.getLength(card);
					player.chooseToDiscard(num, 'he', true);
					if (player.hp < player.maxHp) player.draw(player.getDamagedHp());
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
							if (get.tag(card, 'damage')) return [1, 0.55];
						},
					},
				},
			},
			txshixin: {
				audio: 2,
				filter(event, player) {
					return (event.player != player && get.type(event.card) == 'trick') || get.type(event.card) == 'delay';
				},
				trigger: {
					target: 'useCardToBefore',
				},
				content() {
					'step 0';
					player.judge(function (card) {
						if (get.color(card) == 'black') return 1;
						return 0;
					});
					('step 1');
					if (result.color) {
						if (result.color == 'black') {
							trigger.cancel();
						} else {
							player.addTempSkill('txshixin_red', {
								target: 'useCardToAfter',
							});
						}
					}
				},
				subSkill: {
					red: {
						trigger: {
							target: 'useCardToAfter',
						},
						content() {
							player.link();
							//player.$gain2(trigger.cards);
						},
					},
				},
			},
			txqyyouji: {
				audio: 2,
				trigger: { player: 'useCardToTargeted' },
				shaRelated: true,
				filter(event, player) {
					return event.isFirstTarget && event.targets.length == 1 && get.type(event.card, 'trick') == 'trick';
				},
				content() {
					trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
					trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (player._txqyyouji_aiChecking) return;
							if (target == player) {
								player._txqyyouji_aiChecking = true;
								var eff = get.effect(target, card, player, player);
								delete player._txqyyouji_aiChecking;
								if (eff < 3) return 'zerotarget';
							}
						},
					},
				},
				mod: {
					attackRange(player, num) {
						return num + 0;
					},
				},
			},
			txmouduan: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				//_priority:2,
				audio: 2,
				filter(event, player) {
					var history = player.getHistory('useCard');
					var suits = [];
					var types = [];
					for (var i = 0; i < history.length; i++) {
						var suit = get.suit(history[i].card);
						if (suit) suits.add(suit);
						types.add(get.type(history[i].card));
					}
					return suits.length >= 4 || types.length >= 3;
				},
				check(event, player) {
					return player.canMoveCard(true);
				},
				content() {
					player.moveCard();
				},
			},
			txkaikang: {
				audio: 'kaikang',
				trigger: { global: 'useCardToTargeted' },
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.target.isIn();
				},
				check(event, player) {
					return get.attitude(player, event.target) >= 0;
				},
				logTarget: 'target',
				content() {
					'step 0';
					player.draw();
					if (trigger.target != player) {
						player.chooseCard(true, 'he', `交给${get.translation(trigger.target)}一张牌`).set('ai', function (card) {
							if (get.position(card) == 'e') return -1;
							if (card.name == 'shan') return 1;
							if (get.type(card) == 'equip') return 0.5;
							return 0;
						});
					} else {
						event.finish();
					}
					('step 1');
					player.give(result.cards, trigger.target, 'give');
					event.card = result.cards[0];
					('step 2');
					if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
						trigger.target.chooseUseTarget(card);
					}
				},
				ai: {
					threaten: 1.1,
				},
			},
			txhuangfu: {
				audio: 2,
				trigger: { player: 'damageBegin4' },
				filter(event, player) {
					return event.nature == 'thunder';
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'thunderDamage')) return 'zerotarget';
						},
					},
				},
			},
			txleizhen: {
				audio: 2,
				trigger: { player: 'die' },
				forced: true,
				forceDie: true,
				filter(event, player) {
					return event.source && event.source.isIn();
				},
				logTarget: 'source',
				skillAnimation: true,
				animationColor: 'thunder',
				content() {
					trigger.source.damage(1, 'thunder');
				},
				ai: {
					threaten: 0.7,
				},
			},
			txxiebi: {
				trigger: { player: 'damageBegin4' },
				forced: true,
				audio: true,
				filter(event, player) {
					if (event.num <= 1) return false;
					if (player.hasSkillTag('unequip2')) return false;
					if (
						event.source &&
						event.source.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					return true;
				},
				//_priority:-10,
				content() {
					trigger.num = 1;
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player, tag, arg) {
						if (player.hasSkillTag('unequip2')) return false;
						if (arg && arg.player) {
							if (
								arg &&
								arg.player.hasSkillTag('unequip', false, {
									name: arg.card ? arg.card.name : null,
									target: player,
									card: arg.card,
								})
							)
								return false;
							if (
								arg &&
								arg.player.hasSkillTag('unequip', false, {
									name: arg.card ? arg.card.name : null,
									target: player,
									card: arg.card,
								})
							)
								return false;
							if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
						}
					},
				},
			},
			txlianbi: {
				audio: 2,
				ai: {
					effect: {
						target(card) {
							if (card.name == 'tiesuo') return 'zeroplayertarget';
						},
					},
				},
				group: ['txlianbi_1'],
				subSkill: {
					1: {
						audio: 2,
						trigger: {
							player: ['linkBefore', 'enterGame'],
							global: 'phaseBefore',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'link') return player.isLinked();
							return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
						},
						content() {
							if (trigger.name != 'link') player.link(true);
							else trigger.cancel();
						},
					},
				},
			},
			txfeiyan: {
				trigger: {
					global: 'useCardToPlayer',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 && get.distance(player, event.player, 'attack') <= 1 && player.countCards('h', 'sha') > 0;
				},
				forced: true,
				content() {
					'step 0';
					var check = get.attitude(player, trigger.player) < 0;
					player
						.chooseToUse({ name: 'sha' }, `飞燕:是否对${get.translation(trigger.player)}使用一张【杀】？`)
						.set('targetRequired', true)
						.set('complexSelect', true)
						.set('filterTarget', function (card, player, target) {
							if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
							return lib.filter.filterTarget.apply(this, arguments);
						})
						.set('ai', function () {
							if (_status.event.check) return 1;
							return 0;
						})
						.set('sourcex', trigger.player)
						.set('check', check);
					('step 1');
					if (result.bool) {
						player.draw(2);
					} else event.finish();
				},
				mod: {
					aiValue(player, card, num) {
						if (card.name == 'sha') return 10;
					},
				},
			},
			txleili: {
				audio: 2,
				trigger: { source: 'damageEnd' },
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt('diyleili'), function (card, player, target) {
						if (target == trigger.player) return false;
						return target.isEnemyOf(player);
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'thunder');
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage('thunder');
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.3,
				},
			},
			cxyMoJun: {
				trigger: { global: 'damageEnd' },
				filter(event, player) {
					if (!event.source || !event.source.isAlive()) return false;
					if (get.attitude(player, event.source) < 2) return false;
					if (!event.card || event.card.name != 'sha') return false;
					return event.notLink();
				},
				forced: true,
				content() {
					'step 0';
					trigger.source.judge(function (card) {
						return get.color(card) == 'black' ? 2 : 0;
					});
					('step 1');
					if (result.bool) {
						event.targets = game.filterPlayer(function (current) {
							return get.attitude(player, current) > 0;
						});
						event.targets.sort(lib.sort.seat);
						game.asyncDraw(event.targets);
					}
				},
			},
			cxyKuangXi: {
				enable: 'phaseUse',
				filter(event, player) {
					return !player.hasSkill('cxyKuangXi_filter');
				},
				selectTarget: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				contentBefore() {
					player.addSkill('cxyKuangXi_temp');
				},
				content() {
					'step 0';
					player.loseHp();
					('step 1');
					target.damage(player);
				},
				contentAfter() {
					if (player.hasSkill('cxyKuangXi_temp')) {
						player.removeSkill('cxyKuangXi_temp');
					} else {
						player.addTempSkill('cxyKuangXi_filter', 'phaseBefore');
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							if (
								player.hp +
								player.countCards('hs', { name: ['jiu', 'tao'] }) +
								game.countPlayer(function (current) {
									return current.hasSkill('cxyBaoYing') && !current.awakenedSkills.includes('cxyBaoYing');
								}) <=
								0
							)
								return 0;
							return get.damageEffect(target, player);
						},
						player: 1,
					},
				},
				subSkill: {
					temp: {
						trigger: { global: 'dying' },
						_priority: 15,
						filter(event, player) {
							return event.reason && event.reason.parent.name == 'cxyKuangXi';
						},
						silent: true,
						content() {
							player.removeSkill('cxyKuangXi_temp');
						},
					},
					filter: {},
				},
			},
			txbaobian: {
				audio: 'baobian',
				trigger: {
					player: ['phaseBefore', 'changeHp'],
				},
				forced: true,
				popup: false,
				init(player) {
					if (game.online) return;
					player.removeAdditionalSkill('txbaobian');
					var list = [];
					if (player.hp <= 3) {
						list.push('tiaoxin');
					}
					if (player.hp <= 2) {
						list.push('paoxiao');
					}
					if (player.hp <= 1) {
						list.push('shensu');
					}
					if (list.length) {
						player.addAdditionalSkill('txbaobian', list);
					}
				},
				derivation: ['tiaoxin', 'paoxiao', 'shensu'],
				content() {
					player.removeAdditionalSkill('txbaobian');
					var list = [];
					if (player.hp <= 3) {
						list.push('tiaoxin');
					}
					if (player.hp <= 2) {
						list.push('paoxiao');
					}
					if (player.hp <= 1) {
						list.push('shensu');
					}
					if (list.length) {
						player.addAdditionalSkill('txbaobian', list);
					}
				},
				ai: {
					maixie: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [0, 1];
							}
							if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
						},
					},
				},
			},
			//*搬运自诸侯伐董扩展,作者为程序员//
			cxy_BaoYing: {
				skillAnimation: true,
				animationColor: 'fire',
				mark: true,
				intro: { content: 'limited' },
				trigger: { global: 'dying' },
				filter(event, player) {
					if (player.storage.cxy_BaoYing) return false;
					if (get.mode() == 'identity') return get.attitude(player, event.player) > 0;
					return event.player.isFriendOf(player);
				},
				logTarget: 'player',
				content() {
					player.awakenSkill('cxy_BaoYing');
					trigger.player.recover(1 - trigger.player.hp);
				},
			},
			cxyYangWu: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					'step 0';
					event.targets = game.filterPlayer(function (current) {
						return current != player;
					});
					event.targets.sort(lib.sort.seat);
					for (var i = 0; i < event.targets.length; i++) {
						event.targets[i].damage(player);
					}
					('step 1');
					player.loseHp();
				},
			},
			cxyJingQi: {
				trigger: { global: 'gameStart' },
				_priority: 16,
				forced: true,
				content() {
					event.targets = game.filterPlayer(function (current) {
						return get.attitude(player, current) > 2;
					});
					event.targets.sort(lib.sort.seat);
					for (var i = 0; i < event.targets.length; i++) {
						event.targets[i].addSkill('cxyJingQi_buff');
						event.targets[i].markSkillCharacter('cxyJingQi', player, '精骑', '你计算与敌方角色的距离-1');
					}
				},
				subSkill: {
					buff: {
						mod: {
							globalFrom(from, to, distance) {
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('cxyJingQi') && get.attitude(current, from) > 2;
									})
								) {
									return distance - 1;
								}
							},
						},
						temp: true,
						onremove(player) {
							player.unmarkSkill('cxyJingQi');
						},
						trigger: { global: 'dieAfter' },
						forced: true,
						filter(event, player) {
							return !game.hasPlayer(function (current) {
								return current.hasSkill('cxyJingQi') && get.attitude(current, player) > 2;
							});
						},
						content() {
							player.removeSkill('cxyJingQi_buff');
						},
					},
				},
			},
			cxyRuiQi: {
				trigger: { global: 'phaseDrawBegin' },
				filter(event, player) {
					return get.attitude(player, event.player) > 2;
				},
				logTarget: 'player',
				forced: true,
				content() {
					trigger.num++;
				},
				ai: {
					threaten: 2.5,
				},
			},
			cxyJiaoXia: {
				trigger: { global: 'phaseDiscardBefore' },
				filter(event, player) {
					return get.attitude(player, event.player) > 2;
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.player.addTempSkill('cxyJiaoXia_buff', 'phaseDiscardEnd');
				},
				subSkill: {
					buff: {
						mod: {
							maxHandcard(player, num) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (get.color(hs[i]) == 'black') {
										num++;
									}
								}
								return num;
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard' && get.color(card) == 'black') return false;
							},
						},
					},
				},
			},
			cxyTunJun: {
				trigger: { global: 'roundStart' },
				filter(event, player) {
					return player.maxHp != 1;
				},
				forced: true,
				content() {
					'step 0';
					player.loseMaxHp();
					('step 1');
					player.draw(Math.min(player.maxHp, 20));
				},
			},
			cxyFengYing: {
				trigger: { global: 'gameStart' },
				_priority: 15,
				forced: true,
				content() {
					event.targets = game.filterPlayer(function (current) {
						return get.attitude(player, current) > 2;
					});
					event.targets.sort(lib.sort.seat);
					for (var i = 0; i < event.targets.length; i++) {
						event.targets[i].addSkill('cxyFengYing_buff');
						event.targets[i].markSkillCharacter('cxyFengYing', player, '凤营', '若你是体力值唯一最少的角色,则敌方角色不能使用牌指定你为目标');
					}
				},
				ai: { threaten: 3 },
				subSkill: {
					buff: {
						mod: {
							targetEnabled(card, player, target) {
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('cxyFengYing') && get.attitude(current, target) > 0;
									})
								) {
									if (
										get.attitude(player, target) < 0 &&
										!game.hasPlayer(function (current) {
											return current != target && current.hp <= target.hp;
										})
									)
										return false;
								}
							},
						},
						temp: true,
						onremove(player) {
							player.unmarkSkill('cxyFengYing');
						},
						trigger: { global: 'dieAfter' },
						forced: true,
						filter(event, player) {
							return !game.hasPlayer(function (current) {
								return current.hasSkill('cxyFengYing') && get.attitude(current, player) > 2;
							});
						},
						content() {
							player.removeSkill('cxyFengYing_buff');
						},
					},
				},
			},
			cxyFanGong: {
				trigger: { target: 'useCardToAfter' },
				filter(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				forced: true,
				content() {
					player
						.chooseToUse(`是否发动反攻,对${get.translation(trigger.player)}使用一张[杀]？`, { name: 'sha' })
						.set('filterTarget', function (card, player, target) {
							return target == _status.event.source;
						})
						.set('selectTarget', -1)
						.set('source', trigger.player)
						.set('logSkill', 'cxyFanGong');
				},
			},
			cxyJieLve: {
				trigger: { source: 'damageEnd' },
				filter(event, player) {
					if (!event.player.isAlive() || event.player == player) return false;
					return event.player.num('hej') > 0;
				},
				logTarget: 'player',
				content() {
					'step 0';
					var num = 0;
					if (trigger.player.num('h')) num++;
					if (trigger.player.num('e')) num++;
					if (trigger.player.num('j')) num++;
					if (num > 0) {
						player.gainPlayerCard(trigger.player, 'hej', num, true).set('filterButton', function (button) {
							for (var i = 0; i < ui.selected.buttons.length; i++) {
								if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
							}
							return true;
						});
					} else {
						event.finish();
					}
					('step 1');
					player.link();
				},
			},
			cxyMoQu: {
				group: ['cxyMoQu_sub1', 'cxyMoQu_sub2'],
				subSkill: {
					sub1: {
						trigger: { global: 'phaseEnd' },
						filter(event, player) {
							return player.num('h') <= player.hp;
						},
						forced: true,
						content() {
							player.draw(2);
						},
					},
					sub2: {
						trigger: { global: 'damageEnd' },
						filter(event, player) {
							return event.player != player && get.attitude(player, event.player) > 0;
						},
						forced: true,
						content() {
							player.chooseToDiscard('魔躯:其他友方角色受到伤害后,你弃置一张牌', 'he', true);
						},
					},
				},
			},
			cxyYaoWu: {
				trigger: { player: 'damageBegin' },
				filter(event, player) {
					if (!event.source || !event.source.isAlive()) return false;
					return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
				},
				forced: true,
				content() {
					'step 0';
					if (trigger.source.hp == trigger.source.maxHp) {
						trigger.source.draw();
						event.finish();
					} else {
						trigger.source.chooseControl('回血', '摸牌', function (event, player) {
							return '回血';
						}).prompt = '耀武:请选择回血或摸牌';
					}
					('step 1');
					if (result.control == '回血') {
						trigger.source.recover();
					} else {
						trigger.source.draw();
					}
				},
			},
			cxyYingHun: {
				trigger: { player: 'phaseZhunbeiBegin' },
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('是否发动英魂？', function (card, player, target) {
						return target != player;
					}).ai = function (target) {
						if (get.attitude(player, target) > 2) return 5 + Math.random();
						var draw = player.maxHp - player.hp;
						var num = target.num('he') + 1;
						if (num == draw) return 4;
						if (num < draw) return Math.min(1, 4 - (draw - num));
						return Math.min(1, 4 - (draw - num) * 0.5);
					};
					('step 1');
					if (result.bool) {
						event.num = player.maxHp - player.hp;
						event.target = result.targets[0];
						event.list = [`摸${event.num}弃1`, '摸1弃' + event.num];
						player.chooseControl(event.list, function (event, player) {
							if (get.attitude(player, event.target) > 0) return event.list[0];
							return event.list[1];
						}).prompt = '英魂:请选择一项';
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == event.list[0]) {
						event.target.draw(event.num);
						event.num = 1;
					} else {
						event.target.draw(1);
					}
					('step 3');
					event.target.chooseToDiscard(`英魂:请弃置${event.num}张牌`, event.num, 'he', true);
				},
				ai: {
					//优先攻击孙坚
					threaten: 80,
				},
			},
			cxyPoLu: {
				group: ['cxyPoLu_sub1', 'cxyPoLu_sub2'],
				ai: {
					//优先攻击孙坚
					threaten: 80,
				},
				subSkill: {
					sub1: {
						trigger: { player: 'dieBegin' },
						forced: true,
						content() {
							'step 0';
							if (player.storage.cxyPoLu == undefined) {
								player.storage.cxyPoLu = 0;
							}
							player.storage.cxyPoLu++;
							event.targets = game.filterPlayer(function (target) {
								return target != player && get.attitude(player, target) > 0;
							});
							event.targets.sort(lib.sort.seat);
							('step 1');
							player.line(event.targets);
							game.asyncDraw(event.targets, player.storage.cxyPoLu);
						},
					},
					sub2: {
						trigger: { global: 'dieAfter' },
						filter(event, player) {
							return event.source && get.attitude(player, event.player) < 0 && get.attitude(player, event.source) > 0;
						},
						forced: true,
						content() {
							'step 0';
							if (player.storage.cxyPoLu == undefined) {
								player.storage.cxyPoLu = 0;
							}
							player.storage.cxyPoLu++;
							event.targets = game.filterPlayer(function (target) {
								return get.attitude(player, target) > 0;
							});
							event.targets.sort(lib.sort.seat);
							('step 1');
							player.line(event.targets);
							game.asyncDraw(event.targets, player.storage.cxyPoLu);
						},
					},
				},
			},
			//搬运诸侯伐董扩展到这.*//
			oldfuman: {
				audio: 'fuman',
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return !target.hasSkill('oldfuman2') && target != player;
				},
				filter(event, player) {
					return player.countCards('h', 'sha');
				},
				discard: false,
				lose: false,
				delay: false,
				filterCard: {
					name: 'sha',
				},
				content() {
					target.gain(cards, player, 'giveAuto').gaintag.add('oldfuman');
					target.storage.oldfuman2 = player;
					target.addTempSkill('oldfuman2', { player: 'phaseAfter' });
				},
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					order: 2,
					result: {
						target(player, target) {
							if (!target.hasSha()) return 1.2;
							return 1;
						},
					},
				},
			},
			oldfuman2: {
				mod: {
					aiOrder(player, card, num) {
						if (get.itemtype(card) == 'card' && card.hasGaintag('oldfuman') && player.storage.oldfuman2.isIn()) return num + get.sgn(get.attitude(player, player.storage.oldfuman2));
					},
				},
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					if (!player.storage.oldfuman2.isIn()) return false;
					return player.getHistory('lose', function (evt) {
						if (evt.parent != event) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes('oldfuman')) return true;
						}
						return false;
					}).length;
				},
				mark: true,
				intro: {
					content: '下个回合结束之前使用<抚蛮>牌时,令$摸一张牌',
				},
				content() {
					'step 0';
					'step 1';
					player.line(player.storage.oldfuman2, 'green');
					player.storage.oldfuman2.draw();
				},
				onremove(player) {
					delete player.storage.oldfuman2;
					player.removeGaintag('oldfuman');
				},
			},
			txhuao: {
				trigger: { player: 'phaseBegin' },
				forced: true,
				audio: 1,
				content() {
					'step 0';
					var card = get.cardPile(function (card) {
						return card.name == 'sha';
					});
					if (card) player.gain(card, 'gain2');
				},
			},
			hgkurou: {
				audio: 'kurou',
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				check(card) {
					return 8 - get.value(card);
				},
				position: 'he',
				content() {
					player.loseHp();
					player.draw(3);
					player.addTempSkill('hgkurou_effect', 'phaseAfter');
				},
				ai: {
					order: 8,
					result: {
						player(player) {
							if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
							if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
							return player.countCards('h') <= player.hp ? 1 : 0;
						},
					},
				},
			},
			hgkurou_effect: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
			},
			gdsanchen: {
				audio: 'sanchen',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					var stat = player.getStat('sanchen');
					return game.hasPlayer(function (current) {
						return !stat || !stat.includes(current);
					});
				},
				filterTarget(card, player, target) {
					var stat = player.getStat('sanchen');
					return !stat || !stat.includes(target);
				},
				content() {
					'step 0';
					var stat = player.getStat();
					if (!stat.sanchen) stat.sanchen = [];
					stat.sanchen.push(target);
					target.draw(3);
					('step 1');
					if (!target.countCards('he')) event.finish();
					else
						target.chooseToDiscard('he', true, 3).set('ai', function (card) {
							var list = ui.selected.cards.map(function (i) {
								return get.type2(i);
							});
							if (!list.includes(get.type2(card))) return 7 - get.value(card);
							return -get.value(card);
						});
					('step 2');
					if (result.bool && result.cards && result.cards.length) {
						var list = [];
						for (var i of result.cards) list.add(get.type2(i));
						if (list.length == result.cards.length) {
							target.draw();
							player.getStat('skill').gdsanchen--;
							player.addMark('gdsanchen', 1);
						}
					} else {
						target.draw();
						player.getStat('skill').sanchen--;
						player.addMark('gdsanchen', 1);
					}
				},
				ai: {
					order: 9,
					threaten: 1.7,
					result: {
						target(player, target) {
							if (target.hasSkillTag('nogain')) return 0.1;
							return Math.sqrt(target.countCards('he'));
						},
					},
				},
				marktext: '陈',
				intro: {
					name2: '陈',
					content: 'mark',
				},
			},
			txlveming: {
				init(player) {
					player.storage.txlveming = 0;
				},
				mark: true,
				intro: {
					content: '已发动过#次',
				},
				audio: 'xinfu_lveming',
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.countCards('e') > player.countCards('e');
				},
				content() {
					'step 0';
					var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
					target
						.chooseControl(list)
						.set('ai', function () {
							return get.rand(0, 12);
						})
						.set('prompt', '请选择一个点数');
					('step 1');
					if (result.control) {
						target.$damagepop(result.control, 'thunder');
						var num = result.index + 1;
						event.num = num;
					} else {
						target.$damagepop('K', 'thunder');
						event.num = 13;
					}
					game.log(target, '选择的点数是', '#y' + get.strNumber(event.num));
					player.storage.txlveming++;
					player.judge(function (card) {
						if (card.number == _status.event.getParent('txlveming').num) return 4;
						return 0;
					});
					('step 2');
					if (result.bool == true) {
						target.damage(3);
					} else {
						var card = target.getCards('hej').randomGet();
						player.gain(card, target, 'giveAuto', 'bySelf');
						target.damage(1);
					}
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							var numj = target.countCards('j');
							var numhe = target.countCards('he');
							if (numhe == 0) return numj > 0 ? 6 : -6;
							return -6 - (numj + 1) / numhe;
						},
					},
					threaten: 1.1,
				},
			},
			txdaoxi: {
				audio: 'jixi',
				usable: 3,
				filter(event, player) {
					return player.countCards('hes', { color: 'red' }) > 0;
				},
				enable: 'chooseToUse',
				filterCard(card) {
					return get.color(card) == 'red';
				},
				position: 'hes',
				viewAs: { name: 'shunshou' },
				prompt: '将一张红色牌当顺手牵羊使用',
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					threaten: 1.5,
				},
			},
			txlangxi: {
				audio: 'xinfu_langxi',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player;
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('txlangxi'), '对一名体力值不大于你的其他角色造成2-4点随机伤害', function (card, player, target) {
							return target != player;
						})
						.set('ai', function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					('step 1');
					if (result.bool && result.targets && result.targets.length) {
						var num = [2, 3, 4].randomGet();
						if (get.isLuckyStar(player)) num = 4;
						player.line(result.targets[0], 'green');
						result.targets[0].damage(num);
					}
				},
				ai: {
					expose: 0.25,
					threaten: 1.7,
				},
			},
			txkuangyi: {
				usable: 1,
				audio: 'xinfu_yisuan',
				trigger: {
					player: 'useCardEnd',
				},
				check(event, player) {
					return get.value(event.cards) + player.maxHp * 2 - 18 > 0;
				},
				prompt2(event, player) {
					return `你横置武将牌,然后获得${get.translation(event.cards.filterInD())}.`;
				},
				filter(event, player) {
					return player.isPhaseUsing() && get.type(event.card) !== 'trick' && get.type(event.card) == 'basic' && event.cards.filterInD().length;
				},
				content() {
					player.link();
					player.gain(trigger.cards.filterInD(), 'gain2', 'log');
				},
			},
			txtanbei: {
				audio: 'xinfu_tanbei',
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					'step 0';
					if (target.countCards('hej') == 0) {
						event._result = { index: 1 };
					} else {
						target
							.chooseControl()
							.set('choiceList', [`令${get.translation(player)}随机获得你区域内的一张牌,然后其本回合内不能再对你使用牌.`, `令${get.translation(player)}本回合内对你使用牌没有次数与距离限制.`])
							.set('ai', function () {
								var list = [0, 1];
								return list.randomGet();
							});
					}
					('step 1');
					player.addTempSkill('txtanbei_effect3');
					if (result.index == 0) {
						var card = target.getCards('hej').randomGet();
						player.gain(card, target, 'giveAuto', 'bySelf');
						target.addTempSkill('txtanbei_effect2');
					} else {
						target.addTempSkill('txtanbei_effect1');
						target.addTempSkill('fengyin');
					}
				},
				ai: {
					order() {
						return [2, 4, 6, 8, 10].randomGet();
					},
					result: {
						target(player, target) {
							return -2 - target.countCards('h');
						},
					},
					threaten: 1.1,
				},
			},
			txtanbei_effect3: {
				charlotte: true,
				mod: {
					targetInRange(card, player, target) {
						if (target.hasSkill('txtanbei_effect1')) {
							return true;
						}
					},
					cardUsableTarget(card, player, target) {
						if (target.hasSkill('txtanbei_effect1')) return true;
					},
					playerEnabled(card, player, target) {
						if (target.hasSkill('txtanbei_effect2')) return true;
					},
				},
			},
			txtanbei_effect1: {
				charlotte: true,
			},
			txtanbei_effect2: {
				charlotte: true,
			},
			ljxuechi: {
				audio: 2,
				trigger: { global: 'recoverBefore' },
				filter(event, player) {
					return player.countCards('h') < 3;
				},
				forced: true,
				content() {
					trigger.cancel();
					player.draw();
				},
			},
			txzhuxin: {
				trigger: {
					global: 'dying',
				},
				filter(event, player) {
					return event.source == player;
				},
				forced: true,
				content() {
					trigger.player.die()._triggered = null;
				},
			},
			txyicheng: {
				audio: 'olyicheng',
				trigger: { global: 'useCardToTargeted' },
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				preHidden: true,
				content() {
					'step 0';
					trigger.target.draw();
					('step 1');
					trigger.target.chooseToDiscard('he', true);
				},
			},
			txnianrui: {
				trigger: { player: 'phaseDrawBegin' },
				forced: true,
				content() {
					trigger.num += 2;
				},
				ai: {
					threaten: 1.6,
				},
			},
			txmengtai: {
				group: ['txmengtai_begin', 'txmengtai_draw', 'txmengtai_use', 'txmengtai_discard', 'txmengtai_end'],
				subSkill: {
					begin: {
						trigger: { player: 'phaseZhunbeiBegin' },
						forced: true,
						popup: false,
						content() {
							player.storage.txmengtai_draw = true;
							player.storage.txmengtai_use = true;
						},
					},
					draw: {
						trigger: { player: 'phaseDrawBegin' },
						forced: true,
						popup: false,
						content() {
							player.storage.txmengtai_draw = false;
						},
					},
					use: {
						trigger: { player: 'phaseUseBegin' },
						forced: true,
						popup: false,
						content() {
							player.storage.txmengtai_use = false;
						},
					},
					discard: {
						trigger: { player: 'phaseDiscardBefore' },
						forced: true,
						filter(event, player) {
							if (player.storage.txmengtai_use) return true;
							return false;
						},
						content() {
							trigger.cancel();
						},
					},
					end: {
						trigger: { player: 'phaseJieshuBegin' },
						forced: true,
						filter(event, player) {
							if (player.storage.txmengtai_draw) return true;
							return false;
						},
						content() {
							player.draw(3);
						},
					},
				},
			},
			txshouyi: {
				mod: {
					targetInRange() {
						return true;
					},
				},
			},
			txrenxing: {
				trigger: { global: ['damageEnd', 'recoverEnd'] },
				forced: true,
				filter(event, player) {
					return _status.currentPhase != player;
				},
				content() {
					player.draw();
				},
			},
			txyinli: {
				audio: 2,
				trigger: { global: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					return (
						player != event.player &&
						game.getGlobalHistory('cardMove', function (evt) {
							if (evt.name != 'lose' || evt.type != 'discard') return false;
							for (var i of evt.cards) {
								if (get.type(i, false) == 'equip' && get.position(i, true) == 'd') return true;
							}
							return false;
						}).length
					);
				},
				content() {
					'step 0';
					var cards = [];
					game.getGlobalHistory('cardMove', function (evt) {
						if (evt.name != 'lose' || evt.type != 'discard') return false;
						for (var i of evt.cards) {
							if (get.type(i, false) == 'equip' && get.position(i, true) == 'd') cards.push(i);
						}
					});
					player.chooseButton(['姻礼:获得装备牌', cards], [1, Infinity]).set('ai', function (button) {
						return get.value(button.link, _status.event.player);
					});
					('step 1');
					if (result.bool) player.gain(result.links, 'gain2');
				},
			},
			txzhulian: {
				audio: 'mouzhu',
				trigger: {
					global: 'gameStart',
				},
				forced: true,
				content() {
					if (!player.isLinked()) player.link();
				},
				ai: {
					result: {
						player(player, target) {
							return 1;
						},
					},
				},
				group: ['txzhulian_link', 'txzhulian_damage'],
				subSkill: {
					link: {
						audio: 'mouzhu',
						trigger: {
							player: 'linkAfter',
						},
						filter(event, player) {
							return !player.isLinked();
						},
						forced: true,
						content() {
							player.link();
						},
					},
					damage: {
						audio: 'mouzhu',
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						content() {
							var players = game.filterPlayer();
							for (var i of players) {
								if (i == player) continue;
								if (get.distance(player, i, 'attack') > 1) continue;
								if (i.isLinked()) continue;
								i.link();
							}
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (card.name == 'tiesuo') return 'zerotarget';
									if (get.tag(card, 'damage') && get.tag(card, 'natureDamage')) {
										var players = game.filterPlayer();
										var count = 0;
										for (var i of players) {
											if (i == target) continue;
											if (get.distance(target, i, 'attack') > 1) continue;
											if (i.isLinked()) continue;
											count += get.damageEffect(i, player, target);
										}
										return [1, count];
									}
								},
							},
						},
					},
				},
			},
			txkeji: {
				audio: 'keji',
				forced: true,
				trigger: {
					player: 'phaseDiscardBegin',
				},
				filter(event, player) {
					var list = [];
					player.getHistory('useCard', function (evt) {
						if (evt.isPhaseUsing(player)) {
							var color = get.color(evt.card);
							if (color != 'nocolor') list.add(color);
						}
					});
					return list.length <= 1;
				},
				content() {
					player.addTempSkill('txkeji_add', 'phaseAfter');
				},
			},
			txkeji_add: {
				mod: {
					maxHandcard(player, num) {
						return num + 4;
					},
				},
			},
			txnangce: {
				audio: 1,
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return get.type(event.card) == 'trick';
				},
				check(event, player) {
					return get.attitude(player, _status.currentPhase) > 0;
				},
				content() {
					player.line(_status.currentPhase, 'green');
					_status.currentPhase.draw();
				},
				ai: {
					threaten: 1.4,
					noautowuxie: true,
				},
			},
			txduanzui: {
				skillAnimation: true,
				animationColor: 'fire',
				audio: true,
				trigger: { player: 'phaseEnd' },
				//forced:true,
				filter(event, player) {
					for (var i of game.players) {
						if (i != player && i.num('h')) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						var hs = current.get('h');
						if (hs.length && hs.length < 3) {
							current.damage('fire', 3 - hs.length);
						}
						event.redo();
					}
				},
			},
			txyingyang: {
				audio: 2,
				trigger: { player: 'compare', target: 'compare' },
				filter(event, player) {
					return !event.iwhile;
				},
				forced: true,
				preHidden: true,
				content() {
					'step 0';
					player
						.chooseControl('点数+3', '点数-3', 'cancel2')
						.set('prompt', get.prompt2('txyingyang'))
						.set('ai', function () {
							if (_status.event.small) return 1;
							else return 0;
						})
						.set('small', trigger.small);
					('step 1');
					if (result.index != 2) {
						if (result.index == 0) {
							game.log(player, '拼点牌点数+3');
							if (player == trigger.player) {
								trigger.num1 += 3;
								if (trigger.num1 > 13) trigger.num1 = 13;
							} else {
								trigger.num2 += 3;
								if (trigger.num2 > 13) trigger.num2 = 13;
							}
						} else {
							game.log(player, '拼点牌点数-3');
							if (player == trigger.player) {
								trigger.num1 -= 3;
								if (trigger.num1 < 1) trigger.num1 = 1;
							} else {
								trigger.num2 -= 3;
								if (trigger.num2 < 1) trigger.num2 = 1;
							}
						}
					}
				},
			},
			mdqianxi7: {
				audio: 'qianxi',
				trigger: { player: 'phaseZhunbeiBegin' },
				preHidden: true,
				content() {
					'step 0';
					player.draw();
					player.chooseToDiscard('he', true);
					('step 1');
					if (!result.bool) {
						event.finish();
						return;
					}
					event.color = get.color(result.cards[0], result.cards[0].original == 'h' ? player : false);
					player
						.chooseTarget(function (card, player, target) {
							return player != target && get.distance(player, target) <= 1;
						}, true)
						.set('ai', function (target) {
							return -get.attitude(_status.event.player, target);
						});
					('step 2');
					if (result.bool && result.targets.length) {
						result.targets[0].storage.mdqianxi72 = event.color;
						result.targets[0].addTempSkill('mdqianxi72');
						player.line(result.targets, 'green');
						game.addVideo('storage', result.targets[0], ['mdqianxi72', event.color]);
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (!arg.target.hasSkill('mdqianxi72')) return false;
						if (arg && arg.card.name == 'sha')
							return (
								arg.target.storage.mdqianxi72 == 'red' &&
								(!arg.target.getEquip('bagua') ||
									player.hasSkillTag('unequip', false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}) ||
									player.hasSkillTag('unequip', false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}))
							);
						return arg.target.storage.mdqianxi72 == 'black';
					},
				},
			},
			mdqianxi72: {
				//trigger:{global:'phaseAfter'},
				forced: true,
				mark: true,
				content() {
					player.removeSkill('mdqianxi72');
					delete player.storage.mdqianxi72;
				},
				mod: {
					cardEnabled2(card, player) {
						if (get.color(card) == player.storage.mdqianxi72 && get.position(card) == 'h') return false;
					},
				},
				intro: {
					content(color) {
						return `不能使用或打出${get.translation(color)}的手牌`;
					},
				},
			},
			mdqianxi: {
				audio: 'qianxi',
				trigger: { player: 'phaseZhunbeiBegin' },
				content() {
					'step 0';
					player.judge();
					('step 1');
					event.color = result.color;
					player
						.chooseTarget(function (card, player, target) {
							return player != target && get.distance(player, target) <= 1;
						}, true)
						.set('ai', function (target) {
							return -get.attitude(_status.event.player, target);
						});
					('step 2');
					if (result.bool && result.targets.length) {
						result.targets[0].storage.mdqianxi72 = event.color;
						result.targets[0].addSkill('mdqianxi72');
						player.line(result.targets, 'green');
						game.addVideo('storage', result.targets[0], ['mdqianxi72', event.color]);
					}
				},
			},
			zylongdan: {
				group: ['zylongdan_sha', 'zylongdan_shan', 'zylongdan_draw', 'zylongdan_shamiss', 'zylongdan_shanafter'],
				subSkill: {
					shanafter: {
						audio: 'longdan_sha',
						trigger: {
							player: 'useCard',
						},
						//_priority:1,
						filter(event, player) {
							return event.skill == 'zylongdan_shan' && event.getParent(2).name == 'sha';
						},
						forced: true,
						content() {
							'step 0';
							player
								.chooseTarget('是否发动【龙胆】令一名其他角色回复1点体力？', function (card, player, target) {
									return target != _status.event.source && target != player && target.isDamaged();
								})
								.set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								})
								.set('source', trigger.getParent(2).player);
							('step 1');
							if (result.bool && result.targets && result.targets.length) {
								result.targets[0].recover();
							}
						},
					},
					shamiss: {
						audio: 'longdan_sha',
						trigger: {
							player: 'shaMiss',
						},
						forced: true,
						filter(event, player) {
							return event.skill == 'zylongdan_sha';
						},
						content() {
							'step 0';
							player
								.chooseTarget('是否发动【龙胆】对一名其他角色造成1点伤害？', function (card, player, target) {
									return target != _status.event.target && target != player;
								})
								.set('ai', function (target) {
									return -get.attitude(_status.event.player, target);
								})
								.set('target', trigger.target);
							('step 1');
							if (result.bool && result.targets && result.targets.length) {
								result.targets[0].damage();
							}
						},
					},
					draw: {
						trigger: {
							player: ['useCard', 'respond'],
						},
						audio: 'longdan_sha',
						forced: true,
						filter(event, player) {
							if (!get.zhu(player, 'shouyue')) return false;
							return event.skill == 'zylongdan_sha' || event.skill == 'zylongdan_shan';
						},
						content() {
							player.draw();
							//player.storage.fanghun2++;
						},
					},
					sha: {
						audio: 'longdan_sha',
						enable: ['chooseToUse', 'chooseToRespond'],
						filterCard: {
							name: 'shan',
						},
						viewAs: {
							name: 'sha',
						},
						position: 'hs',
						viewAsFilter(player) {
							if (!player.countCards('hs', 'shan')) return false;
						},
						prompt: '将一张闪当杀使用或打出',
						check() {
							return 1;
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6;
								},
							},
							respondSha: true,
							skillTagFilter(player) {
								if (!player.countCards('hs', 'shan')) return false;
							},
							order() {
								return get.order({ name: 'sha' }) + 0.1;
							},
						},
					},
					shan: {
						audio: 'longdan_sha',
						enable: ['chooseToRespond', 'chooseToUse'],
						filterCard: {
							name: 'sha',
						},
						viewAs: {
							name: 'shan',
						},
						position: 'hs',
						prompt: '将一张杀当闪使用或打出',
						check() {
							return 1;
						},
						viewAsFilter(player) {
							if (!player.countCards('hs', 'sha')) return false;
						},
						ai: {
							respondShan: true,
							skillTagFilter(player) {
								if (!player.countCards('hs', 'sha')) return false;
							},
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondShan') && current < 0) return 0.6;
								},
							},
						},
					},
				},
			},
			zglkongcheng: {
				audio: 2, //QQQ
				group: ['zglkongcheng_gain', 'zglkongcheng_got'],
				trigger: {
					target: 'useCardToTarget',
				},
				forced: true,
				check(event, player) {
					return get.effect(event.target, event.card, event.player, player) < 0;
				},
				filter(event, player) {
					return player.countCards('h') == 0 && (event.card.name == 'sha' || event.card.name == 'juedou');
				},
				content() {
					trigger.parent.targets.remove(player);
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.countCards('h') == 0 && (card.name == 'sha' || card.name == 'juedou')) return 'zeroplayertarget';
						},
					},
				},
				intro: {
					markcount: 'expansion',
					mark(dialog, content, player) {
						var content = player.getExpansions('zglkongcheng');
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								dialog.addAuto(content);
							} else {
								return `共有${get.cnNumber(content.length)}张牌`;
							}
						}
					},
					content(content, player) {
						var content = player.getExpansions('zglkongcheng');
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								return get.translation(content);
							}
							return `共有${get.cnNumber(content.length)}张牌`;
						}
					},
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				subSkill: {
					gain: {
						audio: 'zglkongcheng',
						trigger: {
							player: 'gainBefore',
						},
						filter(event, player) {
							return event.source && event.source != player && player != _status.currentPhase && !event.bySelf && player.countCards('h') == 0;
						},
						content() {
							trigger.name = 'addToExpansion';
							trigger.setContent('addToExpansion');
							trigger.gaintag = ['zglkongcheng'];
							trigger.untrigger();
							trigger.trigger('addToExpansionBefore');
						},
						forced: true,
					},
					got: {
						trigger: {
							player: 'phaseDrawBegin1',
						},
						filter(event, player) {
							return player.getExpansions('zglkongcheng').length;
						},
						content() {
							player.gain(player.getExpansions('zglkongcheng'), 'draw');
						},
						forced: true,
					},
				},
			},
			txjuxiang: {
				audio: 'sbjuxiang',
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				filter(event, player) {
					return !player.hasHistory('useCard', (evt) => evt.card.name == 'nanman') && (!_status.txjuxiang_nanman || _status.txjuxiang_nanman.length);
				},
				group: ['txjuxiang_cancel', 'txjuxiang_gain'],
				content() {
					'step 0';
					if (!_status.txjuxiang_nanman) {
						_status.txjuxiang_nanman = [
							{ name: 'nanman', number: 7, suit: 'spade' },
							{ name: 'nanman', number: 9, suit: 'club' },
						];
						game.broadcastAll(function () {
							if (!lib.inpile.includes('nanman')) lib.inpile.add('nanman');
						});
					}
					player.chooseTarget(get.prompt('txjuxiang'), `将游戏外的随机一张【南蛮入侵】交给一名角色(剩余${get.cnNumber(_status.txjuxiang_nanman.length)}张)`).set('ai', (target) => {
						var player = _status.event.player;
						return Math.max(0, target.getUseValue({ name: 'nanman' })) * get.attitude(player, target) * (target == player ? 0.5 : 1);
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						if (!_status.txjuxiang_nanman.length) return;
						var info = _status.txjuxiang_nanman.randomRemove();
						var card = game.createCard2(info);
						target.gain(card, 'gain2').giver = player;
					}
				},
				ai: {
					expose: 0.05,
					effect: {
						target(card) {
							if (card.name == 'nanman') return [0, 1];
						},
					},
				},
				subSkill: {
					cancel: {
						audio: 'sbjuxiang',
						trigger: { target: 'useCardToBefore' },
						forced: true,
						_priority: 15,
						filter(event, player) {
							return event.card && event.card.name == 'nanman';
						},
						content() {
							trigger.cancel();
						},
					},
					gain: {
						audio: 'sbjuxiang',
						trigger: { global: 'useCardAfter' },
						forced: true,
						filter(event, player) {
							return event.card && event.card.name == 'nanman' && event.player != player && event.cards.filterInD().length;
						},
						content() {
							player.gain(trigger.cards.filterInD(), 'gain2');
						},
					},
				},
			},
			txdaoji: {
				audio: 'daoji',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.hasCard(lib.skill.txdaoji.filterCard, 'he');
				},
				filterCard(card) {
					return get.type(card) != 'basic';
				},
				position: 'he',
				filterTarget(card, player, target) {
					return target != player && target.hasCard((card) => lib.filter.canBeGained(card, target, player), 'he');
				},
				check(card) {
					return 8 - get.value(card);
				},
				content() {
					'step 0';
					player.gainPlayerCard(target, 'he', true);
					('step 1');
					if (result.bool && result.cards && result.cards.length == 1) {
						var card = result.cards[0];
						if (player.getCards('h').includes(card)) {
							var type = get.type(card);
							if (type == 'basic') player.draw();
							else if (type == 'equip') {
								if (player.hasUseTarget(card)) player.chooseUseTarget(card, 'nopopup', true);
								target.damage('nocard');
							}
						}
					}
				},
				ai: {
					order: 6,
					result: {
						target(player, target) {
							var eff = get.effect(target, { name: 'shunshou_copy2' }, player, target);
							if (target.countCards('e') > 0) eff += get.damageEffect(target, player, target);
							return eff;
						},
					},
				},
			},
			txhj_suoming: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && !current.isLinked();
					});
				},
				content() {
					'step 0';
					var num = game.countPlayer(function (current) {
						return current != player && !current.isLinked();
					});
					player.chooseTarget(get.prompt('txhj_suoming'), [1, num], function (card, player, target) {
						return !target.isLinked() && player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						event.targets = result.targets;
						event.num = 0;
					} else {
						event.finish();
					}
					('step 2');
					if (event.num < event.targets.length) {
						event.targets[event.num].link();
						event.num++;
						event.redo();
					}
				},
			},
			txhj_huangmen: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h') === 0;
				},
				content() {
					var players = player.getEnemies();
					('step 0');
					player
						.chooseControl(['摸两张牌', '随机获得一名敌方角色的一张牌.'])
						.set('prompt', '黄门:请选择一项')
						.set('ai', function () {
							return Math.random() < 0.5 ? 0 : 1;
						});
					('step 1');
					if (result.index === 0) {
						player.draw(2);
					} else {
						var target = players.randomGet();
						var cards = target.getCards('he');
						if (cards.length) {
							player.gain(cards.randomGet(), 'gain2');
						}
					}
				},
			},
			txhj_mouqiang: {
				audio: 2,
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.num > 1 && event.source;
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('txhj_mouqiang'), function (card, player, target) {
							return true;
						})
						.set('ai', function (target) {
							return get.attitude(player, target);
						});
					('step 1');
					if (result.bool) {
						player.gainPlayerCard(result.targets[0], Math.floor(trigger.num / 2), 'he', true);
						result.targets[0].damage();
					}
					('step 2');
					if (result.bool) {
						result.cards.forEach((i) => (get.type(i) === 'basic' ? player.recover() : trigger.source.damage()));
					}
				},
			},
			txhj_suzhi: {
				audio: 'gzsuzhi',
				derivation: 'fankui',
				mod: {
					targetInRange(card, player, target) {
						if (player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && get.type2(card) == 'trick') return true;
					},
				},
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				filter(event, player) {
					return player.countMark('txhj_suzhi_count') < 3;
				},
				content() {
					player.addTempSkill('fankui', { player: 'phaseBegin' });
				},
				group: ['txhj_suzhi_damage', 'txhj_suzhi_draw', 'txhj_suzhi_gain'],
				preHidden: ['txhj_suzhi_damage', 'txhj_suzhi_draw', 'txhj_suzhi_gain'],
				subSkill: {
					damage: {
						audio: 'txhj_suzhi',
						trigger: { source: 'damageBegin1' },
						forced: true,
						filter(event, player) {
							return player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.type == 'card';
						},
						content() {
							trigger.num++;
							player.addTempSkill('txhj_suzhi_count');
							player.addMark('txhj_suzhi_count', 1, false);
						},
					},
					draw: {
						audio: 'txhj_suzhi',
						trigger: { player: 'useCard' },
						forced: true,
						filter(event, player) {
							return player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && event.card.isCard && get.type2(event.card) == 'trick';
						},
						content() {
							player.draw();
							player.addTempSkill('txhj_suzhi_count');
							player.addMark('txhj_suzhi_count', 1, false);
						},
					},
					gain: {
						audio: 'txhj_suzhi',
						trigger: { global: 'loseAfter' },
						forced: true,
						filter(event, player) {
							if (player != _status.currentPhase || event.type != 'discard' || player == event.player || player.countMark('txhj_suzhi_count') >= 3) return false;
							return event.player.countGainableCards(player, 'he') > 0;
						},
						logTarget: 'player',
						content() {
							'step 0';
							player.addTempSkill('txhj_suzhi_count');
							player.addMark('txhj_suzhi_count', 1, false);
							('step 1');
							player.gainPlayerCard(trigger.player, 'he', true);
						},
					},
					count: {},
				},
			},
			txmanjia: {
				group: ['txmanjia1', 'txmanjia2'],
			},
			txmanjia1: {
				trigger: { target: ['useCardToBefore', 'shaBegin'] },
				forced: true,
				_priority: 6,
				filter(event, player, name) {
					if (player.getEquip(2)) return false;
					if (name == 'shaBegin') return lib.skill.tengjia3.filter(event, player);
					return lib.skill.tengjia1.filter(event, player);
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.getEquip(2)) return;
							if (target.hasSkillTag('unequip2')) return;
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								}) ||
								player.hasSkillTag('unequip_ai', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								})
							)
								return;
							if (card.name == 'nanman' || card.name == 'wanjian') return 'zeroplayertarget';
							if (card.name == 'sha') {
								var equip1 = player.getEquip('zhuque');
								if (equip1 && equip1.name == 'zhuque') return 1.9;
								if (!game.hasNature(card)) return 'zeroplayertarget';
							}
						},
					},
				},
			},
			txmanjia2: {
				trigger: { player: 'damageBegin3' },
				filter(event, player) {
					if (player.getEquip(2)) return false;
					if (event.nature == 'fire') return true;
				},
				forced: true,
				check() {
					return false;
				},
				content() {
					trigger.num++;
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.getEquip(2)) return;
							if (card.name == 'sha') {
								if (game.hasNature(card, 'fire')) return 2;
								if (player.hasSkill('zhuque_skill')) return 1.9;
							}
							if (get.tag(card, 'fireDamage') && current < 0) return 2;
						},
					},
				},
			},
			//以下此技能是搬运自云将扩展的云花鬘蛮氏技能.
			txmanzhen: {
				audio: 2,
				trigger: {
					target: 'useCardToBefore',
				},
				forced: true,
				_priority: 15,
				filter(event, player) {
					return event.card && event.card.name == 'nanman';
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'nanman') return 'zeroplayertarget';
						},
					},
				},
				group: ['txmanzhen_Use', 'txmanzhen_damage'],
				subSkill: {
					Use: {
						audio: 'txmanzhen',
						enable: 'phaseUse',
						viewAs: {
							name: 'nanman',
						},
						usable: 1,
						filterCard: true,
						prompt: '将任意张手牌当做【南蛮入侵】并指定等量的角色使用',
						selectCard() {
							if (ui.selected.targets.length) return [ui.selected.targets.length, Math.min(ui.selected.targets.length + 1, game.players.length - 1)];
							return [1, game.countPlayer() - 1];
						},
						check(card) {
							var player = _status.event.player;
							if (
								game.countPlayer(function (current) {
									return (
										current != player &&
										player.canUse('nanman', current) &&
										get.effect(
											current,
											{
												name: 'nanman',
											},
											player,
											player
										) > 0
									);
								}) <= ui.selected.cards.length
							)
								return 0;
							return 7 - get.value(card);
						},
						selectTarget() {
							return ui.selected.cards.length;
						},
						ai: {
							basic: {
								order: 9,
								useful: [5, 1],
								value: 5,
							},
							result: {
								target_use(player, target) {
									var nh = target.countCards('h');
									if (nh == 0) return -2;
									if (nh == 1) return -1.7;
									return -1.5;
								},
								target(player, target) {
									var nh = target.countCards('h');
									if (nh == 0) return -2;
									if (nh == 1) return -1.7;
									return -1.5;
								},
							},
							tag: {
								respond: 1,
								respondSha: 1,
								damage: 1,
								multitarget: 1,
								multineg: 1,
							},
						},
					},
					damage: {
						audio: 'txmanzhen',
						trigger: {
							source: 'damageBegin1',
						},
						check(event, player) {
							if (get.attitude(player, event.player) < 0 && player.storage.yunzhanyuan == false && player.hp > 1) return true;
							if (get.attitude(player, event.player) < 0 && player.storage.yunzhanyuan == true && player.hp > 2) return true;
							return false;
						},
						filter(event, player) {
							return event.player.hp >= player.hp && event.card && event.card.name == 'nanman';
						},
						preHidden: true,
						prompt(event, player) {
							var str = '';
							str += `是否失去一点体力令${get.translation(event.player)}受到的伤害加一？`;
							return str;
						},
						content() {
							player.loseHp();
							trigger.num++;
						},
					},
				},
			},
			//到这.
			txfusha: {
				audio: 1,
				trigger: { source: 'damageBegin1' },
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.notLink();
				},
				forced: true,
				content() {
					trigger.num++;
				},
			},
			txleizhou: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					var list = game.players.slice(0);
					list.remove(player);
					if (list.length) {
						var target = list.randomGet();
						player.line(target);
						target.damage('thunder');
					}
				},
			},
			//小震怒
			txzhennu: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txzhennu'), function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player);
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage();
					}
				},
			},
			txyongguan: {
				audio: 2,
				forced: true,
				trigger: { player: 'damageBegin4' },
				marktext: '勇',
				intro: {
					name2: '勇',
					content: '共有#个<勇>',
				},
				content() {
					trigger.cancel();
					player.addMark('txyongguan', trigger.num);
				},
				group: 'txyongguan_fate',
			},
			txyongguan_fate: {
				audio: 'txyongguan',
				trigger: { player: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					return player.countMark('txyongguan') > 0;
				},
				content() {
					'step 0';
					event.forceDie = true;
					_status.txyongguan = player.countMark('txyongguan');
					('step 1');
					delete _status.txyongguan;
					if (!result.bool) {
						player.chooseToDiscard([1, player.countMark('txyongguan')], 'h').ai = lib.skill.qiangxi.check;
					} else event.finish();
					('step 2');
					var num = player.countMark('txyongguan');
					if (result.cards && result.cards.length) num -= result.cards.length;
					if (num > 0) player.loseHp(num);
					player.removeMark('txyongguan', 999);
				},
			},
			txchengyuan: {
				audio: 'hanyong',
				group: ['txchengyuan_color', 'txchengyuan_color2'],
				subSkill: {
					color: {
						trigger: { player: 'phaseZhunbeiBegin' },
						silent: true,
						content() {
							player.storage.txchengyuan_color = ['black', 'red'];
						},
					},
					color2: {
						trigger: { player: 'useCard' },
						silent: true,
						filter(event, player) {
							return Array.isArray(player.storage.txchengyuan_color) && _status.currentPhase == player;
						},
						content() {
							player.storage.txchengyuan_color.remove(get.color(trigger.card));
						},
					},
				},
				trigger: { player: 'phaseDiscardBegin' },
				forced: true,
				filter(event, player) {
					if (!player.storage.txchengyuan_color) return false;
					var length = player.storage.txchengyuan_color.length;
					if (length == 0) return false;
					var hs = player.getCards('h');
					if (hs.length == 0) return false;
					if (length == 2) return true;
					var color = player.storage.txchengyuan_color[0];
					for (var i = 0; i < hs.length; i++) {
						if (get.color(hs[i]) == color) return true;
					}
					return false;
				},
				intro: {
					content: 'cards',
				},
				init(player) {
					player.storage.txchengyuan = [];
				},
				content() {
					'step 0';
					player
						.chooseCard(get.prompt('txchengyuan'), function (card) {
							return _status.event.player.storage.txchengyuan_color.includes(get.color(card));
						})
						.set('ai', function (card) {
							var player = _status.event.player;
							if (player.storage.txchengyuan.length == 2) {
								if (
									!game.hasPlayer(function (current) {
										return current != player && get.damageEffect(current, player, player) > 0 && get.attitude(player, current) < 0;
									})
								)
									return 0;
							}
							return 7 - get.value(card);
						});
					('step 1');
					if (result.bool) {
						if (player.storage.txchengyuan.length < 2) {
							player.$give(result.cards, player);
						}
						player.lose(result.cards, ui.special);
						player.storage.txchengyuan = player.storage.txchengyuan.concat(result.cards);
						player.markSkill('txchengyuan');
						player.syncStorage('txchengyuan');
					} else {
						event.finish();
					}
					('step 2');
					if (player.storage.txchengyuan.length == 3) {
						player.$throw(player.storage.txchengyuan);
						while (player.storage.txchengyuan.length) {
							player.storage.txchengyuan.shift().discard();
						}
						player.unmarkSkill('txchengyuan');
						player
							.chooseTarget(function (card, player, target) {
								return target != player;
							}, '对一名其他角色造成两点伤害并弃置其装备区内的牌')
							.set('ai', function (target) {
								var player = _status.event.player;
								if (get.attitude(player, target) > 0) return -1;
								return get.damageEffect(target, player, player) + target.countCards('e') / 2;
							});
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool) {
						var target = result.targets[0];
						target.damage(2);
						event.target = target;
						player.line(target, 'green');
					} else {
						event.finish();
					}
					('step 4');
					if (event.target && event.target.isIn()) {
						var es = event.target.getCards('e');
						if (es.length) {
							event.target.discard(es);
						}
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			txbenji: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forceDie: true,
				forced: true,
				content() {
					'step 0';
					player
						.chooseTarget('【奔激】:请选择一名角色,令其受到X点伤害(X为你损失的体力值).', function (card, player, target) {
							return game.hasPlayer(function (current) {
								return current != player;
							});
						})
						.set('forceDie', true).ai = function (target) {
							return -get.attitude(_status.event.player, target);
						};
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						target.damage(player.getDamagedHp());
						if (
							target.isIn() &&
							!target.hasHistory('damage', function (evt) {
								return evt.getParent('txbenji') == event && evt._dyinged;
							})
						)
							player.loseHp();
					}
				},
			},
			txyonglve: {
				audio: 2,
				enable: 'chooseCard',
				check(event, player) {
					var player = _status.event.player;
					return !player.hasCard(function (card) {
						var val = get.value(card);
						return val < 0 || (val <= 4 && (get.number(card) >= 11 || get.suit(card) == 'heart'));
					}, 'h')
						? 20
						: 0;
				},
				filter(event, player) {
					return event.type == 'compare' && !event.directresult;
				},
				onCompare(player) {
					return game.cardsGotoOrdering(get.cards()).cards;
				},
			},
			txjiang: {
				shaRelated: true,
				audio: 'sbjiang',
				//preHidden:true,
				usable: 1,
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
					return player == event.target || event.parent.triggeredTargets3.length == 1;
				},
				forced: true,
				content() {
					player.draw(2);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'sha') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == 'sha') return [1, 1];
						},
					},
				},
			},
			//风行
			txfengxing: {
				audio: true,
				trigger: { player: 'phaseBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txfengxing'), function (card, player, target) {
						if (target.isFriendOf(player)) return false;
						return lib.filter.targetEnabled({ name: 'sha' }, player, target);
					}).ai = function (target) {
						return get.effect(target, { name: 'sha' }, player);
					};
					('step 1');
					if (result.bool) {
						player.useCard({ name: 'sha' }, result.targets, false);
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.3,
				},
			},
			//迷城事件
			jlbjijiang: {
				audio: 'jijiang1',
				group: ['jlbjijiang1'],
				//zhuSkill:true,
				filter(event, player) {
					if (
						!player.hasSkill('jlbjijiang') ||
						!game.hasPlayer(function (current) {
							return current != player && current.group == 'shu';
						})
					)
						return false;
					return !event.jlbjijiang && (event.type != 'phase' || !player.hasSkill('jlbjijiang3'));
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				viewAs: { name: 'sha' },
				filterCard() {
					return false;
				},
				selectCard: -1,
				ai: {
					order() {
						return get.order({ name: 'sha' }) + 0.3;
					},
					respondSha: true,
					skillTagFilter(player) {
						if (
							!player.hasSkill('jlbjijiang') ||
							!game.hasPlayer(function (current) {
								return current != player && current.group == 'shu';
							})
						)
							return false;
					},
				},
			},
			jlbjijiang1: {
				audio: 'jijiang1',
				trigger: { player: ['useCardBegin', 'respondBegin'] },
				logTarget: 'targets',
				filter(event, player) {
					return event.skill == 'jlbjijiang';
				},
				forced: true,
				content() {
					'step 0';
					delete trigger.skill;
					trigger.parent.set('jlbjijiang', true);
					('step 1');
					if (event.current == undefined) event.current = player.next;
					if (event.current == player) {
						player.addTempSkill('jlbjijiang3');
						event.finish();
						trigger.cancel();
						trigger.parent.goto(0);
					} else if (event.current.group == 'shu') {
						var next = event.current.chooseToRespond(`是否替${get.translation(player)}打出一张杀？`, { name: 'sha' });
						next.set('ai', function () {
							var event = _status.event;
							return get.attitude(event.player, event.source) - 2;
						});
						next.set('source', player);
						next.set('jlbjijiang', true);
						next.set('skillwarn', `替${get.translation(player)}打出一张杀`);
						next.noOrdering = true;
						next.autochoose = lib.filter.autoRespondSha;
					} else {
						event.current = event.current.next;
						event.redo();
					}
					('step 2');
					if (result.bool) {
						event.finish();
						trigger.card = result.card;
						trigger.cards = result.cards;
						trigger.throw = false;
						if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
							event.current.ai.shown += 0.3;
							if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
						}
					} else {
						event.current = event.current.next;
						event.goto(1);
					}
				},
			},
			jlbjijiang3: {
				trigger: { global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'] },
				silent: true,
				charlotte: true,
				filter(event, player) {
					return event.skill != 'jlbjijiang' && event.skill != 'qinwang';
				},
				content() {
					player.removeSkill('jlbjijiang3');
				},
			},
			jzjhuangtian: {
				audio: 'huangtian2',
				global: 'jzjhuangtian2',
				//zhuSkill:true,
			},
			jzjhuangtian2: {
				audio: 2,
				enable: 'phaseUse',
				discard: false,
				lose: false,
				delay: false,
				line: true,
				prepare(cards, player, targets) {
					targets[0].logSkill('jzjhuangtian');
				},
				prompt() {
					var player = _status.event.player;
					var list = game.filterPlayer(function (target) {
						return target != player && target.hasSkill('jzjhuangtian', player);
					});
					var str = '将一张【闪】或【闪电】交给' + get.translation(list);
					if (list.length > 1) str += '中的一人';
					return str;
				},
				filter(event, player) {
					if (player.group != 'qun') return false;
					if (player.countCards('h', 'shan') + player.countCards('h', 'shandian') == 0) return 0;
					return game.hasPlayer(function (target) {
						return target != player && target.hasSkill('jzjhuangtian', player) && !target.hasSkill('jzjhuangtian3');
					});
				},
				filterCard(card) {
					return card.name == 'shan' || card.name == 'shandian';
				},
				log: false,
				visible: true,
				filterTarget(card, player, target) {
					return target != player && target.hasSkill('jzjhuangtian', player) && !target.hasSkill('jzjhuangtian3');
				},
				//usable:1,
				//forceaudio:true,
				content() {
					player.give(cards, target);
					target.addTempSkill('jzjhuangtian3', 'phaseUseEnd');
				},
				ai: {
					expose: 0.3,
					order: 10,
					result: {
						target: 5,
					},
				},
			},
			jzjhuangtian3: {},
			/*十常侍之乱*/
			txningming: {
				trigger: { player: 'damageEnd' },
				check(event, player) {
					return get.attitude(player, event.source) <= 0;
				},
				filter(event, player) {
					return event.source && event.source != player;
				},
				content() {
					'step 0';
					trigger.source.chooseCard('交出一张♠️牌或流失一点体力', function (card) {
						return get.suit(card) == 'spade';
					}).ai = function (card) {
						return 6 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						player.gain(result.cards[0], trigger.source);
						trigger.source.$give(1, player);
					} else {
						trigger.source.loseHp();
					}
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [1, 0, 0, -1];
						},
					},
				},
			},
			//装备技能转普通技能
			/*飞龙夺凤技能*/
			txfeilong: {
				subSkill: {
					blank: {
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
						},
						charlotte: true,
						skillBlocker(skill, player) {
							return !lib.skill[skill].charlotte;
						},
					},
				},
				trigger: {
					source: ['dieAfter'],
				},
				_priority: -25,
				equipSkill: true,
				content() {
					'step 0';
					var target = trigger.player;
					target.addTempSkill('txfeilong_blank', { player: 'damageAfter' });
					target.side = player.side;
					target.identity = player.identity;
					target.setIdentity(get.translation(player.identity));
					target.node.identity.dataset.color = player.identity;
					target.revive(3);
					target.maxHp = 3;
					target.update();
				},
			},
			txshenfu: {
				trigger: { player: 'damageEnd' },
				forced: true,
				equipSkill: true,
				filter(event, player) {
					if (!event.card || !event.card.name || player.getStorage('txshenfu_effect').includes(event.card.name)) return false;
					if (player.hasSkillTag('unequip2')) return false;
					if (
						event.source.hasSkillTag('unequip', false, {
							name: event.card.name,
							target: player,
							card: event.card,
						})
					)
						return false;
					return true;
				},
				content() {
					player.markAuto('txshenfu_effect', [trigger.card.name]);
				},
				group: 'txshenfu_effect',
				subSkill: {
					effect: {
						trigger: { player: 'damageBegin4' },
						forced: true,
						equipSkill: true,
						filter(event, player) {
							if (!event.card || !event.card.name || !player.storage.txshenfu_effect || !player.getStorage('txshenfu_effect').includes(event.card.name)) return false;
							if (player.hasSkillTag('unequip2')) return false;
							if (
								event.source.hasSkillTag('unequip', false, {
									name: event.card.name,
									target: player,
									card: event.card,
								})
							)
								return false;
							return true;
						},
						content() {
							trigger.num--;
						},
						intro: {
							content: '受到$造成的伤害-1',
						},
					},
				},
			},
			/*赤焰镇魂琴技能*/
			txchiyan: {
				//equipSkill:true,
				trigger: {
					source: 'damageBegin1',
				},
				_priority: 5,
				forced: true,
				content() {
					trigger.nature = 'fire';
				},
			},
			/*国风玉袍*/
			txguofeng: {
				//equipSkill:true,
				mod: {
					targetEnabled(card, player, target, now) {
						if (target.hasSkillTag('unequip2')) return false;
						if (player != target) {
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: player,
									card: card,
								})
							) {
							} else if (get.type(card) == 'trick') return false;
						}
					},
				},
			},
			/*绝尘金戈技能*/
			txjuechen: {
				//equipSkill:true,
				global: 'txjuechen2',
			},
			txjuechen2: {
				equipSkill: true,
				mod: {
					globalTo(from, to, distance) {
						return (
							distance +
							game.countPlayer(function (current) {
								if (current == to) return;
								if (current.side != to.side) return;
								if (current.hasSkill('txjuechen')) return 1;
							})
						);
					},
				},
			},
			/*霹雳车技能*/
			txpili: {
				//equipSkill:true,
				trigger: {
					source: 'damageEnd',
				},
				filter(event, player) {
					return event.player != player && event.player.maxHp > 0 && event.player.isAlive();
				},
				prompt2(event, player) {
					return '令其减少等同伤害值的体力上限.';
				},
				content() {
					trigger.player.loseMaxHp(trigger.num);
				},
			},
			txpili2: {},
			/*雷击木*/
			txbingren: {
				//equipSkill:true,
				trigger: {
					player: 'useCard1',
				},
				filter(event, player) {
					if (event.card.name == 'sha' && !event.card.nature) return true;
				},
				check(event, player) {
					var eff = 0;
					for (var i = 0; i < event.targets.length; i++) {
						var target = event.targets[i];
						var eff1 = get.damageEffect(target, player, player);
						var eff2 = get.damageEffect(target, player, player, 'ice');
						eff += eff2;
						eff -= eff1;
					}
					return eff >= 0;
				},
				prompt2(event, player) {
					return `将${get.translation(event.card)}改为冰属性`;
				},
				content() {
					trigger.card.nature = 'ice';
					if (get.itemtype(trigger.card) == 'card') {
						var next = game.createEvent('txbingren_clear');
						next.card = trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function () {
							delete card.nature;
						});
					}
				},
			},
			/*虚妄之冕技能*/
			txxuwang: {
				//equipSkill:true,
				trigger: {
					player: 'phaseDrawBegin',
				},
				forced: true,
				content() {
					trigger.num += 2;
				},
				mod: {
					maxHandcard(player, num) {
						return num - 1;
					},
				},
			},
			/*诸葛连弩*/
			txlianji: {
				equipSkill: true,
				firstDo: true,
				trigger: {
					player: 'useCard1',
				},
				forced: true,
				filter(event, player) {
					return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
				},
				content() {
					trigger.audioed = true;
				},
				mod: {
					cardUsable(card, player, num) {
						var cardx = player.getEquip('txlianji');
						if (card.name == 'sha' && (!cardx || player.hasSkill('txlianji', null, false) || (!_status.rw_zhuge_temp && !ui.selected.cards.includes(cardx)))) {
							return 4;
						}
					},
					cardEnabled2(card, player) {
						if (!_status.event.addCount_extra || player.hasSkill('txlianji', null, false)) return;
						if (card && card == player.getEquip('txlianji')) {
							try {
								var cardz = get.card();
							} catch (e) {
								return;
							}
							if (!cardz || cardz.name != 'sha') return;
							_status.rw_zhuge_temp = true;
							var bool = lib.filter.cardUsable({ name: 'sha' }, player);
							delete _status.txlianji_temp;
							if (!bool) return false;
						}
					},
				},
			},
			/*麒麟弓*/
			txlinwei: {
				equipSkill: true,
				trigger: {
					source: 'damageBegin2',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e', { subtype: ['equip5'] }).length;
				},
				forced: true,
				content() {
					'step 0';
					var att = get.attitude(player, trigger.player) <= 0;
					var next = player.chooseButton();
					next.set('att', att);
					next.set('createDialog', [`是否发动【麒麟弓】,弃置${get.translation(trigger.player)}的一张宝物牌？`, trigger.player.getCards('e', { subtype: ['equip5'] })]);
					next.set('ai', function (button) {
						if (_status.event.att) return get.buttonValue(button);
						return 0;
					});
					('step 1');
					if (result.bool) {
						trigger.player.discard(result.links[0]);
					}
				},
			},
			/*方天画戟技能*/
			txtianji: {
				trigger: {
					player: 'useCard2',
				},
				forced: true,
				charlotte: true,
				forced: true,
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					var evt = event.getParent('phaseUse');
					return (
						evt &&
						evt.player == player &&
						player.getHistory('useCard', function (evtx) {
							return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
						})[0] == event &&
						game.hasPlayer(function (current) {
							return !event.targets.includes(current) && lib.filter.filterTarget(event.card, player, current);
						})
					);
				},
				content() {
					'step 0';
					var num = 2;
					if (Math.min(game.countPlayer()) >= 3) {
						player.chooseTarget(`请选择至多${num}名其他角色也成为此【杀】的目标？`, [1, num], true, function (card, player, target) {
							return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
						}).ai = function (target) {
							return get.effect(target, { name: 'sha' }, _status.event.player);
						};
					}
					('step 1');
					if (result.bool && result.targets && result.targets.length) {
						var targets = result.targets;
						player.line(targets, trigger.card.nature);
						trigger.targets.addArray(targets);
					}
				},
			},
			txfuchen: {
				trigger: { player: 'useCardToPlayered' },
				forced: true,
				equipSkill: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				logTarget: 'target',
				content() {
					'step 0';
					var suit = get.suit(trigger.card);
					var num = trigger.target.countCards('h', 'shan');
					var next = trigger.target
						.chooseToDiscard('弃置一张牌,或不能响应' + get.translation(trigger.card), 'he')
						.set('ai', function (card) {
							var num = _status.event.num;
							if (num == 0) return 0;
							if (card.name == 'shan') return num > 1 ? 2 : 0;
							return (get.suit(card) != _status.event.suit ? 9 : 6) - get.value(card);
						})
						.set('num', num);
					if (lib.suit.includes(suit)) {
						next.set('prompt2', `若弃置的是${get.suit(suit)}牌,则改为${get.translation(player)}获得之`);
						next.set('suit', suit);
					}
					('step 1');
					if (result.bool) {
						var card = result.cards[0];
						if (get.suit(card, trigger.target) == get.suit(trigger.card, false) && get.position(card) == 'd') player.gain(card, 'gain2');
					} else trigger.directHit.add(trigger.target);
				},
			},
			//以下代码搬运自【活动Boss】扩展
			Neihuan_huanshi: {
				group: ['Neihuan_huanshi_1', 'Neihuan_huanshi_2', 'Neihuan_huanshi_3', 'Neihuan_huanshi_4'],
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				subSkill: {
					1: {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter(event, player) {
							return (
								event.card &&
								event.card.name == 'sha' &&
								player.getEnemies().includes(event.target) &&
								!player.hasSkill('Neihuan_huanshi_silent1') &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards('h', { type: 'basic' }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
							);
						},
						forced: true,
						content() {
							var list = game
								.filterPlayer(function (current) {
									return current != player && player.getFriends().includes(current) && current.countCards('h', { type: 'basic' }) > 0 && current.hasSkill('Neihuan_huanshi');
								})
								.randomGet();
							list.discard(list.getCards('h', { type: 'basic' }).randomGet());
							trigger.player.addTempSkill('Neihuan_huanshi_silent1');
							trigger.nowuxie = true;
							trigger.directHit.addArray(game.players);
							game.log(trigger.card, '无法被', game.players, '抵消');
						},
						popup: false,
					},
					2: {
						trigger: {
							target: 'useCardToTarget',
						},
						filter(event, player) {
							return (
								event.card &&
								get.type(event.card) == 'basic' &&
								player.getEnemies().includes(event.player) &&
								event.targets.length == 1 &&
								!player.hasSkill('Neihuan_huanshi_silent2') &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards('h', { type: 'basic' }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
							);
						},
						forced: true,
						content() {
							var list = game
								.filterPlayer(function (current) {
									return current != player && current.countCards('h', { type: 'basic' }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
								.randomGet();
							list.discard(list.getCards('h', { type: 'basic' }).randomGet());
							trigger.target.addTempSkill('Neihuan_huanshi_silent2');
							trigger.parent.targets.remove(trigger.target);
							game.log(trigger.card, '对', trigger.target, '无效');
						},
						popup: false,
					},
					3: {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter(event, player) {
							return (
								['trick'].includes(get.type(event.card)) &&
								get.tag(event.card, 'damage') &&
								player.getEnemies().includes(event.target) &&
								!player.hasSkill('Neihuan_huanshi_silent1') &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards('h', { type: ['trick', 'delay'] }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
							);
						},
						forced: true,
						content() {
							var list = game
								.filterPlayer(function (current) {
									return current != player && current.countCards('h', { type: ['trick', 'delay'] }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
								.randomGet();
							list.discard(list.getCards('h', { type: ['trick', 'delay'] }).randomGet());
							trigger.player.addTempSkill('Neihuan_huanshi_silent1');
							trigger.nowuxie = true;
							trigger.directHit.addArray(game.players);
							game.log(trigger.card, '无法被', game.players, '抵消');
						},
						popup: false,
					},
					4: {
						trigger: {
							target: 'useCardToTarget',
						},
						filter(event, player) {
							return (
								(get.type(event.card) == 'trick' || get.type(event.card) == 'delay') &&
								player.getEnemies().includes(event.player) &&
								event.targets.length == 1 &&
								!player.hasSkill('Neihuan_huanshi_silent2') &&
								game.hasPlayer(function (current) {
									return current != player && current.countCards('h', { type: ['trick', 'delay'] }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
							);
						},
						forced: true,
						content() {
							var list = game
								.filterPlayer(function (current) {
									return current != player && current.countCards('h', { type: ['trick', 'delay'] }) > 0 && player.getFriends().includes(current) && current.hasSkill('Neihuan_huanshi');
								})
								.randomGet();
							list.discard(list.getCards('h', { type: ['trick', 'delay'] }).randomGet());
							trigger.target.addTempSkill('Neihuan_huanshi_silent2');
							trigger.parent.targets.remove(trigger.target);
							game.log(trigger.card, '对', trigger.target, '无效');
						},
						popup: false,
					},
					silent1: {
						charlotte: true,
					},
					silent2: {
						charlotte: true,
					},
				},
				forced: true,
				popup: false,
			},
			Neihuan_jingshe: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return player.getEnemies().includes(_status.currentPhase) || event.num > 1;
				},
				forced: true,
				content() {
					if (player.getEnemies().includes(_status.currentPhase)) _status.currentPhase.addTempSkill('Neihuan_jingshe_buff', { player: ['phaseUseAfter', 'phaseAfter'] });
					if (trigger.num > 1) player.recover();
				},
				subSkill: {
					buff: {
						mark: true,
						marktext: '惊蛇',
						intro: {
							name: '惊蛇',
							content: '不能对拥有技能【惊蛇】的角色使用牌直到出牌阶段结束',
						},
						mod: {
							playerEnabled(card, player, target) {
								if (target.hasSkill('Neihuan_jingshe')) return false;
							},
							playerEnabled(card, player, target) {
								if (target.hasSkill('Neihuan_jingshe')) return false;
							},
						},
					},
				},
				ai: {
					maixie_defend: true,
				},
			},
			fenghuo_suohui: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				filter(event, player) {
					return event.player != player;
				},
				logTarget: 'player',
				content() {
					'step 0';
					trigger.player.chooseCard('he', `交给${get.translation(trigger.target)}一张牌,否则令${get.translation(trigger.target)}摸两张牌`).set('ai', function (card) {
						if (get.attitude(trigger.player, trigger.target) < 0) {
							return 10 - get.value(card);
						}
						return 0;
					});
					('step 1');
					if (result.bool) {
						trigger.target.gain(result.cards, trigger.player, 'giveAuto');
					} else trigger.target.draw(2);
				},
				ai: {
					threaten: 1.1,
				},
			},
			txhuolu: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return player.isMaxHandcard(true);
				},
				content() {
					'step 0';
					var num = player.countCards('h');
					var list = game.filterPlayer(function (current) {
						return !game.hasPlayer(function (current2) {
							return current2.countCards('h') < current.countCards('h');
						});
					});
					if (list.length) {
						var target = list.randomGet();
						var num1 = target.countCards('h');
						player.chooseToDiscard(num - num1, true, 'h').set('ai', function (card) {
							return 9 - get.value(card);
						});
					}
					('step 1');
					event.count = 2;
					('step 2');
					event.count--;
					('step 3');
					if (player.getEnemies().length) {
						var list = game
							.filterPlayer(function (current) {
								return player.getEnemies().includes(current);
							})
							.randomGet();
						list.damage();
					}
					('step 5');
					if (event.count > 0) event.goto(2);
					else event.finish();
				},
				ai: { expose: 0.2 },
			},
			Neihuan_niluan: {
				enable: 'phaseUse',
				viewAs: { name: 'sha' },
				check(card) {
					return 5.1 - get.value(card);
				},
				filterCard: { color: 'black' },
				position: 'hes',
				viewAsFilter(player) {
					return player.countCards('hes', lib.skill.Neihuan_niluan.filterCard) > 0;
				},
				group: 'Neihuan_niluan_clear',
			},
			Neihuan_niluan_clear: {
				trigger: { player: 'useCardAfter' },
				forced: true,
				silent: true,
				charlotte: true,
				filter(event, player) {
					return (
						event.skill == 'Neihuan_niluan' &&
						event.addCount !== false &&
						player.getHistory('sourceDamage', function (card) {
							return card.card == event.card;
						}).length == 0
					);
				},
				content() {
					trigger.addCount = false;
					if (player.stat[player.stat.length - 1].card.sha > 0) {
						player.stat[player.stat.length - 1].card.sha--;
					}
				},
			},
			neihuan_heimu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: 'neihuan_heimu_use',
				trigger: {
					global: 'useCard',
				},
				filter(event, player) {
					return event.player != player && player.getEnemies().includes(event.player) && get.color(event.card) == 'black';
				},
				forced: true,
				content() {
					player.draw();
				},
				subSkill: {
					use: {
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							return get.color(event.card) == 'black';
						},
						forced: true,
						audio: 'neihuan_heimu',
						content() {
							var target = player
								.getEnemies(function (current) {
									return current.countCards('he');
								})
								.randomGet();
							if (target) {
								target.discard(target.getCards('he').randomGet());
							}
						},
						ai: {
							expose: 0.2,
						},
					},
				},
			},
			neihuan_andu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					return player.getEnemies().includes(event.player) && player.hp >= event.player.hp;
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.player.damage();
				},
				ai: {
					expose: 0.2,
				},
			},
			Neihuan_biri: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.source && player.getEnemies().includes(event.source) && event.source.countCards('he', { type: ['trick', 'delay', 'equip'] }) > 0;
				},
				forced: true,
				logTarget: 'source',
				content() {
					var he = [];
					var card = trigger.source.getCards('he', { type: 'basic' });
					var cards = trigger.source.getCards('he');
					var card1 = trigger.source.getCards('he', { color: 'red' });
					he = he.concat(cards);
					if (card) he.remove(card);
					trigger.source.discard(he);
					var card2 = [];
					card2 = card2.concat(cards);
					if (card) card2.remove(card);
					if (card1) card2.remove(card1);
					if (card2.length) trigger.num--;
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target, current) {
							if (player.hasSkillTag('jueqing', false, target) || player.hasSkillTag('damageBonus')) return;
							if (get.tag(card, 'damage') && get.tag(card, 'damage') <= 1 && get.attitude(player, target) < 0 && player.countCards('he', { color: 'black', type: ['trick', 'delay', 'equip'] }) > 0) return [-1, 0];
						},
					},
				},
			},
			neihuan_leixi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(event, player) {
					return ['sha', 'shan'].includes(event.card.name) && player != _status.currentPhase;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('neihuan_leixi'), lib.filter.notMe).ai = function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att < 0) {
							att = -Math.sqrt(-att);
						} else {
							att = Math.sqrt(att);
						}
						if (event.color == 'red') return att * lib.card.guohe.ai.result.target(player, target);
						return get.damageEffect(target, player, player, 'thunder');
					};
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						event.target.judge();
					} else event.finish();
					('step 2');
					if (result.color == 'red') player.discardPlayerCard(target, 'he', 2, true);
					else target.damage(2);
				},
				ai: {
					expose: 0.2,
				},
			},
			neihuan_huangjie: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					var bool = true;
					if (event.targets)
						for (var i of event.targets) {
							if (player.getEnemies().includes(i)) bool = false;
						}
					return player.isPhaseUsing() && bool;
				},
				forced: true,
				content() {
					player.draw();
				},
			},
			neihuan_chibi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseUseAfter',
				},
				filter(event, player) {
					return player.countCards('h', 'sha') == 0;
				},
				forced: true,
				content() {
					var cards = [];
					for (var i = 0; i < 2; i++) {
						var card = get.cardPile2(function (card) {
							return card.name == 'sha' && !cards.includes(card);
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, 'gain2');
				},
			},
			zhangrang_yankong: {
				audio: 'ext:太虚幻境/audio/skill:true',
				init(player) {
					player.storage.zhangrang_yankong_damage = 0;
				},
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return player.storage.zhangrang_yankong_damage < 4;
				},
				content() {
					player.addTempSkill('zhangrang_yankong_damage', { player: 'zhangrang_yankong_damageAfter' });
					player.storage.zhangrang_yankong_damage++;
					player.update();
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
				subSkill: {
					damage: {
						marktext: '炎恐',
						mark: true,
						intro: {
							content(storage, player, skill) {
								var num = player.storage.zhangrang_yankong_damage;
								if (num == undefined) num = 0;
								return `你下一次对敌方角色造成的伤害增加${num}点`;
							},
						},
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							return player.getEnemies().includes(event.player) && player.storage.zhangrang_yankong_damage > 0;
						},
						forced: true,
						content() {
							trigger.num += player.storage.zhangrang_yankong_damage;
							player.storage.zhangrang_yankong_damage = 0;
							player.unmarkSkill('zhangrang_yankong_damage');
							player.update();
						},
						ai: {
							damageBonus: true,
							skillTagFilter(player, tag, arg) {
								if (player.getEnemies().includes(arg.target) && player.storage.zhangrang_yankong_damage > 0) return true;
								return false;
							},
						},
					},
				},
			},
			Neihuan_jiquan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return player.isMaxHandcard(true) || player.countCards('h') < 10;
				},
				content() {
					'step 0';
					if (player.countCards('h') < 10) player.draw(10 - player.countCards('h'));
					('step 1');
					if (player.isMaxHandcard(true)) {
						var targets = game.filterPlayer(function (current) {
							return player.getEnemies().includes(current);
						});
						if (targets.length) {
							targets.sort(lib.sort.seat);
							event.targets = targets;
							event.num = 0;
						} else {
							event.finish();
						}
					} else {
						event.finish();
					}
					('step 2');
					if (num < event.targets.length) {
						if (event.targets[num].countCards('he')) {
							player.line(event.targets[num]);
							var hs = event.targets[num].getCards('he');
							var card = hs.randomGet();
							player.gain(card, event.targets[num]);
							event.targets[num].$giveAuto(card, player);
						}
						event.num++;
						event.redo();
					}
				},
				ai: {
					nokeep: true,
					noh: true,
				},
			},
			//搬运到这.
			txfuji: {
				audio: true,
				trigger: {
					player: ['shaBefore'],
				},
				filter(event, player) {
					return !player.hasSkill('txfuji');
				},
				forced: true,
				content() {
					player.addSkill('txfuji_a');
				},
				group: ['txfuji_b'],
				subSkill: {
					a: {
						trigger: {
							source: 'damageEnd',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return event.card && event.card.name == 'sha' && player.hasSkill('txfuji_a');
						},
						content() {
							if (player.hasSkill('txfuji_a')) {
								player.removeSkill('txfuji_a');
							} else {
								event.finish();
							}
						},
					},
					b: {
						trigger: {
							player: ['shaEnd'],
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return player.hasSkill('txfuji_a');
						},
						content() {
							if (player.hasSkill('txfuji_a')) {
								player.draw();
								player.removeSkill('txfuji_a');
							} else {
								event.finish();
							}
						},
					},
				},
			},
			txyuanwei: {
				audio: 'drlt_congjian',
				trigger: {
					global: ['useCard', 'respond'],
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				logTarget: 'player',
				content() {
					trigger.player.draw();
				},
				ai: {
					mingzhi: false,
					threaten: 2,
					expose: 0.2,
				},
			},
			txshiyuan: {
				audio: 'shiyuan',
				trigger: { target: 'useCardToTargeted' },
				forced: true,
				filter(event, player) {
					var num = 1;
					if (_status.currentPhase && _status.currentPhase != player && player.hasSkill('txyuwei', _status.currentPhase)) num = 2;
					return (
						player != event.player &&
						player.getHistory('gain', function (evt) {
							return evt.getParent(2).name == 'txshiyuan' && evt.cards.length == 2 + get.sgn(event.player.hp - player.hp);
						}).length < num
					);
				},
				content() {
					player.draw(2 + get.sgn(trigger.player.hp - player.hp));
				},
			},
			txyuwei: {
				//zhuSkill:true,
				ai: { combo: 'txshiyuan' },
			},
			//何进诛宦赛季补充
			//以下代码全部搬运自【活动Boss】扩展,并特此非常感谢其作者(烟雨墨染)大佬 !!!
			taixu_linglu: {
				global: ['taixu_linglu_jilu', 'taixu_linglu_clear'],
				group: 'taixu_linglu_die',
				init(player) {
					player.storage.taixu_linglu = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return !game.hasPlayer(function (current1) {
							return current1.hasSkill('taixu_linglu') && current1.storage.taixu_linglu.includes(current);
						});
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名角色发布【令戮】强令.', function (card, player, target) {
							return !game.hasPlayer(function (current) {
								return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(target);
							});
						})
						.set('ai', function (target) {
							if (
								target.countCards('hs') > 4 &&
								target.hp >= 3 &&
								game.countPlayer(function (current) {
									return get.attitude(target, current) < 0 && current.inRangeOf(target);
								}) > 0 &&
								!target.hasUnknown()
							)
								return get.attitude(_status.event.player, target) > 0;
							return get.attitude(_status.event.player, target) < 0;
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_linglu.add(result.targets[0]);
						result.targets[0].markSkill('taixu_linglu_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '令戮',
						mark: true,
						intro: {
							content(storage, player, skill) {
								var num = player.storage.taixu_linglu_jilu;
								if (num == undefined) num = 0;
								return (
									'<li>任务目标:于你下回合结束前造成2点伤害<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
											})
											.randomGet()
									) +
									`<br><li>已造成${num}点伤害`
								);
							},
						},
						trigger: {
							source: 'damageSource',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (player.storage.taixu_linglu_jilu == '' || player.storage.taixu_linglu_jilu == undefined) player.storage.taixu_linglu_jilu = 0;
							player.storage.taixu_linglu_jilu += trigger.num;
							player.update();
						},
					},
					clear: {
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (player.storage.taixu_linglu_jilu >= 2) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【令戮】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								player.draw(2);
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【令戮】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
								player.loseHp();
							}
							player.storage.taixu_linglu_jilu = 0;
							player.unmarkSkill('taixu_linglu_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_linglu.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_linglu &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_linglu.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_linglu.includes(current)) {
									player.storage.taixu_linglu.remove(current);
									current.storage.taixu_linglu_jilu = 0;
									current.unmarkSkill('taixu_linglu_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			taixu_mouzhu: {
				init(player) {
					player.storage.taixu_mouzhu = 0;
				},
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					event.mubiao = game
						.filterPlayer(function (current) {
							return current != player && current != target && current.hp <= player.hp;
						})
						.sortBySeat();
					('step 1');
					if (event.mubiao.length) event.count = 0;
					else event.finish();
					('step 2');
					if (!event.mubiao[event.count].countCards('he')) event.goto(4);
					else
						event.mubiao[event.count].chooseCard('he', `交给${get.translation(player)}一张牌`).set('ai', function (card) {
							if (get.attitude(_status.event.player, player) > 0) return true;
							else return false;
						});
					('step 3');
					if (result.bool) {
						event.mubiao[event.count].give(result.cards, player) && player.storage.taixu_mouzhu++;
						if (typeof event.mubiao[event.count].ai.shown == 'number' && event.mubiao[event.count].ai.shown < 0.95) {
							event.mubiao[event.count].ai.shown += 0.3;
							if (event.mubiao[event.count].ai.shown > 0.95) event.mubiao[event.count].ai.shown = 0.95;
						}
						player.update();
					}
					('step 4');
					event.count++;
					('step 5');
					if (event.count < event.mubiao.length) event.goto(2);
					('step 6');
					if (player.storage.taixu_mouzhu == 0) {
						game.countPlayer(function (current) {
							if (current == player || (current != player && current != target && current.hp <= player.hp)) {
								current.loseHp();
							}
						});
						event.finish();
					} else {
						var list = ['sha', 'juedou'];
						if (!player.canUse('sha', target, false)) list.remove('sha');
						if (!player.canUse('juedou', target, false)) list.remove('juedou');
						if (!list.length) event.goto(8);
						else if (list.length == 1) event._result = { control: list[0] };
						else
							target.chooseControl(list, true).set('prompt', `${get.translation(player)}视为对${get.translation(target)}使用一张【杀】或【决斗】.`).ai = function () {
								return get.effect(target, { name: 'sha' }, player, player) >= get.effect(target, { name: 'juedou' }, player, player) ? 'sha' : 'juedou';
							};
					}
					('step 7');
					var next = player.useCard({ name: result.control }, target, 'noai');
					var num = Math.min(player.storage.taixu_mouzhu, 4);
					next.baseDamage = num;
					('step 8');
					if (player.storage.taixu_mouzhu > 0) player.storage.taixu_mouzhu = 0;
					player.update();
				},
				ai: {
					expose: 0.2,
					threaten: 2,
					order: 8,
					result: {
						player(card, player, target, current) {
							if (
								game.hasPlayer(function (current) {
									return current != player && current.hp <= player.hp && get.attitude(current, player) > 0 && current.countCards('he') > 0;
								}) ||
								(game.countPlayer(function (current) {
									return current != player && current.hp <= player.hp && get.attitude(current, player) <= 0;
								}) >
									game.countPlayer(function (current) {
										return current == player || (current != player && current.hp <= player.hp && get.attitude(current, player) > 0);
									}) &&
									!game.hasPlayer(function (current) {
										return current != player && current.hp <= player.hp && get.attitude(current, player) > 0 && current.countCards('he') == 0;
									}))
							)
								return 1;
							else return -1;
						},
						target: -1,
					},
				},
			},
			taixu_mouqiang: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return event.num > 1 && event.source && event.source.isIn() && event.source != player && event.source.countCards('he') > 0;
				},
				content() {
					'step 0';
					var num = Math.floor(trigger.num / 2);
					player.gainPlayerCard('he', trigger.source, num, true);
					event.num1 = 0;
					event.num2 = 0;
					('step 1');
					if (result.bool && result.links && result.links.length) {
						for (var i of result.links) {
							if (get.type(i) == 'basic') event.num1++;
							else event.num2++;
						}
					}
					('step 2');
					if (event.num1 > 0) player.recover(event.num1);
					if (event.num2 > 0) trigger.source.damage(event.num2);
				},
			},
			taixu_xiehui: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player;
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名其他角色发布【胁贿】强令.', function (card, player, target) {
							return target != player;
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target) <= 0 || (get.attitude(_status.event.player, target) < 0 && get.damageEffect(target, _status.event.player, _status.event.player) > 0);
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						event.target = result.targets[0];
						event.target
							.chooseCard('he', 2)
							.set('prompt', `交给${get.translation(player)}两张牌`)
							.set('ai', function (card) {
								return 6 - get.value(card);
							});
					} else event.finish();
					('step 2');
					if (result.bool) {
						event.target.popup('强令成功');
						game.log(event.target, '成功完成了', player, '发布的', '#g【胁贿】', '强令');
						game.countPlayer(function (current) {
							if (current.hasSkill('taixu_yishi') && (current == player || player.getFriends().includes(current))) {
								current.logSkill('taixu_yishi');
								current.draw();
							}
						});
						event.target.give(result.cards, player);
					} else {
						event.target.popup('强令失败');
						game.log(event.target, '未完成', player, '发布的', '#g【胁贿】', '强令');
						game.countPlayer(function (current) {
							if (current.hasSkill('taixu_yishi') && (current == player || player.getFriends().includes(current))) {
								current.logSkill('taixu_yishi');
								current.discardPlayerCard(event.target, 'he', 1, true);
							}
						});
						event.target.damage();
					}
				},
			},
			taixu_zhulian: {
				global: ['taixu_zhulian_jilu', 'taixu_zhulian_clear'],
				group: 'taixu_zhulian_die',
				init(player) {
					player.storage.taixu_zhulian = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return (
							current != player &&
							!game.hasPlayer(function (current1) {
								return current1.hasSkill('taixu_zhulian') && current1.storage.taixu_zhulian.includes(current);
							})
						);
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名其他角色发布【株连】强令.', function (card, player, target) {
							return (
								target != player &&
								!game.hasPlayer(function (current) {
									return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(target);
								})
							);
						})
						.set('ai', function (target) {
							if (
								game.countPlayer(function (current) {
									return get.attitude(target, current) < 0 && current.inRangeOf(target);
								}) > 0 ||
								player.isLinked() ||
								target.isLinked()
							)
								return get.attitude(_status.event.player, target) > 0;
							else return 0;
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_zhulian.add(result.targets[0]);
						result.targets[0].markSkill('taixu_zhulian_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '株连',
						mark: true,
						intro: {
							content(storage, player, skill) {
								return (
									'<li>任务目标:下一次使用【杀】造成伤害<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
											})
											.randomGet()
									) +
									''
								);
							},
						},
						trigger: {
							source: 'damageSource',
						},
						filter(event, player) {
							return (
								event.card &&
								event.card.name == 'sha' &&
								game.hasPlayer(function (current) {
									return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
								})
							);
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							player.storage.taixu_zhulian_use = true;
							if (player.storage.taixu_zhulian_jilu == '' || player.storage.taixu_zhulian_jilu == undefined) player.storage.taixu_zhulian_jilu = [];
							player.storage.taixu_zhulian_jilu.add(trigger.player);
							player.update();
						},
					},
					clear: {
						trigger: {
							player: 'useCardAfter',
						},
						filter(event, player) {
							return (
								event.card &&
								event.card.name == 'sha' &&
								game.hasPlayer(function (current) {
									return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
								})
							);
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (player.storage.taixu_zhulian_use) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【株连】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								event.list.logSkill('taixu_zhulian');
								for (var i = 0; i < player.storage.taixu_zhulian_jilu.length; i++) {
									if (player.storage.taixu_zhulian_jilu[i].countCards('he') > 0) event.list.gainPlayerCard('he', player.storage.taixu_zhulian_jilu[i], 1, true);
								}
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【株连】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
								player.link();
								event.list.link() && event.list.logSkill('taixu_zhulian');
							}
							player.storage.taixu_zhulian_jilu = [];
							player.storage.taixu_zhulian_use = false;
							player.unmarkSkill('taixu_zhulian_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_zhulian') && current.storage.taixu_zhulian.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_zhulian.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_zhulian &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_zhulian.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_zhulian.includes(current)) {
									player.storage.taixu_zhulian.remove(current);
									current.storage.taixu_zhulian_jilu = [];
									current.storage.taixu_zhulian_use = false;
									current.unmarkSkill('taixu_zhulian_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			taixu_quanqing: {
				global: ['taixu_quanqing_jilu', 'taixu_quanqing_clear'],
				group: 'taixu_quanqing_die',
				init(player) {
					player.storage.taixu_quanqing = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return (
							current != player &&
							!game.hasPlayer(function (current1) {
								return current1.hasSkill('taixu_quanqing') && current1.storage.taixu_quanqing.includes(current);
							})
						);
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名其他角色发布【权倾】强令.', function (card, player, target) {
							return (
								target != player &&
								!game.hasPlayer(function (current) {
									return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(target);
								})
							);
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target) < 0;
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_quanqing.add(result.targets[0]);
						result.targets[0].markSkill('taixu_quanqing_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '权倾',
						mark: true,
						intro: {
							content(storage, player, skill) {
								var skills = player.getSkills().filter(function (skill) {
									var info = get.info(skill);
									return info && !info.charlotte;
								});
								var history = player.getHistory('useSkill');
								for (var i of history) {
									if (
										(skills.includes(i.sourceSkill) || skills.includes(i.skill)) &&
										game.hasPlayer(function (current) {
											return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
										})
									)
										player.storage.taixu_quanqing_use = true;
								}
								if (!player.storage.taixu_quanqing_use)
									return (
										'<li>任务目标:于你回合结束前不发动技能<br><li>发布者:' +
										get.translation(
											game
												.filterPlayer(function (current) {
													return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
												})
												.randomGet()
										) +
										'<br><li>未发动过技能'
									);
								return (
									'<li>任务目标:于你回合结束前不发动技能<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
											})
											.randomGet()
									) +
									'<br><li>已发动过技能'
								);
							},
						},
					},
					clear: {
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (!player.storage.taixu_quanqing_use) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【权倾】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								player.turnOver();
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【权倾】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
								event.list.gainMaxHp(2);
								event.list.recover(2);
								event.list.logSkill('taixu_quanqing');
							}
							player.storage.taixu_quanqing_use = false;
							player.unmarkSkill('taixu_quanqing_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_quanqing') && current.storage.taixu_quanqing.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_quanqing.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_quanqing &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_quanqing.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_quanqing.includes(current)) {
									player.storage.taixu_quanqing.remove(current);
									current.storage.taixu_quanqing_use = false;
									current.unmarkSkill('taixu_quanqing_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			taixu_jinxing: {
				global: ['taixu_jinxing_jilu', 'taixu_jinxing_clear'],
				group: 'taixu_jinxing_die',
				init(player) {
					player.storage.taixu_jinxing = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return (
							current != player &&
							!game.hasPlayer(function (current1) {
								return current1.hasSkill('taixu_jinxing') && current1.storage.taixu_jinxing.includes(current);
							})
						);
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名其他角色发布【禁行】强令.', function (card, player, target) {
							return (
								target != player &&
								!game.hasPlayer(function (current) {
									return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(target);
								})
							);
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target) <= 0;
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_jinxing.add(result.targets[0]);
						result.targets[0].markSkill('taixu_jinxing_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '禁行',
						mark: true,
						intro: {
							content(storage, player, skill) {
								if (!player.storage.taixu_jinxing_use)
									return (
										'<li>任务目标:于你回合结束前不使用基本牌<br><li>发布者:' +
										get.translation(
											game
												.filterPlayer(function (current) {
													return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
												})
												.randomGet()
										) +
										'<br><li>未使用过基本牌'
									);
								return (
									'<li>任务目标:于你回合结束前不使用基本牌<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
											})
											.randomGet()
									) +
									'<br><li>已使用过基本牌'
								);
							},
						},
						trigger: {
							player: 'useCardAfter',
						},
						filter(event, player) {
							return (
								get.type(event.card) == 'basic' &&
								game.hasPlayer(function (current) {
									return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
								})
							);
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (!player.storage.taixu_jinxing_use) {
								player.storage.taixu_jinxing_use = true;
								player.update();
							}
							if (player.storage.taixu_jinxing_jilu == '' || player.storage.taixu_jinxing_jilu == undefined) player.storage.taixu_jinxing_jilu = [];
							if (Array.isArray(trigger.cards))
								for (var i of trigger.cards) {
									if (get.type(i) == 'basic') player.storage.taixu_jinxing_jilu.add(i);
								}
							player.update();
						},
					},
					clear: {
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							'step 0';
							if (!player.storage.taixu_jinxing_use) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【禁行】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								event.goto(2);
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【禁行】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
								event.list.chooseControl('失去体力', '获得牌').ai = function () {
									if (get.attitude(_status.event.player, player) >= 0 || player.storage.taixu_jinxing_jilu.length >= 2) return '获得牌';
									if (get.attitude(_status.event.player, player) < 0 && player.hp == 1) return '失去体力';
									else return ['失去体力', '获得牌'].randomGet();
								};
							}
							('step 1');
							if (result.control == '失去体力') {
								player.loseHp();
								event.goto(2);
							} else {
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
									})
									.randomGet();
								event.cards = player.storage.taixu_jinxing_jilu;
								event.list.gain(event.cards, 'gain2');
								if (player.countCards('h') > 0) event.list.gain(player.getCards('h').randomGet(), player, 'giveAuto', 'bySelf');
								event.list.logSkill('taixu_jinxing');
							}
							('step 2');
							player.storage.taixu_jinxing_jilu = [];
							player.storage.taixu_jinxing_use = false;
							player.unmarkSkill('taixu_jinxing_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_jinxing') && current.storage.taixu_jinxing.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_jinxing.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_jinxing &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_jinxing.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_jinxing.includes(current)) {
									player.storage.taixu_jinxing.remove(current);
									current.storage.taixu_jinxing_jilu = [];
									current.storage.taixu_jinxing_use = false;
									current.unmarkSkill('taixu_jinxing_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			taixu_yishi: {
				charlotte: true,
			},
			taixu_jinwei: {
				group: ['taixu_jinwei_2', 'taixu_jinwei_4'],
				enable: 'chooseToUse',
				viewAs: { name: 'sha' },
				filterCard() {
					return false;
				},
				selectCard: -1,
				check(event, player) {
					return player.countCards('h', 'sha') == 0;
				},
				filter(event, player) {
					if (
						!game.hasPlayer(function (current) {
							return current != player && current.hasSkill('taixu_jinwei') && current.countCards('he') > 0;
						})
					)
						return false;
					return !event.taixu_jinwei && (event.type != 'phase' || !player.hasSkill('taixu_jinwei_3'));
				},
				ai: {
					order() {
						return get.order({ name: 'sha' });
					},
					respondSha: true,
					skillTagFilter(player) {
						if (
							!game.hasPlayer(function (current) {
								return current != player && current.hasSkill('taixu_jinwei') && current.countCards('he') > 0;
							})
						)
							return false;
					},
				},
				subSkill: {
					2: {
						trigger: {
							player: 'useCardBegin',
						},
						logTarget: 'targets',
						filter(event, player) {
							return event.skill == 'taixu_jinwei';
						},
						forced: true,
						content() {
							'step 0';
							delete trigger.skill;
							trigger.parent.set('taixu_jinwei', true);
							('step 1');
							if (event.current == undefined) event.current = player.next;
							if (event.current == player) {
								player.addTempSkill('taixu_jinwei_3');
								event.finish();
								trigger.cancel();
								trigger.parent.goto(0);
							} else if (event.current != player && event.current.hasSkill('taixu_jinwei') && event.current.countCards('he') > 0) {
								var next = event.current
									.chooseToDiscard('he', 1)
									.set('prompt', `是否弃置一张牌,然后代替${get.translation(player)}使用一张杀`)
									.set('ai', function (card) {
										var num = event.current.countCards('h', 'sha');
										if (num == 0) return 0;
										if (get.attitude(_status.event.player, player) <= 0) return 0;
										if (card.name == 'sha') return num > 1 ? 2 : 0;
										return 8 - get.value(card);
									});
							} else {
								event.current = event.current.next;
								event.redo();
							}
							('step 2');
							if (result.bool) {
								event.current.chooseToRespond(`是否替${get.translation(player)}使用一张杀？`, { name: 'sha' }).set('ai', function (card) {
									return true;
								});
							} else {
								event.current = event.current.next;
								event.goto(1);
							}
							('step 3');
							if (result.bool) {
								event.finish();
								trigger.card = result.card;
								trigger.cards = result.cards;
								trigger.throw = false;
								if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
									event.current.ai.shown += 0.3;
									if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
								}
							} else {
								event.current = event.current.next;
								event.goto(1);
							}
						},
					},
					3: {
						trigger: { global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'] },
						silent: true,
						charlotte: true,
						filter(event, player) {
							return event.skill != 'taixu_jinwei';
						},
						content() {
							player.removeSkill('taixu_jinwei_3');
						},
					},
					4: {
						trigger: { player: 'chooseToUseBefore' },
						filter(event, player) {
							if (event.responded) return false;
							if (player.storage.taixu_jinwei_4) return false;
							if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
							return game.hasPlayer(function (current) {
								return current != player && current.hasSkill('taixu_jinwei') && current.countCards('he') > 0;
							});
						},
						check(event, player) {
							if (get.damageEffect(player, event.player, player) >= 0) return false;
							return player.countCards('h', 'shan') == 0;
						},
						content() {
							'step 0';
							if (event.current == undefined) event.current = player.next;
							if (event.current == player) {
								event.finish();
							} else if (event.current.hasSkill('taixu_jinwei') && event.current.countCards('he') > 0) {
								if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
									player.storage.taixu_jinwei_4 = true;
									var next = event.current
										.chooseToDiscard('he', 1)
										.set('prompt', `是否弃置一张牌,然后代替${get.translation(player)}使用一张闪`)
										.set('ai', function (card) {
											var num = event.current.countCards('h', 'shan');
											if (num == 0) return 0;
											if (get.attitude(_status.event.player, player) <= 0) return 0;
											if (card.name == 'shan') return num > 1 ? 2 : 0;
											return 8 - get.value(card);
										});
								}
							}
							('step 1');
							player.storage.taixu_jinwei_4 = false;
							if (result.bool) {
								event.current.chooseToRespond(`是否替${get.translation(player)}使用一张闪？`, { name: 'shan' }).set('ai', function (card) {
									return true;
								});
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
							('step 2');
							if (result.bool) {
								event.finish();
								trigger.result = { bool: true, card: { name: 'shan' } };
								trigger.responded = true;
								trigger.animate = false;
								if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
									event.current.ai.shown += 0.3;
									if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
								}
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
						},
						ai: {
							respondShan: true,
							skillTagFilter(player) {
								if (player.storage.taixu_jinwei_4) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.hasSkill('taixu_jinwei') && current.countCards('he') > 0;
								});
							},
						},
					},
				},
			},
			taixu_zhanhuo: {
				global: ['taixu_zhanhuo_jilu', 'taixu_zhanhuo_clear'],
				group: 'taixu_zhanhuo_die',
				init(player) {
					player.storage.taixu_zhanhuo = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return !game.hasPlayer(function (current1) {
							return current1.hasSkill('taixu_zhanhuo') && current1.storage.taixu_zhanhuo.includes(current);
						});
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名角色发布【斩获】强令.', function (card, player, target) {
							return !game.hasPlayer(function (current) {
								return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(target);
							});
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target) > 0;
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_zhanhuo.add(result.targets[0]);
						result.targets[0].markSkill('taixu_zhanhuo_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '斩获',
						mark: true,
						intro: {
							content(storage, player, skill) {
								return (
									'<li>任务目标:为下一个造成濒死伤害的来源<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
											})
											.randomGet()
									) +
									''
								);
							},
						},
						trigger: {
							global: 'dying',
						},
						filter(event, player) {
							return (
								event.source &&
								event.source == player &&
								game.hasPlayer(function (current) {
									return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
								}) &&
								!player.storage.taixu_zhanhuo_use
							);
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							player.storage.taixu_zhanhuo_use = true;
							player.update();
						},
					},
					clear: {
						trigger: {
							global: ['dyingAfter', 'die'],
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (player.storage.taixu_zhanhuo_use) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【斩获】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								var name = event.triggername;
								if (name == 'dyingAfter') {
									player.draw(2);
								} else {
									event.list = game
										.filterPlayer(function (current) {
											return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
										})
										.randomGet();
									game.asyncDraw([player, event.list], [3, 1]);
								}
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【斩获】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
							}
							player.storage.taixu_zhanhuo_use = false;
							player.unmarkSkill('taixu_zhanhuo_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_zhanhuo') && current.storage.taixu_zhanhuo.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_zhanhuo.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_zhanhuo &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_zhanhuo.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_zhanhuo.includes(current)) {
									player.storage.taixu_zhanhuo.remove(current);
									current.storage.taixu_zhanhuo_use = false;
									current.unmarkSkill('taixu_zhanhuo_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			taixu_jiaoxie: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards('e') > 0;
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget('对一名其他角色发布【缴械】强令.', function (card, player, target) {
							return target != player && target.countCards('e') > 0;
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target) <= 0 || (get.attitude(_status.event.player, target) < 0 && get.damageEffect(target, _status.event.player, _status.event.player) > 0);
						});
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						event.target = result.targets[0];
						var num = event.target.countCards('e');
						event.target
							.chooseCard('e', [1, num])
							.set('prompt', `将你装备区内的任意张牌交给${get.translation(player)}`)
							.set('ai', function (card) {
								return 6 - get.value(card);
							});
					} else event.finish();
					('step 2');
					if (result.bool) {
						event.target.popup('强令成功');
						game.log(event.target, '成功完成了', player, '发布的', '#g【缴械】', '强令');
						game.countPlayer(function (current) {
							if (current.hasSkill('taixu_yishi') && (current == player || player.getFriends().includes(current))) {
								current.logSkill('taixu_yishi');
								current.draw();
							}
						});
						event.target.give(result.cards, player);
						event.target.draw(result.cards.length);
					} else {
						event.target.popup('强令失败');
						game.log(event.target, '未完成', player, '发布的', '#g【缴械】', '强令');
						game.countPlayer(function (current) {
							if (current.hasSkill('taixu_yishi') && (current == player || player.getFriends().includes(current))) {
								current.logSkill('taixu_yishi');
								current.discardPlayerCard(event.target, 'he', 1, true);
							}
						});
						event.target.damage();
					}
				},
			},
			taixu_zhuosheng: {
				global: ['taixu_zhuosheng_jilu', 'taixu_zhuosheng_clear'],
				group: 'taixu_zhuosheng_die',
				init(player) {
					player.storage.taixu_zhuosheng = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return (
						player.countCards('he') > 0 &&
						game.hasPlayer(function (current) {
							return (
								current != player &&
								!game.hasPlayer(function (current1) {
									return current1.hasSkill('taixu_zhuosheng') && current1.storage.taixu_zhuosheng.includes(current);
								})
							);
						})
					);
				},
				content() {
					'step 0';
					player
						.chooseToDiscard(1, 'he')
						.set('prompt', '是否弃置一张牌,然后对一名其他角色发布【擢升】强令.')
						.set('ai', function (card) {
							if (
								game.countPlayer(function (current) {
									return current != player && get.attitude(player, current) > 0;
								}) > 0
							)
								return 4 - get.value(card);
							else return 0;
						});
					('step 1');
					if (result.bool) {
						player
							.chooseTarget(true, '令一名其他角色执行【擢升】强令任务.', function (card, player, target) {
								return (
									target != player &&
									!game.hasPlayer(function (current) {
										return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(target);
									})
								);
							})
							.set('ai', function (target) {
								return get.attitude(_status.event.player, target) > 0;
							});
					} else event.finish();
					('step 2');
					if (result.bool) {
						player.line(result.targets[0]);
						player.storage.taixu_zhuosheng.add(result.targets[0]);
						result.targets[0].markSkill('taixu_zhuosheng_jilu');
						player.update();
					}
				},
				subSkill: {
					jilu: {
						marktext: '擢升',
						mark: true,
						intro: {
							content(storage, player, skill) {
								var num = player.storage.taixu_zhuosheng_jilu;
								if (num == undefined) num = 0;
								return (
									'<li>任务目标:于你回合结束前获得至少五张牌<br><li>发布者:' +
									get.translation(
										game
											.filterPlayer(function (current) {
												return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
											})
											.randomGet()
									) +
									`<br><li>已获得${num}张牌`
								);
							},
						},
						trigger: {
							player: 'gainEnd',
						},
						filter(event, player) {
							return (
								event.cards &&
								event.cards.length &&
								game.hasPlayer(function (current) {
									return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
								})
							);
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							if (player.storage.taixu_zhuosheng_jilu == '' || player.storage.taixu_zhuosheng_jilu == undefined) player.storage.taixu_zhuosheng_jilu = 0;
							player.storage.taixu_zhuosheng_jilu += trigger.cards.length;
							player.update();
						},
					},
					clear: {
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
							});
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						content() {
							'step 0';
							if (player.storage.taixu_zhuosheng_jilu >= 5) {
								player.popup('强令成功');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
									})
									.randomGet();
								game.log(player, '成功完成了', event.list, '发布的', '#g【擢升】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.draw();
									}
								});
								player.gainMaxHp();
								player.recover();
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
									})
									.randomGet();
								if (
									event.list &&
									player.countCards('he', function (card) {
										return get.type(card) != 'basic';
									}) > 0
								) {
									player
										.chooseCard(`〖擢升〗交给${get.translation(event.list)}一张非基本牌`, 'he', true, function (card) {
											return get.type(card) != 'basic';
										})
										.set('ai', function (card) {
											return 7 - get.value(card);
										});
								} else event.goto(2);
							} else {
								player.popup('强令失败');
								event.list = game
									.filterPlayer(function (current) {
										return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
									})
									.randomGet();
								game.log(player, '未完成', event.list, '发布的', '#g【擢升】', '强令');
								game.countPlayer(function (current) {
									if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
										current.logSkill('taixu_yishi');
										current.discardPlayerCard(player, 'he', 1, true);
									}
								});
								event.goto(2);
							}
							('step 1');
							if (result.bool) {
								event.list.gain(result.cards, player, 'giveAuto');
							}
							('step 2');
							player.storage.taixu_zhuosheng_jilu = 0;
							player.unmarkSkill('taixu_zhuosheng_jilu');
							player.update();
							event.list = game
								.filterPlayer(function (current) {
									return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
								})
								.randomGet();
							event.list.storage.taixu_zhuosheng.remove(player);
							event.list.update();
						},
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						charlotte: true,
						forced: true,
						silent: true,
						forced: true,
						filter(event, player) {
							return (
								player.storage.taixu_zhuosheng &&
								game.hasPlayer(function (current) {
									return player.storage.taixu_zhuosheng.includes(current);
								})
							);
						},
						content() {
							game.countPlayer(function (current) {
								if (player.storage.taixu_zhuosheng.includes(current)) {
									player.storage.taixu_zhuosheng.remove(current);
									current.storage.taixu_zhuosheng_jilu = 0;
									current.unmarkSkill('taixu_zhuosheng_jilu');
									current.update();
								}
							});
							player.update();
						},
					},
				},
			},
			xiongshi_fuqi: {
				audio: 2,
				forced: true,
				charlotte: true,
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return (
						event.card &&
						(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(current, player) >= 0;
						})
					);
				},
				content() {
					trigger.directHit.addArray(
						game.filterPlayer(function (current) {
							return current != player && get.distance(current, player) >= 0;
						})
					);
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return get.distance(arg.target, player) >= 0;
					},
				},
			},
			diy_xiongshiSkill3: {
				trigger: {
					source: 'damageBegin1',
				},
				audio: true,
				charlotte: true,
				group: 'xiongshi_fuqi',
				filter(event, player) {
					return event.card && event.parent.name == event.card.name && event.getParent(2).targets && event.getParent(2).targets.length == 1 && player.countCards('h') > event.player.countCards('h');
				},
				forced: true,
				logTarget: 'player',
				content() {
					/*trigger.num++;		
						'step 1'*/
					var card = get.cardPile2((card) => get.type(card, false) == 'basic');
					if (card) player.gain(card, 'gain2');
					//},
				},
			},
			diy_xiongshiSkill1: {
				audio: true,
				trigger: {
					player: 'damageEnd',
				},
				charlotte: true,
				filter(event, player) {
					return event.nature && (event.nature == 'thunder' || event.nature == 'fire');
				},
				forced: true,
				content() {
					if (trigger.nature == 'thunder') {
						player.draw(Math.min(player.maxHp, 20));
					} else {
						var card = game.createCard('bingliang');
						player.line(trigger.source);
						trigger.source.addJudge(card);
						player.gain(
							get.cardPile(function (card) {
								return get.name(card) == 'sha';
							}),
							'gain2'
						);
					}
				},
			},
			diy_xiongshiSkill2: {
				trigger: { source: 'damageEnd' },
				forced: true,
				charlotte: true,
				filter(event, player) {
					if (event.parent.name == 'diy_xiongshiSkill2') return false;
					return game.hasPlayer(function (current) {
						return current != event.player && current != player;
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2('diy_xiongshiSkill2'), function (card, player, target) {
							return target != trigger.player && target != player;
						})
						.set('ai', function (target) {
							return get.damageEffect(target, player, player);
						});
					('step 1');
					if (result.bool) {
						result.targets[0].damage(player);
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			/*合纵抗秦*/
			//以下代码全部搬运自【合纵抗秦】扩展!
			bubing_fangzhen: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (
						event.player.group == 'daqin' ||
						event.player == player ||
						!player.canUse(
							{
								name: 'sha',
							},
							event.player
						)
					)
						return false;
					if ((event.card.name == 'sha' || get.type(event.card) == 'trick') && get.distance(event.player, player, 'attack') <= 1) return true;
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'black' ? 2 : -1;
					});
					('step 1');
					if (result.judge > 0) {
						player.useCard(
							{
								name: 'sha',
							},
							trigger.player,
							false
						);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!target.inRange(player)) return;
							if (player.group == 'daqin') return;
							if (card.name != 'sha' && get.type(card) != 'trick') return;
							var maixie = player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp');
							var shan = player.countCards('h', 'shan');
							var taojiu = player.countCards('h', 'tao') + player.countCards('h', 'jiu');
							var hp = player.hp;
							if (player.getEquip('tengjia') && get.attitude(player, target) <= 0) {
								if (get.itemtype(_status.pileTop) == 'card') {
									if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
								} else {
									return;
								}
								if (target.getEquip('zhuque') || target.getEquip('qinggang')) {
									if (shan == 0) {
										if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
										return -2;
									} else {
										return 0.2;
									}
								}
								return 1;
							}
							if (player.getEquip('bagua') && get.attitude(player, target) <= 0) {
								if (get.itemtype(_status.pileTop) == 'card') {
									if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
								} else {
									return;
								}
								if (target.getEquip('qinggang')) {
									if (shan == 0) {
										if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
										return -1;
									} else {
										return 0.2;
									}
								}
								return 0.5;
							}
						},
					},
				},
			},
			bubing_changbing: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					attackFrom(from, to, distance) {
						return distance - 2;
					},
				},
			},
			shangyang_bianfa: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					selectTarget(card, player, range) {
						if (_status.kangqinEvent == '变法图强' && card.name == 'shangyangbianfa' && Array.isArray(range) && range[1] != -1) range[1]++;
					},
				},
				enable: 'chooseToUse',
				usable: 1,
				filterCard(card) {
					return get.type(card) == 'trick';
				},
				viewAs: {
					name: 'shangyangbianfa',
				},
				viewAsFilter(player) {
					if (
						!player.countCards('h', {
							type: 'trick',
						})
					)
						return false;
				},
				prompt: '将一张普通锦囊牌当作【商鞅变法】使用',
				check(card) {
					return 9 - get.value(card);
				},
				ai: {
					basic: {
						order: 10,
						useful: 1,
						value: 5.5,
					},
					result: {
						target: -1.5,
					},
					tag: {
						damage: 1,
					},
				},
			},
			shangyang_limu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					return get.type(event.card) == 'trick';
				},
				content() {
					trigger.nowuxie = true;
				},
			},
			shangyang_kencao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				init(player) {
					if (!player.storage.shangyang_kencao) player.storage.shangyang_kencao = 0;
				},
				marktext: '功',
				intro: {
					content: '当前有#个<功>标记',
				},
				trigger: {
					global: 'damageAfter',
				},
				forced: true,
				filter(event, player) {
					return event.source && event.source.group == 'daqin' && event.source.isAlive();
				},
				content() {
					if (trigger.source == player) {
						player.markSkill('shangyang_kencao');
						player.storage.shangyang_kencao += trigger.num;
						player.syncStorage('shangyang_kencao');
						game.log(player, '获得了', trigger.num, '个<功>标记');
						if (player.storage.shangyang_kencao >= 3) {
							game.log(player, '移去了', player.storage.shangyang_kencao, '个<功>标记');
							player.storage.shangyang_kencao = 0;
							player.syncStorage('shangyang_kencao');
							if (player.storage.shangyang_kencao <= 0) player.unmarkSkill('shangyang_kencao');
							player.gainMaxHp();
							player.recover();
						}
					} else {
						player.line(trigger.source);
						if (trigger.source.storage.shangyang_kencao == undefined) trigger.source.storage.shangyang_kencao = 0;
						trigger.source.markSkill('shangyang_kencao');
						trigger.source.storage.shangyang_kencao += trigger.num;
						trigger.source.syncStorage('shangyang_kencao');
						game.log(trigger.source, '获得了', trigger.num, '个<功>标记');
						if (trigger.source.storage.shangyang_kencao >= 3) {
							game.log(trigger.source, '移去了', trigger.source.storage.shangyang_kencao, '个<功>标记');
							trigger.source.storage.shangyang_kencao = 0;
							trigger.source.syncStorage('shangyang_kencao');
							if (trigger.source.storage.shangyang_kencao <= 0) trigger.source.unmarkSkill('shangyang_kencao');
							trigger.source.gainMaxHp();
							trigger.source.recover();
						}
					}
				},
			},
			shangyangbianfa_dying: {
				trigger: {
					player: 'dying',
				},
				forced: true,
				popup: false,
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.parent.type == 'shangyangbianfa';
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'black' ? -1 : 0;
					});
					('step 1');
					if (result.color == 'black') {
						game.countPlayer(function (current) {
							if (current != player) current.addTempSkill('shangyangbianfa_dying_nosave', '_saveAfter');
						});
					}
				},
				subSkill: {
					nosave: {
						mod: {
							cardSavable() {
								return false;
							},
						},
					},
				},
			},
			zhangyi_lianheng: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				content() {
					var list = game.filterPlayer(function (current) {
						current.removeSkill('zhangyi_lianheng_mark');
						return current.group != 'daqin';
					});
					if (list.length > 1) {
						var target = list.randomGet();
						player.line(target);
						target.addSkill('zhangyi_lianheng_mark');
					}
				},
				group: 'zhangyi_lianheng_init',
				subSkill: {
					mark: {
						charlotte: true,
						mod: {
							playerEnabled(card, player, target) {
								if (target.group == 'daqin' || (_status.kangqinEvent == '合纵连横' && target.isLinked())) return false;
							},
						},
						marktext: '横',
						mark: true,
						intro: {
							content() {
								if (_status.kangqinEvent == '合纵连横') return '不能对秦势力角色和已横置的角色使用牌';
								return '不能对秦势力角色使用牌';
							},
						},
					},
					init: {
						trigger: {
							global: ['gameStart'],
						},
						forced: true,
						content() {
							var list = game.filterPlayer(function (current) {
								return current.group != 'daqin';
							});
							if (list.length) {
								var target = list.randomGet();
								player.line(target);
								target.addSkill('zhangyi_lianheng_mark');
							}
						},
					},
				},
			},
			zhangyi_xichu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					target: 'useCardToTarget',
				},
				forced: true,
				filter(event, player) {
					return (
						event.card &&
						event.card.name == 'sha' &&
						game.hasPlayer(function (current) {
							return current != player && current != event.player && lib.filter.targetInRange(event.card, event.player, current);
						})
					);
				},
				content() {
					'step 0';
					trigger.player.chooseToDiscard(`戏楚:弃置一张点数为6的牌,或令${get.translation(player)}将此【杀】转移`, function (card) {
						return get.number(card) == 6;
					}).ai = function (card) {
						return 100 - get.value(card);
					};
					('step 1');
					if (!result.bool) {
						player.chooseTarget(true, `将此【杀】转移给${get.translation(trigger.player)}攻击范围内的一名角色`, true, function (card, player, target) {
							var trigger = _status.event.getTrigger();
							return target != player && target != trigger.player && !trigger.targets.includes(target) && lib.filter.targetInRange(trigger.card, trigger.player, target);
						}).ai = function (target) {
							var trigger = _status.event.getTrigger();
							return get.effect(target, trigger.card, trigger.player, _status.event.player);
						};
					} else event.finish();
					('step 2');
					if (result.bool) {
						player.line(result.targets[0]);
						trigger.targets[trigger.targets.indexOf(player)] = result.targets[0];
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (
								card.name == 'sha' &&
								!player.countCards('h', {
									number: '6',
								}) &&
								game.hasPlayer(function (current) {
									return current != player && current != target && lib.filter.targetInRange(card, player, current);
								})
							)
								return 'zeroplayertarget';
						},
					},
				},
			},
			zhangyi_xiongbian: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					target: 'useCardToTarget',
				},
				forced: true,
				filter(event, player) {
					return get.type(event.card) == 'trick';
				},
				content() {
					'step 0';
					player
						.judge(function (result) {
							if (result.number == 6) return 1;
							return -1;
						})
						.set('no6', get.attitude(player, trigger.player) > 0);
					('step 1');
					if (result.bool) {
						trigger.parent.targets.length = 0;
						trigger.parent.all_excluded = true;
					}
				},
			},
			zhangyi_qiaoshe: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'judge',
				},
				forced: true,
				content() {
					'step 0';
					var card = trigger.player.judging[0];
					var judge0 = trigger.judge(card);
					var judge1 = 0;
					var choice = trigger.no6 && card.number == 6 ? '+1' : 'cancel2';
					var attitude = get.attitude(player, trigger.player);
					var list = [];
					for (var i = -3; i < 4; i++) {
						if (i == 0) continue;
						list.push((i > 0 ? '+' : '') + i);
						if (!trigger.no6) {
							var judge2 =
								(trigger.judge({
									name: get.name(card),
									suit: get.suit(card),
									number: get.number(card) + i,
									nature: get.nature(card),
								}) -
									judge0) *
								attitude;
							if (judge2 > judge1) {
								choice = (i > 0 ? '+' : '') + i;
								judge1 = judge2;
							}
						}
					}
					list.push('cancel2');
					player
						.chooseControl(list)
						.set('ai', function () {
							return _status.event.choice;
						})
						.set('choice', choice).prompt = get.prompt2(event.name);
					('step 1');
					if (result.control != 'cancel2') {
						game.log(trigger.player, '判定结果点数', '#g' + result.control);
						player.popup(result.control, 'fire');
						if (!trigger.fixedResult) trigger.fixedResult = {};
						if (!trigger.fixedResult.number) trigger.fixedResult.number = get.number(trigger.player.judging[0]);
						trigger.fixedResult.number += parseInt(result.control);
					}
				},
			},
			txshuzhen: {
				audio: 2,
				enable: 'chooseToUse',
				usable: 2,
				filterCard(card) {
					return get.color(card) == 'black';
				},
				position: 'hes',
				viewAs: { name: 'tao' },
				viewAsFilter(player) {
					if (!player.countCards('hes', { color: 'black' })) return false;
					return true;
				},
				prompt: '将一张黑色牌当桃使用',
				check(card) {
					if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
					return 4 - get.value(card);
				},
				ai: {
					threaten: 1.5,
				},
			},
			miyue_zhangzheng: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.group != 'daqin';
					});
				},
				content() {
					'step 0';
					event.players = game
						.filterPlayer(function (current) {
							return current != player && current.group != 'daqin';
						})
						.sortBySeat();
					('step 1');
					if (event.players.length) {
						event.current = event.players.shift();
						player.line(event.current);
						if (event.current.countCards('h')) {
							event.current.chooseToDiscard('h', '弃置一张手牌或失去一点体力').set('ai', function (card) {
								return 7 - get.value(card);
							});
							event.tempbool = false;
						} else {
							event.tempbool = true;
						}
					} else {
						event.finish();
					}
					('step 2');
					if (event.tempbool || result.bool == false) {
						event.current.loseHp();
					}
					event.goto(1);
				},
			},
			miyue_taihou: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				filter(event, player) {
					return event.player != player && event.player.sex == 'male' && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
				},
				content() {
					'step 0';
					player.line(trigger.player);
					var type = get.type(trigger.card);
					var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
					trigger.player
						.chooseToDiscard(`弃置一张${get.translation(type)}牌,否则${get.translation(trigger.card)}对` + get.translation(player) + '无效', function (card) {
							return get.type(card) == type;
						})
						.set('ai', function (card) {
							if (_status.event.eff > 0) {
								return 10 - get.value(card);
							}
							return 0;
						})
						.set('type', type)
						.set('eff', eff);
					('step 1');
					if (!result.bool) {
						trigger.parent.excluded.add(player);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (player.sex != 'male') return;
							var type = get.type(card);
							if (get.name(card) != 'sha' && type != 'trick') return;
							if (
								!player.hasCard(function (otherCard) {
									return otherCard != card && get.type(otherCard) == type && get.value(otherCard) < 10;
								})
							)
								return 'zeroplayertarget';
						},
					},
				},
			},
			miyue_youmie: {
				audio: 'ext:太虚幻境/audio/skill:true',
				prompt: '出牌阶段限一次,你可以将一张牌交给一名角色,若如此做,直到你的下个回合开始,该角色于其回合外无法使用或打出牌.',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				discard: false,
				line: true,
				prepare: 'give',
				position: 'he',
				filterCard: true,
				filterTarget: true,
				check(card) {
					if (get.position(card) == 'e') return -1;
					return 5 - get.value(card);
				},
				content() {
					target.gain(cards, player);
					target.addSkill('miyue_youmie_debuff');
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							return -1;
						},
					},
				},
				group: ['miyue_youmie_delete'],
				subSkill: {
					debuff: {
						mark: true,
						marktext: '灭',
						mod: {
							cardEnabled(card, player, target) {
								if (_status.currentPhase != player) return false;
							},
							cardUsable(card, player, target) {
								if (_status.currentPhase != player) return false;
							},
							cardRespondable(card, player, target) {
								if (_status.currentPhase != player) return false;
							},
							cardSavable(card, player, target) {
								if (_status.currentPhase != player) return false;
							},
						},
						intro: {
							content: '回合外不能使用或打出卡牌',
						},
					},
					delete: {
						trigger: {
							player: 'phaseBefore',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('miyue_youmie_debuff');
							});
						},
						content() {
							for (var i of game.players) {
								if (i.hasSkill('miyue_youmie_debuff')) {
									player.line(i);
									i.removeSkill('miyue_youmie_debuff');
								}
							}
						},
					},
				},
			},
			miyue_yintui: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'loseEnd',
				},
				forced: true,
				filter(event, player) {
					if (player.countCards('h')) return false;
					if (Array.isArray(event.cards))
						for (var i of event.cards) {
							if (i.original == 'h') return true;
						}
					return false;
				},
				content() {
					player.turnOver();
				},
				ai: {
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == 'noh') {
							if (player.countCards('h') != 1 || player.isTurnedOver()) return false;
						}
					},
				},
				group: ['miyue_yintui_damage'],
				subSkill: {
					damage: {
						audio: 'miyue_yintui',
						trigger: {
							player: 'damageBegin3',
						},
						forced: true,
						filter(event, player) {
							return player.isTurnedOver();
						},
						content() {
							trigger.num--;
							player.draw();
						},
						ai: {
							maixie: true,
							skillTagFilter(player, tag) {
								if (tag == 'maixie') {
									if (!player.isTurnedOver()) return false;
								}
							},
							effect: {
								target(card, player, target) {
									if (player.hasSkillTag('jueqing')) return;
									if (target.hujia) return;
									if (!target.isTurnedOver()) return;
									if (get.tag(card, 'damage')) return [1, 1];
								},
							},
						},
					},
				},
			},
			baiqi_wuan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				global: 'baiqi_wuan_buff',
				subSkill: {
					buff: {
						mod: {
							cardUsable(card, player, num) {
								if (player.group == 'daqin' && card.name == 'sha') {
									return (
										num +
										game.countPlayer(function (current) {
											return current.hasSkill('baiqi_wuan');
										})
									);
								}
							},
						},
					},
				},
			},
			baiqi_shashen: {
				audio: 'ext:太虚幻境/audio/skill:true',
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: true,
				viewAs: {
					name: 'sha',
				},
				viewAsFilter(player) {
					if (!player.countCards('h')) return false;
				},
				prompt: '将一张手牌当作【杀】使用或打出',
				check(card) {
					return 4 - get.value(card);
				},
				group: ['baiqi_shashen_i'],
				subSkill: {
					i: {
						audio: 'baiqi_shashen',
						trigger: {
							source: 'damageEnd',
						},
						forced: true,
						filter(event, player) {
							return (
								event.card &&
								event.card.name == 'sha' &&
								player
									.getHistory('useCard', function (evt) {
										return evt.card.name == 'sha';
									})
									.indexOf(event.getParent('useCard')) == 0
							);
						},
						content() {
							player.draw();
						},
					},
				},
				ai: {
					skillTagFilter(player) {
						if (!player.countCards('h')) return false;
					},
					respondSha: true,
				},
			},
			baiqi_fachu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					source: 'dying',
				},
				forced: true,
				filter(event, player) {
					return event.parent.name == 'damage' && event.player.group != 'daqin';
				},
				content() {
					var list = [];
					for (var i = 1; i <= 5; i++) {
						if (trigger.player.isDisabled(i)) continue;
						list.add('equip' + (i == 3 || i == 4 ? 6 : i));
					}
					if (list.length) {
						player.line(trigger.player);
						var num = list.randomGet();
						trigger.player.disableEquip(num);
						if (num == 'equip6') {
							trigger.player.disableEquip(3);
							trigger.player.disableEquip(4);
						}
					} else {
						trigger.player.loseMaxHp().source = player;
					}
				},
			},
			baiqi_changsheng: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					targetInRange(card) {
						if (card.name == 'sha') return true;
					},
				},
				trigger: {
					player: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && !player.inRange(event.target);
				},
				forced: true,
				content() { },
			},
			qibing_changjian: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					attackFrom(from, to, distance) {
						return distance - 1;
					},
				},
				trigger: {
					player: 'useCard2',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('qibing_changjian'), `为${get.translation(trigger.card)}增加一个目标,或取消并令` + get.translation(trigger.card) + '伤害＋1', function (card, player, target) {
							return !_status.event.sourcex.includes(target) && player.canUse('sha', target);
						})
						.set('sourcex', trigger.targets)
						.set('ai', function (target) {
							var player = _status.event.player;
							return get.effect(
								target,
								{
									name: 'sha',
								},
								player,
								player
							);
						});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.line(event.target);
						trigger.targets.push(event.target);
					} else {
						if (!trigger.baseDamage) ttrigger.baseDamage = 1;
						trigger.baseDamage++;
					}
				},
			},
			qibing_liangju: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					'step 0';
					trigger.target.judge(function (card) {
						return get.suit(card) == 'spade' ? -2 : 0;
					});
					('step 1');
					if (result.judge < 0) {
						trigger.parent.directHit.add(trigger.target);
					}
				},
				group: ['qibing_liangju_judge'],
				subSkill: {
					judge: {
						audio: 'qibing_liangju',
						trigger: {
							target: 'useCardToTargeted',
						},
						filter(event, player) {
							if (event.player == player) return false;
							if (event.card.name == 'sha') return true;
							return false;
						},
						forced: true,
						content() {
							'step 0';
							player.judge(function (card) {
								return get.suit(card) == 'heart' ? 2 : -1;
							});
							('step 1');
							if (result.judge > 0) {
								trigger.parent.excluded.add(player);
							}
						},
					},
				},
			},
			//龙羽飞
			txlongyi: {
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 2,
				filter(event, player) {
					if (event.type == 'wuxie') return false;
					var hs = player.getCards('h');
					if (!hs.length) return false;
					for (var i of hs) {
						if (game.checkMod(i, player, 'unchanged', 'cardEnabled2', player) === false) return false;
					}
					for (var i of lib.inpile) {
						if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) return true;
						if (i == 'sha') {
							var list = ['fire', 'thunder', 'ice'];
							for (var j of list) {
								if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) return true;
							}
						}
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var vcards = [],
							hs = player.getCards('h');
						for (var i of lib.inpile) {
							if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) vcards.push(['基本', '', i]);
							if (i == 'sha') {
								for (var j of lib.inpile_nature) {
									if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) vcards.push(['基本', '', i, j]);
								}
							}
						}
						return ui.create.dialog('龙裔', [vcards, 'vcard']);
					},
					check(button, player) {
						if (_status.event.parent.type != 'phase') return 1;
						return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
					},
					backup(links, player) {
						return {
							audio: 'longyi',
							popname: true,
							viewAs: { name: links[0][2], nature: links[0][3] },
							filterCard: true,
							selectCard: -1,
							position: 'h',
						};
					},
					prompt(links, player) {
						return '将所有手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
					},
				},
				hiddenCard(player, name) {
					return name != 'du' && get.type(name) == 'basic' && player.countCards('h') > 0;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player) {
						return player.countCards('h') > 0;
					},
					order: 0.5,
					result: {
						player(player) {
							if (_status.event.dying) {
								return get.attitude(player, _status.event.dying);
							}
							if (_status.event.type == 'respondShan') return 1;
							var val = 0,
								hs = player.getCards('h'),
								max = 0;
							for (var i of hs) {
								val += get.value(i, player);
								if (get.type(i, player) == 'trick') max += 5;
							}
							if (player.hasSkill('zhenjue')) max += 7;
							return val <= max ? 1 : 0;
						},
					},
				},
				group: 'txlongyi_effect',
				subSkill: {
					effect: {
						trigger: { player: ['useCard', 'respond'] },
						forced: true,
						charlotte: true,
						popup: false,
						filter(event, player) {
							if (event.skill != 'txlongyi_backup') return false;
							for (var i of event.cards) {
								var type = get.type2(i, player);
								if (type == 'equip' || type == 'trick') return true;
							}
							return false;
						},
						content() {
							var map = {};
							for (var i of trigger.cards) {
								map[get.type2(i, player)] = true;
							}
							if (map.trick) player.draw();
							if (map.equip && trigger.directHit) trigger.directHit.addArray(game.players);
						},
					},
					backup: {},
				},
			},
			//以下代码全部搬运自【RE:英雄杀】扩展!
			txrenwang: {
				selectCard: 2,
				audio: 'ext:太虚幻境/audio/skill:true',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('he') > 1;
				},
				filterTarget(card, player, target) {
					return player != target && target.countCards('h') > player.countCards('h');
				},
				filterCard: true,
				position: 'he',
				content() {
					player.draw(target.countCards('h') - player.countCards('h'));
				},
				check(card) {
					return 8 - get.value(card);
				},
				ai: {
					order: 2,
					result: {
						player(player) {
							if (player.countCards('he') < 3) return 4;
							return 1;
						},
						target(player, target) {
							if (target.countCards('h') + 2 > player.countCards('h') - 2) return 5;
							if (target.countCards('h') > player.countCards('h')) return 2;
							return 0;
						},
					},
					threaten: 0.3,
				},
			},
			txshiwei: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'loseAfter',
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter(event, player) {
					if (event.player.countCards('h')) return false;
					if (event.player == player) return false;
					if (!event.player.isAlive()) return false;
					return event.hs && event.hs.length;
				},
				content() {
					player.line(trigger.player, 'green');
					trigger.player.addSkill('txshiwei2');
					trigger.player.addToExpansion(get.cards(), 'gain2').gaintag.add('txshiwei2');
				},
				ai: {
					threaten: 1.1,
				},
			},
			txshiwei2: {
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				charlotte: true,
				forced: true,
				silent: true,
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				trigger: { player: 'phaseBegin' },
				content() {
					player.skip('phaseUse');
					player.removeSkill('txshiwei2');
				},
			},
			txhunpofu: {
				audio: 'ext:太虚幻境/audio/skill:2',
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				filter(event, player) {
					return player.isDamaged() && event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
				},
				content() {
					trigger.num++;
				},
			},
			txhongmen: {
				audio: 'ext:太虚幻境/audio/skill:2',
				trigger: { player: 'phaseZhunbeiBegin' },
				filter(event, player) {
					return player.isDamaged();
				},
				forced: true,
				content() {
					'step 0';
					event.num = player.maxHp - player.hp;
					player.chooseTarget(
						get.prompt('txhongmen'),
						`令一名其他角色弃置${get.cnNumber(event.num, true)}张牌`,
						function (card, player, target) {
							return player != target;
						},
						function (target) {
							var att = get.attitude(_status.event.player, target);
							return -att;
						}
					);
					('step 1');
					if (result.bool) {
						result.targets[0].chooseToDiscard(event.num, true, 'he');
					} else {
						event.finish();
					}
				},
				ai: {
					threaten: 1.2,
					expose: 0.4,
				},
			},
			/*合纵抗秦2*/
			lvbuwei_jugu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					maxHandcard(player, num) {
						return num + player.maxHp;
					},
				},
				trigger: {
					global: ['gameStart'],
				},
				forced: true,
				content() {
					player.draw(Math.min(player.maxHp, 20));
				},
			},
			lvbuwei_qihuo: {
				audio: 'ext:太虚幻境/audio/skill:true',
				enable: 'phaseUse',
				usable: 1,
				delay: 0,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					event.list = [];
					event.cardNum = [];
					var hs = player.getCards('h');
					for (var i = 0; i < hs.length; i++) {
						var card = hs[i];
						if (event.list.includes(get.type(card, 'trick'))) {
							event.cardNum[event.list.indexOf(get.type(card, 'trick'))]++;
							continue;
						}
						event.list.push(get.type(card, 'trick'));
						event.cardNum.push(1);
					}
					('step 1');
					player.chooseControl(event.list, function (event, player) {
						return event.list[event.cardNum.indexOf(Math.max.apply(null, event.cardNum))] || event.list.randomGet();
					}).prompt = '奇货:请选择一种类别';
					('step 2');
					var cards = player.getCards('h', function (card) {
						return get.type(card, 'trick') == result.control;
					});
					player.discard(cards);
					player.draw(cards.length * 2);
				},
				ai: {
					order: 1,
					result: {
						player: 4,
					},
					threaten: 1.55,
				},
			},
			lvbuwei_chunqiu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(event, player) {
					var list = ['useCard', 'respond'];
					list.remove(event.name);
					return player.getHistory(event.name)[0] == event && !player.getHistory(list[0].length);
				},
				content() {
					player.draw();
				},
			},
			lvbuwei_baixiang: {
				audio: 'ext:太虚幻境/audio/skill:true',
				skillAnimation: true,
				animationColor: 'thunfer',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h') >= player.hp * 3 && !player.storage.lvbuwei_baixiang;
				},
				derivation: ['lvbuwei_zhongfu'],
				content() {
					'step 0';
					player.storage.lvbuwei_baixiang = true;
					player.awakenSkill('lvbuwei_baixiang');
					('step 1');
					var num = player.maxHp - player.hp;
					if (num > 0) player.recover(num);
					player.addSkill('lvbuwei_zhongfu');
					game.log(player, '获得了技能〖仲父〗');
				},
				ai: {
					maixie: true,
					skillTagFilter(player, tag) {
						if (tag == 'maixie') {
							if (player.storage.lvbuwei_baixiang || player.countCards('h') < player.hp * 3 || player.hp < 3) return false;
						}
					},
					effect: {
						target(card, player, target) {
							if (target.storage.lvbuwei_baixiang || !get.tag(card, 'damage')) return;
							var num = (target.hp - get.tag(card, 'damage')) * 3;
							if (num > 0 && target.countCards('h') >= num) return [0.5, 1];
						},
					},
				},
			},
			lvbuwei_zhongfu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				content() {
					var skill = ['new_rejianxiong', 'rerende', 'rezhiheng'].randomGet();
					player.addTempSkill(skill, {
						player: 'phaseBefore',
					});
					game.log(player, '获得了技能', '〖', skill, '〗');
				},
			},
			zhaoji_shanwu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'black' ? 2 : 0;
					});
					('step 1');
					if (result.judge > 0) {
						trigger.parent.directHit.add(trigger.target);
					}
				},
				ai: {
					effect: {
						player(card, player, target, current) {
							if (get.name(card) != 'sha' || get.attitude(player, target) > 0) return;
							if (target.hasSkillTag('respondShan')) return [1.2, 0];
						},
					},
				},
				group: ['zhaoji_shanwu_judge'],
				subSkill: {
					judge: {
						audio: 'zhaoji_shanwu',
						trigger: {
							target: 'useCardToTargeted',
						},
						filter(event, player) {
							if (event.player == player) return false;
							if (event.card.name == 'sha') return true;
							return false;
						},
						forced: true,
						content() {
							'step 0';
							player.judge(function (card) {
								return get.color(card) == 'red' ? 2 : 0;
							});
							('step 1');
							if (result.judge > 0) {
								trigger.parent.excluded.add(player);
							}
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.name(card) == 'sha') return [0.5, 0];
								},
							},
						},
					},
				},
			},
			zhaoji_daqi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				init(player) {
					if (!player.storage.zhaoji_daqi) player.storage.zhaoji_daqi = 0;
				},
				marktext: '期',
				intro: {
					content: '当前有#个<期>标记',
				},
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				filter(event, player) {
					return player.storage.zhaoji_daqi != Infinity && player.storage.zhaoji_daqi >= 10;
				},
				content() {
					game.log(player, '失去了', player.storage.zhaoji_daqi, '个<期>标记');
					player.storage.zhaoji_daqi = 0;
					player.syncStorage('zhaoji_daqi');
					player.unmarkSkill('zhaoji_daqi');
					var hp = player.maxHp - player.hp;
					var card = player.maxHp - player.countCards('h');
					if (hp > 0) player.recover(hp);
					if (card > 0) player.draw(card);
					player.storage.zhaoji_huoluan = true;
				},
				group: ['zhaoji_daqi_damage', 'zhaoji_daqi_card'],
				subSkill: {
					damage: {
						trigger: {
							player: 'damageAfter',
							source: 'damageSource',
						},
						audio: 'zhaoji_daqi',
						forced: true,
						content() {
							player.storage.zhaoji_daqi += trigger.num;
							player.markSkill('zhaoji_daqi');
							game.log(player, '获得了', trigger.num, '个<期>标记');
							player.syncStorage('zhaoji_daqi');
						},
					},
					card: {
						audio: 'zhaoji_daqi',
						trigger: {
							player: ['useCard', 'respond'],
						},
						forced: true,
						content() {
							player.storage.zhaoji_daqi++;
							player.markSkill('zhaoji_daqi');
							game.log(player, '获得了1个<期>标记');
							player.syncStorage('zhaoji_daqi');
						},
					},
				},
			},
			zhaoji_xianji: {
				audio: 'ext:太虚幻境/audio/skill:true',
				init(player) {
					player.storage.nzry_dinghuo = false;
				},
				intro: {
					content: 'limited',
				},
				mark: true,
				skillAnimation: true,
				animationColor: 'thunder',
				enable: 'phaseUse',
				filter(event, player) {
					return !player.storage.zhaoji_xianji && player.storage.zhaoji_daqi > 0;
				},
				check(event, player) {
					var hp = player.maxHp - player.hp;
					var card = 3 - player.countCards('he');
					if (hp + card > 0) return true;
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('zhaoji_xianji');
					player.storage.zhaoji_xianji = true;
					('step 1');
					var hs = player.getCards('he');
					if (hs.length) player.discard(hs);
					game.log(player, '失去了', player.storage.zhaoji_daqi, '个<期>标记');
					player.storage.zhaoji_daqi = 0;
					player.syncStorage('zhaoji_daqi');
					player.unmarkSkill('zhaoji_daqi');
					player.loseMaxHp();
					('step 2');
					var hp = player.maxHp - player.hp;
					var card = player.maxHp - player.countCards('h');
					if (hp > 0) player.recover(hp);
					if (card > 0) player.draw(card);
					player.storage.zhaoji_huoluan = true;
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							var hp = player.maxHp - player.hp;
							var card = player.maxHp - player.countCards('h');
							return 0 + hp + card;
						},
					},
				},
			},
			zhaoji_huoluan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['zhaoji_daqiAfter', 'zhaoji_xianjiAfter'],
				},
				forced: true,
				content() {
					'step 0';
					event.targets = game.filterPlayer();
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					player.line(event.targets);
					event.targets2 = event.targets.slice(0);
					('step 1');
					if (event.targets2.length) {
						event.targets2.shift().damage('nocard');
						event.redo();
					}
				},
			},
			txshangnu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['phaseZhunbeiBegin', 'damageEnd'],
				},
				forced: true,
				filter(event, player) {
					return !player.getEquip('qinnu');
				},
				content() {
					if (trigger.name == 'phaseZhunbei') {
						player.useCard(game.createCard('qinnu', 'club', 2), player);
					} else {
						player.draw(1);
					}
				},
			},
			zhaogao_zhilu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: 'zhaogao_zhilu2',
				enable: ['chooseToUse', 'chooseToRespond'],
				viewAs: {
					name: 'sha',
				},
				filterCard: {
					color: 'black',
				},
				check(card) {
					return 1 / (get.value(card) || 0.5);
				},
				viewAsFilter(player) {
					return (
						player.countCards('h', {
							color: 'black',
						}) > 0
					);
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						return (
							player.countCards('h', {
								color: 'black',
							}) > 0
						);
					},
				},
			},
			zhaogao_zhilu2: {
				audio: 'zhaogao_zhilu',
				enable: ['chooseToUse', 'chooseToRespond'],
				viewAs: {
					name: 'shan',
				},
				filterCard: {
					color: 'red',
				},
				check(card) {
					return 1 / (get.value(card) || 0.5);
				},
				viewAsFilter(player) {
					return (
						player.countCards('h', {
							color: 'red',
						}) > 0
					);
				},
				ai: {
					respondShan: true,
					skillTagFilter(player) {
						return (
							player.countCards('h', {
								color: 'red',
							}) > 0
						);
					},
				},
			},
			zhaogao_gaizhao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					target: 'useCardToTarget',
				},
				forced: true,
				filter(event, player) {
					if (get.info(event.card).multitarget) return false;
					var type = get.type(event.card);
					var name = get.name(event.card);
					if (name != 'sha' && type != 'trick') return false;
					return game.hasPlayer(function (current) {
						return current != player && current.group == 'daqin' && !event.targets.includes(current);
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt(event.name), `将${get.translation(trigger.card)}转移给其他秦势力角色`, function (card, player, target) {
							var trigger = _status.event.getTrigger();
							return target.group == 'daqin' && !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
						})
						.set('rawEffect', get.effect(player, trigger.card, trigger.player, player)).ai = function (target) {
							var trigger = _status.event.getTrigger();
							var rawEffect = _status.event.rawEffect;
							var effectTarget = 0.1 + get.effect(target, trigger.card, trigger.player, _status.event.player);
							return effectTarget - rawEffect;
						};
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						trigger.targets[trigger.targets.indexOf(player)] = target;
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.attitude(player, target) > 0 || _status.gaizhaoEffect) return;
							if (get.name(card) != 'sha' && get.type(card) != 'trick') return;
							if (get.info(card).multitarget || get.info(card).selectTarget == -1) return;
							var players = game.filterPlayer(function (current) {
								return current != target && current.group == 'daqin';
							});
							if (!players.length) return;
							_status.gaizhaoEffect = true;
							for (var i of players) {
								if (get.effect(i, card, player, player) <= 0) {
									delete _status.gaizhaoEffect;
									return 'zeroplayertarget';
								}
							}
							delete _status.gaizhaoEffect;
						},
					},
				},
			},
			zhaogao_haizhong: {
				global: 'zhaogao_haizhong_debuff',
				audio: 'ext:太虚幻境/audio/skill:true',
				intro: {
					content: 'mark',
				},
				trigger: {
					global: 'recoverAfter',
				},
				forced: true,
				filter(event, player) {
					return event.player.group != 'daqin' && event.player.isAlive();
				},
				logTarget: 'player',
				content() {
					'step 0';
					if (!trigger.player.storage[event.name]) trigger.player.storage[event.name] = 0;
					trigger.player.storage[event.name]++;
					event.num = Math.max(1, trigger.player.storage[event.name]);
					trigger.player.markSkill(event.name);
					if (_status.dying.length) return event.finish();
					trigger.player.chooseToDiscard(`害忠:弃置一张红色牌,或受到${event.num}点伤害`, {
						color: 'red',
					}).ai = function (card) {
						var trigger = _status.event.getTrigger();
						var value = get.value(card);
						if (trigger.player.hp <= 0 && value > 0) return 100 - get.value(card);
						return 9 - value;
					};
					('step 1');
					if (!result.bool) {
						if (trigger.player.hp <= num) trigger.player.addTempSkill('zhaogao_haizhong_dying', 'damageAfter');
						trigger.player.damage(num);
					}
				},
				subSkill: {
					dying: {
						charlotte: true,
						ai: {
							effect: {
								target(card, player, target) {
									if (get.name(card) == 'tao' && player != target) return 'zeroplayertarget';
								},
							},
						},
					},
					debuff: {
						ai: {
							effect: {
								player(card, player, target) {
									if (player.group == 'daqin' || ['tao', 'jiu'].includes(get.name(card)) == false || target != player) return;
									if (get.name(card) == 'jiu' && !player.isDying()) return;
									if (
										!player.hasCard(function (otherCard) {
											return otherCard != card && get.color(otherCard) == 'red';
										})
									)
										return 'zeroplayertarget';
								},
								target(card, player, target) {
									if (target.group == 'daqin' || get.name(card) != 'tao' || player == target) return;
									if (!target.countCards('h')) return 'zeroplayertarget';
								},
							},
						},
					},
				},
			},
			zhaogao_aili: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					var list = [];
					for (var i = 0; i < 2; i++) {
						var cardx = get.cardPile2(function (card) {
							return get.type(card) == 'trick' && !list.includes(card);
						});
						if (cardx) list.push(cardx);
					}
					if (list.length) player.gain(list, 'draw');
				},
			},
			yingzheng_yitong: {
				audio: 'ext:太虚幻境/audio/skill:true',
				mod: {
					targetInRange(card) {
						if (card.name == 'sha' || card.name == 'shunshou') return true;
					},
				},
				trigger: {
					player: ['useCard2', 'useCardToPlayer'],
				},
				forced: true,
				filter(event, player) {
					if (!['shunshou', 'guohe', 'sha', 'huogong'].includes(event.card.name)) return false;
					return game.hasPlayer(function (current) {
						return current.group != 'daqin' && !event.targets.includes(current);
					});
				},
				content() {
					trigger.targets.addArray(
						game.filterPlayer(function (current) {
							return current.group != 'daqin' && !trigger.targets.includes(current);
						})
					);
					player.line(trigger.targets);
				},
			},
			yingzheng_shihuang: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'phaseAfter',
				},
				forced: true,
				filter(event, player) {
					var num = (game.roundNumber / 100) * 6;
					if (num > 1) num = 1;
					return event.player != player && Math.random() <= num;
				},
				content() {
					player.insertPhase();
				},
			},
			yingzheng_fenshu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'useCard',
				},
				forced: true,
				filter(event, player) {
					if (event.player == _status.currentPhase && event.player.group != 'daqin' && get.type(event.card) == 'trick') {
						return (
							event.player
								.getHistory('useCard', function (card) {
									return get.type(card.card) == 'trick';
								})
								.indexOf(event) == 0
						);
					}
					return false;
				},
				content() {
					trigger.targets.length = 0;
					trigger.all_excluded = true;
				},
			},
			txkqzulong: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['phaseZhunbeiBegin', 'damageEnd'],
				},
				group: 'txkqzulong1',
				forced: true,
				filter(event, player) {
					return !player.getEquip('zhenlongchangjian');
				},
				content() {
					if (trigger.name == 'phaseZhunbei') {
						player.useCard(game.createCard('zhenlongchangjian', 'spade', 7), player);
					} else {
						player.draw(1);
					}
				},
			},
			txkqzulong1: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'damageEnd'],
				},
				forced: true,
				filter(event, player) {
					return !player.getEquip('chuanguoyuxi');
				},
				content() {
					if (trigger.name == 'phaseZhunbei') {
						player.useCard(game.createCard('chuanguoyuxi', 'diamond', 13), player);
					} else {
						player.draw(0);
					}
				},
			},
			txxinchao: {
				audio: 'ext:太虚幻境/audio/skill:4',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				content() {
					'step 0';
					event.players = get.players(player);
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						if (current.isEnemyOf(player)) {
							player.line(current, 'poison');
							current.damage(2, 'poison');
						}
						event.redo();
					}
				},
				ai: {
					threaten: 2,
				},
			},
			txxinli: {
				audio: 2,
				trigger: { global: 'dieAfter' },
				forced: true,
				content() {
					player.gainMaxHp(2);
					player.recover(2);
					player.draw();
				},
				ai: {
					threaten: 1.5,
				},
			},
			spjianqu1: {
				trigger: {
					player: ['dying'],
				},
				filter(event, player) {
					return event.player.hp <= 0;
				},
				logTarget: 'player',
				forced: true,
				usable: 3,
				async content(event, trigger, player) {
					trigger.player.hp = 1;
				},//QQQ
			},
			spjianqu: {
				audio: 'ext:太虚幻境/audio/skill:3',
				trigger: { player: 'damageBegin3' },
				forced: true,
				preHidden: true,
				group: 'spjianqu1',
				filter(event, player) {
					return event.num > 0 && event.source;
				},
				content() {
					trigger.num--;
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return;
							if (!player.isUnseen(2)) return;
							var num = get.tag(card, 'damage');
							if (num > 0) {
								if (num > 1) return 0.5;
								return 0;
							}
						},
					},
				},
			},
			/*复活侯备技*/
			txhouyuana: {
				audio: 2,
				enable: 'chooseToUse',
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuana = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuana) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuana');
					player.storage.txhouyuana = true;
					player.discard(player.getCards('hj'));
					('step 1');
					player.uninit();
					player.init('txhj_yufan');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuana) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuana) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			txhouyuanb: {
				audio: 2,
				enable: 'chooseToUse',
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuanb = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuanb) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuanb');
					player.storage.txhouyuanb = true;
					player.discard(player.getCards('hj'));
					('step 1');
					player.uninit();
					player.init('txhj_xuezong');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuanb) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuanb) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			txcbwuyou: {
				audio: 1,
				trigger: {
					player: 'phaseDrawBefore',
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '跳过了摸牌阶段');
				},
			},
			txbaoji: {
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					//醉酒改动一下,就OK.默认概率80%触发.如果选项里开启了幸运星模式则百分百触发.
					return get.isLuckyStar(player) || (event.card && event.getRand() < 0.8);
				},
				forced: true,
				content() {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
			txhj_zhennu: {
				audio: 'ext:太虚幻境/audio/skill:true',//QQQ
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				content() {
					'step 0';
					event.players = get.players(player);
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						if (current.isEnemyOf(player)) {
							player.line(current, 'poison');
							current.damage(1, 'poison');
						}
						event.redo();
					}
				},
				ai: {
					threaten: 2,
				},
			},
			/*千里走单骑*/
			//以下技能代码全部搬运自【活动BOSS】扩展,感谢其作者<烟雨墨染>大佬的技能创作书写!
			qianli_tingqiang: {
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					return event.player.countCards('h') > 0 && (event.player.countCards('h', { color: 'red' }) == 0 || event.player.countCards('h', { color: 'black' }) == 0);
				},
				forced: true,
				content() {
					trigger.num++;
				},
			},
			danji_shili: {
				trigger: {
					player: ['phaseUseBegin', 'phaseDiscardBegin'],
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				content() {
					'step 0';
					player.chooseToDiscard(get.prompt('danji_shili'), '弃置一张手牌令所有敌方角色弃置所有同花色的手牌.', 'h').set('ai', function (card) {
						return 9 - get.value(card);
					}).logSkill = 'danji_shili';
					('step 1');
					if (result.bool) {
						var suit = get.suit(result.cards[0]);
						game.countPlayer(function (current) {
							if (current != player && player.getEnemies().includes(current)) {
								var hs = current.getCards('h', { suit: suit });
								if (hs.length) {
									current.discard(hs);
								}
							}
						});
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			qianli_yangbai: {
				init(player) {
					if (!player.storage.qianli_yangbai) player.storage.qianli_yangbai = 0;
				},
				trigger: {
					global: 'phaseEnd',
				},
				group: ['qianli_yangbai_damage'],
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.player.isAlive() && event.player != player && !player.inRangeOf(event.player) && player.getEnemies().includes(event.player);
				},
				forced: true,
				content() {
					trigger.player.damage(2);
					var e1 = trigger.player.getEquip(1);
					if (trigger.player.getEquip(1)) trigger.player.discard(e1, 'notBySelf');
				},
				subSkill: {
					xiaoguo: {
						marktext: '佯败',
						mod: {
							globalFrom(from, to, distance) {
								if (from.storage.qianli_yangbai_xiaoguo2.includes(to)) return distance + from.countMark('qianli_yangbai_xiaoguo');
							},
						},
						intro: {
							name: '佯败',
							content(storage, player, skill) {
								return `与${get.translation(player.storage.qianli_yangbai_xiaoguo2)}计算距离时+${player.storage.qianli_yangbai_xiaoguo}`;
							},
						},
						forced: true,
						popup: false,
						onremove(player) {
							player.removeMark('qianli_yangbai_xiaoguo', player.countMark('qianli_yangbai_xiaoguo'));
							player.unmarkSkill('qianli_yangbai_xiaoguo');
							delete player.storage.qianli_yangbai_xiaoguo2;
						},
					},
					damage: {
						trigger: {
							player: 'damageEnd',
						},
						filter(event, player) {
							return event.source && event.source != player && event.card && event.card.name == 'sha' && player.getEnemies().includes(event.source);
						},
						forced: true,
						logTarget: 'source',
						audio: 'qianli_yangbai',
						content() {
							if (!trigger.source.hasSkill('qianli_yangbai_xiaoguo')) trigger.source.addTempSkill('qianli_yangbai_xiaoguo');
							trigger.source.addMark('qianli_yangbai_xiaoguo');
							if (!trigger.source.storage.qianli_yangbai_xiaoguo2) trigger.source.storage.qianli_yangbai_xiaoguo2 = [];
							if (!trigger.source.storage.qianli_yangbai_xiaoguo2.includes(player)) trigger.source.storage.qianli_yangbai_xiaoguo2.push(player);
							trigger.source.markSkill('qianli_yangbai_xiaoguo');
							trigger.source.updateMarks('qianli_yangbai_xiaoguo');
						},
					},
				},
				ai: { expose: 0.2 },
			},
			qianli_xili: {
				trigger: {
					global: 'damageBegin1',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.source && event.source != player && event.source == _status.currentPhase && event.source.hasSkill('qianli_xili') && !event.player.hasSkill('qianli_xili') && player.countCards('he') > 0 && !player.hasSkill('qianli_xili2');
				},
				content() {
					'step 0';
					player.chooseToDiscard(`是否弃置一张牌,令${get.translation(trigger.source)}对${get.translation(trigger.player)}的伤害+1,且你与其各摸两张牌？`, 'he').set('logSkill', ['qianli_xili', trigger.player]).ai = function (card) {
						return 9 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						game.asyncDraw([trigger.source, player], 2);
						trigger.num++;
						player.addTempSkill('qianli_xili2');
					} else event.finish();
					('step 2');
				},
			},
			qianli_xili2: {
				charlotte: true,
			},
			danji_xianfeng: {
				global: 'danji_xianfeng_distance',
				ai: {
					threaten: 2.7,
				},
				subSkill: {
					distance: {
						mod: {
							globalTo(from, to, distance) {
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('danji_xianfeng') && current != to && current.getFriends().includes(to) && current.getEnemies().includes(from);
									})
								)
									return distance + 1;
							},
						},
					},
				},
			},
			danji_anjian: {
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.card && event.card.name == 'sha' && !event.target.inRange(player);
				},
				logTarget: 'target',
				content() {
					trigger.parent.reanjian_buffed = true;
					var map = trigger.customArgs;
					var id = trigger.target.playerid;
					if (!map[id]) map[id] = {};
					if (!map[id].extraDamage) map[id].extraDamage = 0;
					map[id].extraDamage++;
					trigger.target.addTempSkill('danji_anjian2');
					trigger.target.addTempSkill('danji_anjian4');
					trigger.target.storage.danji_anjian2.add(trigger.card);
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.name == 'sha' && arg.target && !arg.target.inRange(player)) return true;
						return false;
					},
				},
			},
			danji_anjian2: {
				firstDo: true,
				ai: {
					unequip2: true,
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				trigger: {
					player: ['damage', 'damageCancelled', 'damageZero'],
					target: ['shaMiss', 'useCardToExcluded'],
				},
				charlotte: true,
				filter(event, player) {
					return player.storage.danji_anjian2 && event.card && player.storage.danji_anjian2.includes(event.card);
				},
				forced: true,
				popup: false,
				_priority: 12,
				content() {
					player.storage.danji_anjian2.remove(trigger.card);
					if (!player.storage.danji_anjian2.length) player.removeSkill('danji_anjian2');
				},
			},
			danji_anjian3: {
				mod: {
					cardSavable(card) {
						if (card.name == 'tao') return false;
					},
				},
			},
			danji_anjian4: {
				trigger: {
					player: 'dyingBegin',
				},
				forced: true,
				firstDo: true,
				filter(event, player) {
					return (event.getParent(2).reanjian_buffed = true);
				},
				content() {
					player.addTempSkill('danji_anjian3', { global: ['dyingEnd', 'phaseEnd'] });
				},
				popup: false,
			},
			qianli_wangong: {
				enable: 'chooseToUse',
				mod: {
					cardUsable(card, player, num) {
						if (card.storage && card.storage.qianli_wangong) return Infinity;
					},
					targetInRange(card) {
						if (card.storage && card.storage.qianli_wangong) return true;
					},
				},
				viewAsFilter(player) {
					return player.hasCard(function (card) {
						return get.type(card) == 'equip';
					}, 'ehs');
				},
				position: 'hes',
				filterCard: { type: 'equip' },
				viewAs: {
					name: 'sha',
					storage: { qianli_wangong: true },
				},
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						return player.hasCard(function (card) {
							return get.type(card) == 'equip';
						}, 'ehs');
					},
				},
				group: 'qianli_wangong_base',
				subSkill: {
					base: {
						trigger: {
							player: 'useCard1',
						},
						forced: true,
						popup: false,
						firstDo: true,
						filter(event, player) {
							return event.skill == 'qianli_wangong' && event.targets.length;
						},
						content() {
							var num = get.distance(player, trigger.targets[0]);
							trigger.baseDamage += Math.min(num, 3) - 1;
							game.log(trigger.card, '造成的伤害基础值改为', Math.min(get.distance(player, trigger.targets[0]), 3));
						},
					},
				},
			},
			danji_cangbi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: ['danji_cangbi_skip', 'danji_cangbi_sha', 'danji_cangbi_trick'],
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				usable: 1,
				content() {
					player.draw();
				},
				subSkill: {
					skip: {
						trigger: {
							player: 'phaseBegin',
						},
						forced: true,
						audio: 'danji_cangbi',
						filter(event, player) {
							return player.hp == player.maxHp;
						},
						content() {
							player.addTempSkill('danji_cangbi_xiaoguo');
						},
					},
					sha: {
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						usable: 1,
						audio: 'danji_cangbi',
						filter(event, player) {
							return event.player != player && event.card && event.card.name == 'sha' && player.hp == player.maxHp && event.player.isPhaseUsing();
						},
						content() {
							trigger.parent.excluded.add(player);
							game.log(trigger.card, '对', player, '无效');
						},
					},
					trick: {
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						usable: 1,
						audio: 'danji_cangbi',
						filter(event, player) {
							return event.player != player && event.card && get.type(event.card) == 'trick' && player.hp < player.maxHp && event.player.isPhaseUsing();
						},
						content() {
							trigger.parent.excluded.add(player);
							game.log(trigger.card, '对', player, '无效');
						},
					},
					xiaoguo: {
						trigger: {
							player: ['phaseDiscardBefore', 'phaseUseBefore'],
						},
						forced: true,
						content() {
							trigger.cancel();
						},
						popup: false,
					},
				},
			},
			danji_fencha: {
				trigger: {
					global: 'phaseEnd',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				content() {
					'step 0';
					event.chufa = [0, 1, 2, 3].randomGet();
					('step 1');
					if (event.chufa > 2) {
						trigger.player.gainMaxHp();
						trigger.player.update();
					} else {
						event.finish();
					}
				},
				popup: false,
			},
			danji_choudao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: ['danji_choudao_damage', 'danji_choudao_use'],
				forced: true,
				subSkill: {
					use: {
						mod: {
							targetInRange(card, player, target) {
								return true;
							},
						},
					},
					damage: {
						audio: 'danji_choudao',
						trigger: {
							player: 'useCardToPlayered',
						},
						forced: true,
						filter(event, player) {
							return (
								event.parent.triggeredTargets3.length < 2 &&
								game.hasPlayer(function (current) {
									return player.getEnemies().includes(current) && event.targets.includes(current);
								})
							);
						},
						content() {
							var list = player
								.getEnemies(function (target) {
									return trigger.targets.includes(target);
								})
								.randomGet();
							if (list) {
								if (list.countCards('he') > 0) {
									event.card = list.getCards('he').randomGets(2);
									list.discard(event.card);
								}
								list.damage();
							}
						},
						ai: {
							directHit_ai: true,
							threaten: 2,
						},
					},
				},
			},
			danji_jiayan: {
				trigger: {
					player: 'damageBegin4',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player) {
					return event.source && player.countCards('he') > 0;
				},
				content() {
					event.card = player.getCards('he').randomGet();
					player.discard(event.card);
					player.draw();
					trigger.cancel();
					player.loseHp();
					trigger.source.draw();
				},
			},
			qianli_chuixi: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				filterTarget(card, player, target) {
					return player != target && player.getEnemies().includes(target);
				},
				content() {
					'step 0';
					event.num = 0;
					('step 1');
					player
						.chooseToDiscard(true, get.prompt('qianli_chuixi'), '弃置一张牌并对其造成1点伤害.', 'he', function (card) {
							return get.number(card) >= 2 * event.num;
						})
						.set('ai', function (card) {
							return 14 - get.number(card);
						});
					('step 2');
					if (result.bool) {
						event.num = get.number(result.cards[0]);
						target.damage();
					}
					('step 3');
					var card = player
						.getCards('he', function (card) {
							return get.number(card) >= 2 * event.num;
						})
						.randomGet();
					if (card && target.isIn()) {
						event.goto(1);
					} else event.finish();
				},
				ai: {
					order: 10,
					result: {
						target: -1,
					},
				},
			},
			qianli_zonghuo: {
				init(player) {
					player.storage.qianli_zonghuo = 0;
				},
				mark: true,
				marktext: '纵火',
				intro: {
					name: '纵火',
					content(storage, player, skill) {
						var num = Math.min(player.storage.qianli_zonghuo + 1, 2);
						if (num == undefined) num = 1;
						return `本回合你下次造成的火焰伤害增加${num}点`;
					},
				},
				group: 'qianli_zonghuo_clear',
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.nature == 'fire';
				},
				content() {
					'step 0';
					if (player.storage.qianli_zonghuo < 2) player.storage.qianli_zonghuo++;
					player.update();
					('step 1');
					var numMark = player.storage.qianli_zonghuo;
					trigger.num += numMark;
				},
				subSkill: {
					clear: {
						trigger: { global: ['phaseBefore', 'phaseAfter', 'phaseCancelled'] },
						forced: true,
						charlotte: true,
						forced: true,
						silent: true,
						filter(event, player) {
							return player.storage.qianli_zonghuo > 0;
						},
						content() {
							player.storage.qianli_zonghuo = 0;
							player.update();
						},
						popup: false,
					},
				},
			},
			danji_huoji: {
				enable: 'phaseUse',
				usable: 3,
				audio: 'ext:太虚幻境/audio/skill:true',
				filterCard(card) {
					return get.color(card) == 'red';
				},
				viewAs: {
					name: 'huogong',
					nature: 'fire',
				},
				viewAsFilter(player) {
					if (!player.countCards('hs', { color: 'red' })) return false;
				},
				position: 'hs',
				prompt: '将一张红色手牌当火攻使用',
				check(card) {
					var player = _status.currentPhase;
					if (player.countCards('h') > player.hp) {
						return 6 - get.value(card);
					}
					return 3 - get.value(card);
				},
				ai: {
					fireAttack: true,
					basic: {
						order: 4,
						value: [3, 1],
						useful: 1,
					},
					wuxie(target, card, player, current, state) {
						if (get.attitude(current, player) >= 0 && state > 0) return false;
					},
					result: {
						player(player) {
							var nh = player.countCards('h');
							if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
								if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
									return -10;
								}
								if (_status.event.skill) {
									var viewAs = get.info(_status.event.skill).viewAs;
									if (viewAs == 'huogong') return -10;
									if (viewAs && viewAs.name == 'huogong') return -10;
								}
							}
							return 0;
						},
						target(player, target) {
							if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
							if (player.countCards('h') <= 1) return 0;
							if (target == player) {
								if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
									return -1.5;
								}
								if (_status.event.skill) {
									var viewAs = get.info(_status.event.skill).viewAs;
									if (viewAs == 'huogong') return -1.5;
									if (viewAs && viewAs.name == 'huogong') return -1.5;
								}
								return 0;
							}
							return -1.5;
						},
					},
					tag: {
						damage: 1,
						fireDamage: 1,
						natureDamage: 1,
						norepeat: 1,
					},
				},
			},
			danji_jiayi: {
				trigger: {
					player: 'phaseBegin',
				},
				group: ['danji_jiayi_damage'],
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current) || current == player;
					});
				},
				content() {
					var cards = player.getCards('h', { color: 'black' });
					player.discard(cards);
					game.countPlayer(function (current) {
						if (current != player && player.getEnemies().includes(current)) {
							var hs = current.getCards('h', { color: 'black' });
							if (hs.length) {
								current.discard(hs);
							}
						}
					});
					var cardssss = [];
					if (Array.isArray(cards))
						for (var i of cards) {
							var cardss = get.discardPile(function (card) {
								return get.color(card) == 'red' && !cardssss.includes(card);
							});
							cardssss.push(cardss);
						}
					if (cardssss.length) player.gain(cardssss, 'gain2');
				},
				subSkill: {
					damage: {
						trigger: {
							source: 'damageSource',
						},
						forced: true,
						audio: 'danji_jiayi',
						filter(event, player) {
							return event.card && get.color(event.card, player) == 'red';
						},
						content() {
							player.draw(2);
						},
					},
				},
				ai: {
					expose: 0.2,
				},
			},
			danji_jiashu: {
				marktext: '家书',
				mark: true,
				intro: {
					content(storage, player, skill) {
						var num = player.countMark('danji_jiashu');
						if (num == undefined) num = 0;
						return `已拥有${num}枚家书标记`;
					},
				},
				derivation: 'mbmowang',
				trigger: {
					player: 'gainEnd',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return !(event.parent.name == 'draw' && event.getParent(2).name == 'phaseDraw');
				},
				content() {
					'step 0';
					player.addMark('danji_jiashu', trigger.cards.length);
					('step 1');
					var numMark = player.countMark('danji_jiashu');
					if (player.countMark('danji_jiashu') >= 7) {
						player.removeMark('danji_jiashu', numMark);
						player.removeSkill('danji_jiashu');
						player.draw(2);
						player.addSkill('mbmowang');
						if (get.mode() == 'taixuhuanjing') {
							player.link();
						}
					}
				},
			},
			danji_jingyi: {
				global: ['danji_jingyi_xiaoguo', 'danji_jingyi_buff', 'danji_jingyi_damage'],
				forced: true,
				subSkill: {
					xiaoguo: {
						trigger: {
							source: 'damageBegin1',
						},
						forced: true,
						audio: 'ext:太虚幻境/audio/skill:true',
						filter(event, player) {
							return (
								event.card &&
								get.color(event.card) == 'red' &&
								game.hasPlayer(function (current) {
									return current.hasSkill('danji_jingyi') && (current == player || current.getFriends().includes(player));
								})
							);
						},
						content() {
							trigger.num++;
						},
						popup: false,
					},
					damage: {
						trigger: {
							player: 'damageBegin4',
						},
						forced: true,
						audio: 'danji_jingyi',
						filter(event, player) {
							return (
								event.card &&
								get.color(event.card) == 'red' &&
								game.hasPlayer(function (current) {
									return current.hasSkill('danji_jingyi') && (current == player || current.getFriends().includes(player));
								})
							);
						},
						content() {
							trigger.num--;
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (player.hasSkillTag('jueqing', false, target) || player.hasSkillTag('damageBonus')) return;
									if ((player.hasSkill('danji_zonghuo') || player.hasSkill('qianli_zonghuo')) && get.tag(card, 'fireDamage')) return;
									if (
										get.tag(card, 'damage') &&
										get.tag(card, 'damage') <= 1 &&
										player.getEnemies().includes(target) &&
										get.color(card) == 'red' &&
										game.hasPlayer(function (current) {
											return current.hasSkill('danji_jingyi') && (current == target || current.getFriends().includes(target));
										})
									)
										return 0;
								},
							},
						},
						popup: false,
					},
					buff: {
						mod: {
							targetInRange(card, player) {
								if (
									get.color(card) == 'red' &&
									game.countPlayer(function (current) {
										return current.hasSkill('danji_jingyi') && (current == player || player.getFriends().includes(current));
									})
								)
									return true;
							},
							cardUsable(card, player) {
								if (get.color(card) == 'red')
									return (
										Infinity ==
										game.countPlayer(function (current) {
											return current.hasSkill('danji_jingyi') && (current == player || player.getFriends().includes(current));
										})
									);
							},
						},
					},
				},
				popup: false,
			},
			fenghuo_zhongyong: {
				trigger: {
					player: 'useCardAfter',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					'step 0';
					event.cards = trigger.cards.filterInD();
					game.countPlayer2(function (current) {
						current.getHistory('useCard', function (evt) {
							if (evt.card.name == 'shan' && evt.getParent(3) == trigger) event.cards.addArray(evt.cards.filterInD('od'));
						});
					});
					if (!event.cards.length) event.finish();
					player
						.chooseTarget(get.prompt2('fenghuo_zhongyong'), '令一名其他角色获得' + get.translation(event.cards), function (card, player, target) {
							return !_status.event.source.includes(target) && target != player;
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target);
						})
						.set('source', trigger.targets);
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.gain(cards, 'gain2');
						var red = false,
							black = false;
						for (var i of cards) {
							var color = get.color(i, false);
							if (color == 'red') red = true;
							if (color == 'black') black = true;
							if (red && black) break;
						}
						if (red)
							target
								.chooseToUse('是否使用一张杀？', { name: 'sha' })
								.set('filterTarget', function (card, player, target) {
									return target != _status.event.sourcex && _status.event.sourcex.inRange(target) && lib.filter.targetEnabled.apply(this, arguments);
								})
								.set('sourcex', player)
								.set('addCount', false);
						if (black) target.draw();
					}
				},
			},
			txzhuyi: {
				audio: 'longyin',
				trigger: { global: 'damageBegin1' },
				usable: 2,
				filter(event, player) {
					return event.source;
				},
				check(event, player) {
					return get.attitude(player, event.source) > 0 && get.attitude(player, event.player) < 0;
				},
				prompt(event) {
					return get.translation(event.source) + `即将对${get.translation(event.player)}造成伤害,` + get.prompt('txzhuyi');
				},
				logTarget: 'source',
				content() {
					trigger.source.judge().callback = lib.skill.txzhuyi.callback;
				},
				callback() {
					var evt = event.getParent(2);
					if (event.judgeResult.color == 'red') {
						//game.cardsDiscard(card);
						evt._trigger.num++;
					} else {
						evt._trigger.source.recover();
					}
				},
			},
			//太虚曹丕颂威
			jcpsongwei: {
				group: 'jcpsongwei2',
				audio: 'songwei2',
				//zhuSkill:true,
			},
			jcpsongwei2: {
				audio: 'songwei2',
				forceaudio: true,
				trigger: { global: 'judgeEnd' },
				filter(event, player) {
					if (event.player == player || event.player.group != 'wei') return false;
					if (event.result.color != 'black') return false;
					return player.hasSkill('jcpsongwei', event.player);
				},
				forced: true,
				content() {
					'step 0';
					trigger.player.chooseBool(`是否发动【颂威】,令${get.translation(player)}摸一张牌？`).set('choice', get.attitude(trigger.player, player) > 0);
					('step 1');
					if (result.bool) {
						trigger.player.line(player, 'green');
						player.draw();
					}
				},
			},
			//秦琪
			txfengling: {
				marktext: '令',
				mark: true,
				intro: {
					content(storage, player, skill) {
						var num = player.countMark('txfengling');
						if (num == undefined) num = 0;
						return `已拥有${num}个令标记`;
					},
				},
				trigger: {
					global: 'roundStart',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return player.countMark('txfengling') < 3;
				},
				content() {
					var numMark = trigger.player.countMark('txfengling');
					player.addMark('txfengling', 1);
				},
				group: ['txfengling_Draw', 'txfengling_damage', 'txfengling_dying', 'txfengling_damageEnd'],
				subSkill: {
					Draw: {
						trigger: {
							player: 'phaseDrawBegin',
						},
						forced: true,
						filter(event, player) {
							return player.countMark('txfengling') > 0;
						},
						content() {
							trigger.num += 3;
						},
						mod: {
							ignoredHandcard(card, player) {
								if (player.countMark('txfengling') > 0) return true;
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard' && player.countMark('txfengling') > 0) return false;
							},
						},
						popup: false,
					},
					damage: {
						trigger: {
							source: 'damageBegin1',
						},
						forced: true,
						filter(event, player) {
							return player.countMark('txfengling') > 2;
						},
						content() {
							trigger.num += 0;
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha' && player.countMark('txfengling') > 2) return Infinity;
							},
							targetInRange(card, player, target) {
								if (player.countMark('txfengling') > 2) return true;
							},
						},
						popup: false,
					},
					dying: {
						trigger: {
							global: 'dying',
						},
						forced: true,
						filter(event, player) {
							return player.countMark('txfengling') > 0;
						},
						content() {
							player.removeMark('txfengling', 1);
						},
						popup: false,
					},
					damageEnd: {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						firstDo: true,
						filter(event, player) {
							return player.countMark('txfengling') > 1;
						},
						content() {
							player.draw();
						},
						popup: false,
					},
				},
			},
			qianli_hengjiang: {
				group: 'qianli_hengjiang_draw',
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current) && current != player && !current.isLinked();
					});
				},
				content() {
					var list = game
						.filterPlayer(function (current) {
							return player.getEnemies().includes(current) && current != player && !current.isLinked();
						})
						.randomGet();
					player.line(list);
					list.link();
				},
				subSkill: {
					draw: {
						trigger: {
							global: 'linkAfter',
						},
						forced: true,
						audio: 'qianli_hengjiang',
						filter(event, player) {
							return event.player.isLinked();
						},
						content() {
							player.draw(1);
						},
					},
				},
			},
			txzhangshi: {
				trigger: {
					player: 'gainAfter',
				},
				usable: 3,
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return player.getEnemies().includes(current) && current != player;
					});
				},
				filter(event, player) {
					return !(event.parent.name == 'draw' && event.getParent(2).name == 'phaseDraw');
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'red' ? 1 : 0;
					});
					('step 1');
					if (result.color == 'red') {
						game.countPlayer(function (current2) {
							if (current2 != player && player.getEnemies().includes(current2)) {
								current2.damage();
							}
						});
					}
					if (result.color == 'black') {
						game.countPlayer(function (current) {
							if (current != player && player.getEnemies().includes(current)) {
								var hs = current.getCards('he');
								if (hs.length) {
									current.discard(hs.randomGet());
								}
							}
						});
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			qianli_xunwen: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				logTarget: 'source',
				filter(event, player) {
					return event.source && event.card;
				},
				content() {
					var suit1 = get.suit(trigger.card);
					if (suit1) {
						var cards = trigger.source.getCards('he', { suit: suit1 });
						if (cards.length) {
							var card = trigger.source.getCards('he', { suit: suit1 }).randomGet();
							trigger.source.discard(card);
						} else player.draw(2);
					} else player.draw(2);
				},
			},
			fenghuo_fuzhe: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				logTarget: 'source',
				filter(event, player) {
					return (
						event.source &&
						event.card &&
						event.source.countCards('h', function (card) {
							return get.name(card) == get.name(event.card);
						}) > 0
					);
				},
				content() {
					var cards = trigger.source.getCards('h', function (card) {
						return get.name(card) == get.name(trigger.card);
					});
					if (cards.length) {
						trigger.source.discard(cards);
					}
				},
			},
			fenghuo_chongfeng: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					player.chooseUseTarget('###是否发动【冲锋】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance').logSkill = 'fenghuo_chongfeng';
				},
				ai: {
					threaten(player, target) {
						return 1.6;
					},
				},
			},
			ysweidi: {
				audio: 'drlt_weidi',
				forceaudio: true,
				//zhuSkill:true,
				trigger: {
					player: 'phaseDiscardBegin',
				},
				forced: true,
				filter(event, player) {
					if (!player.hasSkill('ysweidi')) return false;
					return (
						player.needsToDiscard() > 0 &&
						game.countPlayer(function (current) {
							return current != player && current.group == 'qun';
						}) > 0
					);
				},
				content() {
					'step 0';
					var num = Math.min(
						player.needsToDiscard(),
						game.countPlayer(function (target) {
							return target != player && target.group == 'qun';
						})
					);
					if (num > 0) {
						player.chooseCardTarget({
							prompt: get.prompt('ysweidi'),
							prompt2: '你可以将' + (num > 1 ? '至多' : '') + get.cnNumber(num) + '张手牌交给等量的其他群势力角色.先按顺序选中所有要给出的手牌,然后再按顺序选择等量的目标角色',
							selectCard: [1, num],
							selectTarget() {
								return ui.selected.cards.length;
							},
							filterTarget(card, player, target) {
								return target != player && target.group == 'qun';
							},
							complexSelect: true,
							filterOk() {
								return ui.selected.cards.length == ui.selected.targets.length;
							},
							ai1(card) {
								var player = _status.event.player;
								var value = get.value(card, player, 'raw');
								if (
									game.hasPlayer(function (target) {
										return target != player && target.group == 'qun' && !ui.selected.targets.includes(target) && get.sgn(value) == get.sgn(get.attitude(player, target));
									})
								)
									return 1 / Math.max(1, get.useful(card));
								return -1;
							},
							ai2(target) {
								var player = _status.event.player;
								var card = ui.selected.cards[ui.selected.targets.length];
								if (card && get.value(card, player, 'raw') < 0) return -get.attitude(player, target);
								return get.attitude(player, target);
							},
						});
					} else event.finish();
					('step 1');
					if (result.bool && result.cards.length) {
						var list = [];
						for (var i = 0; i < result.targets.length; i++) {
							var target = result.targets[i];
							var card = i;
							list.push([target, card]);
						}
						game.loseAsync({
							gain_list: list,
							player: player,
							cards: result.cards,
							giver: player,
							animate: 'giveAuto',
						}).setContent('gaincardMultiple');
					} else event.finish();
				},
			},
			txhj_guiji: {
				trigger: { player: 'phaseJudgeBegin' },
				forced: true,
				content() {
					player.discard(player.getCards('j').randomGet());
				},
				filter(event, player) {
					return player.countCards('j') > 0;
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'delay' && target.countCards('j') == 0) return 0.1;
						},
					},
				},
			},
			//魔改官渡之战
			txpodi: {
				shaRelated: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'useCardToPlayered' },
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
				},
				content() {
					'step 0';
					var next = player.choosePlayerCard(trigger.target, 'he', [1, 2], get.prompt('txpodi', trigger.target));
					next.set('ai', function (button) {
						if (!_status.event.goon) return 0;
						var val = get.value(button.link);
						if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
						return val;
					});
					next.set('goon', get.attitude(player, trigger.target) <= 0);
					next.set('forceAuto', true);
					('step 1');
					if (result.bool) {
						var target = trigger.target;
						target.addSkill('txpodi2');
						target.addToExpansion('giveAuto', result.cards, target).gaintag.add('txpodi2');
					}
				},
				ai: {
					unequip: true,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (get.attitude(player, arg.target) > 0) return false;
						if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
						if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
						return false;
					},
				},
				group: 'txpodi3',
			},
			txpodi3: {
				audio: 'txpodi',
				trigger: { source: 'damageBegin1' },
				forced: true,
				logTarget: 'player',
				filter(event, player) {
					var target = event.player;
					return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
				},
				content() {
					trigger.num++;
				},
			},
			txpodi2: {
				trigger: { global: 'phaseEnd' },
				forced: true,
				popup: false,
				charlotte: true,
				filter(event, player) {
					return player.getExpansions('txpodi2').length;
				},
				content() {
					'step 0';
					var cards = player.getExpansions('txpodi2');
					player.gain(cards, 'draw');
					game.log(player, `收回了${get.cnNumber(cards.length)}张<破敌>牌`);
					('step 1');
					player.removeSkill('txpodi2');
				},
				intro: {
					markcount: 'expansion',
					mark(dialog, storage, player) {
						var cards = player.getExpansions('txpodi2');
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return `共有${get.cnNumber(cards.length)}张牌`;
					},
				},
			},
			//搬运自【活动武将】扩展的欢杀高顺禁酒技能!
			minijinjiu: {
				mod: {
					cardname(card, player) {
						if (card.name == 'jiu') return 'sha';
					},
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						if (!player.countCards('h', 'jiu')) return false;
					},
				},
				group: 'minijinjiu_gain',
				global: 'minijinjiu_usejiu',
				audio: 'jinjiu',
				popup: false,
				silent: true,
				firstDo: true,
				trigger: { player: 'useCard1' },
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.addCount !== false && event.cards && event.cards.length == 1 && event.cards[0].name == 'jiu';
				},
				forced: true,
				content() {
					trigger.addCount = false;
					if (player.stat[player.stat.length - 1].card.sha > 0) {
						player.stat[player.stat.length - 1].card.sha--;
					}
				},
				subSkill: {
					gain: {
						trigger: { global: 'useCardAfter' },
						forced: true,
						audio: 'jinjiu',
						filter(event, player) {
							return event.player != player && event.card.isCard && event.card.name == 'jiu' && event.cards.filterInD().length;
						},
						logTarget: 'player',
						content() {
							player.gain(trigger.cards.filterInD(), 'gain2');
						},
					},
					usejiu: {
						mod: {
							cardEnabled(card, player) {
								if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('minijinjiu')) return false;
							},
							cardSavable(card, player) {
								if (card.name == 'jiu' && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('minijinjiu')) return false;
							},
						},
					},
				},
			},
			txyongzhan: {
				shaRelated: true,
				audio: 'shuangxiong',
				preHidden: true,
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (!(event.card.name == 'juedou')) return false;
					return player == event.target || event.parent.triggeredTargets3.length == 1;
				},
				forced: true,
				content() {
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'juedou') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == 'juedou') return [1, 1];
						},
					},
				},
			},
			txhj_xianxi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'roundStart',
				},
				filter(event, player) {
					return event.player != player;
				},
				forced: true,
				content() {
					player.insertPhase();
				},
			},
			txchoudou: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				content() {
					player.chooseUseTarget('###是否发动【仇斗】？###视为使用一张没有距离限制的【决斗】', { name: 'juedou' }, false, 'nodistance').logSkill = 'txchoudou';
				},
				ai: {
					threaten(player, target) {
						return 1.6;
					},
				},
			},
			txjiuchi: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'jiu') return Infinity;
					},
				},
				audio: 'oljiuchi',
				enable: 'chooseToUse',
				filterCard(card) {
					return get.color(card) == 'black';
				},
				viewAs: { name: 'jiu' },
				position: 'hes',
				viewAsFilter(player) {
					return player.hasCard((card) => get.color(card) == 'black', 'hes');
				},
				prompt: '将一张黑色牌当酒使用',
				check(cardx, player) {
					if (player && player == cardx.player) return true;
					if (_status.event.type == 'dying') return 1;
					var player = _status.event.player;
					var shas = player.getCards('hes', function (card) {
						return card != cardx && get.name(card, player) == 'sha';
					});
					if (!shas.length) return -1;
					if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('hes', 'zhuge'))) {
						return 0;
					}
					shas.sort(function (a, b) {
						return get.order(b) - get.order(a);
					});
					var card = false;
					if (shas.length) {
						for (var i = 0; i < shas.length; i++) {
							if (shas[i] != cardx && lib.filter.filterCard(shas[i], player)) {
								card = shas[i];
								break;
							}
						}
					}
					if (card) {
						if (
							game.hasPlayer(function (current) {
								return (
									get.attitude(player, current) < 0 &&
									!current.hasShan() &&
									current.hp + current.countCards('h', { name: ['tao', 'jiu'] }) > 1 + (player.storage.jiu || 0) &&
									player.canUse(card, current, true, true) &&
									!current.hasSkillTag('filterDamage', null, {
										player: player,
										card: card,
										jiu: true,
									}) &&
									get.effect(current, card, player) > 0
								);
							})
						) {
							return 4 - get.value(cardx);
						}
					}
					return -1;
				},
				ai: {
					threaten: 1.5,
				},
				trigger: { source: 'damageEnd' },
				forced: true,
				filter(event, player) {
					if (event.name == 'chooseToUse') return player.hasCard((card) => get.color(card) == 'black', 'hes');
					return event.card && event.card.name == 'sha' && event.getParent(2).jiu == true && !player.hasSkill('txjiuchi_air');
				},
				content() {
					player.addTempSkill('txjiuchi_air');
				},
				subSkill: {
					air: {},
				},
			},
			olranshang: {
				group: 'olranshang2',
				audio: 'ranshang',
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.nature == 'fire';
				},
				forced: true,
				check() {
					return false;
				},
				content() {
					player.addMark('olranshang', trigger.num);
				},
				intro: {
					name2: '燃',
					content: 'mark',
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (card.name == 'sha') {
								if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 2;
							}
							if (get.tag(card, 'fireDamage') && current < 0) return 2;
						},
					},
				},
			},
			olranshang2: {
				audio: 'ranshang',
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				filter(event, player) {
					return player.countMark('olranshang') > 0;
				},
				content() {
					player.loseHp(player.countMark('olranshang'));
				},
			},
			txsiwu: {
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'food') {
							return false;
						}
					},
				},
				trigger: {
					player: ['phaseUseBegin'],
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				group: 'txsiwu2',
				content() {
					trigger.cancel();
					game.log(player, '跳过了', event.triggername == 'phaseZhunbeiBefore' ? '用牌' : '出牌阶段');
				},
			},
			txsiwu2: {
				popup: false,
				trigger: {
					player: 'phaseDiscardBegin',
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '跳过了弃牌阶段');
				},
			},
			txjianjia: {
				group: ['txjianjia1', 'txjianjia2'],
			},
			txjianjia1: {
				trigger: { target: ['useCardToBefore', 'shaBegin'] },
				forced: true,
				_priority: 6,
				filter(event, player, name) {
					if (player.getEquip(2)) return false;
					if (name == 'shaBegin') return lib.skill.tengjia3.filter(event, player);
					return lib.skill.tengjia1.filter(event, player);
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.getEquip(2)) return;
							if (target.hasSkillTag('unequip2')) return;
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								}) ||
								player.hasSkillTag('unequip_ai', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								})
							)
								return;
							if (card.name == 'nanman' || card.name == 'wanjian') return 'zeroplayertarget';
							if (card.name == 'sha') {
								var equip1 = player.getEquip('zhuque');
								if (equip1 && equip1.name == 'zhuque') return 1.9;
								if (!game.hasNature(card)) return 'zeroplayertarget';
							}
						}, //QQQ
					},
				},
			},
			txjianjia2: {
				trigger: { player: 'damageBegin3' },
				filter(event, player) {
					if (player.getEquip(2)) return false;
					if (event.nature == 'poison') return true;
				},
				forced: true,
				check() {
					return false;
				},
				content() {
					trigger.num++;
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.getEquip(2)) return;
							if (card.name == 'sha') {
								if (game.hasNature(card, 'fire')) return 2;
								if (player.hasSkill('zhuque_skill')) return 1.9;
							}
							if (get.tag(card, 'fireDamage') && current < 0) return 2;
						},
					},
				},
			},
			txliangwu: {
				trigger: {
					target: 'useCardToTarget',
					player: 'addJudgeBefore',
				},
				forced: true,
				preHidden: true,
				_priority: 15,
				check(event, player) {
					return event.name == 'addJudge' || get.effect(event.target, event.card, event.player, player) < 0;
				},
				filter(event, player) {
					return event.card && event.card.name == (event.name == 'addJudge' ? 'wenyi' : 'juedou');
				},
				content() {
					if (trigger.name == 'addJudge') {
						trigger.cancel();
						var owner = get.owner(trigger.card);
						if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
						else game.cardsDiscard(trigger.card);
						game.log(trigger.card, '进入了弃牌堆');
					} else trigger.parent.targets.remove(player);
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (card.name == 'juedou' || card.name == 'wenyi') return 'zeroplayertarget';
						},
					},
				},
			},
			txhj_qingzhong: {
				audio: 'qingzhong',
			},
			txhj_qingzhongx: {
				audio: 'weijing',
				trigger: { player: 'phaseUseBegin' },
				check(event, player) {
					if (
						game.hasPlayer(function (current) {
							return current != player && current.isMinHandcard() && get.attitude(player, current) > 0;
						})
					) {
						return true;
					}
					if (player.countCards('h') <= 2) return true;
					// if(player.countCards('h')<=3&&!player.countCards('h','shan')) return true;
					//if(player.countCards('h',{type:'basic'})<=1) return true;
					return false;
				},
				content() {
					player.draw(2);
					player.addTempSkill('txhj_qingzhongx_give');
				},
				subSkill: {
					give: {
						trigger: { player: 'phaseUseEnd' },
						filter(event, player) {
							return !player.isMinHandcard(true);
						},
						audio: 'weijing',
						forced: true,
						content() {
							'step 0';
							var list = game.filterPlayer(function (current) {
								return current.isMinHandcard();
							});
							if (list.length == 1) {
								if (list[0] != player) {
									player.line(list[0], 'green');
									player.swapHandcards(list[0]);
								}
								event.finish();
							} else {
								player
									.chooseTarget(true, '清忠:选择一名手牌最少的角色与其交换手牌', function (card, player, target) {
										return target.isMinHandcard();
									})
									.set('ai', function (target) {
										return get.attitude(_status.event.player, target);
									});
							}
							('step 1');
							if (result.bool) {
								var target = result.targets[0];
								if (target != player) {
									player.line(target, 'green');
									player.swapHandcards(target);
								}
							}
						},
					},
				},
			},
			txjipo: {
				audio: 'jigong',
				trigger: { player: 'useCard' },
				forced: true,
				group: 'txjipo_draw',
				filter(event, player) {
					return player.getHistory('useCard').length <= player.getDamagedHp();
				},
				content() {
					trigger.directHit.addArray(game.filterPlayer());
				},
				ai: {
					threaten: 1.5,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return player.countUsed() < player.getDamagedHp();
					},
				},
				mod: {
					targetInRange(card, player) {
						if (player.countUsed() < player.getDamagedHp()) return true;
					},
					cardUsable(card, player) {
						if (player.countUsed() < player.getDamagedHp()) return Infinity;
					},
					aiOrder(player, card, num) {
						if (player.countUsed() >= player.getDamagedHp()) return;
						var numx = get.info(card).usable;
						if (typeof numx == 'function') numx = num(card, player);
						if (typeof numx == 'number') return num + 10;
					},
				},
				subSkill: {
					draw: {
						audio: 'jigong',
						trigger: { player: 'phaseDrawBegin2' },
						forced: true,
						filter(event, player) {
							return !event.numFixed && player.getDamagedHp() > 0;
						},
						content() {
							trigger.num += 0;
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'recover') && target.hp >= target.maxHp - 1 && target.maxHp > 1) return [0, 0];
								},
							},
						},
					},
				},
			},
			txfenlu: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txfenlu'), function (card, player, target) {
						if (target.isFriendOf(player)) return false;
						return lib.filter.targetEnabled({ name: 'sha' }, player, target);
					}).ai = function (target) {
						return get.effect(target, { name: 'sha' }, player);
					};
					('step 1');
					if (result.bool) {
						player.loseHp();
						player.useCard({ name: 'sha' }, result.targets, false);
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.3,
				},
			},
			txduwu: {
				trigger: { source: 'damageBegin1' },
				usable: 1,
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.notLink();
				},
				forced: true,
				content() {
					trigger.num++;
				},
			},
			//手杀何太后的鸩毒
			//此鸩毒技能代码搬运自【活动BOSS】扩展,感谢其作者烟雨墨染大佬!
			fenghuo_zhendu: {
				audio: 'zhendu',
				trigger: { global: 'phaseUseBegin' },
				filter(event, player) {
					return _status.currentPhase != player && player.countCards('h') > 0;
				},
				forced: true,
				content() {
					'step 0';
					var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
					if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0 || !trigger.player.hasUseTarget({ name: 'jiu' }, null, true)) {
						nono = true;
					} else if (trigger.player.hp > 2) {
						nono = true;
					} else if (trigger.player.hp > 1 && player.countCards('h') < 3 && trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
						nono = true;
					}
					var next = player.chooseToDiscard(get.prompt2('fenghuo_zhendu', trigger.player));
					next.set('ai', function (card) {
						if (_status.event.nono) return -1;
						return 7 - get.useful(card);
					});
					next.set('logSkill', ['fenghuo_zhendu', trigger.player]);
					next.set('nono', nono);
					next.setHiddenSkill('fenghuo_zhendu');
					('step 1');
					if (result.bool) {
						trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool && trigger.player != player) trigger.player.damage();
				},
				ai: {
					threaten: 2,
					expose: 0.3,
				},
			}, //到这
			txqishi: {
				trigger: { player: 'useCard' },
				forced: true,
				filter(event, player) {
					return get.type(event.card) == 'trick';
				},
				content() {
					trigger.nowuxie = true;
				},
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'food') {
							return false;
						}
					},
				},
			},
			txzhongzuo: {
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					if (event._notrigger.includes(event.player)) return false;
					return event.num && event.source && event.player && event.player.isIn() && event.source.isIn() && event.source != event.player;
				},
				check(event, player) {
					if (player.isPhaseUsing()) return true;
					if (event.player == player) return get.attitude(player, event.source) > -3;
					return get.attitude(player, event.player) > -3;
				},
				logTarget(event, player) {
					if (event.player == player) return event.source;
					return event.player;
				},
				preHidden: true,
				content() {
					'step 0';
					event.count = trigger.num;
					('step 1');
					game.asyncDraw([trigger.player, trigger.source]);
					event.count--;
					('step 2');
					('step 3');
					if (event.count && player.hasSkill('txzhongzuo')) {
						player.chooseBool(get.prompt2('txzhongzuo', lib.skill.txzhongzuo.logTarget(trigger, player)));
					} else event.finish();
					('step 4');
					if (result.bool) {
						event.goto(1);
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			txmingmen: {
				line: false,
				group: 'txmingmen_remove',
				check(card) {
					return 7 - get.value(card);
				},
			},
			txmingmen_remove: {
				trigger: { player: 'useCard2' },
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'wanjian' && event.targets.length;
				},
				line: false,
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('txmingmen'), `为${get.translation(trigger.card)}减少一个目标`, function (card, player, target) {
							return _status.event.targets.includes(target);
						})
						.set('targets', trigger.targets)
						.set('ai', function (target) {
							var player = _status.event.player;
							return -get.effect(target, _status.event.getTrigger().card, player, player);
						});
					('step 1');
					if (result.bool) {
						trigger.targets.remove(result.targets[0]);
					}
				},
			},
			txxuejian: {
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txxuejian'), function (card, player, target) {
						if (target.isFriendOf(player)) return false;
						return lib.filter.targetEnabled({ name: 'wanjian' }, player, target);
					}).ai = function (target) {
						return get.effect(target, { name: 'wanjian' }, player);
					};
					('step 1');
					if (result.bool) {
						player.useCard({ name: 'wanjian' }, result.targets, false);
						player.useCard({ name: 'wanjian' }, result.targets, false);
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.3,
				},
			},
			//山寨垃圾版延命
			txyanming: {
				trigger: { target: 'useCardToTarget' },
				forced: true,
				filter(event, player) {
					return event.card && event.card.name != 'jiu' && event.card.name != 'tao' && event.targets.length == 1 && event.card.isCard && event.cards.length == 1 && event.getParent(2).name != 'txyanming_timeout' && get.position(event.cards[0], true) == 'o' && event.card.name == event.cards[0].name && (!player.storage.txyanming || player.storage.txyanming[0].length < player.maxHp);
				},
				content() {
					trigger.targets.remove(player);
					trigger.parent.triggeredTargets2.remove(player);
					trigger.untrigger();
					var card = trigger.cards[0];
					player.addToExpansion(card, 'gain2').gaintag.add('txyanming');
					if (!player.storage.txyanming) player.storage.txyanming = [[], []];
					player.storage.txyanming[0].push(card);
					player.storage.txyanming[1].push(trigger.player);
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
					delete player.storage[skill];
				},
				intro: {
					markcount(storage) {
						if (!storage) return 0;
						return storage[0].length;
					},
					mark(dialog, storage, player) {
						if (!storage) return;
						dialog.addAuto(storage[0]);
						dialog.addText(get.translation(storage[1]));
					},
					onunmark(storage, player) {
						player.storage.txyanming = [[], []];
					},
				},
				ai: {
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'equip' && !get.tag(card, 'gifts') && target.storage.txyanming && target.storage.txyanming[1].length) {
								var result1 = get.equipResult(player, target, card.name),
									subtype = get.subtype(card);
								for (var i of target.storage.txyanming[0]) {
									if (get.subtype(i, false) == subtype && get.equipResult(target, target, i.name) >= result1) return 'zerotarget';
								}
							}
						},
					},
				},
				group: 'txyanming_timeout',
				subSkill: {
					timeout: {
						audio: 'txyanming',
						trigger: { player: 'phaseJieshuBegin' },
						forced: true,
						filter(event, player) {
							return player.storage.txyanming && player.storage.txyanming[0].length; //=Math.max(1,player.getDamagedHp());
						},
						content() {
							var list = player.storage.txyanming,
								card = list[0].shift(),
								source = list[1].shift();
							if (player.getExpansions('txyanming').includes(card)) {
								if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
								else player.loseToDiscardpile(card);
							}
							if (list[0].length) event.redo();
						},
					},
				},
			},
			txshatun: {
				trigger: { player: 'phaseBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txshatun'), function (card, player, target) {
						if (target.isFriendOf(player)) return false;
						return lib.filter.targetEnabled({ name: 'juedou' }, player, target);
					}).ai = function (target) {
						return get.effect(target, { name: 'juedou' }, player);
					};
					('step 1');
					if (result.bool) {
						player.useCard({ name: 'juedou' }, result.targets, false);
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.3,
				},
			},
			txdiyjuezhan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'phaseJieshuBegin' },
				//direct:true,
				forced: true,
				content() {
					player.chooseUseTarget('###是否发动【绝战】？###视为使用一张【决斗】', { name: 'juedou' }, true, 'nodistance').logSkill = 'txdiyjuezhan';
					player.loseHp();
				},
				ai: {
					threaten(player, target) {
						return 1.6;
					},
				},
			},
			zxfudi: {
				trigger: { global: 'damageEnd' },
				forced: true,
				preHidden: true,
				audio: 'gzfudi',
				filter(event, player) {
					return event.source && event.source.isAlive() && event.source != player && event.player == player && player.countCards('h') && event.num > 0;
				},
				content() {
					'step 0';
					var players = game.filterPlayer(function (current) {
						return (
							current.isFriendOf(trigger.source) &&
							current.hp >= player.hp &&
							!game.hasPlayer(function (current2) {
								return current2.hp > current.hp && current2.isFriendOf(trigger.source);
							})
						);
					});
					var check = true;
					if (!players.length) check = false;
					else {
						if (get.attitude(player, trigger.source) >= 0) check = false;
					}
					player
						.chooseCard(get.prompt('zxfudi', trigger.source), '交给其一张手牌,然后对其势力中体力值最大且不小于你的一名角色造成1点伤害')
						.set('aicheck', check)
						.set('ai', function (card) {
							if (!_status.event.aicheck) return 0;
							return 9 - get.value(card);
						})
						.setHiddenSkill(event.name);
					('step 1');
					if (result.bool) {
						player.give(result.cards, trigger.source);
					} else event.finish();
					('step 2');
					var list = game.filterPlayer(function (current) {
						return (
							current.hp >= player.hp &&
							current.isFriendOf(trigger.source) &&
							!game.hasPlayer(function (current2) {
								return current2.hp > current.hp && current2.isFriendOf(trigger.source);
							})
						);
					});
					if (list.length) {
						if (list.length == 1) event._result = { bool: true, targets: list };
						else
							player
								.chooseTarget(true, `对${get.translation(trigger.source)}势力中体力值最大的一名角色造成1点伤害`, function (card, player, target) {
									return _status.event.list.includes(target);
								})
								.set('list', list)
								.set('ai', function (target) {
									return get.damageEffect(target, player, player);
								});
					} else event.finish();
					('step 3');
					if (result.bool && result.targets.length) {
						player.line(result.targets[0]);
						result.targets[0].damage();
					}
				},
				ai: {
					maixie: true,
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && target.hp > 1) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
								if (!target.countCards('h')) return [1, -1];
								if (
									game.countPlayer(function (current) {
										return current.isFriendOf(player) && current.hp >= target.hp - 1;
									})
								)
									return [1, 0, 0, -2];
							}
						},
					},
				},
			},
			txjizhen: {
				audio: 'yanzheng',
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				filter(event, player) {
					for (var i of game.players) {
						if (i.isIn()) {
							return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('txjizhen'), '令任意名角色各摸一张牌', [1, Infinity], function (card, player, target) {
							return target.isIn();
						})
						.set('ai', function (target) {
							return get.attitude(player, target);
						});
					('step 1');
					if (result.bool) {
						game.asyncDraw(result.targets);
					}
				},
				ai: {
					expose: 0.3,
					threaten: 1.3,
				},
			},
			txhj_qiangzheng: {
				audio: 2,
				trigger: { player: 'phaseJieshuBegin' },
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards('h');
					});
				},
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					player.line(players, 'green');
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						var hs = current.getCards('h');
						if (hs.length) {
							var card = hs.randomGet();
							player.gain(card, current);
							current.$giveAuto(card, player);
						}
						event.redo();
					}
				},
			},
			txhj_xixing: {
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt('txhj_xixing'), function (card, player, target) {
						return player != target && target.isLinked();
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'thunder');
					};
					('step 1');
					if (result.bool) {
						result.targets[0].damage('thunder');
						player.recover();
					}
				},
			},
			pytongling: {
				audio: 'spdaming',//QQQ
				trigger: { source: 'damageSource' },
				filter(event, player) {
					if (event.player.isFriendOf(player)) return false;
					return player.isPhaseUsing() && event.player.isIn() && !player.hasSkill('pytongling_used');
				},
				forced: true,
				content() {
					'step 0';
					var str = '';
					if (get.itemtype(trigger.cards) == 'cards' && trigger.cards.filterInD().length) str += ';未造成伤害,其获得' + get.translation(trigger.cards.filterInD());
					player
						.chooseTarget(get.prompt('pytongling'), '令一名势力与你相同的角色选择是否对其使用一张牌.若使用且此牌:造成伤害,你与其各摸两张牌' + str, function (card, player, target) {
							return target.isFriendOf(player);
						})
						.set('ai', function (target) {
							var aim = _status.event.aim;
							var cards = target.getCards('hs', function (card) {
								return target.canUse(card, aim, false) && get.effect(aim, card, target, player) > 0 && get.effect(aim, card, target, target) > 0;
							});
							if (cards.length) return cards.some((card) => get.tag(card, 'damage')) ? 2 : 1;
							return 0;
						})
						.set('aim', trigger.player);
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.addTempSkill('pytongling_used', 'phaseUseAfter');
						player.line2([target, trigger.player]);
						target
							.chooseToUse(
								function (card, player, event) {
									return lib.filter.filterCard.apply(this, arguments);
								},
								`通令:是否对${get.translation(trigger.player)}使用一张牌？`
							)
							.set('targetRequired', true)
							.set('complexSelect', true)
							.set('filterTarget', function (card, player, target) {
								if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
								return lib.filter.targetEnabled.apply(this, arguments);
							})
							.set('sourcex', trigger.player)
							.set('addCount', false);
					} else event.finish();
					('step 2');
					if (result.bool) {
						if (target.hasHistory('sourceDamage', (evt) => evt.getParent(4).name == 'pytongling')) {
							player.draw(2, 'nodelay');
							target.draw(2);
						} else {
							if (get.itemtype(trigger.cards) == 'cards' && trigger.cards.filterInD().length && trigger.player.isIn()) trigger.player.gain(trigger.cards.filterInD(), 'gain2');
						}
					}
				},
				subSkill: { used: { charlotte: true } },
			},
			//海外星张郃
			twzhilve: {
				audio: 'zhilve',
				trigger: { player: 'phaseZhunbeiBegin' },
				content() {
					'step 0';
					if (!player.canMoveCard()) event._result = { index: 1 };
					else
						player
							.chooseControl()
							.set('choiceList', ['移动场上的一张牌', '本回合的摸牌阶段多摸一张牌且第一张杀无距离次数限制'])
							.set('ai', function () {
								return 1;
							});
					('step 1');
					if (result.index == 1) {
						player.addTempSkill('twzhilve_yingzi');
						if (
							!player.getHistory('useCard', function (card) {
								return card.card.name == 'sha';
							}).length
						)
							player.addTempSkill('twzhilve_xiandeng');
						event.finish();
					} else player.moveCard(true);
					('step 2');
					if (result.position == 'e') player.loseHp();
					else player.addTempSkill('twzhilve_dis');
				},
				subSkill: {
					dis: {
						mod: {
							maxHandcard(player, num) {
								return num - 1;
							},
						},
					},
					yingzi: {
						trigger: { player: 'phaseDrawBegin2' },
						popup: false,
						forced: true,
						filter(event, player) {
							return !event.numFixed;
						},
						content() {
							trigger.num++;
						},
					},
					xiandeng: {
						mod: {
							targetInRange(card, player) {
								if (card.name == 'sha') return true;
							},
						},
						trigger: { player: 'useCard1' },
						forced: true,
						popup: false,
						firstDo: true,
						filter(event, player) {
							return event.card && event.card.name == 'sha';
						},
						content() {
							player.removeSkill(event.name);
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								var stat = player.getStat('card');
								if (stat && stat.sha) stat.sha--;
							}
						},
					},
				},
			},
			new_shushen: {
				audio: 'shushen',
				trigger: {
					player: 'recoverAfter',
				},
				forced: true,
				preHidden: true,
				content() {
					'step 0';
					event.num = trigger.num || 1;
					('step 1');
					player
						.chooseTarget(get.prompt2('new_shushen'), function (card, player, target) {
							return target != player;
						})
						.set('ai', function (target) {
							return get.attitude(_status.event.player, target);
						})
						.setHiddenSkill('new_shushen');
					('step 2');
					if (result.bool) {
						result.targets[0].draw();
						if (event.num > 1) {
							event.num--;
							event.goto(1);
						}
					}
				},
				ai: {
					threaten: 0.8,
					expose: 0.1,
				},
			},
			tx_lianyu: {
				trigger: { player: 'phaseJieshuBegin' },
				content() {
					'step 0';
					event.players = get.players(player);
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						if (current.isEnemyOf(player)) {
							player.line(current, 'fire');
							current.damage('fire');
						}
						event.redo();
					}
				},
				ai: {
					threaten: 2,
				},
			},
			txhj_qiangduo: {
				audio: 2,
				trigger: { player: 'phaseZhunbeiBegin' },
				//forced:true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.countCards('he');
					});
				},
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					player.line(players, 'green');
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						var hs = current.getCards('he');
						if (hs.length) {
							var card = hs.randomGet();
							player.gain(card, current);
							current.$giveAuto(card, player);
						}
						event.redo();
					}
				},
			},
			txlipo: {
				trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
				forced: true,
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					if (player == event.player) {
						return event.target.hasSex('male');
					}
					return event.player.hasSex('male');
				},
				check(event, player) {
					return player == event.player;
				},
				content() {
					var id = (player == trigger.player ? trigger.target : player).playerid;
					var map = trigger.parent.customArgs;
					if (!map[id]) map[id] = {};
					if (typeof map[id].shanRequired == 'number') {
						map[id].shanRequired++;
					} else {
						map[id].shanRequired = 2;
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if ((arg && arg.card.name != 'sha') || !arg.target.hasSex('male') || arg.target.countCards('h', 'shan') > 1) return false;
					},
				},
			},
			//新杀许靖
			dcshangyu: {
				audio: 2,
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				forced: true,
				content() {
					'step 0';
					var card = get.cardPile((card) => get.name(card, false) == 'sha');
					if (card) {
						event.card = card;
						player.gain(card, 'gain2').gaintag.add('dcshangyux');
						if (!card.gaintagFixed) card.gaintagFixed = [];
						card.gaintagFixed = ['dcshangyux'];
						player.markAuto('dcshangyu', card);
					} else event.finish();
					('step 1');
					if (get.owner(card) == player && get.position(card) == 'h' && game.hasPlayer((current) => current != player)) {
						player.chooseTarget(true, `赏誉:将${get.translation(card)}交给一名角色`);
					} else event.finish();
					('step 2');
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						var next = player.give(card, target);
					}
				},
				group: ['dcshangyu_damage', 'dcshangyu_lose'],
				subSkill: {
					damage: {
						trigger: {
							global: 'damageSource',
						},
						filter(event, player) {
							var tag = 'dcshangyux',
								card = event.card,
								evt1 = event.getParent('useCard');
							if (evt1) {
								return (
									event.source &&
									event.source.hasHistory('lose', function (evt) {
										if (evt.parent != evt1) return false;
										for (var i in evt.gaintag_map) {
											for (var j of evt.gaintag_map[i]) {
												if (j == tag) return true;
											}
										}
										return false;
									})
								);
							}
							return false;
						},
						forced: true,
						content() {
							'step 0';
							event.players = game.filterPlayer((current) => current.hasSkill('dcshangyu'));
							('step 1');
							var source = event.players.shift();
							if (source) {
								source.draw();
								event.redo();
							}
							('step 2');
							trigger.source.draw();
						},
					},
					lose: {
						trigger: {
							global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
						},
						filter(event, player) {
							if (
								!game.hasPlayer(
									(current) =>
										player.getHistory('custom', function (evt) {
											return evt.dcshangyu_lose == current;
										}).length == 0
								)
							)
								return false;
							var cards = event.getd().filter((i) => i.hasGaintag('dcshangyux'));
							if (!cards.length) return false;
							return true;
						},
						forced: true,
						content() {
							'step 0';
							var cards = trigger.getd().filter((i) => i.hasGaintag('dcshangyux'));
							event.cards = cards;
							event.num = event.cards.length;
							('step 1');
							event.num--;
							if (_status.connectMode)
								game.broadcastAll(function () {
									_status.noclearcountdown = true;
								});
							event.given_map = {};
							('step 2');
							if (
								!game.hasPlayer(
									(current) =>
										player.getHistory('custom', function (evt) {
											return evt.dcshangyu_lose == current;
										}).length == 0
								)
							)
								event.finish();
							else if (event.cards.length > 1) {
								player.chooseCardButton('赏誉:请选择要分配的牌', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
									if (ui.selected.buttons.length == 0) return 1;
									return 0;
								});
							} else if (event.cards.length == 1) event._result = { links: event.cards.slice(0), bool: true };
							else event.finish();
							('step 3');
							if (result.bool) {
								event.cards.removeArray(result.links);
								event.togive = result.links.slice(0);
								player
									.chooseTarget(true, '选择一名角色获得' + get.translation(result.links), function (card, player, target) {
										return (
											player.getHistory('custom', function (evt) {
												return evt.dcshangyu_lose == target;
											}).length == 0
										);
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (_status.event.enemy) {
											return -att;
										} else if (att > 0) {
											return att / (1 + target.countCards('h'));
										} else {
											return att / 100;
										}
									})
									.set('enemy', get.value(event.togive[0], player, 'raw') < 0);
							}
							('step 4');
							if (result.targets.length) {
								var id = result.targets[0].playerid,
									map = event.given_map;
								if (!map[id]) map[id] = [];
								map[id].addArray(event.togive);
								player.getHistory('custom').push({ dcshangyu_lose: result.targets[0] });
							}
							if (cards.length) event.goto(2);
							('step 5');
							if (_status.connectMode) {
								game.broadcastAll(function () {
									delete _status.noclearcountdown;
									game.stopCountChoose();
								});
							}
							var list = [];
							for (var i in event.given_map) {
								var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
								player.line(source, 'green');
								list.push([source, event.given_map[i]]);
							}
							game.loseAsync({
								gain_list: list,
								giver: player,
								animate: 'gain2',
							}).setContent('gaincardMultiple');
							game.log(list[0][0], '从弃牌堆里获得了', '#y' + get.translation(list[0].slice(1)));
							('step 6');
							if (
								event.num > 0 &&
								game.hasPlayer(
									(current) =>
										player.getHistory('custom', function (evt) {
											return evt.dcshangyu_lose == current;
										}).length == 0
								)
							)
								event.goto(1);
						},
					},
				},
			},
			dccaixia: {
				audio: 2,
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				filter(event, player) {
					return !player.hasSkill('dccaixia_clear');
				},
				forced: true,
				content() {
					'step 0';
					var choices = Math.min(5, game.countPlayer());
					var map = {};
					var list = [];
					for (var i = 1; i <= choices; i++) {
						var cn = get.cnNumber(i, true);
						map[cn] = i;
						list.push(cn);
					}
					event.map = map;
					player
						.chooseControl(list, function () {
							return get.cnNumber(_status.event.goon, true);
						})
						.set('goon', choices)
						.set('prompt', `你可以摸至多${get.cnNumber(choices)}张牌,但是你此后需要再使用等量的牌才可再发动本技能.`);
					('step 1');
					if (result.control != 'cancel2') {
						var num = event.map[result.control];
						player.draw(num);
						player.addMark('dccaixia_clear', num);
						player.addSkill('dccaixia_clear');
					}
				},
				mod: {
					aiOrder(player, card, num) {
						if (!get.tag(card, 'damage')) return;
						if (player.countMark('dccaixia_clear') > 1) return num / 2;
						return num + 6;
					},
				},
				subSkill: {
					clear: {
						trigger: { player: 'useCard1' },
						filter(event, player) {
							return player.countMark('dccaixia_clear') > 0;
						},
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							player.removeMark('dccaixia_clear', 1);
							if (player.countMark('dccaixia_clear') == 0) {
								player.removeSkill('dccaixia_clear');
							}
						},
						intro: {
							name: '才瑕',
							name2: '瑕',
							content: '距离刷新技能还需使用&张牌',
						},
					},
				},
			},
			txanzhan: {
				audio: 2,
				enable: 'chooseToUse',
				mod: {
					targetInRange(card) {
						if (card.storage && card.storage.txanzhan) return true;
					},
				},
				viewAsFilter(player) {
					return player.hasCard(function (card) {
						return get.type(card) == 'basic';
					}, 'hs');
				},
				position: 'hs',
				filterCard: { type: 'basic' },
				viewAs: {
					name: 'sha',
					storage: { txanzhan: true },
				},
				check(card) {
					return 6 - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter(player) {
						return player.hasCard(function (card) {
							return get.type(card) == 'basic';
						}, 'hs');
					},
				},
				group: 'txanzhan_base',
				subSkill: {
					base: {
						trigger: { player: 'useCard1' },
						forced: true,
						popup: false,
						firstDo: true,
						filter(event, player) {
							return event.skill == 'txanzhan' && event.targets.length;
						},
						content() {
							trigger.baseDamage = Math.min(6, get.distance(player, trigger.targets[0]));
						},
					},
				},
			},
			//虎牢关之战
			txaozhan: {
				forced: true,
				charlotte: true,
				group: ['txaozhan_wuqi', 'txaozhan_fangju', 'txaozhan_zuoji', 'txaozhan_baowu'],
				subSkill: {
					wuqi: {
						mod: {
							cardUsable(card, player, num) {
								if (player.getEquip(1) && card.name == 'sha') return num + 1;
							},
						},
					},
					fangju: {
						trigger: {
							player: 'damageBegin4',
						},
						forced: true,
						filter(event, player) {
							return player.getEquip(2) && event.num > 1;
						},
						content() {
							trigger.num = 1;
						},
					},
					zuoji: {
						trigger: {
							player: 'phaseDrawBegin',
						},
						forced: true,
						filter(event, player) {
							return player.getEquip(3) || player.getEquip(4);
						},
						content() {
							trigger.num++;
						},
					},
					baowu: {
						trigger: {
							player: 'phaseJudgeBefore',
						},
						forced: true,
						filter(event, player) {
							return player.getEquip(5);
						},
						content() {
							trigger.cancel();
							game.log(player, '跳过了判定阶段');
						},
					},
				},
			},
			txjingjia: {
				group: ['txjingjia1', 'txjingjia2', 'txjingjia3'],
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(1);
				},
				content() {
					if (!lib.inpile.includes('wushuangfangtianji')) {
						lib.inpile.push('wushuangfangtianji');
						player.equip(game.createCard('wushuangfangtianji', 'diamond', 13));
					} else {
						var card = get.cardPile(function (card) {
							return card.name == 'wushuangfangtianji' && !player.getEquips(1).includes(card);
						}, 'field');
						if (card) player.equip(card);
					}
				},
			},
			txjingjia1: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(2);
				},
				content() {
					if (!lib.inpile.includes('hongmianbaihuapao')) {
						lib.inpile.push('hongmianbaihuapao');
						player.equip(game.createCard('hongmianbaihuapao', 'club', 10));
					} else {
						var card = get.cardPile(function (card) {
							return card.name == 'hongmianbaihuapao' && !player.getEquips(2).includes(card);
						}, 'field');
						if (card) player.equip(card);
					}
				},
			},
			txjingjia2: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(5);
				},
				content() {
					if (!lib.inpile.includes('shufazijinguan')) {
						lib.inpile.push('shufazijinguan');
						player.equip(game.createCard('shufazijinguan', 'spade', 7));
					} else {
						var card = get.cardPile(function (card) {
							return card.name == 'shufazijinguan' && !player.getEquips(5).includes(card);
						}, 'field');
						if (card) player.equip(card);
					}
				},
			},
			txjingjia3: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(3);
				},
				content() {
					if (!lib.inpile.includes('chitu')) {
						lib.inpile.push('chitu');
						player.equip(game.createCard('chitu', 'heart', 2));
					} else {
						var card = get.cardPile(function (card) {
							return card.name == 'chitu' && !player.getEquips(3).includes(card);
						}, 'field');
						if (card) player.equip(card);
					}
				},
			},
			txwudong: {
				trigger: { global: 'phaseAfter' },
				filter(summer, txhj_bosslvbu1) {
					return summer.player != txhj_bosslvbu1 && txhj_bosslvbu1.countCards('h') < txhj_bosslvbu1.hp;
				},
				line: { color: [251, 193, 217] },
				logTarget: 'player',
				charlotte: true,
				content() {
					'step 0';
					player.link();
					('step 1');
					player.draw(1);
					player.insertPhase();
					player.storage.lvbu_wudong = trigger.player;
					player.addTempSkill('lvbu_wudong');
				},
			},
			lvbu_wudong: {
				mark: 'character',
				intro: {
					content: '到$的距离视为1',
				},
				charlotte: true,
				mod: {
					globalFrom(umi, shiroha) {
						if (umi.storage.lvbu_wudong == wudong) return -Infinity;
					},
				},
			},
			wzpaoxiao: {
				audio: 'paoxiao',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					if (event.card.name != 'sha') return false;
					var history = player.getHistory('useCard', function (evt) {
						return evt.card.name == 'sha';
					});
					return history && history.indexOf(event) == 1;
				},
				forced: true,
				preHidden: true,
				content() {
					player.draw();
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (!get.zhu(player, 'shouyue')) return false;
						if (arg && arg.name == 'sha') return true;
						return false;
					},
				},
			},
			txshenwei: {
				audio: 'shenwei',
				trigger: { player: 'phaseDrawBegin' },
				forced: true,
				content() {
					trigger.num += Math.min(3, game.players.length - 1);
				},
				mod: {
					maxHandcard(player, current) {
						return current + Math.min(3, game.players.length - 1);
					},
				},
			},
			txxiuluo: {
				audio: 'xiuluo',
				trigger: { player: 'phaseZhunbeiBegin' },
				forced: true,
				filter(event, player) {
					return player.countCards('j') > 0;
				},
				content() {
					'step 0';
					var next = player.discardPlayerCard(player, 2, 'hj', '是否一张手牌来弃置一张花色相同的判定牌？');
					next.filterButton = function (button) {
						var card = button.link;
						if (!lib.filter.cardDiscardable(card, player)) return false;
						if (ui.selected.buttons.length == 0) return true;
						if (get.position(ui.selected.buttons[0].link) == 'h') {
							if (get.position(card) != 'j') return false;
						}
						if (get.position(ui.selected.buttons[0].link) == 'j') {
							if (get.position(card) != 'h') return false;
						}
						return get.suit(card) == get.suit(ui.selected.buttons[0].link);
					};
					next.ai = function (button) {
						var card = button.link;
						if (get.position(card) == 'h') {
							return 11 - get.value(card);
						}
						if (card.name == 'lebu') return 5;
						if (card.name == 'bingliang') return 4;
						if (card.name == 'guiyoujie') return 3;
						return 2;
					};
					next.logSkill = 'txxiuluo';
					('step 1');
					if (result.bool && player.countCards('j')) event.goto(0);
				},
			},
			txhouyuan9: {
				audio: 2,
				enable: 'chooseToUse',
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuan9 = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuan9) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuan9');
					player.storage.txhouyuan9 = true;
					player.discard(player.getCards('hj'));
					('step 1');
					player.uninit();
					player.init('txhj_bosslvbu3');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuan9) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuan9) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			txshenqu: {
				audio: 'shenqu',
				group: 'txshenqu2',
				trigger: { global: 'phaseZhunbeiBegin' },
				filter(event, player) {
					return player.countCards('h') <= player.maxHp;
				},
				forced: true,
				content() {
					player.draw(2);
				},
			},
			txshenqu2: {
				trigger: { player: 'damageAfter' },
				forced: true,
				filter(event, player) {
					return player.hasSkillTag('respondTao') || player.countCards('h', 'tao') > 0;
				},
				content() {
					player.chooseToUse({ name: 'tao' }, '神躯:是否使用一张桃？').logSkill = 'txshenqu';
				},
			},
			txjiwu: {
				audio: 'jiwu',
				enable: 'phaseUse',
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					if (!player.hasSkill('qiangxix')) return true;
					if (!player.hasSkill('retieji')) return true;
					if (!player.hasSkill('rexuanfeng')) return true;
					if (!player.hasSkill('wansha')) return true;
					return false;
				},
				filterCard: true,
				position: 'he',
				check(card) {
					if (get.position(card) == 'e' && _status.event.player.hasSkill('rexuanfeng')) return 16 - get.value(card);
					return 7 - get.value(card);
				},
				content() {
					'step 0';
					var list = [];
					if (!player.hasSkill('qiangxix')) list.push('qiangxix');
					if (!player.hasSkill('retieji')) list.push('retieji');
					if (!player.hasSkill('rexuanfeng')) list.push('rexuanfeng');
					if (!player.hasSkill('wansha')) list.push('wansha');
					if (list.length == 1) {
						player.addTempSkill(list[0]);
						event.finish();
					} else {
						player
							.chooseControl(list, function () {
								if (list.includes('rexuanfeng') && player.countCards('he', { type: 'equip' })) return 'rexuanfeng';
								if (!player.getStat().skill.qiangxix) {
									if (player.hasSkill('qiangxix') && player.getEquip(1) && list.includes('rexuanfeng')) return 'rexuanfeng';
									if (list.includes('wansha') || list.includes('qiangxix')) {
										var players = game.filterPlayer();
										for (var i of players) {
											if (i.hp == 1 && get.attitude(player, i) < 0) {
												if (list.includes('wansha')) return 'wansha';
												if (list.includes('qiangxix')) return 'qiangxix';
											}
										}
									}
								}
								if (list.includes('qiangxix')) return 'qiangxix';
								if (list.includes('wansha')) return 'wansha';
								if (list.includes('rexuanfeng')) return 'rexuanfeng';
								return 'retieji';
							})
							.set('prompt', '选择获得一项技能直到回合结束');
					}
					('step 1');
					player.addTempSkill(result.control);
					player.popup(get.translation(result.control));
				},
				ai: {
					order() {
						var player = _status.event.player;
						if (player.countCards('e', { type: 'equip' })) return 10;
						if (!player.getStat().skill.qiangxix) {
							if (player.hasSkill('qiangxix') && player.getEquip(1) && !player.hasSkill('rexuanfeng')) return 10;
							if (player.hasSkill('wansha')) return 1;
							var players = game.filterPlayer();
							for (var i of players) {
								if (i.hp == 1 && get.attitude(player, i) < 0) return 10;
							}
						}
						return 1;
					},
					result: {
						player(player) {
							if (player.countCards('e', { type: 'equip' })) return 1;
							if (!player.getStat().skill.qiangxix) {
								if (player.hasSkill('qiangxix') && player.getEquip(1) && !player.hasSkill('rexuanfeng')) return 1;
								if (!player.hasSkill('wansha') || !player.hasSkill('qiangxix')) {
									var players = game.filterPlayer();
									for (var i of players) {
										if (i.hp == 1 && get.attitude(player, i) < 0) return 1;
									}
								}
							}
							return 0;
						},
					},
				},
			},
			//搬自阵面对决扩展
			zmquezhan: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:太虚幻境/audio/skill:2',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && player.canUse({ name: 'sha' }, current);
					});
				},
				filterTarget(card, player, target) {
					var length = ui.selected.cards.length;
					if (get.distance(player, target, 'attack') > 1) return false;
					return (length == 0 || length == 2) && player != target && player.canUse({ name: 'sha' }, target);
				},
				check(card) {
					return 6 - get.value(card);
				},
				filterCard: true,
				selectCard: [0, 2],
				position: 'he',
				content() {
					'step 0';
					var list = ['失去体力', '翻面'];
					event.list = list;
					if (cards.length == 2) {
						event.goto(2);
					} else {
						player
							.chooseControl(event.list)
							.set('ai', function (evt, player) {
								var controls = _status.event.controls;
								var player = _status.event.player;
								if (player.isTurnedOver()) {
									return '翻面';
								}
								if (player.countCards('h', 'tao') >= 1) {
									return '失去体力';
								}
								return '失去体力';
							})
							.set('prompt', `雀斩:请选择一项,视为对${get.translation(target)}使用一张【杀】`);
					}
					('step 1');
					if (result.control == '失去体力') {
						player.loseHp();
					} else if (result.control == '翻面') {
						player.turnOver();
					}
					('step 2');
					player.addTempSkill('zmquezhan2');
					player.storage.zmquezhan = target;
					player.useCard({ name: 'sha' }, target, false);
				},
				ai: {
					order: 4,
					result: {
						target(player, target) {
							if (player.countCards('he') <= 2 || !player.countCards('he', 'tao')) {
								if (player.hp < 2) return 0;
								if (target.hp >= player.hp) return 0;
							}
							return get.damageEffect(target, player);
						},
					},
				},
			},
			zmquezhan2: {
				trigger: {
					player: 'useCard',
				},
				silent: true,
				forced: true,
				popup: false,
				onremove(player) {
					delete player.storage.zmquezhan;
					delete player.storage.zmquezhan2;
				},
				filter(event, player) {
					var evt = event.getParent(2);
					return evt.skill == 'zmquezhan';
				},
				content() {
					player.storage.zmquezhan2 = trigger.card;
				},
				group: ['zmquezhan2_damage', 'zmquezhan2_reset'],
				subSkill: {
					damage: {
						trigger: {
							source: 'damage',
						},
						silent: true,
						forced: true,
						popup: false,
						filter(event, player) {
							return player.storage.zmquezhan && event.card == player.storage.zmquezhan2;
						},
						content() {
							player.addTempSkill('zmquezhan3');
						},
					},
					reset: {
						trigger: {
							player: 'useCardAfter',
						},
						forced: true,
						silent: true,
						popup: false,
						filter(event, player) {
							return player.storage.zmquezhan && event.card == player.storage.zmquezhan2;
						},
						content() {
							'step 0';
							if (!player.hasSkill('zmquezhan3')) event.finish();
							var list = ['弃牌', '失去体力', '翻面'];
							event.list = list;
							if (player.storage.zmquezhan.countCards('he') < 2) event.list.remove('弃牌');
							player.storage.zmquezhan
								.chooseControl(event.list)
								.set('ai', function (evt, player) {
									var controls = _status.event.controls;
									var player = _status.event.player;
									if (player.isTurnedOver()) {
										return '翻面';
									}
									if (controls.includes('弃牌')) {
										return '弃牌';
									} else if (player.hp > 2 || player.countCards('h', 'tao') >= 1) {
										return '失去体力';
									}
									return controls.randomGet();
								})
								.set('prompt', '雀斩:请选择一项');
							('step 1');
							if (result.control == '弃牌') {
								player.storage.zmquezhan.chooseToDiscard(2, 'he', true);
							} else if (result.control == '失去体力') {
								player.storage.zmquezhan.loseHp();
							} else if (result.control == '翻面') {
								player.storage.zmquezhan.turnOver();
							}
							('step 2');
							player.removeSkill('zmquezhan3');
							player.removeSkill('zmquezhan2');
						},
					},
				},
			},
			zmquezhan3: {},
			//副本pve技能
			txxiongshou: {
				group: ['txxiongshou_turn', 'txxiongshou_damage'],
				subSkill: {
					damage: {
						trigger: { source: 'damageBegin1' },
						forced: true,
						filter(event, player) {
							return event.notLink() && event.card && event.card.name == 'sha' && event.player.hp < player.hp;
						},
						content() {
							trigger.num++;
						},
					},
					turn: {
						trigger: { player: 'turnOverBefore' },
						_priority: 20,
						forced: true,
						filter(event, player) {
							return !player.isTurnedOver();
						},
						content() {
							trigger.cancel();
							game.log(player, '取消了翻面');
						},
					},
				},
				mod: {
					globalFrom(from, to, distance) {
						return distance - 1;
					},
				},
				ai: {
					noturn: true,
				},
			},
			txhouyuan0: {
				audio: 2,
				enable: 'chooseToUse',
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuan0 = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuan0) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuan0');
					player.storage.txhouyuan0 = true;
					player.discard(player.getCards('hej'));
					('step 1');
					player.uninit();
					player.init('txhj_zhuyin');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuan0) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuan0) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			txminbao: {
				global: 'txminbao2',
			},
			txminbao2: {
				trigger: { global: 'dieAfter' },
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('txminbao') && event.player.isDead();
				},
				content() {
					trigger.player.line(player, 'fire');
					player.damage('nosource', 'fire').animate = false;
					player.$damage(trigger.player);
					player.$damagepop(-1, 'fire');
					if (lib.config.animation && !lib.config.low_performance) {
						player.$fire();
					}
					if (!event.parent.parent.txminbao_logv) {
						event.parent.parent.txminbao_logv = true;
						game.logv(trigger.player, 'txminbao', game.filterPlayer(), event.parent.parent);
					}
				},
			},
			txwuyou: {
				/*	mod:{
						targetEnabled:function(card,player,target){
							if(get.type(card)=='delay'){
								return false;
							}
						},
					},*/
				trigger: {
					player: ['phaseZhunbeiBefore', 'phaseJieshuBefore'],
				},
				forced: true,
				audio: 2,
				group: 'txwuyou2',
				content() {
					trigger.cancel();
					game.log(player, '跳过了', event.triggername == 'phaseZhunbeiBefore' ? '准备阶段' : '结束阶段');
				},
			},
			txwuyou2: {
				popup: false,
				trigger: {
					player: 'phaseJudgeBefore',
				},
				forced: true,
				content() {
					/*	trigger.cancel();
						game.log(player,'跳过了判定阶段');*/
					player.skip('phaseDraw');
					player.skip('phaseUse');
				},
			},
			txxiongqu: {
				mod: {
					targetEnabled(card, player, target, now) {
						if (card.name == 'toulianghuanzhu' || card.name == 'fudichouxin') return false;
					},
				},
				audio: 2,
			},
			/*新杀龙舟npc*/
			//以下代码全部搬运自【活动Boss】扩展,并特此非常感谢其作者(烟雨墨染)大佬 !!!
			taoshen_nutao: {
				audio: 1,
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current);
					});
				},
				content() {
					var list = game
						.filterPlayer(function (current) {
							return player.getEnemies().includes(current);
						})
						.randomGet();
					player.line(list);
					list.damage('thunder');
				},
				ai: {
					expose: 0.2,
				},
			},
			caoe_shoujiang: {
				audio: 1,
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				filter(event, player) {
					if (event.num <= 1) return false;
					return true;
				},
				content() {
					trigger.num = 1;
					player.draw();
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.player) {
							if (player.hasSkillTag('jueqing', false, player)) return false;
						}
					},
				},
			},
			zuogu_jisheng: {
				audio: 1,
				trigger: {
					player: 'phaseDrawBefore',
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '跳过了摸牌阶段');
				},
				group: ['zuogu_jisheng_loseHp', 'zuogu_jisheng_wudi'],
				subSkill: {
					loseHp: {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						audio: 'zuogu_jisheng',
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return (player.getFriends().includes(current) || current == player) && (current.sex == 'male' || current.sex == 'female');
							});
						},
						content() {
							var list = game
								.filterPlayer(function (current) {
									return (player.getFriends().includes(current) || current == player) && (current.sex == 'male' || current.sex == 'female');
								})
								.randomGet();
							list.loseHp(trigger.num);
						},
						ai: {
							threaten: 1.1,
							neg: true,
						},
					},
					wudi: {
						trigger: {
							player: 'damageBegin4',
						},
						forced: true,
						audio: 'zuogu_jisheng',
						filter(event, player) {
							return game.roundNumber % 2 == 0;
						},
						content() {
							trigger.cancel();
						},
						ai: {
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (player.hasSkillTag('jueqing', false, target)) return;
									if (game.roundNumber % 2 == 1) return;
									if (get.tag(card, 'damage')) return 0;
								},
							},
						},
					},
				},
			},
			zuogu_zuogu: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return event.source && event.source.isIn();
				},
				content() {
					if (player.getHistory('damage').indexOf(trigger) == 0) trigger.source.draw(2);
					if (player.getHistory('damage').indexOf(trigger) == 1) trigger.source.chooseToDiscard(2, 'he', true);
					if (player.getHistory('damage').indexOf(trigger) > 1) trigger.source.loseHp();
				},
			},
			yougu_yougu: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return event.source && event.source.isIn();
				},
				content() {
					if (player.getHistory('damage').indexOf(trigger) == 0) trigger.source.recover();
					if (player.getHistory('damage').indexOf(trigger) == 1) trigger.source.damage();
					if (player.getHistory('damage').indexOf(trigger) > 1) trigger.source.chooseToDiscard(2, 'he', true);
				},
			},
			yougu_ousheng: {
				audio: 1,
				trigger: {
					player: 'phaseDrawBefore',
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '跳过了摸牌阶段');
				},
				group: ['yougu_ousheng_loseHp', 'yougu_ousheng_wudi'],
				subSkill: {
					loseHp: {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						audio: 'yougu_ousheng',
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return (player.getFriends().includes(current) || current == player) && (current.sex == 'male' || current.sex == 'female');
							});
						},
						content() {
							var list = game
								.filterPlayer(function (current) {
									return (player.getFriends().includes(current) || current == player) && (current.sex == 'male' || current.sex == 'female');
								})
								.randomGet();
							list.loseHp(trigger.num);
						},
						ai: {
							threaten: 1.1,
							neg: true,
						},
					},
					wudi: {
						trigger: {
							player: 'damageBegin4',
						},
						forced: true,
						audio: 'yougu_ousheng',
						filter(event, player) {
							return game.roundNumber % 2 == 1;
						},
						content() {
							trigger.cancel();
						},
						ai: {
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (player.hasSkillTag('jueqing', false, target)) return;
									if (game.roundNumber % 2 == 0) return;
									if (get.tag(card, 'damage')) return 0;
								},
							},
						},
					},
				},
			},
			txhouyuanlz: {
				audio: 2,
				enable: 'chooseToUse',
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuanlz = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuanlz) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuanlz');
					player.storage.txhouyuanlz = true;
					player.discard(player.getCards('hj'));
					('step 1');
					player.uninit();
					player.init('txhj_taoshen');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuanlz) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuanlz) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			taoshen_xiongzi: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				audio: 1,
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					if (player.countCards('h') <= 2) {
						trigger.num += 3;
					} else {
						trigger.num++;
					}
				},
				ai: {
					threaten: 1.3,
				},
			},
			taoshen_paoxiao: {
				audio: 1,
				firstDo: true,
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 0 && event.parent.type == 'phase';
				},
				content() {
					trigger.audioed = true;
					player.addTempSkill('taoshen_paoxiao_xiaoguo', 'phaseUseAfter');
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
				},
				ai: {
					threaten: 0.5,
					skillTagFilter(player, tag, arg) {
						if (!get.zhu(player, 'shouyue')) return false;
						if (arg && arg.name == 'sha') return true;
						return false;
					},
				},
				subSkill: {
					xiaoguo: {
						marktext: '咆哮',
						mark: true,
						intro: {
							name: '咆哮',
							content: '本阶段使用【杀】无距离限制',
						},
						charlotte: true,
						mod: {
							targetInRange(card, player) {
								if (card.name == 'sha') return true;
							},
						},
					},
				},
			},
			//以下代码搬运自【阵面对决】扩展!
			txqingshu: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.isAlive() && event.player != player && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.countCards('h');
				},
				content() {
					'step 0';
					var check = get.attitude(player, trigger.player) < 0;
					player
						.chooseToDiscard(get.prompt2('txqingshu'))
						.set('ai', function (card) {
							if (_status.event.check) {
								return 6 - get.value(card);
							}
							return 0;
						})
						.set('check', check);
					('step 1');
					if (result.bool) {
						player.addTempSkill('txqingshu2');
						player.useCard({ name: 'sha' }, trigger.player, false);
					}
				},
			},
			txqingshu2: {
				trigger: {
					player: 'useCard',
				},
				silent: true,
				forced: true,
				popup: false,
				onremove(player) {
					delete player.storage.txqingshu2;
				},
				filter(event, player) {
					var evt = event.getParent(2);
					return evt.skill == 'txqingshu';
				},
				content() {
					player.storage.txqingshu2 = trigger.card;
				},
				group: 'txqingshu2_damage',
				subSkill: {
					damage: {
						trigger: {
							source: 'damageAfter',
						},
						silent: true,
						forced: true,
						popup: false,
						filter(event, player) {
							return player.storage.txqingshu2 && event.card == player.storage.txqingshu2 && event.player.isAlive() && event.player.countCards('he');
						},
						content() {
							player.removeSkill('txqingshu2');
							player.discardPlayerCard('he', trigger.player, true);
						},
					},
				},
			},
			txchihun: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('he');
				},
				filterTarget(card, player, target) {
					return !target.isLinked();
				},
				position: 'he',
				check(card) {
					return 6 - get.value(card);
				},
				filterCard: true,
				content() {
					'step 0';
					event.card = cards[0];
					if (target == player) player.recover();
					else {
						target.link(true);
						player.discardPlayerCard(target, 'he', true);
					}
					('step 1');
					if (get.color(event.card) == 'red') {
						player
							.chooseTarget(`是否将${get.translation(event.card)}交给一名其他角色？`, function (card, player, target) {
								return player != target;
							})
							.set('ai', function (target) {
								return get.attitude(_status.event.player, target);
							});
					} else event.finish();
					('step 2');
					if (result.bool) {
						player.line(result.targets[0], 'green');
						result.targets[0].gain(event.card, 'gain2');
					}
				},
				mod: {
					targetInRange(card, player, target) {
						if (target.isLinked()) {
							return true;
						}
					},
					cardUsable(card, player, num) {
						if (
							typeof num == 'number' &&
							game.hasPlayer(function (current) {
								return current.isLinked();
							})
						)
							return Infinity;
					},
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							if (player == target && player.isDamaged()) return 5;
							return -2;
						},
					},
				},
			},
			//以下代码全部搬运自【活动Boss】扩展,并特此非常感谢其作者(烟雨墨染)大佬 !!!
			//超时空密探
			mitan_lingshou: {
				//group:'mitan_chooseskill_meihuashishan',
				//derivation:'mitan_chooseskill_meihuashishan',
				forced: true,
				trigger: { global: 'damageBegin4' },
				filter(event, player) {
					return event.player != player && player.getFriends().includes(event.player);
				},
				logTarget: 'player',
				content() {
					trigger.num--;
					player.loseHp();
					if (trigger.source && trigger.source.countCards('he') > 0) trigger.source.chooseToDiscard(2, 'he', true);
				},
				ai: {
					expose: 0.2,
				},
			},
			mitan_meibiao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'useCard' },
				forced: true,
				filter(event, player) {
					return get.suit(event.card) == 'club';
				},
				content() {
					trigger.directHit.addArray(
						game.filterPlayer(function (current) {
							return current != player;
						})
					);
					game.log(
						trigger.card,
						'无法被',
						game.filterPlayer(function (current) {
							return current != player;
						}),
						'响应'
					);
					if (get.tag(trigger.card, 'damage')) {
						trigger.baseDamage += 2;
						game.log(trigger.card, '造成的伤害基础值加二');
					}
				},
			},
			mitan_biandao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'phaseUseAfter' },
				filter(event, player) {
					return player.getHistory('sourceDamage').length == 0;
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return current != player && player.getEnemies().includes(current);
					});
				},
				forced: true,
				content() {
					'step 0';
					event.list = game.filterPlayer(function (current) {
						return current != player && player.getEnemies().includes(current);
					});
					event.list.sort(lib.sort.seat);
					('step 1');
					var target = event.list.shift();
					target.damage([1, 2].randomGet());
					if (event.list.length) event.redo();
				},
				ai: {
					expose: 0.2,
					threaten: 1.2,
				},
			},
			mitan_yingyue: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'useCard2' },
				filter(event, player) {
					if (player != _status.currentPhase || !event.targets || event.targets.length != 1) return false;
					return (
						(event.card.name == 'sha' || get.type(event.card) == 'trick') &&
						game.hasPlayer(function (current) {
							return current != player && !event.targets.includes(current);
						})
					);
				},
				usable: 1,
				forced: true,
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt('mitan_yingyue'), `为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
							var evt = _status.event.getTrigger();
							return !evt.targets.includes(target) && lib.filter.filterTarget(evt.card, player, target);
						})
						.set('ai', function (target) {
							var evt = _status.event.getTrigger(),
								eff = get.effect(target, evt.card, evt.player, evt.player);
							return eff;
						}).animate = false;
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
					} else event.finish();
					('step 2');
					trigger.targets.push(target);
					game.log(target, '成为了', trigger.card, '的额外目标');
				},
			},
			mitan_huti: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'damageBegin4' },
				filter(event, player) {
					return event.source && event.source != player && !event.source.getHistory('sourceDamage').length;
				},
				forced: true,
				usable: 1,
				content() {
					trigger.cancel();
					player.discard(
						player
							.getCards('he', function (card) {
								return lib.filter.cardDiscardable(card, player, 'mitan_huti');
							})
							.randomGet()
					);
				},
			},
			mitan_zhibi: {
				skillAnimation: true,
				animationColor: 'wood',
				limited: true,
				mark: true,
				enable: 'phaseUse',
				intro: {
					content: 'limited',
				},
				filterTarget(card, player, target) {
					return target != player && player.getEnemies().includes(target);
				},
				content() {
					player.awakenSkill('mitan_zhibi');
					target.addTempSkill('mitan_zhibi_block');
				},
				subSkill: {
					block: {
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
						},
						charlotte: true,
						skillBlocker(skill, player) {
							return skill != 'mitan_zhibi_block' && !lib.skill[skill].charlotte;
						},
						mark: true,
						marktext: '封印',
						intro: {
							name: '知彼',
							content: '本回合所有技能失效',
						},
					},
				},
				ai: {
					order: 9,
					result: {
						target: -1,
					},
				},
			},
			mitan_shenghu: {
				//group:'mitan_chooseskill_wuliuqi',
				//derivation:'mitan_chooseskill_wuliuqi',
				forced: true,
				trigger: { global: 'damageBegin4' },
				filter(event, player) {
					return event.player != player && player.getFriends().includes(event.player);
				},
				logTarget: 'player',
				content() {
					trigger.num--;
					player.loseHp();
					game.asyncDraw([player, trigger.player]);
				},
				ai: {
					expose: 0.2,
				},
			},
			mitan_feijian: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'phaseUseAfter' },
				filter(event, player) {
					return (
						player.getEquip(1) &&
						player.getHistory('sourceDamage', function (evt) {
							return evt.player != player;
						}).length
					);
				},
				forced: true,
				logTarget(event, player) {
					var list = [];
					player.getHistory('sourceDamage', function (evt) {
						if (!list.includes(evt.player) && evt.player != player) list.push(evt.player);
					});
					return list.sortBySeat();
				},
				content() {
					'step 0';
					var card = player.getEquip(1);
					if (card) player.discard(card);
					var list = lib.skill.mitan_feijian.logTarget(trigger, player).sortBySeat();
					if (!list.length) event.finish();
					else event.list = list;
					('step 1');
					var target = event.list.shift();
					target.damage([2, 3, 4].randomGet());
					if (event.list.length) event.redo();
				},
			},
			mitan_yirong: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { source: 'damageBefore' },
				filter(event, player) {
					return game.players.length > 2;
				},
				usable: 1,
				forced: true,
				content() {
					var list = game.filterPlayer();
					list.remove(player);
					list.remove(trigger.player);
					var target = list.randomGet();
					trigger.source = target;
				},
			},
			mitan_qingsuo: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.source != player;
				},
				forced: true,
				logTarget: 'source',
				content() {
					player.turnOver();
					trigger.source.turnOver();
				},
			},
			mitan_xuefa: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: { source: 'damageSource' },
				filter(event, player) {
					return event.player != player && event.player.countCards('he');
				},
				forced: true,
				content() {
					trigger.player.discard(trigger.player.getCards('he').randomGets([1, 2, 3].randomGet()));
				},
			},
			//驱鬼逐邪
			//孟婆
			boss_aotang: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current);
					});
				},
				content() {
					var list = game
						.filterPlayer(function (current) {
							return player.getEnemies().includes(current);
						})
						.randomGet();
					player.line(list);
					list.addSkill('boss_aotang_fengyin');
				},
				group: 'boss_aotang_delete',
				subSkill: {
					delete: {
						trigger: {
							player: ['phaseBegin', 'dieBegin'],
						},
						forced: true,
						_priority: 20,
						forced: true,
						content() {
							game.countPlayer(function (current) {
								if (current.hasSkill('boss_aotang_fengyin')) {
									current.removeSkill('boss_aotang_fengyin');
								}
							});
						},
					},
					fengyin: {
						charlotte: true,
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
						},
						skillBlocker(skill, player) {
							return skill != 'boss_aotang_fengyin' && !lib.skill[skill].charlotte;
						},
						mark: true,
						intro: {
							name: '熬汤',
							content(storage, player, skill) {
								var str = '无失效技能';
								var list = player.getSkills(null, false, false).filter(function (i) {
									return lib.skill.boss_aotang_fengyin.skillBlocker(i, player);
								});
								if (list.length) str = '失效技能:' + get.translation(list);
								return str;
							},
						},
					},
				},
			},
			boss_guimeic: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: ['boss_guimeic_draw', 'boss_guimeic_use'],
				trigger: {
					player: 'turnOverBefore',
				},
				_priority: 20,
				filter(event, player) {
					return !player.isTurnedOver();
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '取消了翻面');
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'phaseDrawSkipped',
						},
						forced: true,
						content() {
							player.draw();
						},
					},
					use: {
						trigger: {
							player: 'phaseUseSkipped',
						},
						forced: true,
						content() {
							player.addTempSkill('boss_guimeic_xiaoguo');
						},
					},
					xiaoguo: {
						mod: {
							ignoredHandcard(card, player) {
								return true;
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard') return false;
							},
						},
						forced: true,
						fixed: true,
						popup: false,
					},
				},
				ai: {
					noturn: true,
					effect: {
						target(card, player, target) {
							if (get.type(card) == 'delay') return 0.5;
						},
					},
				},
			},
			boss_yunjv: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'phaseEnd',
				},
				forced: true,
				filter(event, player) {
					return player.getEnemies().includes(event.player) && event.player.countCards('he') > 0 && event.player != player;
				},
				logTarget: 'player',
				content() {
					if (trigger.player.countCards('h') > 0) {
						var card1 = trigger.player.getCards('h').randomGet();
					}
					if (trigger.player.countCards('e') > 0) {
						var card2 = trigger.player.getCards('e').randomGet();
					}
					if (trigger.player.countCards('e') > 0 && trigger.player.countCards('h') == 0) trigger.player.discard(card2);
					if (trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 0) trigger.player.discard(card1);
					if (trigger.player.countCards('e') > 0 && trigger.player.countCards('h') > 0) trigger.player.discard([card1, card2]);
				},
				ai: {
					expose: 0.2,
				},
			},
			//日夜游神
			boss_duane: {
				trigger: {
					global: 'loseAfter',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					if (event.type != 'discard' || !event.cards2 || !event.cards2.length) return false;
					var evt = event.getParent('phaseDiscard');
					var cards = [];
					for (var i of event.cards2) {
						if (get.color(i) == 'black') cards.add(i);
					}
					return evt && evt.player == event.player && player.getEnemies().includes(evt.player) && evt.player.isIn() && event.cards2 && cards.length;
				},
				forced: true,
				content() {
					trigger.player.loseHp();
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_huiyun: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:太虚幻境/audio/skill:true',
				filterTarget(card, player, target) {
					return player != target && target.countCards('h') && player.getEnemies().includes(target);
				},
				content() {
					'step 0';
					target.showHandcards();
					('step 1');
					player.chooseCardButton(true, target, target.getCards('h'), [1, 2]).set('ai', function (card) {
						return get.value(card);
					});
					('step 2');
					if (result.bool) {
						target.discard(result.links.slice(0));
						var qbx = [];
						if (result.links.slice(0).length > 1) qbx = '或与' + get.translation(result.links[1]);
						player
							.chooseToDiscard(`弃置一张与${get.translation(result.links[0]) + qbx}同名的牌对${get.translation(target)}造成两点伤害`, function (card) {
								var abc = card.name == result.links[0].name;
								if (result.links.slice(0).length > 1) abc = card.name == result.links[0].name || card.name == result.links[1].name;
								return abc;
							})
							.set('ai', function (card) {
								if (get.attitude(player, target) < 0) {
									return 10 - get.value(card);
								}
								return 0;
							});
					}
					('step 3');
					if (result.bool) target.damage(2);
				},
				ai: {
					order: 11,
					result: {
						target(player, target) {
							return -target.countCards('h');
						},
						tag: {
							loseCard: 1,
							damage: 2,
						},
					},
					threaten: 1.1,
				},
			},
			boss_zhoucha: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'red' ? 2 : -1;
					});
					('step 1');
					player.gain(result.card);
					player.$gain2(result.card);
					if (result.judge > 0) {
						player.addTempSkill('boss_zhoucha_xiaoguo');
					}
				},
				subSkill: {
					xiaoguo: {
						marktext: '昼刹',
						mark: true,
						intro: {
							name: '昼刹',
							content: '本回合使用【杀】的次数+2',
						},
						forced: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha') return num + 2;
							},
						},
						popup: false,
					},
				},
			},
			boss_yezhong: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'black' ? 2 : -1;
					});
					('step 1');
					player.gain(result.card);
					player.$gain2(result.card);
					if (result.judge > 0) {
						game.countPlayer(function (current) {
							if (current != player && player.getEnemies().includes(current)) {
								var hs = current.getCards('h');
								if (hs.length) {
									player.line(current);
									current.discard(hs.randomGet()).discarder = player;
								}
							}
						});
					}
				},
			},
			//牛头马面
			boss_xiaoshoua: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player, target) {
					return game.hasPlayer(function (current) {
						return player != current && current.hp >= player.hp && player.getEnemies().includes(current);
					});
				},
				content() {
					'step 0';
					if (
						game.countPlayer(function (current) {
							return current.hp >= player.hp && current != player && player.getEnemies().includes(current);
						}) == 1
					) {
						var list = game
							.filterPlayer(function (current) {
								return current.hp >= player.hp && current != player && player.getEnemies().includes(current);
							})
							.randomGet();
						list.damage(2);
						event.finish();
					} else {
						player.chooseTarget(
							true,
							'选择【枭首】的目标',
							'对其造成2点伤害',
							function (card, player, target) {
								return player != target && target.hp >= player.hp && player.getEnemies().includes(target);
							},
							function (target) {
								var att = get.attitude(player, target);
								return -att && get.damageEffect(target, player, player) > 0;
							}
						);
					}
					('step 1');
					if (result.bool) {
						player.line(result.targets[0]);
						result.targets[0].damage(2);
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_manji: {
				shaRelated: true,
				trigger: {
					player: 'useCardToBefore',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'h') > 0 && event.targets.length == 1;
				},
				forced: true,
				content() {
					'step 0';
					player
						.discardPlayerCard(trigger.target, 'h', get.prompt('boss_manji', trigger.target))
						.set('ai', function (button) {
							if (!_status.event.att) return 0;
							return 1;
						})
						.set('logSkill', ['boss_manji', trigger.target])
						.set('att', get.attitude(player, trigger.target) <= 0);
					('step 1');
					if (result.bool && result.links && result.links.length) {
						if (result.links[0].name == 'sha') {
							trigger.baseDamage++;
							game.log(trigger.card, '造成的伤害基础值加一');
						} else player.gain(result.links[0], 'gain2', 'log');
					}
				},
			},
			boss_shiyv: {
				trigger: {
					player: 'phaseDrawBegin1',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.changeToZero();
					var list = [];
					var list0 = [];
					var list1 = [];
					var list2 = [];
					get.cardPile2(function (card) {
						if (get.suit(card) == 'spade') list.push(card);
					});
					get.cardPile2(function (card2) {
						if (get.suit(card2) == 'heart') list2.push(card2);
					});
					get.cardPile2(function (card1) {
						if (get.suit(card1) == 'club') list1.push(card1);
					});
					get.cardPile2(function (card0) {
						if (get.suit(card0) == 'diamond') list0.push(card0);
					});
					var card = [];
					var cards = [];
					card.push(list.randomGet());
					card.push(list2.randomGet());
					card.push(list1.randomGet());
					card.push(list0.randomGet());
					for (var i = 0; i < card.length; i++) {
						cards.push(card[i]);
					}
					if (cards.length) {
						player.gain(cards, 'draw');
						game.log(player, '获得了', cards);
					}
				},
			},
			boss_guizhao: {
				trigger: {
					player: 'useCard',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				init(player) {
					player.storage.yyy = true;
					player.storage.ababab = true;
					player.storage.biubiubiu = true;
				},
				forced: true,
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					if (player.storage.yyy == false && player.storage.ababab == false && player.storage.biubiubiu == false) return false;
					return true;
				},
				content() {
					if (player.storage.yyy == true && get.type(trigger.card) == 'basic') {
						player.draw();
						player.storage.yyy = false;
					}
					if (player.storage.ababab == true && (get.type(trigger.card) == 'trick' || get.type(trigger.card) == 'delay')) {
						player.draw();
						player.storage.ababab = false;
					}
					if (player.storage.biubiubiu == true && get.type(trigger.card) == 'equip') {
						player.draw();
						player.storage.biubiubiu = false;
					}
				},
				group: 'boss_guizhao_1',
				subSkill: {
					1: {
						trigger: {
							global: 'phaseAfter',
						},
						forced: true,
						charlotte: true,
						forced: true,
						silent: true,
						content() {
							player.storage.yyy = true;
							player.storage.ababab = true;
							player.storage.biubiubiu = true;
						},
						forced: true,
						popup: false,
					},
				},
			},
			//黑白无常
			boss_xixinga: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current) && current != player;
					});
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return current != player && player.getEnemies().includes(current);
					});
				},
				content() {
					game.countPlayer(function (current) {
						if (current != player && player.getEnemies().includes(current)) {
							current.damage('thunder');
						}
					});
					player.recover();
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_taipinga: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return event.source && player.getEnemies().includes(event.source);
				},
				logTarget: 'source',
				content() {
					'step 0';
					event.count = trigger.num;
					('step 1');
					event.count--;
					var next = trigger.source
						.chooseToDiscard('h', 2, '弃置两张花色不同的手牌', function (card) {
							if (ui.selected.cards.length) {
								return get.suit(card) != get.suit(ui.selected.cards[0]);
							}
							return trigger.source.countCards('h');
						})
						.set('complexCard', true);
					next.ai = function (card) {
						var source = _status.event.player;
						if (get.effect(source, { name: 'losehp' }, source, source) >= 0) return 0;
						return 8 - get.value(card);
					};
					('step 2');
					if (result.bool == false) trigger.source.loseHp();
					if (event.count) event.goto(1);
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if ((player.hasSkillTag('jueqing', false, target) || player.hasSkill('shanhe_zhangdu')) && get.tag(card, 'damage')) return [1, -1];
							return 0.8;
							if (get.tag(card, 'damage') && get.damageEffect(target, player, player) > 0) return [1, 0, 0, -1.5];
						},
					},
				},
			},
			boss_mizuia: {
				trigger: {
					source: 'damageSource',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && (event.nature || get.color(event.card) == 'red') && event.player.isIn() && event.player.countCards('he') > 0;
				},
				logTarget: 'player',
				content() {
					player.discardPlayerCard('he', trigger.player, 2, true);
				},
				mod: {
					aiOrder(player, card, num) {
						if (card && card.name == 'sha' && (get.tag(card, 'natureDamage') || get.color(card) == 'red')) return num + 0.1;
					},
				},
			},
			boss_qiangzhenga: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && player.getEnemies().includes(current) && current.countCards('h') < 3 && current.countCards('h') > 0;
					});
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return current != player && player.getEnemies().includes(current) && current.countCards('h') < 3 && current.countCards('h') > 0;
					});
				},
				content() {
					game.countPlayer(function (current) {
						if (current != player && current.countCards('h') < 3 && current.countCards('h') > 0 && player.getEnemies().includes(current)) {
							var card1 = current.getCards('h');
							player.gain(card1, current);
							current.$giveAuto(card1, player);
						}
					});
				},
				ai: {
					expose: 0.2,
				},
			},
			//豹尾
			boss_yinsha: {
				trigger: {
					global: 'phaseUseBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player, target) {
					return event.player.countCards('h') > event.player.maxHp && event.player != player && player.getEnemies().includes(event.player);
				},
				content() {
					player.addTempSkill('boss_yinsha_xiaoguo');
				},
				subSkill: {
					xiaoguo: {
						marktext: '隐煞',
						mark: true,
						intro: {
							name: '隐煞',
							content: '本回合不能成为【杀】的目标',
						},
						forced: true,
						mod: {
							targetEnabled(card, player, target, now) {
								if (card.name == 'sha') return false;
							},
						},
						popup: false,
					},
				},
			},
			boss_eli: {
				trigger: {
					source: 'damageBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				derivation: 'wansha',
				filter(event, player) {
					return !player.getStorage('boss_eli_chosen').includes(event.player) && player.getEnemies().includes(event.player);
				},
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'red' ? 1 : 0;
					});
					player.addTempSkill('boss_eli_chosen', 'phaseAfter');
					player.markAuto('boss_eli_chosen', [trigger.player]);
					('step 1');
					if (result.color == 'red') {
						trigger.num++;
					}
					if (result.color == 'black') {
						player.addTempSkill('wansha');
					}
				},
				subSkill: {
					chosen: {
						charlotte: true,
						intro: { content: '本回合已对$发动过技能' },
					},
				},
			},
			boss_guimeib: {
				audio: 'ext:太虚幻境/audio/skill:true',
				group: ['boss_guimeib_draw', 'boss_guimeib_use'],
				trigger: {
					player: 'turnOverBefore',
				},
				_priority: 20,
				filter(event, player) {
					return !player.isTurnedOver();
				},
				forced: true,
				content() {
					trigger.cancel();
					game.log(player, '取消了翻面');
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'phaseDrawSkipped',
						},
						forced: true,
						content() {
							player.draw();
						},
					},
					use: {
						trigger: {
							player: 'phaseUseSkipped',
						},
						forced: true,
						content() {
							player.addTempSkill('boss_guimeib_xiaoguo');
						},
					},
					xiaoguo: {
						mod: {
							ignoredHandcard(card, player) {
								return true;
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard') return false;
							},
						},
						forced: true,
						fixed: true,
						popup: false,
					},
				},
				ai: {
					noturn: true,
					effect: {
						target(card, player, target) {
							if (get.type(card) == 'delay') return 0.5;
						},
					},
				},
			},
			//鸟嘴
			boss_bingyi: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
				},
				usable: 1,
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					if (player.countCards('h')) return false;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return (current == player || player.getFriends().includes(current)) && current.countCards('h') < 6;
					});
				},
				content() {
					game.countPlayer(function (current) {
						if (current == player || (player.getFriends().includes(current) && current.countCards('h') < 6)) {
							current.drawTo(6);
						}
					});
				},
				ai: {
					expose: 0.2,
					threaten: 0.8,
					effect: {
						target(card) {
							if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
						},
					},
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == 'noh') {
							if (player.countCards('h') != 1) return false;
						}
					},
				},
			},
			boss_suoxue: {
				shaRelated: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				check(event, player) {
					return player.countCards('h') < event.target.countCards('h') || get.attitude(player, event.target) < 0;
				},
				filter(event, player) {
					return event.targets.length == 1 && event.card.name == 'sha' && event.target.countCards('h') != player.countCards('h');
				},
				logTarget: 'target',
				audio: 'ext:太虚幻境/audio/skill:true',
				content() {
					'step 0';
					if (trigger.target.countCards('h') > player.countCards('h')) {
						player.draw(trigger.target.countCards('h') - player.countCards('h'));
						event.finish();
					}
					('step 1');
					player.chooseToDiscard(get.prompt('boss_suoxue'), '弃置一张手牌令此【杀】不能被响应', 'h').set('ai', function (card) {
						return 9 - get.value(card);
					});
					('step 2');
					if (result.bool) {
						trigger.parent.directHit.add(trigger.target);
						game.log(trigger.card, '无法被', trigger.target, '响应');
					}
				},
			},
			//黄蜂
			boss_duzhen: {
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					return player.getEnemies().includes(event.target) && player == _status.currentPhase && event.target.countCards('he') > 0 && event.target != player && (event.card.name == 'sha' || get.type2(event.card) == 'trick');
				},
				logTarget: 'target',
				content() {
					trigger.target.discard(
						trigger.target
							.getCards('he', function (card) {
								if (trigger.target.countCards('e') && get.position(card) != 'e') return false;
								return true;
							})
							.randomGet()
					);
				},
				ai: { expose: 0.2 },
			},
			boss_mingchong: {
				trigger: {
					player: 'die',
				},
				forced: true,
				forceDie: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player, target) {
					return game.hasPlayer(function (current) {
						return current != player && player.getFriends().includes(current);
					});
				},
				content() {
					game.countPlayer(function (current) {
						if (current != player && player.getFriends().includes(current)) {
							var num = current.maxHp - current.countCards('h');
							if (num > 0) current.draw(num);
							current.addSkill('boss_duzhen');
						}
					});
				},
				ai: {
					threaten: 0.7,
				},
			},
			//鱼鳃
			boss_anchao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				marktext: '暗潮',
				mark: true,
				intro: {
					name: '暗潮',
					content(storage, player, skill) {
						var num = player.countMark('boss_anchao');
						if (num == undefined) num = 0;
						return `摸牌阶段多摸${num}张牌且回合内对敌方角色造成的伤害增加+${num}点`;
					},
				},
				trigger: {
					global: 'phaseEnd',
				},
				forced: true,
				filter(event, player) {
					return event.player == player || player.getFriends().includes(event.player);
				},
				content() {
					var numMark = trigger.player.countMark('boss_anchao');
					if (trigger.player.getStat('damage') && numMark != undefined) {
						trigger.player.removeMark('boss_anchao', numMark);
					} else {
						trigger.player.addMark('boss_anchao', 1);
					}
				},
				group: ['boss_anchao_Draw', 'boss_anchao_Damage'],
				subSkill: {
					Draw: {
						trigger: {
							global: 'phaseDrawBegin2',
						},
						forced: true,
						filter(event, player) {
							var numMark = event.player.countMark('boss_anchao');
							return (event.player == player || player.getFriends().includes(event.player)) && numMark;
						},
						content() {
							var numMark = trigger.player.countMark('boss_anchao');
							trigger.num += numMark;
						},
					},
					Damage: {
						trigger: {
							global: 'damageBegin1',
						},
						forced: true,
						filter(event, player) {
							if (event.source == undefined || _status.currentPhase != event.source) return false;
							var numMark = event.source.countMark('boss_anchao');
							return (event.source == player || player.getFriends().includes(event.source)) && event.player != player && player.getEnemies().includes(event.player) && numMark;
						},
						content() {
							var numMark = trigger.source.countMark('boss_anchao');
							trigger.num += numMark;
						},
						ai: {
							damageBonus: true,
						},
					},
				},
			},
			usesha: {
				mod: {
					cardUsable(card, player, num) {
						if (player.side != game.boss.side && card.name == 'sha') {
							return num + 1;
						}
					},
				},
			},
			boss_guixi: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				content() {
					'step 0';
					player.judge(function (card) {
						return get.suit(card) == 'heart' ? 1 : -1;
					});
					('step 1');
					if (result.suit == 'heart') {
						player.recover();
					} else {
						player.loseHp();
					}
				},
			},
			//鬼王
			boss_jizhou1: {
				trigger: {
					global: 'phaseUseAfter',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player, target) {
					if (player.storage.boss_danshi == '' || player.storage.boss_danshi == undefined) player.storage.boss_danshi = 0;
					return player.getEnemies().includes(event.player);
				},
				content() {
					'step 0';
					player.judge();
					('step 1');
					var num = result.number;
					var next = trigger.player.chooseToDiscard(`疾咒:弃置任意张点数之和大于${get.cnNumber(num)}的牌,否则失去1点体力`, 'he');
					next.set('num', num);
					next.set('complexCard', true);
					next.set('selectCard', function () {
						var num = 0;
						if (Array.isArray(ui.selected.cards))
							for (var i of ui.selected.cards) {
								num += get.number(i);
							}
						if (num > _status.event.num) return [ui.selected.cards.length, _status.event.player.countCards('he')];
						return ui.selected.cards.length + 2;
					});
					next.set('ai', function (card) {
						var player = _status.event.player;
						var num = _status.event.num;
						var numx = 0;
						for (var i of ui.selected.cards) {
							numx += i.number;
						}
						if (numx > num && _status.event.player.countCards('he') < 3) return 0;
						if (numx > num && _status.event.player.countCards('he') > 3 && ui.selected.cards.length >= 3) return 0;
						if (card.number + numx > num) return 9 - get.value(card);
						return Math.max(9 - get.value(card), card.number);
					});
					('step 2');
					if (result.bool) {
						if (result.cards.length > 2) {
							if (player.storage.boss_danshi == '' || player.storage.boss_danshi == undefined) player.storage.boss_danshi = 1;
							else player.storage.boss_danshi++;
							player.update();
						}
					} else trigger.player.loseHp();
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_danshi: {
				init(player) {
					player.storage.boss_danshi = 0;
				},
				marktext: '噬',
				mark: true,
				intro: {
					name: '啖噬',
					content(storage, player, skill) {
						var num = player.storage.boss_danshi;
						if (num == undefined) num = 0;
						return `当前有${num}枚<噬>标记,下次受到的伤害增加${num}点`;
					},
				},
				trigger: {
					player: 'damageBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player, target) {
					return player.storage.boss_danshi > 0;
				},
				content() {
					var rbq = player.storage.boss_danshi;
					trigger.num += rbq;
					player.storage.boss_danshi--;
					player.update();
				},
			},
			boss_chihu: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.countCards('h') < current.countCards('h') && !event.numFixed;
					});
				},
				content() {
					trigger.num += 2;
				},
				group: 'boss_chihu_1',
				subSkill: {
					1: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						audio: 'boss_chihu',
						filter(event, player) {
							return game.hasPlayer(function (current1) {
								return player.hp < current1.hp;
							});
						},
						content() {
							trigger.num++;
						},
					},
				},
			},
			boss_tiemianhong1: {
				trigger: {
					target: 'useCardToTargeted',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					if (!event.card) return false;
					var num = Math.random();
					return num <= 0.75 && get.color(event.card) == 'red' && event.card.name == 'sha';
				},
				forced: true,
				content() {
					trigger.parent.excluded.add(player);
					game.log(trigger.card, '对', player, '无效');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.color(card) == 'red' && card.name == 'sha') return 0.5;
						},
					},
				},
			},
			//阎罗王
			boss_difua: {
				trigger: {
					global: 'phaseUseBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player, target) {
					return player.getEnemies().includes(event.player) && event.player.countCards('h') > event.player.maxHp;
				},
				forced: true,
				content() {
					var num = trigger.player.countCards('h') - trigger.player.maxHp;
					trigger.player.chooseToDiscard('h', num, true).set('ai', function (card) {
						return 6 - get.value(card);
					});
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_zhennub: {
				init(player) {
					player.storage.boss_zhennub = true;
				},
				trigger: { player: ['damageEnd', 'loseHpEnd', 'dyingAfter'] },
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				skillAnimation: true,
				animationColor: 'metal',
				filter(event, player) {
					return player.hp <= 8 && player.storage.boss_zhennub == true && !_status.dying.length;
				},
				content() {
					'step 0';
					player.draw(5);
					//player.insertPhase();
					player.storage.boss_zhennub = false;
					/*'step 1'	
					while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
					}*/
				},
			},
			boss_xingpan: {
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.getEnemies().includes(current) && current != player;
					});
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				content() {
					'step 0';
					event.target = [];
					game.countPlayer(function (current) {
						if (player.getEnemies().includes(current) && current != player) {
							event.target.push(current);
							event.xueliang = current.hp;
							event.shoupai = current.countCards('h');
							event.mubiao = current;
							event.mubiao2 = current;
						}
					});
					('step 1');
					if (event.target.length) {
						for (var i = 0; i < event.target.length; i++) {
							if (event.xueliang < event.target[i].hp) {
								event.mubiao = event.target[i];
								event.xueliang = event.target[i].hp;
							} else {
								if (event.mubiao != event.target[i] && event.xueliang == event.target[i].hp && event.mubiao) delete event.mubiao;
							}
							if (event.shoupai < event.target[i].countCards('h')) {
								event.mubiao2 = event.target[i];
								event.shoupai = event.target[i].countCards('h');
							} else {
								if (event.mubiao2 != event.target[i] && event.shoupai == event.target[i].countCards('h') && event.mubiao2) delete event.mubiao2;
							}
						}
					}
					('step 2');
					var func = function (result) {
						if (get.color(result) == 'red' && event.mubiao2) return 10;
						if (get.color(result) == 'black' && event.mubiao) return 1;
						return -1;
					};
					player.judge(func);
					('step 3');
					event.color = result.color;
					if (event.color == 'red' && event.mubiao2) {
						if (event.shoupai % 2 == 0) event.num = event.shoupai / 2;
						else event.num = (event.shoupai - 1) / 2;
						if (event.num > 0) {
							event.mubiao2.chooseCard(`〖刑判〗交给${get.translation(player) + get.cnNumber(event.num)}张手牌`, true, event.num).set('ai', function (card) {
								return 7 - get.value(card);
							});
						}
					}
					if (event.color == 'black' && event.mubiao) {
						event.mubiao.loseHp();
						event.finish();
					}
					('step 4');
					if (result.bool) {
						player.gain(result.cards, event.mubiao2, 'giveAuto');
					}
				},
			},
			boss_dianwei: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				content() {
					'step 0';
					game.countPlayer(function (current) {
						if (player.getEnemies().includes(current) && !current.countCards('e')) {
							player.useCard({ name: 'sha' }, current, false, 'noai');
						}
					});
					('step 1');
					game.countPlayer(function (current) {
						if (player.getEnemies().includes(current) && current.countCards('e')) {
							var eq = current.getCards('e');
							if (eq.length) {
								current.discard(eq.randomGet());
							}
						}
					});
				},
				ai: {
					expose: 0.2,
				},
			},
			boss_xuanpan: {
				mark: true,
				marktext: '宣判',
				init(player) {
					player.storage.xuanpandamage = 0;
					player.storage.xuanpandiscard = 0;
					player.storage.xuanpandraw = 0;
					player.storage.xuanpanrecover = 0;
				},
				intro: {
					name: '宣判',
					mark(dialog, content, player) {
						if (player.storage.xuanpandamage > 0) dialog.addText(`你已累计受到${player.storage.xuanpandamage}点伤害`);
						if (player.storage.xuanpandiscard > 0) dialog.addText(`你已累计弃置${player.storage.xuanpandiscard}张牌`);
						if (player.storage.xuanpandraw > 0) dialog.addText(get.translation(_status.currentPhase) + `已累计摸了${player.storage.xuanpandraw}张牌`);
						if (player.storage.xuanpanrecover > 0) dialog.addText(get.translation(_status.currentPhase) + `已累计回复了${player.storage.xuanpanrecover}点体力`);
					},
				},
				trigger: {
					player: ['damageEnd', 'discardEnd'],
					global: ['drawEnd', 'recoverEnd', 'phaseEnd'],
				},
				filter(event, player, name) {
					if (name == 'damageEnd') return event.source != player && player.getEnemies().includes(event.source) && _status.currentPhase == event.source && event.num > 0;
					if (name == 'drawEnd' || name == 'recoverEnd' || name == 'phaseEnd') return event.player != player && player.getEnemies().includes(event.player) && _status.currentPhase == event.player;
					if (name == 'discardEnd') return player.getEnemies().includes(_status.currentPhase) && _status.currentPhase != player;
				},
				forced: true,
				charlotte: true,
				content() {
					var name = event.triggername;
					if (name == 'damageEnd') player.storage.xuanpandamage += trigger.num;
					if (name == 'discardEnd') player.storage.xuanpandiscard += trigger.cards.length;
					if (name == 'drawEnd') player.storage.xuanpandraw += trigger.num;
					if (name == 'recoverEnd') player.storage.xuanpanrecover += trigger.num;
					if (name == 'phaseEnd') {
						if (player.storage.xuanpandamage > 3) {
							trigger.player.damage([0, 1, 2, 3, 4].randomGet());
						}
						if (player.storage.xuanpandamage > 0) player.storage.xuanpandamage = 0;
						if (player.storage.xuanpandiscard > 3) {
							var num = [998, 999, 1000, 1000].randomGet();
							if (num == 999) {
								trigger.player.discard('he', trigger.player.getCards('he').randomGet(), true);
							}
							if (num == 1000) {
								trigger.player.discard('he', trigger.player.getCards('he').randomGets([2, 3].randomGet()), true);
							}
						}
						if (player.storage.xuanpandiscard > 0) player.storage.xuanpandiscard = 0;
						if (player.storage.xuanpandraw > 7) {
							player.draw([0, 1, 2, 3, 4, 5, 6, 7, 8].randomGet());
						}
						if (player.storage.xuanpandraw > 0) player.storage.xuanpandraw = 0;
						if (player.storage.xuanpanrecover > 2) {
							player.recover([0, 1, 2, 3].randomGet());
						}
						if (player.storage.xuanpanrecover > 0) player.storage.xuanpanrecover = 0;
					}
				},
			},
			boss_tiemianhong: {
				trigger: {
					target: 'useCardToTargeted',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				filter(event, player) {
					if (!event.card) return false;
					var num = Math.random();
					return num <= 0.75 && get.color(event.card) == 'red' && event.card.name == 'sha';
				},
				forced: true,
				content() {
					trigger.parent.excluded.add(player);
					game.log(trigger.card, '对', player, '无效');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.color(card) == 'red' && card.name == 'sha') return 0.5;
						},
					},
				},
			},
			//魁拔之战
			//幽弥狂
			Kuiba_wuyao: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.source && event.num > 0;
				},
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						return get.color(card) == 'black' ? 2 : -2;
					});
					('step 1');
					if (result.judge > 0) {
						trigger.num--;
						if (player.getEnemies().includes(trigger.source) && trigger.source != player && player.countCards('hs', { name: 'sha' })) {
							player.discard(player.getCards('h', { name: 'sha' }).randomGet());
							player.useCard({ name: 'sha' }, trigger.source, false, 'noai');
						}
					}
				},
			},
			Kuiba_sanjian: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.player.countCards('he');
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.player.chooseToDiscard('he', 2, true);
				},
			},
			Kuiba_baizhan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					var cards = [];
					for (var i = 0; i < 2; i++) {
						var card = get.cardPile2(function (card) {
							return card.name == 'sha' && !cards.includes(card);
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, 'gain2');
				},
			},
			//灵守军
			Kuiba_lingshou: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'damageBegin4',
				},
				filter(event, player) {
					return event.player != player && player.getFriends().includes(event.player);
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.num--;
					player.loseHp();
					if (trigger.source && trigger.source.countCards('he') > 0) trigger.source.chooseToDiscard(3, 'he', true);
				},
				ai: {
					expose: 0.2,
				},
			},
			Kuiba_lingshan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.card && ['spade', 'diamond'].includes(get.suit(event.card, event.player));
				},
				forced: true,
				content() {
					trigger.num--;
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!['spade', 'diamond'].includes(get.suit(card, player))) return;
							if (player.hasSkillTag('jueqing', false, target) || player.hasSkill('shanhe_zhangdu') || player.hasSkillTag('damageBonus', false, { target: target, card: card })) return;
							var num = get.tag(card, 'damage');
							if (num > 0) {
								if (num > 1) return 0.5;
								return 0;
							}
						},
					},
				},
			},
			//灵乱军
			Kuiba_lingluan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return event.player.countCards('he') > 0 && event.player != player && player.getEnemies().includes(event.player);
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.player.chooseToDiscard(2, 'he', true);
				},
				ai: {
					expose: 0.2,
				},
			},
			//觉醒幽弥狂
			Kuiba_yiyou: {
				derivation: ['new_yijue', 'tianyi'],
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.judge().set('callback', function () {
						var player = _status.event.player;
						if (get.position(card, true) == 'o') player.gain(card, 'gain2');
					});
					('step 1');
					player.addTempSkill(result.color == 'red' ? 'new_yijue' : 'tianyi');
				},
			},
			//海问香
			Kuiba_wenjia: {
				derivation: ['decadewuniang', 'wushuang'],
				mark: true,
				marktext: '击毁',
				intro: {
					content: 'mark',
					name: '纹甲',
				},
				group: ['Kuiba_wenjia_yingzi', 'Kuiba_wenjia_damage'],
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'dieAfter',
				},
				forced: true,
				content() {
					player.addMark('Kuiba_wenjia', 1);
					var num = player.countMark('Kuiba_wenjia');
					if (num == 1) player.addSkillLog('decadewuniang');
					if (num == 2) player.addSkillLog('wushuang');
				},
				subSkill: {
					yingzi: {
						audio: 'Kuiba_wenjia',
						trigger: {
							player: 'phaseDrawBegin2',
						},
						filter(event, player) {
							return !event.numFixed && player.countMark('Kuiba_wenjia') > 0;
						},
						forced: true,
						content() {
							trigger.num += player.countMark('Kuiba_wenjia');
						},
						ai: {
							threaten: 1.6,
						},
					},
					damage: {
						audio: 'Kuiba_wenjia',
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							return player.countMark('Kuiba_wenjia') >= 3;
						},
						forced: true,
						content() {
							trigger.num++;
						},
					},
				},
			},
			Kuiba_huanguang: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCard2',
				},
				filter(event, player) {
					if (
						!player.isPhaseUsing() ||
						get.type(event.card) != 'trick' ||
						player.getHistory('useCard', function (evt) {
							return get.type(evt.card) == 'trick';
						}).length > 4
					)
						return false;
					if (event.targets && event.targets.length) return true;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
							})
						)
							return true;
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					var prompt2 = `为${get.translation(trigger.card)}增加或减少一个目标`;
					player
						.chooseTarget(get.prompt('Kuiba_huanguang'), function (card, player, target) {
							var player = _status.event.player;
							if (_status.event.targets.includes(target)) return true;
							return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
						})
						.set('prompt2', prompt2)
						.set('ai', function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
						})
						.set('targets', trigger.targets)
						.set('card', trigger.card);
					('step 1');
					if (result.bool) {
						event.targets = result.targets;
					} else event.finish();
					('step 2');
					if (event.targets) {
						if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
						else trigger.targets.addArray(event.targets);
					}
				},
			},
			Kuiba_linyao: {
				mod: {
					targetEnabled(card, player, target) {
						if (player.getEnemies().includes(target) && get.color(card) == 'red' && get.type2(card) == 'trick') return false;
					},
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				inherit: 'shixin',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.nature == 'fire';
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'fireDamage')) return 0;
						},
					},
				},
			},
			Kuiba_jinghong: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return get.color(event.card, player) != 'none' && get.type2(event.card) == 'trick';
				},
				forced: true,
				content() {
					var color = ['red', 'black'];
					color.remove(get.color(trigger.card, player));
					color = color[0];
					var card = get.cardPile2(function (card) {
						return get.color(card) == color;
					});
					if (card) player.gain(card, 'gain2');
				},
			},
			//圣捷军
			Kuiba_shengmeng: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.card && ['heart', 'club'].includes(get.suit(event.card, event.player));
				},
				forced: true,
				content() {
					trigger.num--;
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!['heart', 'club'].includes(get.suit(card, player))) return;
							if (player.hasSkillTag('jueqing', false, target) || player.hasSkill('shanhe_zhangdu') || player.hasSkillTag('damageBonus', false, { target: target, card: card })) return;
							var num = get.tag(card, 'damage');
							if (num > 0) {
								if (num > 1) return 0.5;
								return 0;
							}
						},
					},
				},
			},
			Kuiba_shengjie: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'useCard',
				},
				filter(event, player, name) {
					return (
						event.player != player &&
						player.getEnemies().includes(event.player) &&
						event.card &&
						get.type(event.card) == 'trick' &&
						game.hasPlayer(function (current) {
							return (current == player || player.getFriends().includes(current)) && event.targets.includes(current);
						})
					);
				},
				forced: true,
				logTarget: 'targets',
				content() {
					game.asyncDraw(trigger.targets, 2);
				},
				ai: {
					expose: 0.2,
				},
			},
			//圣助军
			Kuiba_shengzhu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return player.getFriends().includes(event.player) || event.player == player;
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.player.draw(2);
				},
				ai: {
					expose: 0.2,
				},
			},
			//卡拉肖克潘
			Kuiba_wangjian: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				logTarget: 'target',
				content() {
					trigger.target.addTempSkill('qinggang2');
					trigger.target.storage.qinggang2.add(trigger.card);
					var id = trigger.target.playerid;
					var map = trigger.parent.customArgs;
					if (!map[id]) map[id] = {};
					if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
					map[id].extraDamage++;
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.name == 'sha') return true;
						return false;
					},
				},
			},
			Kuiba_tianyi: {
				audio: 'ext:太虚幻境/audio/skill:true',
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (result.bool) {
						player.addTempSkill('Kuiba_tianyi2');
					} else {
						player.addTempSkill('Kuiba_tianyi3');
					}
				},
				ai: {
					order(name, player) {
						var cards = player.getCards('h');
						if (player.countCards('h', 'sha') == 0) {
							return 1;
						}
						if (Array.isArray(cards))
							for (var i of cards) {
								if (i.name != 'sha' && get.number(i) > 11 && get.value(i) < 7) {
									return 9;
								}
							}
						return get.order({ name: 'sha' }) - 1;
					},
					result: {
						player(player) {
							if (player.countCards('h', 'sha') > 0) return 0.6;
							var num = player.countCards('h');
							if (num > player.hp) return 0;
							if (num == 1) return -2;
							if (num == 2) return -1;
							return -0.7;
						},
						target(player, target) {
							var num = target.countCards('h');
							if (num == 1) return -1;
							if (num == 2) return -0.7;
							return -0.5;
						},
					},
					threaten: 1.3,
				},
			},
			Kuiba_tianyi2: {
				mod: {
					targetInRange(card, player, target, now) {
						if (card.name == 'sha') return true;
					},
					selectTarget(card, player, range) {
						if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
				charlotte: true,
			},
			Kuiba_tianyi3: {
				mod: {
					cardEnabled(card) {
						if (card.name == 'sha') return false;
					},
				},
				charlotte: true,
			},
			Kuiba_zhuandui: {
				group: ['Kuiba_zhuandui_use', 'Kuiba_zhuandui_respond'],
				audio: 'ext:太虚幻境/audio/skill:true',
				subSkill: {
					use: {
						audio: 'Kuiba_zhuandui',
						trigger: {
							player: 'useCardToPlayered',
						},
						check(event, player) {
							return get.attitude(player, event.target) < 0;
						},
						filter(event, player) {
							return event.card && event.card.name == 'sha' && player.canCompare(event.target);
						},
						logTarget: 'target',
						content() {
							'step 0';
							player.chooseToCompare(trigger.target);
							('step 1');
							if (result.bool) {
								trigger.parent.directHit.add(trigger.target);
								game.log(trigger.card, '无法被', trigger.target, '响应');
							}
						},
					},
					respond: {
						audio: 'Kuiba_zhuandui',
						trigger: {
							target: 'useCardToTargeted',
						},
						check(event, player) {
							return get.effect(player, event.card, event.player, player) < 0;
						},
						filter(event, player) {
							return event.card && event.card.name == 'sha' && player.canCompare(event.player);
						},
						logTarget: 'player',
						content() {
							'step 0';
							player.chooseToCompare(trigger.player);
							('step 1');
							if (result.bool) {
								trigger.parent.excluded.add(player);
								game.log(trigger.card, '对', player, '无效');
							}
						},
					},
				},
				shaRelated: true,
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (player._Kuiba_zhuandui_temp) return false;
						player._Kuiba_zhuandui_temp = true;
						var bool = (function () {
							if ((arg && arg.card.name != 'sha') || get.attitude(player, arg.target) >= 0 || !arg.target.countCards('h')) return false;
							if (
								arg &&
								arg.target.countCards('h') == 1 &&
								(!arg.target.getEquip('bagua') ||
									player.hasSkillTag('unequip', false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}) ||
									player.hasSkillTag('unequip', false, {
										name: arg.card ? arg.card.name : null,
										target: arg.target,
										card: arg.card,
									}))
							)
								return true;
							return (
								player.countCards('h', function (card) {
									return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) <= 4 && (get.number(card) >= 11 + arg.target.countCards('h') / 2 || get.suit(card, player) == 'heart');
								}) > 0
							);
						})();
						delete player._Kuiba_zhuandui_temp;
						return bool;
					},
					effect: {
						target(card, player, target, current) {
							if (card.name == 'sha' && current < 0) return 0.7;
						},
					},
				},
			},
			Kuiba_tianbian: {
				audio: 'ext:太虚幻境/audio/skill:true',
				enable: 'chooseCard',
				check(event, player) {
					var player = _status.event.player;
					return !player.hasCard(function (card) {
						var val = get.value(card);
						return val < 0 || (val <= 4 && (get.number(card) >= 11 || get.suit(card) == 'heart'));
					}, 'h')
						? 20
						: 0;
				},
				filter(event, player) {
					return event.type == 'compare' && !event.directresult;
				},
				onCompare(player) {
					return game.cardsGotoOrdering(get.cards()).cards;
				},
				group: 'Kuiba_tianbian_number',
				subSkill: {
					number: {
						trigger: {
							player: 'compare',
							target: 'compare',
						},
						filter(event, player) {
							if (event.iwhile) return false;
							if (event.player == player) {
								return get.suit(event.card1) == 'heart'; //&&event.card1.vanishtag.includes('Kuiba_tianbian');
							} else {
								return get.suit(event.card2) == 'heart'; //&&event.card2.vanishtag.includes('Kuiba_tianbian');
							}
						},
						forced: true,
						content() {
							game.log(player, '拼点牌点数视为', '#yK');
							if (player == trigger.player) {
								trigger.num1 = 13;
							} else {
								trigger.num2 = 13;
							}
						},
						forced: true,
						popup: false,
					},
				},
			},
			//圣斗军
			Kuiba_shengdou: {
				global: 'Kuiba_shengdou_buff',
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					return (
						!event.card.Kuiba_shengdou &&
						event.card &&
						event.card.name == 'sha' &&
						(player.getFriends().includes(event.player) || event.player == player) &
						game.hasPlayer(function (current) {
							return !event.targets.includes(current) && current.inRangeOf(event.player);
						})
					);
				},
				forced: true,
				content() {
					'step 0';
					trigger.card.Kuiba_shengdou = true;
					player.chooseBool(get.prompt2('Kuiba_shengdou', trigger.player));
					('step 1');
					if (result.bool) {
						trigger.player
							.chooseTarget(`为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
								var evt = _status.event.getTrigger(),
									player = trigger.player;
								return !evt.targets.includes(target) && lib.filter.filterTarget(evt.card, player, target);
							})
							.set('ai', function (target) {
								var evt = _status.event.getTrigger(),
									eff = get.effect(target, evt.card, evt.player, evt.player);
								return eff;
							});
					} else event.finish();
					('step 2');
					if (result.bool) {
						var target = result.targets[0];
						trigger.player.line(target);
						game.log(target, '成为了', trigger.card, '的额外目标');
						trigger.targets.push(target);
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			//圣护军
			Kuiba_shenghu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'damageBegin4',
				},
				filter(event, player) {
					return event.player != player && (player.getFriends().includes(event.player) || event.player == player);
				},
				forced: true,
				logTarget: 'player',
				content() {
					trigger.num--;
					player.loseHp();
					game.asyncDraw([player, trigger.player], [1, 2]);
				},
				ai: {
					expose: 0.2,
				},
			},
			//灵战军
			Kuiba_lingzhan: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'damageBegin1',
				},
				filter(event, player) {
					return event.source && (player.getFriends().includes(event.source) || event.source == player) && _status.currentPhase == event.source && !event.source.getHistory('sourceDamage').length;
				},
				forced: true,
				logTarget: 'source',
				content() {
					trigger.num++;
				},
				ai: {
					expose: 0.2,
				},
			},
			//灵迅军
			Kuiba_lingxun: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.player.countCards('h') > 0 && (player.getFriends().includes(event.target) || event.target == player) && event.player != player && player.getEnemies().includes(event.player);
				},
				forced: true,
				logTarget: 'player',
				content() {
					player.gain(trigger.player.getCards('h').randomGet(), trigger.player, 'giveAuto');
				},
				ai: {
					expose: 0.2,
				},
			},
			//镜心
			Kuiba_tianshen: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return get.type(event.card, 'trick') == 'trick';
				},
				forced: true,
				content() {
					trigger.cancel();
				},
				ai: {
					notrick: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'trick' && get.tag(card, 'damage')) return 0;
						},
					},
				},
			},
			Kuiba_guangshi: {
				mark: true,
				marktext: '光势',
				intro: {
					content: 'mark',
					name: '光势',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['phaseJieshuBegin', 'damageEnd'],
				},
				filter(event, player, name) {
					var num = player.countMark('Kuiba_guangshi');
					if (name == 'phaseJieshuBegin') return num < 3;
					return num > 0;
				},
				forced: true,
				content() {
					if (event.triggername == 'phaseJieshuBegin') player.addMark('Kuiba_guangshi', 3);
					else player.removeMark('Kuiba_guangshi', 1);
				},
			},
			Kuiba_guangmie: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				limited: true,
				skillAnimation: true,
				animationColor: 'thunder',
				filter(event, player) {
					return player.countMark('Kuiba_guangshi') > 2;
				},
				check(event, player) {
					var friend = 0,
						enemy = 0;
					for (var target of game.players) {
						if (target != player) {
							if (get.attitude(player, target) > 0) friend += target.hp;
							else enemy += target.hp;
						}
					}
					return enemy >= friend;
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return player.getEnemies().includes(current) && current != player;
					});
				},
				content() {
					player.awakenSkill('Kuiba_guangmie');
					var num = player.countMark('Kuiba_guangshi');
					player.removeMark('Kuiba_guangshi', num);
					event.forceDie = true;
					for (var target of game.players) {
						if (player.getEnemies().includes(target) && target != player) target.loseHp(num);
					}
				},
				ai: {
					combo: 'Kuiba_guangshi',
				},
				mark: true,
				intro: {
					content: 'limited',
				},
				init(player, skill) {
					player.storage[skill] = false;
				},
			},
			//魁拔蛮吉
			Kuiba_kuiti: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				content() {
					trigger.num--;
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (player.hasSkillTag('jueqing', false, target) || player.hasSkill('shanhe_zhangdu') || player.hasSkillTag('damageBonus', false, { target: target, card: card })) return;
							if (player.hasSkill('huomai')) return;
							if (get.tag(card, 'damage') && get.tag(card, 'damage') == 1 && !player.hasSkillTag('damageBonus', false, { target: target, card: card }) && card.name == 'sha') return [0, 1];
						},
					},
				},
			},
			Kuiba_bachong: {
				shaRelated: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				audio: 'ext:太虚幻境/audio/skill:true',
				logTarget: 'target',
				content() {
					'step 0';
					var target = trigger.target;
					var num = target.countCards('h', 'shan');
					target
						.chooseToDiscard('请弃置一张牌,否则不能使用闪抵消此杀', 'he', 1)
						.set('ai', function (card) {
							var num = _status.event.num;
							if (num == 0) return 0;
							if (card.name == 'shan') return num > 1 ? 2 : 0;
							return 8 - get.value(card);
						})
						.set('num', num);
					('step 1');
					if (!result.bool) {
						trigger.parent.directHit.add(trigger.target);
						game.log(trigger.card, '无法被', trigger.target, '响应');
					}
				},
			},
			Kuiba_qiheng: {
				skillAnimation: true,
				animationColor: 'thunder',
				derivation: ['Kuiba_Kuiba'],
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				audio: 'ext:太虚幻境/audio/skill:true',
				forced: true,
				juexingji: true,
				filter(event, player) {
					return player.hp < player.maxHp / 2;
				},
				content() {
					player.awakenSkill('Kuiba_qiheng');
					var list = ['basic', 'equip', 'trick'],
						cards = [];
					for (var i of list) {
						var card = get.cardPile2(function (card) {
							return get.type(card) == i;
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, 'gain2');
					player.addSkill('Kuiba_Kuiba');
				},
			},
			Kuiba_Kuiba: {
				group: ['Kuiba_Kuiba_yingzi', 'Kuiba_Kuiba_damage'],
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: ['useCard2', 'useCardToPlayer'],
				},
				forced: true,
				filter(event, player) {
					return (
						['sha', 'juedou'].includes(event.card.name) &&
						game.hasPlayer(function (current) {
							return player.getEnemies().includes(current) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
						})
					);
				},
				logTarget(event, player) {
					return game.filterPlayer(function (current) {
						return player.getEnemies().includes(current) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
					});
				},
				content() {
					var targets2 = game.filterPlayer(function (current) {
						return player.getEnemies().includes(current) && !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
					});
					targets2.sort(lib.sort.seat);
					trigger.targets.addArray(targets2);
					player.line(targets2);
					game.log(targets2, '成为了', trigger.card, '的目标');
				},
				subSkill: {
					yingzi: {
						audio: 'Kuiba_Kuiba',
						trigger: {
							player: 'phaseDrawBegin2',
						},
						filter(event, player) {
							return !event.numFixed;
						},
						forced: true,
						content() {
							trigger.num += 2;
						},
						ai: {
							threaten: 1.3,
						},
					},
					damage: {
						audio: 'Kuiba_Kuiba',
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							return event.card && ['sha', 'juedou'].includes(event.card.name) && player.inRange(event.player);
						},
						forced: true,
						content() {
							trigger.num++;
						},
					},
				},
			},
			//觉醒蛮吉
			Kuiba_kuiqu: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return event.num > 0;
				},
				forced: true,
				content() {
					'step 0';
					event.count = trigger.num;
					('step 1');
					event.count--;
					player.draw();
					if (trigger.source && player.getEnemies().includes(trigger.source) && trigger.source != player && trigger.source.countCards('he')) {
						player.line(trigger.source);
						trigger.source.discard(trigger.source.getCards('he').randomGet());
					}
					('step 2');
					if (event.count > 0) event.goto(1);
				},
			},
			Kuiba_juli: {
				audio: 'ext:太虚幻境/audio/skill:true',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return (
						(event.card &&
							event.card.name == 'sha' &&
							game.hasPlayer(function (current) {
								return current != player && get.distance(player, current) == 1;
							})) ||
						(event.card &&
							((get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)) || get.type(event.card) == 'trick') &&
							game.hasPlayer(function (current) {
								return current != player && get.distance(current, player) > 1;
							}))
					);
				},
				forced: true,
				content() {
					if (
						trigger.card &&
						trigger.card.name == 'sha' &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) == 1;
						})
					) {
						trigger.baseDamage +=
							game.countPlayer(function (current) {
								return current != player && get.distance(player, current) == 1;
							}) - 1;
						game.log(
							trigger.card,
							'造成的伤害基础值改为',
							game.countPlayer(function (current) {
								return current != player && get.distance(player, current) == 1;
							})
						);
					}
					if (
						trigger.card &&
						((get.type(trigger.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(trigger.card.name)) || get.type(trigger.card) == 'trick') &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(current, player) > 1;
						})
					) {
						trigger.directHit.addArray(
							game.filterPlayer(function (current) {
								return current != player && get.distance(current, player) > 1;
							})
						);
						game.log(
							trigger.card,
							'无法被',
							game.filterPlayer(function (current) {
								return current != player && get.distance(current, player) > 1;
							}),
							'响应'
						);
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						return get.distance(arg.target, player) > 1;
					},
				},
			},
			txhouyuankb: {
				audio: 2,
				enable: 'chooseToUse',
				forced: true,
				mark: true,
				limited: true,
				skillAnimation: true,
				animationColor: 'orange',
				init(player) {
					player.storage.txhouyuankb = false;
				},
				filter(event, player) {
					if (player.storage.txhouyuankb) return false;
					if (event.type == 'dying') {
						if (player != event.dying) return false;
						return true;
					} else if (event.parent.name == 'phaseUse') {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill('txhouyuankb');
					player.storage.txhouyuankb = true;
					player.discard(player.getCards('hj'));
					('step 1');
					player.uninit();
					player.init('txhj_kbmanjijx');
					('step 2');
					player.link(false);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.draw(4);
					('step 5');
					if (player.hp < 3) {
						player.recover(player.maxHp);
					}
				},
				ai: {
					order: 0.5,
					skillTagFilter(player, tag, target) {
						if (player != target || player.storage.txhouyuankb) return false;
					},
					save: true,
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
							return 0;
						},
					},
					threaten(player, target) {
						if (!target.storage.txhouyuankb) return 0.6;
					},
				},
				intro: {
					content: 'limited',
				},
			},
			//区分线
			txhj_oldhuxiao: {
				shaRelated: true,
				audio: 'huxiao',
				trigger: { player: 'shaMiss' },
				forced: true,
				content() {
					if (player.stat[player.stat.length - 1].card.sha > 0) {
						player.stat[player.stat.length - 1].card.sha--;
					}
				},
			},
		},
		translate: {
			//魔改魁拔之战+超时空密探
			txhj_PveKuibaSkMitan: '魁拔密探',
			txhj_skcaopi: '曹丕傀儡',
			txhj_skwannian: '万年公主傀儡',
			txhj_meihuashisan: '♣️十三',
			txhj_mitan: '密探',
			txhj_wuliuqi: '伍六七',
			txhj_mengpo: '孟婆',
			txhj_riyeyoushen: '日夜游神',
			txhj_niutoumamian: '牛头马面',
			txhj_heibaiwuchang: '黑白无常',
			txhj_baowei: '豹尾',
			txhj_niaozui: '鸟嘴',
			txhj_huangfeng: '黄蜂',
			txhj_yusai: '鱼鳃',
			txhj_guiwang: '鬼王',
			txhj_yanluowang: '阎罗王',
			txhj_lingshoujun: '灵守军',
			txhj_lingluanjun: '灵乱军',
			txhj_youmikuang: '幽弥狂',
			txhj_youmikuangjx: '幽弥狂',
			txhj_haiwenxiangjx: '海问香',
			txhj_haiwenxiang: '海问香',
			txhj_shengjiejun: '圣捷军',
			txhj_shengzhujun: '圣助军',
			txhj_kalaxiaokepanjx: '卡拉肖克潘',
			txhj_kalaxiaokepan: '卡拉肖克潘',
			txhj_shengdoujun: '圣斗军',
			txhj_shenghujun: '圣护军',
			txhj_lingxunjun: '灵迅军',
			txhj_lingzhanjun: '灵战军',
			txhj_jingxin: '镜心',
			txhj_kbmanjijx: '蛮吉',
			txhj_kbmanji: '蛮吉',
			//副本PVE系列关卡扩增	
			/*仲夜观星+神武再世*/
			/*龙舟争渡+天书乱斗*/
			txhj_taoshen: "涛神",
			txhj_lzcaoe: "曹娥",
			txhj_zuogu: "左鼓",
			txhj_yougu: "右鼓",
			/*小姐姐队友*/
			txhj_xiahoulan: '夏侯岚',
			txhj_xiahouzie: '夏侯紫萼',
			txhj_zhangwei: '张崴',
			/*捉鬼驱邪+山海志异NPC.*/
			txhj_yeshiwen: '叶诗文',
			txhj_sunyang: '孙杨',
			txhj_sunwukong: '孙悟空',
			txhj_longwang: '东海龙王',
			txhj_qiliny: '麒麟',
			txhj_hundun: '混沌',
			txhj_taotie: '饕餮',
			txhj_zhuyin: '烛阴',
			txhj_dahu: '大虎',
			txhj_xuanwufaxiang: '玄武法相',
			txhj_zhuquefaxiang: '朱雀法相',
			txhj_zhuquezhenshen: '朱雀真身',
			txhj_xuanwuzhenshen: '玄武真身',
			/*虎牢关*/
			'txhj_bosslvbu1': '最强神话',
			'txhj_bosslvbu1_ab': '吕布',
			'txhj_bosslvbu2': '暴怒战神',
			'txhj_bosslvbu2_ab': '吕布',
			'txhj_bosslvbu3': '神鬼无前',
			'txhj_bosslvbu3_ab': '吕布',
			'txhj_rezhangfei1': '张飞',
			'txhj_guanyu1': '关羽',
			/*抚琴益州-非新杀PVE*/
			txhj_YcFuQinYiZhou: '抚琴益州',
			txhj_weiwuchangdaobing: '威武长刀兵',
			txhj_fazheng: '法正',
			txhj_zhangsong: '张松',
			txhj_pengyang: '彭羕',
			txhj_yizhoushitu: '益州使徒',
			txhj_mengda: '孟达',
			txhj_yanghuai: '杨怀',
			txhj_gaopei: '高沛',
			txhj_pangxi: '庞羲',
			txhj_spchengji: '程畿',
			txhj_skzhangyi: '张翼',
			txhj_liugui: '刘璝',
			txhj_wuyi: '吴懿',
			txhj_dengxian: '邓贤',
			txhj_lingbao: '泠苞',
			txhj_feiguan: '费观',
			txhj_liyan: '李严',
			txhj_huanweibing: '环卫兵',
			txhj_zhouqun: '周群',
			txhj_liuxun: '刘循',
			txhj_zhangren: '张任',
			txhj_pangtongy: '庞统',
			txhj_wangfu: '王甫',
			txhj_xujing: '许靖',
			txhj_yzzhangfei: '张飞',
			txhj_yanyan: '严颜',
			txhj_wulan: '吴兰',
			txhj_leitong: '雷铜',
			txhj_huangquan: '黄权',
			txhj_qinmi: '秦宓',
			txhj_liuzhang: '刘璋',
			txhj_liuba: '刘巴',
			txhj_lihui: '李恢',
			//海外卧龙出山部分NPC(暂时并入<轮回之境>赛季混合)
			txhj_zhugejun: '诸葛均',
			txhj_huangchengyan: '黄承彦',
			txhj_txyiji: '伊籍',
			txhj_mizhu: '糜竺',
			txhj_sunqian: '孙乾',
			txhj_jianyong: '简雍',
			txhj_chendao: '陈到',
			txhj_liufeng: '刘封',
			txhj_wlzhoucang: '周仓',
			txhj_wlguanping: '关平',
			txhj_xingzhanghe: '星张郃',
			txhj_mcgaolan: '高览',
			txhj_mcyanwen: '界颜良文丑',
			txhj_xiahoushi: '夏侯氏',
			txhj_mozhangfei: '魔张飞',
			txhj_xinyebingyong: '新野兵勇',
			txhj_liaohua: '廖化',
			txhj_moliubei: '魔刘备',
			txhj_wlmifuren: '糜夫人',
			txhj_wlganfuren: '甘夫人',
			txhj_mozhaoyun: '魔赵云',
			txhj_xinyebaiqizhang: '新野百骑长',
			txhj_friendwolong: '卧龙诸葛',
			txhj_wlhuangyueying: '黄月英',
			txhj_mowolongzg: '魔卧龙诸葛',
			txhj_moguanyu: '魔关羽',
			txhj_hujinding: '胡金定',
			/*魔改国服-长板桥之战*/
			txhj_GFChangBanZhiZhan: '长板桥之战',
			txhj_caojunxiaoqi: '曹军骁骑',
			txhj_cbqcaoren: '曹仁',
			txhj_vhubaoqi: '虎豹骑',
			txhj_wolongzg: '卧龙诸葛',
			txhj_cbyujin: '于禁',
			txhj_cbxiahoudun: '夏侯惇',
			txhj_caojunjingqi: '曹军精骑',
			txhj_vxuchu: '许褚',
			txhj_caojuntieqi: '曹军铁骑',
			txhj_vcaohong: '曹洪',
			txhj_vcaoren: '曹仁',
			txhj_vwenpin: '文聘',
			txhj_cbganfuren: '甘夫人',
			txhj_cbxiahouen: '夏侯恩',
			txhj_cbqzhaoyun: '赵云',
			txhj_tuhaojiading: '土豪家丁',
			txhj_vyuejin: '乐进',
			txhj_xiahouyuan: '夏侯渊',
			txhj_cbqzhangfei: '张飞',
			txhj_vzhangliao: '张辽',
			txhj_cbqpingmin: '平民',
			txhj_vcaocao: '曹操',
			/*官渡之战-海外魔改半成品*/
			txhj_MGGuanDuZhiZhan: '官渡之战-魔改',
			txhj_yanjinweibing: '延津卫兵',
			txhj_hanmeng: '韩猛',
			txhj_xinping: '辛评',
			txhj_yuanxi: '袁熙',
			txhj_lvkuanglvxiang: '吕旷吕翔',
			txhj_yanliang: '颜良',
			txhj_gdliubei: '刘备',
			txhj_wenchou: '文丑',
			txhj_cuiyan: '崔琰',
			txhj_chenlin: '陈琳',
			txhj_zhanghe: '张郃',
			txhj_gaolan: '高览',
			txhj_qingzhoujingrui: '青州精锐',
			txhj_gdchunyuqiong: '淳于琼',
			txhj_liangcao: '粮草',
			txhj_moguotufengji: '魔郭图逄纪',
			txhj_shenpei: '审配',
			txhj_moshenpei: '魔审配',
			txhj_xinpi: '辛毗',
			txhj_yuantan: '袁谭',
			txhj_mojushou: '魔沮授',
			txhj_tianfeng: '田丰',
			txhj_xunchen: '荀谌',
			txhj_moyuanshao: '魔袁绍',
			txhj_gdjushou: '沮授',
			txhj_moyanwen: '魔颜良文丑',
			txhj_gdsishi: '死士',
			/*千里走单骑*/
			txhj_QianLiZouDanJi: '千里走单骑',
			txhj_caojunweibing: '曹军卫兵',
			txhj_kongxiu: '孔秀',
			txhj_dqganfuren: '甘夫人',
			txhj_dqmifuren: '糜夫人',
			txhj_caojunyongshi: '曹军勇士',
			txhj_mengtan: '孟坦',
			txhj_dqhanfu: '韩福',
			txhj_bianxi: '卞喜',
			txhj_pujingheshang: '普净和尚',
			txhj_daofushou: '刀斧手',
			txhj_wangzhi: '王植',
			txhj_huban: '胡班',
			txhj_hubany: '义胡班',
			txhj_yinhubiaoqi: '寅虎镖旗',
			txhj_qinqi: '秦琪',
			txhj_mache: '马车',
			txhj_caiyang: '蔡阳',
			txhj_nuxianghoudun: '怒夏侯惇',
			/*原创迷城NPC*/
			txhj_zhuhuan: '界朱桓',
			txhj_zhuran: '界朱然',
			txhj_mczhuzhi: '界朱治',
			txhj_mcxiahouen: '夏侯恩',
			txhj_mcxiahoushang: '夏侯尚',
			txhj_mcxiahoujie: '夏侯杰',
			txhj_zhugejin: '诸葛瑾',
			txhj_spzhugeliang: '卧龙诸葛',
			txhj_shenzhugeliang: '神诸葛亮',
			txhj_repangtong: '界庞统',
			txhj_wupangtong: 'sp庞统',
			txhj_sppangtong: '线下群庞统',
			txhj_sppangtong_ab: '庞统',
			txhj_mclijue: '李傕',
			txhj_mcguosi: '郭汜',
			txhj_mczhangji: '张济',
			txhj_mcfanchou: '樊稠',
			txhj_caozhi: '曹植',
			txhj_caopi: '曹丕',
			txhj_zhenji: '甄姬',
			txhj_sunru: '孙茹',
			txhj_sunluyu: '孙鲁育',
			txhj_sunluban: '界孙鲁班',
			txhj_recaocao: '界曹操',
			txhj_shencaocao: '神曹操',
			txhj_mcqcaocao: 'sp曹操',
			txhj_mcyuanshu: '袁术',
			txhj_reyuanshu: '界袁术',
			txhj_zdyuanshu: '仲帝袁术',
			txhj_zdyuanshu_ab: '袁术',
			txhj_zhugezhan: '诸葛瞻',
			//国服-赤壁之战
			txhj_GFChiBiZhiZhan: '赤壁之战',
			txhj_caojunxiaowei: '曹军校尉',
			txhj_wujungongbing: '吴军弓兵',
			txhj_caojunduwei: '曹军都尉',
			txhj_caojunshibing: '曹军士卒',
			txhj_caojunxiaojiang: '曹军骁将',
			txhj_caojunmitan: '曹军密探',
			txhj_cikejingrui: '刺客精锐',
			txhj_wujunmitan: '吴军密探',
			txhj_wujunshibing: '吴军士兵',
			txhj_wuwei: '武卫',
			txhj_caojuncike: '曹军刺客',
			txhj_cbzhangzhao: '张昭',
			txhj_buzhi: '步骘',
			txhj_xuezong: '薛综',
			txhj_yufan: '虞翻',
			txhj_wolongzhugeliang: '卧龙诸葛亮',
			txhj_caojunqiangbing: '曹军枪兵',
			txhj_huwei: '虎卫',
			txhj_cbcaohong: '曹洪',
			txhj_caojungongbing: '曹军弓兵',
			txhj_caimao: '蔡瑁',
			txhj_tiejiachangjibing: '铁甲长戟兵',
			txhj_xunshaoduizhang: '巡哨队长',
			txhj_jianggan: '蒋干',
			txhj_tiejiajingrui: '铁甲精锐',
			txhj_xuhuang: '徐晃',
			txhj_cbzhangliao: '张辽',
			txhj_caochuan: '草船',
			txhj_cbhuanggai: '黄盖',
			txhj_cbhandang: '韩当',
			txhj_maojie: '毛玠',
			txhj_zhangliaox: '张辽',
			txhj_wenpin: '文聘',
			txhj_yuejin: '乐进',
			txhj_xiahoudun: '夏侯惇',
			txhj_lidian: '李典',
			txhj_caojunshizhang: '曹军什长',
			txhj_chengyu: '程昱',
			txhj_cbxuchu: '许褚',
			txhj_cbcaocao: '曹操',
			//魔改合纵抗秦
			txhj_NSHeZhongKangQin: '合纵抗秦',
			txhj_yijibaoxiang: '遗迹宝箱',
			txhj_shinv: '侍女',
			txhj_qinjunhuwei: '秦军护卫',
			txhj_qinjunshizu: '秦军士卒',
			txhj_qinjunbubing: '秦军步兵',
			txhj_mengjiangnv: '孟姜女',
			txhj_shangyang: '商鞅',
			txhj_liuxiu: '刘秀',
			txhj_wangmang: '王莽',
			txhj_kqzhangyi: '张仪',
			txhj_wuguang: '吴广',
			txhj_chensheng: '陈胜',
			txhj_miyue: '芈月',
			txhj_shiwei: '侍卫',
			txhj_baiqi: '白起',
			txhj_qinjunqibing: '秦军骑兵',
			txhj_longyufei: '龙羽飞',
			txhj_liubang: '刘邦',
			txhj_xiangyu: '项羽',
			txhj_lvbuwei: '吕不韦',
			txhj_zhaoji: '赵姬',
			txhj_qinjunnushou: '秦军弩手',
			txhj_mengtian: '蒙恬',
			txhj_wangjian: '王翦',
			txhj_zhaogao: '赵高',
			txhj_yingzheng: '嬴政',
			txhj_cmfanchou: '赤眉樊崇',
			txhj_llwangkuang: '绿林王匡',
			txhj_zyliuxiu: '刘秀',
			txhj_zywangmang: '王莽',
			txhj_xinjunshibing: '新军士兵',
			//十常侍之乱
			txhj_ShiChangShiZhiLuan: '十常侍之乱',
			txhj_huanguandaofu: '宦官刀斧手',
			txhj_huanguanjianshi: '宦官剑士',
			txhj_scshuanguan: '宦官',
			txhj_scscaojie: '宦官曹节',
			txhj_songdian: '常侍宋典',
			txhj_scszhanggong: '常侍张恭',
			txhj_gaowang: '高望',
			txhj_dongzhong: '董重',
			txhj_dongtaihoux: '董太后',
			txhj_bilan: '毕岚',
			txhj_lisong: '栗嵩',
			txhj_xiayun: '夏恽',
			txhj_jianshuox: '蹇硕',
			txhj_hankui: '韩悝',
			txhj_xiachangshi: '下常侍',
			txhj_sunzhang: '孙璋',
			txhj_houlan: '侯览',
			txhj_huanguanshicongx: '宦官侍从',
			txhj_huanguanshicong: '宦官侍卫',
			txhj_scszhaozhong: '赵忠',
			txhj_yuanshuy: '袁术',
			txhj_zuofeng: '左丰',
			txhj_guosheng: '郭胜',
			txhj_huanguantanzi: '宦官探子',
			txhj_wangkuang: '王匡',
			txhj_fengxu: '封谞',
			txhj_chengkuang: '程旷',
			txhj_scszhangrang: '张让',
			txhj_bilan: '毕岚',
			txhj_duangui: '段珪',
			txhj_shaodiliubian: '少帝刘辩',
			/*分隔线——*/
			/*迷城幻境NPC扩充*/
			txhj_caifuren: '蔡夫人',
			txhj_liuqi: '刘琦',
			txhj_liubiao: '刘表',
			txhj_shenguanyu: '神关羽',
			txhj_spguanyu: 'sp关羽',
			txhj_reganning: '界甘宁',
			txhj_rezhaoyun: '界赵云',
			txhj_shenzhaoyun: '神赵云',
			txhj_spzhaoyun: 'sp赵云',
			txhj_reliubei: '界刘备',
			txhj_rehuanggai: '界黄盖',
			txhj_rehandang: '界韩当',
			txhj_rechengpu: '界程普',
			txhj_zhangliang: '张梁',
			txhj_zhangbao: '张宝',
			txhj_rezhangjiao: '界张角',
			txhj_sphuaman: '花鬘',
			txhj_rezhurong: '界祝融',
			txhj_remenghuo: '界孟获',
			txhj_shenliubei: '神刘备',
			txhj_jspliubei: 'sp刘备',
			/*魔改霸王征程*/
			txhj_MGBaWangZhengCheng: '霸王征程-魔改',
			txhj_mosunce: '魔孙策',
			txhj_zhuzhi: '朱治',
			txhj_heqi: '贺齐',
			txhj_lingcao: '凌操',
			txhj_wujungongjianshou: '吴军弓箭手',
			txhj_panzhang: '潘璋',
			txhj_wumazhong: '马忠',
			txhj_zhoutai: '周泰',
			txhj_dingfeng: '丁奉',
			/*七擒孟获*/
			txhj_GFQiQinMengHuo: '七擒孟获',
			txhj_nanzhongjingrui: '南中精锐',
			txhj_manzuzhuangding: '蛮族壮丁',
			txhj_manzujishi: '蛮族祭师',
			txhj_ehuan: '鄂焕',
			txhj_manzutanzi: '蛮族探子',
			txhj_mangu: '蛮姑',
			txhj_manding: '蛮丁',
			txhj_manzuyongshi: '蛮族勇士',
			txhj_manzushibing: '蛮族士兵',
			txhj_jinhuansanjie: '金环三结元帅',
			txhj_manzuxianfeng: '蛮族先锋',
			txhj_manzuxianfengx: '蛮族先锋',
			txhj_zhaoyuny: '赵云',
			txhj_manzushoushi: '蛮族兽师',
			'txhj_menghuo1': '孟获',
			'txhj_menghuo2': '孟获',
			'txhj_menghuo3': '孟获',
			'txhj_menghuo4': '孟获',
			'txhj_menghuo5': '孟获',
			'txhj_menghuo6': '孟获',
			'txhj_menghuo7': '孟获',
			txhj_manzuhuwei: '蛮族护卫',
			txhj_tengjiabing: '藤甲兵',
			txhj_mangyachang: '忙牙长',
			txhj_manzucike: '蛮族刺客',
			txhj_mengyou: '孟尤',
			txhj_manzuzhanxiang: '战象',
			txhj_manzuzhanxiangx: '战象',
			txhj_mangux: '蛮姑',
			txhj_gousheng: '苟胜',
			txhj_zhurong: '祝融',
			txhj_zhurongx: '祝融',
			txhj_muludawang: '木鹿大王',
			txhj_wutugu: '兀突骨',
			/*李郭之乱*/
			txhj_LiGuoZhiLuan: '李郭之乱',
			txhj_xiaoweijunx: '凉州校尉',
			txhj_jinweijunx: '凉州禁卫军',
			txhj_dongyue: '董越',
			txhj_baolvejun: '豹掠军',
			txhj_jianglijue: '将李傕',
			txhj_xurongy: '徐荣',
			txhj_huzheny: '胡轸',
			txhj_feixiongjunzuo: '飞熊军左',
			txhj_feixiongjunyou: '飞熊军右',
			txhj_huangfusongy: '皇甫嵩',
			txhj_dongbai: '董白',
			txhj_dongmin: '董旻',
			txhj_niufu: '魔牛辅',
			txhj_fengyaojun: '凤瑶军',
			txhj_dongxie: '董翓',
			txhj_huchier: '胡赤儿',
			txhj_wangfang: '王方',
			txhj_limeng: '李蒙',
			txhj_fanchou: '魔樊稠',
			txhj_hubenjun: '虎贲军',
			txhj_matengy: '西凉马腾',
			txhj_mozhangji: '魔张济',
			txhj_longxiangjun: '龙骧军',
			txhj_jianghuaxiong: '魔将华雄',
			txhj_tdsunjian: '汉将孙坚',
			txhj_baolveqi: '豹掠骑',
			txhj_longxiangqi: '龙骧骑',
			txhj_dushi: '毒仕',
			txhj_jiawenhe: '将贾诩',
			txhj_situwangyun: '司徒王允',
			txhj_kuangcaijun: '狂豺军',
			txhj_moguosi: '魔郭汜',
			txhj_wuxi: '伍习',
			txhj_duanwei: '段煨',
			txhj_handiliuxie: '汉帝刘协',
			txhj_feixiongjingrui: '飞熊精锐',
			txhj_molijue: '魔李傕',
			txhj_fennudeyezhu: '愤怒的野猪',
			txhj_panjunzhenchabing: '叛军侦查兵',
			txhj_panjunshizu: '叛军士卒',
			txhj_elangx: '恶狼',
			txhj_huanjingdoushi: '幻境斗士',
			txhj_nianshou: '年兽',
			/*黄巾之乱-国服*/
			txhj_GFHuangJinZhiLuan: '黄巾之乱-国服',
			txhj_hanjunluzhi: '汉将卢植',
			txhj_huangjindaobing: '黄巾刀兵',
			txhj_huangjinxiaobing: '黄巾小兵',
			txhj_huangjinqianfeng: '黄巾前锋',
			txhj_tiangongzhangjiao: '天公张角',
			txhj_peiyuanshaox: '黄巾裴元绍',
			txhj_hanjunluzhix: '汉将卢植',
			txhj_huangjinyudang: '黄巾余党',
			txhj_huangjinyaoshushi: '黄巾妖师',
			txhj_bossdengmao: '黄巾邓茂',
			txhj_huangjinfujiang: '黄巾副将',
			txhj_huangjintongling: '黄巾统领',
			txhj_huangjinshizux: '黄巾士卒',
			txhj_huangjinqibing: '黄巾骑兵',
			txhj_huangjinshizu: '黄巾士卒',
			txhj_huangjinyushix: '黄巾雨师',
			txhj_huangjinjingrui: '黄巾精锐',
			txhj_huangjinqianfengx: '黄巾前锋',
			txhj_bossbocai: '黄巾波才',
			txhj_zhangmancheng: '黄巾张曼成',
			txhj_buji: '黄巾卜己',
			txhj_tiangongzhangjiaox: '天公张角',
			txhj_rengongzhangliang: '人公张梁',
			txhj_gaosheng: '黄巾高升',
			txhj_digongzhangbao: '地公张宝',
			txhj_huangfusongx: '汉将皇甫嵩',
			txhj_digongzhangbaox: '地公张宝',
			txhj_huangjinyuzhong: "黄巾余众",
			txhj_huangfusongxx: '汉将皇甫嵩',
			txhj_hanjiangsunjian: '汉将孙坚',
			txhj_huangjinzhangyan: '黄巾张燕',
			txhj_hjzhujun: '汉将朱儁',
			/*轮回之境*/
			txhj_HaiWaiFenghe: '轮回之境',
			txhj_xianzhenying: '陷阵营',
			txhj_baimayicong: '白马义从',
			txhj_huanjingnantong: '幻境男童',
			txhj_zoudan: '邹丹',
			txhj_baimaxiaoqi: '白马骁骑',
			txhj_yecha: '夜叉',
			txhj_luocha: '罗刹',
			txhj_jiangwei: '界姜维',
			txhj_zhonghui: '界钟会',
			txhj_dengai: '界邓艾',
			txhj_zhugeliang: '诸葛亮',
			txhj_huangyueying: '黄月英',
			txhj_zhugeguo: '诸葛果',
			txhj_spsunshangxiang: 'sp孙尚香',
			txhj_zhangxingcai: '张星彩',
			txhj_guanyinping: '关银屏',
			txhj_wanglang: '王朗',
			txhj_liuyao: '刘繇',
			txhj_yanbaihu: '严白虎',
			txhj_xuelan: '薛兰',
			txhj_houkai: '侯楷',
			txhj_zhanghong: '张纮',
			txhj_zhangzhao: '张昭',
			txhj_lvfan: '吕范',
			txhj_lvmeng: '吕蒙',
			txhj_chenwu: '陈武',
			txhj_dongxi: '董袭',
			txhj_spcaocao: 'sp曹操',
			txhj_dufuren: '杜夫人',
			txhj_qinyilu: '秦宜禄',
			txhj_zhangchunhua: '张春华',
			txhj_spcaiwenji: 'sp蔡文姬',
			txhj_wangyi: '王异',
			txhj_shensimayi: '神司马懿',
			txhj_simashi: '司马师',
			txhj_simazhao: '司马昭',
			txhj_zhugedan: '诸葛诞',
			txhj_wangling: '王凌',
			txhj_guanqiujian: '毌丘俭',
			txhj_huzhen: '胡轸',
			txhj_sunjian: '孙坚',
			txhj_zumao: '祖茂',
			txhj_xurong: '徐荣',
			txhj_rezhouyu: '界周瑜',
			txhj_chengpu: '程普',
			txhj_huanggai: '黄盖',
			txhj_houcheng: '侯成',
			txhj_zangba: '臧霸',
			txhj_hubaoqi: '虎豹骑',
			txhj_sunguan: '孙观',
			txhj_xusheng: '界徐盛',
			txhj_shenganningx: '神甘宁',
			txhj_guanyu: '界关羽',
			txhj_zhoucang: '界周仓',
			txhj_guanping: '界关平',
			txhj_lingju: '灵雎',
			txhj_liuxie: '刘协',
			txhj_fuwan: '伏完',
			txhj_yuanshaoyou: '袁绍',
			txhj_gongsunfan: '公孙范',
			txhj_songxian: '宋宪',
			txhj_mozhangliao: '幻魇张辽',
			txhj_gongsunyue: '公孙越',
			txhj_gongsunxv: '公孙续',
			txhj_caobao: '曹豹',
			txhj_rezhangfei: '界张飞',
			txhj_handang: '韩当',
			txhj_jiangqing: '蒋钦',
			txhj_niufudongxie: '牛辅董翓',
			txhj_caohong: '曹洪',
			txhj_caocaox: '曹操',
			txhj_rexiaoqiao: '界小乔',
			txhj_modaqiao: '魔大乔',
			txhj_suweihuqiay: '宿卫虎骑',
			txhj_redaqiao: '界大乔',
			txhj_moxiaoqiao: '魔小乔',
			txhj_sunquan: '界孙权',
			txhj_sufei: '苏飞',
			txhj_xganning: '星甘宁',
			txhj_relvbu: '界吕布',
			txhj_spdiaochan: 'sp貂蝉',
			txhj_zhangzi: '张咨',
			txhj_resunjian: '界孙坚',
			txhj_suweihuqiqq: '宿卫虎骑',
			txhj_beimihu: '幻魇卑弥呼',
			txhj_kaisa: '凯撒',
			txhj_nansheme: '难升米',
			txhj_bianjiangweishi: '边疆卫士',
			txhj_bossquyi: '魔麹义',
			txhj_jyyuanshao: '袁绍',
			txhj_xianyufu: '鲜于辅',
			txhj_cike: '丛林刺客',
			txhj_leibo: '雷薄',
			txhj_mamidi: '马日磾',
			txhj_madai: '界马岱',
			txhj_machao: '界马超',
			txhj_mayunlu: 'TW马云禄',
			txhj_bingzhoulangqi: '并州狼骑',
			txhj_motaishici: '魔太史慈',
			txhj_tianyu: '田豫',
			txhj_tiankai: '田楷',
			txhj_mouzhouyu: '魔周瑜',
			/*何进诛宦*/
			txhj_HeJinZhuHuan: '何进诛宦',
			txhj_huanguan: '宦官',
			txhj_huanguandaofushou: '宦官刀斧手',
			txhj_hetaihou: '何太后',
			txhj_dongtaihou: '董太后',
			txhj_baohong: '鲍鸿',
			txhj_xiaoweijun: '校尉军',
			txhj_chunyuqiong: '淳于琼',
			txhj_jinweijun: '禁卫军',
			txhj_zhaorong: '赵融',
			txhj_zhaozhong: '赵忠',
			txhj_yuanshao: '袁绍',
			txhj_yuanshu: '袁术',
			txhj_caocao: '曹操',
			txhj_xuyou: '许攸',
			txhj_jianshuo: '蹇硕',
			txhj_huanyanzhangrang: '幻魇张让',
			txhj_huanyanhejin: '幻魇何进',
			/*黄天之怒*/
			txhj_HuangTianZhiNu: '黄天之怒',
			txhj_huangjinxinjun: '黄巾新军',
			txhj_guanhai: '管亥',
			txhj_peiyuanshao: '裴元绍',
			txhj_huangjinmengqi: '黄巾猛骑',
			txhj_dengmao: '邓茂',
			txhj_dongzhuo: '董卓',
			txhj_bocai: '波才',
			txhj_huangjinyaoshi: '黄巾妖师',
			txhj_huangjinyushi: '黄巾雨师',
			txhj_huangfusong: '皇甫嵩',
			txhj_zhujun: '朱儁',
			txhj_changyuanshibing: '长怨尸兵',
			txhj_huanyanzhangliang: '幻魇张梁',
			txhj_huanyanzhangbao: '幻魇张宝',
			txhj_huanyanzhangjiaoshi: '幻魇张角尸',
			txhj_huanyanzhangjiaolei: '幻魇张角雷',
			txhj_huanyanzhangjiaohuo: '幻魇张角火',
			txhj_huanyanzhangjiaofeng: '幻魇张角风',
			/*冲应初临*/
			txhj_ChongYingChuLin: '冲应初临',
			txhj_huanjingshouhutongzi: '守护童子',
			txhj_elang: '饿狼',
			txhj_huanjingweishi: '幻境卫士',
			txhj_tonghu: '铜虎',
			txhj_huanxiangbingnv: '幻象兵',
			txhj_huanxiangbingnan: '幻象兵',
			txhj_shouhudizi: '守护弟子',
			txhj_lingjitongren: '灵机铜人',
			txhj_fuguangtongren: '浮光铜人',
			txhj_shenjunbaima: '神骏白马',
			txhj_guojiahuanxiang: '郭嘉幻象',
			txhj_zhicaihuanxiang: '志才幻象',
			txhj_wolonghuanxiang: '卧龙幻象',
			txhj_fengchuhuanxiang: '凤雏幻象',
			txhj_zhouyuhuanxiang: '周瑜幻象',
			txhj_luxunhuanxiang: '陆逊幻象',
			txhj_jiaxuhuanxiang: '贾诩幻象',
			txhj_dianweihuanxiang: '典韦幻象',
			txhj_xuchuhuanxiang: '许褚幻象',
			txhj_guanyuhuanxiang: '关羽幻象',
			txhj_zhangfeihuanxiang: '张飞幻象',
			txhj_ganninghuanxiang: '甘宁幻象',
			txhj_lingtonghuanxiang: '凌统幻象',
			txhj_lvbuhuanxiang: '吕布幻象',
			txhj_caorenhuanxiang: '曹仁幻象',
			txhj_zhaoyunhuanxiang: '赵云幻象',
			txhj_zhoutaihuanxiang: '周泰幻象',
			txhj_shangjianghuanxiang: '上将幻象',
			txhj_hunduntongren: '混沌铜人',
			txhj_moou: '魔偶',
			txhj_mowangzhizhong: '魔王之踵',
			txhj_chi: '魑',
			txhj_mei: '魅',
			txhj_wang: '魍',
			txhj_liang: '魉',
			txhj_huanshenguanyu: '幻神关羽',
			txhj_huanshenlvmeng: '幻神吕蒙',
			txhj_huanshenzhouyu: '幻神周瑜',
			txhj_huanshenzhuge: '幻神诸葛',
			txhj_huanshencaocao: '幻神曹操',
			txhj_huanshenlvbu: '幻神吕布',
			txhj_huanshenzhaoyun: '幻神赵云',
			txhj_huanshensima: '幻神司马',
			txhj_yongwuhuanxiang: '勇武幻象',
			txhj_jianshouhuanxiang: '坚守幻象',
			txhj_huoxinhuanxiang: '惑心幻象',
			txhj_manyanhuanxiang: '蔓延幻象',
			txhj_yinhuanxiang: '阴幻象',
			txhj_yanghuanxiang: '阳幻象',
			txhj_heiwuchanghuanxiang: '黑无常幻象',
			txhj_baiwuchanghuanxiang: '白无常幻象',
			txhj_niutouhuanxiang: '牛头幻象',
			txhj_mamianhuanxiang: '马面幻象',
			txhj_qianchaotongren: '前朝铜人',
			txhj_hanlingdi: '汉灵帝',
			txhj_baxiaoweishouling: '八校尉首领',
			txhj_shiemoxing: '释厄魔星',
			txhj_wujiaoxinmo: '乌角心魔',
			txhj_huanjinglingzhu: '幻境领主',
			txhj_tongrenjumo: '铜人巨魔',
			txhj_tiaopibubu: '调皮岁岁',
			txhj_tianjijushou: '天机巨兽',

			/*黄天之怒*/
			txhj_yaoshu: '妖术',
			txhj_yaoshu_info: '出牌阶段限一次,你可以对一名其他角色施法,令其打出或使用的下X张牌无效.',
			txhj_zhoufa: '咒法',
			txhj_zhoufa_info: '出牌阶段限一次,你可以对一名其他角色施法,对其造成X点雷电伤害.',
			txhj_zhouzu: '咒诅',
			txhj_zhouzu_info: '出牌阶段限一次,你可以对一名其他角色施法,令其弃置X张牌(不足则全弃),对其造成一点雷电伤害.',
			txhj_huangjin: '黄巾',
			txhj_huangjin_info: '当你成为【杀】的目标时,你可以判定,若结果与此杀点数之差小于等于1,此【杀】对你无效.',
			txhj_guimen: '鬼门',
			txhj_guimen_info: '锁定技,当你因弃置而失去♠️️牌后,你判定,若结果与失去的牌点数之差小于等于1,你对一名其他角色造成2点雷电伤害.',
			txhj_dizhou: '地咒',
			txhj_dizhou_info: '准备阶段或结束阶段,你可以将一张牌置于武将牌上,敌方使用与<地咒>牌花色相同的牌时,其判定,若为:黑色,其随机弃置一张牌;♠️️,此牌无效;♠️️2～9,其失去一点体力.当你受到伤害后,随机移去一张<地咒>',
			txhj_didun: '地遁',
			txhj_didun_info: '当一名角色的判定牌生效前,你可以打出一张黑色牌替换之,若被替换的判定牌为黑色,你摸一张牌.',
			txhj_renwang: '人望',
			txhj_renwang_info: '当你使用或打出的牌置入弃牌堆后,将此牌置于武将牌上,称为<方>;你的手牌上限+X;你可以多使用X/5张【杀】(X为<方>数).',
			txhj_renfang: '人方',
			txhj_renfang_info: '出牌阶段限一次,你可以移去36张<方>,然后施法:对X名角色造成36点伤害.',
			txhj_wangyuan: '亡怨',
			txhj_wangyuan_info: '锁定技,当一名角色死亡时,你增加1点体力上限并回复1点体力,然后你本局造成的属性伤害基数+1',
			txhj_shiyuan: '尸怨',
			txhj_shiyuan_info: '锁定技,你造成的伤害+1;当你进入濒死状态时,你死亡;你杀死的角色复活为【长怨尸兵】并加入你的阵营.',
			txhj_zhuhun: '注魂',
			txhj_zhuhun_info: '出牌阶段限一次,你可以令一名已死亡的同阵营角色复活为【长怨尸兵】.',
			txhj_zhoulei: '咒雷',
			txhj_zhoulei_info: '锁定技,当一名角色摸牌后,若该角色与你的手牌数之差大于等于(5-X),你对其造成一点雷电伤害(X为此技能发动次数且至多为5).',
			txhj_guiyan: '诡炎',
			txhj_guiyan_info: '锁定技,准备阶段,你选择一名体力值大于等于你的角色,令其获得<燃殇>.若其已拥有<燃殇>,改为你视为对其使用一张【火攻】.本回合你对此角色造成的伤害均视为火焰伤害且伤害+1.',
			txhj_xiefeng: '邪风',
			txhj_xiefeng_info: '结束阶段,你可弃置至多三张牌,然后摸一张牌.防止你于下X回合受到的非雷电伤害(X为你弃置的牌数)',
			txhj_oldhuxiao: '虎啸',
			txhj_oldhuxiao_info: '锁定技,当你使用的【杀】被【闪】抵消后,你令此【杀】不计入使用次数',
			txhj_datongSkill1: '金鸡独立',
			// "txhj_datongSkill1_info": "当你进入濒死状态时,你回复体力至1点 (每局游戏限一次).",
			txhj_ruiSkill1: '祥云瑞氣',
			// "txhj_ruiSkill1_info": "出牌阶段结束时,你可以选择x名手牌数小于你的其他角色,对其各造成1点火焰伤害.",
			txhj_ruiSkill2: '神妙',
			// "txhj_ruiSkill2_info": "准备阶段和结束阶段,若你的手牌数为奇数,你令一名角色摸一张牌;若手牌数为偶数,你令一名角色随机弃一张牌.",
			txhj_ruiSkill3: '洞若观火',
			// "txhj_ruiSkill3_info": "当你成为其他角色使用的普通锦囊牌的目标时,你进行判定:若为红色,则此锦囊无效且你获得之.",
			txhj_yanSkill1: '神鬼不测',
			// "txhj_yanSkill1_info": "当你成为其他角色使用的普通锦囊的唯一目标时,你进行判定:若为黑色,则改为你对使用者使用该锦囊.",
			txhj_yanSkill2: '反计',
			// "txhj_yanSkill2_info": "每回合限一次,当你受到其他角色的伤害后,你视为对伤害来源使用一张杀,若该杀造成伤害,则你回复1点体力.",
			txhj_yanSkill3: '天外之火',
			// "txhj_yanSkill3_info": "每回合限一次,当你对其他角色造成伤害后,进行一次判定:黑色你获得其一张牌,红色你摸两张牌.",
			aHaoSkill1: '豪门贵胄',
			// "aHaoSkill1_info": "游戏开始时,你的每个空置的装备区均随机获得并使用一张装备.",
			txhj_aHaoSkill2: '神勇',
			// "txhj_aHaoSkill2_info": "当你失去装备区的牌时,你可以选择x名角色对其各造成1点伤害(x为场上存活的角色数).",
			txhj_aHaoSkill3: '攫戾執猛',
			// "txhj_aHaoSkill3_info": "你摸牌阶段摸牌数、出杀次数、手牌上限+x (x为装备区的个数).",
			txhj_luluSkill1: '如虎添翼',
			// "txhj_luluSkill1_info": "出牌阶段开始时,你摸两张牌.",
			txhj_luluSkill2: '虎威',
			// "txhj_luluSkill2_info": "你于回合内使用第一张[杀]时,若你本回合获得牌数不小于x (x为你的当前体力值),则你此[杀]不可响应且伤害+1.",
			txhj_aleSkill2: '饞嘴王',
			// "txhj_aleSkill2_info": "准备阶段,若你已受伤且体力值不是全场最高,你回复1点体力.",
			txhj_aleSkill1: '乐不可支',
			// "txhj_aleSkill1_info": "当你于一个回合第一次成为一张基本牌的目标后,若此牌未对你造成伤害,你摸一张牌.",
			txhj_yueerSkill1: '花容月貌',
			// "txhj_yueerSkill1_info": "每轮限一次,当男性角色受到伤害后,你回复一点体力并摸一张牌.",
			txhj_yueerSkill2: '娇面',
			// "txhj_yueerSkill2_info": "弃牌阶段结束时,你摸两张牌.",
			txhj_liuliSkill1: '墨玉点雪',
			// "txhj_liuliSkill1_info": "其他角色的回合限一次,当你失去牌时,对当前回合角色造成1点伤害.",
			txhj_liuliSkill2: '伶俐',
			// "txhj_liuliSkill2_info": "每回合限一次,其他角色在弃牌阶段弃牌后,你从弃牌堆获得一张牌.",
			txhj_manmanSkill1: '弄鬼掉猴',
			txhj_manmanSkill2: '捣蛋',
			txhj_xiaoxiaoSkill1: '矢无虚发',
			txhj_xiaoxiaoSkill2: '弓上弦',
			txhj_xuerenSkill1: '轻舞飞扬',
			txhj_xuanwuSkill1: '倚天拔地',
			txhj_xuanwuSkill2: '蛇影',
			txhj_xuanwuSkill3: '玄冥真主',
			aHaoSkill1: '豪门贵胄',
			txhj_aHaoSkill2: '神勇',
			txhj_aHaoSkill3: '攫戾執猛',
			// "shenyong_info":"当你于牌局内失去装备牌时,对所有敌人造成一点伤害.",
			txhj_dundunSkill1: '勇往直前',
			txhj_dundunSkill2: '忠誌',
			txhj_jiuweiSkill1: '狐火灵气',
			txhj_jiuweiSkill1_disable: '狐火灵气',
			txhj_jiuweiSkill2: '秘思',
			txhj_jiuweiSkill3: '九尾之命',
			txhj_tengsheSkill1: '雷奔云谲',
			txhj_tengsheSkill2: '紫电',
			txhj_tengsheSkill3: '迅雷风烈',
			txhj_qilinSkill1: '麒麟之姿',
			txhj_qilinSkill2: '掌火',
			txhj_qilinSkill3: '腾焰飞芒',
			txhj_ditingSkill1: '披坚执锐',
			txhj_ditingSkill2: '轻健',
			txhj_ditingSkill3: '巧捷万端',
			txhj_youyouSkill1: '承天之佑',
			txhj_youyouSkill2: '守护',
			txhj_minminSkill1: '娉婷万種',
			txhj_minminSkill2: '依人',
			txhj_qiaoqiaoSkill1: '慧心巧思',
			txhj_qiaoqiaoSkill2: '清婉',
			txhj_yayaSkill1: '慷慨鸭昂',
			txhj_yayaSkill2: '鸭立',
			txhj_yayaSkill2_protected: '鸭立',
			txhj_tanshi: '贪食',
			txhj_tanshi_info: '锁定技,结束阶段开始时,你须弃置一张手牌',
			txhj_daiyuan: '待援',
			txhj_daiyuan_info: '每名角色的出牌阶段每项限一次,其可以弃置两张颜色或类型不同的牌,令你回复一点体力..',
			txhj_daiyuan2: '待援',
			txhj_daiyuan2_info: '每名角色的出牌阶段每项限一次,其可以弃置两张颜色或类型不同的牌,令你回复一点体力.',
			txhj_zuijiu: '醉酒',
			txhj_zuijiu_info: '锁定技,你使用【杀】伤害+1.',
			txhj_baoji: '爆击',
			txhj_baoji_info: '锁定技,你使用【杀】造成伤害时,有低概率令此伤害+1.',
			txhj_juhun: '拘魂',
			txhj_juhun_info: '锁定技,准备阶段,你随机令一名于你上回合结束后阵亡的己方角色复活,将体力回复至三点,摸三张牌.',
			txhj_guimei: '鬼魅',
			txhj_guimei_info: '锁定技,你不能成为延时锦囊的目标.',
			txhj_baolian: '暴敛',
			txhj_baolian_info: '锁定技,结束阶段,你摸两张牌.',
			txhj_beiming: '悲鸣',
			txhj_beiming_info: '锁定技,你死亡时,杀死你的角色弃置所有手牌.',
			txhj_kuangbao: '狂暴',
			txhj_add: '狂暴',
			txhj_clear: '狂暴',
			txhj_kuangbao_info: '锁定技,若你连续七轮未进入濒死状态,本局游戏中,你造成的伤害+1.(可叠加)',
			txhj_debuff: '溃败',
			txhj_tunshi: '吞噬',
			txhj_tunshi_info: '锁定技,准备阶段,你对一名手牌数大于你的敌方角色造成一点伤害.',
			txhj_chuanyun: '穿云',
			txhj_chuanyun_info: '结束阶段,你可以对一名体力值大于你的敌方角色造成一点伤害.',
			txhj_guihuo: '鬼火',
			txhj_guihuo_info: '结束阶段,你可以对一名其他角色造成1点火焰伤害',
			txhj_luolei: '落雷',
			txhj_luolei_info: '准备阶段,你可以对一名其他角色造成1点雷电伤害',
			txhj_wangzu: '亡阻',
			txhj_wangzu_info: '锁定技,你死亡后,若此时为其他角色的出牌阶段,则立刻结束此阶段.',
			shiwuxufa: '矢无虚发',
			shiwuxufa_info: '每回合限一次,当你成为其他角色使用的普通锦囊牌的目标时,若你本回合未受伤,回复一点体力(满体力则摸一张牌)',
			gongshangxian: '弓上弦',
			gongshangxian_info: '弃牌阶段结束时,你从每名装备区装备数不大于你的其他角色处随机获得1张手牌',
			qingwufeiyang: '轻舞飞扬',
			qingwufeiyang_info: '回合结束时,若你本回合造成过伤害,摸一张牌.',
			yitianbadi: '倚天拔地',
			yitianbadi_info: '每当其他角色回复体力时,你回复一点体力.',
			txhj_sheying: '蛇影',
			txhj_sheying_info: '每回合限一次,当你弃置手牌或手牌被弃置时,你随机对X名敌方角色造成1点伤害并摸X张牌.(X为你本次弃置手牌数除以2向上取整)',
			xuanminzhenzhu: '玄冥真主',
			xuanminzhenzhu_info: '当其他角色使用锦囊牌指定你为目标时,若该牌点数小于等于你的手牌数,则该锦囊无效',
			tx_modao: '魔道',
			tx_modao_info: '锁定技,准备阶段,你摸两张牌.',
			tx_mojian: '魔箭',
			tx_mojian_info: '出牌阶段开始时,你可以对所有敌方角色使用一张【万箭齐发】.',
			tx_danshu: '丹术',
			tx_danshu_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你回复1点体力.',
			tx_yushou: '驭兽',
			tx_yushou_info: '出牌阶段开始时,你可以对所有敌方角色使用一张【南蛮入侵】.',
			tx_moyany: '魔炎',
			tx_moyany_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你对一名其他角色造成2点火焰伤害.',
			txyirang: '揖让',
			txyirang_info: '出牌阶段开始时,你可以将所有非基本牌交给一名体力上限大于你的其他角色,然后调整体力上限至与该角色相同(X为你以此法交给其的牌的类别数).',
			xinmingjian: '明鉴',
			xinmingjian_info: '出牌阶段限两次,你可以将任意张手牌交给一名其他角色,若如此做,该角色于其下个回合的手牌上限不限制,且使用【杀】的次数上限不限制.',
			txayhanji: '悍激',
			txayhanji_info: '每回合限一次,你对其他角色造成伤害时,造成的伤害+1.',
			txayboji: '搏激',
			txayboji_info: '每回合限一次,当你使用【杀】指定其他角色时,你可以弃置一张牌然后令目标角色弃置所有手牌,然后你摸一张牌.',
			tx_dqtianzi: '天姿',
			tx_dqtianzi_info: '每名角色的回合限一次,当你受到伤害后或出牌阶段开始时,你可以选择一名其他角色进行判定,若结果为♦️,其跳过出牌阶段(若不是在其回合,则改为跳过其下个出牌阶段);若结果为黑色,你获得其所有手牌.',
			txmazhan: '马战',
			txmazhan_info: '锁定技,你计算与其他角色的距离-2,其他角色计算与你的距离+1.',
			txlieji: '裂击',
			txlieji_info: '每回合限一次,当你使用【杀】或锦囊牌指定唯一目标后,你可以摸1张牌,然后此牌多结算一次.',
			diychunxiao: '春晓',
			//"diychunxiao_info":"你的回合结束时,你若为受伤状态,额外有50%的几率恢复至满体力值.",
			diycuidu: '淬毒',
			//"diycuidu_info":"锁定技,你对一名其他角色造成伤害后,若其没有<中毒>,你令其获得<中毒>,然后你摸两张牌.",
			diyzhongdu: '中毒',
			diyzhongdu_bg: '毒',
			diyzhongdu_info: '锁定技,回合开始时,你进行判定,若结果不为♥️,你受到1点无来源的伤害,若结果不为♠️,此<中毒>效果失效.',
			diyzhuiling: '追灵',
			//"diyzhuiling_info":"当你受到伤害时,你可以对伤害来源造成伤害的角色造成1点随机属性伤害(雷或火、冰或毒随机).",
			diyfeihua: '飞花',
			//"diyfeihua_info":"你的出牌阶段开始时,你可以视为随机使用一张【知己知彼】或【万箭齐发】.",
			txclanxieshu: '挟术',
			txclanxieshu_info: '当你造成或受到牌的伤害后,你可以弃置X张牌(X为此牌牌名字数)并摸你已损失体力值张牌.',
			txshixin: '释心',
			txshixin_info: '当你成为其他角色使用的锦囊牌目标时,你可以进行一次判定,若结果为黑色,此牌对你无效.',
			txqyyouji: '游击',
			txqyyouji_info: '当你使用单目标锦囊牌指定目标后,你可以令此牌的效果额外结算一次.',
			txmouduan: '谋断',
			txmouduan_info: '结束阶段,若你于本回合内使用过四种花色或三种类别的牌,则你可以移动场上的一张牌.',
			txkaikang: '慷慨',
			txkaikang_info: '当一名角色成为【杀】的目标后,你可以摸一张牌.若如此做,你交给其一张牌并展示之.若为装备牌,该角色可以使用此牌.',
			txhuangfu: '黄符',
			txhuangfu_info: '锁定技,当你受到雷属性伤害时,你防止此伤害.',
			txleizhen: '震雷',
			txleizhen_info: '锁定技,你死亡时,杀死你的角色受到1点无来源的雷属性伤害.',
			txxiebi: '邪庇',
			txxiebi_info: '锁定技,当你受到伤害时,若此伤害大于1,则你将伤害值改为1.',
			txlianbi: '联璧',
			txlianbi_info: '锁定技,当你登场时,你处于连环状态.其他武将的技能和卡牌令你解除连环状态的效果失效,当你受到属性伤害结算后立即进入连环状态.',
			txfeiyan: '飞燕',
			txfeiyan_info: '一名其他角色使用【杀】指定目标时,若其在你的攻击范围内,你可以立即对其使用一张【杀】,若如此做,你摸两张牌.',
			txleili: '雷厉',
			txleili_info: '每当你的【杀】造成伤害后,你可以对另一名敌方角色造成1点雷电伤害.',
			cxyMoJun: '魔军',
			cxyMoJun_info: '锁定技,当友方角色使用【杀】对目标角色造成伤害后,其进行判定,若结果为黑色,友方角色各摸一张牌.',
			cxyKuangXi: '狂袭',
			cxyKuangXi_info: '出牌阶段,你可以失去1点体力,然后对一名其他角色造成1点伤害,若其因受到此伤害而进入濒死状态,当此濒死结算结束后,此技能于此回合内无效.',
			txbaobian: '豹变',
			txbaobian_info: '锁定技,若你的体力值为3或更少,你视为拥有技能〖挑衅〗;若你的体力值为2或更少;你视为拥有技能〖咆哮〗;若你的体力值为1,你视为拥有技能〖神速〗.',
			cxy_BaoYing: '豹营',
			cxy_BaoYing_info: '限定技,友方角色进入濒死状态时,你可以令其体力回复至1.',
			cxyYangWu: '扬武',
			cxyYangWu_info: '锁定技,准备阶段开始时,你对所有其他角色造成1点伤害,然后失去1点体力.',
			cxyRuiQi: '锐骑',
			cxyJingQi: '精骑',
			cxyRuiQi_info: '锁定技,友方角色摸牌阶段额外摸一张牌',
			cxyJingQi_info: '锁定技,友方角色计算与敌方角色距离-1.',
			cxyTunJun: '屯军',
			cxyJiaoXia: '狡黠',
			cxyFengYing: '凤营',
			cxyTunJun_info: '锁定技,每轮游戏开始,若你的体力上限不为1,则你须扣减1点体力上限,然后摸X张牌(X为你的体力上限).',
			cxyJiaoXia_info: '锁定技,友方角色的黑色手牌不计入手牌上限.',
			cxyFengYing_info: '锁定技,敌方角色不能使用牌指定体力值唯一最少的友方角色.',
			cxyFanGong: '反攻',
			cxyFanGong_info: '当你成为一名敌方角色使用牌的目标且该牌结算完成后,你可以对其使用一张【杀】(无距离限制).',
			oldfuman: '抚蛮',
			oldfuman_info: '出牌阶段,你可以将一张【杀】交给一名本回合未获得过〖抚蛮〗牌的其他角色,其于下个回合结束之前使用〖抚蛮〗牌时,你摸一张牌.',
			oldfuman2: '抚蛮',
			oldfuman2_info: '',
			txhuao: '虎傲',
			txhuao_info: '锁定技,回合开始时,你从牌堆中获得一张【杀】.',
			cxyJieLve: '劫掠',
			cxyJieLve_info: '当你对一名其他角色造成伤害后,你可以获得其区域内的各一张牌,然后你横置.',
			hgkurou: '苦肉',
			hgkurou_info: '出牌阶段限一次,你可以弃置一张牌,然后失去1点体力并摸三张牌,本回合使用【杀】的次数上限+1.',
			hgkurou_effect: '苦肉',
			hgkurou_effect_info: '',
			gdsanchen: '三陈',
			gdsanchen_info: '出牌阶段,你可选择一名本回合内未选择过的角色.其摸三张牌,然后弃置三张牌.若其未以此法弃置牌或以此法弃置的牌的类别均不相同,则你获得一枚<陈>且其摸一张牌;否则你本阶段内不能再发动〖三陈〗.',
			txlveming: '掠命',
			txlveming_info: '出牌阶段限一次,你可以选择一名装备区装备比你多的角色,令其选择一个点数,然后你进行判定:<br>若点数相同,你对其造成3点伤害;<br>若点数不同,则你对其造成1点伤害且随机获得其区域内的一张牌.',
			cxyMoQu: '魔躯',
			cxyMoQu_info: '锁定技,每名角色的回合结束时,若你的手牌数不大于当前体力值,你摸两张牌;其他友方角色受到伤害后,你弃置一张牌.',
			cxyYaoWu: '耀武',
			cxyYaoWu_info: '锁定技,当一名角色使用红色【杀】对你造成伤害时,该角色可以回复1点体力或摸一张牌.',
			cxyYingHun: '英魂',
			cxyPoLu: '破掳',
			cxyYingHun_info: '准备阶段,若你已受伤,你可以选择一名其他角色并选择一项:1.令其摸X张牌,然后弃置一张牌;2.令其摸一张牌,然后弃置X张牌.(X为你已损失的体力值)',
			cxyPoLu_info: '锁定技,友方角色杀死一名敌方角色或你死亡时,你令友方角色各摸X张牌(X为此技能发动的次数).',
			txdaoxi: '盗袭',
			txdaoxi_info: '出牌阶段限三次,你可以将一张红色牌当做【顺手牵羊】对一名其他角色使用.',
			txlangxi: '狼疾',
			txlangxi_info: '准备阶段,你可以选择对一名其他角色造成2～4点随机伤害.',
			txkuangyi: '狂亦',
			txkuangyi_info: '每回合限一次.当你于出牌阶段内使用的非装备牌结算结束后,你可以横置武将牌并获得此牌对应的所有实体牌.',
			txtanbei: '贪狈',
			txtanbei_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1.令你随机获得其区域内的一张牌.2.令你此回合内对其使用牌没有次数与距离限制且其非锁定技失效直到回合结束.',
			txtanbei_effect1: '贪狈',
			txtanbei_effect1_info: '',
			txtanbei_effect2: '贪狈',
			txtanbei_effect2_info: '',
			ljxuechi: '血池',
			ljxuechi_info: '锁定技,一名角色回复体力前,若你手牌小于3,改为令你摸一张牌.',
			txzhuxin: '诛心',
			txzhuxin_info: '锁定技,当你对其他造成伤害后若使其进入濒死状态,你令其不能被救活且直接进入结算判定为没有奖惩分明的死亡.',
			txyicheng: '疑城',
			txyicheng_info: '当一名角色成为【杀】的目标后,你可以令该角色摸一张牌,然后弃置一张牌.',
			txnianrui: '年瑞',
			txnianrui_info: '锁定技,摸牌阶段,你额外摸两张牌',
			txmengtai: '萌态',
			txmengtai_info: '锁定技,若你的出牌阶段被跳过,你跳过本回合的弃牌阶段;若你的摸牌阶段被跳过,结束阶段开始时,你摸三张牌',
			txshouyi: '兽裔',
			txshouyi_info: '锁定技,你使用牌无距离限制',
			txrenxing: '任性',
			txrenxing_info: '锁定技,你的回合外,一名角色受到1点伤害后或回复1点体力时,你摸一张牌',
			txyinli: '姻礼',
			txyinli_info: '锁定技.其他角色的回合结束时,若弃牌堆中有于本回合内因弃置而进入弃牌堆的装备牌,则你获得任意张.',
			txzhulian: '株连',
			txzhulian_info: '锁定技,你的武将牌始终横置;每当你受到伤害时,你横置攻击范围内所有角色的武将牌.',
			txkeji: '克己',
			txkeji_info: '锁定技,若你没有在出牌阶段内使用过颜色不同的牌,则你本回合的手牌上限+4.',
			txkeji_add: '克己',
			txkeji_add_info: '',
			txnangce: '囊策',
			txnangce_info: '你使用普通锦囊牌时,可令当前回合角色摸一张牌.',
			txduanzui: '断罪',
			txduanzui_info: '回合结束时,若除你以外的其他角色有手牌且小于3,你可以对所有符合条件的角色造成3-X的火焰伤害(X为其现有手牌数).',
			txyingyang: '鹰扬',
			txyingyang_info: '当你的拼点牌亮出后,你可以令此牌的点数+3或-3(至多为K,至少为1).',
			mdqianxi7: '潜袭',
			mdqianxi72: '潜袭',
			mdqianxi72_bg: '袭',
			mdqianxi7_info: '准备阶段,你可以摸一张牌,并弃置一张牌,然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌直到回合结束.',
			mdqianxi: '潜袭',
			mdqianxi_info: '准备阶段开始时,你可以进行判定,然后你选择距离为1的一名角色,直到回合结束,该角色不能使用或打出与结果颜色相同的手牌.',
			zylongdan: '龙胆',
			zylongdan_info: '你可以将【杀】当【闪】,【闪】当【杀】使用或打出.当你发动〖龙胆〗使用的【杀】被【闪】抵消时,你可以对另一名角色造成1点伤害;当你发动〖龙胆〗使用的【闪】抵消了【杀】时,你可以令一名其他角色回复1点体力(不能是【杀】的使用者).',
			zglkongcheng: '空城',
			zglkongcheng_info: '锁定技,若你没有手牌,1.当你成为【杀】或【决斗】的目标时,取消之;2.你的回合外,其他角色交给你牌后,你将这些牌置于你的武将牌上.摸牌阶段开始时,你获得武将牌上的这些牌.',
			txjuxiang: '巨象',
			txjuxiang_info: '锁定技.①【南蛮入侵】对你无效.②当其他角色使用【南蛮入侵】结算结束后,你获得此牌对应的所有实体牌.③结束阶段,若你未于本回合使用过【南蛮入侵】,你可以将一张游戏外的随机【南蛮入侵】(共2张)交给一名角色.',
			txdaoji: '盗戟',
			txdaoji_info: '出牌阶段限一次,你可以弃置一张非基本牌并选择一名其他角色,获得其一张牌.若你以此法获得的牌为:基本牌,你摸一张牌;装备牌,你使用此牌并对其造成1点伤害.',
			txhj_suoming: '索命',
			txhj_suoming_info: '结束阶段,将任意名未被横置的其他角色的武将牌横置.',
			txhj_huangmen: '黄门',
			txhj_huangmen_info: '准备或结束阶段,若你没有手牌,你选择一项:1.摸两张牌;2.随机获得一名敌方角色的一张牌.',
			txhj_mouqiang: '谋强',
			txhj_mouqiang_info: '锁定技,当你受到大于1点的伤害后,你获得伤害来源X张牌(X为伤害值一半,向下取整),每有一张基本牌,你回复1点体力;每有一张非基本牌,你对其造成1点伤害.',
			txhj_suzhi: '夙智',
			txhj_suzhi_info: '锁定技,每回合累计限三次;①当你于回合内因执行【杀】或【决斗】造成伤害时,此伤害+1;②你于回合内使用非转化的锦囊牌时摸一张牌,且无距离限制;③当有其他角色于你的回合内弃置牌后,你获得该角色的一张牌;④结束阶段,你获得〖反馈〗直到下回合开始.',
			txmanjia: '蛮甲',
			txmanjia_info: '锁定技,若你的装备区内没有防具牌,则你视为装备了【藤甲】.',
			txmanzhen: '蛮阵',
			txmanzhen_info: '①出牌阶段限一次:你可将任意张牌当做【南蛮入侵】对等量的角色使用;②你使用【南蛮入侵】对体力值不小于你的角色造成伤害时,你可失去一点体力令此伤害加一;③【南蛮入侵】对你无效.',
			txfusha: '赋杀',
			txfusha_info: '锁定技,当你使用【杀】造成伤害时,此伤害+1.',
			txleizhou: '雷咒',
			txleizhou_info: '锁定技,准备阶段,你对随机一名其他角色造成1点雷属性伤害.',
			txzhennu: '震怒',
			txzhennu_info: '准备阶段,你可以对一名敌方角色造成1点伤害.',
			txyongguan: '勇冠',
			txyongguan_fate: '勇冠',
			txyongguan_info: '锁定技,当你受到伤害时,你防止此伤害,然后获得等同于伤害值的<勇>标记.你的回合结束时,你弃置等同于<勇>数量的手牌并弃置所有<勇>标记.(若弃牌的牌数不够,则失去剩余数量的体力值)',
			txchengyuan: '成渊',
			txchengyuan_info: '弃牌阶段开始时,你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上:若你有至少三张<成渊>牌,你移去<成渊>牌并选择一名其他角色,该角色受到2点伤害并弃置其装备区的所有牌.',
			txbenji: '奔激',
			txbenji_info: '你的回合开始时,你可以选择对一名其他角色造成X点伤害.(X为你损失的体力值)若其未因此伤害进入濒死阶段,你失去1点体力.',
			txyonglve: '勇略',
			txyonglve_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点.',
			txjiang: '激昂',
			txjiang_info: '每名角色的回合限一次,每当你使用或被使用一张【决斗】或【杀】时(指定目标或成为目标后),你可以摸2张牌.',
			txfengxing: '风行',
			txfengxing_info: '准备阶段,你可以选择一名敌方角色,若如此做,视为对其使用了一张【杀】.',
			jlbjijiang: '激将',
			jlbjijiang1: '激将',
			jlbjijiang2: '激将',
			jlbjijiang3: '激将',
			jlbjijiang_info: '当你需要使用或打出【杀】时,你可以令其他蜀势力角色依次选择是否打出一张【杀】.若有角色响应,则你视为使用或打出了此【杀】.',
			jzjhuangtian: '黄天',
			jzjhuangtian2: '黄天',
			jzjhuangtian_info: '其他群势力角色的出牌阶段限一次,其可以交给你一张【闪】或【闪电】.',
			/*十常侍之乱*/
			txningming: '佞命',
			txningming_info: '其他角色对你造成伤害时,你可以令该角色选择1项执行:1,将1张♠️花色手牌交给你;2,流失1点血量.',
			/*部分装备技能转普通技能*/
			txfeilong: '飞龙',
			txfeilong_info: '当你杀死角色后,若对局未结束,你令其复活成为你的队友并将体力和体力上限调整至3.',
			txshenfu: '神符',
			txshenfu_info: '锁定技,当你受到一种牌造成的伤害后,本局相同牌名的牌对你造成的伤害-1.',
			txchiyan: '赤焰',
			txchiyan_info: '锁定技,你造成的伤害均视为具有火属性.',
			txguofeng: '国风',
			txguofeng_info: '锁定技,你不能成为其他角色使用普通锦囊牌的目标.',
			txjuechen: '绝尘',
			txjuechen_info: '其他角色计算与你距离+2;其他角色计算与己方其他角色距离+1.',
			txpili: '霹雳',
			txpili_info: '当你对其他角色造成伤害后,你可令其减少等同伤害值的体力上限.',
			txbingren: '冰刃',
			txbingren_info: '你使用普通的【杀】时,你可以将此【杀】改为冰【杀】.',
			txxuwang: '虚妄',
			txxuwang_info: '锁定技,摸牌阶段,你额外摸两张牌;你的手牌上限-1.',
			txlianji: '连击',
			txlianji_info: '锁定技,你使用【杀】的次数+3.',
			txlinwei: '麟威',
			txlinwei_info: '当你使用【杀】对目标角色造成伤害时,你可以弃置其装备区里的一张宝物牌.',
			txtianji: '天戟',
			txtianji_info: '锁定技,你于出牌阶段使用的第一张【杀】目标+2.',
			txfuchen: '拂尘',
			txfuchen_info: '锁定技,当你使用【杀】指定目标后,你令目标角色选择一项:①弃置一张牌,若此牌和【杀】花色相同,则你获得之.②其不可响应此【杀】.',
			Neihuan_huanshi: '宦势',
			Neihuan_huanshi_info: '锁定技,每回合各限一次,当你成为敌方使用牌的唯一目标时,其他拥有此技能的一名己方角色随机弃置一张同类型的牌,使此牌无效. 当你使用杀或伤害类锦囊指定敌方为目标后,其他拥有此技能的一名己方角色随机弃置一张同类型的牌,使此牌不能被抵消.',
			Neihuan_jingshe: '惊蛇',
			Neihuan_jingshe_info: '锁定技,当你受到伤害后,若此时为敌方角色的回合,该角色不能使用牌指定你为目标直到出牌阶段结束.若此伤害超过1点,你回复1点体力.',
			fenghuo_suohui: '索贿',
			fenghuo_suohui_info: '锁定技,当你成为其他角色牌的使用目标后,该角色必须选择给你一张牌或者让你摸两张牌.',
			txhuolu: '祸赂',
			txhuolu_info: '锁定技,出牌阶段开始时,若你的手牌数为全场最多.你将手牌弃置至与全场手牌数最少的角色相同,并对所有敌方随机造成2点伤害.',
			Neihuan_niluan: '逆乱',
			Neihuan_niluan_info: '出牌阶段,你可以将一张黑色牌当做【杀】使用.此【杀】使用结算完成后,若你未因此【杀】造成过伤害,则你令此【杀】不计入使用次数.',
			neihuan_heimu: '黑幕',
			neihuan_heimu_info: '锁定技,敌方角色使用黑色牌时,你摸一张牌.你使用黑色牌时,敌方随机一名角色随机弃置一张牌.',
			txfuji: '伏击',
			txfuji_info: '锁定技,你的【杀】未造成伤害时,你回复1点体力;当你受到伤害后,你可以使用一张【杀】.',
			txyuanwei: '援围',
			txyuanwei_info: '每当一名角色使用或打出一张【杀】时,你可以令其摸一张牌.',
			neihuan_andu: '暗毒',
			neihuan_andu_info: '锁定技,敌方角色的回合结束时,若其体力值小于等于你,你对其造成1点伤害.',
			Neihuan_biri: '蔽日',
			Neihuan_biri_info: '锁定技,当你受到敌方角色造成的伤害时,该角色弃置所有非基本牌;若其弃置的牌中有黑色牌,此伤害-1.',
			neihuan_leixi: '雷袭',
			neihuan_leixi_info: '当你于回合外使用或打出【杀】或【闪】时,你可以选择一名其他角色,令其进行判定,若结果为红色,弃置该角色两张牌;若结果为黑色,对其造成2点伤害.',
			neihuan_huangjie: '黄结',
			neihuan_huangjie_info: '锁定技,出牌阶段,你使用一张牌时,若此牌目标不是敌方角色,你摸一张牌.',
			neihuan_chibi: '持匕',
			neihuan_chibi_info: '锁定技,出牌阶段结束时,若你手牌中没有杀,你从牌堆中获得两张【杀】.(没有不会获得,牌堆中若仅有一张则只获得一张)',
			Neihuan_jiquan: '集权',
			Neihuan_jiquan_info: '锁定技,准备阶段,将你的手牌摸至十张.然后若你的手牌数为全场唯一最多,你随机获得所有敌方角色各一张牌.',
			zhangrang_yankong: '炎恐',
			zhangrang_yankong_info: '锁定技,当你受到伤害后,你下一次对敌方角色造成的伤害+1(最多叠加四次).',
			txshiyuan: '诗怨',
			txshiyuan_info: '每回合每项限一次,当你成为其他角色使用牌的目标后:①若其体力值大于你,你摸三张牌.②若其体力值等于你,你摸两张牌.③若其体力值小于你,你摸一张牌.',
			txyuwei: '余威',
			txyuwei_info: '锁定技,其他角色的回合内,你将〖诗怨〗改为<每回合每项限两次>.',
			//何进诛宦赛季补充#搬运自【活动Boss】扩展,并特此非常感谢其作者(烟雨墨染)大佬!
			taixu_linglu: '令戮',
			taixu_linglu_info: '出牌阶段阶段开始时,你可令一名角色于其回合结束前造成2点伤害,若其成功,其摸两张牌,若其失败,其失去1点体力.',
			taixu_mouzhu: '谋诛',
			taixu_mouzhu_info: '出牌阶段限一次,你可以选择一名其他角色,令除其以外体力值小于等于你的其他角色依次选择是否交给你一张牌.若你未因此获得牌,则你与这些角色依次失去1点体力;否则其选择视为你对其使用一张伤害基数为X的【杀】或【决斗】(X为你以此法获得的牌数且至多为4).',
			taixu_linglu: '令戮',
			taixu_linglu_info: '出牌阶段阶段开始时,你可令一名角色于其回合结束前造成2点伤害,若其成功,其摸两张牌,若其失败,其失去1点体力.',
			taixu_zhulian: '株连',
			taixu_zhulian_info: '出牌阶段阶段开始时,你可令一名其他角色下一次使用【杀】造成伤害,若其成功,你获得受伤角色的一张牌,若其失败,你与其横置.',
			taixu_xiehui: '胁贿',
			taixu_xiehui_info: '出牌阶段阶段开始时,你可令一名其他角色将两张牌交给你,若其失败,你对其造成1点伤害.',
			taixu_yishi: '倚势',
			taixu_yishi_info: '当己方角色的强令技能执行:成功,你摸一张牌,失败,你弃置强令目标的一张牌.',
			taixu_jinxing: '禁行',
			taixu_jinxing_info: '出牌阶段阶段开始时,你可令一名其他角色于其回合结束前不使用基本牌,若其失败,你选择令其失去1点体力或获得其使用的基本牌和其一张手牌.',
			taixu_quanqing: '权倾',
			taixu_quanqing_info: '出牌阶段阶段开始时,你可令一名角色于其回合结束前不发动技能,若其成功,其翻面,若其失败,你加2点体力上限并回复2点体力.',
			taixu_jinwei: '禁卫',
			taixu_jinwei_info: '当你需要使用【杀】或【闪】时,其他拥有技能<禁卫>的角色可弃置一张牌,代替你使用之.',
			taixu_zhanhuo: '斩获',
			taixu_zhanhuo_info: '出牌阶段阶段开始时,你可令一名角色为下一个造成濒死伤害的来源,若其成功,其摸两张牌(若该濒死角色死亡,改成其摸三张牌,你摸一张牌).',
			taixu_jiaoxie: '缴械',
			taixu_jiaoxie_info: '出牌阶段阶段开始时,你可令一名有装备的其他角色交给你其装备区里的任意张牌,若其成功,其摸等同交出的装备数的牌,若其失败,其受到你造成的1点伤害.',
			taixu_zhuosheng: '擢升',
			taixu_zhuosheng_info: '出牌阶段阶段开始时,你可弃一张牌,然后令一名其他角色于其回合结束前获得至少五张牌,若其成功,则其加1点体力上限并回复1点体力,然后交给你一张非基本牌.',
			taixu_mouqiang: '谋强',
			taixu_mouqiang_info: '锁定技,当你受到大于1点的伤害后,你获得伤害来源的X张牌(X为伤害值的一半,向下取整),每有一张基本牌,你回复1点体力,每有一张非基本牌,你对其造成1点伤害.', //搬运到这,特此再次感谢<烟雨墨染>大佬 !!
			//侍灵技能扩充,搬运自K佬的【EpicFX】扩展,再次感谢K佬的侍灵素材和技能代码提供!
			txhj_jinwuSkill1: '永恒烈日',
			txhj_jinwuSkill2: '三足',
			txhj_jinwuSkill3: '赤地千里',
			txhj_canglongSkill1: '风云变色',
			txhj_canglongSkill2: '鸣嗷',
			txhj_canglongSkill3: '披星戴月',
			txhj_kangkangSkill1: '丰收瑞鸣',
			txhj_kangkangSkill2: '安康',
			txhj_niuniuSkill1: '巧拙守真',
			txhj_niuniuSkill2: '兕袭',
			diy_xiongshiSkill3: '狂狮愤戾',
			diy_xiongshiSkill1: '霸体',
			diy_xiongshiSkill2: '兽噬',
			xiongshi_fuqi: '兽噬封印',
			//——分离线——
			/*合纵抗秦*/
			bubing_fangzhen: '方阵',
			bubing_fangzhen_info: '锁定技,当你成为非秦势力角色使用普通锦囊或【杀】的目标后,若其在你的攻击范围内,你进行判定,若为黑色,则视为你对其使用一张【杀】.',
			bubing_changbing: '长兵',
			bubing_changbing_info: '锁定技,你的攻击范围+2.',
			shangyang_bianfa: '变法',
			shangyang_bianfa_info: '出牌阶段限一次,你可以将一张普通锦囊牌当作【商鞅变法】使用.',
			shangyang_limu: '立木',
			shangyang_limu_info: '锁定技,你使用的普通锦囊牌不是【无懈可击】的合法目标.',
			shangyang_kencao: '垦草',
			shangyang_kencao_info: '锁定技,你存活时,秦势力角色每造成1点伤害,可获得一个<功>标记.若秦势力角色拥有大于等于3个<功>标记,则弃置所有<功>标记,增加1点体力上限,并回复1点体力.',
			zhangyi_lianheng: '连横',
			zhangyi_lianheng_info: '锁定技,游戏开始时,你令随机一名非秦势力的角色获得<横>标记.拥有<横>标记的角色使用的牌不能指定秦势力角色为目标.你的回合开始时,场上所有角色弃置<横>标记.若非秦势力角色数大于等于2,则你令随机一名非秦势力角色获得<横>标记.',
			zhangyi_xichu: '戏楚',
			zhangyi_xichu_info: '锁定技,当你成为【杀】的目标时,若其攻击范围内有其他角色,则该角色需弃置一张点数为6的牌,否则此【杀】的目标转移给其攻击范围内你指定的另一名角色.',
			zhangyi_xiongbian: '雄辩',
			zhangyi_xiongbian_info: '锁定技,当你成为普通锦囊牌的目标后,你判定.若结果点数为6,你取消此牌的所有目标.',
			zhangyi_qiaoshe: '巧舌',
			zhangyi_qiaoshe_info: '当一名角色进行判定时,你可以令判定结果的点数加减3以内的任意值.',
			txshuzhen: '淑贞',
			txshuzhen_info: '每回合限两次,你可以将一张黑色牌当作【桃】使用.',
			miyue_zhangzheng: '掌政',
			miyue_zhangzheng_info: '锁定技,你的回合开始时,所有非秦势力角色依次选择:1.弃置一张手牌;2.失去1点体力.',
			miyue_taihou: '太后',
			miyue_taihou_info: '锁定技,男性角色对你使用【杀】或普通锦囊牌时,需要额外弃置一张同种类型的牌,否则此牌无效.',
			miyue_youmie: '诱灭',
			miyue_youmie_info: '出牌阶段限一次,你可以将一张牌交给一名角色,若如此做,直到你的下个回合开始,该角色于其回合外无法使用或打出牌.',
			miyue_yintui: '隐退',
			miyue_yintui_info: '锁定技,当你失去最后一张手牌时,你翻面.你的武将牌背面朝上时,若受到伤害,令此伤害-1,然后摸一张牌.',
			baiqi_wuan: '武安',
			baiqi_wuan_info: '锁定技,你存活时,所有秦势力角色使用【杀】的上限+1.',
			baiqi_shashen: '杀神',
			baiqi_shashen_info: '你可以将手牌中的任意一张牌当【杀】使用或打出.每回合你使用的第一张【杀】造成伤害后,摸一张牌.',
			baiqi_fachu: '伐楚',
			baiqi_fachu_info: '锁定技,当你因对非秦势力角色造成伤害而导致其进入濒死状态后,你随机废除其一个装备栏.若其没有装备栏可废除,其改为失去一点体力上限.之后若其死亡,视为被你击杀',
			baiqi_changsheng: '常胜',
			baiqi_changsheng_info: '锁定技,你使用【杀】无距离限制.',
			qibing_changjian: '长剑',
			qibing_changjian_info: '锁定技,你的攻击范围+1,你使用【杀】指定目标后,可额外选择一名目标,或令此杀伤害+1.',
			qibing_liangju: '良驹',
			qibing_liangju_info: '锁定技,你使用【杀】指定目标后,令目标进行判定,若为♠️则此杀不可被闪避;当你成为【杀】的目标后,你进行判定,若为♥️则此杀对你无效.',
			txlongyi: '龙裔',
			txlongyi_info: '每回合限两次,你可将所有手牌当做任意基本牌使用或打出.若此牌对应的实体牌中:有锦囊牌,你摸一张牌;有装备牌,此牌不可被响应.',
			txrenwang: '人望',
			txrenwang_info: '出牌阶段,你可以弃掉两张牌并指定一名手牌数大于你的角色,你摸牌至与该角色手牌数相等,每阶段限一次.',
			txshiwei: '施威',
			txshiwei2: '威加海内',
			txshiwei_info: '当其他角色失去最后一张手牌时,你可以将牌堆顶的牌置于他武将牌上,称为威,该角色的回合开始时跳过出牌阶段并弃掉所有的威.',
			txhunpofu: '破釜', //魂项羽
			txhunpofu_info: '你的血量不满时,你的【决斗】和【杀】造成的伤害＋1.',
			txhongmen: '鸿门', //魂项羽
			txhongmen_info: '回合开始阶段,你可以指定除你以外的一名角色,弃置X张牌(X为你失去的血量).',
			lvbuwei_jugu: '巨贾',
			lvbuwei_jugu_info: '锁定技,你的手牌上限+X;游戏开始时,你多摸X张牌(X为你的体力上限).',
			lvbuwei_qihuo: '奇货',
			lvbuwei_qihuo_info: '出牌阶段限一次,你可以弃置一种类型的牌,并摸等同于你弃置牌数量2倍的牌.',
			lvbuwei_chunqiu: '春秋',
			lvbuwei_chunqiu_info: '锁定技,当你于一回合内首次使用或打出牌时,你摸一张牌.',
			lvbuwei_baixiang: '拜相',
			lvbuwei_baixiang_info: '觉醒技,你的回合开始时,若你的手牌数大于等于你当前体力的3倍,则你将体力恢复至体力上限,并获得<仲父>技能.',
			lvbuwei_zhongfu: '仲父',
			lvbuwei_zhongfu_info: '锁定技,你的回合开始时,直到你的下个回合开始为止,你随机获得<界奸雄>、<界仁德>、<界制衡>中的一个.',
			zhaoji_shanwu: '善舞',
			zhaoji_shanwu_info: '锁定技,你使用【杀】指定目标后,你进行判定,若为黑色则敌方不能打出【闪】;当你成为【杀】的目标后,你进行判定,若为红色此杀无效.',
			zhaoji_daqi: '大期',
			zhaoji_daqi_info: '锁定技,你每使用或打出一张手牌、造成1点伤害、受到1点伤害,均会得到一个<期>标记.你的回合开始时,若你拥有的<期>标记大于等于10,则弃置所有<期>,体力回复至体力上限,并将手牌补至体力上限.',
			zhaoji_xianji: '献姬',
			zhaoji_xianji_info: '限定技,出牌阶段,你可以弃置所有手牌、装备牌和<期>标记,失去1点体力上限,然后立即发动大期的回复体力和补牌效果.',
			zhaoji_huoluan: '祸乱',
			zhaoji_huoluan_info: '锁定技,你每次发动大期的回复体力和补牌效果后,你对所有其他角色造成1点伤害.',
			txshangnu: '上弩',
			txshangnu_info: '锁定技,回合开始时,若你的装备区里没有【秦弩】,你使用之;当你受到1点伤害后,若你的装备区里没有【秦弩】,你摸一张牌.',
			zhaogao_zhilu: '指鹿',
			zhaogao_zhilu2: '指鹿',
			zhaogao_zhilu_info: '你可以将红色手牌当【闪】使用或打出;将黑色手牌当【杀】使用或打出.',
			zhaogao_zhilu2_info: '你可以将红色手牌当【闪】使用或打出;将黑色手牌当【杀】使用或打出.',
			zhaogao_gaizhao: '改诏',
			zhaogao_gaizhao_info: '当你成为【杀】或普通锦囊牌的目标后(借刀杀人除外),若场上有其他秦势力角色存活,你可以将此牌的目标改为其他不是该牌目标的秦势力角色.',
			zhaogao_haizhong: '害忠',
			zhaogao_haizhong_info: '锁定技,非秦势力角色回复体力后,该角色获得一个<害>标记.然后若场上没有处于濒死阶段的角色,其需要选择:1.弃置一张红色牌,2.受到你造成的X点伤害(X为该角色拥有的<害>标记).',
			zhaogao_aili: '爰历',
			zhaogao_aili_info: '锁定技,你的出牌阶段开始时,你额外获得2张普通锦囊.',
			yingzheng_yitong: '一统',
			yingzheng_yitong_info: '锁定技,当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】时,你令所有不为此牌目标的非秦势力角色也成为此牌的目标.你使用【杀】和【顺手牵羊】无距离限制.',
			yingzheng_shihuang: '始皇',
			yingzheng_shihuang_info: '锁定技,其他角色的回合结束后,你有X%的几率进行一个额外的回合(X为当前轮数*6,且X最大为100).',
			yingzheng_fenshu: '焚书',
			yingzheng_fenshu_info: '锁定技,非秦势力角色使用普通锦囊牌时,若此牌是其本回合使用的第一张普通锦囊牌,则你取消此牌的所有目标.',
			txkqzulong: '祖龙',
			txkqzulong1: '祖龙',
			txkqzulong_info: '锁定技,回合开始时,若你的装备区里没有【真龙长剑】和【传国玉玺】,你使用之;当你受到1点伤害后,若你的装备区里没有【真龙长剑】和【传国玉玺】,你摸一张牌.',
			txxinchao: '嘲弄',
			txxinchao_info: '准备阶段,你可以对所有敌方角色造成2点伤害.',
			txxinli: '新立',
			txxinli_info: '锁定技,当一名角色死亡后,你增加2点体力上限,回复2点体力然后摸一张牌.',
			spjianqu: '坚躯',
			spjianqu1: '坚躯',
			spjianqu_info: '锁定技,当你受到伤害时,此伤害-1;每回合限三次,当你进入濒死状态时,你回复体力至1点',
			/*复活侯备*/
			txhouyuana: '后援',
			txhouyuana_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你所有手牌和你判定区内的所有牌,然后复原并替换你的武将牌为【虞翻】,然后摸四张牌并将体力回复至你的体力上限.',
			txhouyuanb: '后援',
			txhouyuanb_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你所有手牌和你判定区内的所有牌,然后复原并替换你的武将牌为【薛综】,然后摸四张牌并将体力回复至你的体力上限.',
			txcbwuyou: '无忧',
			txcbwuyou_info: '锁定技,你始终跳过摸牌阶段.',
			txbaoji: '暴击',
			txbaoji_info: '锁定技,你使用伤害牌造成伤害时,有80%概率令此伤害+1.',
			//完全体震怒
			txhj_zhennu: '震怒',
			txhj_zhennu_info: '准备阶段,你可以对所有敌方角色造成1点伤害.',
			/*千里走单骑*/
			danji_shili: '施礼',
			danji_shili_info: '出牌阶段和弃牌阶段开始时,你可以弃置一张手牌,所有敌方角色弃置所有同花色的手牌.',
			qianli_tingqiang: '挺枪',
			qianli_tingqiang_info: '锁定技,你对只有一种颜色手牌的目标造成的伤害+1.',
			qianli_xili: '系力',
			qianli_xili_info: '每回合限一次,你的回合外,当其他拥有<系力>技能的角色在其回合内对没有<系力>技能的角色造成伤害时,你可以弃置一张牌,令此伤害+1,然后你与其各摸两张牌.',
			danji_xianfeng: '先锋',
			danji_xianfeng_info: '锁定技,敌方角色计算与己方其他角色的距离+1.',
			qianli_yangbai: '佯败',
			qianli_yangbai_info: '锁定技,当你受到敌方角色【杀】造成的伤害后,本回合伤害来源计算与你的距离+1.敌方角色回合结束时,若你不在其攻击范围内,对其造成2点伤害并弃置其武器牌.',
			danji_anjian: '暗箭',
			danji_anjian_info: '锁定技,当你使用【杀】指定目标后,若你不在其攻击范围内,则此杀伤害+1且无视其防具.若其因执行此【杀】的效果受到伤害而进入濒死状态,则其不能使用【桃】直到此濒死事件结算结束.',
			qianli_wangong: '挽弓',
			qianli_wangong_info: '你可以将装备牌当做无距离和次数限制的【杀】使用.此杀造成的伤害改为X(X为你计算与该角色的距离且至多为3).',
			danji_cangbi: '藏壁',
			danji_cangbi_info: '锁定技,每回合你首次受到伤害后,你摸一张牌.回合开始时若你未受伤,则跳过你的出牌阶段和弃牌阶段.其他角色的出牌阶段内,若你未受伤,则其使用的第一张【杀】对你无效,若你体力值小于你的体力上限,其第一张普通锦囊牌对你无效.  ',
			danji_fencha: '奉茶',
			danji_fencha_info: '锁定技,所有角色在其回合结束时25%几率增加1点体力上限.',
			danji_jiayan: '假宴',
			danji_jiayan_info: '锁定技,当你受到其他角色造成的伤害时,若你的区域有牌,你随机弃置一张牌然后立即摸一张牌,令此伤害改为流失1点体力,然后伤害来源摸一张牌.',
			danji_choudao: '抽刀',
			danji_choudao_info: '锁定技,你使用牌无距离限制.当你使用牌指定目标后,随机选择其中一名敌方角色,随机弃置其两张牌并对其造成1点伤害.',
			qianli_chuixi: '锤袭',
			qianli_chuixi_info: '出牌阶段限一次,你可以指定一名敌方角色,依次弃置一张牌并对其造成1点伤害.(每次弃置的牌的点数需要大于等于本回合内上次以此法弃置的牌的两倍)',
			danji_jiayi: '假义',
			danji_jiayi_info: '锁定技,当你使用红色牌造成伤害后,你摸两张牌.回合开始时你与所有敌方角色分别弃置所有黑色手牌,然后你从弃牌堆中随机获得等于你弃牌数的红色牌. ',
			danji_huoji: '火计',
			danji_huoji_info: '你可以将一张红色手牌当【火攻】使用,每回合限三次.',
			qianli_zonghuo: '纵火',
			qianli_zonghuo_info: '锁定技,你造成的火焰伤害+X.(X为本回合此技能触发的次数,至多为2)',
			danji_jiashu: '家书',
			danji_jiashu_info: '锁定技,当你在摸牌阶段外获得牌后,每获得一张牌则获得1个>家书"标记,当你拥有的>家书<标记大于等于7时,移除所有>家书<标记,你摸两张牌并横置武将牌.然后失去<家书>,获得技能<殁亡>.',
			danji_jingyi: '敬义',
			danji_jingyi_info: '锁定技,己方角色使用红色牌无距离和次数限制,且使用红色牌造成伤害时伤害+1,受到红色牌伤害时伤害-1.',
			fenghuo_zhongyong: '忠勇',
			fenghuo_zhongyong_info: '当你使用【杀】后,你可以将此【杀】以及目标角色使用的【闪】交给一名其他角色,若其获得的牌中有红色,则其可以对你攻击范围内的角色使用一张【杀】.若其获得的牌中有黑色,其摸一张牌.',
			txzhuyi: '助义',
			txzhuyi_info: '每名角色的回合限两次,当一名角色造成伤害时,你可以令其进行判定,若结果为红色,此伤害+1;若结果为黑色,该角色回复1点体力.',
			jcpsongwei: '颂威',
			jcpsongwei2: '颂威',
			jcpsongwei_info: '其他魏势力的角色的判定牌结果为黑色且生效后,其可以令你摸一张牌.',
			txfengling: '奉令',
			txfengling_info: '锁定技,每轮开始时你获得一个<令>,至多拥有三个<令>.每当有角色进入濒死状态时你失去一个<令>.当你拥有大于等于:一个<令>时,你手牌无上限且摸牌阶段多摸三张牌;两个<令>时,你受到伤害后摸一张牌;三个<令>时,你使用牌无距离和次数限制.',
			txzhangshi: '仗势',
			txzhangshi_info: '锁定技,每名角色的回合限三次,当你在摸牌阶段外获得牌后,进行一次判定,若结果为:红色,对所有敌方角色造成1点伤害;黑色,随机弃置所有敌方角色各一张牌.',
			qianli_hengjiang: '横江',
			qianli_hengjiang_info: '锁定技,当你造成伤害后,随机横置一名敌方角色.每当有角色横置时,你摸一张牌.',
			qianli_xunwen: '询文',
			qianli_xunwen_info: '锁定技,当你受到卡牌造成的伤害后,伤害来源随机弃置一张与该卡牌花色相同的牌,若伤害来源没有同花色的牌可以弃置,你摸两张牌.',
			fenghuo_chongfeng: '冲锋',
			fenghuo_chongfeng_info: '准备阶段开始时,你可以视为使用一张无距离限制的【杀】.',
			fenghuo_fuzhe: '覆辙',
			fenghuo_fuzhe_info: '锁定技,当你受到卡牌造成的伤害后,弃置伤害来源手中所有的同名牌.',
			ysweidi: '伪帝',
			weidi_tag: '伪帝',
			ysweidi_info: '主公技,弃牌阶段开始时,若你的手牌数大于手牌上限,则你可以将至多X张手牌分别交给等量的其他群雄角色(X为你的手牌数与手牌上限之差).',
			txhj_guiji: '诡计',
			txhj_guiji_info: '锁定技,准备阶段结束时,若你的判定区内有牌,你随机弃置其中一张牌.',
			dcshangyu: '赏誉',
			dcshangyux: '赏誉',
			dcshangyu_info: '锁定技,游戏开始时你获得一张【杀】并标记之,然后将之交给一名角色.此【杀】造成伤害后你和使用者各摸一张牌;进入弃牌堆后你将之交给一名本回合未以此法指定过的角色.',
			dccaixia: '才瑕',
			dccaixia_info: '当你造成或受到伤害后,你可摸至多x张牌(x为游戏人数且最多为5).若如此做,你无法发动此技能,直到你累计使用了等量的牌.',
			//魔改官渡之战
			txpodi: '破敌',
			txpodi2: '破敌',
			txpodi3: '破敌',
			txpodi_info: '当你使用【杀】指定目标后,你可以将其的至多两张牌置于其武将牌上,然后其于当前回合结束时获得这些牌.当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1.',
			minijinjiu: '禁酒',
			minijinjiu_info: '锁定技.①你的【酒】均视为【杀】且不计入出牌阶段的使用次数.②其他角色使用的【酒】进入弃牌堆后,你获得之.③你的回合内,其他角色不能使用【酒】.',
			txyongzhan: '勇战',
			txyongzhan_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】时,你可以摸一张牌.',
			txhj_xianxi: '先袭',
			txhj_xianxi_info: '锁定技,每轮开始时,你执行一个额外的回合.',
			txchoudou: '仇斗',
			txchoudou_info: '结束阶段开始时,你可以视为使用一张无距离限制的【决斗】.',
			txjiuchi: '酒池',
			txjiuchi_info: '你可以将一张黑色牌当做【酒】使用;锁定技,你使用【酒】无次数限制.',
			txhj_jiuchi: '酒痴',
			txhj_jiuchi_info: '太虚新技能,暂未书写待定中......',
			olranshang: '燃殇',
			olranshang2: '燃殇',
			olranshang_info: '锁定技,当你受到1点火焰伤害后,你获得1枚「燃」标记;结束阶段开始时,你失去X点体力.(X为「燃」标记的数量)',
			txsiwu: '死物',
			txsiwu2: '死物',
			txsiwu_info: '锁定技,你始终跳过出牌阶段和弃牌阶段.',
			txjianjia: '坚甲',
			txjianjia_info: '锁定技,若你的装备区内没有防具牌,则【南蛮入侵】、【万箭齐发】、普通【杀】对你无效.',
			txliangwu: '粮物',
			txliangwu_info: '锁定技,当你成为【决斗】的目标时,取消之.',
			txhj_qingzhong: '清忠',
			txhj_qingzhongx: '清忠',
			txhj_qingzhongx_info: '出牌阶段开始时,你可以摸两张牌,若如此做,此阶段结束时,你与手牌数最少的角色交换手牌.',
			txjipo: '疾破',
			txjipo_info: '锁定技,你每回合使用的前X张牌无距离与次数限制且不能被响应(X为你已损失的体力值).',
			txfenlu: '奋戮',
			txfenlu_info: '结束阶段,你可以选择一名敌方角色,然后失去1点体力,视为对其使用了一张【杀】.',
			txduwu: '独武',
			txduwu_info: '锁定技,每回合限一次,当你使用【杀】造成伤害时,此伤害+1.',
			fenghuo_zhendu: '鸩毒',
			fenghuo_zhendu_info: '其他角色的出牌阶段开始时,你可以弃置一张手牌,该角色视为使用一张【酒】,然后你对其造成1点伤害.',
			txqishi: '奇士',
			txqishi_info: '锁定技,你使用的普通锦囊牌不能被【无懈可击】响应.',
			txzhongzuo: '忠佐',
			txzhongzuo_info: '每当你受到其他角色造成的1点伤害后,你可与该角色各摸一张牌.',
			txmingmen: '名门',
			txmingmen_info: '当你使用【万箭齐发】选择目标后,你可以为此牌减少一个目标.',
			txxuejian: '血箭',
			txxuejian_info: '结束阶段,你可以选择一名敌方角色,然后视为对其使用两张【万箭齐发】.',
			txyanming: '延命',
			txyanming_info: '锁定技.①当你不因〖延命〗成为唯一牌的目标时,若此牌不为转化牌且对应的实体牌牌数为1且不为【桃】或【酒】且你的<延>数小于你的体力上限,则你将此牌置于你的武将牌上,称为<延>,且取消此牌的目标.②结束阶段开始时,若你有<延>,则你令所有<延>的原使用者依次对你使用所有<延>,将无法使用的<延>置入弃牌堆.',
			txshatun: '煞吞',
			txshatun_info: '准备阶段,你可以选择一名敌方角色,若如此做,视为对其使用一张【决斗】.',
			txdiyjuezhan: '绝战',
			txdiyjuezhan_info: '锁定技,结束阶段,你选择一名敌方角色,失去1点体力,然后视为对其使用一张【决斗】.',
			zxfudi: '附敌',
			zxfudi_info: '当你受到伤害后,你可以交给伤害来源一张手牌.若如此做,你对其势力中体力值最大且不小于你的一名角色造成一点伤害.',
			txjizhen: '激阵',
			txjizhen_info: '结束阶段,你可以令任意名角色摸一张牌.',
			txhj_qiangzheng: '强征',
			txhj_qiangzheng_info: '锁定技,结束阶段,你获得每个敌方角色的一张手牌.',
			txhj_xixing: '吸星',
			txhj_xixing_info: '准备阶段,对任意一名横置的其他角色造成1点雷电伤害,然后回复1点体力.',
			pytongling: '通令',
			pytongling_info: '出牌阶段限一次,当你对一名与你势力不同的角色A造成伤害后,你可以选择一名与你势力相同的角色B,令B选择是否对A使用一张牌.若B选择使用,则此牌结算后,若此牌造成过伤害,你和B各摸两张牌,否则A获得你对其造成伤害的牌.',
			twzhilve: '知略',
			twzhilve_info: '准备阶段,你可以选择一项:1.移动场上装备区的一张牌并失去1点体力.2.移动场上判定区的一张牌并令本回合手牌上限-1.3.本回合摸牌阶段多摸一张牌且使用的第一张【杀】无距离限制且不计入次数限制.',
			new_shushen: '淑慎',
			new_shushen_info: '当你回复1点体力后,你可令一名其他角色摸一张牌.',
			tx_lianyu: '炼狱',
			tx_lianyu_info: '结束阶段,你可以对所有敌方角色造成1点火焰伤害',
			txhj_qiangduo: '强夺',
			txhj_qiangduo_info: '准备阶段,你可以获得每名敌方角色的各一张牌.',
			txlipo: '厉破',
			txlipo_info: '锁定技.你对男性角色、男性角色对你使用【杀】时,都需连续使用两张【闪】才能抵消.',
			txanzhan: '暗战',
			txanzhan_info: '你可以将一张基本牌当做无距离限制的【杀】使用.当你声明使用此【杀】后,你将此杀的伤害值基数改为X(X为你至此【杀】第一个目标角色的距离且至多为6).',
			//虎牢关之战
			boss_jingjia: '精甲',
			boss_jingjia_info: '锁定技,游戏开始时,将本局游戏中加入的装备随机置入你的装备区.',
			txaozhan: '鏖战',
			txaozhan_info: '锁定技,若你装备区内有:武器牌,你可以多使用一张【杀】;防具牌,防止你受到的超过1点的伤害;坐骑牌,摸牌阶段多摸一张牌;宝物牌,跳过你的判定阶段.',
			txjingjia: '精甲',
			txjingjia_info: '游戏开始时,你将【无双方天画戟】、【红棉百花袍】、【束发紫金冠】和【赤兔马】置于你的装备区.',
			txjingjia1: '精甲',
			txjingjia2: '精甲',
			txjingjia3: '精甲',
			txwudong: '武动',
			txwudong_info: '一名其他角色的回合结束时,若你的手牌数小于体力值,则你可以横置.若如此做,你摸一张牌并进行一个额外回合,且你于此回合内计算与此角色的距离视为1.',
			lvbu_wudong: '武动效果',
			wzpaoxiao: '咆哮',
			wzpaoxiao_info: '锁定技,你使用【杀】无数量限制;当你于一回合内使用第二张【杀】时,摸一张牌.',
			txshenwei: '神威',
			txshenwei_info: '锁定技,摸牌阶段,你额外摸X张牌,你的手牌上限+X.(X为场上其他角色的数目且至多为3)',
			txxiuluo: '修罗',
			txxiuluo_info: '准备阶段,你可以弃置一张牌,然后弃置你判定区内一张同花色的牌.你可以重复此流程.',
			txhouyuan9: '后援',
			txhouyuan9_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你所有手牌和你判定区内的所有牌,然后复原并替换你的武将牌为【神鬼无前】,然后摸四张牌并将体力回复至你的体力上限.',
			txshenqu: '神躯',
			txshenqu_info: '每名角色的准备阶段,若你的手牌数少于或等于你的体力上限数,你可以摸两张牌;当你受到伤害后,你可以使用一张【桃】.',
			txjiwu: '极武',
			txjiwu_info: '出牌阶段,你可以弃置一张牌,然后获得一项:<强袭>、<铁骑>(界)、<旋风>、<完杀>,直到回合结束.',
			zmquezhan: '雀斩',
			zmquezhan_info: '出牌阶段限一次,你可以指定攻击范围内的一名其他角色,然后选择一项:1.弃置两张牌;2.失去1点体力;3.将武将牌翻面.若如此做,视为你对其使用了一张【杀】,若此以此法造成了伤害,其须从上述选项中执行一项(此【杀】不计入出牌阶段使用次数).',
			txxiongshou: '凶兽',
			txxiongshou_info: '锁定技,你使用【杀】对体力值小于你的角色造成的伤害+1;你与其他角色距离-1;你不能被翻面.',
			txhouyuan0: '后援',
			txhouyuan0_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你区域内的所有牌并复原并替换你的武将牌为【烛阴】,然后摸四张牌并将体力回复至你的体力上限.',
			txminbao: '灵嘶',
			txminbao_info: '锁定技,当你死亡时,对场上所有其他角色造成1点火焰伤害.',
			txwuyou: '无忧',
			txwuyou2: '无忧',
			txwuyou_info: '锁定技,你始终跳过摸牌阶段,出牌阶段,结束阶段.',
			txwuyou2_info: '锁定技,你始终跳过摸牌阶段,出牌阶段.',
			txxiongqu: '雄躯',
			txxiongqu_info: '锁定技,你不能成为【偷梁换柱】和【釜底抽薪】的目标.',
			/*新杀龙舟npc*/
			caoe_shoujiang: '守江',
			caoe_shoujiang_info: '锁定技,当你受到伤害时,若本次伤害值大于1,则你只受到1点伤害(防止多余的伤害),然后你摸一张牌.',
			taoshen_nutao: '怒涛',
			taoshen_nutao_info: '锁定技,回合开始时,随机对一名敌方角色造成1点雷电伤害.',
			zuogu_jisheng: '奇声',
			zuogu_jisheng_info: '锁定技,跳过摸牌阶段.奇数轮时,你受到伤害后,每受到1点伤害,随机一名有性别的己方角色失去1点体力.偶数轮时,当你受到伤害时,防止此伤害.',
			yougu_ousheng: '偶声',
			yougu_ousheng_info: '锁定技,跳过摸牌阶段.偶数轮时,你受到伤害后,每受到1点伤害,随机一名有性别的己方角色失去1点体力.奇数轮时,当你受到伤害时,防止此伤害.',
			zuogu_zuogu: '左鼓',
			zuogu_zuogu_info: '锁定技,每回合你首次受到伤害后,伤害来源摸2张牌;第二次受到伤害后,伤害来源弃置2张牌;后续每次受到伤害后,伤害来源失去1点体力.',
			yougu_yougu: '右鼓',
			yougu_yougu_info: '锁定技,每回合你首次受到伤害后,伤害来源回复1点体力.第二次受到伤害后,伤害来源受到1点伤害.后续每次受到伤害后,伤害来源弃置2张牌.',
			txhouyuanlz: '后援',
			txhouyuanlz_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你所有手牌和你判定区内的所有牌,然后复原并替换你的武将牌为【涛神】,然后摸四张牌并将体力回复至你的体力上限.',
			taoshen_paoxiao: '咆哮',
			taoshen_paoxiao_info: '锁定技,你出【杀】无次数限制,你的出牌阶段,如果你已经使用过【杀】,你于此阶段使用【杀】无距离限制.',
			taoshen_xiongzi: '雄姿',
			taoshen_xiongzi_info: '锁定技,摸牌阶段,你多摸一张牌,如果手牌数小于等于两张,则改为多摸三张牌.',
			txchihun: '炽魂',
			txchihun_info: '出牌阶段限一次,你可以弃置一张手牌,然后横置一名未横置的角色并弃置其一张牌.若为你,则改为回复1点体力,若你此法弃置的牌为红色,你可以将之交给一名其他角色;锁定技,你对已横置的角色使用牌无距离和次数限制.',
			txqingshu: '请戍',
			txqingshu_info: '一名其他角色的回合开始时,你可以弃置一张手牌,视为对其使用了一张【杀】,若此【杀】造成了伤害,你弃置其一张牌.',
			//超时空密探
			mitan_meibiao: '梅镖',
			mitan_meibiao_info: '锁定技,你使用♣️牌无法被其他角色响应,且此牌造成的伤害+2.',
			mitan_biandao: '辫刀',
			mitan_biandao_info: '锁定技,你的出牌阶段结束时,若本回合未对其他角色造成过伤害,你对所有敌方角色依次造成1~2点随机伤害.',
			mitan_yingyue: '映月',
			mitan_yingyue_info: '你在出牌阶段使用首张指定单一目标的【杀】或普通锦囊牌时,可为此牌额外增加一个目标.',
			mitan_huti: '护体',
			mitan_huti_info: '锁定技,其他角色对你造成伤害时,若此伤害为该角色本回合首次造成的伤害,则你防止此伤害,然后随机弃置一张牌.',
			mitan_lingshou: '灵守',
			mitan_lingshou_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,伤害来源弃置两张牌.',
			mitan_zhibi: '知彼',
			mitan_zhibi_info: '限定技,出牌阶段,你可以选择一名敌方角色,该角色本回合所有技能失效.',
			mitan_feijian: '飞剪',
			mitan_feijian_info: '锁定技,出牌阶段结束时,若你的装备区中有武器牌且本回合对其他角色造成过伤害,则弃置该武器牌并对这些角色依次造成2~4点随机伤害.',
			mitan_yirong: '易容',
			mitan_yirong_info: '锁定技,你每回合首次造成伤害时,将伤害来源改为场上一名随机其他角色.',
			mitan_qingsuo: '情锁',
			mitan_qingsuo_info: '锁定技,其他角色对你造成伤害后,你与其将武将牌翻面.',
			mitan_xuefa: '削发',
			mitan_xuefa_info: '锁定技,当你对其他角色造成伤害后,你随机弃置其一至三张牌.',
			mitan_shenghu: '圣护',
			mitan_shenghu_info: '锁定技,己方其他角色受到伤害时,令该伤害-1,你失去1点体力,然后你与该己方角色各摸一张牌.',
			boss_aotang: '熬汤',
			boss_aotang_info: '锁定技,回合开始时,你令随机一名敌方角色遗忘所有武将技能直到你的下回合开始.',
			boss_yunjv: '云飓',
			boss_yunjv_info: '锁定技,敌方角色的回合结束时,该角色随机弃置一张手牌和一张装备区里的牌.',
			boss_guimeic: '鬼魅',
			boss_guimeic_info: '锁定技,你不会被翻面;若你的出牌阶段被跳过,你跳过本回合的弃牌阶段;若你的摸牌阶段被跳过,你摸一张牌.',
			boss_duane: '断恶',
			boss_duane_info: '锁定技,当敌方角色于其弃牌阶段弃置了黑色牌,该角色失去1点体力.',
			boss_zhoucha: '昼刹',
			boss_zhoucha_info: '锁定技,准备阶段,你进行一次判定并获得该判定牌,若结果为红色,你本回合使用【杀】的次数+2.',
			boss_yezhong: '夜冢',
			boss_yezhong_info: '锁定技,结束阶段,你进行一次判定并获得该判定牌,若结果为黑色,你令所有敌方角色随机弃置一张手牌.',
			boss_huiyun: '晦运',
			boss_huiyun_info: '出牌阶段限一次,你可以展示一名敌方角色的手牌,并弃置其中至多两张牌.然后你可以弃置一张与该角色弃置的牌牌名相同的牌,对其造成2点伤害.',
			boss_xiaoshoua: '枭首',
			boss_xiaoshoua_info: '锁定技,准备阶段,你对一名体力值大于等于你的敌方角色造成2点伤害.',
			boss_manji: '蛮击',
			boss_manji_info: '你使用【杀】指定单一目标后,你可以弃置该角色一张手牌.若此牌是【杀】,你本次【杀】的伤害+1;若此牌不是【杀】,你获得之.',
			boss_shiyv: '施狱',
			boss_shiyv_info: '锁定技,摸牌阶段你改为从牌堆中获得4张花色各不同的牌.',
			boss_guizhao: '诡招',
			boss_guizhao_info: '锁定技,当你于回合内使用一张牌时,若此牌的类别是你本回合第一次使用,则你摸一张牌.',
			boss_xixinga: '吸星',
			boss_xixinga_info: '锁定技,准备阶段,你对所有敌方角色造成1点雷电伤害,然后你回复1点体力.',
			boss_taipinga: '太平',
			boss_taipinga_info: '锁定技,当你受到敌方角色造成的1点伤害后,伤害来源需弃置两张花色不同的手牌,否则其失去1点体力.',
			boss_mizuia: '迷醉',
			boss_mizuia_info: '你使用的红色或属性【杀】造成伤害后,你可以弃置目标的两张牌.',
			boss_qiangzhenga: '强征',
			boss_qiangzhenga_info: '锁定技,结束阶段,若敌方有角色的手牌数小于等于2,则你获得其手牌.',
			boss_yinsha: '隐煞',
			boss_yinsha_info: '锁定技,敌方角色的出牌阶段开始时,若其手牌数大于其体力上限,你本回合不能成为【杀】的目标.',
			boss_eli: '恶力',
			boss_eli_info: '锁定技,当你对一名敌方角色造成伤害时,若此伤害是该角色第一次受到伤害,你进行一次判定:若结果为红色,此伤害+1;若结果为黑色,你获得<完杀>直到回合结束.',
			boss_guimeib: '鬼魅',
			boss_guimeib_info: '锁定技,你不会被翻面;若你的出牌阶段被跳过,你跳过本回合的弃牌阶段;若你的摸牌阶段被跳过,你摸一张牌.',
			boss_bingyi: '病疑',
			boss_bingyi_info: '锁定技,每回合限一次,当你失去最后的手牌时,己方所有角色将手牌摸至六张.',
			boss_suoxue: '索穴',
			boss_suoxue_info: '你使用【杀】指定目标后,若其手牌数大于你,你可将手牌摸至与该角色相同;若其手牌数小于你,你可弃置一张手牌令此【杀】不能被闪避.',
			boss_duzhen: '毒针',
			boss_duzhen_info: '锁定技,你的回合内,当你使用【杀】或锦囊牌指定敌方角色为目标后,该角色随机弃置一张牌(优先装备区里的牌).',
			boss_mingchong: '冥虫',
			boss_mingchong_info: '锁定技,你死亡时,若有其他己方角色存活,该角色获得技能<毒针>并将手牌摸至体力上限.',
			boss_guixi: '鬼吸',
			boss_guixi_info: '锁定技,当你受到伤害后,你进行一次判定:若结果为♥️,你回复1点体力,否则你失去1点体力值.',
			boss_anchao: '暗潮',
			boss_anchao_info: '锁定技,己方角色的回合结束时,若此回合该角色没有造成伤害,则获得一个<暗潮>标记,若该角色造成过伤害,则移去所有<暗潮>标记.己方角色的回合开始时,若该角色有暗潮标记,则本回合摸牌阶段多摸X张牌且对敌方角色造成的伤害+X(X为<暗潮>标记数).',
			boss_tiemianhong1: '铁面',
			boss_tiemianhong1_info: '锁定技,红色【杀】有75%的概率对你无效.',
			boss_chihu: '赤虎',
			boss_chihu_info: '锁定技,你的手牌不为全场最多的,摸牌阶段你多摸两张牌.你的体力值不为全场最多的,你造成的伤害+1.',
			boss_jizhou1: '疾咒',
			boss_jizhou1_info: '锁定技,一名敌方角色的出牌阶段结束时,你进行一次判定,然后该角色需要弃置任意张点数之和大于判定结果的牌(若弃置的牌超过两张,你获得一枚<噬>标记),否则该角色失去1点体力值.',
			boss_danshi: '啖噬',
			boss_danshi_info: '锁定技,当你受到伤害时,此伤害+X,然后你失去一枚<噬>标记(X为你拥有的<噬>标记数量).',
			boss_tiemianhong: '铁面',
			boss_tiemianhong_info: '锁定技,红色【杀】有75%的概率对你无效.',
			boss_difua: '地府',
			boss_difua_info: '锁定技,一名敌方角色的出牌阶段开始时,若其手牌数大于其体力上限,则其将手牌弃置至体力上限.',
			boss_zhennub: '震怒',
			boss_zhennub_info: '锁定技,当你的体力值首次降至8或更低时,你立即摸五张牌.',
			boss_xingpan: '刑判',
			boss_xingpan_info: '锁定技,出牌阶段开始时,你进行一次判定:若结果为红色,敌方唯一手牌最多的角色将一半(向下取整)手牌交给你;若结果为黑色,敌方唯一体力最多的角色失去1点体力值.',
			boss_dianwei: '殿威',
			boss_dianwei_info: '锁定技,准备阶段,你视为对装备区里没牌的敌方角色使用一张【杀】,然后装备区里有牌的敌方角色随机弃置一张装备区里的牌.',
			boss_xuanpan: '宣判',
			boss_xuanpan_info: '锁定技,一名敌方角色回合结束时:①若其本回合对你造成过4点或更多的伤害,你随机对其造成0~4点伤害;②若其本回合摸牌数达到8张或更多,你随机摸0~8张牌;③若其本回合回复了3点或更多的体力,你随机回复0~3点体力;④若你本回合弃置了4张或更多的牌,其随机弃置0~3张牌.',
			//魁拔之战
			Kuiba_wuyao: '雾妖',
			Kuiba_wuyao_info: '锁定技,当你受到伤害时,你进行一次判定.若判定结果为黑色,则此伤害-1,然后如果你手中有【杀】,则你随机弃置其中的一张并视为对伤害来源使用一张【杀】.',
			Kuiba_sanjian: '伞剑',
			Kuiba_sanjian_info: '锁定技,你使用【杀】的次数上限+1;当你用【杀】造成伤害后,受伤角色弃置两张牌.',
			Kuiba_baizhan: '百战',
			Kuiba_baizhan_info: '锁定技,出牌阶段开始时,你从牌堆或弃牌堆中随机获得两张【杀】.',
			Kuiba_lingshan: '灵山',
			Kuiba_lingshan_info: '锁定技,当你受到♠️牌和♦️牌造成的伤害时,此伤害-1.',
			Kuiba_lingshou: '灵守',
			Kuiba_lingshou_info: '锁定技,己方其他角色受到伤害时,令此伤害-1,你失去1点体力,伤害来源弃置三张牌.',
			Kuiba_lingluan: '灵乱',
			Kuiba_lingluan_info: '锁定技,敌方角色的结束阶段开始时,其须弃置两张牌.',
			Kuiba_yiyou: '义友',
			Kuiba_yiyou_info: '锁定技,准备阶段,你进行一次判定并获得该判定牌.若判定结果为红色,本回合你视为拥有技能〖义绝〗;若判定结果为黑色,本回合你视为拥有技能〖天义〗.',
			Kuiba_linyao: '粼妖',
			Kuiba_linyao_info: '锁定技,你无法成为敌方红色锦囊牌的目标;防止你受到的火焰伤害.',
			Kuiba_jinghong: '惊虹',
			Kuiba_jinghong_info: '锁定技,当你使用黑色/红色锦囊牌时,你从牌堆中随机获得一张红色/黑色牌.',
			Kuiba_wenjia: '纹甲',
			Kuiba_wenjia_info: '锁定技,其他角色死亡后,你获得1枚<击毁>标记.摸牌阶段,你多摸X张牌(X为你拥有的<击毁>标记数).若你拥有1个<击毁>标记,你获得技能〖武娘〗;若你拥有2个<击毁>标记,你获得技能〖无双〗;若你拥有3个<击毁>标记,则当你造成伤害时,此伤害+1.',
			Kuiba_huanguang: '幻光',
			Kuiba_huanguang_info: '出牌阶段,你使用的前四张普通锦囊牌可以多指定一个目标或少指定一个目标.',
			Kuiba_shengmeng: '圣盟',
			Kuiba_shengmeng_info: '锁定技,当你受到♣️牌和♥️牌造成的伤害时,此伤害-1.',
			Kuiba_shengjie: '圣捷',
			Kuiba_shengjie_info: '锁定技,己方角色成为敌方角色普通锦囊牌的目标后,你令此牌的所有目标各摸两张牌.',
			Kuiba_shengzhu: '圣助',
			Kuiba_shengzhu_info: '锁定技,己方角色结束阶段开始时,其摸两张牌.',
			Kuiba_wangjian: '王剑',
			Kuiba_wangjian_info: '锁定技,你使用【杀】造成的伤害+1,且无视目标角色的防具.',
			Kuiba_tianyi: '天义',
			Kuiba_tianyi_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,直到回合结束,你能额外使用一张【杀】且使用【杀】无距离限制且使用【杀】选择目标的个数上限+1.若你没赢,你不能使用【杀】,直到回合结束.',
			Kuiba_zhuandui: '专对',
			Kuiba_zhuandui_info: '当你使用【杀】指定目标后,你可以与其拼点,若你赢,其不能响应此【杀】;当你成为【杀】的目标后,你可以与其拼点,若你赢,此【杀】对你无效.',
			Kuiba_tianbian: '天辩',
			Kuiba_tianbian_info: '你可以用牌堆顶牌进行拼点;若你拼点的牌花色为♥️,则点数视为K.',
			Kuiba_shengdou: '圣斗',
			Kuiba_shengdou_info: '己方角色使用【杀】指定目标时,你可令此【杀】的目标+1.',
			Kuiba_shenghu: '圣护',
			Kuiba_shenghu_info: '锁定技,己方其他角色受到伤害时,你令该伤害-1,你失去1点体力,然后你摸一张牌,该角色摸两张牌.',
			Kuiba_lingzhan: '灵战',
			Kuiba_lingzhan_info: '锁定技,己方角色回合内首次造成伤害时,你令此伤害+1.',
			Kuiba_lingxun: '灵迅',
			Kuiba_lingxun_info: '锁定技,己方角色成为敌方角色使用【杀】的目标后,你获得该敌方角色的随机一张手牌.',
			Kuiba_tianshen: '天神',
			Kuiba_tianshen_info: '锁定技,当你受到锦囊牌造成的伤害时,防止此伤害.',
			Kuiba_guangshi: '光势',
			Kuiba_guangshi_info: '锁定技,回合结束时,若你的<光势>标记数小于3,你获得3个<光势>标记;当你受到伤害后,你失去1个<光势>标记.',
			Kuiba_guangmie: '光灭',
			Kuiba_guangmie_info: '限定技,准备阶段,若你的<光势>标记数大于2,你可以失去所有<光势>标记,且你每失去1枚<光势>标记,所有敌方角色失去1点体力.',
			Kuiba_kuiti: '魁体',
			Kuiba_kuiti_info: '锁定技,当你受到【杀】的伤害时,该伤害-1,然后你摸一张牌.',
			Kuiba_bachong: '霸冲',
			Kuiba_bachong_info: '锁定技,当你使用【杀】指定目标后,除非该角色弃置一张牌,否则不能使用【闪】.',
			Kuiba_qiheng: '齐衡',
			Kuiba_qiheng_info: '觉醒技,准备阶段,若你的体力值低于最大体力的一半,随机获得牌堆中的三张不同类型的牌,获得<魁拔>.',
			Kuiba_Kuiba: '魁拔',
			Kuiba_Kuiba_info: '锁定技,摸牌阶段,你多摸两张牌;你使用【杀】和【决斗】均指定所有敌方角色为目标(无距离限制),如果目标在你的攻击范围内,则其受到你使用【杀】和【决斗】对其造成的伤害+1.',
			Kuiba_kuiqu: '魁躯',
			Kuiba_kuiqu_info: '锁定技,当你受到1点伤害后,你摸一张牌,伤害来源随机弃置一张牌.',
			Kuiba_juli: '巨力',
			Kuiba_juli_info: '锁定技,你的【杀】的基础伤害值等于你距离其为1的角色数.若其他角色与你的距离大于1,其不能响应你使用的牌.',
			txhouyuankb: '后援',
			txhouyuankb_info: '限定技,锁定技,出牌阶段或当你处于濒死状态时,你弃置你所有手牌和你判定区内的所有牌,然后复原并替换你的武将牌为【觉醒蛮吉】,然后摸四张牌并将体力回复至你的体力上限.',
		},
	};
	for (const i in QQQ.character) {
		const info = QQQ.character[i];
		info[4].push(`ext:太虚幻境/image/yuanhua/${i}.jpg`);//QQQ
	}
	if (!lib.config.all.characters.includes('太虚幻境')) {
		lib.config.all.characters.push('太虚幻境');
	}
	if (!lib.config.characters.includes('太虚幻境')) {
		lib.config.characters.push('太虚幻境');
	}
	lib.translate['太虚幻境_character_config'] = `太虚幻境`;
	return QQQ;
});