import Input from "../components/Input";

const LoginPage = () =>{
    return(
        <div className="flex w-full h-screen">
            <div className="w-1/2 flex items-center justify-center bg-gray-100">

            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form action="" method="post">
                    <Input label={"Correo"} supportingText={"Ingresa tu correo electronico"}/>
                    <Input label={"Contraseña"} supportingText={"Ingresa tu contraseña"} type="password"/>
                    <a href="http://" className="text-red-500 text-right w-full block mt-2 font-bold underline">¿Olvidaste tu contraseña?</a>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;