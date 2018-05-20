<template>
  <div class="intro">
    <h1>{{title}}</h1>
    <button v-on:click="changeName('TEST')" v-bind:disabled="buttonState">Change name</button>
    {{buttonState ? 'The button is disabled' : 'The button is enabled'}}
    <ul>
      <li v-for="(data,index) in skills">{{index}}. {{data.name}}</li>
    </ul>
    <p v-if="skills.length > 1">You posses skills</p>
    <p v-else>You don't posses any skills</p>
    <div v-bind:class="{firstClass: addFirstClass, anotherClass: addSecondClass}"></div>
    <div v-bind:class="addMoreClasses"></div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
    data () {
      return {
        title: 'Hello Basics',
        buttonState: true,
        skills: [
          {name: 'Vue'},
          {name: 'Front-End'},
          {name: 'JS'}
        ],
        addFirstClass: true,
        addSecondClass: true,
        addMoreClasses: {
          firstClass: true,
          anotherClass: true
        }
      }
    },
    methods: {
      changeName: function (name) {
        this.title = name
      }
    }
  }
</script>

<style scoped>
  .anotherClass {
    border: 1px solid black;

  }
  .firstClass {
    height: 30px;
    background-color: burlywood;
  }
  h1 {
    background-color: yellow;
  }
  ul {
    list-style-type: none;
    padding: 0;

  }
  li {
    background-color: pink;
    margin: 0;
  }
</style>
