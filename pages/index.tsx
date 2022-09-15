import TodoIcon from "constant/icons/TodoIcon";
import classNames from "constant/utils/classnames";
import type { NextPage } from "next";
import React from "react";
import css from "styles/app.module.scss";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState("all notes");

  const onSelectTab = React.useCallback((value: string) => {
    setActiveTab(value);
  }, []);
  return (
    <React.Fragment>
      <div className={css["main"]}>
        <div className={css["container"]}>
          <div className={css["sidebar"]}>
            <label
              className={classNames(css["large-label"], css["text-center"])}
            >
              Notes
            </label>
            <div className={css["controls"]}>
              {TabsArray.map(({ tabName, value }, index) => {
                return (
                  <button
                    className={activeTab === value ? css["active-button"] : ""}
                    key={index}
                    onClick={() => onSelectTab(value)}
                  >
                    <i>
                      <TodoIcon height={16} width={16} />
                    </i>
                    {tabName}
                  </button>
                );
              })}
            </div>
            <label className={css["small-label"]}>TO-DO</label>
            <div className={css["controls"]}>
              <button>
                <i>
                  <TodoIcon height={16} width={16} />
                </i>
                All Notes
              </button>
            </div>
          </div>
          <div className={classNames(css["notes-container"])}>
            <div>
              <h2>{activeTab}</h2>
            </div>

            <div className={css["notes-grid"]}>
              <div className={css["note"]}>Note 1</div>
              <div className={css["note"]}>Note 2</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

const TabsArray = [
  {
    tabName: "All Notes",
    get value() {
      return this.tabName.toLowerCase();
    },
  },
  {
    tabName: "Favorites",
    get value() {
      return this.tabName.toLowerCase();
    },
  },
  {
    tabName: "Completed",
    get value() {
      return this.tabName.toLowerCase();
    },
  },
];
