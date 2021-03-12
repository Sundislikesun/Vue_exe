<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Name</label>
            <input type="text" v-model="Name" name="Name" placeholder="Input your Name" />
        </div>
        <div class="form-control">
            <label>Password</label>
            <input type="text" v-model="Pwd"  name="Pwd" placeholder="Input your Password" />
        </div>
        
        <input type="submit" value="Submit" class="btn btn-block" />
    </form>
    <router-link to="/">Go Back</router-link>
</template>>

<style scoped>
    .add-form {
      margin-bottom: 40px;
    }
    .form-control {
      margin: 20px 0;
    }
    .form-control label {
      display: block;
    }
    .form-control input {
      width: 100%;
      height: 40px;
      margin: 5px;
      padding: 3px 7px;
      font-size: 17px;
    }
    .form-control-check {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .form-control-check label {
      flex: 1;
      align-items: center;
    }
    .form-control-check input {
      flex: 2;
      height: 20px;
    }
</style>