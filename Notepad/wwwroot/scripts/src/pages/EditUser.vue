<template>
<div>
    <input v-model="user.name" type="text" placeholder="Name">
    <input v-model="user.userId" type="text" placeholder="User Id">
    <button v-on:click="updateUser()" type="button" class="btn">Update</button>
</div>
</template>
<script>
export default {
    data() {
    return {
      id:this.$route.params.id,
      user:[], 
    };
  },
   mounted(){
      this.getUser();
      console.log(this.id);
    },
    methods: {
      getUser(){
         fetch("/api/Notepad/"+this.id, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
        })
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );
      },
      clearData(){
        this.user=[];
      },
        updateUser() {
      fetch("/api/Notepad/" + this.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parseInt(this.id),
          name: this.user.name,
          userId: parseInt(this.user.userId),
        }),
      })
      .then((response) => {
        this.clearData();
        this.$router.push('/');
      });
    },        
    },
}
</script>