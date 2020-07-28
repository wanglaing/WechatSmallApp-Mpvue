<template>
  <div :class="isIphoneX ? 'pageViewtab isIphoneX': 'pageViewtab'">
    <navigation-bar
      :title="'校品直购'"
      :navBackgroundColor="'#ff5555'"
      :titleColor="'#ffffff'"
      :Navlist="[]"
      :back-visible="false"
      :home-path="''"
    ></navigation-bar>
    <div class="UserCarcontainer">
      <div class="UserTopInfo">
        <div class="user" v-if="!IsRegister" @click="handAuth()">
          <div class="UseravatarImg">
            <img
              src="http://hbimg.b0.upaiyun.com/69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658"
              mode="widthFix"
            />
          </div>
          <div class="UserInfo">
            <p>点击登陆</p>
            <label>登陆后查看最新订单状态</label>
          </div>
        </div>
        <div class="user" v-else>
          <div class="UseravatarImg">
            <open-data type="userAvatarUrl"></open-data>
          </div>
          <div class="UserInfo">
            <label v-if="IsVip!=0" style="background: -webkit-linear-gradient(to right, #353232, #6e6c65);background: linear-gradient(to right, #353232, #6e6c65);color: #ebd9af;padding:5rpx  8rpx;">
              <text v-if="IsVip==1">季卡</text>
              <text v-else-if="IsVip==2">半年卡</text>
              <text v-else-if="IsVip==3">年卡</text>
            </label>
            <p><open-data type="userNickName"></open-data></p>
          </div>
        </div>
        <!-- <div class="PayCards">
          <div class="PayLeft">
            <div class="Vip">
              <img src="../../../static/images/VIP.png" mode="widthFix">
            </div>
            <p>30天体验会员</p>
          </div>
          <a href="../ApplyCard/main">开通会员</a>
        </div> -->
      </div>
      <div class="UserItemCon">
        <div class="Item">
          <div class="Item-top">
            <h2>订单管理</h2>
            <a href="../ShopOrder/main?type=0">全部订单<text class="iconfont icon-dibudaohanglan-"></text></a>
          </div>
          <div class="Item-btn">
            <a href="../ShopOrder/main?type=1">
              <img class="icon" src="../../../static/images/oder1.png" mode="widthFix">
              <p>待付款</p>
            </a>
            <a href="../ShopOrder/main?type=2">
              <img class="icon" src="../../../static/images/oder2.png" mode="widthFix">
              <p>待发货</p>
            </a>
            <a href="../ShopOrder/main?type=3">
              <img class="icon" src="../../../static/images/oder3.png" mode="widthFix">
              <p>已收货</p>
            </a>
            <a href="../ShopOrder/main?type=4">
              <img class="icon" src="../../../static/images/oder4.png" mode="widthFix">
              <p>待退款</p>
            </a>
          </div>
          <div class="Item-tips">
            <p>找不到订单？绑定手机号试试</p>
            <a href="">立即绑定</a>
          </div>
        </div>
        <div class="DistributionItem">
          <div class="Item">
            <a href="../DistributionCenter/main">
              <div class="Item-Word">
                <div class="ICon">
                  <i class="iconfont iconxiaoshouzu"></i>
                </div>
                <p>我的销售</p>
              </div>
              <div class="IconJt">
                <i class="iconfont iconjiantou"></i>
              </div>
            </a>
          </div>
          <div class="Item">
            <a @click="handelchooseAddress">
              <div class="Item-Word">
                <div class="ICon">
                  <i class="iconfont icondizhi"></i>
                </div>
                <p>收货地址</p>
              </div>
              <div class="IconJt">
                <i class="iconfont iconjiantou"></i>
              </div>
            </a>
          </div>
          <div class="Item">
            <a>
              <div class="Item-Word">
                <div class="ICon">
                  <i class="iconfont iconkefu"></i>
                </div>
                <p>联系客服</p>
              </div>
              <div class="IconJt">
                <i class="iconfont iconjiantou"></i>
              </div>
            </a>
            <button open-type="contact"></button>
          </div>
        </div>
        <div class="Item" style="display:none;">
          <div class="Item-top">
            <h2>更多服务</h2>
          </div>
          <div class="Item-btn Item-btnCon">
              <a href="../DistributionCenter/main">
                <img class="icon" style="width:50%;" src="../../../static/images/icon-fx.png" mode="widthFix">
                <p style="margin-top: -15rpx;">我的销售</p>
              </a>
              <a href="../IntegralShop/main">
                <img class="icon" style="width:50%;" src="../../../static/images/icon-jf.png" mode="widthFix">
                <p style="margin-top: -15rpx;">积分商城</p>
              </a>
              <a @click="handelchooseAddress">
                <img class="icon" style="width:50%;" src="../../../static/images/icon-dZ.png" mode="widthFix">
                <p style="margin-top: -15rpx;">收货地址</p>
              </a>
              <a href="../Coupon/main">
                <img class="icon" style="width:50%;" src="../../../static/images/icon-yhj.png" mode="widthFix">
                <p style="margin-top: -15rpx;">优惠卷</p>
              </a>
              <a>
                <img class="icon" style="width:50%;" src="../../../static/images/icon-kf.png" mode="widthFix">
                <p style="margin-top: -15rpx;">联系客服</p>
                <button open-type="contact"></button>
              </a>
          </div>
        </div>
      </div>
    </div>
    <vue-tabBar :selectNavIndex="1"></vue-tabBar>
    <auth v-if='IsAuthShow' :type="'getUserInfo'" :msg="'校品直购将要获取你的用户信息用以身份验证，是否允许？'" @handCacnl="handCacnl" @handLogin="handLogin"></auth>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import vueTabBar from '@/components/vueTabBar.vue'
import auth from '@/components/auth/auth.vue'
import mixin from '@/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      IsAuthShow: false,
      barBgColor: '#ff5555',
      barTitleColor: '#FFFFFF',
      selectCards: 0
    }
  },
  components: {
    navigationBar,
    vueTabBar,
    auth
  },
  onLoad (options) {
    Object.assign(this.$data, this.$options.data())
  },
  onShow () {
    this.userInfo = this.$store.state.user.userInfo
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    handelchooseAddress () {
      let self = this
      wx.chooseAddress({
        success (res) {
          self.$store.commit('SET_Address', res)
          // console.log(res.userName)
          // console.log(res.postalCode)
          // console.log(res.provinceName)
          // console.log(res.cityName)
          // console.log(res.countyName)
          // console.log(res.detailInfo)
          // console.log(res.nationalCode)
          // console.log(res.telNumber)
        }
      })
    },
    handCacnl (data) {
      this.IsAuthShow = data
    },
    handLogin (data) {
      this.IsAuthShow = false
    },
    handAuth () {
      this.IsAuthShow = true
    },
    countIncrement () {
      this.$store.commit('increment', this.$store.state.main.count + 1)
    },
    countDecrement () {
      this.$store.commit('decrement', this.$store.state.main.count - 1)
    }
  },
  computed: { }
}
</script>

<style lang="less" scoped>
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  .UserCarcontainer {
    .UserTopInfo {
      background-color: #ff5555;
      padding: 0 30rpx;
      padding-bottom: 0rpx;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      border-radius: 0 0 40rpx 40rpx;
      background-image: url('http://www.ihehang.com/img/DistributionCenterbG.png');
      background-size: 100% 100%;
      background-position: center;
      .user{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin: 30rpx 0;
        .UseravatarImg{
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
          overflow: hidden;
          border: 5rpx solid #ffffff;
          img{
            width: 100%;
          }
        }
        .UserInfo{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          padding-left: 20rpx;
          p{
            color: #ffffff;
            font-size: 28rpx;
          }
          label{
            background-color: #ececec;
            color: #666666;
            font-size: 18rpx;
            border-radius: 10rpx;
            padding: 5rpx;
          }
        }
      }
      .PayCards{
        width: calc(100% - 40rpx);
        background: -webkit-linear-gradient(to right, #353232, #6e6c65);
        background: linear-gradient(to right, #353232, #6e6c65);
        padding: 25rpx 20rpx;
        border-radius: 10rpx;
        font-size: 24rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .PayLeft{
          display: flex;
          justify-content: center;
          align-items: center;
          .Vip{
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
            img{
              width: 80%;
            }
          }
          p{
            color: #ebd9af;
            font-size: 24rpx;
          }
        }
        a{
          border-radius: 25rpx;
          padding: 10rpx 18rpx;
          color: #222;
          background-color: #e8d6bb;
        }
      }
    }
    .UserItemCon{
      padding: 30rpx;
      .Item{
        box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.05);
        border-radius: 10rpx;
        margin-top: 30rpx;

        &-top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25rpx 20rpx;
          border-bottom: 1rpx solid #f8f8f8;
          h2{
            font-size: 30rpx;
            color: #000000;
          }
          a{
            font-size: 26rpx;
            color: #333333;
            text{
              vertical-align: middle;
            }
          }
        }
        &-btn{
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 25rpx 20rpx;
          border-bottom: 1rpx solid #f8f8f8;
          a{
            width:calc(100%/4);
            text-align: center;
            .icon{
              width: 40%;
            }
            p{
              font-size: 28rpx;
              color: #666666;
            }
          }
          &.Item-btnCon{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 0rpx 20rpx;
            border-bottom: 1rpx solid #f8f8f8;
            a{
              margin: 20rpx 0;
              position: relative;
              button{
                width:100%;
                height:100%;
                top:0;
                left:0;
                position: absolute;
                opacity: 0;
              }
            }
          }
        }
        &-tips{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25rpx 20rpx;
          p{
            font-size: 26rpx;
            color: #333333;
          }
          a{
            border: 1rpx solid #FBA306;
            color: #FBA306;
            padding: 8rpx 16rpx;
            font-size: 26rpx;
            text-align: center;
          }
        }
        .list{
          padding: 25rpx 0rpx;
          margin: 0 25rpx;
          border-top: 1rpx solid #f8f8f8;
          &:first-child{
            border-top: 0;
          }
          a{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 28rpx;
            text{
              float: right;
              color: #000000;
            }
          }
        }
      }
    }
  }
  .DistributionItem{
      .Item{
        background-color: #ffffff;
        margin: 30rpx 0;
        border-radius: 20rpx;
        position: relative;
        a{
          padding: 30rpx 20rpx;
          display: flex;
          justify-content:space-between;
          align-items: center;
        }
        &-Word{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .ICon{
            i{
              font-size: 48rpx;
              color: #c2c2c2;
              padding-right: 10rpx;
              color: #ff5555;
            }
            img{
              width: 40rpx;
            }
          }
          p{
            font-size: 28rpx;
            color: #232323;
          }
        }
        .IconJt{
          i{
            font-size: 30rpx;
            color: #c2c2c2;
            color: #ff5555;
          }
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
    }
}
</style>
