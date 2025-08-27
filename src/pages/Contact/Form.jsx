import { send } from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation(["contact"]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    send("service_vrep6b6", "template_luyzrbl", data, {
      publicKey: "VZPtMDqSyX9qv742p",
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
            placeholder={t("contact:form.name")}
            {...register("name", {
              required: t("contact:form.name.required"),
              minLength: {
                value: 3,
                message: t("contact:form.name.minLength"),
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
            placeholder={t("contact:form.email")}
            {...register("email", {
              required: t("contact:form.email.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("contact:form.email.pattern"),
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
            placeholder={t("contact:form.subject")}
            {...register("title", {
              required: t("contact:form.title.required"),
              minLength: {
                value: 5,
                message: t("contact:form.title.minLength"),
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
            placeholder={t("contact:form.message")}
            rows={5}
            {...register("message", {
              required: t("contact:form.message.required"),
              minLength: {
                value: 10,
                message: t("contact:form.message.minLength"),
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

        <button type="submit" className={styles.buttonSubmit}>
          {isLoading ? t("contact:form.loading") : t("contact:form.send")}
        </button>
      </form>
    </>
  );
};
