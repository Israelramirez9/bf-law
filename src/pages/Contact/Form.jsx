import { send } from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    send("service_69imvmk", "template_wse9m9c", data, {
      publicKey: "Y1LVETBeRX1Ml60bR",
    }).then(
      () => {
        alert("Gracias por tu mensaje. Te contactaremos pronto.");
        reset();
        setIsLoading(false);
      },
      (error) => {
        console.log("FAILED...", error);
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Tu nombre"
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            placeholder="Tu email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un email válido",
              },
            })}
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Asunto"
            {...register("title", {
              required: "El asunto es obligatorio",
              minLength: {
                value: 5,
                message: "El asunto debe tener al menos 5 caracteres",
              },
            })}
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          {errors.title && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.title.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            {...register("message", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            })}
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          {errors.message && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#61dafb",
            color: "#1a1a1a",
            padding: "0.8rem 2rem",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isLoading ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </>
  );
};
