<template>
  <transition name="fade">
<div class="cover-wrap" v-if="hide">
  <div class="mask"></div>
  <i class="iconfont icon-add" @click="isHide"></i>
  <div class="wrap">
    <div class="modal">
      <header>
        <div class="title">
          <span>--</span>
          <p>新人专享礼</p>
          <span>--</span>
        </div>
        <span>感谢使用网易严选, 已为你准备了一份专享礼</span>
      </header>
      <div class="m-newUserItem">
        <img src="http://yanxuan.nosdn.127.net/764f36be8148b31e16a609236a9cf1e4.jpg?imageView&quality=85&thumbnail=232y232">
        <div class="m-newUserItem-text">
          <span>20寸PC膜拉链登机箱</span>
          <span>新秀丽制造商</span>
          <span>￥249</span>
        </div>
      </div>
      <div class="btnAll">
        <div class="btn1">查看更多特惠商品</div>
        <div class="btn2">领券立减¥60</div>
      </div>
    </div>
  </div>
</div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      hide:true
    }
  },
  methods:{
    isHide(){
      this.hide = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cover-wrap
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background-color: rgba(0,0,0,.5);
    z-index:4
    opacity 1
    &.fade-enter-active,&.fade-leave-active
      transition: opacity 1s

    &.fade-enter,&.fade-leave-active
      opacity: 0

    i
      font-size 2rem
      background white
      border-radius 50%
      position absolute
      right 2rem
      top 3rem
    .wrap
      width 80%
      height 22rem
      background white
      margin-top 13rem
      margin-left 10%
      border-radius .8rem
      .modal
        width 100%
        height 100%
        padding 7%
        box-sizing border-box
        header
          width 100%
          height 5rem
          .title
            width 100%
            height 3rem
            font-size 1.2rem
            text-align center
            line-height 3rem
            span
              display inline-block
            p
              display inline-block


          span
            display block
            text-align center
            line-height 2rem
            font-size .4rem

        .m-newUserItem
          width 100%
          height 9rem
          img
            width 45%
            height 9rem
          .m-newUserItem-text
            display block
            width 53%
            height 9rem
            float right
            span
              display block
              &:nth-of-type(1)
                font-size .98rem
                margin-top 1rem
              &:nth-of-type(2)
                font-size .7rem
                margin-top 1rem
              &:nth-of-type(3)
                font-size .9rem
                margin-top 2rem
                color #ac0000


        .btnAll
          width 90%
          height 5rem
          margin-left 5%
          overflow hidden
          .btn1
            width 100%
            height 2rem
            background rgba(170, 0, 0, 0.9)
            text-align center
            line-height 2rem
            border-radius .5rem
            font-size .9rem
            color white
            margin-top .4rem
          .btn2
            width 100%
            height 2rem
            background #fbf9ff
            text-align center
            line-height 2rem
            border-radius .5rem
            font-size .9rem
            color #39474a
            border #ac0000 1px solid
            margin-top .5rem

</style>
