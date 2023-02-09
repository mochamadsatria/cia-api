import { Request, Response, NextFunction } from "express";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimit = new RateLimiterMemory({
  keyPrefix: "middleware",
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
});

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  rateLimit
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
};

export default rateLimiter;
