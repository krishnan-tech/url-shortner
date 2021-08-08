import express from "express";
import { nanoid } from "nanoid";
import UrlSchema, { UrlSchema as UrlSchemaType } from "../models/url";
import { validateUrl } from "../utils/regexFn";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  const body: UrlSchemaType = req.body;

  if (!body.original_url) {
    return res.status(404).json({ error: "original url not found" });
  }

  if (!validateUrl(body.original_url)) {
    return res.status(404).json({ error: "enter valid url" });
  }

  const nano_id = nanoid(7);
  body.alias = nano_id;
  body.new_url = process.env.SERVER_URL_PREFIX + "read/" + nano_id;

  const newPost = new UrlSchema(body);
  newPost.save();

  // {
  //     "_id": "610f711257ef2c08fcf0e139",
  //     "original_url": "https://google.com/",
  //     "alias": "uR7e1lG",
  //     "new_url": "http://localhost:8080/api/uR7e1lG"
  // }

  return res.json(newPost);
};

export const readAndRedirect = async (
  req: express.Request,
  res: express.Response
) => {
  // return res.redirect("memephile.com");
  const alias = req.params.id;

  if (!alias) {
    return res.status(404).json({ error: "enter alias too" });
  }

  const urlData = await UrlSchema.findOne({ alias: alias });
  console.log(urlData);

  if (!urlData) {
    return res.status(404).json({ error: "url data not found" });
  }

  res.writeHead(301, { Location: urlData.original_url });
  res.end();
  return;
};

export const editUrl = (req: express.Request, res: express.Response) => {
  // when we do user auth system then write this function
};

export const deleteUrl = (req: express.Request, res: express.Response) => {
  // when we do user auth system then write this function
};
