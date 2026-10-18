export type PracticeContest = {
    title: string;
    meetingDate: string;
    problemsHref: string;
    solutionsHref?: string;
};

// Keep the most recent meeting first for the homepage feature.
export const practiceContests: PracticeContest[] = [
    {
        title: "OMMC 2022 Mock AMC 10",
        meetingDate: "2026-10-17",
        problemsHref: "https://drive.google.com/file/d/1fOu-Uk1ZPFMaqTucR9L_lhy_geslP3UV/view",
        solutionsHref: "https://drive.google.com/file/d/1jBlLvWhe5PlOdacp79lTobaMILdPT3vi/view",
    },
    {
        title: "OMMC 2022 Mock AMC 12",
        meetingDate: "2026-10-17",
        problemsHref: "https://drive.google.com/file/d/12LFs7dsYAwM_zFGUbM09fln1aD5xHQdo/view",
        solutionsHref: "https://drive.google.com/file/d/1cHXzsE38H5RYJGk5sJ6H0FBJxn2N0tIf/view",
    },
    {
        title: "ARML Local 2017 Team Round",
        meetingDate: "2026-10-03",
        problemsHref: "/practice-contests/2026-10-03-arml-local-2017-team.pdf",
        solutionsHref: "/practice-contests/2026-10-03-arml-local-2017-team-solutions.pdf",
    },
];

export function formatMeetingDate(date: string, includeYear = true): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        ...(includeYear ? { year: "numeric" as const } : {}),
        timeZone: "UTC",
    }).format(new Date(`${date}T12:00:00Z`));
}
