<template>
    <modal name="login-modal" :adaptive="true" width="100%" height="100%" :clickToClose="false">
        <v-card :flat="true">
        <v-toolbar class="accent">
          <v-btn icon @click.native="closeLogin()">
            <v-icon class="error--text">close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-xs-center primary--text">Already Have An Account?</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <!-- If There is no User Account Login Yet Redirect to Authentication Page -->
            <v-btn class="primary--text" flat @click.native="login()">Sign In<v-icon right dark>fa-sign-in</v-icon></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text style="padding-top:100px;">
      <v-container fluid>
        <form @submit.prevent="login()">
        <v-layout row>
          <v-flex xs4 sm4 md2 offset-md3>
            <v-subheader class="primary--text">Username</v-subheader>
          </v-flex>
          <v-flex xs8 sm8 md4>
            <v-text-field
              class="primary--text"
              name="username"
              label="Type Your Account Email"
              v-model="loginForm.username"
              :rules="[rules.username.required, rules.username.email]"
              counter="60"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4 sm4 md2 offset-md3>
            <v-subheader class="primary--text">Password</v-subheader>
          </v-flex>
          <v-flex xs8 sm8 md4>
            <v-text-field
            class="primary--text"
            name="password"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="loginForm.password"
            min="8"
            :append-icon="icon"
            :append-icon-cb="() => (password_visible = !password_visible)"
            :type="password_visible ? 'password' : 'text'"
            :rules="[rules.password.required, rules.password.min]"
            counter="60"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm12 md6 offset-md3>
         <v-btn :loading="loginForm.busy" :disabled="loginForm.busy" type="submit" block :class="{primary: !loginForm.busy, accent: loginForm.busy}">Sign In</v-btn>
         </v-flex>
         <div class="text-xs-center" style="padding-top:50px;">
             <p class="secondary--text body-2">Dont Have An Account Yet?  <router-link to="/register">Click Here to Register</router-link></p>
         </div>
        </form>
      </v-container>

    </v-card-text>
      </v-card>
    </modal>
</template>

<script>
/* Multi Auth Guard Helper */
import guards from './../mixins/guard'
/* Facebook Login */
import facebookLogin from 'facebook-login-vuejs'
/* Google Recaptcha */
import VueRecaptcha from 'vue-recaptcha'
export default {
    mixins: [guards],
    data: () => ({
        loginForm: new AppForm(App.forms.loginForm),
        password_visible: false,
        rules: {
            password: {
                required: (value) => !!value || 'Password is Required.',
                min: (value) => { return value.length > 7 || 'Password is Below 8 Characters' }
            },
            username: {
                required: (value) => !!value || 'Email is Required.',
                email: (value) => {
                    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            }

        }
    }),
    computed: {
        icon () {
            return this.password_visible ? 'visibility' : 'visibility_off'
        }
    },
    mounted () {
        let self = this
        self.$modal.show('login-modal')
    },
    methods: {
        closeLogin () {
            let self = this
            self.$modal.hide('login-modal')
            self.$router.push({ name: 'home' })
        },
        login () {
            let self = this
            self.endpoints.web = route('api.auth.login')
            App.post(self.guardedLocation(), self.loginForm)
                .then(({access_token, expires_in, token_type}) => {
                    self.$state.set('access_token', access_token)
                    self.$state.set('expires_in', expires_in)
                    self.$state.set('token_type', token_type)
                    self.$router.push({ name: 'dashboard' })
                }).catch(({errors, message}) => {
                    self.loginForm.errors.set(errors)
                    self.$popup({ message: message, backgroundColor: '#e57373', delay: 5, color: '#4db6ac' })
                })
        }
    },
    watch: {
        name () {
            this.errorMessages = []
        }
    },
    components: {
        facebookLogin,
        VueRecaptcha
    }
}
</script>

<style lang="scss" scoped>

</style>
