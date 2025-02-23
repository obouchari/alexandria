"use server";

import { z } from "zod";

import { auth } from "~/lib/auth";
import type { ActionResponse, SignupFormData } from "./types";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signUpAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const values = Object.fromEntries(formData) as SignupFormData;

    // validate the form data
    const parsed = signUpSchema.safeParse(values);

    if (!parsed.success) {
      return {
        success: false,
        message: "Please fix the errors in the form.",
        errors: parsed.error.flatten().fieldErrors,
        inputs: values,
      };
    }

    const response = await auth.api.signUpEmail({
      body: values,
      asResponse: true,
    });

    console.log(response);

    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error: unknown) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
