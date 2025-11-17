import Logs from "@/assets/portfolio/devlog.json";
import SmallChevron from "./SmallChevron";

export default function Devlog() {
  return (
    <ul className="flex flex-col gap-16 mt-12 w-1/2 mb-12">
      {Logs.map((log, i) => {
        return (
          <li key={i} className="flex">
            <div>
              <SmallChevron />
            </div>
            <div>
              <div className="flex text-primary text-4xl font-heading font-bold">
                <p>Day {log.day} — </p> &nbsp;
                <h2>{log.title}</h2>
              </div>
              <p className="ml-4 mt-2">{log.log}</p>
              {log.todos.length > 0 && (
                <>
                  <h3 className="mt-6 text-primary text-2xl font-heading font-bold">
                    Todo Tomorrow
                  </h3>
                  <ul className="ml-4 mt-2">
                    {log.todos.map((todo, j) => {
                      return <li key={j}>{todo}</li>;
                    })}
                  </ul>
                </>
              )}
              {log.is_done.length > 0 && (
                <>
                  <h3 className="mt-6 text-primary text-2xl font-heading font-bold">
                    Done Today
                  </h3>
                  <ul className="ml-4 mt-2">
                    {log.is_done.map((todo, j) => {
                      return <li key={j}>{todo}</li>;
                    })}
                  </ul>
                </>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

