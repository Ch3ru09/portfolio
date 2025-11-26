"use client";

import { useRef } from "react";

export default function TechGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  return <svg ref={svgRef} />;
}
