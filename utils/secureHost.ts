import { Request, Response, NextFunction } from "express";

const secureHost = async (req: Request, res: Response, next: NextFunction) => {
  const host = req.headers.host;

  if (!host?.endsWith("ciaugm.com")) {
    res.status(401).send("Unauthorized");
  } else next();
};

export default secureHost;
