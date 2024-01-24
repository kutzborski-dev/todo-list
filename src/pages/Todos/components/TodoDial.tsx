import { SpeedDial  } from "@mui/material";
import { useThemeContext } from "context/themeContext";
import Tooltip from "@mui/material/Tooltip";

export default function TodoDial({ariaLabel = "", tooltipTitle = "", positionStyle = null, icon = null}: {ariaLabel?: string, tooltipTitle?: string, positionStyle?: object | null, icon?: React.ReactNode}) {
    const defaultPosition = { position: 'absolute', bottom: 30, right: 30 };

    if(!positionStyle) {
        positionStyle = defaultPosition;
    } else {
        positionStyle = {...defaultPosition, ...positionStyle};
    }

    return (
        <Tooltip title={tooltipTitle.length ? tooltipTitle : ariaLabel}>
            <SpeedDial
                ariaLabel={ariaLabel}
                sx={positionStyle}
                icon={icon}
                FabProps={{
                    className: "!bg-primary hover:!bg-primary-hover dark:!bg-primary-dark dark:hover:!bg-primary-dark-hover",
                }}
            >
            </SpeedDial>
        </Tooltip>
    );
}