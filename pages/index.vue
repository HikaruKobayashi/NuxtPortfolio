<template>
  <div>
    <Header />
    <Introduction />
    <Overview />
    <Skill />
    <Masterpiece />

    <!-- <client-only>
      <form name="contact" method="POST" class='contact' data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit" class='btn btn-dark'>Send</button>
        </p>
      </form>
    </client-only> -->
  </div>
</template>

<script>
import Header       from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Overview     from '~/components/Overview.vue'
import Skill        from '~/components/Skill.vue'
import Masterpiece  from '~/components/Masterpiece.vue'

export default {
  components: {
    Header,
    Introduction,
    Overview,
    Skill,
    Masterpiece,
  },
}
</script>

<style src='assets/css/main.css' />