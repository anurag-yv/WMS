const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await sendEmail({ name, email, message });
    console.log("Resend Response:", result);

    if (result.id) {
      return res.json({ success: true, message: "Message sent successfully!" });
    }

    return res.status(500).json({ success: false, message: "Email sending failed" });

  } catch (error) {
    console.error("Resend API Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
