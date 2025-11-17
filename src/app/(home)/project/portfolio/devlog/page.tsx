import Logs from "@/assets/portfolio/devlog.json";

export default function Devlog() {
  return (
    <ul>
      {Logs.map((log, i) => {
        return (
          <li key={i}>
            <p>Day {log.day}</p>
            <h2>{log.title}</h2>
            <p>{log.log}</p>
          </li>
        );
      })}
    </ul>
  );
}

