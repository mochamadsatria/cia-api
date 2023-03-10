//import * as dotenv from "dotenv";
//dotenv.config();

import express from "express";
import helmet from "helmet";
import announcementRouter from "./controller/announcement";
import cicRouter from "./controller/events/cic";
import fcecRouter from "./controller/events/fcec";
import responseRouter from "./controller/response";
import sbcRouter from "./controller/events/sbc";
import serviceRouter from "./controller/service";

import secureHost from "./utils/secureHost";

const app = express();

app.use(secureHost);

app.use(express.json());

app.use(helmet());

app.use("/service", serviceRouter);
app.use("/announcement", announcementRouter);
app.use("/response", responseRouter);

app.use("/sbc", sbcRouter);
app.use("/cic", cicRouter);
app.use("/fcec", fcecRouter);

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
