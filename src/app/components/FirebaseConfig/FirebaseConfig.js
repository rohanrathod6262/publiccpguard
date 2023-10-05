import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

function firebaseConfig() {
    const firebaseConfig = {
        apiKey: "AIzaSyAlkSQ2_olmgnedjOv2XIh0y9s2YdV9rk8",
        authDomain: "cpguide-64632.firebaseapp.com",
        projectId: "cpguide-64632",
        storageBucket: "cpguide-64632.appspot.com",
        messagingSenderId: "230401273260",
        appId: "1:230401273260:web:c007483f589b360e1e1e09",
        measurementId: "G-BWN1Y99X4W"
      };
      const app = initializeApp(firebaseConfig);
      return getDatabase(app);
}
export default firebaseConfig;