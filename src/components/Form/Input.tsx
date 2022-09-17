import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = (props: InputProps) => {
    return (
        <input
            {...props}
            className="bg-zinc-900 py-3 px-4 mb-2 rounded text-sm placeholder:text-zinc-500"
        />
    );
}

export default Input;