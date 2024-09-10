import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon as ShopifyIcon } from '@shopify/polaris';
import { HideIcon , RefreshIcon, SearchResourceIcon, QuestionCircleIcon, SettingsIcon, ViewIcon, XIcon, CheckIcon, AlertTriangleIcon, ClockIcon, StarIcon, StarFilledIcon, InfoIcon, ArrowRightIcon, DeleteIcon, TextFontIcon, ProfileIcon, PersonIcon, AlertCircleIcon, XSmallIcon, CaretUpIcon, CaretDownIcon,
    AdjustIcon, EditIcon, DragHandleIcon, DisabledIcon, HomeIcon,GlobeIcon, LayoutBlockIcon, LayoutSectionIcon, LinkIcon, LocationIcon, LocationFilledIcon, LocationNoneIcon, MenuHorizontalIcon, MenuIcon, MenuVerticalIcon, BugIcon, DeliveryIcon,DeliveryFilledIcon, LockIcon,LockFilledIcon,
    SortAscendingIcon, SortDescendingIcon, SortIcon, InventoryIcon, CatalogIcon,
    ChevronRightIcon, ChevronLeftIcon, NoteIcon, PlusIcon, MinusIcon, CheckSmallIcon, SearchIcon
 } from '@shopify/polaris-icons';
import Tooltip from '../tooltip/Tooltip';
import Skeleton from '../skeleton/Skeleton';
import "./Icon.styles.scss"


const iconMapping = {
    refresh: RefreshIcon,
    searchnote: SearchResourceIcon,
    question: QuestionCircleIcon,
    settings: SettingsIcon,
    view: ViewIcon,
    hide: HideIcon,
    check: CheckIcon,
    clock: ClockIcon,
    star: StarIcon,
    starfilled: StarFilledIcon,
    info: InfoIcon,
    delete: DeleteIcon,
    letter: TextFontIcon,
    profile: ProfileIcon,
    person: PersonIcon,
    alerttriangle: AlertTriangleIcon,
    alertcircle: AlertCircleIcon,
    xlarge: XIcon,
    xsmall: XSmallIcon,
    arrowright: ArrowRightIcon,
    chevright: ChevronRightIcon,
    chevleft: ChevronLeftIcon,
    arrowup: CaretUpIcon,
    arrowdown: CaretDownIcon,
    adjust: AdjustIcon,
    edit: EditIcon,
    draghandle: DragHandleIcon,
    disabled: DisabledIcon,
    home: HomeIcon,
    globe: GlobeIcon,
    layoutblock: LayoutBlockIcon,
    layoutsection: LayoutSectionIcon,
    link: LinkIcon,
    location: LocationIcon,
    locationfilled: LocationFilledIcon,
    locationnone: LocationNoneIcon,
    menuhor: MenuHorizontalIcon,
    menuver: MenuVerticalIcon,
    menu: MenuIcon,
    bug: BugIcon,
    delivery: DeliveryIcon,
    deliveryfilled: DeliveryFilledIcon,
    lock: LockIcon,
    lockfilled: LockFilledIcon,
    sortasc: SortAscendingIcon,
    sortdes: SortDescendingIcon,
    sort: SortIcon,
    inventory: InventoryIcon,
    catalog: CatalogIcon,
    note: NoteIcon,
    plus: PlusIcon,
    minus: MinusIcon,
    checksmall: CheckSmallIcon,
    search: SearchIcon
  };


export default function Icon(props) {
    // ======= Props =======
    // clickTimeout - Disable onClick function for one second after click

    // To change the icon color to anything, pass a class like this "myclass path" then pass "color". Classname has to be put through className

    const tone = props.tone || "base";

    const icon = props.icon?.toLowerCase() || ""

    
    // ======= Tooltip =======
    
    const tooltipProps = {
        title:      props.tooltipText      || "",
        placement:  props.tooltipPlacement || "top",
        enterDelay: props.enterDelay       || 300,
        noArrow:    props.noArrow          || false
    }
    
    // file:///C:/Users/Taj/Documents/Screenshots/icons.png
    
    const sourceIcon = iconMapping[icon?.toLowerCase()] || null;
    
    // ======= Handle Click Logic =======
    
    const [disabled, setDisabled] = useState(false);
    
    const handleClick = () => {
        if (props.clickTimeout) {
            if (!disabled && props.onClick) {
                props.onClick();
                setDisabled(true);
                setTimeout(() => {
                    setDisabled(false);
                }, 1000); // Disable for 1 seconds
            }
        } else {props.onClick()}
    };
    
    // ======= classNames =======
    
    const size = props.size?.toLowerCase() || ""
    const sizeClass =           // 20px Default
    size === "m" ?  "size-m"  : // 25px
    size === "l" ?  "size-l"  : // 30px
    "";
    
    const classNames = [
        "width-fit-con", // Counters centering margin
        props.className,
        sizeClass,
        props.onClick && "cursor-click",
    ].filter(Boolean).join(" ");
    
    if (!icon) return <></>;

    return (
        <Tooltip {...tooltipProps} fallback={<Skeleton icon noSkeleton={props.noSkeleton} />}>
            
            <div className={classNames} onClick={() => props.onClick && handleClick()}>
                <ShopifyIcon source={sourceIcon} tone={tone}/>
            </div>

        </Tooltip>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    tone: PropTypes.string,
    clickTimeout: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    noSkeleton: PropTypes.bool,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    enterDelay: PropTypes.number,
    noArrow: PropTypes.bool,
};
