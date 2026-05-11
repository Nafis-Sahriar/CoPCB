"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaHexagonNodes } from "react-icons/fa6";

const LogInPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 items-center bg-black w-[90%] md:w-[50%] mx-auto mt-20 rounded-2xl border border-white/10 mb-20">
      <div className=" text-white space-y-5 bg-black p-10 ">
        <div className="flex gap-2">
          <FaHexagonNodes className="text-green-500 text-4xl" />
          <h2 className="text-2xl font-bold">CoPCB</h2>
        </div>

        <p>Ai-Powered platform for modern PCB design and automation.</p>
      </div>

      <div className="bg-[#0F1216]  rounded-lg py-20 px-10 w-full ">
        <div className="mb-10 space-y-3">
          <h1 className="text-2xl font-bold text-white italic">Welcome Back</h1>
          <p className="text-white">Please login to your account</p>
        </div>

        <Form className="flex w-96 flex-col gap-4 mx-auto ">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white mb-3">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-white mb-3">Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-gray-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 my-5">
            <Button
              type="submit"
              className="bg-[#289E78] hover:bg-[#289E78] text-white font-bold w-full rounded-xl"
            >
              Log In
            </Button>
          </div>
          <hr className="text-white h-px"></hr>
          <div>
            <p className="text-center text-gray-400">Or continue with</p>
            <div className="flex gap-4 justify-center mt-4">
              <Button
                variant="outline"
                className="text-white border-gray-700 hover:bg-gray-700/10"
              >
                Google <FaGoogle className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="text-white border-gray-700 hover:bg-gray-700/10"
              >
                GitHub <FaGithub className="ml-2" />
              </Button>
            </div>

            <p className="text-center mt-5 text-gray-400">
              Do not have an account?{" "}
              <Link href="/signup" className="text-green-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogInPage;
