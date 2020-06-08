<template>
  <div :class="isIphoneX ? 'pageView isIphoneX' : 'pageView'">
    <navigation-bar
      :title="''"
      :navBackgroundColor="barBgColor"
      :titleColor="barTitleColor"
      :Navlist="[]"
      :isBarHeight="false"
      :back-visible="true"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="ShopDetails">
      <div class="bannerCon">
        <swiper
          class="swiperCon"
          v-if="Banner.length > 0"
          indicator-dots="true"
          indicator-color="#e6e6e6"
          indicator-active-color="#ffc548"
        >
          <block v-for="(item, index) in Banner" :key="index">
            <swiper-item>
              <div class="swiperImgCon">
                <template v-if="item.isVideo">
                  <video :src="item.videoUrl" autoplay="false"></video>
                </template>
                <template v-else>
                  <div
                    class="bannerImg"
                    :style="{ backgroundImage: 'url(' + item.BigImgUrl + ')' }"
                  ></div>
                </template>
              </div>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="ShopInfo">
        <div class="ShowTopIno">
          <div class="ShopPrice">
            <div class="Leftinfo">
              <div class="price">
                <div class="PriceLeft">
                  <label class="big"><i class="iconfont iconjifen"></i>129</label>
                  <!-- <label class="Small">￥880.00</label> -->
                </div>
              </div>
            </div>
            <div class="rightInfo"></div>
          </div>
          <div class="ShopTitle">
            【入围煮】【看抽奖规则】抽奖需加syl930520为好友！转发好友多一个抽奖码！
          </div>
          <div class="byLuckdraw">
            <div class="byLuckdraw-top">
              <a v-if="query.IsDh==0" @click="handLuckdraw($event)" :class="isLuckdrawClick ? 'animated bounceIn' : ''" >
                <text>立即兑换</text>
              </a>
              <a v-else-if="query.IsDh==1" class="disabled">
                <text>已兑换</text>
              </a>
            </div>
          </div>
        </div>
        <div class="ShowBottomInfo">
          <div class="InfoItem">
            <div class="ShopInfoTitle">商品详情</div>
            <div class="Commoditydetails">
              <wxparse
                :content="detail.describe"
                :imageProp="imageProp"
                @preview="preview"
                @navigate="navigate"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="shopBy" style="display:none;">
        <div class="Item Item1">
          <a href="../home/main">
            <img
              class="icon"
              src="../../../static/images/home.png"
              mode="widthFix"
            />
            <p>首页</p>
          </a>
          <a @click="shaer">
            <img
              class="icon"
              src="../../../static/images/fx.png"
              mode="widthFix"
            />
            <p>分享</p>
            <button open-type="share"></button>
          </a>
          <a href="../user/main">
            <img
              class="icon"
              src="../../../static/images/my.png"
              mode="widthFix"
            />
            <p>我的</p>
          </a>
        </div>
        <div class="Item Item2">
          <a>
            <!-- <p>￥688.00</p> -->
            <p>参与抽奖</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wxparse from 'mpvue-wxparse'
import navigationBar from '@/components/navigationBar.vue'
import mixin from '@/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      isLuckdrawClick: false,
      barBgColor: 'transparent',
      barTitleColor: '#222222',
      imageProp: { mode: 'widthFix', lazyLoad: true },
      detail: {
        id: 1,
        describe: '<p><span>进口日本Gracegel大心胶颜色胶，原装正品，支持官网查询！</span> </p><p><span>欢迎美甲店和美甲培训学校的朋友们洽谈合作！<br />请加微信：18118755881<br />很高兴认识您！在茫茫人海中，我们能相识相遇是一种缘份。希望我们的友谊天长地久。<br /><br /></span> </p><p><span><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7de43fe56.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dea06acf.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7df0c5691.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7df615ef3.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dfb97a25.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e01d87be.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e135a995.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e184f27a.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e1dd87be.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e22c5691.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e27c1988.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e2c88601.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e34b626d.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e3aae85b.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e463fe56.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e4ceb8eb.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e540a7d8.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e5a3473b.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e613c14d.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e66c5691.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e6d6dac2.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e72d0dac.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e7852f83.gif" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e7f5e69e.gif" alt="" /><br /></span> </p><p><span>实物色卡图<img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f6906acf.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f705a995.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f7a4b571.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f810e4e1.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f8b3c14d.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f92b2564.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f9a25317.jpg" alt="" /><img src="https://app.chunvwu.com/Uploads/Product/20180827/5b837fa03fe56.jpg" alt="" /></span></p>'
      },
      Banner: [
        {
          isVideo: false,
          BigImgUrl:
            'https://file.open.banchengyun.com/255/2019/10/30/9edb10786e8306699b9f38df15801635.gif'
        }
      ]
    }
  },
  components: {
    wxparse,
    navigationBar
  },
  onShow () {
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    handLuckdraw () {
      let self = this
      self.isLuckdrawClick = true
      setTimeout(function () {
        self.isLuckdrawClick = false
      }, 1000)
    },
    preview (src, e) {
    },
    navigate (href, e) {
    },
    handPhone () {},
    handNavigation () {}
  },
  mounted () {
  },
  computed: {
  }
}
</script>
<style lang="less">
@import url("~mpvue-wxparse/src/wxParse.css");
.wxParse .p {
  margin: 0;
}
.pageView {
  padding-bottom: 110rpx;
  min-height: calc(100% - 20rpx);
  width: 100%;
  &.isIphoneX {
    padding-bottom: 170rpx;
    min-height: calc(100% - 170rpx);
    .shopBy {
      padding-bottom: 60rpx;
    }
  }
  .ShopDetails {
    .bannerCon {
      height: 550rpx;
      .swiperCon {
        width: 100%;
        height: 550rpx;
      }
      video {
        width: 100%;
        height: 100%;
      }
      .bannerImg {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .ShopInfo {
      .ShowTopIno {
        padding: 20rpx;
        border-bottom: 20rpx solid #f8f8f8;
        box-sizing: border-box;
        .ShopPrice {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .Leftinfo {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            .MerberInfo {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 5rpx;
              span {
                font-size: 18rpx;
                color: #222222;
                background-color: #fba306;
                padding: 2rpx 8rpx;
                border-radius: 5rpx 0 0 5rpx;
                position: relative;
                z-index: 3;
              }
              label {
                background-color: #222222;
                padding: 2rpx 8rpx;
                padding-left: 12rpx;
                font-size: 18rpx;
                border-radius: 0rpx 5rpx 5rpx 0rpx;
                color: #ffffff;
                position: relative;
                overflow: hidden;
                &::after {
                  content: "";
                  background-color: #fba306;
                  width: 12rpx;
                  height: 120%;
                  position: absolute;
                  top: 0;
                  right: 91%;
                  transform: rotate(-15deg);
                }
                text {
                  color: #fba306;
                }
              }
            }
            .price {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .PriceLeft {
                .big {
                  font-size: 36rpx;
                  color: #fba306;
                  font-weight: 600;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  i{
                    font-size: 48rpx;
                    font-weight: normal;
                  }
                }
                .Small {
                  font-size: 24rpx;
                  color: #999999;
                  padding: 0 5rpx;
                  text-decoration: line-through;
                }
              }
              .ByBtn {
                background-color: #fba306;
                color: #ffffff;
                font-size: 26rpx;
                padding: 10rpx 18rpx;
                border-radius: 10rpx;
              }
            }
          }
        }
        .ShopTitle {
          font-size: 32rpx;
          line-height: 1.8;
          font-weight: 600;
          color: #000000;
          margin-top: 10rpx;
        }
        .byCards {
          background: -webkit-linear-gradient(to right, #353232, #6e6c65);
          background: linear-gradient(to right, #353232, #6e6c65);
          padding: 15rpx 20rpx;
          border-radius: 10rpx;
          font-size: 24rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20rpx 0;
          p {
            color: #ebd9af;
            & > text {
              vertical-align: middle;
            }
          }
        }
        .showNumber {
          font-size: 26rpx;
          color: #666666;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .byLuckdraw {
          background-color: #ffffff;
          box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.08);
          border-radius: 10rpx;
          padding: 20rpx;
          margin: 20rpx 0;
          &-top {
            padding: 30rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
              width: 160rpx;
              height: 160rpx;
              border-radius: 50%;
              background-color: #fba306;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #ffffff;
              text {
                width: 80%;
                height: 80%;
                border: 1rpx solid #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                border-radius: 50%;
                font-size: 28rpx;
                font-weight: bold;
              }
              &.disabled {
                background-color: #f2f2f2;
                color: #666666;
              }
            }
          }
          &-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 30rpx;
            position: relative;
            &::before {
              content: "中奖名单";
              font-size: 24rpx;
              color: #666666;
              text-align: center;
              position: absolute;
              top: -12%;
              left: 50%;
              padding: 0 6rpx;
              transform: translate(-50%, 0);
              background-color: #ffffff;
            }
            .userItem {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin: 0 10rpx;
              .txImg {
                width: 80rpx;
                height: 80rpx;
                overflow: hidden;
                border-radius: 50%;
                margin-bottom: 10rpx;
                img {
                  display: block;
                  width: 100%;
                }
              }
              p {
                font-size: 22rpx;
                color: #666666;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
              }
            }
          }
          .CYMeberCon {
            a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .ItemList {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .list {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 40rpx;
                  height: 40rpx;
                  line-height: 40rpx;
                  background-color: #dcdcdc;
                  color: #999999;
                  border-radius: 50%;
                  overflow: hidden;
                  margin-left: -15rpx;
                  box-shadow: 0 0 8rpx 2rpx rgba(0, 0, 0, 0.08);
                  &:first-child {
                    margin-left: 0rpx;
                  }
                  img {
                    width: 100%;
                  }
                }
              }
              .cyNumber {
                font-size: 24rpx;
                color: #666666;
                text {
                  margin-left: 5rpx;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .ShowBottomInfo {
        .InfoItem {
          padding: 30rpx 20rpx;
          border-top: 20rpx solid #f8f8f8;
          box-sizing: border-box;
          &:first-child {
            border-top: 0;
          }
          .ShopInfoTitle {
            font-size: 30rpx;
            color: #222222;
            font-weight: bold;
            text-align: center;
            margin: 40rpx 0;
            position: relative;
            &:first-child {
              margin-top: 0rpx;
            }
            &::after {
              content: "";
              display: block;
              width: 46rpx;
              height: 6rpx;
              background-color: #fba306;
              border-radius: 20rpx;
              margin: 0 auto;
              margin-top: 6rpx;
            }
          }
          .ShopTJList {
            box-shadow: 0 0 20rpx 2rpx rgba(0, 0, 0, 0.09);
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 20rpx;
            border-radius: 10rpx;
            .list-Img {
              width: 180rpx;
              margin-right: 20rpx;
              img {
                width: 100%;
              }
            }
            .list-Info {
              width: calc(100% - 200rpx);
              h2 {
                font-size: 30rpx;
                height: 140rpx;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              .byPrice {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .Price {
                  font-size: 30rpx;
                  font-weight: bold;
                  color: #fba306;
                }
                .btnBy {
                  background-color: #fba306;
                  color: #ffffff;
                  font-size: 26rpx;
                  padding: 10rpx 18rpx;
                  border-radius: 10rpx;
                }
              }
            }
          }
          .businessInfo {
            h2 {
              font-size: 26rpx;
              font-weight: 600;
              margin-bottom: 10rpx;
            }
            p {
              font-size: 24rpx;
              color: #666666;
              line-height: 2.2;
              a {
                float: right;
                background-color: #fba306;
                color: #ffffff;
                font-size: 22rpx;
                padding: 4rpx 18rpx;
                line-height: 1.4;
                border-radius: 10rpx;
              }
            }
          }
          .ByNotice {
            h2 {
              font-size: 26rpx;
              font-weight: 600;
              margin-bottom: 10rpx;
              color: #ff6f0f;
            }
            p {
              font-size: 24rpx;
              color: #666666;
              line-height: 1.8;
              text {
                color: #ff0000;
              }
            }
          }
          .shopList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 20rpx;
            .list {
              display: flex;
              flex-direction: column;
              width: calc((100% / 2) - 10rpx);
              margin-top: 30rpx;
              &:nth-child(2n) {
                margin-left: 20rpx;
              }
              &:nth-child(1) {
                margin-top: 0;
              }
              &:nth-child(2) {
                margin-top: 0;
              }
              .list-img {
                img {
                  width: 100%;
                  border-radius: 5px;
                }
              }
              .list-word {
                font-size: 28rpx;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin: 10rpx auto;
              }
              .list-price {
                .MerberInfo {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding: 5rpx;
                  span {
                    font-size: 18rpx;
                    color: #222222;
                    background-color: #fba306;
                    padding: 2rpx 8rpx;
                    border-radius: 5rpx 0 0 5rpx;
                    position: relative;
                    z-index: 3;
                  }
                  label {
                    background-color: #222222;
                    padding: 2rpx 8rpx;
                    padding-left: 12rpx;
                    font-size: 18rpx;
                    border-radius: 0rpx 5rpx 5rpx 0rpx;
                    color: #ffffff;
                    position: relative;
                    overflow: hidden;
                    &::after {
                      content: "";
                      background-color: #fba306;
                      width: 12rpx;
                      height: 120%;
                      position: absolute;
                      top: 0;
                      right: 91%;
                      transform: rotate(-15deg);
                    }
                    text {
                      color: #fba306;
                    }
                  }
                }
                .price {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  .big {
                    font-size: 30rpx;
                    color: #fba306;
                    font-weight: 600;
                  }
                  .Small {
                    font-size: 22rpx;
                    color: #999999;
                    padding: 0 5rpx;
                    text-decoration: line-through;
                  }
                }
              }
            }
          }
        }
      }
    }
    .shopBy {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 110rpx;
      background-color: #ffffff;
      border-top: 1rpx solid #f8f8ff;
      display: flex;
      justify-content: space-between;
      align-content: center;
      z-index: 9999;
      .Item {
        width: calc(100% / 2);
        &.Item1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            width: calc(100% / 3);
            display: block;
            height: 100%;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-left: 1rpx solid #f8f8f8;
            position: relative;
            &:first-child {
              border-left: 0;
            }
            .icon {
              width: 45%;
              margin-bottom: 5rpx;
            }
            button {
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
            p {
              font-size: 22rpx;
              color: #666666;
            }
          }
        }
        &.Item2 {
          a {
            width: calc(100%);
            display: block;
            height: 100%;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #fba306;
            p {
              color: #ffffff;
              font-size: 30rpx;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
