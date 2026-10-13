import type { Notification } from "@/app/types/shop";

export type CartUiState = {
  isOpen: boolean;
  notifications: Notification[];
};

export type CartUiAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "NOTIFY"; notification: Notification }
  | { type: "DISMISS"; id: string };

export const initialCartUiState: CartUiState = {
  isOpen: false,
  notifications: [],
};

const MAX_NOTIFICATIONS = 4;

export function cartUiReducer(
  state: CartUiState,
  action: CartUiAction,
): CartUiState {
  switch (action.type) {
    case "OPEN":
      return state.isOpen ? state : { ...state, isOpen: true };
    case "CLOSE":
      return state.isOpen ? { ...state, isOpen: false } : state;
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "NOTIFY":
      return {
        ...state,
        notifications: [...state.notifications, action.notification].slice(
          -MAX_NOTIFICATIONS,
        ),
      };
    case "DISMISS":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.id,
        ),
      };
  }
}