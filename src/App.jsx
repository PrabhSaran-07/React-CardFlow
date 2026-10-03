import {useState} from "react";
import Card from "./components/Card";
import UserList from "./components/UserList";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            alert("Please fill in all fields");
            return;
        }
        const newUser = {
            id: Date.now(),
            name,
            email,
            phone,
        };
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
        setPhone("");
    };
    return (
        <div className="app">
            <h1>React CardFlow</h1>

            <section>
                <h2>Add Contact</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input 
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <button type="submit">Add Contact</button>
                </form>
            </section>

            <section>
                <h2>Contacts</h2>
                <UserList users={users}/>
            </section>

            <section>
                <h2>Like / Unlike Cards</h2>
                
                <div className="card-container">
                    <Card title="React" />
                    <Card title="Javascript" />
                    <Card title="Cybersecurity" />
                </div>

            </section>

        </div>
    );
}

export default App;