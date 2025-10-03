"use client";

import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import type React from "react";
import { useRouter } from "next/router";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => router.back();

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      onClick={close}
      aria-modal="true"
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body
  );
}