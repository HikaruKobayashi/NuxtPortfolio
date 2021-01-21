<template>
  <div class="Page-Btn" v-scroll-to="'#app'" to>
      <fa class="Page-Btn-Icon" :icon="['fas', 'chevron-up']" area-hidden="true" />
    </div>
</template>

<style>
  .Page-Btn{
    position: fixed;
    right: 14px;
    bottom: 14px;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(rgb(52,62,98), rgb(24,26,41));
  }

  .Page-Btn-Icon{
    color: #fff;
    font-size: 16px;
  }
</style>