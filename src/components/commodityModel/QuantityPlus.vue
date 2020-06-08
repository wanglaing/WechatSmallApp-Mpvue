<template>
  <div class="QuantityPlus">
    <span @click="Numberjian">-</span>
    <span>{{ value }}</span>
    <span @click="NumberAdd">+</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 1
    },
    MaxNumber:{}
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    NumberAdd() {
      if(this.value + 1>this.MaxNumber){
        return false;
      }
      this.value = this.value + 1;
      this.$emit("evenVale", this.value);
    },
    Numberjian() {
      if (this.value - 1 < 0) {
        this.value = 0;
        this.$emit("evenVale", this.value);
        return false;
      }
      this.value = this.value - 1;
      this.$emit("evenVale", this.value);
    }
  }
};
</script>

<style lang="less" scoped>
.QuantityPlus {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  span {
    border: 1px solid #e8e8e8;
    padding: 10rpx;
    border-left: 0;
    min-width: 40rpx;
    &:first-child {
      border-left: 1px solid #e8e8e8;
    }
    &:nth-child(2) {
      min-width: 100rpx;
    }
    &:nth-child(1) {
      border-radius: 30rpx 0 0 30rpx;
    }
    &:nth-child(3) {
      border-radius: 0 30rpx 30rpx 0;
    }
  }
}
</style>
