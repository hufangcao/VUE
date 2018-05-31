<template>
    <div class="footer_guide" >
    <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
      <span class="guide_item" :class="{on: '/knowledge'===$route.path}" @click="goTo('/knowledge')">
      <span class="item_icon">
        <i class="iconfont icon-square-two"></i>
      </span>
        <span>识物</span>
      </span>
      <span class="guide_item" :class="{on: '/list'===$route.path}" @click="goTo('/list')">
      <span class="item_icon">
        <i class="iconfont icon-category"></i>
      </span>
        <span>分类</span>
      </span>
      <span class="guide_item" :class="{on: '/shopCar'===$route.path}" @click="goTo('/shopCar')">
      <span class="item_icon">
        <i class="iconfont icon-cart"></i>
      </span>
        <span>购物车</span>
      </span>
      <span class="guide_item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-kefu"></i>
      </span>
        <span>个人</span>
      </span>
    </div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #B9383D
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
