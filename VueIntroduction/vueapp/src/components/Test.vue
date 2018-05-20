<template>
  <div class="test">
    <div v-html="title"></div>
    {{title}}, {{user.username}}
    <p v-text="user.username"></p>
    <h2 v-if="showName">{{user.username}}</h2>
    <h3 v-else>Surprise</h3>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <input type="text" v-model="title">
    <br/>
    <button v-on:click="greet('Hello')">Say </button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter">
    <hr/>
    <label>First name: </label><input type="text" v-model="user.firstName">
    <br/>
    <label>Last name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foo'
      }
    },

    data() {
      return {
        title: '<h1>Hello</h1>',
        user: {
          username: 'Pesho',
          firstName: 'Peter',
          lastName: 'Petrov'
        },
        showName: true,
        items: [
          {title: 'first'},
          {title: 'second'},
          {title: 'third'}
        ]
      }
    },

    methods: {
      greet: function (greeting) {
        alert(greeting)
      },
      pressKey: function (event) {
        console.log(event.key)
      },
      hitEnter: function () {
        console.log('enter hitted')
      }
    },
    computed: {
      fullName: function () {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style scoped>

</style>
