import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await axios.post("/api/users", formData);
            setMessage(res.data); // success message from server
            setFormData({ name: "", email: "", password: "" });
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data); // server error message
            } else {
                setMessage("Error: " + err.message);
            }
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontFamily: "Arial", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px", outline: "none" }}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
                    >
                        Register
                    </button>
                </form>
                {message && <p style={{ marginTop: "10px" }}>{message}</p>}
            </div>
        </div>
    );
}
