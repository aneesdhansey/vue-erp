<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
        <main>
            <v-content>
                <v-container fluid>
                    <v-slide-y-transition mode="out-in">
                    <router-view></router-view>
                    </v-slide-y-transition>
                </v-container>
            </v-content>
        </main>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            //drawer : false
        }
    },
    computed : {
        drawer : function() {
            return false;
        }
    }
}
</script>

<style scoped>

</style>


