import cors from "cors";
import dayjs from "dayjs";
import { Router } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import prisma from "../lib/prisma";
import rateLimiter from "../utils/rateLimiter";

const announcementRouter = Router();

announcementRouter.use(rateLimiter);

announcementRouter.use(
  cors({
    origin: [/\.ciaugm\.com$/],
    methods: ["GET", "PUT", "POST", "DELETE"],
    optionsSuccessStatus: 200,
  })
);

announcementRouter.post(
  "/",
  auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  }),
  async (req, res) => {
    const data = req.body;

    try {
      await prisma.announcement.create({
        data: {
          event: data.event,
          message: data.message,
          published_at: dayjs().format().toString(),
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
);

announcementRouter.put(
  "/",
  auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  }),
  async (req, res) => {
    const data = req.body;

    try {
      await prisma.announcement.update({
        where: {
          id: data.id,
        },
        data: {
          event: data.event,
          message: data.message,
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
);

announcementRouter.get("/", async (req, res) => {
  const { event } = req.query;

  try {
    const result = await prisma.announcement.findMany({
      where: {
        event: event as string,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

announcementRouter.delete(
  "/",
  auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  }),
  async (req, res) => {
    const { id } = req.query;

    try {
      await prisma.announcement.delete({
        where: {
          id: parseInt(id as string),
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
);

export default announcementRouter;
