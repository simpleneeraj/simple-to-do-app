import TodoIcon from "constant/icons/TodoIcon";
import classNames from "constant/utils/classnames";
import type { NextPage } from "next";
import React from "react";
import css from "styles/app.module.scss";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  // Get      // Set
  const [activeTab, setActiveTab] = React.useState<string>("Favorites");

  const onSelectTab = React.useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  // get
  // set

  const tabsArray = [
    {
      tabName: "All Notes",
    },
    {
      tabName: "Favorites",
    },
    {
      tabName: "Completed",
    },
    {
      tabName: "In Completed",
    },
  ];

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
              {tabsArray.map(({ tabName }, index) => {
                console.log({ isEqual: tabName === activeTab });
                return (
                  <TabButton
                    key={index}
                    buttonText={tabName}
                    isButtonActive={tabName === activeTab}
                    //  activeTab --> All Notes
                    // tabName --> All Notes
                    onClickTab={() => onSelectTab(tabName)}
                  />
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
              <div className={css["note"]}>Note 3</div>
              <div className={css["note"]}>Note 4</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

interface TabButtonProps {
  buttonText: string;
  buttonIcon?: string;
  isButtonActive: boolean;
  onClickTab: () => void;
}

const TabButton = ({
  buttonText,
  isButtonActive,
  onClickTab,
}: TabButtonProps) => {
  return (
    <button
      // className={isButtonActive ? css["active-button"] : ""}
      className={isButtonActive ? css["active-button"] : ""}
      onClick={onClickTab}
    >
      <i>
        {/* {buttonIcon} */}
        <TodoIcon />
      </i>
      {buttonText}
    </button>
  );
};

//

// const x='Hello'

/**

index 0

{
    tabName: "All Notes",
    value: "all notes",
},

index 1


 */

// Ternary Operator
// condition ==True ? Execute : Not Execute

/**


if(condition===true){
  Execute
}else{
  Not Execute
}


 */
