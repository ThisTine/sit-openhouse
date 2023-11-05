import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import Mail from 'nodemailer/lib/mailer';
import { ICT_EMAIL } from '@/mail/ict/email';

export interface IMailMetadata {
    to: string | string[]
    event: "ICT" | "OPENHOUSE"
    name: string
}

export const getEmailTemplate = async ({event,to,name} : IMailMetadata)=>{
	const ICT_MAIL = ICT_EMAIL;
	
	let htmlTemplate;
	let logo;
	let subject;
	if(event === "ICT"){
		logo = process.cwd()+"/src/mail/ict/ict-logo-min.png";
		htmlTemplate = ICT_MAIL.replace(":ict-name:",name);
		htmlTemplate = htmlTemplate.replace(":ict-test-url:",process.env.ICT_TEST_URL+"");
		htmlTemplate = htmlTemplate.replace(":ict-test-pwd:",process.env.ICT_TEST_PWD+"");
		subject = "ยืนยันการสมัคร ICT Chllenge";
	}
	if(Array.isArray(to)){
		to = to.join(", ");
	}

	return {
		from: `"ICT Challenge" <${process.env.MAIL_SENDER}>`,
		to,
		subject,
		html: htmlTemplate,
		attachments:[
			{filename:"event-logo",
				cid:"event-logo",
				path: logo}
		]
	} as Mail.Options;
};

export const sendmail = async (option: Mail.Options)=>{
	const transporter =  nodemailer.createTransport({
		host: process.env.MAIL_HOST || "",
		port: parseInt(process.env.MAIL_PORT || ""),
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	});

	const info = await transporter.sendMail(option);


	return info;
};