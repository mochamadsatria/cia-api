import cors from "cors";
import dayjs from "dayjs";
import { Router } from "express";
import prisma from "../../lib/prisma";
import sBCRegisHtmlTemplate from "../../templates/sbc/registrationHtml";
import rateLimiter from "../../utils/rateLimiter";
import transporter from "../../utils/sendEmail";

const sbcRouter = Router();

sbcRouter.use(rateLimiter);

/*sbcRouter.use(
  cors({
    origin: [/\.ciaugm\.com$/],
    methods: ["POST"],
    optionsSuccessStatus: 200,
  })
);*/

sbcRouter.post("/", async (req, res) => {
  const service = await prisma.service.findFirst({
    where: {
      service: "sbc-form",
    },
  });

  if (!service?.active)
    res.status(400).send("SBC Tidak aktif menerima pendaftaran!");
  else {
    const data = req.body;

    try {
      const result = await prisma.sBCTeam.create({
        data: {
          university: data.university,
          team_name: data.team_name,
          bridge_name: data.bridge_name,
          university_address: data.university_address,
          study_address: data.study_address,
          members: {
            create: data.members.map((member: any) => ({
              name: member.name,
              email: member.email,
              whatsapp: member.whatsapp,
              line_id: member.line_id,
              student_card: member.student_card,
              student_proof: member.student_proof,
              photo: member.photo,
              study_major: member.study_major,
              is_leader: member.is_leader,
              address: member.address,
              student_id: member.student_id,
              semester: member.semester,
            })),
          },
          lecturer: {
            create: {
              name: data.lecturer.name,
              profession_id: data.lecturer.profession_id,
              address: data.lecturer.address,
              email: data.lecturer.email,
              whatsapp: data.lecturer.whatsapp,
              photo: data.lecturer.photo,
            },
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
        await transporter
          .sendMail({
            from: '"SBC CIA UGM" <noreply@ciaugm.com>', // sender address
            to: data.members.map((member: any) => member.email).toString(), // list of receivers
            subject: "Konfirmasi Registrasi dan Pembayaran ", // Subject line
            text: "Terimakasih telah melakukan registrasi SBC", // plain text body
            html: sBCRegisHtmlTemplate(data.team_name), // html body
          })
          .then(() => {
            return res.status(200).json({ success: true });
          });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
});

export default sbcRouter;
