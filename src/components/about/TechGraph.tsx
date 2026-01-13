"use client";

import { useEffect, useRef, useState } from "react";
import data from "./techs.json";
import * as d3 from "d3";

export default function TechGraph() {
  const svgRef = useRef<HTMLDivElement>(null);
  const [data1, _setData] = useState<Data>(data);

  useEffect(() => {
    const svg = d3.select(svgRef.current).select("svg");
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const width = 928;
    const height = 680;

    const nodes_data: SimNode[] = data1["nodes"];
    const links_data: SimLink[] = data1["links"];

    const simulation = d3
      .forceSimulation(nodes_data)
      .force(
        "link",
        d3
          .forceLink<SimNode, SimLink>(links_data)
          .id((d) => d.id)
          .distance((d) => d.distance),
      )
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY());

    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links_data)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("image")
      .data(nodes_data)
      .join("image")
      .attr("width", (d) => 2 * d.r)
      .attr("height", (d) => 2 * d.r)
      .attr("href", (d) => `/about/graph/icons/${d.id}.svg`);
    // .attr("fill", (d) => color(d.group.toString()))

    node.append("title").text((d) => d.id);

    node.call(
      d3
        .drag()
        .on("start", ondragstart)
        .on("drag", dragged)
        .on("end", dragended) as (
          selection: d3.Selection<
            d3.BaseType | SVGImageElement,
            SimNode,
            SVGGElement,
            unknown
          >,
        ) => void,
    );

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => {
          if (
            typeof d.source == "string" ||
            typeof d.source == "number" ||
            !d.source.x
          ) {
            return null;
          }
          return d.source.x + d.source.r;
        })
        .attr("y1", (d) => {
          if (
            typeof d.source == "string" ||
            typeof d.source == "number" ||
            !d.source.y
          ) {
            return null;
          }
          return d.source.y + d.source.r;
        })
        .attr("x2", (d) => {
          if (
            typeof d.target == "string" ||
            typeof d.target == "number" ||
            !d.target.x
          ) {
            return null;
          }
          return d.target.x + d.target.r;
        })
        .attr("y2", (d) => {
          if (
            typeof d.target == "string" ||
            typeof d.target == "number" ||
            !d.target.y
          ) {
            return null;
          }
          return d.target.y + d.target.r;
        });

      node.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    });

    function ondragstart(event: { active: boolean; subject: SimNode }) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: {
      active: boolean;
      subject: SimNode;
      x: number;
      y: number;
    }) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: { active: boolean; subject: SimNode }) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      svg.selectAll("*").remove();
      simulation.stop();
    };
  }, [data1]);

  return (
    <div ref={svgRef}>
      <svg />
    </div>
  );
}

interface SimNode extends d3.SimulationNodeDatum {
  id: string;
  group: number;
  r: number;
}
interface SimLink extends d3.SimulationLinkDatum<SimNode> {
  value: number;
  distance: number;
}

interface Data {
  nodes: SimNode[];
  links: SimLink[];
}
