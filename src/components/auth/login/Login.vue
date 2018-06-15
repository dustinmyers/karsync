<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit" v-on:click="login">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'Signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        auth: { email: '', password: '' }
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', this.auth).then(() => {
          debugger
          console.log('ready to route', this.$store.getters.isLoggedIn)
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
