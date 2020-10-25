<template>
  <div class='header-logo-menu menu'>
    <div id='nav-drawer'>
      <input  id="nav-input" type="checkbox" class="nav-unshown"/>
      <label id="nav-open" for="nav-input"><span></span></label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
        <div class="menu_border" v-scroll-to="'#overview'" to>
          <div>About Me <fa :icon="['fas', 'arrow-right']" area-hidden="true" /></div>
        </div>
        <div class="menu_border" v-scroll-to="'#skill'" to>
          <div>Skill <fa :icon="['fas', 'arrow-right']" area-hidden="true" /></div>
        </div>
        <div class="menu_border" v-scroll-to="'#masterpiece'" to>
          <div>Masterpiece <fa :icon="['fas', 'arrow-right']" area-hidden="true" /></div>
        </div>
        <div class="menu_border" v-scroll-to="'#contact'" to>
          <div>Contact <fa :icon="['fas', 'arrow-right']" area-hidden="true" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .menu {
    list-style: none;
    padding: 0;
  }

  .menu_border {
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    margin: 15px 5px;
    cursor: pointer;
  }

  #nav-drawer {
    position: relative;
    padding: 10px;
    z-index: 9999;
  }

  .nav-unshown {
    display:none;
  }

  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }

  #nav-open span, #nav-open span:before, #nav-open span:after {
    position: absolute;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    display: block;
    content: '';
    cursor: pointer;
    z-index: 50;
  }
  #nav-open span:before {
    bottom: -8px;
  }
  #nav-open span:after {
    bottom: -16px;
  }

  #nav-close {
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: .3s ease-in-out;
  }

  #nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 90%;
    max-width: 200px;
    height: 100%;
    background: #fff;
    transition: .3s ease-in-out;
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);
    text-align: center;
  }

  #nav-input:checked ~ #nav-close {
    display: block;
    opacity: .5;
  }

  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    box-shadow: 6px 0 25px rgba(0,0,0,.15);
  }

  .header-logo-menu{
    display: flex;
    display: -moz-flex;
    display: -o-flex;
    display: -webkit-flex;
    display: -ms-flex;
    flex-direction: row;
    -moz-flex-direction: row;
    -o-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    position: fixed;
    z-index: 9999;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>