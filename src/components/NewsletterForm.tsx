"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      setMessage("Введіть коректну email-адресу.");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setMessage("Дякуємо! Перевірте пошту для підтвердження підписки.");
      setEmail("");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 max-w-sm">
      <label htmlFor="footer-email" className="block text-sm text-footer-muted">
        Підпишіться на новини й закриті знижки
      </label>
      <div className="mt-2 flex items-stretch gap-2">
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Ваш email"
          aria-invalid={status === "error"}
          aria-describedby="footer-email-message"
          className="min-w-0 flex-1 rounded-full border border-footer-border bg-footer-surface-muted px-4 py-2.5 text-sm text-footer-text placeholder:text-footer-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-footer-accent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-footer-accent px-5 py-2.5 text-sm font-medium text-footer-accent-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-accent motion-safe:transition-opacity disabled:opacity-60"
        >
          {status === "loading" ? "Зачекайте…" : "Підписатись"}
        </button>
      </div>
      <p
        id="footer-email-message"
        role="status"
        aria-live="polite"
        className={
          status === "error"
            ? "mt-2 text-xs text-red-400"
            : status === "success"
              ? "mt-2 text-xs text-footer-accent"
              : "sr-only"
        }
      >
        {message}
      </p>
    </form>
  );
}
