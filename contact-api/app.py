import os, smtplib, json
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
TO_EMAIL = os.environ.get("TO_EMAIL", "vishalkhajuriya443@gmail.com")


def send_email(name: str, sender: str, subject: str, message: str) -> None:
    msg = EmailMessage()
    msg["From"] = f"Portfolio Contact <{SMTP_USER}>"
    msg["Reply-To"] = sender
    msg["To"] = TO_EMAIL
    msg["Subject"] = f"[Portfolio] {subject}"

    body = f"""New message from your portfolio contact form.

Name:    {name}
Email:   {sender}
Subject: {subject}

Message:
{message}
"""
    msg.set_content(body)

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
        smtp.starttls()
        smtp.login(SMTP_USER, SMTP_PASS)
        smtp.send_message(msg)


@app.route("/contact", methods=["POST"])
def handle_contact():
    data = request.get_json(silent=True) or {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    errors = {}
    if not name:
        errors["name"] = "Name is required"
    if not email or "@" not in email:
        errors["email"] = "Valid email is required"
    if not subject:
        errors["subject"] = "Subject is required"
    if not message:
        errors["message"] = "Message is required"

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    try:
        send_email(name, email, subject, message)
        return jsonify({"ok": True, "message": "Message sent!"})
    except Exception as e:
        print(f"Email send failed: {e}")
        return jsonify({
            "ok": False,
            "error": {
                "code": "EMAIL_FAILED",
                "message": "Could not send email right now. Please email directly.",
                "type": "system_error",
                "action": "email vishalkhajuriya443@gmail.com directly"
            }
        }), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5002))
    app.run(host="0.0.0.0", port=port)
