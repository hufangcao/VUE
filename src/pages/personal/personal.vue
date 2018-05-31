<template>
  <div>
    <HeaderTop/>
<div class="loginTypesWrap">
  <div class="cont">
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="btnWrap">
      <div class="btn1" @click="tologin">
        <i class="iconfont icon-phone"></i>
        <span>手机号码登录</span>
      </div>
    <div class="btn2">
      <i class="iconfont icon-mail" ></i>
      <span>邮箱帐号登录</span>
    </div>
    <div class="btn">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-arrow-right1"></i>
    </div>
    </div>
  </div>
  <div class="thirdWrap">
    <div class="itemWrap">
      <span class="talk">
        <i class="iconfont icon-wei-xin"></i>
        <span>微信</span>
      </span>
      <span class="talk">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </span>
      <span class="talk">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </span>
    </div>
  </div>
</div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/headerTop/headerTop'
export default {
    components:{
      HeaderTop
    },
    methods:{
      tologin(){
        this.$router.push('/login')
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginTypesWrap
    background #F2F5F4
    width 100%
    height 100%
    position absolute
    overflow hidden
    .cont
      width 100%
      height 35rem
      overflow hidden
      .logoWrap
        width 9rem
        height 3.5rem
        margin-top 6rem
        margin-left 7.5rem
        img
          width 9rem
          height 3.5rem
      .btnWrap
        width 86%
        height 10rem
        margin-left 8%
        margin-top 6rem
        overflow hidden
        .btn1
          width 100%
          height 3rem
          background #d3636a
          text-align center
          line-height 3rem
          color white
          font-size 1rem
          margin-bottom  1rem
        .btn2
          width 100%
          height 3rem
          background white
          text-align center
          line-height 3rem
          color #d3636a
          font-weight 800
          border #d3636a .1rem solid
          box-sizing border-box
          font-size 1rem
        .btn
          width 100%
          height 3rem
          text-align center
          line-height 3rem
          font-size .9rem
          color #4F4F4F
    .thirdWrap
      width 100%
      height 4rem
      text-align center
      .talk
        display inline-block
        width 4rem
        height 2rem
        border-right  #ceb4ff solid 1px
        text-align center
        line-height 2rem
        padding-right 1rem
        span
          font-size .7rem
          color  #7e8c8d
        i
          color #7e8c8d
</style>
