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
        <v-card-text>
      <v-container fluid>
        <form @submit.prevent="login()">
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Username</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="username"
              label="Type Your Account Email"
              v-model="loginForm.username"
              :rules="[rules.username.required, rules.username.email]"
              counter="60"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Password</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
            name="password"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="loginForm.password"
            min="8"
            :append-icon="icon()"
            :append-icon-cb="() => (password_visible = !password_visible)"
            :type="password_visible ? 'password' : 'text'"
            :rules="[rules.password.required, rules.password.min]"
            counter="60"
            ></v-text-field>
          </v-flex>
        </v-layout>
         <v-btn type="submit" block secondary>Sign In</v-btn>
        </form>
      </v-container>

    </v-card-text>
      </v-card>
    </modal>
</template>

<script>
import guards from './../mixins/guard'
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

    },
    mounted () {
        let self = this
        self.$modal.show('login-modal')
    },
    methods: {
        icon () {
            return this.visible ? 'visibility' : 'visibility_off'
        },
        closeLogin () {
            let self = this
            self.$modal.hide('login-modal')
            self.$router.push({ name: 'home' })
        },
        login () {
            let self = this
            self.endpoints.web = `api/auth/login`
            App.post(self.guardedLocation(), self.loginForm)
                .then((response) => {
                    self.$state.set('user', response.data.user)
                    self.$router.push({ name: 'dashboard' })
                }).catch(error => {
                    self.loginForm.errors.set(error.response.data.errors)
                    self.$popup({ message: error.response.data.message, backgroundColor: '#e57373', delay: 5, color: '#4db6ac' })
                })
        }
    },
    watch: {
        name () {
            this.errorMessages = []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
