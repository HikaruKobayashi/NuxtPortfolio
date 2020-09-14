<template>
  <form name="contact" method="POST" data-aos='fade-up' class='contact' netlify>
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