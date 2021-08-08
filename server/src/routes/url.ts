import express from "express";
import {
  createUrl,
  deleteUrl,
  editUrl,
  readAndRedirect,
} from "../controllers/url";
const router = express.Router();

router.get("/read/:id", readAndRedirect);
router.post("/create", createUrl);
// router.put("/edit/:id", editUrl);
// router.delete("/delete/:id", deleteUrl);

module.exports = router;
