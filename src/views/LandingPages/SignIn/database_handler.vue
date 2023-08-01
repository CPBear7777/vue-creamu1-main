// app.js
<script>
const app = Vue.createApp({
  data() {
    return {
      isConnected: false,
      errorMessage: '',
    };
  },
  created() {
    this.connectToDatabase();
  },
  methods: {
    connectToDatabase() {
      const servername = "45.32.31.135";
      const dbUsername = "CreamU";
      const dbPassword = "creamu133";
      const dbName = "doritosl_loginSystem";

      // Simulate database connection success or failure
      // In a real application, you should use Ajax or fetch to communicate with the backend server
      if (/* Your database connection logic here */) {
        this.isConnected = true;
      } else {
        this.errorMessage = "連接數據庫失敗";
      }
    },
  },
});

app.mount("#app");
</script>