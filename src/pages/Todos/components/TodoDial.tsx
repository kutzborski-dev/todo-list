import { SpeedDial  } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export default function TodoDial({ariaLabel = "", tooltipTitle = "", positionStyle = null, icon = null}:
{ariaLabel?: string, tooltipTitle?: string, href?: null | string, positionStyle?: object | null, icon?: React.ReactNode}) {
    const defaultPosition = { position: 'absolute', bottom: 30, right: 30 };
    const navigate = useNavigate();

    if(!positionStyle) {
        positionStyle = defaultPosition;
    } else {
        positionStyle = {...defaultPosition, ...positionStyle};
    }

    const Dial = () => (
        <Tooltip title={tooltipTitle.length ? tooltipTitle : ariaLabel} onClick={() => navigate('/list/new')}>
                <SpeedDial
                    ariaLabel={ariaLabel}
                    sx={positionStyle}
                    icon={icon}
                    FabProps={{
                        className: "!bg-primary hover:!bg-secondary",
                    }}
                >
                </SpeedDial>
        </Tooltip>
    );

    return <Dial />;
}