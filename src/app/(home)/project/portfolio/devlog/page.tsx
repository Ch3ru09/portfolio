import Logs from "@/assets/portfolio/devlog.json";
import SmallChevron from "./SmallChevron";
import Checkmark from "./Checkmark";
import Crossmark from "./Crossmark";
import Addmark from "./Addmark";

export default function Devlog() {
  return (
    <ul className="flex flex-col gap-16 mt-12 max-w-160 mb-12">
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
              {(log.is_done.length > 0 || log.not_done.length > 0) && (
                <>
                  <h3 className="mt-6 text-primary text-2xl font-heading font-bold">
                    Done Today
                  </h3>
                  <ul className="ml-4 mt-2">
                    {log.is_done.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Checkmark />
                          <p>{todo}</p>
                        </li>
                      );
                    })}
                    {log.not_done.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Crossmark />
                          <p>{todo}</p>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
              {log.todos.length > 0 && (
                <>
                  <h3 className="mt-6 text-primary text-2xl font-heading font-bold">
                    Todo Tomorrow
                  </h3>
                  <ul className="ml-4 mt-2">
                    {log.todos.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Addmark />
                          <p>{todo}</p>
                        </li>
                      );
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

