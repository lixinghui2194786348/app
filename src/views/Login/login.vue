 <template>
  <div class="box">
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="Login">
      <van-cell-group class="content">
        <!-- 输入任意文本 -->
        <van-field v-model="userName" label="用户名" clearable></van-field>
        <!-- 输入密码 -->
        <van-field
          v-model="passWord"
          type="password"
          label="密码"
          clearable
        ></van-field>
        <div>
          <van-button type="primary" size="small" class="btn" @click="Login"
            >登陆</van-button
          >
          <van-button type="info" size="small" class="btn" @click="showPopup"
            >注册</van-button
          >
        </div>
      </van-cell-group>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          label="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" class="btn1" @click="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
import Logins from "@/assets/Login.json";
import { Button, Field, Cell, CellGroup, Popup, Form, Loading } from "vant";
export default {
  data() {
    return {
      imgSrc: require("@/imgs/login.jpg"),
      userName: "",
      passWord: "",
      username: "",
      password: "",
      show: false
    };
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup,
    [Form.name]: Form,
    [Loading.name]: Loading
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    submit() {
      console.log(this.username, this.password);
    },
    Login() {
      console.log(this.userName, this.passWord);
      // for(let i = 0;i<Logins.data.data.length;i++){
      //   // console.log(Logins.data.data[i])
      //   if(this.userName===Logins.data.data[i].userName){
      //     if(this.passWord===Logins.data.data[i].userName.passWord){

      //     }
      //   }
      // }
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
.Login {
  width: 80%;
  height: 50px;
  position: absolute;
  text-align: center;
  padding: none;
  top: calc(50% - 100px);
  left: calc(50% - 40%);
}
.content {
  opacity: 0.7;
}
.box{
  width:100%;
  height: 100%;
  overflow: hidden;
}
.btn {
  width: 80px;
  border-radius: 5%;
}
.btn1 {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>