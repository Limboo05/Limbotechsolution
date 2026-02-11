import React from "react";
import { DefaultButton } from "./../core/buttons";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer(props: any) {
    const { locale } = useRouter();
    const { t } = useTranslation("common");

    const Router = useRouter();

    let Links: { title: string; href: string }[] = [
        {
            title: t("header.links.home"),
            href: "/",
        },
        {
            title: t("header.links.services"),
            href: "/services",
        },
        {
            title: t("header.links.portfolio"),
            href: "/portfolio",
        },
        {
            title: t("header.links.about"),
            href: "/about",
        },
        {
            title: t("header.links.contact"),
            href: "/contact",
        },
    ];

    return (
        <>
            <div className="Footer" {...props}>
                <div className="Content">
                    <div className="Identity">
                        <div className="Logo">
                            <Image
                                src={
                                    props["data-theme"] === "dark"
                                        ? locale == "ar"
                                            ? "/logo/PNG/Arabic Wide Logo - Dark.png"
                                            : "/logo/PNG/Wide Logo - Dark.png"
                                        : locale == "ar"
                                        ? "/logo/PNG/Arabic Wide Logo - Light.png"
                                        : "/logo/PNG/Wide Logo - Light.png"
                                }
                                alt="Logo"
                                layout="fill"
                                style={{
                                    objectFit: "cover",
                                }}
                                priority
                            />
                        </div>

                        <p>{t("footer.Info.description")}</p>

                        <DefaultButton
                            bgColor="Red"
                            onClick={() => {
                                return Router.push("/contact");
                            }}>
                            {t("footer.Info.button")}
                        </DefaultButton>
                    </div>

                    <div className="QuickLinks">
                        <h4>{t("footer.QuickLinks.title")}</h4>

                        <div className="Links">
                            {Links.map((link, index) => {
                                return (
                                    <Link key={index} href={link.href}>
                                        {link.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="Connect">
                        <h4>{t("footer.Contact.title")}</h4>

                        <div className="Socials">
                            <div className="SocialLink">
                                <SocialIcon
                                    url="https://facebook.com/"
                                    className="Icon"
                                />
                                Facebook
                            </div>
                            <div className="SocialLink">
                                <SocialIcon
                                    url="https://www.instagram.com/limbootechsolutions/"
                                    className="Icon"
                                />
                                Instagram
                            </div>
                           <div className="SocialLink">
    <Link href="https://x.com/LimbotechS" target="_blank" rel="noopener noreferrer">
        <div className="IconContainer" style={{ 
            backgroundColor: props["data-theme"] === "dark" ? "#fff" : "#000",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Image 
                src="/public/image/icons/x-logos.png" 
                alt="X Logo" 
                width={20} 
                height={20} 
                style={{ filter: props["data-theme"] === "dark" ? "invert(0)" : "invert(1)" }}
            />
        </div>
    </Link>
    <span>X(Twitter)</span>
</div>
                            <div className="SocialLink">
                                <SocialIcon
                                    url="https://www.linkedin.com/in/limbotech-solutions-5b989a3ab"
                                    className="Icon"
                                />
                                Linkedin
                            </div>
                            <div className="SocialLink">
                                <SocialIcon
                                    url="https://www.youtube.com/channel/UCw-v1sU3RvnfeH6TP8ufTzg"
                                    className="Icon"
                                />
                                Youtube
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Info">
                    <p>
                        © Copyright 2026 - Designed by Limbo Tech Solutions. - All right
                        reserved
                    </p>

                    <p>Terms of use | Privacy Policy | Cookie Policie</p>
                </div>
            </div>
        </>
    );
}