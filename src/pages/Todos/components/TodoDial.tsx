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
                className: "!bg-primary hover:!bg-primary-hover dark:!bg-primary-dark dark:hover:!bg-primary-dark-hover",
            }}
        >
        </SpeedDial>
    );
}