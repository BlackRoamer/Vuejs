<template>
  <div class="skills">
    <div class="holder">
      <h1>{{title}}</h1>
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have" v-model="skill">
      </form>
      <ul>
        <li v-for="(data,index) in skills">{{data.name}}
          <i class="remove" v-on:click="removeSkill(index)"> &#8855; </i>
        </li>

      </ul>
      <p v-if="skills.length > 1">That are the skills you posses</p>
      <p v-else>You don't posses any skills</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        title: 'Hello Skills',
        skill: '',
        skills: [
          {name: 'Front-End'},
          {name: 'Vue'},
          {name: 'JS'}
        ]
      }
    },
    methods: {
      addSkill() {
        this.skills.push({name: this.skill})
        this.skill = ''
      },
      removeSkill(id) {
        this.skills.splice(id, 1)
      }
    }
  }
</script>

<style scoped>
  .remove {
    float: right;
  }
  .remove:hover {
    cursor: pointer;
  }
  .holder {
    background: #ffffff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
</style>
