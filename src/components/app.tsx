import * as React from "react";
import clsx from "clsx";
import { Stats, StatsItem } from "./stats";
import { useColorScheme } from "../hooks/use-color-scheme";
import { lightThemeClass, darkThemeClass } from "../styles/themes.css";
import * as styles from "./app.css";
import "../styles/global.css";

const App: React.FC = () => {
  const scheme = useColorScheme();
  const schemeClass = scheme === `dark` ? darkThemeClass : lightThemeClass;
  const [variant, setVariant] = React.useState<"default" | "invert">(`default`);

  console.log(variant);
  return (
    <div className={clsx(schemeClass, styles.wrapper)}>
      <main className={styles.innerWrapper}>
        <div className={styles.topBar}>
          <div className={styles.topBarHeading[scheme]}>Last 30 Days</div>
          <button
            className={styles.button}
            type="button"
            onClick={() =>
              variant === `default`
                ? setVariant(`invert`)
                : setVariant(`default`)
            }
          >
            Toggle Variant
          </button>
        </div>
        <Stats variant={variant}>
          <StatsItem
            label="Total Subscribers"
            from={70.946}
            to={71.897}
            percentage={12}
          />
          <StatsItem
            label="Avg. Open Rate"
            from={56.14}
            to={58.16}
            percentage={2.02}
          />
          <StatsItem
            label="Avg. Click Rate"
            from={28.62}
            to={24.57}
            percentage={-4.05}
          />
        </Stats>
        <div className={styles.footer[scheme]}>
          Design by Tailwind UI. Built with vanilla-extract for educational
          purposes.
        </div>
      </main>
    </div>
  );
};

export default App;
