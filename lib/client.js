import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "o8g7hf62",
  dataset: "production",
  apiVersion: "2023-02-27",
  useCdn: true,
  token:
    "skPezXbKd8pqUM4wQfpu56O5l7Z2oDVlAkBASzh6dKBtmt9vr3oRdcwpphlnxmtbmoZt8WmXs9oTcwv9ex758jN0AeeIzjfRw88L7SN7LPmNJCWxdZDT7fMlqqetgJ0nqGPdtjHmwfhMxDBT0wQylBYggzNKq7wYtC70BJL7Xcgei1kfPDKX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);