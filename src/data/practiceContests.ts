export type PracticeContest = {
    title: string;
    meetingDate: string;
    problemsHref: string;
    solutionsHref?: string;
};

// Keep the most recent meeting first for the homepage feature.
export const practiceContests: PracticeContest[] = [
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
