const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>ยินดีต้อนรับสู่ Server ของผม/หนู</h1>
      <p>นี่คือ Web Server เครื่องแรกที่สร้างขึ้นเองด้วย Node.js ครับ/ค่ะ</p>
      <hr>
      <h2>ข้อมูลนักศึกษา</h2>
      <p><strong>รหัสนักศึกษา:</strong> [69319010129]</p>
      <p><strong>ชื่อ-นามสกุล:</strong> [นาย จิรพนธ์ ผาสุข]</p>
    </div>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(" Web Server สตาร์ทสำเร็จแล้ว! กำลังทำงานที่พอร์ต: " + port);
});
