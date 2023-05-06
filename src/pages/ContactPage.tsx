import React from "react";
import { MapFrame } from "@components/MapFrame";
import { ContactItem } from "@components/ContactItem";
import { Marker } from "@icons/Marker";
import { Phone } from "@icons/Phone";
import { Email } from "@icons/Email";
import { Bank } from "@icons/Bank";
import { Divider } from "@components/ui/Divider";
import { BackgroundImage } from "@components/ui/BackgroundImage";
import Image from "@assets/kontakt.webp";
import { CONTACT_DATA } from "@data/contact.data";

const IconStyle = "center center row-span-2 mr-2 place-self-center text-6xl";
const NOT_FOUND_TEXT = "Brak Informacji";
const contactList = [
  {
    title: "Adres:",
    value: CONTACT_DATA.get("Address") ?? NOT_FOUND_TEXT,
    icon: <Marker className={IconStyle} />,
  },
  {
    title: "Nr telefonu:",
    value: CONTACT_DATA.get("Phone") ?? NOT_FOUND_TEXT,
    icon: <Phone className={IconStyle} />,
  },
  {
    title: "Emial:",
    value: CONTACT_DATA.get("Emial") ?? NOT_FOUND_TEXT,
    icon: <Email className={IconStyle} />,
  },
  {
    title: "Nr konta:",
    value: CONTACT_DATA.get("Account") ?? NOT_FOUND_TEXT,
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
          {contactList.map(({ icon, title, value }) => (
            <ContactItem title={title} value={value} key={title}>
              {icon}
            </ContactItem>
          ))}
        </div>
      </section>
    </>
  );
};
