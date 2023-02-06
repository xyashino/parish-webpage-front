import React from "react";
import { MapFrame } from "@components/MapFrame";
import { ContactItem } from "@components/ContactItem";
import { Marker } from "@icons/Marker";
import { Phone } from "@icons/Phone";
import { Email } from "@icons/Email";
import { Bank } from "@icons/Bank";
import { Divider } from "@components/ui/Divider";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/kontakt.png";

const IconStyle = "center center row-span-2 mr-2 place-self-center text-6xl";

const contactData = [
  {
    title: "Adres:",
    value: "Gruszów Wielki 205, 33-200 Dąbrowa Tarnowska",
    icon: <Marker className={IconStyle} />,
  },
  {
    title: "Nr telefonu:",
    value: "507 577 910",
    icon: <Phone className={IconStyle} />,
  },
  {
    title: "Emial:",
    value: "parafia.gw@wp.pl",
    icon: <Email className={IconStyle} />,
  },
  {
    title: "Nr konta:",
    value: "76 9462 0003 2001 0013 3724 0001",
    icon: <Bank className={IconStyle} />,
  },
];

export const ContactPage = () => {
  return (
    <>
      <BackgroundImage divider image={Image} />

      <section className="flex h-fit w-screen flex-col-reverse p-4  lg:flex-row">
        <Divider className="lg:divider-horizontal" />
        <MapFrame />
        <Divider className="lg:divider-horizontal" />
        <div className="flex w-full flex-col justify-around lg:min-h-full lg:w-1/3">
          {contactData.map(({ icon, title, value }) => (
            <ContactItem title={title} value={value} key={title}>
              {icon}
            </ContactItem>
          ))}
        </div>
      </section>
    </>
  );
};
