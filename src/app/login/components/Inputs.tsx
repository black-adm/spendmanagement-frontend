export function Inputs() {
    return (
        <>
            <input
                type="email"
                placeholder="E-mail cadastrado"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-font-normal"
                required
            />

            <input
                type="password"
                placeholder="Digite sua senha"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder-font-normal"
                required
            />
        </>
    )
}