import {
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
  RECEIVE_RECOMMENDTWO,
  RECEIVE_RECOMMENDTHREE,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENTWO,
  RECEIVE_ZHENTHREE,
  RECEIVE_ZHENONE,
  RECEIVE_FINDMORE,
  //第三页
  RECEIVE_CATEGORYL1LIST,
  RECEIVE_CATEGORYL2LIST,

} from '../mutation-types/mutation-types'
export default {
  /*shouye*/
  [RECEIVE_CAROUSEL](state,{carouselList}){
    state.carouselList = carouselList
  },
  [RECEIVE_SUPPLIER](state,{SupplierList}){
    state.SupplierList = SupplierList
  },
  [RECEIVE_NEWITEM](state,{newItemList}){
    state.newItemList = newItemList
  },
  [RECEIVE_POPULARITEM](state,{popularItemList}){
    state.popularItemList = popularItemList
  },
  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList =topicList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList = cateList
  },
  [RECEIVE_FLASHSALEINDEXVO](state,{flashSaleIndexVO}){
    state.flashSaleIndexVO = flashSaleIndexVO
  },
  [RECEIVE_POLICYDESCLIST](state,{PolicyDescList}){
    state.PolicyDescList = PolicyDescList
  },
  [RECEIVE_HEADCATELIST](state,{headCateList}){
    state.headCateList = headCateList
  },
  /*实物*/
  [RECEIVE_BANNER](state,{banner}){
    state.banner = banner
  },
  [RECEIVE_COLUMN](state,{column}){
    state.column = column
  },
  [RECEIVE_RECOMMENDONE](state,{recommendOne}){
    state.recommendOne = recommendOne
  },
  [RECEIVE_RECOMMENDTWO](state,{recommendTwo}){
    state.recommendTwo = recommendTwo
  },
  [RECEIVE_RECOMMENDTHREE](state,{recommendThree}){
    state.recommendThree = recommendThree
  },
  [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen = tenfifteen
  },
  [RECEIVE_ZHENONE](state,{zhenOne}){
    state.zhenOne = zhenOne
  },
  [RECEIVE_ZHENTWO](state,{zhenTwo}){
    state.zhenTwo = zhenTwo
  },
  [RECEIVE_ZHENTHREE](state,{zhenThree}){
    state.zhenThree = zhenThree
  },
  [RECEIVE_FINDMORE](state,{findMore}){
    state.findMore = findMore
  },
  [RECEIVE_CATEGORYL1LIST](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },

}
