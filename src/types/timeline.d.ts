type TimelineProps = {
  timelineYears: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
};

type TimelineContent = {
  type: "career" | "education";
  yearStart: number;
  yearEnd?: number;
  isPresent?: boolean;
  institution: string;
  bodyElement: React.ReactNode;
  location?: string;
  supersedesOtherPositions?: boolean;
};

interface EducationTimelineContent extends TimelineContent {
  type: "education";
  degrees: React.ReactNode[];
  GPA?: number;
}
interface CareerTimelineContent extends TimelineContent {
  type: "career";
  position: string;
}