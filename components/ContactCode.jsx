import styles from "../styles/ContactCode.module.css";

const contactItems = [
    {
        social: "email",
        link: "ikhanbehram@gmail.com",
        href: "mailto:ikhanbehram@gmail.com"
    },
    {
        social: "github",
        link: "ikhanbehram",
        href: "https://github.com/ikhanbehram"
    },
    {
        social: "linkedin",
        link: "Behram khan",
        href: "https://www.linkedin.com/in/behram-khan-6b8652207/"
    },
    {
        social: "twitter",
        link: "@ikhanbehram",
        href: "https://twitter.com/ikhanbehram?t=8e14S_eKSpdZhCa9jOk12w&s=08"
    },

    {
        social: "telegram",
        link: "@Behramkhan",
        href: "https://t.me/Behramkhan"
    }
];

const ContactCode = () => {
    return (
        <div className={styles.code}>
            <p className={styles.line}>
                <span className={styles.className}>.socials</span> &#123;
            </p>
            {contactItems.slice(0, 8).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;&nbsp;{item.social}:{" "}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            {contactItems.slice(8, contactItems.length).map((item, index) => (
                <p className={styles.line} key={index}>
                    &nbsp;&nbsp;{item.social}:{" "}
                    <a href={item.href} target="_blank" rel="noopener">
                        {item.link}
                    </a>
                    ;
                </p>
            ))}
            <p className={styles.line}>&#125;</p>
        </div>
    );
};

export default ContactCode;
