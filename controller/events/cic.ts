import cors from "cors";
import dayjs from "dayjs";
import { Router } from "express";
import prisma from "../../lib/prisma";
import cICRegisHtmlTemplate from "../../templates/cic/registrationHtml";
import rateLimiter from "../../utils/rateLimiter";
import transporter from "../../utils/sendEmail";

const cicRouter = Router();

cicRouter.use(rateLimiter);

cicRouter.use(
  cors({
    origin: [/\.ciaugm\.com$/],
    methods: ["POST"],
    optionsSuccessStatus: 200,
  })
);

cicRouter.post("/", async (req, res) => {
  const service = await prisma.service.findFirst({
    where: {
      service: "cic-form",
    },
  });

  if (!service?.active)
    res.status(400).send("CIC Tidak aktif menerima pendaftaran!");
  else {
    const data: any = req.body;

    try {
      const result = await prisma.cICTeam.create({
        data: {
          university: data.university,
          team_name: data.team_name,
          members: {
            create: data.members.map((member: any) => ({
              name: member.name,
              email: member.email,
              whatsapp: member.whatsapp,
              line_id: member.line_id,
              student_card: member.student_card,
              student_proof: member.student_proof,
              study_major: member.study_major,
              twibbon_proof: member.twibbon_proof,
              is_leader: member.is_leader,
              generation: member.generation,
            })),
          },
          payment_proof: {
            create: {
              proof: data.payment_proof,
            },
          },
          truth_statement: data.truth_statement,
          stc_statement: data.stc_statement,
          finalized_at: dayjs().format().toString(),
        },
      });

      if (result)
        return await transporter
          .sendMail({
            from: '"CIC CIA UGM" <noreply@ciaugm.com>', // sender address
            to: data.members.map((member: any) => member.email).toString(),
            subject: "Konfirmasi Registrasi ", // Subject line
            text: "Terimakasih telah melakukan registrasi CIC", // plain text body
            html: cICRegisHtmlTemplate(), // html body
          })
          .then(() => {
            return res.status(200).json({ success: true });
          });
    } catch (error) {
      res.status(400).json(error);
    }
  }
});

export default cicRouter;
