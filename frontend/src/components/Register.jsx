import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../public/logo.jpg";
export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", department: "", skill: "", password: "" });
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
            setFormData({ name: "", email: "", phone: "", department: "", skill: "", password: "" });

            setTimeout(() => navigate("/login"), 1500); // redirect after 1.5s
        } catch (err) {
            setMessage(err.response?.data || "Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };
    const styles = {
        constainers: { display: "flex", justifyContent: "center", marginTop: "50px", padding: "20px" },
        FormContainer: { padding: "10px", border: "1px solid #f0ebebff", borderRadius: "5px", width: "300px" },
        form: { display: "flex", flexDirection: "column", padding: "15px" },
        input: { padding: '10px', outline: "none", borderRadius: "5px", textAlign: "center", fontFamily: "monolic", fontWeight: "bold", border: "1px solid #e9e2e2ff" },
        btn: { padding: "10px", marginTop: "10px", borderRadius: "5px", border: "none", fontSize: "20px", backgroundColor: "green", color: "white" },
        label: { padding: "5px", marginTop: "10px" }
    }

    return (
        <div style={styles.constainers}>
            <div style={styles.FormContainer}>
                <img src={img} style={{ width: "100%", borderRadius: "5px" }} alt="" />
                <p style={{ textAlign: "center" }}>Woldia University CBUB registration system</p>
                <hr />
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
                    <label style={styles.label}>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                    <label style={styles.label}>PhoneNumber:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={styles.input} />
                    <label style={styles.label}>Department:</label>
                    <input type="text" name="department" value={formData.department} onChange={handleChange} required style={styles.input} />
                    <label style={styles.label}>Skill:</label>
                    <input type="text" name="skill" value={formData.skill} onChange={handleChange} required style={styles.input} />
                    <label style={styles.label}>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
                    <button style={styles.btn} type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
                </form>
                {message && <p style={{ textAlign: "center", color: "red" }}>{message}</p>}
            </div>
        </div>
    );
}
