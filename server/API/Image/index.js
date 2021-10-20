require('dotenv').config();
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import {ImageModel} from "../../database/allModels";

import {s3Upload} from "../../Utilis/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});



/*
Route             /
Descrip           Uploading given image to S3 bucket , and then saving them
Params            _id
Access            Public
Method            GET
*/

Router.post("/", upload.single("file"), async(req,res) => {
  try {
        const file = req.file;

        //S3 bucket options
        const bucketOptions = {
          Bucket: "shapeaib0721",
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read"
        };


    const uploadImage = await s3Upload(bucketOptions);

  } catch(error) {
      return res.status(500).json({error: error.message})
  }
});

export default Router;
