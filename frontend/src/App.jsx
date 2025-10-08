import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/Login";
import Dashboard from "./components/DashBord";




export default function App() {
    const styles = {
        nav: { display: "flex", gap: "10px", padding: "10px", borderBottom: "1px solid #ccc", justifyContent: "", textDecoration: "none" }
    }
    return (
        <div>
            {/* Navigation */}
            <nav style={styles.nav}>
                {/* <Link style={{ textDecoration: "none" }} to="/dashbord">Home</Link> */}
                <nav>
                    <Link style={{
                        textDecoration: "none", textAlign: "center", background: "blue", color: "white", padding: "10px", borderRadius: "5px", margin: "10px", display: "flex",

                        justifyContent: "center"
                    }} to="/register">Register</Link>
                    {/* <Link style={{ textDecoration: "none" }} to="/login">Login</Link> */}
                </nav>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashbord" element={<Dashboard />} />
                {/* <Route path="*" element={<h2 style={{ padding: "20px" }}>Page not found</h2>} /> */}
            </Routes>
        </div>
    );
}
