interface ProgramLink {
    name: string;
    url: string;
}

const programs: ProgramLink[] = [
    { name: "TEDx", url: "https://www.ted.com/about/programs-initiatives/tedx-program" },
    { name: "TED Fellows", url: "https://www.ted.com/participate/ted-fellows-program/apply-to-be-a-ted-fellow" },
    { name: "TED Ed", url: "https://ed.ted.com/" },
    { name: "TED Translators", url: "https://www.ted.com/about/programs-initiatives/ted-translators" },
    { name: "TED Institute", url: "https://www.ted.com/about/programs-initiatives/ted-institute" },
    { name: "The Audacious Project", url: "https://www.audaciousproject.org/" },
    { name: "TED@work", url: "https://www.ted.com/about/programs-initiatives/ted-work" },
    { name: "TED Speakers Bureau", url: "https://www.ted.com/speakers" },
    { name: "TED Courses", url: "https://courses.ted.com/" },
];

const community: ProgramLink[] = [
    { name: "TED Speakers", url: "https://www.ted.com/speakers" },
    { name: "TED Fellows", url: "https://www.ted.com/participate/ted-fellows-program/meet-the-ted-fellows" },
    { name: "TED Translators", url: "https://www.ted.com/about/programs-initiatives/ted-translators" },
    { name: "TED Organisers", url: "https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide" },
    { name: "TED Community", url: "https://community.ted.com/" },
];

const TedProgramsLinks = () => {
    return (
        <>
            {/* Programs & Initiatives */}
            <div>
                <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
                    Programs & Initiatives
                </h3>
                <ul className="space-y-2">
                    {programs.map((program) => (
                        <li key={program.name}>
                            <a
                                href={program.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                {program.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Our Community */}
            <div>
                <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
                    Our Community
                </h3>
                <ul className="space-y-2">
                    {community.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TedProgramsLinks;
