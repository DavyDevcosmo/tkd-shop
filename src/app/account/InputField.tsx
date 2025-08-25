type InputFieldProps = {
    id: number | string;
    label: string;
    placeholder?: string;
    value?: string;
};

export function InputField({ id, label, placeholder, value }: InputFieldProps) {
    return (
        <div className="flex flex-col items-center w-full mb-6">
            <label
                htmlFor={String(id)}
                className="self-start ml-[calc(50%-12rem)] mb-2 font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                id={String(id)}
                type="text"
                defaultValue={value}
                placeholder={placeholder}
                className="border-2 rounded-2xl w-96 h-14 border-gray-600 px-4 focus:outline-none "
            />
        </div>
    );
}
