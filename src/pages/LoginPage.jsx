import { useState } from "react";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/"); // Redirige a DashboardPage
        } catch (error) {
            console.error("Error en handleLogin:", error.message);
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2 relative bg-gray-100 h-screen flex justify-center">
                <img src="/logo.png" alt="#" className="w-1/4 absolute top-4" />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form onSubmit={handleLogin}>
                    <Input 
                        label={"Correo"}
                        supportingText={"Ingresa tu correo electrónico"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label={"Contraseña"}
                        supportingText={"Ingresa tu contraseña"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <p className="text-red-500 font-semibold mb-2">{error}</p>
                    )}
                    <Link to="/forgot-password" className="text-right w-full block mt-2 font-medium underline">
                        ¿Olvidaste tu contraseña?
                    </Link>
                    <button
                        type="submit"
                        className="w-96 bg-red-500 text-white font-bold py-2 mt-4 rounded-full hover:bg-red-600 transition duration-300"
                    >
                        Iniciar sesión
                    </button>
                    <p className="text-center w-full mt-2">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/signup" className="font-medium underline">
                            Registrate
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
