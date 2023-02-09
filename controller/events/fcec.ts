import cors from "cors";
import dayjs from "dayjs";
import { Router } from "express";
import prisma from "../../lib/prisma";
import fCECRegisHtmlTemplate from "../../templates/fcec/registrationHtml";
import rateLimiter from "../../utils/rateLimiter";
import transporter from "../../utils/sendEmail";

const fcecRouter = Router();

fcecRouter.use(rateLimiter);

fcecRouter.use(cors());

fcecRouter.post("/", async (req, res) => {
  const service = await prisma.service.findFirst({
    where: {
      service: "fcec-form",
    },
  });

  if (!service?.active)
    res.status(400).send("FCEC Tidak aktif menerima pendaftaran!");
  else {
    const data = req.body;
    try {
      const result = await prisma.fCECTeam.create({
        data: {
          school: data.school,
          lecturer_name: data.lecturer_name,
          abstract_title: data.abstract_title,
          abstract: data.abstract,
          team_name: data.team_name,
          originality_letter: data.originality_letter,
          members: {
            create: data.members.map((member: any) => ({
              name: member.name,
              email: member.email,
              whatsapp: member.whatsapp,
              line_id: member.line_id,
              student_card: member.student_card,
              student_proof: member.student_proof,
              twibbon_proof: member.twibbon_proof,
              photo: member.photo,
              is_leader: member.is_leader,
            })),
          },
          finalized_at: dayjs().format().toString(),
        },
      });

      if (result)
        await transporter
          .sendMail({
            from: '"CIC CIA UGM" <noreply@ciaugm.com>', // sender address
            to: data.members.map((member: any) => member.email).toString(),
            subject: "Konfirmasi Registrasi ", // Subject line
            text: "Terimakasih telah melakukan registrasi FCEC", // plain text body
            html: fCECRegisHtmlTemplate(), // html body
          })
          .then(() => {
            return res.status(200).json({ success: true });
          });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
});

export default fcecRouter;
