<template>
  <div>
    <HeaderTop/>
  <div class="j-categoryList">
    <div class="m-cateNavVertWrap">
      <ul class="j-cateNav">
        <li class="item " v-for="(categoryLItem,index) in categoryL1List" :key="index" @click="isChange(index)">
          <a href="javascript:;" :class="{on:targetIndex===index}">{{categoryLItem.name}}</a>
        </li>
      </ul>
    </div>
    <div class="m-subCateList">
      <div class="banner">
        <img v-lazy="categoryL1List[targetIndex].bannerUrl" alt="">
      </div>
      <div class="cateList">
        <div class="hd">
          <span></span>
          <div>{{categoryL1List[targetIndex].name}}</div>
          <span></span>
        </div>
        <ul class="list">
          <li class="cateItem" v-for="(subCateItem,index) in categoryL1List[targetIndex].subCateList" :key="index">
            <img :src="subCateItem.wapBannerUrl" alt="pic">
            <div>{{subCateItem.name}}</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/headerTop2/headerTop'

export default {
    components:{
      HeaderTop,
    },
    data(){
      return{
        targetIndex: 0
      }
    },
    computed:{
      ...mapState(['categoryL1List','categoryL2List'])
    },
    methods:{
      isChange(index){
        this.targetIndex = index
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryL1List')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .j-categoryList
    width 100%
    margin-top 1rem
    .m-cateNavVertWrap
      width 5rem
      float left
      .j-cateNav
        width 5rem
        .item
          width 5rem
          height 2rem
          margin-bottom  .5rem

          a
            width 100%
            height 2.5rem
            display block
            text-align center
            line-height 2.5rem
            font-size .9rem
            color #4F4F4F
            &.on
              color #840000
  .m-subCateList
      width 18rem
      float left
      margin-left: 2rem;
      .banner
        width 90%
        height 5rem
        background lavender
        margin-left 5%
        img
          width 100%
          height 6rem
          border-radius .4rem
      .cateList
        width 90%
        height 7rem
        margin-left 5%
        .hd
          width 100%
          height 4rem
          text-align center
          line-height 5rem
          span
            display inline-block
            width 2rem
            height 1px
            background #eee
          div
            font-size .8rem
            display inline-block


        .list
          width 100%
          display flex
          flex-wrap wrap
          .cateItem
            width 30%
            height 6rem
            text-align center
            margin-left .5rem
            img
              width 90%
              height 4rem
              border-radius 50%
            div
              width 100%
              height 2rem
              text-align center
              line-height 1rem
              font-size .7rem
</style>
