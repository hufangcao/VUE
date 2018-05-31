import Mock from 'mockjs'
import data from './datahome.json'
import info from './shiwudata.json'
import dataFenlie from './datanav'
/*主页页面*/
//获取轮播图的接口
Mock.mock('/carousel',{code:0,data:data.focusList})
//模拟网络供应商接口数据
Mock.mock('/supplier',{code:0,data:data.tagList})
//模拟新品列表数据
Mock.mock('/newItem',{code:0,data:data.newItemList})
//模拟受欢迎列表数据
Mock.mock('/popularItem',{code:0,data:data.popularItemList})
//洗脸的
Mock.mock('/topicList',{code:0,data:data.topicList})
//模拟最后列表数据
Mock.mock('/cateList',{code:0,data:data.cateList})
//模拟时间限时购
Mock.mock('/flashSaleIndexVO',{code:0,data:data.flashSaleIndexVO})
//模拟自营品牌下部文字的数据
Mock.mock('/policyDescList',{code:0,data:data.policyDescList})
//头部导航行数据
Mock.mock('/headCateList',{code:0,data:data.headCateList})
/*事物页面*/
Mock.mock('/banner',{code:0,data:info.banner})
//模拟小方块的花瓶
Mock.mock('/column',{code:0,data:info.column})
//获取下边男孩的数据
Mock.mock('/recommendOne',{code:0,data:info.recommendOne})
//two
Mock.mock('/recommendTwo',{code:0,data:info.recommendTwo})
//three
Mock.mock('/recommendThree',{code:0,data:info.recommendThree})
//世界杯
Mock.mock('/tenfifteen',{code:0,data:info.tenfifteen})
//床单
Mock.mock('/zhenOne',{code:0,data:info.zhenOne})
Mock.mock('/zhenTwo',{code:0,data:info.zhenTwo})
Mock.mock('/zhenThree',{code:0,data:info.zhenThree})
//查看更多
Mock.mock('/findMore',{code:0,data:info.findMore})
//获取第三页的数据
Mock.mock('/categoryL1List',{code:0,data:dataFenlie.categoryL1List})

