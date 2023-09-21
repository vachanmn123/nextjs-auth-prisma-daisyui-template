"use client";

export default function NavBar({ session }) {
  return (
    <nav>{session ? "Logged in as " + session.user.name : "Not logged in"}</nav>
  );
}
