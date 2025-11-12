import React from "react";

export default function AdminLogin() {
  return (
    <div style={{ textAlign: "center", marginTop: 50, fontFamily: "secondary-font" }}>
      <h2>صفحه ورود</h2>
      <form style={{ display: "inline-block", marginTop: 20 }}>
        <input type="text" placeholder="نام کاربری"  style={{ padding: 10, marginBottom: 20, borderRadius: 10, backgroundColor: "#83d86e74", borderColor:"#1f9c00ff"  }} /><br />
        <input type="password" placeholder="رمز عبور" style={{ padding: 10, marginBottom: 20, borderRadius: 10, backgroundColor: "#83d86e74", borderColor:"#1f9c00ff" }} /><br />
        <button type="submit" style={{ backgroundColor: "#589947", color: "white", padding: "20px 20px", border: "none", borderRadius: "50%" }}>
          ورود
        </button>
      </form>                                   
    </div>
  );
}
