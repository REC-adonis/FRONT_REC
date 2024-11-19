import { useState } from "react";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const { signup, error } = useAuthStore();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            console.error("Las contraseñas no coinciden.");
            return;
        }

        try {
            await signup(email, password, username);
            navigate("/"); // Redirige a DashboardPage
        } catch (error) {
            console.error("Error en handleSignUp:", error.message);
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <form onSubmit={handleSignUp}>
                    <Input 
                        label={"Correo"}
                        supportingText={"Ingresa tu correo electrónico"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        label={"Usuario"}
                        supportingText={"Ingresa tu nombre de usuario"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label={"Contraseña"}
                        supportingText={"Ingresa tu contraseña"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        label={"Confirmar Contraseña"}
                        supportingText={"Confirma tu contraseña"}
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    {error && (
                        <p className="text-red-500 font-semibold mb-2">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-96 bg-red-500 text-white font-bold py-2 mt-4 rounded-full hover:bg-red-600 transition duration-300"
                    >
                        Registrate
                    </button>
                    <p className="text-center w-full mt-2">
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/login" className="font-medium underline">
                            Inicia Sesión
                        </Link>
                    </p>
                </form>
            </div>
            <div className="w-1/2 relative bg-gray-100 h-screen flex justify-center">
                <img src="/logo.png" alt="#" className="w-1/4 absolute top-4" />
            </div>
        </div>
    );
};

export default SignUpPage;
