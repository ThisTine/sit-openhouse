import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { ICT_EMAIL } from '@/mail/ict/email';
import {OPEN_HOUSE_EMAIL} from '@/mail/open-house/email';

export interface IMailMetadata {
    to: string | string[]
    event: "ICT" | "OPENHOUSE"
    name: string
	openHouseTemplate?: IOpenHouseEmailTemplate
}

export interface IOpenHouseEmailTemplate {
	":open-name:": string
	":open-lastname:": string
	":open-event-1:": string
	":open-event-2:": string
	":open-event-3:": string
	":open-pwd:": string
}

export const getEmailTemplate = async ({event,to,name,openHouseTemplate} : IMailMetadata)=>{
	const ICT_MAIL = ICT_EMAIL;
	
	let htmlTemplate;
	let logo;
	let subject;
	let from;
	if(event === "ICT"){
		from = `"ICT Challenge" <${process.env.MAIL_SENDER}>`;
		logo = process.cwd()+"/src/mail/ict/ict-logo-min.png";
		htmlTemplate = ICT_MAIL.replace(":ict-name:",name);
		htmlTemplate = htmlTemplate.replace(":ict-test-url:",process.env.ICT_TEST_URL+"");
		htmlTemplate = htmlTemplate.replace(":ict-test-pwd:",process.env.ICT_TEST_PWD+"");
		subject = "ยืนยันการสมัคร ICT Chllenge";
	}
	if(event === "OPENHOUSE"){
		from = `"SIT Openhouse" <${process.env.MAIL_SENDER}>`;
		logo = process.cwd()+"/src/mail/open-house/open-house-logo.png";
		htmlTemplate = OPEN_HOUSE_EMAIL;
		if(openHouseTemplate)
			for(let k of Object.keys(openHouseTemplate)){
				htmlTemplate = htmlTemplate.replace(k, openHouseTemplate[k as keyof typeof openHouseTemplate]);
			}
		subject = "ยืนยันการสมัคร SIT Openhouse 2023 (Workshop)";
	}
	if(Array.isArray(to)){
		to = to.join(", ");
	}

	return {
		from: from,
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