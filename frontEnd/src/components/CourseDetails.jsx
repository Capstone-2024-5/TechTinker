import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { courseid } = useParams();
  return <>{courseid}</>;
}
