import ajax from './ajax'
/*首页页面*/
//获取轮播图的ajax请求数据
export const reqCarousel =() =>ajax('/carousel')
//获取网络供应商数据
export const reqSupplier =() =>ajax('/supplier')
//获取新品数据
export const reqNewItem=() =>ajax('/newItem')
//获取最受欢迎的列表
export const reqPopularItem=() =>ajax('/popularItem')
//洗脸
export const reqTopicList =() =>ajax('/topicList')
//获取最后列表数据
export const reqCateList = () => ajax('/cateList')
//获取时间现时购信息
export const reqFlashSaleIndexVO = () =>ajax('/flashSaleIndexVO')
//获取轮播图下部文字
export const reqPolicyDescList = () =>ajax('/policyDescList')
//获取头部导航
export const reqHeadCateList = () =>ajax('/headCateList')

/*shiwu页面*/
//获取轮播
export const reqBanner = () =>ajax('/banner')
//模拟小方块的花瓶
export const reqColumn = () =>ajax('/column')
//获取下面的小男孩
export const reqRecommendOne = () =>ajax('/recommendOne')
//小男孩下边2
export const reqRecommendTwo = () =>ajax('/recommendTwo')
//小南还下边3
export const reqRecommendThree = () =>ajax('/recommendThree')
//世界杯
export const reqTenfifteen = () =>ajax('/tenfifteen')
//为你推荐
export const reqZhenOne = () =>ajax('/zhenOne')
export const reqZhenTwo = () =>ajax('/zhenTwo')
export const reqZhenThree = () =>ajax('/zhenThree')
  //查找更多
export const reqFindMore = () =>ajax('/findMore')
//获取第三页分裂数据
export const reqCategoryL1List = () =>ajax('/categoryL1List')
//获取导航旁边的分页
export const reqCategoryL2List = () =>ajax('/categoryL2List')

