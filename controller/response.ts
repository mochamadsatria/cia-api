import cors from "cors";
import { Router } from "express";

import prisma from "../lib/prisma";
import rateLimiter from "../utils/rateLimiter";

const responseRouter = Router();

responseRouter.use(rateLimiter);

responseRouter.use(
  cors({
    origin: [/\.ciaugm\.com$/],
    methods: ["GET"],
    optionsSuccessStatus: 200,
  })
);

responseRouter.get(
  "/",

  async (req, res) => {
    const { event } = req.query;

    switch (event) {
      case "sbc":
        try {
          const result = await prisma.sBCTeam.findMany({
            include: {
              payment_proof: true,
              lecturer: true,
              members: true,
            },
          });

          res.status(200).json(result);
        } catch (error) {
          return res.status(400).json({ success: false });
        }

        break;
      case "cic":
        try {
          const result = await prisma.cICTeam.findMany({
            include: {
              payment_proof: true,
              members: true,
            },
          });

          res.status(200).json(result);
        } catch (error) {
          return res.status(400).json({ success: false });
        }
        break;
      case "fcec":
        try {
          const result = await prisma.fCECTeam.findMany({
            where: {},
            include: {
              members: true,
            },
          });

          res.status(200).json(result);
        } catch (error) {
          return res.status(400).json({ success: false });
        }

        break;
      default:
        break;
    }
  }
);

export default responseRouter;
