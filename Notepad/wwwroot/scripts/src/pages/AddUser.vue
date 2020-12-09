<template>
  <div>
    <input v-model="name"  type="text" placeholder="Name" />
    <input v-model="userId"  type="text" placeholder="User Id" />
    <button v-on:click="addUser()" type="button" class="btn">Add</button>
  </div>
</template>
<script>
export default {
    data() {
    return {
      name:"",
      userId:"",
    };
  },
    methods: {
      clearData(){
        this.name="";
        this.userId="";
      },
     addUser(){
      fetch("/api/Notepad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: this.name,
        userId: parseInt(this.userId)
        }),
      }).then((response) => {
        this.clearData();
        this.$router.push('/');
      });
    },
    },
   
}
</script>