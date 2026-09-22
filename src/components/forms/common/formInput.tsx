interface FormInputProps {
  id: string
  label: string
  type?: string
  value: string
  placeholder?: string
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function FormInput({
  id,
  label,
  type = 'text',
  value,
  placeholder,
  error,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-gray-200 focus:border-[#2D5A53]'
        }`}
      />

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormInput