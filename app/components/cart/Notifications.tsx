"use client";

import { useEffect } from "react";
import {
  useCartActions,
  useCartUiState,
} from "@/app/components/cart/CartProvider";

import Button from "@/app/components/ui/ButtonShop";
import type { Notification, NotificationKind } from "@/app/types/shop";

const AUTO_DISMISS_MS = 4000;

const kindClasses: Record<NotificationKind, string> = {
  success: "border-green-300 bg-green-50 text-green-900",
  error: "border-red-300 bg-red-50 text-red-900",
  info: "border-neutral-300 bg-white text-neutral-900",
};

type NotificationItemProps = {
  notification: Notification;
};

function NotificationItem({ notification }: NotificationItemProps) {
  const { dismiss } = useCartActions();

  useEffect(() => {
    const timeoutId = setTimeout(
      () => dismiss(notification.id),
      AUTO_DISMISS_MS,
    );

    return () => clearTimeout(timeoutId);
  }, [dismiss, notification.id]);

  return (
    <li
      className={`pointer-events-auto flex items-start justify-between gap-3 rounded border p-3 text-sm shadow ${kindClasses[notification.kind]}`}
    >
      <span>{notification.message}</span>
      <Button
        variant="secondary"
        aria-label="Fermer la notification"
        onClick={() => dismiss(notification.id)}
      >
        ✕
      </Button>
    </li>
  );
}

export default function Notifications() {
  const { notifications } = useCartUiState();

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 right-4 z-50 w-80 max-w-[calc(100%-2rem)]"
    >
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </ul>
    </div>
  );
}