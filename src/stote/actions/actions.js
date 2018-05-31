import {
  /*首页*/
  RECEIVE_CAROUSEL,
  RECEIVE_SUPPLIER,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_HEADCATELIST,
  /*第二页实物*/
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMENDONE,
  RECEIVE_RECOMMENDTHREE,
  RECEIVE_RECOMMENDTWO,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENONE,
  RECEIVE_ZHENTHREE,
  RECEIVE_ZHENTWO,
  RECEIVE_FINDMORE,
  //第三页,
  RECEIVE_CATEGORYL1LIST,
  RECEIVE_CATEGORYL2LIST
} from '../mutation-types/mutation-types'
import {
  /*首页*/
  reqCarousel,
  reqSupplier,
  reqNewItem,
  reqPopularItem,
  reqTopicList,
  reqCateList,
  reqFlashSaleIndexVO,
  reqPolicyDescList,
  reqHeadCateList,
  /*第二页实物*/
  reqBanner,
  reqColumn,
  reqRecommendOne,
  reqRecommendThree,
  reqRecommendTwo,
  reqTenfifteen,
  reqZhenOne,
  reqZhenThree,
  reqZhenTwo,
  reqFindMore,
  reqCategoryL1List,
  reqCategoryL2List
} from '../../api'
export default {
  /*首页*/

  //轮播
  async getCarousel({commit}){
    const result = await reqCarousel()
    if(result.code===0){
      const carouselList = result.data
      commit(RECEIVE_CAROUSEL,{carouselList})
    }
  },
  //生产商
  async getSupplier({commit}){
    const result = await reqSupplier()
    if(result.code===0){
      const SupplierList = result.data
      commit(RECEIVE_SUPPLIER,{SupplierList})
    }
  },
  //新品
  async getNewItem({commit}){
    const result = await reqNewItem()
    if(result.code===0){
      const newItemList = result.data
      commit(RECEIVE_NEWITEM,{newItemList})
    }
  },
  async getPopularItem({commit}){
    const result = await reqPopularItem()
    if(result.code===0){
      const popularItemList = result.data
      commit(RECEIVE_POPULARITEM,{popularItemList})
    }
  },
  async getTopicList({commit}){
    const result = await reqTopicList()
    if(result.code===0){
      const topicList = result.data
      commit(RECEIVE_TOPICLIST,{topicList})
    }
  },
  //获取最后列表的异步请求
  async getCateList({commit}){
    const result = await reqCateList()
    if(result.code===0){
      const cateList = result.data
      commit(RECEIVE_CATELIST,{cateList})
    }
  },
  //获取限时购
  async getFlashSaleIndexVO({commit}){
    const result = await reqFlashSaleIndexVO()
    if(result.code===0){
      const flashSaleIndexVO = result.data
      commit(RECEIVE_FLASHSALEINDEXVO,{flashSaleIndexVO})
    }
  },
//获取轮播图下边文字的异步请求
  async getPolicyDescList({commit}){
    const result = await reqPolicyDescList()
    if(result.code===0){
      const PolicyDescList = result.data
      commit(RECEIVE_POLICYDESCLIST,{PolicyDescList})
    }
  },
  //获取头部导航
  async reqHeadCateList({commit}){
    const result = await reqHeadCateList()
    if(result.code===0){
      const headCateList = result.data
      commit(RECEIVE_HEADCATELIST,{headCateList})
    }
  },
  /*实物第二页*/
//轮播
  async getBanner({commit}){
    const result = await reqBanner()
    if(result.code===0){
      const banner = result.data
      commit(RECEIVE_BANNER,{banner})
    }
  },
  //小方块花瓶
  async getColumn({commit}){
    const result = await reqColumn()
    if(result.code===0){
      const column = result.data
      commit(RECEIVE_COLUMN,{column})
    }
  },
//小男孩
  async getRecommendOne({commit}){
    const result = await reqRecommendOne()
    if(result.code===0){
      const recommendOne = result.data
      commit(RECEIVE_RECOMMENDONE,{recommendOne})
    }
  },
  //第二个
  async getRecommendTwo({commit}){
    const result = await reqRecommendTwo()
    if(result.code===0){
      const recommendTwo = result.data
      commit(RECEIVE_RECOMMENDTWO,{recommendTwo})
    }
  },
  //地三个
  async getRecommendThree({commit}){
    const result = await reqRecommendThree()
    if(result.code===0){
      const recommendThree = result.data
      commit(RECEIVE_RECOMMENDTHREE,{recommendThree})
    }
  },
  //世界杯
  async getTenfifteen({commit}){
    const result = await reqTenfifteen()
    if(result.code===0){
      const tenfifteen = result.data
      commit(RECEIVE_TENFIFTEEN,{tenfifteen})
    }
  },
//为你推荐
  async getZhenOne({commit}){
    const result = await reqZhenOne()
    if(result.code===0){
      const zhenOne = result.data
      commit(RECEIVE_ZHENONE,{zhenOne})
    }
  },
    async getZhenTwo({commit}){
    const result = await reqZhenTwo()
    if(result.code===0){
      const zhenTwo = result.data
      commit(RECEIVE_ZHENTWO,{zhenTwo})
    }
  },
  async getZhenThree({commit}){
    const result = await reqZhenThree()
    if(result.code===0){
      const zhenThree = result.data
      commit(RECEIVE_ZHENTHREE,{zhenThree})
    }
  },

  async getFindMore({commit}){
    const result = await reqFindMore()
    if(result.code===0){
      const findMore = result.data
      commit(RECEIVE_FINDMORE,{findMore})
    }
  },
  //第三页
  async getCategoryL1List({commit}){
    const result = await reqCategoryL1List()
    if(result.code===0){
      const categoryL1List = result.data
      commit(RECEIVE_CATEGORYL1LIST,{categoryL1List})
    }
  }
}
