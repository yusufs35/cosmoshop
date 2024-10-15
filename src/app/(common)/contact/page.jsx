import { PageHeader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description: "Cheap electronic devices",
};

const Page = async () => {
	await wait(3000);

  //throw new Error("Redirection error");

	return <>
		<PageHeader title="Contact Us"/>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam excepturi iure earum recusandae consequatur voluptatibus perspiciatis aliquam doloremque necessitatibus, minima aut eos temporibus modi mollitia libero optio error! Eos!
		Voluptatibus officiis ipsum explicabo, perferendis autem, cum sapiente nostrum nobis aspernatur inventore, quod amet temporibus. Deserunt optio maxime soluta quasi! Ad quis enim inventore ducimus, cum amet facere! Molestias, ipsum?
		Obcaecati dolorum sed perspiciatis id deleniti dicta a nemo. Nobis, reprehenderit. Amet, suscipit! Recusandae autem quia obcaecati officiis consectetur veniam dolor tempora explicabo reiciendis! Reprehenderit, hic velit. Porro, vitae voluptatum.
		Deleniti, voluptatum omnis? Fuga culpa, rem, ab id vel sed blanditiis quod sit dolorum ut recusandae ipsam, quas magnam deserunt cupiditate modi minus pariatur beatae cum fugit soluta velit tempore!</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam excepturi iure earum recusandae consequatur voluptatibus perspiciatis aliquam doloremque necessitatibus, minima aut eos temporibus modi mollitia libero optio error! Eos!
		Voluptatibus officiis ipsum explicabo, perferendis autem, cum sapiente nostrum nobis aspernatur inventore, quod amet temporibus. Deserunt optio maxime soluta quasi! Ad quis enim inventore ducimus, cum amet facere! Molestias, ipsum?
		Obcaecati dolorum sed perspiciatis id deleniti dicta a nemo. Nobis, reprehenderit. Amet, suscipit! Recusandae autem quia obcaecati officiis consectetur veniam dolor tempora explicabo reiciendis! Reprehenderit, hic velit. Porro, vitae voluptatum.
		Deleniti, voluptatum omnis? Fuga culpa, rem, ab id vel sed blanditiis quod sit dolorum ut recusandae ipsam, quas magnam deserunt cupiditate modi minus pariatur beatae cum fugit soluta velit tempore!</p>
	</>;
};

export default Page;
