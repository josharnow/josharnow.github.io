type TimelineProps = {
  timelineYears: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  sliderValue: [number, number] | number;
  setSliderValue: (value: [number, number] | number) => void;
  yearToSliderValue: (year: number, timelineYears: number[]) => number;
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
  // isSelected?: boolean;
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