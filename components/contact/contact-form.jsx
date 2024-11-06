"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/schema";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submission Unavailable",
      description:
        "My form is currently not working. Please reach out to me via Phone or Gmail for any inquiries.",
    });
    return;
  };
  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md w-full bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-800 p-8 rounded-xl mt-8 mx-auto"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname: </FormLabel>
              <FormControl>
                <Input placeholder="Arnulfo Caceres" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address: </FormLabel>
              <FormControl>
                <Input placeholder="test@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message: </FormLabel>
              <FormControl>
                <Textarea placeholder="Hi...." {...field} className="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="custom"
          size="lg"
          className="w-full uppercase font-bold text-lg"
          type="button"
          onClick={onSubmitForm}
        >
          Submit
          <span>
            <BsFillSendFill />
          </span>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
