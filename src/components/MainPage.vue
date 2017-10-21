<template>
    <div>
        <v-fade-transition name="fade" mode="out-in">
            <router-view></router-view>
        </v-fade-transition>
        <v-bottom-nav absolute :value="true" :active.sync="this.$route.name" class="transparent">
            <v-btn flat v-for="mod in modules" :value="mod.name" :key="mod.name" @click="loadModule(mod.name)">
                <span>{{mod.name}}</span>
                <v-icon :color="mod.meta.color">{{mod.meta.icon}}</v-icon>
            </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script>
import appModules from '../router/appModules'

export default {
    data() {
        return {
            modules: appModules
        }
    },
    methods : {
        loadModule : function(moduleName){
            this.$router.push(moduleName);
        }
    }
}
</script>

<style scoped>

</style>
