<template>
  <div :class="isIphoneX ? 'pageViewtab isIphoneX' : 'pageViewtab'">
    <navigation-bar
      :title="'校品直购'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="false"
      :home-path="''"
    ></navigation-bar>
    <div class="bannerCon">
      <swiper
        class="swiperCon"
        v-if="Bew.Banner.length > 0"
        indicator-dots="true"
        indicator-color="#e6e6e6"
        indicator-active-color="#ffc548"
      >
        <block  v-for="(item, index) in Bew.Banner" :key="index">
          <swiper-item>
            <div class="swiperImgCon">
              <a
                v-if="item.IsTiao === 1"
                :href="item.Path"
                :style="{ backgroundImage: 'url(' + item.BigImgUrl + ')' }"
              ></a>
              <a
                v-else
                :style="{ backgroundImage: 'url(' + item.BigImgUrl + ')' }"
              ></a>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="homecontainer">
      <div class="NoticeCon" v-if="Bew.Notice.length>0">
        <div class="Icon iconfont iconlunkuodasan-"></div>
        <div class="listCon">
          <swiper
            class="NoticeSwiper"
            autoplay="true"
            vertical="true"
            interval="2500"
          >
            <block v-for="(item, index) in Bew.Notice" :key="index">
              <swiper-item >
                <a class="list">
                  {{item.Title}}
                </a>
              </swiper-item>
            </block>
          </swiper>
        </div>
      </div>
      <div class="homeNavMenu">
        <div
          class="Item"
          v-for="(item, index) in Bew.NavMenu"
          :key="index"
        >
          <a :href="item.path">
            <div
              class="Icon"
              :style="{ backgroundImage: 'url(' + item.icon=='' ? item.img : '' + ')' }"
            >
              <i class="iconfont" :class="item.icon"></i>
            </div>
            <p>{{ item.text }}</p>
          </a>
        </div>
      </div>
      <!-- <div class="PayCards">
        <div class="PayLeft">
          <div class="Vip">
            <img src="../../../static/images/VIP.png" mode="widthFix">
          </div>
          <p>
            <span>开通会员享更多优惠</span>
            <span>（首次开通赠送一个5元红包）</span>
          </p>
        </div>
        <a href="../ApplyCard/main">开通会员</a>
      </div>
      <div class="LuckdrawList" >
        <a href="../LuckdrawList/main">
          <img
            src="../../../static/images/cjzq.jpg"
            mode="widthFix"
          />
        </a>
      </div> -->
      <div class="shopList" v-if="Bew.Shoplist.length>0">
        <div class="list" v-for="(item,index) in Bew.Shoplist" :key="index">
<!--          +'&IsDJ='+item.IsDJ-->
          <a :href="'../ShopDetails/main?Id='+item.Id">
            <div class="list-img">
              <img
                :src="item.img"
                mode="widthFix"
              />
<!--              <span v-if="item.IsDJ==1" class="TipsWord">预售</span>-->
            </div>
            <div class="list-word">
              {{item.name}}
            </div>
            <div class="list-price">
              <div class="MerberInfo">
                <span>会员</span>
                <label>
                  优惠
                  <text>5</text>元
                </label>
              </div>
              <div class="price">
                <label class="big">￥ {{item.price}}</label>
                <label class="Small">￥ {{item.oprice}}</label>
                <label class="salecount">销量:{{item.salecount}}</label>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <vue-tabBar :selectNavIndex="0"></vue-tabBar>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import vueTabBar from '@/components/vueTabBar.vue'
import mixin from '@/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      Bew: {'State': 1, 'Banner': [{'IsTiao': 0, 'BigImgUrl': 'https://dummyimage.com/750x420', 'Path': ''}, {'IsTiao': 0, 'BigImgUrl': 'https://dummyimage.com/750x420', 'Path': ''}, {'IsTiao': 0, 'BigImgUrl': 'https://dummyimage.com/750x420', 'Path': ''}], 'Notice': [{'Id': 1, 'Title': ' 三季园服 上线啦~~~ ', 'Path': ''}, {'Id': 2, 'Title': ' 三季园服 上线啦~~~ ', 'Path': ''}], 'NavMenu': [{'Id': '1', 'text': 'VIP', 'path': '/pages/ApplyCard/main', 'icon': 'iconVIP', 'img': 'https://app.chunvwu.com/Uploads/Cate/000/00/11/8597a6cfa74defcbde3047c891d78f90_600.jpg?1574231645'}, {'Id': '2', 'text': '购物车', 'path': '/pages/ShoppingCart/main', 'icon': 'icongouwuchekong', 'img': 'https://app.chunvwu.com/Uploads/Cate/000/00/11/c6036a69be21cb660499b75718a3ef24_600.jpg?1574231645'}, {'Id': '3', 'text': '提现', 'path': '/pages/DistributionCenter/main', 'icon': 'icontixian', 'img': 'https://app.chunvwu.com/Uploads/Cate/000/00/11/c6036a69be21cb660499b75718a3ef24_600.jpg?1574231645'}, {'Id': '3', 'text': '我的订单', 'path': '/pages/ShopOrder/main', 'icon': 'icondingdan1', 'img': 'https://app.chunvwu.com/Uploads/Cate/000/00/11/3a15c7d0bbe60300a39f76f8a5ba6896_600.jpg?1574231645'}], 'Shoplist': [{'Id': 1, 'name': '三季园服', 'price': '68.00', 'oprice': '98.00', 'discount': '10.0', 'salecount': '3532', 'img': 'https://dummyimage.com/790x790'}, {'Id': 2, 'name': '三季园服', 'price': '68.00', 'oprice': '108.00', 'discount': '10.0', 'salecount': '601', 'img': 'https://dummyimage.com/790x790'}, {'Id': 3, 'name': '三季园服', 'price': '29.90', 'oprice': '46.00', 'discount': '10.0', 'salecount': '424', 'img': 'https://dummyimage.com/790x790'}, {'Id': 4, 'name': '三季园服', 'price': '75.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '329', 'img': 'https://dummyimage.com/790x790'}, {'Id': 5, 'name': '三季园服', 'price': '60.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '30', 'img': 'https://dummyimage.com/790x790'}, {'Id': 6, 'name': '三季园服', 'price': '80.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '30', 'img': 'https://dummyimage.com/790x790'}]}
      //   {
      //   Banner: [],
      //   Notice: [],
      //   NavMenu: [],
      //   Shoplist: []
      // }
    }
  },
  components: {
    navigationBar,
    vueTabBar
  },
  async onShow () {
    // this.Bew = await this.$service.app.GetHomeDat()
  },
  created () {},
  methods: { },
  computed: { }
}
</script>
<style lang="less">
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  .homecontainer {
    width: 100%;
    border-radius: 20rpx 20rpx 0 0;
    position: relative;
    .HuduImg {
      position: absolute;
      width: 100%;
      top: -15rpx;
      left: 0;
    }
    .homeNavMenu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0;
      border-bottom: 10rpx solid #f5f5f5;
      .Item {
        text-align: center;
        width: 20%;
        padding: 30rpx 0;
        a {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .Icon {
            width: 80rpx;
            height: 80rpx;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
              font-size: 60rpx;
              color:#ff5555;
            }
          }
          p {
            padding-top: 5rpx;
            font-size: 22rpx;
          }
        }
      }
    }
    .NoticeCon {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10rpx 20rpx;
      border-bottom: 10rpx solid #f5f5f5;
      .Icon {
        font-size: 38rpx !important;
        color: #ff5555;
        margin-right: 10rpx;
        animation: flash 1.5s infinite;
      }
      .listCon {
        height: 60rpx;
        width: calc(100% - 20rpx);
        .NoticeSwiper {
          width: 100%;
          height: 100%;
          .list {
            font-size: 28rpx;
            line-height: 61rpx;
          }
        }
      }
    }
    .PayCards {
      // width: calc(100% - 80rpx);
      background: -webkit-linear-gradient(to right, #353232, #6e6c65);
      background: linear-gradient(to right, #353232, #6e6c65);
      padding: 25rpx 20rpx;
      border-radius: 10rpx;
      font-size: 24rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 20rpx;
      .PayLeft {
        display: flex;
        justify-content: center;
        align-items: center;
        .Vip {
          display: block;
          width: 60rpx;
          height: 60rpx;
          border-radius: 50%;
          border: 1rpx solid #ffffff;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          margin-right: 10rpx;
          img {
            width: 80%;
          }
        }
        p {
          color: #ebd9af;
          font-size: 24rpx;
          span {
            display: block;
          }
        }
      }
      a {
        border-radius: 25rpx;
        padding: 10rpx 18rpx;
        color: #222;
        background-color: #e8d6bb;
      }
    }
    .LuckdrawList {
      margin: 20rpx 20rpx;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 10rpx;
      }
    }
    .shopMenu {
      position: relative;
      .ItemNav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
        border-bottom: 1rpx solid #eeeeee;
        .a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15rpx 0;
          padding-top: 0;
          .Text {
            font-size: 28rpx;
            color: #333333;
            margin-right: 4rpx;
          }
        }
      }
      .TypeItem {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #ffffff;
        z-index: 999;
        border-bottom: 1rpx solid #e8e8e8;
        ul {
          padding: 20rpx;
          li {
            display: block;
            font-size: 26rpx;
            line-height: 2.2;
            &.select {
              color: #fba306;
            }
          }
        }
      }
    }
    .shopList {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 20rpx;
      padding-top: 10rpx;
      background-color: #f5f5f5;
      font-size: 0;
      .list {
        display: flex;
        flex-direction: column;
        width: calc((100% / 2) - 20rpx);
        margin-top: 20rpx;
        background-color: #ffffff;
        border-radius: 15rpx;
        box-shadow: 0 0 8rpx 2rpx rgba(0, 0, 0, 0.02);
        &:nth-child(2n) {
          margin-left: 20rpx;
        }
        &:nth-child(1) {
          margin-top: 0;
        }
        &:nth-child(2) {
          margin-top: 0;
        }
        a{
          display: block;
          margin: 10rpx;
        }
        .list-img {
          position: relative;
          img {
            width: 100%;
            border-radius: 5px;
          }
          .TipsWord{
            position: absolute;
            top: 0;
            right: 0;
            padding: 10rpx;
            border-radius: 0 0 0 20rpx;
            background-color: #ff5555;
            color: #fff;
            font-size: 24rpx;
            padding-left: 18rpx;
          }
        }
        .list-word {
          font-size: 28rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin: 10rpx auto;
        }
        .list-price {
          .MerberInfo {
            display: none;
            justify-content: flex-start;
            align-items: center;
            padding: 5rpx;
            span {
              font-size: 18rpx;
              color: #222222;
              background-color: #ff5555;
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
                background-color: #ff5555;
                width: 12rpx;
                height: 120%;
                position: absolute;
                top: 0;
                right: 91%;
                transform: rotate(-15deg);
              }
              text {
                color: #ff5555;
              }
            }
          }
          .price {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            .big {
              font-size: 30rpx;
              color: #ff5555;
              font-weight: 600;
            }
            .Small {
              font-size: 22rpx;
              color: #999999;
              padding: 0 5rpx;
              text-decoration: line-through;
            }
            .salecount{
              position: absolute;
              right: 0;
              font-size: 22rpx;
              color: #999999;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
