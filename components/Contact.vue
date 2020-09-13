<template>
  <div class="p-contact contact">
    <form class="p-contact__form contact_form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
      <input type="hidden" name="form-name" value="contact">

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <input type="text" id="username" name="username" v-model="username" autocomplete="name">
      </div>

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <input type="text" id="katakana" name="katakana" v-model="katakana">
      </div>

      <div class="p-contact__item">
        <label for="useremail">メールアドレス</label>
        <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email">
      </div>

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <textarea id="message" name="message" v-model="message"></textarea>
      </div>

      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField"/>
      </div>

      <div class="p-contact__submit">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>


<style>
  .contact {
    height: 50vh;
    background-color: rgb(241,243,244);
  }

  .contact_form {
    width: 50%;
    text-align: center;
    margin: auto;
  }
</style>