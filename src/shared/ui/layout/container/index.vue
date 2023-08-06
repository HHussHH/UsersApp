<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "@/app/styles/vars.less";

.container {
  width: 1137px;
  margin: 0 auto;
}

@media (min-width: @TV) {
  .container {
    width: 1600px;
  }
}

@media (max-width: @laptop) {
  .container {
    width: 767px;
  }
}

@media (max-width: @tablet) {
  .container {
    width: 400px;
  }
}

@media (max-width: @mobile) {
  .container {
    width: 300px;
  }
}
</style>
