import { SpeedDial  } from "@mui/material";
import { useThemeContext } from "context/themeContext";
import colors from "tailwindcss/colors";

export default function TodoDial({ariaLabel = "", positionStyle = null, icon = null}: {ariaLabel?: string, positionStyle?: object | null, icon?: React.ReactNode}) {
    const { theme } = useThemeContext();
    const defaultPosition = { position: 'absolute', bottom: 30, right: 30 };

    if(!positionStyle) {
        positionStyle = defaultPosition;
    } else {
        positionStyle = {...defaultPosition, ...positionStyle};
    }

    return (
        <SpeedDial
            ariaLabel={ariaLabel}
            sx={positionStyle}
            icon={icon}
            FabProps={{
                className: "!bg-sky-600 hover:!bg-sky-500 dark:!bg-violet-500 dark:hover:!bg-violet-600",
            }}
        >
        </SpeedDial>
    );
}