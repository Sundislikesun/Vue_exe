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
        <div class="form-control form-control-check">
            <label>Agree</label>
            <input type="checkbox" v-model="Agree"  name="Agree" />
        </div>
        
        <input type="submit" value="Submit" class="btn btn-block" />
    </form>
</template>>

<script>
    export default {
        name: 'SignUp',
        data() {
            return {
                Name: '',
                Pwd: '',
                Agree: true
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();

                if(!this.Name) 
                {
                    alert('Please input a name')
                    return
                }

                const newAccount = {
                    id: Math.floor(Math.random() * 100000),
                    text: this.Name,
                    day: this.Pwd,
                    reminder: this.Agree
                }

                this.$emit('add-account', newAccount)

                this.Name = ''
                this.Pwd = ''
                this.Agree = true
            }
        }
    }
</script>

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