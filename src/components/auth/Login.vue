<template>
    <v-container fluid fill-height text-xs-center>
        <v-layout row wrap align-center>
            <v-flex xs10 md4 offset-md4 class="text-xs-center">
                <v-text-field name="username" label="User Name" id="username" prepend-icon="account_circle"></v-text-field>
                <v-text-field name="password"
                              label="Password"
                              id="password"
                              prepend-icon="fingerprint"
                              :append-icon="e1 ? 'visibility' : 'visibility_off'"
                              :append-icon-cb="() => (e1 = !e1)"
                              :type="e1 ? 'password' : 'text'"></v-text-field>
                <v-btn round color="primary" dark @click="goToDashboard()">Login</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            e1: true,
            msg: 'LOGIN PAGE'
        }
    },
    methods: {
        goToDashboard: function() {
            this.$router.push('Dashboard');
        }
    }
}
</script>
