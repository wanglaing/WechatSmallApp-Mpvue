<template>
  <div :class="isIphoneX ?'pageView isIphoneX':'pageView'">
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
          :autoplay="autoplay"
          @change="swiperChange"
          interval="3000"
        >
          <block v-for="(item, index) in Bew.Imgs" :key="index">
            <swiper-item>
              <div class="swiperImgCon">
                <template v-if="item.IsVideo==1">
                  <video
                    :id="'myVideo'+item.Id"
                    :poster="item.BigImgUrl"
                    :src="item.Url"
                    :autoplay="item.autoplay"
                    controls
                    object-fit="fill"
                    @play="videoPlay"
                    @pause="videoPause"
                    @ended="videoEnded"
                    :picture-in-picture-mode="['push', 'pop']"
                  ></video>
<!--                  <video :src="item.videoUrl" autoplay="false"></video>-->
                </template>
                <template v-else>
                  <div class="bannerImg" :style="{backgroundImage:'url('+item.Url+')'}"></div>
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
                  <label class="big">￥{{Bew.Price}}</label>
                  <label class="Small">￥{{Bew.Oprice}}</label>
                </div>
              </div>
              <div class="MerberInfo">
                <span>30天体验会员</span>
                <label>
                  立减
                  <text>5</text>元
                </label>
              </div>
            </div>
            <div class="rightInfo"></div>
          </div>
          <div class="ShopTitle">{{Bew.Name}}</div>
          <!-- <div class="byCards">
            <p>开通30天体验会员低至￥683.00购买</p>
            <p>
              <a href="../ApplyCard/main">
              去开通
              <text class="iconfont icon-dibudaohanglan-"></text>
              </a>
            </p>
          </div> -->
          <div class="showNumber">
            <p>
              已售
              <text>{{Bew.Salecount}}</text>件
            </p>
            <p>
              只剩
              <text>{{Bew.Stock}}</text>件
            </p>
          </div>
        </div>
        <div class="ShowBottomInfo">
          <div class="InfoItem">
            <div class="ShopInfoTitle">商家信息</div>
            <div class="businessInfo">
              <h2>校品直购</h2>
              <p>
                营业时间：<text>{{Bew.BusinessHours}}</text>
              </p>
              <p>
                商家电话：<text>{{Bew.BusinessPhone}}</text><a @click="handPhone()">拨打</a>
              </p>
              <p>
                成都市<a @click="handNavigation()">导航</a>
              </p>
            </div>
          </div>
          <div class="InfoItem">
            <div class="ShopInfoTitle">购买须知</div>
            <div class="ByNotice" v-html="Bew.PurchaseNotes">
              <h2>使用方式：</h2>
              <p>1.下单后1-2个工作日内会收到订单短信，收到短信后根据短信指引操作激活如程会员卡；</p>
              <p>2.工作日17点前下单的用户当日发送短信，17点后下单的用户次日发送短信，周末下单的用户周一发送短信（如遇节假日顺延）；</p>
              <h2>使用说明：</h2>
              <p>1.本产品不找零，不兑现；</p>
              <p>2.本产品不与商家其他优惠同享；</p>
              <p>3.购买成功后，激活截止日期：2019.12.31，激活后365天内可用</p>
              <p>在2019.12.31前未使用，未激活而导致验证码过期自动作废，不设退款！</p>
              <h2>使用提示：</h2>
              <p>1.不可叠加使用</p>
              <p>2.不与店内其他活动同享</p>
              <h2>温馨提示：</h2>
              <p>如遇订单问题，希望您成功添加客服微信咨询：<text>13761219479</text></p>
              <p>关注“<text>校品直购</text>”公众号；查看订单，咨询问题更方便~</p>
            </div>
          </div>
          <div class="InfoItem">
            <div class="ShopInfoTitle">商品详情</div>
            <div class="Commoditydetails" v-html="Bew.Description">
<!--               <wxparse :content="detail.describe" :imageProp="imageProp" @preview="preview" @navigate="navigate" />-->
            </div>
          </div>
          <div class="InfoItem"  v-if="false">
            <div class="ShopInfoTitle">为您推荐</div>
              <div class="shopList">
                <div class="list" v-for="(item,index) in shoplist" :key="index">
                  <a :href="'../ShopDetails/main?Id='+item.Id">
                    <div class="list-img">
                      <img
                        :src="item.img"
                        mode="widthFix"
                      />
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
        </div>
      </div>
      <div class="shopBy">
        <div class="Item Item1">
          <a >
            <i class="iconfont iconkefu-"></i>
            <!-- <img class="icon" src="../../../static/images/home.png" mode="widthFix"> -->
            <p>客服</p>
          </a>
          <a @click="shaer">
            <i class="iconfont iconfenxiang"></i>
            <!-- <img class="icon" src="../../../static/images/fx.png" mode="widthFix"> -->
            <p>分享</p>
            <button open-type="share"></button>
          </a>
          <a href="../ShoppingCart/main?backVisible=true">
            <i class="iconfont icongouwuche-">
              <label v-if="CartNumber!=0" class="Number">{{CartNumber}}</label>
            </i>
            <!-- <img class="icon" src="../../../static/images/my.png" mode="widthFix"> -->
            <p>购物车</p>
          </a>
        </div>
        <div class="Item Item2">
          <template v-if="query.IsDJ==1">
            <a @click="handelByOrder(3)"  class="myBy">
              <p>￥200.00</p>
              <p>支付定金</p>
            </a>
            <a class="" style="background-color:#6d6d6d">
              <p>￥488.00</p>
              <p>尾款</p>
            </a>
          </template>
          <template v-else>
            <a @click="handelByOrder(1)"  class="myBy">
              <p>￥{{Bew.Price}}</p>
              <p>加入购物车</p>
            </a>
            <a @click="handelByOrder(2)">
              <p>￥{{Bew.Price}}</p>
              <p>立即购买</p>
            </a>
          </template>
        </div>
      </div>
    </div>
    <commodityModel
      v-if="commodityModels"
      :shops="{
        'Id':Bew.Id,
        'Name':Bew.Name,
        'Price':Bew.Price,
        'VipPrice':Bew.VipPrice,
        'Imgs':Bew.Imgs
      }"
      :commodityModel="Bew.CommodityModel"
      @handelClose="handelcommodityModelsClose"
      @handelShoppingCart="handelShoppingCart"
      @handelShoppingPay="handelShoppingPay"
      :IsPayType="IsPayType"
      ></commodityModel>
  </div>
</template>

<script>
import wxparse from 'mpvue-wxparse'
import navigationBar from '@/components/navigationBar.vue'
import commodityModel from '@/components/commodityModel/index.vue'
import mixin from '@/mixin'

export default {
  mixins: [mixin],
  data () {
    return {
      autoplay: true,
      commodityModels: false,
      barBgColor: 'transparent',
      barTitleColor: '#222222',
      IsPayType: 1,
      imageProp: { mode: 'widthFix', lazyLoad: true },
      Bew: {
        'Id': 1,
        'Imgs': [
          {
            'Id': 1,
            'IsVideo': '1',
            'autoplay': false,
            'BigImgUrl': 'http://dummyimage.com/750x550',
            'Url': 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          },
          {
            'Id': 2,
            'IsVideo': '0',
            'autoplay': false,
            'BigImgUrl': 'http://dummyimage.com/750x550',
            'Url': 'http://dummyimage.com/750x550'
          }
        ],
        'Name': '三季园服',
        'Price': '68.00',
        'VipPrice': '68.00',
        'Oprice': '98.00',
        'Discount': '10',
        'Salecount': '35832',
        'Stock': '3000',
        'BusinessHours': '2014-01-29 01:52:44',
        'BusinessPhone': '139****9614',
        'PurchaseNotes': '%3Csection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23ff0000%3B%22%3E%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%B8%8B%E5%8D%95%E5%90%8E1-2%E4%B8%AA%E5%B7%A5%E4%BD%9C%E6%97%A5%E5%86%85%E4%BC%9A%E6%94%B6%E5%88%B0%E8%AE%A2%E5%8D%95%E7%9F%AD%E4%BF%A1%EF%BC%8C%E6%94%B6%E5%88%B0%E7%9F%AD%E4%BF%A1%E5%90%8E%E6%A0%B9%E6%8D%AE%E7%9F%AD%E4%BF%A1%E6%8C%87%E5%BC%95%E6%93%8D%E4%BD%9C%E6%BF%80%E6%B4%BB%E5%A6%82%E7%A8%8B%E4%BC%9A%E5%91%98%E5%8D%A1%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%B7%A5%E4%BD%9C%E6%97%A517%E7%82%B9%E5%89%8D%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E5%BD%93%E6%97%A5%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%8C17%E7%82%B9%E5%90%8E%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E6%AC%A1%E6%97%A5%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%8C%E5%91%A8%E6%9C%AB%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E5%91%A8%E4%B8%80%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%88%E5%A6%82%E9%81%87%E8%8A%82%E5%81%87%E6%97%A5%E9%A1%BA%E5%BB%B6%EF%BC%89%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E6%9C%AC%E4%BA%A7%E5%93%81%E4%B8%8D%E6%89%BE%E9%9B%B6%EF%BC%8C%E4%B8%8D%E5%85%91%E7%8E%B0%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%26nbsp%3B%E6%9C%AC%E4%BA%A7%E5%93%81%E4%B8%8D%E4%B8%8E%E5%95%86%E5%AE%B6%E5%85%B6%E4%BB%96%E4%BC%98%E6%83%A0%E5%90%8C%E4%BA%AB%EF%BC%9B%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%E8%B4%AD%E4%B9%B0%E6%88%90%E5%8A%9F%E5%90%8E%EF%BC%8C%E6%BF%80%E6%B4%BB%E6%88%AA%E6%AD%A2%E6%97%A5%E6%9C%9F%EF%BC%9A2019.12.31%EF%BC%8C%E6%BF%80%E6%B4%BB%E5%90%8E365%E5%A4%A9%E5%86%85%E5%8F%AF%E7%94%A8%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%E5%9C%A82019.12.31%E5%89%8D%E6%9C%AA%E4%BD%BF%E7%94%A8%EF%BC%8C%E6%9C%AA%E6%BF%80%E6%B4%BB%E8%80%8C%E5%AF%BC%E8%87%B4%E9%AA%8C%E8%AF%81%E7%A0%81%E8%BF%87%E6%9C%9F%E8%87%AA%E5%8A%A8%E4%BD%9C%E5%BA%9F%EF%BC%8C%E4%B8%8D%E8%AE%BE%E9%80%80%E6%AC%BE%EF%BC%81%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E4%BD%BF%E7%94%A8%E6%8F%90%E7%A4%BA%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%B8%8D%E5%8F%AF%E5%8F%A0%E5%8A%A0%E4%BD%BF%E7%94%A8%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%20%E4%B8%8D%E4%B8%8E%E5%BA%97%E5%86%85%E5%85%B6%E4%BB%96%E6%B4%BB%E5%8A%A8%E5%90%8C%E4%BA%AB%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E6%B8%A9%E9%A6%A8%E6%8F%90%E7%A4%BA%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%E5%A6%82%E9%81%87%E8%AE%A2%E5%8D%95%E9%97%AE%E9%A2%98%EF%BC%8C%E5%B8%8C%E6%9C%9B%E6%82%A8%E6%88%90%E5%8A%9F%E6%B7%BB%E5%8A%A0%E5%AE%A2%E6%9C%8D%E5%BE%AE%E4%BF%A1%E5%92%A8%E8%AF%A2%EF%BC%9A%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E13761219479%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Cp%3E%3Cbr%2F%3E%3C%2Fp%3E',
        'Description': '%3Cp%3E%3Cspan%3E%E8%BF%9B%E5%8F%A3%E6%97%A5%E6%9C%ACGracegel%E5%A4%A7%E5%BF%83%E8%83%B6%E9%A2%9C%E8%89%B2%E8%83%B6%EF%BC%8C%E5%8E%9F%E8%A3%85%E6%AD%A3%E5%93%81%EF%BC%8C%E6%94%AF%E6%8C%81%E5%AE%98%E7%BD%91%E6%9F%A5%E8%AF%A2%EF%BC%81%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%E6%AC%A2%E8%BF%8E%E7%BE%8E%E7%94%B2%E5%BA%97%E5%92%8C%E7%BE%8E%E7%94%B2%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E6%B4%BD%E8%B0%88%E5%90%88%E4%BD%9C%EF%BC%81%3Cbr%20%2F%3E%E8%AF%B7%E5%8A%A0%E5%BE%AE%E4%BF%A1%EF%BC%9A18118755881%3Cbr%20%2F%3E%E5%BE%88%E9%AB%98%E5%85%B4%E8%AE%A4%E8%AF%86%E6%82%A8%EF%BC%81%E5%9C%A8%E8%8C%AB%E8%8C%AB%E4%BA%BA%E6%B5%B7%E4%B8%AD%EF%BC%8C%E6%88%91%E4%BB%AC%E8%83%BD%E7%9B%B8%E8%AF%86%E7%9B%B8%E9%81%87%E6%98%AF%E4%B8%80%E7%A7%8D%E7%BC%98%E4%BB%BD%E3%80%82%E5%B8%8C%E6%9C%9B%E6%88%91%E4%BB%AC%E7%9A%84%E5%8F%8B%E8%B0%8A%E5%A4%A9%E9%95%BF%E5%9C%B0%E4%B9%85%E3%80%82%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%3Cimg%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7de43fe56.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7dea06acf.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7df0c5691.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7df615ef3.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7dfb97a25.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e01d87be.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e135a995.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e184f27a.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e1dd87be.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e22c5691.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e27c1988.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e2c88601.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e34b626d.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e3aae85b.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e463fe56.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e4ceb8eb.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e540a7d8.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e5a3473b.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e613c14d.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e66c5691.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e6d6dac2.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e72d0dac.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e7852f83.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e7f5e69e.gif%22%20alt%3D%22%22%20%2F%3E%3Cbr%20%2F%3E%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%E5%AE%9E%E7%89%A9%E8%89%B2%E5%8D%A1%E5%9B%BE%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f6906acf.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f705a995.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f7a4b571.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f810e4e1.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f8b3c14d.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f92b2564.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f9a25317.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837fa03fe56.jpg%22%20alt%3D%22%22%20%2F%3E%3C%2Fspan%3E%3C%2Fp%3E',
        'CommodityModel': {
          Img: 'http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg',
          Name: '三季园服',
          Id: 1,
          Model: [
            {
              'Id': '1',
              'Name': '型号1',
              'StockNumber': '100',
              'Units': '件',
              'Price': '68.00'
            },
            {
              'Id': '2',
              'Name': '型号2',
              'StockNumber': '100',
              'Units': '件',
              'Price': '68.00'
            }
          ]
        },
        'Coupon': {
          'IsUse': 1,
          'List': [
            {
              'Id': 1,
              'Price': '50',
              'Name': '全场通用优惠卷',
              'Remarks': '会员优惠卷',
              'validity': '2020-05-30'
            }
          ]
        }
      },
      // Bew: {'Id': 1, 'Imgs': ['http://dummyimage.com/750x550', 'http://dummyimage.com/750x550', 'http://dummyimage.com/750x550', 'http://dummyimage.com/750x550'], 'Name': '三季园服', 'Price': '68.00', 'VipPrice': '68.00', 'Oprice': '98.00', 'Discount': '10', 'Salecount': '35832', 'Stock': '3000', 'BusinessHours': '2014-01-29 01:52:44', 'BusinessPhone': '139****9614', 'PurchaseNotes': '%3Csection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23ff0000%3B%22%3E%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%B8%8B%E5%8D%95%E5%90%8E1-2%E4%B8%AA%E5%B7%A5%E4%BD%9C%E6%97%A5%E5%86%85%E4%BC%9A%E6%94%B6%E5%88%B0%E8%AE%A2%E5%8D%95%E7%9F%AD%E4%BF%A1%EF%BC%8C%E6%94%B6%E5%88%B0%E7%9F%AD%E4%BF%A1%E5%90%8E%E6%A0%B9%E6%8D%AE%E7%9F%AD%E4%BF%A1%E6%8C%87%E5%BC%95%E6%93%8D%E4%BD%9C%E6%BF%80%E6%B4%BB%E5%A6%82%E7%A8%8B%E4%BC%9A%E5%91%98%E5%8D%A1%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%B7%A5%E4%BD%9C%E6%97%A517%E7%82%B9%E5%89%8D%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E5%BD%93%E6%97%A5%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%8C17%E7%82%B9%E5%90%8E%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E6%AC%A1%E6%97%A5%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%8C%E5%91%A8%E6%9C%AB%E4%B8%8B%E5%8D%95%E7%9A%84%E7%94%A8%E6%88%B7%E5%91%A8%E4%B8%80%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%EF%BC%88%E5%A6%82%E9%81%87%E8%8A%82%E5%81%87%E6%97%A5%E9%A1%BA%E5%BB%B6%EF%BC%89%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E6%9C%AC%E4%BA%A7%E5%93%81%E4%B8%8D%E6%89%BE%E9%9B%B6%EF%BC%8C%E4%B8%8D%E5%85%91%E7%8E%B0%EF%BC%9B%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%26nbsp%3B%E6%9C%AC%E4%BA%A7%E5%93%81%E4%B8%8D%E4%B8%8E%E5%95%86%E5%AE%B6%E5%85%B6%E4%BB%96%E4%BC%98%E6%83%A0%E5%90%8C%E4%BA%AB%EF%BC%9B%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%E8%B4%AD%E4%B9%B0%E6%88%90%E5%8A%9F%E5%90%8E%EF%BC%8C%E6%BF%80%E6%B4%BB%E6%88%AA%E6%AD%A2%E6%97%A5%E6%9C%9F%EF%BC%9A2019.12.31%EF%BC%8C%E6%BF%80%E6%B4%BB%E5%90%8E365%E5%A4%A9%E5%86%85%E5%8F%AF%E7%94%A8%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cspan%20style%3D%22caret-color%3A%20red%3B%22%3E%E5%9C%A82019.12.31%E5%89%8D%E6%9C%AA%E4%BD%BF%E7%94%A8%EF%BC%8C%E6%9C%AA%E6%BF%80%E6%B4%BB%E8%80%8C%E5%AF%BC%E8%87%B4%E9%AA%8C%E8%AF%81%E7%A0%81%E8%BF%87%E6%9C%9F%E8%87%AA%E5%8A%A8%E4%BD%9C%E5%BA%9F%EF%BC%8C%E4%B8%8D%E8%AE%BE%E9%80%80%E6%AC%BE%EF%BC%81%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E4%BD%BF%E7%94%A8%E6%8F%90%E7%A4%BA%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Csection%3E%3Col%20class%3D%22%20list-paddingleft-2%22%20style%3D%22padding-top%3A%200px%3B%20padding-right%3A%200px%3B%20padding-bottom%3A%200px%3B%22%3E%3Cli%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%B8%8D%E5%8F%AF%E5%8F%A0%E5%8A%A0%E4%BD%BF%E7%94%A8%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%20%E4%B8%8D%E4%B8%8E%E5%BA%97%E5%86%85%E5%85%B6%E4%BB%96%E6%B4%BB%E5%8A%A8%E5%90%8C%E4%BA%AB%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E%E6%B8%A9%E9%A6%A8%E6%8F%90%E7%A4%BA%EF%BC%9A%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3Csection%3E%3Cp%3E%20%20%20%20%20%20%20%20%20%20%20%20%E5%A6%82%E9%81%87%E8%AE%A2%E5%8D%95%E9%97%AE%E9%A2%98%EF%BC%8C%E5%B8%8C%E6%9C%9B%E6%82%A8%E6%88%90%E5%8A%9F%E6%B7%BB%E5%8A%A0%E5%AE%A2%E6%9C%8D%E5%BE%AE%E4%BF%A1%E5%92%A8%E8%AF%A2%EF%BC%9A%3Cspan%20style%3D%22color%3A%20%23FF0000%3B%22%3E13761219479%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fsection%3E%3C%2Fsection%3E%3Cp%3E%3Cbr%2F%3E%3C%2Fp%3E', 'Description': '%3Cp%3E%3Cspan%3E%E8%BF%9B%E5%8F%A3%E6%97%A5%E6%9C%ACGracegel%E5%A4%A7%E5%BF%83%E8%83%B6%E9%A2%9C%E8%89%B2%E8%83%B6%EF%BC%8C%E5%8E%9F%E8%A3%85%E6%AD%A3%E5%93%81%EF%BC%8C%E6%94%AF%E6%8C%81%E5%AE%98%E7%BD%91%E6%9F%A5%E8%AF%A2%EF%BC%81%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%E6%AC%A2%E8%BF%8E%E7%BE%8E%E7%94%B2%E5%BA%97%E5%92%8C%E7%BE%8E%E7%94%B2%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E6%B4%BD%E8%B0%88%E5%90%88%E4%BD%9C%EF%BC%81%3Cbr%20%2F%3E%E8%AF%B7%E5%8A%A0%E5%BE%AE%E4%BF%A1%EF%BC%9A18118755881%3Cbr%20%2F%3E%E5%BE%88%E9%AB%98%E5%85%B4%E8%AE%A4%E8%AF%86%E6%82%A8%EF%BC%81%E5%9C%A8%E8%8C%AB%E8%8C%AB%E4%BA%BA%E6%B5%B7%E4%B8%AD%EF%BC%8C%E6%88%91%E4%BB%AC%E8%83%BD%E7%9B%B8%E8%AF%86%E7%9B%B8%E9%81%87%E6%98%AF%E4%B8%80%E7%A7%8D%E7%BC%98%E4%BB%BD%E3%80%82%E5%B8%8C%E6%9C%9B%E6%88%91%E4%BB%AC%E7%9A%84%E5%8F%8B%E8%B0%8A%E5%A4%A9%E9%95%BF%E5%9C%B0%E4%B9%85%E3%80%82%3Cbr%20%2F%3E%3Cbr%20%2F%3E%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%3Cimg%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7de43fe56.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7dea06acf.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7df0c5691.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7df615ef3.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7dfb97a25.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e01d87be.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e135a995.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e184f27a.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e1dd87be.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e22c5691.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e27c1988.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e2c88601.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e34b626d.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e3aae85b.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e463fe56.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e4ceb8eb.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e540a7d8.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e5a3473b.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e613c14d.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e66c5691.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e6d6dac2.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e72d0dac.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e7852f83.gif%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180822%2F5b7d7e7f5e69e.gif%22%20alt%3D%22%22%20%2F%3E%3Cbr%20%2F%3E%3C%2Fspan%3E%20%3C%2Fp%3E%3Cp%3E%3Cspan%3E%E5%AE%9E%E7%89%A9%E8%89%B2%E5%8D%A1%E5%9B%BE%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f6906acf.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f705a995.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f7a4b571.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f810e4e1.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f8b3c14d.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f92b2564.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837f9a25317.jpg%22%20alt%3D%22%22%20%2F%3E%3Cimg%20%20style%3D%22width%3A%20100%25%3B%22%20src%3D%22https%3A%2F%2Fapp.chunvwu.com%2FUploads%2FProduct%2F20180827%2F5b837fa03fe56.jpg%22%20alt%3D%22%22%20%2F%3E%3C%2Fspan%3E%3C%2Fp%3E', 'CommodityModel': [{'Id': '1', 'Name': '型号1', 'StockNumber': '100', 'Units': '件', 'Price': '68.00'}, {'Id': '2', 'Name': '型号2', 'StockNumber': '100', 'Units': '件', 'Price': '68.00'}], 'Coupon': {'IsUse': 0, 'List': [{'Id': 1, 'Price': '50', 'Name': '全场通用优惠卷', 'Remarks': '会员优惠卷', 'validity': '2020-05-30'}]}},
      // Bew: null,
      detail: {
        id: 1,
        describe: '<p><span>进口日本Gracegel大心胶颜色胶，原装正品，支持官网查询！</span> </p><p><span>欢迎美甲店和美甲培训学校的朋友们洽谈合作！<br />请加微信：18118755881<br />很高兴认识您！在茫茫人海中，我们能相识相遇是一种缘份。希望我们的友谊天长地久。<br /><br /></span> </p><p><span><img style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7de43fe56.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dea06acf.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7df0c5691.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7df615ef3.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dfb97a25.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e01d87be.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e135a995.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e184f27a.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e1dd87be.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e22c5691.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e27c1988.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e2c88601.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e34b626d.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e3aae85b.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e463fe56.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e4ceb8eb.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e540a7d8.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e5a3473b.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e613c14d.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e66c5691.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e6d6dac2.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e72d0dac.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e7852f83.gif" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180822/5b7d7e7f5e69e.gif" alt="" /><br /></span> </p><p><span>实物色卡图<img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f6906acf.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f705a995.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f7a4b571.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f810e4e1.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f8b3c14d.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f92b2564.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837f9a25317.jpg" alt="" /><img  style="width: 100%;" src="https://app.chunvwu.com/Uploads/Product/20180827/5b837fa03fe56.jpg" alt="" /></span></p>'
      },
      Banner: [
        {
          isVideo: false,
          BigImgUrl: 'https://app.chunvwu.com/Uploads//Product/20180822/5b7d7dbb69db9.jpg'
        },
        {
          isVideo: false,
          BigImgUrl: 'https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dc5848f8.jpg'
        },
        {
          isVideo: false,
          BigImgUrl: 'https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dcb660b0.jpg'
        },
        {
          isVideo: false,
          BigImgUrl: 'https://app.chunvwu.com/Uploads/Product/20180822/5b7d7dd1c1988.jpg'
        }
      ],
      shoplist: [
        {
          'Id': 1,
          'IsDJ': 1,
          'name': '日本Gracegel大心胶美甲店专用',
          'price': '68.00',
          'oprice': '98.00',
          'discount': '10.0',
          'salecount': '3532',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/30/e93028bdc1aacdfb3687181f2031765d_300.jpg?1574236362'
        }, {
          'Id': 2,
          'IsDJ': 0,
          'name': '小布胶PREGEL第七弹',
          'price': '68.00',
          'oprice': '108.00',
          'discount': '10.0',
          'salecount': '601',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/30/908c9a564a86426585b29f5335b619bc_300.jpg?1574236362'
        }, {
          'Id': 3,
          'IsDJ': 0,
          'name': '收纳盒工具箱手提式多功能',
          'price': '29.90',
          'oprice': '46.00',
          'discount': '10.0',
          'salecount': '424',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/30/5da713a690c067105aeb2fae32403405_300.jpg?1574236362'
        }, {
          'Id': 4,
          'IsDJ': 0,
          'name': '日本VETRO彩绘光疗胶',
          'price': '75.00',
          'oprice': '0.00',
          'discount': '10.0',
          'salecount': '329',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/31/e8bf0f27d70d480d3ab793bb7619aaa5_300.jpg?1574236362'
        }, {
          'Id': 5,
          'IsDJ': 0,
          'name': '日本vetro复活bella forma Japan彩绘光疗胶',
          'price': '60.00',
          'oprice': '0.00',
          'discount': '10.0',
          'salecount': '30',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/31/1cfead9959b76ce44a847c850b61c587_300.jpg?1574236362'
        }, {
          'Id': 6,
          'IsDJ': 0,
          'name': '日本VETRO中国限定6色',
          'price': '80.00',
          'oprice': '0.00',
          'discount': '10.0',
          'salecount': '30',
          'img': 'https://app.chunvwu.com/Uploads/Product/000/00/31/f4aa0dd960521e045ae2f20621fb4ee9_300.jpg?1574236362'
        }
      ]
    }
  },
  components: {
    wxparse,
    navigationBar,
    commodityModel
  },
  async onShow () {
    try {
      // const {Bew} = await this.$service.app.GetShopsDetails({
      //   Id: this.query.Id
      // })
      // this.Bew = Bew
      if (this.Bew.Imgs[0].IsVideo == 1) {
        this.Bew.Imgs[0].autoplay = true
      }
      this.Bew.PurchaseNotes = decodeURIComponent(this.Bew.PurchaseNotes)
      this.Bew.Description = decodeURIComponent(this.Bew.Description)
    } catch (e) {

    }
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    handelShoppingPay () {
      this.commodityModels = false
    },
    videoPlay (e) {
      console.log(e)
      this.autoplay = false
    },
    videoEnded () {
      this.autoplay = true
    },
    videoPause () {
      this.autoplay = true
    },
    swiperChange (e) {
      let self = this
      for (let i = 0; i < self.Bew.Imgs.length; i++) {
        if (self.Bew.Imgs[i].IsVideo == 1) {
          const videoContext = wx.createVideoContext('myVideo' + self.Bew.Imgs[i].Id)
          videoContext.stop()
        }
      }
      if (self.Bew.Imgs[e.target.current].IsVideo == 1) {
        self.Bew.Imgs.map(item => {
          item.autoplay = false
          return item
        })
        self.Bew.Imgs[e.target.current].autoplay = true
        const videoContext = wx.createVideoContext('myVideo' + self.Bew.Imgs[e.target.current].Id)
        self.autoplay = false
        videoContext.play()
      }
    },
    handelShoppingCart (item) {
      console.log(item)
      this.commodityModels = false
      // 添加购物车接口
    },
    handelByOrder (PayType) {
      this.IsPayType = PayType
      this.commodityModels = true
    },
    handelcommodityModelsClose (e) {
      this.commodityModels = e
    },
    preview (src, e) {
      // do something
    },
    navigate (href, e) {
      // do something
    },
    handPhone () {

    },
    handNavigation () {

    },
    async GetData () {
      let self = this
      self.GetBanner()
    },
    async GetBanner () {
      let self = this
      self.$request({
        method: 'get',
        data: {
          Action: 'BannerList',
          Type: 1
        }
      }).then(res => {
        self.Banner = res.DecorateTypeList.map(item => {
          item.BigImgUrl = self.$config.requeststatic + item.BigImgUrl
          return item
        })
      }).catch(err => {
        // console.log(err)
      })
    }
  },
  mounted () {
  },
  computed: {
    count () {
      return this.$store.state.main.count
    }
  }
}
</script>
<style lang="less">
@import url("~mpvue-wxparse/src/wxParse.css");
.Commoditydetails{
  font-size: 28rpx;
  letter-spacing: 2rpx;
  line-height: inherit;
}
.pageView {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  &.isIphoneX{
    padding-bottom: 170rpx;
    min-height: calc(100% - 170rpx);
    .shopBy{
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
              justify-content: space-between;
              align-items: center;
              .PriceLeft {
                .big {
                  font-size: 36rpx;
                  color: #ff5555;
                  font-weight: 600;
                }
                .Small {
                  font-size: 24rpx;
                  color: #999999;
                  padding: 0 5rpx;
                  text-decoration: line-through;
                }
              }
              .ByBtn {
                background-color: #ff5555;
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
      }
      .ShowBottomInfo {
        .InfoItem {
          padding: 30rpx 20rpx;
          border-top: 20rpx solid #f8f8f8;
          box-sizing: border-box;
          &:first-child{
            border-top: 0;
          }
          .ShopInfoTitle {
            font-size: 30rpx;
            color: #222222;
            font-weight: bold;
            text-align: center;
            margin: 40rpx  0;
            position: relative;
            &:first-child{
              margin-top: 0rpx;
            }
            &::after {
              content: "";
              display: block;
              width: 46rpx;
              height: 6rpx;
              background-color: #ff5555;
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
                  color: #ff5555;
                }
                .btnBy {
                  background-color: #ff5555;
                  color: #ffffff;
                  font-size: 26rpx;
                  padding: 10rpx 18rpx;
                  border-radius: 10rpx;
                }
              }
            }
          }
          .businessInfo{
            h2{
              font-size: 26rpx;
              font-weight: 600;
              margin-bottom: 10rpx;
            }
            p{
              font-size: 24rpx;
              color: #666666;
              line-height: 2.2;
              a{
                float: right;
                background-color: #ff5555;
                color: #ffffff;
                font-size: 22rpx;
                padding: 4rpx 18rpx;
                line-height: 1.4;
                border-radius: 10rpx;
              }
            }
          }
          .ByNotice{
            font-size: 26rpx;
            line-height: 1.6;
            letter-spacing: 2rpx;
            h2{
              font-size: 26rpx;
              font-weight: 600;
              margin-bottom: 10rpx;
              color: #ff6f0f;
            }
            p{
              font-size: 24rpx;
              color: #666666;
              line-height: 1.8;
              text{
                color: #ff0000;
              }
            }
          }
           .shopList {
            display: flex;
            align-items: center;
            // flex-direction: row;
            flex-wrap: wrap;
            padding: 0rpx;
            .list {
              display: flex;
              flex-direction: column;
              width: calc((100% / 2) - 20rpx);
              margin-top: 20rpx;
              background-color: #f5f5f5;
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
                background-color: #ffffff;
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
    }
    .shopBy{
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
      z-index: 100;
      .Item{
        width: calc( 100%/2 );
        &.Item1{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 45%;
          a{
            width: calc(100%/3);
            display: block;
            height: 100%;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-left: 1rpx solid #f8f8f8;
            position: relative;
            &:first-child{
              border-left: 0;
            }
            i{
              font-size: 42rpx;
              color: #222222;
              margin-bottom: 5rpx;
              position: relative;
              .Number{
                position: absolute;
                top: 0;
                left: 90%;
                font-size: 16rpx;
                background-color: #ff5555;
                border-radius: 50%;
                color: #ffffff;
                padding: 5rpx;
                min-width: 20rpx;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .icon{
              width: 45%;
              margin-bottom: 5rpx;
            }
            button{
              position: absolute;
              top:0;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
            p{
              font-size: 22rpx;
              color: #666666;
            }
          }
        }
        &.Item2{
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ff5555;
          width: 55%;
          a{
            width: calc(100%/2);
            display: block;
            height: 100%;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #ff5555;
            p{
              color: #ffffff;
              font-size: 30rpx;
              text-align: center;
            }
            &.myBy{
              background-color: #fba306;
            }
          }
        }
      }
    }
  }
}
</style>
