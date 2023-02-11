import cors from "cors";
import { Router } from "express";

import prisma from "../lib/prisma";
import rateLimiter from "../utils/rateLimiter";

const serviceRouter = Router();

serviceRouter.use(rateLimiter);

serviceRouter.use(
  cors({
    origin: [/\.ciaugm\.com$/],
    methods: ["GET", "PUT"],
    optionsSuccessStatus: 200,
  })
);

//serviceRouter.use(cors());

serviceRouter.put(
  "/",

  async (req, res) => {
    const data = req.body;

    try {
      await prisma.service.update({
        where: {
          service: data.service,
        },
        data: {
          active: data.active,
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  }
);

serviceRouter.get("/", async (req, res) => {
  const { service } = req.query;

  try {
    const serviceData = await prisma.service.findFirst({
      where: {
        service: service as string,
      },
    });

    res.status(200).json(serviceData);
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default serviceRouter;
