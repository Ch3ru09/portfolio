import Logs from "@/assets/portfolio/devlog.json";
import SmallChevron from "./SmallChevron";
import Checkmark from "./Checkmark";
import Crossmark from "./Crossmark";
import Addmark from "./Addmark";

export default function Devlog() {
  return (
    <ul className="mt-12 mb-12 ml-12 flex max-w-160 flex-col gap-16">
      {Logs.map((log, i) => {
        return (
          <li key={i} className="flex">
            <div>
              <SmallChevron />
            </div>
            <div>
              <div className="text-primary font-heading flex text-4xl font-bold">
                <p>Day {log.day} — </p> &nbsp;
                <h2>{log.title}</h2>
              </div>
              <div className="mt-2 mr-4 flex w-4/5 flex-col gap-4">
                {log.logs.map((x, j) => {
                  return <p key={j}>{x}</p>;
                })}
              </div>
              {(log.is_done.length > 0 || log.not_done.length > 0) && (
                <>
                  <h3 className="text-primary font-heading mt-6 text-2xl font-bold">
                    Done Today
                  </h3>
                  <ul className="mt-2 ml-4">
                    {log.is_done.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Checkmark className="aspect-square h-auto w-4" />
                          <p>{todo}</p>
                        </li>
                      );
                    })}
                    {log.not_done.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Crossmark className="aspect-square h-auto w-4" />
                          <p>{todo}</p>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
              {log.todos.length > 0 && (
                <>
                  <h3 className="text-primary font-heading mt-6 text-2xl font-bold">
                    Todo as Soon as Possible
                  </h3>
                  <ul className="mt-2 ml-4">
                    {log.todos.map((todo, j) => {
                      return (
                        <li key={j} className="flex items-center gap-2">
                          <Addmark className="aspect-square h-auto w-4" />
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
