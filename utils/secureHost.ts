import { Request, Response, NextFunction } from "express";

const secureHost = async (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;

  if (!origin?.endsWith("ciaugm.com")) {
    res.status(401).send("Unauthorized");
  } else next();
};

export default secureHost;
