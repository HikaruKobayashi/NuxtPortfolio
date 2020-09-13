<template>
  <div class="p-contact contact">
    <form class="p-contact__form contact_form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <input type="hidden" name="form-name" value="contact">

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <br>
        <input type="text" id="username" name="username" v-model="username" autocomplete="name">
      </div>

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <br>
        <input type="text" id="katakana" name="katakana" v-model="katakana">
      </div>

      <div class="p-contact__item">
        <label for="useremail">メールアドレス</label>
        <br>
        <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
      </div>

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <br>
        <textarea id="message" name="message" v-model="message"></textarea>
      </div>

      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>

      <div class="p-contact__submit">
        <button type="submit" class='btn btn-dark'>送信</button>
      </div>
    </form>
  </div>
</template>


<style>
  .contact {
    height: 50vh;
    background-color: rgb(241,243,244);
    position: relative;
  }

  .contact_form {
    width: 50%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
</style>