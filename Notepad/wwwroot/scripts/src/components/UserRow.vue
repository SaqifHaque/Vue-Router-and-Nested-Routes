<template>
  <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.userId }}</td>
        <td>
          <button v-on:click="editUser(user.id)" type="button">Edit</button>
          <button v-on:click="deleteUser(user.id)" type="button">Delete</button>
        </td>
  </tr>
</template>
<script>
import UserRow from "../components/UserRow.vue";
export default {
    props:["user"],
    methods: {
        editUser(id){
            this.$emit("editClick",id);
        },
        deleteUser(id){
            this.$emit("deleteClick",id);
        }
    },
}
</script>