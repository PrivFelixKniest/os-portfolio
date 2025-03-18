"use client";

import Image from "next/image";
import { useState } from "react";
import "./login.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Login() {
  const [loginStage, setLoginStage] = useState<"CLICK" | "LOGIN" | "FADEOUT">(
    "CLICK"
  );

  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");

  function handleAnimation() {
    const audio = new Audio("/startup.mp3");
    audio.volume = 0.5;
    audio.play();
    setLoginStage("LOGIN");
  }

  function handleLogin() {
    const audio = new Audio("/login.mp3");
    audio.volume = 0.7;
    audio.play();
    setLoginStage("FADEOUT");
  }

  function playTock() {
    const audio = new Audio("/tock.mp3");
    audio.volume = 0.7;
    audio.play();
  }

  switch (loginStage) {
    case "CLICK":
      return (
        <button
          onClick={handleAnimation}
          className="fixed bottom-0 left-0 z-10 h-[100vh] w-[100vw] bg-black"
        >
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <div className="pulsing">Click to Continue...</div>
          </div>
        </button>
      );
    case "LOGIN":
      return (
        <div className="fixed bottom-0 left-0 z-10 h-[100vh] w-[100vw] bg-black">
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <Image
              height={400}
              width={400}
              alt="PortfoliOS Logo"
              src="/portfolios.svg"
              className="logo-animation"
              draggable={false}
            />
            <div className="form-animation">
              <div className="h-[124px] flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Profile"
                  className="form-input-1"
                  value={profile}
                  onChange={(e) => {
                    playTock();
                    setProfile(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="form-input-2"
                  value={password}
                  onChange={(e) => {
                    playTock();
                    setPassword(e.target.value);
                  }}
                />
                <Button className="form-input-3" onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    case "FADEOUT":
      return (
        <div className="fixed bottom-0 left-0 z-10 h-[100vh] w-[100vw] bg-black login-fadeout">
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <Image
              height={400}
              width={400}
              alt="PortfoliOS Logo"
              src="/portfolios.svg"
              draggable={false}
            />
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Profile"
                value={profile}
                readOnly
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                readOnly
              />
              <Button onClick={handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      );
  }
}
