"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Valid email address required"),
  company: z.string().min(2, "Company must be at least 2 characters."),
  phone_number: z
    .string()
    .min(8, "Phone number must be at least 8 characters.")
    .max(12, "Phone number must be at most 12 characters."),
  message: z.string().min(8, "Message number must be at least 10 characters."),
});

type ContactFormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      email: "",
      message: "",
      name: "",
      phone_number: "",
    },
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-10 mb-10">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm!">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-none border-b-2! border-x-0! border-t-0 shadow-none ring-0!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm!">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="h-10 rounded-none border-b-2! border-x-0! border-t-0 shadow-none ring-0!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {/* Phone number */}
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm!">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="h-10 rounded-none border-b-2! border-x-0! border-t-0 shadow-none ring-0!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {/* Company */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm!">Company</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-none border-b-2! border-x-0! border-t-0 shadow-none ring-0!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm! mb-4">Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none rounded h-40! ring-0! border-2"
                    placeholder="Type your message here."
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button className="w-full h-10 text-white mt-10">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
