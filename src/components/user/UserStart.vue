<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">

            <router-link tag="li" to="/user/1" class="list-group-item" style="cursor: pointer">User 1</router-link>
            <router-link tag="li" to="/user/2" class="list-group-item" style="cursor: pointer">User 2</router-link>
            <router-link tag="li" to="/user/3" class="list-group-item" style="cursor: pointer">User 3</router-link>
            <!--<router-link v-for='i in 5' tag="li" :to="'/user/'+{{i}}" class="list-group-item" style="cursor: pointer">User {{i}}</router-link>-->
            <!--<li class="list-group-item" style="cursor: pointer">User {{i}}</li>
            <li class="list-group-item" style="cursor: pointer">User 3</li>-->
        </ul>
    </div>
</template>