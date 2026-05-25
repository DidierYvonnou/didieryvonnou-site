"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Une erreur est survenue.");
      return;
    }

    setStatus("success");
    setMessage(data.message);
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Votre adresse email"
          autoComplete="email"
          className="flex-1 rounded-full border border-[#ede5dc]/20 bg-[#ede5dc]/10 px-6 py-4 text-sm text-[#ede5dc] outline-none transition placeholder:text-[#ede5dc]/50 focus:border-[#c3963b]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center justify-center gap-3 rounded-full bg-[#ede5dc] px-7 py-4 text-sm font-semibold text-[#292928] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Inscription..." : "S’inscrire"}
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-[#ede5dc]/80" : "text-red-200"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}