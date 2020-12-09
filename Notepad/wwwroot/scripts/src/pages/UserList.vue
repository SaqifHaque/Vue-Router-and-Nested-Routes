<template>
  <div>
    <table style="width: 100%">
      <thead>
        <th>Name</th>
        <th>User Id</th>
        <th>Actions</th>
      </thead>
      <tbody v-for="u in user" :key="u.id">
        <UserRow  :user="u" @editClick="editUser" @deleteClick="deleteUser"></UserRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserRow from "../components/UserRow.vue";
export default {
  components:{UserRow},
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      fetch("/api/Notepad", {
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
    deleteUser(id) {
      fetch("/api/Notepad/" + id, {
        method: "DELETE",
      }).then(() => {
        this.loadUser();
      });
    },
    editUser(id) {
      this.$router.push('/edit-user/' + id); 
    },
    updateUser(Id, Name, UserId) {
      fetch("/api/Notepad/" + parseInt(Id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parseInt(Id),
          name: Name,
          userId: parseInt(UserId),
        }),
      }).then((response) => {
        this.loadUser();
        this.ClearData();
      });
    },
  },
};
</script>