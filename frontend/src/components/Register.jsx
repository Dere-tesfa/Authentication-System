import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            await axios.post("/api/users", formData);
            setMessage("Registered successfully!!");
            setFormData({ name: "", email: "", password: "" });

            setTimeout(() => navigate("/login"), 1500); // redirect after 1.5s
        } catch (err) {
            setMessage(err.response?.data || "Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };
    const styles = {
        constainers: { display: "flex", justifyContent: "center", marginTop: "50px", },
        FormContainer: { padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "250px" },
        form: { display: "flex", flexDirection: "column", padding: "15px" },
        input: { padding: '5px', outline: "none", borderRadius: "5px", textAlign: "center", fontFamily: "monolic", fontWeight: "bold", border: "none", border: "1px solid gray" },
        btn: { padding: "10px", marginTop: "10px", borderRadius: "5px", border: "none", fontSize: "20px", backgroundColor: "green", color: "white" }
    }

    return (
        <div style={styles.constainers}>
            <div style={styles.FormContainer}>
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <hr />
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
                    <button style={styles.btn} type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}
