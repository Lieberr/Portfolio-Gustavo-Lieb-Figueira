import nodemailer from "nodemailer";

function requiredEnv(name: string) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: requiredEnv("SMTP_USER"),
        pass: requiredEnv("SMTP_PASSWORD"),
    }
});

type SendContactEmailProps = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export async function sendContactEmail({
    name,
    email,
    subject,
    message,
}: SendContactEmailProps) {
    await transporter.sendMail({
        from: `"Portfolio Contact" <${requiredEnv("SMTP_USER")}>`,
        to: requiredEnv("CONTACT_EMAIL"),
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `
            New contact message

            Name: ${name}
            Email: ${email}
            Subject: ${subject}

            Message:
            ${message}
                    `,

        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>New contact message</h2>

                <p>
                    <strong>Name:</strong> ${name}
                </p>

                <p>
                    <strong>Email:</strong> ${email}
                </p>

                <p>
                    <strong>Subject:</strong> ${subject}
                </p>

                <hr />

                <h3>Message</h3>

                <p>
                    ${message.replace(/\n/g, "<br />")}
                </p>
            </div>
        `,
    })
}