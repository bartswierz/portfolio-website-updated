"use client";

import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

export default function ToastSuccess() {
  return (
    <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
      <Toast>
        <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
        <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
      </Toast>
    </div>
  );
}
