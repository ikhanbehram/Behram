const AboutPage = ({ skills }) => {
    return (
        <>
            <h2>A Little About Me</h2>
            <p style={{ marginTop: "1rem", wordSpacing: "2px", lineHeight: "1.8rem" }}>
                Anees Ud Din Behram, An Associate Software Engineer that primarily speicalizes in web development. Within Web development my expertie
                mainly falls in front end development that deals with variety of UI frameworks. Furthermore, I have obtained significant and handy
                experience in back end development and mobile app development that at times boosts and assists my skillset as a whole. Open to learn
                any new technology
            </p>
            <h2 style={{ marginTop: "1.4rem" }}>Education</h2>
            <h5 style={{ marginTop: "0.5rem" }}>
                BS Computer Sciences, Abasyn University Of Peshawar <small style={{ opacity: 0.5 }}>(2018 - 2022)</small>{" "}
            </h5>
            <h2 style={{ marginTop: "1.5rem" }}>Experiences (Employment History)</h2>
            <h4 style={{ marginTop: "0.5rem" }}>
                Front end Intern (Angular), SMSAMI inc. Peshawar <small style={{ opacity: 0.5 }}>(January 2022 - April 2022)</small>
            </h4>
            <small>I have worked as an intern at SMSAMI</small>
            <h4 style={{ marginTop: "0.5rem" }}>Freelance</h4>
            <h4 style={{ marginTop: "0.5rem" }}>
                Full Stack Developer (React, Node/Express) ProductBox, Peshawar <small style={{ opacity: 0.5 }}>(December 2022)</small>
            </h4>
            <small>I am currently serving ProductBox as full stack developer. I am maintaning multiple web portals</small>

            <h2 style={{ marginTop: "1rem" }}>Tech Stack</h2>

            <div>
                {skills.map((skill) => {
                    return (
                        <div className="tags" style={{ margin: "0.5rem 0rem" }}>
                            <span className={skill}>{skill}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            title: "About",
            skills: [
                "JS | TS",
                "angular",
                "react",
                "angular-material",
                "material-ui",
                "react native",
                "redux",
                "redux-toolkit",
                "redux-thunk",
                "ngxs",
                "nextjs",
                "ngPWA",
                "angular-bootstrap",
                "react-bootstrap",
                "node-express",
                "rest API",
                "SQL",
                "sequelize ORM",
                "jest testing library",
                "git (version control)",
                "html css sass scss",
                "scrum"
            ]
        }
    };
}

export default AboutPage;
