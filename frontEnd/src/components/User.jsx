import React from "react";
import axios from "axios";

class User extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .get("http://localhost:5000/user")
            .then((res) => {
                console.log("Response:", res);
                if (res.data.status === 201) {
                    alert("login successful");
                } else {
                    alert("Invalid user");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    render() {
        return <div>Tech Tinker</div>;
    }
}

export default User;
