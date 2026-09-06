'use server';

import { sendContactEmail } from "@/lib/email";

type ContactData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export async function sendContactAcion(data: ContactData) {
    try {
        await sendContactEmail(data);

        return {
            success: true
        }
    } catch (error) {
        console.error("Contact email error:", error);

        return {
            success: false,
            error: "Failed to send message."
        }
    }
}