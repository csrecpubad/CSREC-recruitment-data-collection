interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
  example?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  type?: "text" | "email" | "tel" | "number";

  error?: string;
}

export default function TextField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  example,
  required = false,
  disabled = false,
  maxLength,
  type = "text",
  error,
}: TextFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}

        {required && (
          <span className="required-mark"> *</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "input-error" : ""}
      />

      {example && (
        <small className="field-example">
          {example}
        </small>
      )}

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}