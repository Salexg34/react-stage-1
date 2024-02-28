import "./style.css";

const Badge = ({ position, badgeValue }) => {
    const badgeClass = `badge ${position}`

    return (
        <div className={badgeClass}>
            {badgeValue}
        </div>
    )
}

export default Badge;
