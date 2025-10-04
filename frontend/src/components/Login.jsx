import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Update form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const res = await axios.post("/api/login", formData); // backend login endpoint
            setMessage(res.data); // show success message
            setFormData({ email: "", password: "" }); // reset form
            setTimeout(() => navigate("/dashbord"), 1000);
        } catch (err) {
            setMessage(err.response?.data || "Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };
    const styles = {
        constainers: { display: "flex", justifyContent: "center", marginTop: "50px" },
        FormContainer: { padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "250px" },
        form: { display: "flex", flexDirection: "column", padding: "15px" },
        input: { padding: '5px', outline: "none", borderRadius: "5px", textAlign: "center", fontFamily: "monolic", fontWeight: "bold", border: "none", border: "1px solid gray" },
        btn: { padding: "10px", marginTop: "10px", borderRadius: "5px", border: "none", fontSize: "20px", backgroundColor: "green", color: "white" }
    }

    return (
        <div style={styles.constainers}>
            <div style={styles.FormContainer}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <hr />
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />

                    <button type="submit" disabled={loading} style={styles.btn}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {message && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>}
            </div>
        </div>
    );
}
