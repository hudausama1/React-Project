import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
    });
    
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmpasswordError: "",
    });

    const handleValidation = (ev) => {
        const { name, value } = ev.target;
        setUser({
            ...user,
            [name]: value,
        });

        if (name === "email") {
            setError({
                ...error,
                emailError:
                    value.length === 0
                        ? "Email is required"
                        : !value.includes("@")
                        ? "Invalid email format"
                        : "",
            });
        } else if (name === "password") {
            setError({
                ...error,
                passwordError:
                    value.length < 6 ? "Password must be at least 6 characters" : "",
            });
        } else if (name === "confirmpassword") {
            setError({
                ...error,
                confirmpasswordError:
                    value !== user.password ? "Passwords do not match" : "",
            });
        } else if (name === "name") {
            setError({
                ...error,
                nameError: value.length === 0 ? "Name is required" : "",
            });
        } else if (name === "username") {
            setError({
                ...error,
                usernameError: value.length === 0 ? "Username is required" : "",
            });
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (
            !error.emailError &&
            !error.passwordError &&
            !error.nameError &&
            !error.usernameError &&
            !error.confirmpasswordError
        ) {
            console.log("Form submitted successfully:", user);
            setUser({
                name: "",
                email: "",
                username: "",
                password: "",
                confirmpassword: ""
            })
        } else {
            console.log("Form contains errors.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="nameInput"
                    value={user.name}
                    onChange={handleValidation}
                />
                <p className="text-danger">{error.nameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="emailInput"
                    value={user.email}
                    onChange={handleValidation}
                />
                <p className="text-danger">{error.emailError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">Username</label>
                <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="usernameInput"
                    value={user.username}
                    onChange={handleValidation}
                />
                <p className="text-danger">{error.usernameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="passwordInput"
                    value={user.password}
                    onChange={handleValidation}
                />
                <p className="text-danger">{error.passwordError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="confirmpasswordInput" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    id="confirmpasswordInput"
                    value={user.confirmpassword}
                    onChange={handleValidation}
                />
                <p className="text-danger">{error.confirmpasswordError}</p>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
